import { sha256Hex } from "@/lib/hash";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const DAILY_LIMIT_PER_IP_PER_TOOL = Number(process.env.DAILY_LIMIT_PER_IP_PER_TOOL ?? 20);

export async function checkAndIncrementRateLimit(
  ip: string,
  toolSlug: string
): Promise<{ allowed: boolean }> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return { allowed: true };

  const ipHash = await sha256Hex(ip);
  const day = new Date().toISOString().slice(0, 10);

  const { data: existing } = await supabase
    .from("rate_limits")
    .select("count")
    .eq("ip_hash", ipHash)
    .eq("day", day)
    .eq("tool_slug", toolSlug)
    .maybeSingle();

  const currentCount = existing?.count ?? 0;

  if (currentCount >= DAILY_LIMIT_PER_IP_PER_TOOL) {
    return { allowed: false };
  }

  await supabase
    .from("rate_limits")
    .upsert(
      { ip_hash: ipHash, day, tool_slug: toolSlug, count: currentCount + 1 },
      { onConflict: "ip_hash,day,tool_slug" }
    );

  return { allowed: true };
}
