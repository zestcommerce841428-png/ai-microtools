const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

// Primary is a cheap paid model, not a free one — free-tier OpenRouter models
// were tested here and produced garbled multilingual/repeated-character
// artifacts in longer outputs, which isn't acceptable for user-facing content.
// gemini-2.5-flash-lite costs a fraction of a cent per generation, so quality
// wins over the marginal savings. The free model is kept only as a last-resort
// fallback for reliability during a paid-model outage, not for routine cost
// savings. OpenRouter's model lineup changes often (renames, deprecations) —
// check https://openrouter.ai/models before assuming these slugs still exist.
const MODEL_CHAIN = [
  process.env.OPENROUTER_MODEL_PRIMARY || "google/gemini-2.5-flash-lite",
  process.env.OPENROUTER_MODEL_FALLBACK || "openai/gpt-oss-20b:free",
];

export interface GenerateParams {
  system: string;
  user: string;
  maxTokens: number;
}

export async function generateWithOpenRouter({
  system,
  user,
  maxTokens,
}: GenerateParams): Promise<{ text: string; model: string }> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not set");
  }

  let lastError: unknown;

  for (const model of MODEL_CHAIN) {
    try {
      const res = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.SITE_URL || "http://localhost:3000",
          "X-Title": "AI Microtools",
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
          max_tokens: maxTokens,
          temperature: 0.8,
        }),
      });

      if (!res.ok) {
        lastError = new Error(`OpenRouter ${model} responded ${res.status}: ${await res.text()}`);
        continue;
      }

      const data = await res.json();
      const content = data?.choices?.[0]?.message?.content;

      if (typeof content === "string" && content.trim().length > 0) {
        return { text: content, model };
      }

      lastError = new Error(`OpenRouter ${model} returned empty content`);
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("All OpenRouter models failed");
}

export function parseListResponse(text: string): string[] {
  return text
    .split("\n")
    .map((line) =>
      line
        .replace(/^\s*\d+[.)]\s*/, "")
        .replace(/^\s*[-*]\s*/, "")
        .replace(/^["']|["']$/g, "")
        .trim()
    )
    .filter((line) => line.length > 0);
}
