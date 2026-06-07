"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { languages } from "@/lib/constants";
import { CountryBadge } from "@/lib/icons";
import { CountUp } from "@/components/shared/CountUp";
import { useBooking } from "@/components/shared/BookingContext";

const features = [
  "CEFR-aligned curriculum (A1 to C1)",
  "Live online & offline options",
  "Small batches (max 12 per batch)",
  "Monthly progress assessments",
  "Exam preparation integrated",
  "Lifetime alumni access",
];

const weekSchedule = [
  { day: "MON", label: "Live Language Class", desc: "Grammar + vocab + pronunciation", color: "#3b5bdb", active: true },
  { day: "TUE", label: "Speaking Practice", desc: "Conversation circles & roleplay", color: "#0ea5e9", active: false },
  { day: "WED", label: "Live Language Class", desc: "Grammar + vocab + pronunciation", color: "#3b5bdb", active: true },
  { day: "THU", label: "Speaking Practice", desc: "Conversation circles & roleplay", color: "#0ea5e9", active: true },
  { day: "FRI", label: "Cultural Deep Dive", desc: "Film, music, news, or cuisine", color: "#6d8bff", active: true },
];

const albDifference = [
  { title: "Goal-First Placement", desc: "Start at your exact level. We test before you invest." },
  { title: "Cultural Immersion", desc: "Every class includes authentic media, idioms, and cultural context." },
  { title: "Speaking from Day 1", desc: "No silent observer seats. You speak, listen, and respond — every class." },
  { title: "Exam-Ready Curriculum", desc: "DELF, Goethe, JLPT, TOPIK, IELTS — exam prep is built into every advanced batch." },
];

// European languages get royal accent; Asian/English get sky
function getLangAccent(code: string): { border: string; glow: string; levelBg: string; soft: string } {
  const european = ["fr", "de", "es", "en"];
  if (european.includes(code)) {
    return {
      border: "#3b5bdb",
      glow: "rgba(59,91,219,0.18)",
      levelBg: "rgba(59,91,219,0.10)",
      soft: "#2f49c0",
    };
  }
  return {
    border: "#0ea5e9",
    glow: "rgba(14,165,233,0.18)",
    levelBg: "rgba(14,165,233,0.10)",
    soft: "#0284c7",
  };
}

function WeekScheduleCard() {
  return (
    <div className="card rounded-2xl p-7 h-full">
      <p className="text-royal-600 font-bold text-xs uppercase tracking-widest mb-5">
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
                      "rgba(59,91,219,0.04)",
                      `${s.color}1f`,
                      "rgba(59,91,219,0.04)",
                    ],
                  }
                : {}
            }
            transition={
              s.active
                ? { duration: 2.5, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }
                : {}
            }
            style={{ background: "rgba(59,91,219,0.04)" }}
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
              <p className="text-ink font-semibold text-sm leading-tight">{s.label}</p>
              <p className="text-muted text-xs mt-0.5">{s.desc}</p>
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
      <div className="mt-5 pt-4 flex items-center gap-2 text-muted text-xs border-t border-line">
        <Star size={11} className="text-amber-400" fill="#fbbf24" />
        <span>Weekend: Self-paced app exercises & listening</span>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const { openModal } = useBooking();
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative hero-light pt-28 pb-16 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[460px] h-[460px] top-0 right-0 pointer-events-none" />
        <div className="blob blob-sky w-[380px] h-[380px] bottom-0 left-0 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text + feature pills */}
            <div>
              <AnimateOnView>
                <span className="eyebrow-pill-outline">Language Programmes</span>
                <h1 className="text-5xl md:text-6xl font-black text-ink mt-4 leading-[1.05] tracking-tight">
                  Six languages.
                  <br />
                  One world.
                  <br />
                  <span className="gradient-text">Infinite doors.</span>
                </h1>
                <p className="mt-5 text-xl text-body max-w-lg leading-relaxed">
                  Every course is CEFR-aligned, culturally immersive, and taught by
                  expert faculty who care about your actual goal — not just curriculum coverage.
                </p>
              </AnimateOnView>

              {/* Animated feature pills */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {features.map((f, i) => (
                  <motion.span
                    key={f}
                    className="flex items-center gap-1.5 text-body text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-line shadow-sm"
                    initial={{ opacity: 0, y: 16, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.09 }}
                  >
                    <CheckCircle size={11} className="text-royal-500" />
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
                <div className="blob blob-royal absolute -inset-4 opacity-60" />
                <WeekScheduleCard />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LANGUAGE CARDS ─── */}
      <section id="languages" className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-sky w-[400px] h-[400px] top-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Choose Your Language</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              Find the programme{" "}
              <span className="gradient-text">built for your goal.</span>
            </h2>
            <p className="mt-3 text-body max-w-xl mx-auto">
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
                      className="flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer bg-white"
                      style={{
                        border: `1px solid #e6ebf5`,
                        borderLeft: `3px solid ${accent.border}`,
                        boxShadow: "0 1px 2px rgba(16,23,51,0.04), 0 8px 24px rgba(16,23,51,0.06)",
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: `0 24px 60px ${accent.glow}, 0 0 0 1px ${accent.border}30`,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Card header */}
                      <div
                        className="p-7 flex items-start justify-between"
                        style={{
                          background: "linear-gradient(135deg, #f7f9ff 0%, #ffffff 100%)",
                          borderBottom: `1px solid #eef2ff`,
                        }}
                      >
                        <div className="flex flex-col gap-2">
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
                                background: `${accent.border}14`,
                                color: accent.soft,
                                border: `1px solid ${accent.border}30`,
                              }}
                            >
                              {lang.tag}
                            </span>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <h3 className="text-2xl font-black text-ink">{lang.name}</h3>
                          <p className="text-muted text-sm mt-1 max-w-[150px] leading-relaxed">
                            {lang.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">
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
                                  color: accent.soft,
                                }}
                              >
                                {l}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5 pt-4 flex items-center justify-between border-t border-line">
                          <span className="text-sm text-muted font-medium">View full programme</span>
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
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 right-[-6%] opacity-50 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <AnimateOnView direction="right">
              <span className="eyebrow">The ALB Difference</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-2 leading-tight">
                Not just vocabulary lists.
                <br />
                <span className="gradient-text">Real-world fluency.</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed">
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
                        background: "linear-gradient(to bottom, #3b5bdb, rgba(59,91,219,0.2))",
                        minHeight: "1.5rem",
                      }}
                    />
                    <div>
                      <p className="font-bold text-ink">{item.title}</p>
                      <p className="text-sm text-muted mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <button onClick={() => openModal()} className="btn-primary">
                  Book Free Counselling
                  <ArrowRight size={16} />
                </button>
              </div>
            </AnimateOnView>

            {/* Right: animated schedule card */}
            <AnimateOnView direction="left">
              <div className="relative">
                <div className="blob blob-sky absolute -inset-3 opacity-60 pointer-events-none" />
                <WeekScheduleCard />
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF STRIP ─── */}
      <section className="py-10 bg-white border-y border-line">
        <div className="container-max px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-center">
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
                <div className="text-2xl font-black gradient-text">
                  <CountUp value={s.value} duration={1800} />
                </div>
                <div className="text-xs text-muted font-semibold mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
