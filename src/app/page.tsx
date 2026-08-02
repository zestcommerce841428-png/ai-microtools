import Link from "next/link";
import { toolSummaries, categoryDescriptions, getCategoryCounts } from "@/lib/tools/summaries";
import ToolCard from "@/components/ToolCard";

const FEATURED_SLUGS = [
  "business-name-generator",
  "resume-bullet-point-generator",
  "instagram-bio-generator",
  "wedding-hashtag-generator",
  "baby-name-generator",
  "linkedin-headline-generator",
  "blog-post-title-generator",
  "faq-generator",
];

export default function Home() {
  const featured = FEATURED_SLUGS.map((slug) => toolSummaries.find((tool) => tool.slug === slug)).filter(
    (tool): tool is NonNullable<typeof tool> => Boolean(tool)
  );

  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Free AI Tools, One-Time Signup
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          {toolSummaries.length}+ AI-powered generators for business names, resumes, social bios,
          wedding speeches, and more. Free forever — just sign up once to start generating.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/signup"
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-content transition hover:bg-primary-hover"
          >
            Sign up free
          </Link>
          <Link
            href="/tools"
            className="rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
          >
            Browse all {toolSummaries.length} tools
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-16">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Popular tools</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((tool) => (
            <ToolCard
              key={tool.slug}
              slug={tool.slug}
              name={tool.name}
              tagline={tool.tagline}
              category={tool.category}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-24">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Browse by category</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {getCategoryCounts().map(({ category, count }) => (
            <Link
              key={category}
              href={`/tools?category=${encodeURIComponent(category)}`}
              className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{category}</h3>
                <span className="shrink-0 text-xs font-medium text-zinc-500">{count} tools</span>
              </div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {categoryDescriptions[category] ?? ""}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
