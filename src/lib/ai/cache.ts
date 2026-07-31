import { sha256Hex } from "@/lib/hash";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function hashInput(toolSlug: string, values: Record<string, string>): Promise<string> {
  const normalized = JSON.stringify(
    Object.keys(values)
      .sort()
      .reduce<Record<string, string>>((acc, key) => {
        acc[key] = (values[key] ?? "").trim().toLowerCase();
        return acc;
      }, {})
  );

  return sha256Hex(`${toolSlug}:${normalized}`);
}

export async function getCachedResult(toolSlug: string, inputHash: string): Promise<string[] | null> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return null;

  const { data } = await supabase
    .from("generation_cache")
    .select("output_json")
    .eq("tool_slug", toolSlug)
    .eq("input_hash", inputHash)
    .maybeSingle();

  return (data?.output_json as string[] | undefined) ?? null;
}

export async function setCachedResult(
  toolSlug: string,
  inputHash: string,
  inputValues: Record<string, string>,
  output: string[],
  model: string
): Promise<void> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return;

  await supabase.from("generation_cache").upsert(
    {
      tool_slug: toolSlug,
      input_hash: inputHash,
      input_json: inputValues,
      output_json: output,
      model_used: model,
    },
    { onConflict: "tool_slug,input_hash" }
  );
}
