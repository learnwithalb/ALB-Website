"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, CalendarDays, RefreshCw, ArrowRight, GraduationCap } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { headingId } from "@/lib/blog";
import { MuiIcon } from "@/lib/icons";
import { Breadcrumb, type Crumb } from "@/components/shared/Breadcrumb";
import { TableOfContents } from "./TableOfContents";
import { SectionBlocks } from "./ContentBlocks";
import { FaqAccordion } from "./FaqAccordion";
import { ShareButtons } from "./ShareButtons";
import { RelatedPosts } from "./RelatedPosts";
import { AuthorCard } from "./AuthorCard";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/** Deterministic date format (avoids locale-based hydration mismatches). */
function fmtDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

interface ArticleViewProps {
  post: BlogPost;
  related: BlogPost[];
  breadcrumbs: Crumb[];
  courseLinks: { label: string; href: string }[];
}

export function ArticleView({ post, related, breadcrumbs, courseLinks }: ArticleViewProps) {
  const headings = post.sections.map((s) => s.h2);

  return (
    <article>
      {/* ── Hero ── */}
      <header className="relative hero-light pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />
        <div
          className="blob w-[420px] h-[420px] top-0 right-[-6%] pointer-events-none opacity-30"
          style={{ background: post.accent }}
        />
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="max-w-3xl">
          <Breadcrumb items={breadcrumbs} />
          <div className="mt-5 flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ color: post.accent, background: `${post.accent}14` }}
            >
              <MuiIcon name={post.icon} size={13} style={{ color: post.accent }} />
              {post.category}
            </span>
            {post.isPillar && (
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-ink text-white">
                Pillar Guide
              </span>
            )}
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-black text-ink leading-[1.08] tracking-tight">
            {post.title}
          </h1>

          {/* author byline */}
          <div className="mt-6 flex items-center gap-3.5">
            <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] text-white flex items-center justify-center shadow-md">
              <GraduationCap size={20} />
            </span>
            <div>
              <p className="font-bold text-ink text-sm">By {post.author}</p>
              <p className="text-muted text-xs mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="inline-flex items-center gap-1.5"><CalendarDays size={12} /> {fmtDate(post.publishedAt)}</span>
                <span className="text-royal-200">·</span>
                <span className="inline-flex items-center gap-1.5"><RefreshCw size={12} /> Updated {fmtDate(post.updatedAt)}</span>
                <span className="text-royal-200">·</span>
                <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {post.readingMinutes} min read</span>
              </p>
            </div>
          </div>
          </div>
        </div>
      </header>

      {/* ── Cover image (full-width, prominent) ── */}
      {post.coverImage && (
        <div className="container-max px-5 md:px-8 pb-2">
          <div className="relative aspect-[16/7] rounded-3xl overflow-hidden border border-line shadow-[0_28px_70px_-34px_rgba(16,23,51,0.45)]">
            <Image src={encodeURI(post.coverImage)} alt={post.title} fill sizes="(min-width:1280px) 1200px, 100vw" className="object-cover" priority />
          </div>
        </div>
      )}

      {/* ── Body + sidebar ── */}
      <div className="container-max px-5 md:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_260px] gap-10 lg:gap-14 items-start">
          {/* Main content */}
          <div className="max-w-3xl">
            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.h2} id={headingId(section.h2)} className="scroll-mt-28">
                  <h2 className="text-2xl md:text-[1.7rem] font-black text-ink leading-tight">
                    {section.h2}
                  </h2>
                  {section.body?.split("\n\n").map((para, i) => (
                    <p key={i} className="mt-3 text-body leading-relaxed">
                      {para}
                    </p>
                  ))}
                  {section.blocks && section.blocks.length > 0 && (
                    <SectionBlocks blocks={section.blocks} accent={post.accent} />
                  )}
                </section>
              ))}
            </div>

            {/* Placeholder notice — only for outline-stage articles */}
            {!post.complete && (
              <p className="mt-10 text-xs text-muted italic border-l-2 border-line pl-4">
                This is a structured outline for an in-depth guide. Full content is being expanded by
                the {post.author}.
              </p>
            )}

            {/* Related courses (internal linking → conversion) */}
            {courseLinks.length > 0 && (
              <div className="mt-10 card rounded-2xl p-6">
                <p className="font-bold text-ink">Related programmes</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {courseLinks.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:gap-2.5 transition-all"
                    >
                      {c.label} <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            {post.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-black text-ink mb-5">Frequently asked questions</h2>
                <FaqAccordion faqs={post.faqs} />
              </div>
            )}

            {/* Tags + share */}
            <div className="mt-10 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-royal-50 text-royal-600">
                    #{t}
                  </span>
                ))}
              </div>
              <ShareButtons path={`/blog/${post.slug}`} title={post.title} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 space-y-6">
            <TableOfContents headings={headings} />
            <AuthorCard author={post.author} />
          </aside>
        </div>
      </div>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <section className="section-padding sec-mist relative overflow-hidden">
          <div className="container-max px-5 md:px-8 relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-ink mb-6">
              Keep reading
            </h2>
            <RelatedPosts posts={related} />
          </div>
        </section>
      )}

    </article>
  );
}
