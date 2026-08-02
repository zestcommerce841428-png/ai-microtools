import { cookies } from "next/headers";
import { createServerSupabaseClient } from "@/lib/supabase/serverAuth";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { DEVICE_TRUST_COOKIE, hashDeviceToken } from "@/lib/auth/deviceTrust";

// Lists the current user's trusted devices for the account settings page —
// this is the only place a user can see and revoke what "trust this
// device" actually granted, since the login-time checkbox is a one-way
// opt-in with no other visibility into it.
export async function GET() {
  const sessionClient = await createServerSupabaseClient();
  const {
    data: { user },
  } = await sessionClient.auth.getUser();

  if (!user) {
    return Response.json({ devices: [] }, { status: 401 });
  }

  const admin = getSupabaseServerClient();
  if (!admin) {
    return Response.json({ devices: [] });
  }

  const { data, error } = await admin
    .from("trusted_devices")
    .select("id, user_agent, created_at, expires_at, device_token_hash")
    .eq("user_id", user.id)
    .gt("expires_at", new Date().toISOString())
    .order("created_at", { ascending: false });

  if (error) {
    console.error("device/list failed", error);
    return Response.json({ devices: [] });
  }

  const cookieStore = await cookies();
  const currentToken = cookieStore.get(DEVICE_TRUST_COOKIE)?.value;
  const currentHash = currentToken ? hashDeviceToken(currentToken) : null;

  const devices = (data ?? []).map(({ device_token_hash, ...rest }) => ({
    ...rest,
    isCurrentDevice: currentHash !== null && device_token_hash === currentHash,
  }));

  return Response.json({ devices });
}
