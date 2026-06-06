"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, Star } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { languages } from "@/lib/constants";
import { CountryBadge } from "@/lib/icons";

const features = [
  "CEFR-aligned curriculum (A1 to C1)",
  "Live online & offline options",
  "Small batches (max 12 per batch)",
  "Monthly progress assessments",
  "Exam preparation integrated",
  "Lifetime alumni access",
];

const weekSchedule = [
  { day: "MON", label: "Live Language Class", desc: "Grammar + vocab + pronunciation", color: "#22C55E", active: true },
  { day: "TUE", label: "Speaking Practice", desc: "Conversation circles & roleplay", color: "#4c8aff", active: false },
  { day: "WED", label: "Live Language Class", desc: "Grammar + vocab + pronunciation", color: "#22C55E", active: true },
  { day: "THU", label: "Speaking Practice", desc: "Conversation circles & roleplay", color: "#4c8aff", active: true },
  { day: "FRI", label: "Cultural Deep Dive", desc: "Film, music, news, or cuisine", color: "#e879f9", active: true },
];

const albDifference = [
  { title: "Goal-First Placement", desc: "Start at your exact level. We test before you invest." },
  { title: "Cultural Immersion", desc: "Every class includes authentic media, idioms, and cultural context." },
  { title: "Speaking from Day 1", desc: "No silent observer seats. You speak, listen, and respond — every class." },
  { title: "Exam-Ready Curriculum", desc: "DELF, Goethe, JLPT, TOPIK, IELTS — exam prep is built into every advanced batch." },
];

// European languages get blue accent; Asian/English get green
function getLangAccent(code: string): { border: string; glow: string; levelBg: string } {
  const european = ["fr", "de", "es", "en"];
  if (european.includes(code)) {
    return {
      border: "#2b6aff",
      glow: "rgba(43,106,255,0.18)",
      levelBg: "rgba(43,106,255,0.12)",
    };
  }
  return {
    border: "#22C55E",
    glow: "rgba(34,197,94,0.15)",
    levelBg: "rgba(34,197,94,0.12)",
  };
}

