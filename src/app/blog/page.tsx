import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog/registry";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Tips on getting better results from ${SITE_NAME}'s free AI tools.`,
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-16">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Blog</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Practical tips for getting better results out of the tools on this site.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-xl border border-surface-border bg-surface p-5 transition hover:border-primary-ring"
          >
            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {post.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
