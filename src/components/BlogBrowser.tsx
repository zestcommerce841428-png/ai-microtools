"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { BlogPostSummary } from "@/lib/blog/types";

interface BlogBrowserProps {
  initialPosts: BlogPostSummary[];
  categories: string[];
  initialCategory?: string | null;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogBrowser({ initialPosts, categories, initialCategory = null }: BlogBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory);
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestId = useRef(0);
  const isFirstRender = useRef(true);

  function updateQuery(value: string) {
    setQuery(value);
    if (!value.trim() && !activeCategory) {
      setPosts(initialPosts);
      setLoading(false);
    }
  }

  function updateCategory(value: string | null) {
    setActiveCategory(value);
    if (!query.trim() && !value) {
      setPosts(initialPosts);
      setLoading(false);
    }
  }

  useEffect(() => {
    // The server already sent the right list for (query="", category=initialCategory) —
    // skip the redundant fetch on mount and only hit the API once the user changes something.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!query.trim() && !activeCategory) {
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);
    const thisRequest = ++requestId.current;

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (activeCategory) params.set("category", activeCategory);

      try {
        const res = await fetch(`/api/blog/search?${params.toString()}`);
        const data = await res.json();
        if (thisRequest === requestId.current) {
          setPosts(data.posts ?? []);
        }
      } catch {
        if (thisRequest === requestId.current) setPosts([]);
      } finally {
        if (thisRequest === requestId.current) setLoading(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, activeCategory]);

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          placeholder="Search the blog… e.g. resume, wedding speech, cold email"
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 focus:border-primary-ring focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => updateCategory(null)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              activeCategory === null
                ? "border-primary bg-primary text-primary-content"
                : "border-zinc-300 text-zinc-600 hover:border-primary-ring dark:border-zinc-700 dark:text-zinc-400"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => updateCategory(category)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-content"
                  : "border-zinc-300 text-zinc-600 hover:border-primary-ring dark:border-zinc-700 dark:text-zinc-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-zinc-500 dark:text-zinc-500">Searching…</p>
      ) : posts.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-500">No posts match &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-xl border border-surface-border bg-surface p-5 transition hover:border-primary-ring"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
                <span>{formatDate(post.published_at)}</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium uppercase tracking-wide">{post.category}</span>
              </div>
              <h2 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{post.title}</h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{post.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
