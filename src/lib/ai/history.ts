import { getSupabaseServerClient } from "@/lib/supabase/server";

/** Best-effort save of a signed-in user's generation for their account
 *  history page. Uses the admin client since this always runs server-side
 *  right after a successful generation — failures here shouldn't block the
 *  response the user is waiting on. */
export async function saveGenerationForUser(
  userId: string,
  toolSlug: string,
  toolName: string,
  inputValues: Record<string, string>,
  output: string[]
): Promise<void> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return;

  const { error } = await supabase.from("saved_generations").insert({
    user_id: userId,
    tool_slug: toolSlug,
    tool_name: toolName,
    input_json: inputValues,
    output_json: output,
  });

  if (error) {
    console.error(`Failed to save generation history for user ${userId}`, error);
  }
}
