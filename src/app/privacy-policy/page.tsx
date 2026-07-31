import type { Metadata } from "next";
import Link from "next/link";
import StaticPage from "@/components/StaticPage";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles data, cookies, and third-party services.`,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <StaticPage title="Privacy Policy" subtitle="Last updated: July 31, 2026">
      <p>
        {SITE_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides free AI-powered text generation
        tools at {SITE_URL}. This policy explains what data is involved when you use the site and
        why.
      </p>

      <h2>What we collect</h2>
      <p>
        There is no account system — you don&apos;t need to sign up or log in to use any tool. When
        you submit a form on a tool page, the text you enter is sent to our server, forwarded to our
        AI provider (OpenRouter) to generate a result, and the input/output pair may be cached to
        avoid repeat API calls for identical requests. We don&apos;t ask for or store names, emails,
        or any other personal details as part of using a tool.
      </p>
      <p>
        We derive a one-way hash of your IP address to enforce a daily usage limit per tool, so a
        single visitor can&apos;t exhaust our AI budget. That hash isn&apos;t reversible back to your
        IP and isn&apos;t linked to anything else.
      </p>

      <h2>Cookies and ads</h2>
      <p>
        This site may show ads served by Google AdSense. Google and its partners may use cookies to
        serve ads based on your prior visits to this or other websites. You can opt out of
        personalized advertising by visiting{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>
        .
      </p>
      <p>
        We also use Cloudflare Turnstile on some forms, a bot-detection check that runs in your
        browser to confirm you&apos;re human before a request is processed. It doesn&apos;t track you
        across sites.
      </p>

      <h2>Third parties we use</h2>
      <ul>
        <li>OpenRouter — processes your input to generate the AI output.</li>
        <li>Supabase — stores cached generation results and rate-limit counters.</li>
        <li>Cloudflare — network/CDN, bot protection.</li>
        <li>Vercel — hosting.</li>
        <li>Google AdSense — ad serving (if enabled on this site).</li>
      </ul>

      <h2>Your choices</h2>
      <p>
        Since we don&apos;t maintain user accounts, there&apos;s no login data to delete. If
        you&apos;re concerned about a specific request you made, contact us and we can help locate
        and remove the cached entry for it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the site evolves. Material changes will update the &ldquo;last
        updated&rdquo; date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach out via the{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </StaticPage>
  );
}
