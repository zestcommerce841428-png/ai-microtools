import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { BlogPost, BlogPostSummary } from "./types";

let client: SupabaseClient | null = null;

// Public, anon-key client — blog_posts' only RLS policy is "public can
// read," so this deliberately doesn't use the service-role admin client
// that lib/supabase/server.ts uses for privileged tables.
function getClient(): SupabaseClient {
  if (!client) {
    client = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      auth: { persistSession: false },
    });
  }
  return client;
}

const SUMMARY_COLUMNS = "slug, title, description, category, published_at";

export async function listPostSummaries(limit = 500): Promise<BlogPostSummary[]> {
  const { data, error } = await getClient()
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
  const { data, error } = await getClient().from("blog_posts").select("category");
  if (error) {
    console.error("listCategories failed", error);
    return [];
  }
  return [...new Set((data ?? []).map((row) => row.category as string))].sort();
}

export async function searchPosts(query: string | null, category: string | null, limit = 60): Promise<BlogPostSummary[]> {
  let builder = getClient().from("blog_posts").select(SUMMARY_COLUMNS);

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
  const { data, error } = await getClient()
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
  const { data, error } = await getClient().from("blog_posts").select("slug");
  if (error) {
    console.error("listAllSlugs failed", error);
    return [];
  }
  return (data ?? []).map((row) => row.slug as string);
}
