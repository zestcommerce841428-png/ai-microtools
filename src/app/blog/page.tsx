import type { Metadata } from "next";
import { listPostSummaries, listCategories, searchPosts } from "@/lib/blog/db";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import BlogBrowser from "@/components/BlogBrowser";

export const metadata: Metadata = {
  title: "Blog",
  description: `Tips on getting better results from ${SITE_NAME}'s free AI tools.`,
  alternates: { canonical: `${SITE_URL}/blog` },
};

export const revalidate = 3600;

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const [{ category }, categories] = await Promise.all([searchParams, listCategories()]);
  const initialCategory = category && categories.includes(category) ? category : null;
  const posts = initialCategory ? await searchPosts(null, initialCategory) : await listPostSummaries();

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-16">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Blog</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {posts.length}+ practical, specific posts — searchable by keyword or category.
        </p>
      </div>

      <BlogBrowser initialPosts={posts} categories={categories} initialCategory={initialCategory} />
    </div>
  );
}
