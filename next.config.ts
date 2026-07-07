import type { NextConfig } from "next";

/**
 * Permanent (301) redirects from the old routes to the new SEO-friendly slugs.
 * Keeps bookmarks, backlinks, and previously-indexed URLs working after the
 * URL-structure migration.
 */
const LEGACY_REDIRECTS: { source: string; destination: string }[] = [
  { source: "/courses/french", destination: "/courses/french-language-course-online" },
  { source: "/courses/german", destination: "/courses/german-language-course-online" },
  { source: "/courses/ielts", destination: "/courses/english-speaking-course-online-india" },
  { source: "/junior", destination: "/language-classes-kids-online" },
  { source: "/beyond", destination: "/soft-skills-training-online" },
  { source: "/about", destination: "/about-us" },
  { source: "/partner", destination: "/partner-with-academy-of-languages-and-beyond" },
  { source: "/faq", destination: "/frequently-asked-questions" },
  { source: "/privacy", destination: "/privacy-policy" },
  { source: "/terms", destination: "/terms-and-condition" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
