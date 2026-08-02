import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // Passkey support (auth.registerPasskey / auth.signInWithPasskey /
      // auth.passkey.*) is gated behind this flag in the SDK — the project
      // already has passkeys enabled server-side (webauthn_rp_id etc.).
      auth: { experimental: { passkey: true } },
    }
  );
}
