/** Blog content model — typed data (no MDX), consistent with courseData.ts. */

export type ClusterId =
  | "french-canada"
  | "delf-dalf"
  | "german-immigration"
  | "ielts-english"
  | "india-learning";

/**
 * Optional "infographic" blocks that render inside a section, after its body.
 * A discriminated union so each block type stays type-safe in the post data.
 */
export type ContentBlock =
  | { type: "callout"; variant?: "info" | "tip" | "warn"; title?: string; body: string }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { type: "cards"; columns?: 2 | 3; items: { title: string; body?: string; bullets?: string[] }[] }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "numbered"; items: { title: string; body: string }[] }
  | { type: "chips"; title?: string; items: string[] }
  | { type: "phrases"; title?: string; items: { fr: string; en: string }[] };

export interface BlogSection {
  /** Renders as an <h2> and anchors the table of contents. */
  h2: string;
  /** One or more paragraphs (split on blank lines). Optional when purely visual. */
  body?: string;
  /** Optional infographic blocks rendered after the body. */
  blocks?: ContentBlock[];
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Optional <title> override; falls back to `title`. */
  metaTitle?: string;
  description: string;
  excerpt: string;
  cluster: ClusterId;
  isPillar: boolean;
  category: string;
  tags: string[];
  keywords: string[];
  author: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  accent: string;
  icon: string;
  /** Optional cover image (served from /public). Falls back to the accent panel. */
  coverImage?: string;
  /** True when the article is fully written (hides the outline placeholder). */
  complete?: boolean;
  sections: BlogSection[];
  faqs: BlogFaq[];
  /** Slugs of related articles for internal linking. */
  related: string[];
  /** Course routes this article should funnel toward. */
  relatedCourses: string[];
}

export interface Cluster {
  id: ClusterId;
  label: string;
  pillarSlug: string;
  accent: string;
  icon: string;
  description: string;
}
