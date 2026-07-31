import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { tools, getToolBySlug } from "@/lib/tools/registry";
import ToolForm from "@/components/ToolForm";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  const title = `${tool.name} — Free AI Tool`;
  const url = `${SITE_URL}/tools/${tool.slug}`;

  return {
    title,
    description: tool.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description: tool.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: tool.description,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const url = `${SITE_URL}/tools/${tool.slug}`;

  const webApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      { "@type": "ListItem", position: 3, name: tool.name, item: url },
    ],
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-10 px-4 py-16">
      <JsonLd data={webApplicationJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <nav aria-label="Breadcrumb" className="w-full max-w-2xl text-sm text-zinc-500 dark:text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/tools" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Tools
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-700 dark:text-zinc-300">{tool.name}</li>
        </ol>
      </nav>

      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">{tool.category}</p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {tool.name}
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{tool.tagline}</p>
      </div>

      <ToolForm tool={{ slug: tool.slug, name: tool.name, inputFields: tool.inputFields }} />

      <AdSlot />

      <section className="w-full max-w-2xl rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">How it works</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
          {tool.howTo.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="w-full max-w-2xl rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">FAQ</h2>
        <div className="mt-3 flex flex-col gap-4">
          {tool.faq.map((item, i) => (
            <div key={i}>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.question}</p>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Link
        href="/tools"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to all tools
      </Link>
    </div>
  );
}
