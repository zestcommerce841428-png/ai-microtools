export interface ToolInputField {
  name: string;
  label: string;
  placeholder?: string;
  type: "text" | "select";
  options?: string[];
  required?: boolean;
}

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolPrompt {
  system: string;
  user: string;
}

export interface ToolConfig {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  inputFields: ToolInputField[];
  howTo: string[];
  faq: ToolFaq[];
  resultCount: number;
  maxTokens: number;
  /** "list" (default): N interchangeable short results, each its own copy card.
   *  "document": one cohesive multi-paragraph result (outlines, FAQs, page drafts). */
  resultKind?: "list" | "document";
  buildPrompt: (values: Record<string, string>) => ToolPrompt;
}
