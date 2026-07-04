import type { BlogPost, Cluster, ClusterId } from "./types";
import { POSTS, CLUSTERS } from "./posts";

export type { BlogPost, Cluster, ClusterId, BlogFaq, BlogSection } from "./types";
export { CLUSTERS, DEFAULT_AUTHOR } from "./posts";

/** All posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

/** Deterministic anchor id for a section heading (used by the TOC). */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostsByCluster(cluster: ClusterId): BlogPost[] {
  return POSTS.filter((p) => p.cluster === cluster);
}

export function getPillars(): BlogPost[] {
  return POSTS.filter((p) => p.isPillar);
}

export function getClusterMeta(id: ClusterId): Cluster {
  return CLUSTERS[id];
}

/** Distinct display categories, "All" first, for the listing filter. */
export function getCategories(): string[] {
  return ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))];
}

/**
 * Resolve a post's related articles, falling back to cluster siblings and its
 * pillar so every article always recommends further reading.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const bySlug = new Map(POSTS.map((p) => [p.slug, p]));
  const picked: BlogPost[] = [];
  const seen = new Set<string>([post.slug]);

  const push = (p?: BlogPost) => {
    if (p && !seen.has(p.slug)) {
      seen.add(p.slug);
      picked.push(p);
    }
  };

  post.related.forEach((slug) => push(bySlug.get(slug)));
  if (picked.length < limit) getPostsByCluster(post.cluster).forEach(push);
  return picked.slice(0, limit);
}
