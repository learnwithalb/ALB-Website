"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MuiIcon } from "@/lib/icons";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { getAllPosts, getCategories, type BlogPost } from "@/lib/blog";

const ALL_POSTS = getAllPosts();
const CATEGORIES = getCategories();

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fmtDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

const BG_PILLS = [
  { label: "French for Canada", top: "20%", left: "8%", delay: 0 },
  { label: "DELF & DALF", top: "15%", right: "12%", delay: 0.3 },
  { label: "German", bottom: "35%", left: "5%", delay: 0.6 },
  { label: "IELTS", top: "60%", right: "8%", delay: 0.9 },
  { label: "For Indians", bottom: "20%", right: "20%", delay: 1.2 },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered: BlogPost[] =
    activeCategory === "All" ? ALL_POSTS : ALL_POSTS.filter((p) => p.category === activeCategory);
  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Hero */}
      <section className="relative hero-light pt-28 pb-16 overflow-hidden min-h-[48vh] flex items-center">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[400px] h-[400px] top-0 right-0 pointer-events-none" />
        <div className="blob blob-sky w-[320px] h-[320px] bottom-0 left-1/4 pointer-events-none" />

        {BG_PILLS.map((pill, i) => (
          <motion.div
            key={i}
            className="absolute glass rounded-full px-4 py-1.5 text-xs font-semibold text-royal-400 pointer-events-none select-none"
            style={{ top: pill.top, left: (pill as { left?: string }).left, right: (pill as { right?: string }).right, bottom: (pill as { bottom?: string }).bottom }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: pill.delay }}
          >
            {pill.label}
          </motion.div>
        ))}

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <AnimateOnView>
            <span className="eyebrow-pill-outline">ALB Blog</span>
            <h1 className="text-4xl md:text-6xl font-black text-ink mt-4 max-w-2xl leading-tight">
              Learn about learning.{" "}
              <span className="gradient-text">Think global.</span>
            </h1>
            <p className="mt-4 text-body text-lg max-w-xl leading-relaxed">
              Exam strategies, immigration language guides, and India-first learning tips, straight from the ALB faculty.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white/85 backdrop-blur-md border-y border-line sticky top-[64px] md:top-[80px] z-30">
        <div className="container-max px-5 md:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-royal-500 text-white shadow-md shadow-royal-500/30"
                    : "bg-royal-50 text-body hover:bg-royal-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] top-10 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* Featured post */}
              {featured && (
                <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="mb-8">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="block rounded-2xl card overflow-hidden"
                    style={{ borderTop: `3px solid ${featured.accent}` }}
                  >
                    <div className="grid md:grid-cols-[240px_1fr] items-stretch">
                      <div
                        className="p-10 flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${featured.accent}10, ${featured.accent}22)` }}
                      >
                        <MuiIcon name={featured.icon} size={72} style={{ color: featured.accent }} />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: featured.accent }}>{featured.category}</span>
                          <span className="text-royal-200">·</span>
                          <span className="text-xs text-muted">{featured.readingMinutes} min read</span>
                          <span className="text-royal-200">·</span>
                          <span className="text-xs text-muted">{fmtDate(featured.publishedAt)}</span>
                        </div>
                        <h2 className="font-black text-ink text-2xl md:text-3xl leading-tight">{featured.title}</h2>
                        <p className="text-body mt-3 leading-relaxed">{featured.excerpt}</p>
                        <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-sm" style={{ color: featured.accent }}>
                          Read article <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Remaining posts grid */}
              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="rounded-2xl card overflow-hidden flex flex-col h-full"
                        style={{ borderTop: `3px solid ${post.accent}` }}
                      >
                        <div
                          className="p-8 flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, ${post.accent}0c, ${post.accent}1c)` }}
                        >
                          <MuiIcon name={post.icon} size={56} style={{ color: post.accent }} />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: post.accent }}>{post.category}</span>
                            <span className="text-royal-200">·</span>
                            <span className="text-xs text-muted">{post.readingMinutes} min read</span>
                          </div>
                          <h2 className="font-black text-ink text-lg leading-tight flex-1">{post.title}</h2>
                          <p className="text-sm text-muted mt-3 leading-relaxed line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between mt-5 pt-4 border-t border-line">
                            <span className="text-xs text-muted">{fmtDate(post.publishedAt)}</span>
                            <span className="flex items-center gap-1 font-bold text-sm" style={{ color: post.accent }}>
                              Read <ArrowRight size={13} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}

              {filtered.length === 0 && (
                <div className="text-center py-20 text-muted">No posts in this category yet.</div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Subscribe */}
          <AnimateOnView className="mt-16">
            <div className="card rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="blob blob-sky w-[400px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
              <motion.div
                className="w-14 h-14 rounded-2xl bg-royal-50 flex items-center justify-center mx-auto mb-4 relative z-10"
                animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MuiIcon name="email" size={28} style={{ color: "#3b5bdb" }} />
              </motion.div>
              <h3 className="text-xl font-black text-ink relative z-10">Get new articles in your inbox.</h3>
              <p className="text-muted text-sm mt-2 relative z-10">No spam. One email when we publish something worth reading.</p>
              <div className="mt-6 flex justify-center gap-2 max-w-sm mx-auto relative z-10">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-mist border border-line rounded-xl px-4 py-2.5 text-sm text-ink placeholder-royal-300 focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 transition-all"
                />
                <motion.button
                  className="btn-primary text-sm px-5 py-2.5 flex-shrink-0"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
