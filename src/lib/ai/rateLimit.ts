import { getSupabaseServerClient } from "@/lib/supabase/server";

const DAILY_LIMIT_PER_USER_PER_TOOL = Number(process.env.DAILY_LIMIT_PER_USER_PER_TOOL ?? 100);

/** Daily generation limit per signed-in user per tool. Accounts are required
 *  to generate at all, so this is the only rate limit in the system. */
export async function checkAndIncrementUserRateLimit(
  userId: string,
  toolSlug: string
): Promise<{ allowed: boolean }> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return { allowed: true };

  const day = new Date().toISOString().slice(0, 10);

  const { data: existing } = await supabase
    .from("user_rate_limits")
    .select("count")
    .eq("user_id", userId)
    .eq("day", day)
    .eq("tool_slug", toolSlug)
    .maybeSingle();

  const currentCount = existing?.count ?? 0;

  if (currentCount >= DAILY_LIMIT_PER_USER_PER_TOOL) {
    return { allowed: false };
  }

  await supabase
    .from("user_rate_limits")
    .upsert(
      { user_id: userId, day, tool_slug: toolSlug, count: currentCount + 1 },
      { onConflict: "user_id,day,tool_slug" }
    );

  return { allowed: true };
}
