import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const CONTACT_EMAIL = "contact@zestcommerce.in";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE_NAME} team.`,
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <StaticPage title="Contact" subtitle="Questions, bug reports, or tool requests — all welcome.">
      <p>
        The fastest way to reach us is email:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>We typically reply within a couple of business days.</p>

      <h2>What to include</h2>
      <ul>
        <li>For bugs: which tool, what you entered, and what went wrong.</li>
        <li>For tool ideas: what the tool should do and who&apos;d use it.</li>
        <li>For anything else: just say hi — we read everything.</li>
      </ul>
    </StaticPage>
  );
}
