import type { Metadata } from "next";
import { buildMetadata } from "./seo";

/**
 * Central SEO registry — the single source of truth for page titles, meta
 * descriptions, and canonical paths, transcribed verbatim from the SEO
 * spreadsheet. Pages consume this via `pageMetadata(key)` instead of hardcoding.
 *
 * `path`     = the live route (used as the canonical URL).
 * `seoSlug`  = the spreadsheet's target SEO slug where it differs from `path`.
 *              Kept for a documented, redirect-based URL migration (see report);
 *              routes are NOT renamed here to avoid breaking existing links.
 */
export interface PageSeo {
  path: string;
  seoSlug?: string;
  title: string;
  description: string;
  keywords?: string[];
}

export const PAGE_SEO = {
  home: {
    path: "/",
    title: "Online foreign language courses with free soft-skills | ALB",
    description:
      "Academy of Languages and Beyond offers online foreign language courses with live classes, regular speaking sessions | Free online soft-skills certification",
    keywords: ["online language courses", "french course india", "german course", "ielts coaching", "soft skills"],
  },
  courses: {
    path: "/courses",
    title: "Online Foreign Language Courses | ALB",
    description:
      "Explore live online language courses designed for communication, confidence, and real-world success, including a free online soft-skills certification.",
    keywords: ["online language courses", "learn languages online", "language classes india"],
  },
  french: {
    path: "/courses/french-language-course-online",
    seoSlug: "/courses/french-language-course-online",
    title: "French Language Course Online | DELF, TCF, TEF Classes | ALB",
    description:
      "Live French language classes with expert trainers and speaking sessions | Earn free soft skills certification | DELF, TEF, TCF preparation",
    keywords: ["french course online", "DELF classes", "TEF Canada", "TCF Canada", "learn french india"],
  },
  german: {
    path: "/courses/german-language-course-online",
    seoSlug: "/courses/german-language-course-online",
    title: "Online German Language Course | Goethe German Classes | ALB",
    description:
      "Learn German online with live classes | Goethe and TestDaF prep. Build speaking confidence with free soft-skills classes.",
    keywords: ["german course online", "goethe zertifikat", "testdaf preparation", "learn german india"],
  },
  english: {
    path: "/courses/english-speaking-course-online-india",
    seoSlug: "/courses/english-speaking-course-online-india",
    title: "Learn English Online with Academy of Languages and Beyond | ALB",
    description:
      "Improve spoken English through live online classes with IELTS preparation and free soft skills classes for career growth.",
    keywords: ["english speaking course online", "ielts coaching", "spoken english india", "english classes"],
  },
  junior: {
    path: "/language-classes-kids-online",
    seoSlug: "/language-classes-kids-online",
    title: "Foreign Language Classes for Kids | Academy of Languages and Beyond",
    description:
      "Interactive online language classes for kids with expert teachers, speaking practice and engaging projects that make learning enjoyable.",
    keywords: ["language classes for kids", "french for children", "german for kids", "online kids language"],
  },
  beyond: {
    path: "/soft-skills-training-online",
    seoSlug: "/soft-skills-training-online",
    title: "Beyond | Soft Skills Training | Academy of Languages and Beyond",
    description:
      "Discover +Beyond, ALB's signature soft skills training programme covering communication, leadership, presentations, interviews and workplace readiness.",
    keywords: ["soft skills training online", "communication skills", "interview preparation", "professional readiness"],
  },
  about: {
    path: "/about-us",
    seoSlug: "/about-us",
    title: "About ALB | Academy of Languages and Beyond",
    description:
      "Learn the story behind Academy of Languages & Beyond & our mission to help learners speak confidently, communicate effectively and belong anywhere.",
    keywords: ["about ALB", "academy of languages and beyond", "language academy india"],
  },
  partner: {
    path: "/partner-with-academy-of-languages-and-beyond",
    seoSlug: "/partner-with-academy-of-languages-and-beyond",
    title: "Language Training Partner for Schools & Businesses | ALB",
    description:
      "Partner with Academy of Languages & Beyond to deliver language programmes with live training, reporting and learner support.",
    keywords: ["language training partner", "corporate language training", "institutional partnership"],
  },
  success: {
    path: "/success-stories",
    title: "Student Success Stories | Academy of Languages and Beyond",
    description:
      "Discover how students built confidence, cleared language exams and grabbed global opportunities through ALB's live online programmes.",
    keywords: ["student success stories", "ALB reviews", "learner testimonials"],
  },
  faq: {
    path: "/frequently-asked-questions",
    seoSlug: "/frequently-asked-questions",
    title: "Frequently Asked Questions | Academy of Languages and Beyond",
    description:
      "Have questions about our language courses? Find everything you need to know about admissions, classes, certifications, exams and learning at ALB.",
    keywords: ["language course faq", "ALB questions", "admissions certifications exams"],
  },
  privacy: {
    path: "/privacy-policy",
    seoSlug: "/privacy-policy",
    title: "Privacy Policy | Academy of Languages and Beyond",
    description:
      "Read the Privacy Policy of Academy of Languages and Beyond to understand how we collect, use and protect your personal information.",
  },
  terms: {
    path: "/terms-and-condition",
    seoSlug: "/terms-and-condition",
    title: "Terms & Conditions | Academy of Languages and Beyond",
    description:
      "Review the Terms & Conditions governing admissions, enrolments, payments, classes and use of Academy of Languages and Beyond's website and services.",
  },
  blog: {
    path: "/blog",
    title: "Language Learning Blog | Academy of Languages and Beyond",
    description:
      "Explore practical guides, exam tips and communication insights covering any language, study abroad and career development.",
    keywords: ["language learning blog", "exam tips", "study abroad guides"],
  },
  cert: {
    path: "/verify-certificate",
    title: "Certificate Verification | Academy of Languages and Beyond",
    description:
      "Instantly verify Academy of Languages and Beyond certificates online using your certificate ID and ensure the authenticity of learner credentials.",
  },
} satisfies Record<string, PageSeo>;

export type PageKey = keyof typeof PAGE_SEO;

/** Raw SEO record for a page. */
export function getSEO(key: PageKey): PageSeo {
  return PAGE_SEO[key];
}

/**
 * Next.js Metadata for a page, built from the central registry. Titles are
 * applied as absolute (they already include branding in the spreadsheet).
 */
export function pageMetadata(key: PageKey, overrides: Partial<Parameters<typeof buildMetadata>[0]> = {}): Metadata {
  const seo = getSEO(key);
  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    keywords: seo.keywords,
    absoluteTitle: true,
    ...overrides,
  });
}
