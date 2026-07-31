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
