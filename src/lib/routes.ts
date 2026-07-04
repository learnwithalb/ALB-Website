/** Central registry of static, indexable routes — the source of truth for the
 *  sitemap and navigation-level SEO. Blog article routes are derived from data. */

export const STATIC_ROUTES: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/beyond", priority: 0.8, changeFrequency: "monthly" },
  { path: "/junior", priority: 0.8, changeFrequency: "monthly" },
  { path: "/success-stories", priority: 0.7, changeFrequency: "weekly" },
  { path: "/partner", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "daily" },
  { path: "/services", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.2, changeFrequency: "monthly" },
];

export const COURSE_ROUTES = [
  "/courses/french",
  "/courses/german",
  "/courses/ielts",
  "/courses/spanish",
  "/courses/japanese",
  "/courses/korean",
  "/courses/delf",
  "/courses/tef",
] as const;
