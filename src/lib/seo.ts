import type { Metadata } from "next";
import { siteConfig } from "./constants";

/**
 * Canonical site origin. Override per-environment with NEXT_PUBLIC_SITE_URL
 * (e.g. the production domain in Vercel). Falls back to the brand domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.learnwithalb.com"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/og-default.jpg";

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface BuildMetadataArgs {
  title?: string;
  description?: string;
  /** Site-relative canonical path, e.g. "/courses/french". */
  path?: string;
  keywords?: string[];
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
  /** When true, `title` is used verbatim (bypasses the "%s | ALB" template). */
  absoluteTitle?: boolean;
}

/**
 * Single source of truth for per-page metadata: canonical URL, Open Graph,
 * and Twitter cards. Every route funnels through this so tags stay consistent.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex,
  absoluteTitle,
}: BuildMetadataArgs = {}): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);

  return {
    title: absoluteTitle && title ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: title ?? siteConfig.name }],
      ...(type === "article" ? { publishedTime, modifiedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
