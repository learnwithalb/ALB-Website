"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users, Star } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon, CountryBadge } from "@/lib/icons";

const levels = [
  { code: "N5", name: "Beginner", duration: "4 months", desc: "Hiragana, Katakana, ~100 Kanji, basic vocabulary and grammar. Daily survival Japanese." },
  { code: "N4", name: "Elementary", duration: "4 months", desc: "~300 Kanji, conversational ability, simple reading and writing. JLPT N4 preparation." },
  { code: "N3", name: "Intermediate", duration: "5 months", desc: "~650 Kanji, handle everyday situations, watch anime without subtitles (mostly)." },
  { code: "N2", name: "Upper Intermediate", duration: "6 months", desc: "~1000 Kanji, work in Japan, read news and business documents. Most IT companies require N2." },
];

const writingSystems = [
  { script: "Hiragana", count: "46 characters", desc: "The phonetic alphabet — mastered in week 1. Used for native Japanese words and grammar.", emoji: "あ" },
  { script: "Katakana", count: "46 characters", desc: "Used for foreign loanwords, emphasis, and scientific terms. Also mastered in the first month.", emoji: "ア" },
  { script: "Kanji", count: "2000+ characters", desc: "Chinese-origin characters — you learn progressively from N5 to N2, adding kanji each level.", emoji: "漢" },
];

const whyJapanese = [
  { icon: "yen",      title: "3rd Largest Economy", desc: "Japan's GDP is the third largest globally — Toyota, Sony, Nintendo, and thousands of companies hire globally." },
  { icon: "computer", title: "IT Sector Demand",    desc: "Indian IT professionals with N2 Japanese command 40–60% salary premiums in Japan-facing roles." },
  { icon: "gaming",   title: "Anime & Gaming",      desc: "Enjoy Studio Ghibli, One Piece, and Nintendo games in their original form. Language learning meets passion." },
  { icon: "sparkle",  title: "Unique Culture",      desc: "Japan's culture of craftsmanship, discipline, and aesthetics is unlike any other. Language is the key." },
  { icon: "globe",    title: "Work in Japan",        desc: "Japan's population decline means active international recruitment. N2 is the standard requirement." },
  { icon: "article",  title: "JLPT Certification",  desc: "Japanese Language Proficiency Test — recognised by Japanese employers and universities worldwide." },
];

