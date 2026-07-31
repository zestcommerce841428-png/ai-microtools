import { createServerSupabaseClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function POST() {
  const sessionClient = await createServerSupabaseClient();
  const {
    data: { user },
  } = await sessionClient.auth.getUser();

  if (!user) {
    return Response.json({ error: "Not signed in" }, { status: 401 });
  }

  const admin = getSupabaseServerClient();
  if (!admin) {
    return Response.json({ error: "Account deletion is not configured" }, { status: 500 });
  }

  // saved_generations and user_rate_limits both reference auth.users with
  // ON DELETE CASCADE, so deleting the auth user cleans up their data too.
  const { error } = await admin.auth.admin.deleteUser(user.id);

  if (error) {
    console.error("Account deletion failed", error);
    return Response.json({ error: "Couldn't delete your account. Please try again." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
