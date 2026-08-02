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
      className="rounded-xl border border-surface-border bg-surface p-5 transition hover:border-primary-ring"
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
