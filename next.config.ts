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

/**
 * Security headers applied to every response. The CSP deliberately leaves
 * script/style sources open so Google Tag Manager and its tags keep working,
 * but locks down the directives that block clickjacking, plugin injection,
 * <base> hijacking and form hijacking.
 */
const SECURITY_HEADERS = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  {
    key: "Content-Security-Policy",
    value: "base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; upgrade-insecure-requests",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
