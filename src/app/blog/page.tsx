"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { MuiIcon } from "@/lib/icons";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { getAllPosts, getCategories, type BlogPost } from "@/lib/blog";

// Fully-written articles lead the listing (so they get the featured slot);
// outline-stage posts follow. Within each group, newest-first is preserved
// because getAllPosts() is already date-sorted and Array.sort is stable.
const ALL_POSTS = [...getAllPosts()].sort((a, b) => Number(b.complete) - Number(a.complete));
const CATEGORIES = getCategories();
const PAGE_SIZE = 9;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fmtDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/* Category / tag pill */
function Pill({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${
        tone === "dark"
          ? "bg-white/15 text-white border border-white/20"
          : "bg-white text-ink border border-line"
      }`}
    >
      {children}
    </span>
  );
}

/* Vivid accent → deep-navy visual (for dark/overlaid cards) */
function accentVisual(accent: string) {
  return `linear-gradient(155deg, ${accent} 0%, #131c44 100%)`;
}
/* Soft accent tint (for light image-top cards) */
function accentTint(accent: string) {
  return `linear-gradient(150deg, ${accent}1f 0%, ${accent}08 100%)`;
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered: BlogPost[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_POSTS.filter((p) => {
      const inCat = activeCategory === "All" || p.category === activeCategory;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return inCat && inQuery;
    });
  }, [activeCategory, query]);

  const featured = filtered[0];
  const picks = filtered.slice(1, 4);
  const rest = filtered.slice(4);
  const restVisible = rest.slice(0, visible);

  const resetPaging = () => setVisible(PAGE_SIZE);

  return (
    <section className="relative overflow-hidden bg-[#f6f8ff] pt-28 pb-24 min-h-screen">
      <div className="blob blob-royal w-[420px] h-[420px] -top-24 right-[-6%] opacity-30 pointer-events-none" />
      <div className="blob blob-sky w-[360px] h-[360px] top-[40%] left-[-8%] opacity-25 pointer-events-none" />

      <div className="container-max px-5 md:px-8 relative z-10">
        {/* ── Header: title + search ── */}
        <AnimateOnView className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-9">
          <div>
            <span className="eyebrow-pill-outline">ALB Blog</span>
            <h1 className="text-4xl md:text-5xl font-black text-ink mt-3 leading-tight">
              Learn about learning.{" "}
              <span className="gradient-text">Think global.</span>
            </h1>
            <p className="mt-3 text-body text-base md:text-lg max-w-xl leading-relaxed">
              Exam strategies, immigration language guides, and India-first learning tips — from the ALB faculty.
            </p>
          </div>
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); resetPaging(); }}
              placeholder="Search…"
              className="w-full bg-white border border-line rounded-full pl-11 pr-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-royal-400 focus:ring-2 focus:ring-royal-500/15 transition-all"
            />
          </div>
        </AnimateOnView>

        {/* ── Category filter ── */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); resetPaging(); }}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? "bg-royal-500 text-white border-royal-500 shadow-md shadow-royal-500/25"
                  : "bg-white text-body border-line hover:border-royal-300 hover:text-royal-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + query}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {/* ── Featured hero ── */}
            {featured && (
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="mb-6">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_24px_60px_-30px_rgba(16,23,51,0.35)]"
                  style={{ background: "#0b1330" }}
                >
                  {/* left: text */}
                  <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex flex-wrap gap-2 mb-5">
                      <Pill tone="dark">{featured.category}</Pill>
                      {featured.tags[0] && <Pill tone="dark">{featured.tags[0]}</Pill>}
                    </div>
                    <h2 className="text-white font-black text-3xl md:text-[2.6rem] leading-[1.08] tracking-tight">
                      {featured.title}
                    </h2>
                    <p className="text-white/60 mt-4 leading-relaxed max-w-lg line-clamp-3">{featured.excerpt}</p>
                    <span className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-white text-ink text-sm font-bold px-6 py-3 transition-transform group-hover:-translate-y-0.5">
                      Read now <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  {/* right: visual */}
                  <div
                    className="relative min-h-[240px] lg:min-h-[420px] order-1 lg:order-2 flex items-center justify-center overflow-hidden"
                    style={{ background: accentVisual(featured.accent) }}
                  >
                    {featured.coverImage ? (
                      <>
                        <Image src={encodeURI(featured.coverImage)} alt={featured.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" priority />
                        <span className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,10,36,0.55), transparent 45%)" }} />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 grid-dots-light opacity-25" />
                        <span className="absolute -top-16 -right-10 w-56 h-56 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)" }} />
                        <MuiIcon name={featured.icon} size={120} style={{ color: "#ffffff" }} />
                      </>
                    )}
                    <span className="absolute bottom-6 right-8 text-white/80 text-xs font-bold uppercase tracking-widest z-10">{featured.readingMinutes} min read</span>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* ── Editor's picks (overlaid image cards) ── */}
            {picks.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {picks.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    whileHover={{ y: -6 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group relative flex flex-col justify-end rounded-3xl overflow-hidden min-h-[380px] p-7 shadow-[0_20px_50px_-28px_rgba(16,23,51,0.5)]"
                      style={{ background: accentVisual(post.accent) }}
                    >
                      {post.coverImage ? (
                        <Image src={encodeURI(post.coverImage)} alt={post.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <>
                          <div className="absolute inset-0 grid-dots-light opacity-20" />
                          <MuiIcon name={post.icon} size={92} style={{ color: "rgba(255,255,255,0.16)" }} className="absolute top-6 right-6" />
                        </>
                      )}
                      <span className="absolute inset-x-0 bottom-0 h-2/3" style={{ background: "linear-gradient(to top, rgba(6,10,36,0.9), transparent)" }} />
                      {/* editor pick pill */}
                      <span className="absolute top-5 left-5 inline-flex items-center rounded-full bg-white text-ink text-[11px] font-bold px-3 py-1 shadow-sm">
                        Editor&apos;s pick
                      </span>
                      <div className="relative z-10">
                        <span className="text-white/70 text-[11px] font-bold uppercase tracking-widest">{post.category}</span>
                        <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mt-2">{post.title}</h3>
                        <p className="text-white/60 text-sm mt-3 leading-snug line-clamp-2">{post.excerpt}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* ── Rest grid (image-top white cards) ── */}
            {restVisible.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {restVisible.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (i % PAGE_SIZE) * 0.05, duration: 0.4 }}
                    whileHover={{ y: -6 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-line shadow-[0_10px_30px_-18px_rgba(16,23,51,0.25)] hover:shadow-[0_22px_50px_-26px_rgba(16,23,51,0.4)] transition-shadow">
                      {/* visual */}
                      <div className="relative h-44 flex items-center justify-center overflow-hidden" style={{ background: accentTint(post.accent) }}>
                        {post.coverImage ? (
                          <Image src={encodeURI(post.coverImage)} alt={post.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        ) : (
                          <>
                            <div className="absolute inset-0 grid-dots opacity-40" />
                            <MuiIcon name={post.icon} size={60} style={{ color: post.accent }} />
                          </>
                        )}
                      </div>
                      {/* text */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Pill>{post.category}</Pill>
                        </div>
                        <h3 className="font-bold text-ink text-lg leading-snug">{post.title}</h3>
                        <p className="text-sm text-muted mt-2.5 leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-5 pt-4 border-t border-line">
                          <span className="text-xs text-muted">{fmtDate(post.publishedAt)} · {post.readingMinutes} min</span>
                          <span className="inline-flex items-center gap-1 font-bold text-sm text-royal-600">
                            Read now <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-24 text-muted">
                No articles match your search{activeCategory !== "All" ? ` in ${activeCategory}` : ""}.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Load more ── */}
        {rest.length > visible && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="rounded-full bg-white border border-line text-ink font-bold text-sm px-8 py-3.5 hover:border-royal-300 hover:text-royal-700 transition-all shadow-sm"
            >
              Load more
            </button>
          </div>
        )}

        {/* ── Subscribe ── */}
        <AnimateOnView className="mt-20">
          <div className="rounded-3xl p-10 text-center relative overflow-hidden text-white" style={{ background: "linear-gradient(150deg, #21398f 0%, #2f4fc7 55%, #3b6bf0 100%)" }}>
            <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
            <span className="absolute -top-16 -right-10 w-56 h-56 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)" }} />
            <div className="relative z-10">
              <h3 className="text-2xl font-black">Get new articles in your inbox.</h3>
              <p className="text-white/70 text-sm mt-2">No spam. One email when we publish something worth reading.</p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/95 rounded-full px-5 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button className="rounded-full bg-white text-royal-700 font-bold text-sm px-6 py-3 flex-shrink-0 hover:-translate-y-0.5 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
