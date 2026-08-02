export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
  category: string;
  published_at: string;
}

export interface BlogPost extends BlogPostSummary {
  content: BlogSection[];
  related_tools: string[];
}
