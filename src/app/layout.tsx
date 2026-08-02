import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { categories, toolSummaries } from "@/lib/tools/summaries";
import ThemeToggle from "@/components/ThemeToggle";
import SettingsPanel from "@/components/SettingsPanel";
import AccessibilityRuntime from "@/components/AccessibilityRuntime";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import AuthStatus from "@/components/AuthStatus";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

// Runs before hydration to apply the saved/system theme, color theme, and
// accessibility settings without a flash of the wrong one.
// suppressHydrationWarning on <html> below is required because this
// mutates classes/attributes before React hydrates. The class/filter maps
// here mirror src/lib/accessibility.ts — kept inline (no imports) since
// this has to run as a plain synchronous script before any bundle loads.
const THEME_INIT_SCRIPT = `(function(){
try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}
try{var t=localStorage.getItem('theme-color');if(t&&t!=='default')document.documentElement.setAttribute('data-theme',t);}catch(e){}
try{var bg=localStorage.getItem('bg-theme');if(bg&&bg!=='default')document.documentElement.setAttribute('data-bg-theme',bg);}catch(e){}
try{
var raw=localStorage.getItem('a11y-settings');
if(raw){
var a=JSON.parse(raw);
var root=document.documentElement;
var boolMap={dyslexiaFont:'a11y-dyslexia-font',boldText:'a11y-bold-text',justifyText:'a11y-justify',paragraphSpacing:'a11y-para-spacing',underlineLinks:'a11y-underline-links',highlightLinks:'a11y-highlight-links',highlightHeadings:'a11y-highlight-headings',highlightControls:'a11y-highlight-controls',monochromeLinks:'a11y-monochrome-links',bigCursor:'a11y-big-cursor',enhancedFocus:'a11y-enhanced-focus',persistentFocus:'a11y-persistent-focus',highlightActiveField:'a11y-highlight-active-field',stopAnimations:'a11y-stop-animations',reduceHoverMotion:'a11y-reduce-hover',slowTransitions:'a11y-slow-transitions',bigClickTargets:'a11y-big-targets',hideImages:'a11y-hide-images',leftAlignText:'a11y-left-align',wideLineLength:'a11y-line-length',hideDecorative:'a11y-hide-decorative',reduceTransparency:'a11y-reduce-transparency',largerFormLabels:'a11y-large-labels',largerIcons:'a11y-large-icons',highVisPlaceholders:'a11y-hv-placeholders'};
for(var k in boolMap){if(a[k])root.classList.add(boolMap[k]);}
var stepMap={lineHeight:{relaxed:'a11y-line-relaxed',loose:'a11y-line-loose'},letterSpacing:{wide:'a11y-tracking-wide',wider:'a11y-tracking-wider'},wordSpacing:{wide:'a11y-word-wide',wider:'a11y-word-wider'}};
for(var sk in stepMap){var cls=stepMap[sk][a[sk]];if(cls)root.classList.add(cls);}
if(a.fontSize&&a.fontSize!==100)root.style.fontSize=a.fontSize+'%';
if(a.pageZoom&&a.pageZoom!==100)root.style.setProperty('zoom',a.pageZoom+'%');
var f=[];
if(a.protanopia)f.push('url(#a11y-protanopia)');
if(a.deuteranopia)f.push('url(#a11y-deuteranopia)');
if(a.tritanopia)f.push('url(#a11y-tritanopia)');
if(a.grayscale)f.push('grayscale(1)');
if(a.invertColors)f.push('invert(1) hue-rotate(180deg)');
if(a.lowSaturation)f.push('saturate(0.45)');
if(a.sepia)f.push('sepia(0.55)');
if(a.warmDim)f.push('brightness(0.92) sepia(0.12)');
if(a.highContrast)f.push('contrast(1.35)');
if(f.length){var ft=document.getElementById('a11y-filter-scope')||root;ft.style.filter=f.join(' ');}
}
}catch(e){}
})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "AI Microtools — Free AI Generators";
const description = `${toolSummaries.length}+ free AI-powered generators for business names, slogans, bios, resumes, and more. Free account required, no credit card.`;

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
    card: "summary_large_image",
    title,
    description,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/tools?category={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-icon.png`,
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
      <body className="min-h-full flex flex-col bg-background">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={organizationJsonLd} />
        <AccessibilityRuntime />
        <ScrollToTopButton />
        {/* Color-filter accessibility effects (grayscale, contrast, colorblind
            filters, etc.) are applied to this wrapper, not <html>/<body>.
            filter/backdrop-filter create a new containing block for
            position:fixed descendants, which would otherwise trap the
            settings modal and reading-guide overlays inside whatever
            element the filter lives on instead of the viewport. Keeping
            AccessibilityRuntime's overlays and the settings modal (portaled
            to document.body) outside this wrapper avoids that trap. */}
        <div id="a11y-filter-scope" className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 border-b border-surface-border bg-surface/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white p-1 shadow-sm ring-1 ring-black/5">
                <Image src="/logo-icon.png" alt="" width={24} height={24} preload />
              </span>
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
              <AuthStatus />
              <SettingsPanel />
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="flex flex-1 flex-col">{children}</main>

        <footer className="border-t border-surface-border px-4 py-10">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
              <div className="max-w-sm">
                <p className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white p-1 shadow-sm ring-1 ring-black/5">
                    <Image src="/logo-icon.png" alt="" width={20} height={20} />
                  </span>
                  {SITE_NAME}
                </p>
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
            <p className="border-t border-surface-border pt-6 text-xs text-zinc-500 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
          </div>
        </footer>
        </div>
      </body>
    </html>
  );
}
