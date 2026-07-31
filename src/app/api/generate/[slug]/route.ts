import type { NextRequest } from "next/server";
import { getToolBySlug } from "@/lib/tools/registry";
import { generateWithOpenRouter, parseListResponse } from "@/lib/ai/openrouter";
import { getCachedResult, setCachedResult, hashInput } from "@/lib/ai/cache";
import { checkAndIncrementRateLimit } from "@/lib/ai/rateLimit";
import { verifyTurnstile } from "@/lib/ai/turnstile";

// Web Crypto (used for hashing) is available on both runtimes; edge keeps
// this cheap and fast since there's no Node-specific API in the hot path.
export const runtime = "edge";

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return Response.json({ error: "Unknown tool" }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { values, turnstileToken } = body as {
    values?: Record<string, string>;
    turnstileToken?: string;
  };

  const missingField = tool.inputFields.find(
    (field) => field.required && !values?.[field.name]?.trim()
  );
  if (!values || missingField) {
    return Response.json(
      { error: `Missing required field: ${missingField?.label ?? "input"}` },
      { status: 400 }
    );
  }

  const ip = getClientIp(request);

  const humanVerified = await verifyTurnstile(turnstileToken, ip);
  if (!humanVerified) {
    return Response.json({ error: "Verification failed. Please retry." }, { status: 403 });
  }

  const rateLimit = await checkAndIncrementRateLimit(ip, tool.slug);
  if (!rateLimit.allowed) {
    return Response.json(
      { error: "Daily limit reached for this tool. Try again tomorrow." },
      { status: 429 }
    );
  }

  const inputHash = await hashInput(tool.slug, values);

  const cached = await getCachedResult(tool.slug, inputHash);
  if (cached) {
    return Response.json({ results: cached, cached: true });
  }

  const { system, user } = tool.buildPrompt(values);

  let generated: { text: string; model: string };
  try {
    generated = await generateWithOpenRouter({ system, user, maxTokens: tool.maxTokens });
  } catch (err) {
    console.error(`OpenRouter generation failed for ${tool.slug}`, err);
    return Response.json(
      { error: "Generation is temporarily unavailable. Please try again shortly." },
      { status: 502 }
    );
  }

  const results =
    tool.resultKind === "document"
      ? [generated.text.trim()]
      : parseListResponse(generated.text).slice(0, tool.resultCount);

  await setCachedResult(tool.slug, inputHash, values, results, generated.model);

  return Response.json({ results, cached: false });
}
