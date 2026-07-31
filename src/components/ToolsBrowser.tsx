"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ToolSummary } from "@/lib/tools/summaries";

interface ToolsBrowserProps {
  tools: ToolSummary[];
  categories: string[];
  initialCategory?: string | null;
}

export default function ToolsBrowser({ tools, categories, initialCategory = null }: ToolsBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesQuery =
        !q || tool.name.toLowerCase().includes(q) || tool.tagline.toLowerCase().includes(q);
      const matchesCategory = !activeCategory || tool.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [tools, query, activeCategory]);

  const grouped = useMemo(() => {
    const groups = new Map<string, ToolSummary[]>();
    for (const tool of filtered) {
      const list = groups.get(tool.category) ?? [];
      list.push(tool);
      groups.set(tool.category, list);
    }
    return groups;
  }, [filtered]);

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools… e.g. resume, wedding, instagram"
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              activeCategory === null
                ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                : "border-zinc-300 text-zinc-600 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                  : "border-zinc-300 text-zinc-600 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-500">No tools match &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className="flex flex-col gap-10">
          {[...grouped.entries()].map(([category, categoryTools]) => (
            <section key={category}>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{category}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {categoryTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
                  >
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {tool.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{tool.tagline}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
