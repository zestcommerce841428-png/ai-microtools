import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Returns null when Supabase env vars aren't set, so caching/rate-limiting
 * degrade gracefully to "always call OpenRouter" during local dev.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  if (!client) {
    client = createClient(url, serviceKey, {
      auth: { persistSession: false },
    });
  }

  return client;
}
