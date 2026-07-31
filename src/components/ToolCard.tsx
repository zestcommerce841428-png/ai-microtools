import Link from "next/link";

interface ToolCardProps {
  slug: string;
  name: string;
  tagline: string;
  /** Shown as a small eyebrow label above the name — omit when the card is
   *  already grouped under a category heading (e.g. on the tools index). */
  category?: string;
}

export default function ToolCard({ slug, name, tagline, category }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${slug}`}
      className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
    >
      {category && (
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{category}</p>
      )}
      <h3 className={`text-lg font-semibold text-zinc-900 dark:text-zinc-50 ${category ? "mt-1" : ""}`}>
        {name}
      </h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{tagline}</p>
    </Link>
  );
}
