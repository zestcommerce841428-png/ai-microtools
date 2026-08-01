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
  "Finance & Personal Finance": "Budgets, side hustles, and money messages for everyday finances.",
  "Startup & Fundraising": "Pitch decks, investor emails, and launch copy for founders.",
  "Sales & Outreach": "Cold emails, follow-ups, and objection handling that close deals.",
  "Tech & Developer Tools": "Commit messages, PR descriptions, and plain-English explainers for code.",
  "SEO & Content Strategy": "Meta tags, keyword clusters, and content planning for search.",
  "Presentations & Public Speaking": "Outlines, openers, and closers for talks and speeches.",
  "Parenting & Family": "Invitations, stories, and notes for family life.",
  "Pet Care": "Bios, captions, and reminders for pets and their people.",
  "Automotive": "Listings, ads, and reminders for car sales and service.",
  "Insurance": "Explainers, reminders, and bios for agents and clients.",
  "Home & DIY": "Checklists and project plans for home projects and moves.",
  "Productivity & Self-Improvement": "Affirmations, habits, and schedules to help you get things done.",
};

export function getCategoryCounts(): { category: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const tool of toolSummaries) {
    counts.set(tool.category, (counts.get(tool.category) ?? 0) + 1);
  }
  return categories.map((category) => ({ category, count: counts.get(category) ?? 0 }));
}
