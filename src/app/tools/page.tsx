import type { Metadata } from "next";
import { toolSummaries, categories } from "@/lib/tools/summaries";
import ToolsBrowser from "@/components/ToolsBrowser";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free AI Tools",
  description: `Browse ${toolSummaries.length}+ free AI-powered generators — no signup required.`,
  alternates: { canonical: `${SITE_URL}/tools` },
};

export default async function ToolsIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = category && categories.includes(category) ? category : null;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-16">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Free AI Tools</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {toolSummaries.length}+ tools. No signup. No credit card. Just generate.
        </p>
      </div>

      <ToolsBrowser tools={toolSummaries} categories={categories} initialCategory={initialCategory} />
    </div>
  );
}
