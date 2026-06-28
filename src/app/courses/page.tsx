"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Globe, Sparkles } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { languages } from "@/lib/constants";
import { CountryBadge } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";

const features = [
  "CEFR-aligned curriculum",
  "Live-online and recorded lectures",
  "Small batches",
  "Monthly progress assessments",
  "Free Soft-skill module included",
  "Regular Communication classes",
];

const courseIncludes = [
  { t: "Live instructor-led classes", s: "Real-time teaching, never just recordings" },
  { t: "Regular communication classes", s: "Build real speaking confidence from day one" },
  { t: "Free +Beyond soft-skills module", s: "Interview, presentation, and confidence training" },
  { t: "Exam preparation built in", s: "DELF, Goethe, IELTS, and more, included" },
  { t: "Monthly progress reports", s: "Always know exactly where you stand" },
  { t: "CEFR-aligned ALB certificate", s: "A recognised credential at every level" },
];

const albDifference = [
  { title: "Goal-First Placement", desc: "Start at your exact level. We test before you invest." },
  { title: "Cultural Immersion", desc: "Every class includes authentic media, idioms, and cultural context." },
  { title: "Speaking from Day 1", desc: "No silent observer seats. You speak, listen, and respond, every class." },
  { title: "Exam-Ready Curriculum", desc: "DELF, Goethe, JLPT, TOPIK, IELTS, exam prep is built into every advanced batch." },
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

function CourseIncludesCard() {
  return (
    <div className="card rounded-2xl p-7 h-full">
      <p className="text-royal-600 font-bold text-xs uppercase tracking-widest mb-5">
        What every course includes
      </p>
      <div className="space-y-3.5">
        {courseIncludes.map((c, i) => (
          <motion.div
            key={c.t}
            className="flex gap-3 items-start"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-royal-50 flex items-center justify-center">
              <CheckCircle size={15} className="text-royal-600" />
            </span>
            <div>
              <p className="text-ink font-semibold text-sm leading-tight">{c.t}</p>
              <p className="text-muted text-xs mt-0.5 leading-snug">{c.s}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 pt-4 flex items-center gap-2 text-muted text-xs border-t border-line">
        <Star size={11} className="text-amber-400" fill="#fbbf24" />
        <span>No hidden fees, everything above is included in every programme.</span>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const { openModal } = useBooking();

  // available languages first, "coming soon" pushed to the bottom (stable order)
  const orderedLanguages = [...languages].sort(
    (a, b) => Number(a.comingSoon) - Number(b.comingSoon)
  );

  return (
    <>
      {/* ─── HERO (dark) ─── */}
      <section className="relative sec-dark overflow-hidden pt-32 pb-20 min-h-[92vh] flex items-center">
        {/* texture + animated glows */}
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <motion.div
          className="blob blob-royal w-[560px] h-[480px] -top-24 right-[4%] pointer-events-none"
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob blob-sky w-[460px] h-[460px] bottom-[-12%] left-[-6%] pointer-events-none"
          animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* aurora sweep */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-60"
          style={{ background: "radial-gradient(ellipse 50% 40% at 70% 30%, rgba(113,42,255,0.20) 0%, transparent 60%)" }}
        />

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text + feature pills */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow-pill-light"
              >
                <motion.span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-2 bg-sky-400"
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                Language Programmes
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl font-black text-white mt-5 leading-[1.05] tracking-tight"
              >
                Six languages.
                <br />
                One world.
                <br />
                <span className="shimmer-text" style={{ backgroundImage: "linear-gradient(110deg,#6d8bff 0%,#6d8bff 36%,#ffffff 50%,#6d8bff 64%,#6d8bff 100%)" }}>
                  Infinite doors.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-5 text-lg text-white/65 max-w-lg leading-relaxed"
              >
                Every course is CEFR-aligned, culturally immersive, and taught by
                expert faculty who care about your actual goal, not just curriculum coverage.
              </motion.p>

              {/* Animated feature pills */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {features.map((f, i) => (
                  <motion.span
                    key={f}
                    className="flex items-center gap-1.5 text-white/85 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 16, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.08 }}
                  >
                    <CheckCircle size={11} className="text-sky-300" />
                    {f}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.95 }}
              >
                <Link href="#languages" className="btn-white text-base px-7 py-3.5">
                  See All Courses
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/919821275843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light text-base px-7 py-3.5"
                >
                  Free Counselling
                </a>
              </motion.div>
            </div>

            {/* Right: animated language constellation */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="relative mx-auto w-[460px] h-[460px]">
                {/* rotating orbit rings */}
                <motion.div
                  className="absolute inset-6 rounded-full border border-dashed border-white/15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-20 rounded-full border border-white/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                />

                {/* connecting lines from centre to each flag */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  {[[50, 10], [84.6, 30], [84.6, 70], [50, 90], [15.4, 70], [15.4, 30]].map(([x, y], i) => (
                    <motion.line
                      key={i}
                      x1="50" y1="50" x2={x} y2={y}
                      stroke="url(#lineGrad)" strokeWidth="0.4" strokeDasharray="2 2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#6d8bff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* central glowing orb */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center"
                  style={{ background: "radial-gradient(circle at 35% 30%, #6d8bff, #2f49c0 70%)", boxShadow: "0 0 60px rgba(59,91,219,0.6), inset 0 0 30px rgba(255,255,255,0.15)" }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-full grid-dots-light opacity-40" />
                  <Globe size={44} className="text-white relative z-10" strokeWidth={1.5} />
                </motion.div>

                {/* floating flag tiles */}
                {languages.slice(0, 6).map((lang, i) => {
                  const pos = [
                    { top: "10%", left: "50%" },
                    { top: "30%", left: "84.6%" },
                    { top: "70%", left: "84.6%" },
                    { top: "90%", left: "50%" },
                    { top: "70%", left: "15.4%" },
                    { top: "30%", left: "15.4%" },
                  ][i];
                  return (
                    <motion.div
                      key={lang.code}
                      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl p-2.5 bg-white/[0.07] border border-white/15 backdrop-blur-md shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)]"
                      style={{ top: pos.top, left: pos.left }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                      transition={{
                        opacity: { duration: 0.5, delay: 0.7 + i * 0.1 },
                        scale: { duration: 0.5, delay: 0.7 + i * 0.1, type: "spring", stiffness: 260 },
                        y: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                      }}
                    >
                      <CountryBadge code={lang.flagCode} color={lang.color} size="md" />
                    </motion.div>
                  );
                })}

                {/* sparkle accents */}
                {[{ t: "4%", l: "22%" }, { t: "84%", l: "70%" }, { t: "48%", l: "96%" }].map((s, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-sky-300"
                    style={{ top: s.t, left: s.l }}
                    animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                  >
                    <Sparkles size={16} />
                  </motion.span>
                ))}
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
            {orderedLanguages.map((lang) => {
              const accent = getLangAccent(lang.code);
              const soon = lang.comingSoon;

              const card = (
                <motion.div
                  className={`relative flex flex-col h-full rounded-2xl overflow-hidden bg-white ${soon ? "cursor-not-allowed" : "cursor-pointer"}`}
                  style={{
                    border: `1px solid #e6ebf5`,
                    borderLeft: `3px solid ${accent.border}`,
                    boxShadow: "0 1px 2px rgba(16,23,51,0.04), 0 8px 24px rgba(16,23,51,0.06)",
                  }}
                  whileHover={
                    soon
                      ? undefined
                      : {
                          y: -5,
                          boxShadow: `0 24px 60px ${accent.glow}, 0 0 0 1px ${accent.border}30`,
                        }
                  }
                  transition={{ duration: 0.25 }}
                >
                  {/* Coming soon overlay badge */}
                  {soon && (
                    <span className="absolute top-3 right-3 z-10 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-ink/85 text-white shadow-sm">
                      Coming Soon
                    </span>
                  )}

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
                        className={soon ? "grayscale opacity-70" : ""}
                        animate={soon ? undefined : { y: [0, -6, 0] }}
                        transition={soon ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
                      {soon ? (
                        <span className="text-sm text-muted font-semibold">Launching soon</span>
                      ) : (
                        <>
                          <span className="text-sm text-muted font-medium">View full programme</span>
                          <motion.div
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ background: accent.border }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <ArrowRight size={14} className="text-white" />
                          </motion.div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );

              return (
                <StaggerItem key={lang.code}>
                  {soon ? (
                    <div className="block h-full select-none" aria-disabled="true" title="Coming soon">
                      {card}
                    </div>
                  ) : (
                    <Link href={lang.href} className="group block h-full">
                      {card}
                    </Link>
                  )}
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
                consistent speaking practice, from your very first class.
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
                <CourseIncludesCard />
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

    </>
  );
}
