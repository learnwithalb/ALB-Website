import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { ArticleView } from "@/components/blog/ArticleView";

const COURSE_LABELS: Record<string, string> = {
  "/courses/french-language-course-online": "French Course",
  "/courses/german-language-course-online": "German Course",
  "/courses/english-speaking-course-online-india": "IELTS & English",
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const path = `/blog/${post.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];
  const courseLinks = post.relatedCourses.map((href) => ({
    href,
    label: COURSE_LABELS[href] ?? "Explore course",
  }));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            path,
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authorName: post.author,
          }),
          breadcrumbSchema(breadcrumbs),
          ...(post.faqs.length ? [faqSchema(post.faqs)] : []),
        ]}
      />
      <ArticleView
        post={post}
        related={related}
        breadcrumbs={breadcrumbs}
        courseLinks={courseLinks}
      />
    </>
  );
}
