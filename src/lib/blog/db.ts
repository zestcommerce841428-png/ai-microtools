import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { BlogPost, BlogPostSummary } from "./types";

let client: SupabaseClient | null | undefined;

// Public, anon-key client — blog_posts' only RLS policy is "public can
// read," so this deliberately doesn't use the service-role admin client
// that lib/supabase/server.ts uses for privileged tables.
//
// Returns null when the Supabase env vars aren't set, same as
// getSupabaseServerClient() — CI's build step runs without them (it's a
// pure lint/build gate, no secrets configured), and local dev is
// documented to work without a Supabase project set up. Every caller below
// degrades to an empty result rather than throwing, so `next build` still
// succeeds; only Vercel's actual build (which has real env vars) produces
// pages with real content.
function getClient(): SupabaseClient | null {
  if (client !== undefined) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  client = url && anonKey ? createClient(url, anonKey, { auth: { persistSession: false } }) : null;
  return client;
}

const SUMMARY_COLUMNS = "slug, title, description, category, published_at";

export async function listPostSummaries(limit = 500): Promise<BlogPostSummary[]> {
  const supabase = getClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select(SUMMARY_COLUMNS)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("listPostSummaries failed", error);
    return [];
  }
  return data ?? [];
}

export async function listCategories(): Promise<string[]> {
  const supabase = getClient();
  if (!supabase) return [];

  const { data, error } = await supabase.from("blog_posts").select("category");
  if (error) {
    console.error("listCategories failed", error);
    return [];
  }
  return [...new Set((data ?? []).map((row) => row.category as string))].sort();
}

export async function searchPosts(query: string | null, category: string | null, limit = 60): Promise<BlogPostSummary[]> {
  const supabase = getClient();
  if (!supabase) return [];

  let builder = supabase.from("blog_posts").select(SUMMARY_COLUMNS);

  if (query && query.trim()) {
    builder = builder.textSearch("search_vector", query.trim(), { type: "websearch", config: "english" });
  }
  if (category && category.trim()) {
    builder = builder.eq("category", category.trim());
  }

  const { data, error } = await builder.order("published_at", { ascending: false }).limit(limit);

  if (error) {
    console.error("searchPosts failed", error);
    return [];
  }
  return data ?? [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = getClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug, title, description, category, published_at, content, related_tools")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("getPostBySlug failed", error);
    return null;
  }
  return data as BlogPost | null;
}

export async function listAllSlugs(): Promise<string[]> {
  const supabase = getClient();
  if (!supabase) return [];

  const { data, error } = await supabase.from("blog_posts").select("slug");
  if (error) {
    console.error("listAllSlugs failed", error);
    return [];
  }
  return (data ?? []).map((row) => row.slug as string);
}