function WeekScheduleCard() {
  return (
    <div
      className="rounded-2xl p-7 h-full"
      style={{
        background: "rgba(13,23,41,0.85)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
      }}
    >
      <p className="text-[#22C55E] font-bold text-xs uppercase tracking-widest mb-5">
        How a typical week looks
      </p>
      <div className="space-y-3">
        {weekSchedule.map((s, i) => (
          <motion.div
            key={s.day}
            className="flex gap-3 items-start rounded-xl p-3"
            animate={
              s.active
                ? {
                    backgroundColor: [
                      "rgba(255,255,255,0.03)",
                      `${s.color}18`,
                      "rgba(255,255,255,0.03)",
                    ],
                  }
                : {}
            }
            transition={
              s.active
                ? {
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }
                : {}
            }
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <span
              className="text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full flex-shrink-0"
              style={{
                color: s.color,
                background: `${s.color}18`,
                border: `1px solid ${s.color}35`,
              }}
            >
              {s.day}
            </span>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">{s.label}</p>
              <p className="text-white/45 text-xs mt-0.5">{s.desc}</p>
            </div>
            {s.active && (
              <motion.div
                className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                style={{ background: s.color }}
                animate={{ opacity: [1, 0.2, 1], scale: [1, 1.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
              />
            )}
          </motion.div>
        ))}
      </div>
      <div
        className="mt-5 pt-4 flex items-center gap-2 text-white/35 text-xs"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Star size={11} className="text-[#22C55E]" fill="#22C55E" />
        <span>Weekend: Self-paced app exercises & listening</span>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-[#060c1a] pt-28 pb-16 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#22C55E]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#2b6aff]/8 blur-[100px]" />
          <motion.div
            className="absolute top-1/3 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{ background: "radial-gradient(circle, rgba(43,106,255,0.05) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text + feature pills */}
            <div>
              <AnimateOnView>
                <span className="eyebrow-pill-outline">Language Programmes</span>
                <h1 className="text-5xl md:text-6xl font-black text-white mt-4 leading-[1.05] tracking-tight">
                  Six languages.
                  <br />
                  One world.
                  <br />
                  <span className="gradient-text">Infinite doors.</span>
                </h1>
                <p className="mt-5 text-xl text-white/55 max-w-lg leading-relaxed">
                  Every course is CEFR-aligned, culturally immersive, and taught by
                  expert faculty who care about your actual goal — not just curriculum coverage.
                </p>
              </AnimateOnView>

              {/* Animated feature pills floating in */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {features.map((f, i) => (
                  <motion.span
                    key={f}
                    className="flex items-center gap-1.5 text-white/75 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                    initial={{ opacity: 0, y: 16, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.09 }}
                  >
                    <CheckCircle size={11} className="text-[#22C55E]" />
                    {f}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Link href="#languages" className="btn-primary">
                  See All Courses
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Free Counselling
                </a>
              </motion.div>
            </div>

            {/* Right: Animated week schedule visual */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl"
                  style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)" }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <WeekScheduleCard />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LANGUAGE CARDS ─── */}
      <section id="languages" className="section-padding bg-[#04080f]">
        <div className="container-max px-5 md:px-8">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Choose Your Language</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Find the programme{" "}
              <span className="gradient-text">built for your goal.</span>
            </h2>
            <p className="mt-3 text-white/45 max-w-xl mx-auto">
              Six languages. Expert faculty. Real-world fluency. Pick yours.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {languages.map((lang) => {
              const accent = getLangAccent(lang.code);
              return (
                <StaggerItem key={lang.code}>
                  <Link href={lang.href} className="group block h-full">
                    <motion.div
                      className="flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer"
                      style={{
                        background: "rgba(13,23,41,0.8)",
                        border: `1px solid rgba(255,255,255,0.07)`,
                        borderLeft: `3px solid ${accent.border}`,
                        backdropFilter: "blur(12px)",
                      }}
                      whileHover={{
                        y: -5,
                        borderLeftColor: accent.border,
                        boxShadow: `0 24px 60px ${accent.glow}, 0 0 0 1px ${accent.border}30`,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Card header */}
                      <div
                        className="p-7 flex items-start justify-between"
                        style={{
                          background: `linear-gradient(135deg, rgba(13,23,41,0.95) 0%, rgba(10,18,36,0.98) 100%)`,
                          borderBottom: `1px solid rgba(255,255,255,0.05)`,
                        }}
                      >
                        <div className="flex flex-col gap-2">
                          {/* Country badge */}
                          <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <CountryBadge code={lang.flagCode} color={lang.color} size="lg" />
                          </motion.div>
                          {lang.tag && (
                            <span
                              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full w-fit"
                              style={{
                                background: `${accent.border}22`,
                                color: accent.border === "#2b6aff" ? "#4c8aff" : "#22C55E",
                                border: `1px solid ${accent.border}40`,
                              }}
                            >
                              {lang.tag}
                            </span>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <h3 className="text-2xl font-black text-white">{lang.name}</h3>
                          <p className="text-white/45 text-sm mt-1 max-w-[150px] leading-relaxed">
                            {lang.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">
                            Levels Available
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {lang.levels.map((l) => (
                              <span
                                key={l}
                                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                                style={{
                                  background: accent.levelBg,
                                  border: `1px solid ${accent.border}30`,
                                  color: accent.border === "#2b6aff" ? "#7aaaff" : "#4ade80",
                                }}
                              >
                                {l}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div
                          className="mt-5 pt-4 flex items-center justify-between"
                          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          <span className="text-sm text-white/40 font-medium">View full programme</span>
                          <motion.div
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ background: accent.border }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <ArrowRight size={14} className="text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── ALB DIFFERENCE ─── */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <AnimateOnView direction="right">
              <span className="eyebrow">The ALB Difference</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2 leading-tight">
                Not just vocabulary lists.
                <br />
                <span className="gradient-text">Real-world fluency.</span>
              </h2>
              <p className="mt-4 text-white/50 leading-relaxed">
                Our approach combines expert instruction, cultural context, and
                consistent speaking practice — from your very first class.
              </p>
              <div className="mt-7 space-y-5">
                {albDifference.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px 0px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  >
                    <div
                      className="w-1.5 rounded-full flex-shrink-0 mt-1"
                      style={{
                        background: "linear-gradient(to bottom, #22C55E, rgba(34,197,94,0.2))",
                        height: "auto",
                        minHeight: "1.5rem",
                      }}
                    />
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-sm text-white/45 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Book Free Counselling
                  <ArrowRight size={16} />
                </Link>
              </div>
            </AnimateOnView>

            {/* Right: animated schedule card */}
            <AnimateOnView direction="left">
              <div className="relative">
                {/* Glow halo */}
                <motion.div
                  className="absolute -inset-3 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)" }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <WeekScheduleCard />
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF STRIP ─── */}
      <section className="py-10 bg-[#04080f]" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-max px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { value: "5000+", label: "Learners" },
              { value: "95%", label: "Goal Achievement" },
              { value: "6", label: "Languages" },
              { value: "4.9★", label: "Learner Rating" },
              { value: "30+", label: "Countries" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs text-white/40 font-semibold mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max px-5 md:px-8 text-center">
          <AnimateOnView>
            <div
              className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(7,14,26,0.98) 0%, rgba(4,8,15,0.98) 100%)",
                border: "1px solid rgba(34,197,94,0.12)",
              }}
            >
              {/* Glow blobs */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#22C55E]/10 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#2b6aff]/10 blur-[80px] pointer-events-none" />

              {/* Animated rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(34,197,94,0.07)",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(43,106,255,0.07)",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block text-5xl mb-5"
                >
                  <Globe size={40} className="text-[#22C55E] mx-auto" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Not sure which language
                  <br />
                  <span className="gradient-text">to start with?</span>
                </h2>
                <p className="mt-4 text-white/55 max-w-lg mx-auto text-lg">
                  Book a free 30-minute counselling session. Our advisors will help
                  you choose based on your goals, timeline, and interests.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: "1rem", padding: "0.9375rem 2rem" }}
                  >
                    Book Free Counselling
                    <ArrowRight size={18} />
                  </a>
                  <Link href="/about" className="btn-outline">
                    Learn About ALB
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