function AnimatedBar({ rate, color = "#ef4444" }: { rate: number; color?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${rate}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

export default function JapanesePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060c1a] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#dc2626]/12 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#22C55E]/6 blur-[80px]" />
        </div>
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView>
              <Link href="/courses" className="inline-flex items-center gap-1.5 text-white/50 text-sm hover:text-white transition-colors mb-5">
                ← All Courses
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  className="inline-block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CountryBadge code="JP" color="#dc2626" size="lg" />
                </motion.span>
                <span className="eyebrow-pill-outline text-sm">Rising Demand</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Japanese Language
                <span className="gradient-text"> Programme</span>
              </h1>
              <p className="mt-4 text-xl text-white/60 leading-relaxed">
                Unlock the world&apos;s 3rd largest economy. From Hiragana to N2 — JLPT-aligned, career-focused Japanese.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Enroll Now <ArrowRight size={16} />
                </a>
                <Link href="/courses" className="btn-outline">All Languages</Link>
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left" className="hidden lg:block">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: "125M", label: "Native speakers" },
                  { stat: "#3", label: "GDP worldwide" },
                  { stat: "N2", label: "Work visa standard" },
                  { stat: "2046+", label: "Kanji taught by N2" },
                ].map((w, i) => (
                  <motion.div
                    key={w.label}
                    className="card-dark rounded-2xl p-6 text-center"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    <div className="text-3xl font-black text-[#dc2626]">{w.stat}</div>
                    <div className="text-white/50 text-sm mt-1">{w.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section style={{ background: "#dc2626" }}>
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: <Clock size={18} />, label: "Duration", value: "4–19 months" },
              { icon: <Users size={18} />, label: "Batch Size", value: "Max 10" },
              { icon: <Star size={18} />, label: "Rating", value: "4.9 / 5" },
              { icon: <CheckCircle size={18} />, label: "Levels", value: "N5 to N2" },
            ].map((f, i) => (
              <div key={i} className="py-6 px-5 text-center border-r border-white/15 last:border-r-0">
                <div className="flex justify-center text-white mb-1">{f.icon}</div>
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wider">{f.label}</div>
                <div className="text-white font-black text-xl mt-0.5">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing systems */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Japanese Writing Systems</span>
            <h2 className="text-3xl font-black text-white mt-2">
              Three scripts.{" "}
              <span className="gradient-text">One beautiful language.</span>
            </h2>
            <p className="text-white/45 text-sm mt-3 max-w-lg mx-auto">Japanese uses three writing systems simultaneously. We teach all three progressively — starting with Hiragana on day one.</p>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {writingSystems.map((ws, i) => (
              <StaggerItem key={ws.script}>
                <motion.div
                  className="card-dark rounded-2xl p-7 text-center"
                  whileHover={{ y: -6, borderColor: "rgba(220,38,38,0.3)" }}
                >
                  <motion.div
                    className="text-7xl font-black text-[#dc2626] mb-4 inline-block"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {ws.emoji}
                  </motion.div>
                  <h3 className="text-xl font-black text-white">{ws.script}</h3>
                  <div className="text-xs font-bold text-[#dc2626] mt-1">{ws.count}</div>
                  <p className="text-sm text-white/40 mt-3 leading-relaxed">{ws.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Levels */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">JLPT Course Levels</span>
            <h2 className="text-3xl font-black text-white mt-2">
              N5 to N2 — <span className="gradient-text">Step by step.</span>
            </h2>
          </AnimateOnView>
          <div className="space-y-4">
            {levels.map((level, i) => (
              <AnimateOnView key={level.code} delay={i * 0.07}>
                <motion.div className="card-dark rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5" whileHover={{ x: 4 }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl flex flex-col items-center justify-center" style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)" }}>
                      <span className="font-black text-lg leading-none" style={{ color: "#dc2626" }}>{level.code}</span>
                      <span className="text-white/30 text-xs">{level.name}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 leading-relaxed text-sm">{level.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-white/40 text-xs">{level.duration}</p>
                  </div>
                </motion.div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Japanese */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Why Japanese?</span>
            <h2 className="text-3xl font-black text-white mt-2">
              Beyond anime.{" "}
              <span className="gradient-text">Real career value.</span>
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {whyJapanese.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div className="card-dark rounded-2xl p-6 h-full" whileHover={{ y: -4 }}>
                  <motion.div
                    className="mb-3 inline-block"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <MuiIcon name={item.icon} size={36} style={{ color: "#dc2626" }} />
                  </motion.div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* JLPT success rates */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max max-w-2xl mx-auto">
          <AnimateOnView className="text-center mb-8">
            <h2 className="text-2xl font-black text-white">Our JLPT Pass Rate</h2>
          </AnimateOnView>
          <div className="card-dark rounded-3xl p-8">
            {[
              { exam: "JLPT N5", rate: 96 },
              { exam: "JLPT N4", rate: 93 },
              { exam: "JLPT N3", rate: 88 },
              { exam: "JLPT N2", rate: 82 },
            ].map((s) => (
              <div key={s.exam} className="mb-5 last:mb-0">
                <div className="flex justify-between mb-2">
                  <span className="text-white/70 text-sm">{s.exam}</span>
                  <span className="font-bold text-sm" style={{ color: "#dc2626" }}>{s.rate}%</span>
                </div>
                <AnimatedBar rate={s.rate} color="#dc2626" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#04080f] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full blur-[80px]" style={{ background: "rgba(220,38,38,0.08)" }} />
        </div>
        <div className="container-max text-center relative z-10">
          <AnimateOnView>
            <motion.div className="text-5xl mb-4 inline-block" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🇯🇵</motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              はじめましょう。{" "}
              <span className="gradient-text">Let&apos;s begin.</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              From your first Hiragana to JLPT N2 — we&apos;ll guide every step. Book a free placement call today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                Start Japanese Today <ArrowRight size={18} />
              </a>
              <Link href="/courses" className="btn-outline text-lg px-8 py-4">View All Languages</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
