export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: BlogSection[];
  /** Tool slugs (from the tools registry) to link at the end of the post. */
  relatedTools: string[];
}
