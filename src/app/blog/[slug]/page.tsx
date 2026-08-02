import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug } from "@/lib/blog/registry";
import { getToolBySlug } from "@/lib/tools/registry";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const relatedTools = post.relatedTools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE_NAME },
    url,
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-16">
      <JsonLd data={articleJsonLd} />

      <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 dark:text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
          </li>
        </ol>
      </nav>

      <div>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">{post.title}</h1>
      </div>

      <div className="flex flex-col gap-5 text-zinc-700 dark:text-zinc-300">
        {post.sections.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((paragraph, j) => (
              <p key={j} className="mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {relatedTools.length > 0 && (
        <section className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Try the tools mentioned here
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {relatedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:border-primary-ring dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
              >
                {tool.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <Link
        href="/blog"
        className="text-sm font-medium text-zinc-500 hover:text-primary"
      >
        ← Back to blog
      </Link>
    </div>
  );
}
