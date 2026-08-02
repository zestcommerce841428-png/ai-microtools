import { cookies } from "next/headers";
import { createServerSupabaseClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { DEVICE_TRUST_COOKIE, hashDeviceToken } from "@/lib/auth/deviceTrust";

export async function POST(request: Request) {
  const sessionClient = await createServerSupabaseClient();
  const {
    data: { user },
  } = await sessionClient.auth.getUser();

  if (!user) {
    return Response.json({ error: "Not signed in" }, { status: 401 });
  }

  const admin = getSupabaseServerClient();
  if (!admin) {
    return Response.json({ error: "Not configured" }, { status: 500 });
  }

  const body = await request.json().catch(() => ({}));
  const { id, all } = body as { id?: number; all?: boolean };

  if (!all && typeof id !== "number") {
    return Response.json({ error: "Missing device id" }, { status: 400 });
  }

  const baseQuery = admin.from("trusted_devices").delete().eq("user_id", user.id);
  const { error } = all ? await baseQuery : await baseQuery.eq("id", id);

  if (error) {
    console.error("device/revoke failed", error);
    return Response.json({ error: "Couldn't revoke device" }, { status: 500 });
  }

  // If the row backing THIS browser's cookie no longer exists (because it
  // was just revoked, individually or via "revoke all"), clear the cookie
  // too so it stops sending a token for a device that's no longer trusted.
  const cookieStore = await cookies();
  const currentToken = cookieStore.get(DEVICE_TRUST_COOKIE)?.value;
  if (currentToken) {
    const { data: stillValid } = await admin
      .from("trusted_devices")
      .select("id")
      .eq("user_id", user.id)
      .eq("device_token_hash", hashDeviceToken(currentToken))
      .maybeSingle();

    if (!stillValid) {
      cookieStore.delete(DEVICE_TRUST_COOKIE);
    }
  }

  return Response.json({ ok: true });
}
