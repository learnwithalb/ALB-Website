/** Central registry of static, indexable routes — the source of truth for the
 *  sitemap and navigation-level SEO. Blog article routes are derived from data. */

export const STATIC_ROUTES: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/soft-skills-training-online", priority: 0.8, changeFrequency: "monthly" },
  { path: "/language-classes-kids-online", priority: 0.8, changeFrequency: "monthly" },
  { path: "/success-stories", priority: 0.9, changeFrequency: "weekly" },
  { path: "/partner-with-academy-of-languages-and-beyond", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/frequently-asked-questions", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "daily" },
  { path: "/services", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.6, changeFrequency: "monthly" },
  { path: "/terms-and-condition", priority: 0.6, changeFrequency: "monthly" },
];

export const COURSE_ROUTES = [
  "/courses/french-language-course-online",
  "/courses/german-language-course-online",
  "/courses/english-speaking-course-online-india",
] as const;
