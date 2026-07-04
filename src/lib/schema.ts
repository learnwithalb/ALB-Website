/**
 * JSON-LD schema builders (schema.org). Pure functions returning plain objects
 * so they work in both Server and Client Components. Render the output with the
 * <JsonLd> component in components/seo/JsonLd.tsx.
 */
import { siteConfig } from "./constants";
import { SITE_URL, absoluteUrl } from "./seo";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: SITE_URL,
    logo: absoluteUrl("/images/alb-white.svg"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201305",
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.socials),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: siteConfig.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

export function faqSchema(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export interface CourseSchemaArgs {
  name: string;
  description: string;
  path: string;
  /** e.g. "French", "German" */
  about?: string;
}

export function courseSchema({ name, description, path, about }: CourseSchemaArgs) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: absoluteUrl(path),
    ...(about ? { about } : {}),
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: SITE_URL,
    },
    inLanguage: "en",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT3H",
    },
  };
}

export interface ArticleSchemaArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
  authorName: string;
}

export function articleSchema({
  title,
  description,
  path,
  image,
  publishedTime,
  modifiedTime,
  authorName,
}: ArticleSchemaArgs) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    image: image ? absoluteUrl(image) : absoluteUrl("/og-default.jpg"),
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
    author: { "@type": "Organization", name: authorName, url: SITE_URL },
    publisher: { "@id": ORG_ID },
  };
}

export interface ReviewInput {
  author: string;
  body: string;
  rating?: number;
}

/**
 * Aggregate rating + itemReviewed for a page carrying testimonials
 * (e.g. success stories). Ratings default to 5 when not supplied.
 */
export function reviewSchema(reviews: ReviewInput[], ratingValue = 5) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      reviewCount: reviews.length.toString(),
      bestRating: "5",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: (r.rating ?? 5).toString(),
        bestRating: "5",
      },
      reviewBody: r.body,
    })),
  };
}
