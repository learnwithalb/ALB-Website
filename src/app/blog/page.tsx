import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";

export const metadata: Metadata = {
  title: "Blog | Language Learning Tips & Culture",
  description: "Language learning tips, cultural insights, exam strategies, and career advice for ambitious Indian learners going global.",
};

const posts = [
  {
    category: "Learning Tips",
    title: "The 5 Habits That Separate B2 Achievers from Eternal Beginners",
    excerpt: "After teaching 5,000+ learners, we've noticed a pattern. The students who reach their goal don't work harder — they work smarter. Here's what separates them.",
    readTime: "7 min read",
    date: "May 28, 2026",
    emoji: "🎯",
  },
  {
    category: "French",
    title: "DELF B2: The Complete 2026 Preparation Guide",
    excerpt: "Everything you need to know about registering, preparing, and passing the DELF B2 — from someone who has coached 200+ candidates through it.",
    readTime: "12 min read",
    date: "May 20, 2026",
    emoji: "🇫🇷",
  },
  {
    category: "Career",
    title: "Why Learning German in 2026 Is One of the Best Career Decisions You Can Make",
    excerpt: "Germany is actively recruiting skilled workers. Here's the opportunity, what visa you need, and why B1 German might be your golden ticket.",
    readTime: "9 min read",
    date: "May 14, 2026",
    emoji: "🇩🇪",
  },
  {
    category: "+Beyond",
    title: "The Real Reason You Freeze During Presentations (It's Not Nerves)",
    excerpt: "Public speaking anxiety is wildly misunderstood. Our lead Beyond trainer explains the actual mechanism — and the 3-step fix that changes everything.",
    readTime: "6 min read",
    date: "May 7, 2026",
    emoji: "🎤",
  },
  {
    category: "Culture",
    title: "La Vie Française: 10 Cultural Concepts No French Textbook Will Teach You",
    excerpt: "Joie de vivre, savoir-faire, and flânerie — these untranslatable ideas reveal more about France than any grammar rule. We unpack them all.",
    readTime: "8 min read",
    date: "Apr 30, 2026",
    emoji: "🥐",
  },
  {
    category: "Junior",
    title: "When Should Your Child Start Learning a Second Language?",
    excerpt: "The science is clear. We explain the critical window, debunk the common myths, and give you a practical framework for choosing the right time and language.",
    readTime: "5 min read",
    date: "Apr 22, 2026",
    emoji: "🧒",
  },
];

const categories = ["All", "Learning Tips", "French", "German", "Spanish", "+Beyond", "Culture", "Junior", "Career"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060c1a] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#22C55E]/10 blur-[80px] pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView>
            <span className="eyebrow-pill-outline">ALB Blog</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-4 max-w-2xl">
              Learn about learning.
              <span className="gradient-text"> Think global.</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl leading-relaxed">
              Language tips, culture deep-dives, exam strategies, and career insights —
              straight from the ALB faculty.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-[#060c1a] border-b border-white/5 sticky top-16 md:top-20 z-30">
        <div className="container-max px-5 md:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  cat === "All"
                    ? "bg-[#060c1a] text-white"
                    : "bg-[#04080f] text-white/50 hover:bg-white/8"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {posts.map((post) => (
              <StaggerItem key={post.title}>
                <article className="group rounded-2xl border-white/6 bg-[#04080f] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="bg-gradient-to-br from-[#0a1628] to-[#162d5a] p-8 flex items-center justify-center text-6xl">
                    {post.emoji}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-[#22C55E] uppercase tracking-wider">{post.category}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-xs text-white/30">{post.readTime}</span>
                    </div>
                    <h2 className="font-black text-white text-lg leading-tight flex-1">{post.title}</h2>
                    <p className="text-sm text-white/40 mt-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/6">
                      <span className="text-xs text-white/30">{post.date}</span>
                      <button className="flex items-center gap-1 text-[#22C55E] font-bold text-sm group-hover:gap-2 transition-all">
                        Read <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnView className="text-center mt-10">
            <p className="text-white/35 text-sm">More articles coming soon. Subscribe to get notified.</p>
            <div className="mt-4 flex justify-center gap-2 max-w-sm mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 border-white/8 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#22C55E] transition-colors" />
              <button className="btn-primary text-sm px-5 py-2.5">Subscribe</button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max text-center">
          <AnimateOnView>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              Ready to go from reader to speaker?
            </h2>
            <p className="mt-3 text-white/40">
              Explore our courses and start your language journey today.
            </p>
            <Link href="/courses" className="btn-primary mt-6 inline-flex">
              Explore Courses
              <ArrowRight size={16} />
            </Link>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
