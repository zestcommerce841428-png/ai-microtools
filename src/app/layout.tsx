import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { categories, toolSummaries } from "@/lib/tools/summaries";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

// Runs before hydration to apply the saved/system theme without a flash of
// the wrong one. suppressHydrationWarning on <html> below is required
// because this mutates the class before React hydrates.
const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "AI Microtools — Free AI Generators";
const description = `${toolSummaries.length}+ free AI-powered generators for business names, slogans, bios, resumes, and more. No signup, no credit card.`;

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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-50">
              AI Microtools
            </Link>
            <nav className="flex items-center gap-5">
              <Link
                href="/tools"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                All Tools
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                Blog
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="flex flex-1 flex-col">{children}</main>

        <footer className="border-t border-zinc-200 px-4 py-10 dark:border-zinc-800">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
              <div className="max-w-sm">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">{SITE_NAME}</p>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                  AI-generated suggestions — always verify names, trademarks, and availability before use.
                </p>
              </div>
              <nav aria-label="Tool categories" className="flex flex-col gap-2 text-sm">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">Categories</p>
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
              <nav aria-label="Site" className="flex flex-col gap-2 text-sm">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">Site</p>
                <Link href="/about" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100">
                  About
                </Link>
                <Link href="/blog" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100">
                  Blog
                </Link>
                <Link href="/contact" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100">
                  Contact
                </Link>
                <Link href="/privacy-policy" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100">
                  Terms of Service
                </Link>
              </nav>
            </div>
            <p className="border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
