import { cookies, headers } from "next/headers";
import { createServerSupabaseClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { DEVICE_TRUST_COOKIE, DEVICE_TRUST_MAX_AGE_SECONDS, generateDeviceToken, hashDeviceToken } from "@/lib/auth/deviceTrust";

// Called after a user opts into "trust this device" on a TOTP challenge
// screen. Only allowed once the session has actually reached aal2 — a
// device can't be marked trusted without proving the second factor at
// least once, otherwise this would just be a way to bypass MFA entirely.
export async function POST() {
  const sessionClient = await createServerSupabaseClient();
  const userAgent = (await headers()).get("user-agent");
  const {
    data: { user },
  } = await sessionClient.auth.getUser();

  if (!user) {
    return Response.json({ error: "Not signed in" }, { status: 401 });
  }

  const { data: aal } = await sessionClient.auth.mfa.getAuthenticatorAssuranceLevel();
  if (aal?.currentLevel !== "aal2") {
    return Response.json({ error: "Complete two-factor verification first" }, { status: 403 });
  }

  const admin = getSupabaseServerClient();
  if (!admin) {
    return Response.json({ error: "Not configured" }, { status: 500 });
  }

  const token = generateDeviceToken();
  const expiresAt = new Date(Date.now() + DEVICE_TRUST_MAX_AGE_SECONDS * 1000);

  const { error } = await admin.from("trusted_devices").insert({
    user_id: user.id,
    device_token_hash: hashDeviceToken(token),
    user_agent: userAgent,
    expires_at: expiresAt.toISOString(),
  });

  if (error) {
    console.error("device/trust failed", error);
    return Response.json({ error: "Couldn't trust this device" }, { status: 500 });
  }

  const cookieStore = await cookies();
  cookieStore.set(DEVICE_TRUST_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: DEVICE_TRUST_MAX_AGE_SECONDS,
  });

  return Response.json({ ok: true });
}
