import { tools } from "./registry";

export interface ToolSummary {
  slug: string;
  name: string;
  tagline: string;
  category: string;
}

export const toolSummaries: ToolSummary[] = tools.map((tool) => ({
  slug: tool.slug,
  name: tool.name,
  tagline: tool.tagline,
  category: tool.category,
}));

export const categories: string[] = Array.from(new Set(tools.map((tool) => tool.category)));

export const categoryDescriptions: Record<string, string> = {
  Business: "Naming, pitches, and foundational copy for starting a business.",
  Marketing: "Ad copy, email subject lines, and product descriptions that sell.",
  "Social Media": "Bios, captions, and post copy for every platform.",
  Career: "Resumes, cover letters, and LinkedIn copy that gets noticed.",
  "Life Events": "Speeches, messages, and cards for the moments that matter.",
  Fun: "Playful name generators for characters, teams, pets, and more.",
  Writing: "Blog titles, outlines, and content drafts.",
  Ecommerce: "Listings, policies, and customer messages for Amazon, Shopify, and more.",
  "Real Estate": "Listing descriptions, open house invites, and agent bios.",
  "Travel & Hospitality": "Airbnb listings, itineraries, and guest messages.",
  "Food & Restaurant": "Menu copy, restaurant bios, and daily specials.",
  "Events & Parties": "Invitations, RSVPs, and event descriptions.",
  "Health & Fitness": "Workout outlines, motivation, and trainer bios.",
  Education: "Study guides, quiz questions, and course descriptions.",
  "HR & Workplace": "Onboarding, recognition, and internal announcements.",
  "Nonprofit & Community": "Donation appeals, volunteer asks, and newsletters.",
  "Dating & Relationships": "Dating profiles, icebreakers, and love notes.",
  "Music & Entertainment": "Song titles, playlist names, and artist bios.",
  Gaming: "Channel names, team names, and character backstories.",
  "Website & SaaS": "Landing page copy, changelogs, and onboarding emails.",
  "Legal Templates": "Starter drafts for NDAs, policies, and contracts — not legal advice.",
  "Podcasting & Video": "Episode titles, show notes, and video descriptions.",
  "Personal Branding": "Bios and taglines for your website, portfolio, or media kit.",
  "Customer Support": "Replies and greetings for support tickets and live chat.",
};

export function getCategoryCounts(): { category: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const tool of toolSummaries) {
    counts.set(tool.category, (counts.get(tool.category) ?? 0) + 1);
  }
  return categories.map((category) => ({ category, count: counts.get(category) ?? 0 }));
}
