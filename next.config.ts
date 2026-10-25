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
 *
 * No Cross-Origin-Opener-Policy: GTM Preview (Tag Assistant) opens the site in
 * a popup and talks to it through that window reference, which any COOP value
 * other than unsafe-none severs, so Preview could never connect. Messages from
 * other windows are filtered in EdmingleProvider instead.
 */
const LOCKDOWN_DIRECTIVES = "base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'";
const ENFORCED_CSP = `${LOCKDOWN_DIRECTIVES}; upgrade-insecure-requests`;

/**
 * Candidate script/connect/frame allow-list, sent Report-Only so it never
 * blocks anything: browsers just log each violation in the DevTools console.
 * Tags added inside GTM can load from hosts this repo can't see, so check the
 * console with GTM Preview on, add any legitimate hosts, then merge this into
 * the enforced policy. 'unsafe-inline' stays because Next.js emits inline
 * scripts on statically rendered pages (nonces would force dynamic rendering).
 */
const isDev = process.env.NODE_ENV === "development";
const REPORT_ONLY_CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://code.jquery.com https://login.learnwithalb.com https://www.youtube.com`,
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.doubleclick.net https://www.google.com https://www.googleadservices.com",
  "frame-src 'self' https://login.learnwithalb.com https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com https://*.doubleclick.net",
  "img-src 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  // upgrade-insecure-requests is left out: browsers ignore it (with a console
  // warning) in a Report-Only policy.
  LOCKDOWN_DIRECTIVES,
].join("; ");

const SECURITY_HEADERS = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Content-Security-Policy", value: ENFORCED_CSP },
  { key: "Content-Security-Policy-Report-Only", value: REPORT_ONLY_CSP },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Every next/image source is a local file, so no remote host is allowed
    // (an empty list blocks all of them). The YouTube thumbnails are plain
    // <img> tags and never touch the optimizer.
    remotePatterns: [],
    // Only these public folders can be optimized; anything else gets a 400.
    // search: "" rejects query strings so the optimizer can't be fed variants.
    localPatterns: [
      { pathname: "/images/**", search: "" },
      { pathname: "/flags/**", search: "" },
      { pathname: "/icons/**", search: "" },
    ],
    // SVGs are served as-is (next/image skips the optimizer for .svg sources),
    // never rasterized server-side.
    dangerouslyAllowSVG: false,
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
