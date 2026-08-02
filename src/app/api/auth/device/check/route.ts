import { cookies } from "next/headers";
import { createServerSupabaseClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { DEVICE_TRUST_COOKIE, hashDeviceToken } from "@/lib/auth/deviceTrust";

// Called right after primary auth succeeds (password, OTP, or passkey), so
// LoginForm knows whether to skip the TOTP prompt for this device. Reads
// the user off the session cookie the just-completed sign-in already set —
// no bearer token needed, this is same-origin.
export async function POST() {
  const sessionClient = await createServerSupabaseClient();
  const {
    data: { user },
  } = await sessionClient.auth.getUser();

  if (!user) {
    return Response.json({ trusted: false });
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(DEVICE_TRUST_COOKIE)?.value;
  if (!token) {
    return Response.json({ trusted: false });
  }

  const admin = getSupabaseServerClient();
  if (!admin) {
    return Response.json({ trusted: false });
  }

  const { data, error } = await admin
    .from("trusted_devices")
    .select("id")
    .eq("user_id", user.id)
    .eq("device_token_hash", hashDeviceToken(token))
    .gt("expires_at", new Date().toISOString())
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("device/check failed", error);
    return Response.json({ trusted: false });
  }

  return Response.json({ trusted: Boolean(data) });
}
