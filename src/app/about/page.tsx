import type { Metadata } from "next";
import Link from "next/link";
import StaticPage from "@/components/StaticPage";
import { toolSummaries } from "@/lib/tools/summaries";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Why ${SITE_NAME} exists and how it stays free.`,
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <StaticPage title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} is a collection of {toolSummaries.length}+ free, AI-powered generators —
        business names, resumes, social bios, wedding speeches, product listings, and more. No
        signup, no account, no credit card. Type something in, get results, copy what you like.
      </p>

      <h2>Why it&apos;s free</h2>
      <p>
        There&apos;s no subscription because the goal isn&apos;t to sell you a plan — it&apos;s to
        be useful enough that you come back. The site is supported by ads and the occasional
        affiliate link, which means it stays free to use no matter how often you need it.
      </p>

      <h2>How it works</h2>
      <p>
        Each tool sends your input to an AI model to generate suggestions, tuned per-tool with a
        specific prompt so results actually fit the task (a business name generator and a wedding
        toast generator need very different instructions behind the scenes). Results are treated as
        a strong starting point, not a final answer — always double-check anything involving
        trademarks, facts, or people before using it.
      </p>

      <h2>Get in touch</h2>
      <p>
        Found a bug, have a tool idea, or just want to say hi? Visit the{" "}
        <Link href="/contact">contact page</Link>.
      </p>

      <h2>Explore</h2>
      <p>
        Browse everything at <Link href="/tools">all tools</Link>, or read the{" "}
        <Link href="/blog">blog</Link> for tips on getting better results from each one.
      </p>
    </StaticPage>
  );
}
