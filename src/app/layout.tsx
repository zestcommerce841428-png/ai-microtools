import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { categories } from "@/lib/tools/summaries";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "AI Microtools — Free AI Generators";
const description =
  "47+ free AI-powered generators for business names, slogans, bios, resumes, and more. No signup, no credit card.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title,
    description,
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black">
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-50">
              AI Microtools
            </Link>
            <Link
              href="/tools"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              All Tools
            </Link>
          </div>
        </header>

        <main className="flex flex-1 flex-col">{children}</main>

        <footer className="border-t border-zinc-200 px-4 py-10 dark:border-zinc-800">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:justify-between">
            <div className="max-w-sm">
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">{SITE_NAME}</p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                AI-generated suggestions — always verify names, trademarks, and availability before use.
              </p>
            </div>
            <nav aria-label="Tool categories" className="flex flex-col gap-2 text-sm">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/tools?category=${encodeURIComponent(category)}`}
                  className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
                >
                  {category} tools
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
