/** Blog content model — typed data (no MDX), consistent with courseData.ts. */

export type ClusterId =
  | "french-canada"
  | "delf-dalf"
  | "german-immigration"
  | "ielts-english"
  | "india-learning";

export interface BlogSection {
  /** Renders as an <h2> and anchors the table of contents. */
  h2: string;
  /** One or more paragraphs (split on blank lines). Professional placeholder. */
  body: string;
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
