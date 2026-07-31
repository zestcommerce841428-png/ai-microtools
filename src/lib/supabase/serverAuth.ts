import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/** Session-aware client for Server Components/Route Handlers — respects RLS
 *  using the current user's cookies, unlike the service_role admin client in
 *  lib/supabase/server.ts used for cache/rate-limit bookkeeping. */
export async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Called from a Server Component, where cookies can't be set —
            // middleware handles session refresh instead.
          }
        },
      },
    }
  );
}
