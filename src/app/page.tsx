"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Star, CheckCircle, ChevronDown,
  Users, Globe, Video, MessageCircle, Sparkles,
} from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { languages, testimonials, faqs } from "@/lib/constants";
import { MuiIcon, Flag, flagSrc } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";

/* ───────────────────────────────────────────────
   Language Network Visualization (light theme)
   - 3 orbital rings (alternating CW / CCW)
   - 6 white glass language cards orbiting the deep
     royal hub globe. Royal + sky accents.
─────────────────────────────────────────────── */

const ORBIT_CONFIG = [
  {
    radius: 178,
    duration: 30,
    dir: 1,
    dash: "",
    trackColor: "#3b5bdb",
    tags: [
      { name: "French",  flagCode: "FR", start: 0,   glow: "#3b5bdb" },
      { name: "Korean",  flagCode: "KR", start: 180, glow: "#0ea5e9" },
    ],
  },
  {
    radius: 218,
    duration: 40,
    dir: -1,
    dash: "7 14",
    trackColor: "#0ea5e9",
    tags: [
      { name: "German",  flagCode: "DE", start: 90,  glow: "#6d8bff" },
      { name: "Spanish", flagCode: "ES", start: 270, glow: "#38bdf8" },
    ],
  },
  {
    radius: 244,
    duration: 52,
    dir: 1,
    dash: "3 9",
    trackColor: "#3b5bdb",
    tags: [
      { name: "Japanese", flagCode: "JP", start: 45,  glow: "#3b5bdb" },
      { name: "IELTS",    flagCode: "EN", start: 225, glow: "#0ea5e9" },
    ],
  },
];

const BG_NODES = [
  { cx: 58,  cy: 90,  r: 1.5, fill: "#3b5bdb", op: 0.5 },
  { cx: 478, cy: 108, r: 1,   fill: "#0ea5e9", op: 0.6 },
  { cx: 85,  cy: 435, r: 1.5, fill: "#6d8bff", op: 0.4 },
  { cx: 482, cy: 418, r: 1,   fill: "#3b5bdb", op: 0.5 },
  { cx: 35,  cy: 270, r: 1,   fill: "#0ea5e9", op: 0.4 },
  { cx: 508, cy: 270, r: 1.5, fill: "#3b5bdb", op: 0.5 },
  { cx: 165, cy: 48,  r: 1,   fill: "#6d8bff", op: 0.4 },
  { cx: 378, cy: 46,  r: 1,   fill: "#0ea5e9", op: 0.35 },
  { cx: 148, cy: 496, r: 1,   fill: "#3b5bdb", op: 0.4 },
  { cx: 392, cy: 498, r: 1,   fill: "#6d8bff", op: 0.4 },
  { cx: 28,  cy: 145, r: 1,   fill: "#3b5bdb", op: 0.3 },
  { cx: 518, cy: 155, r: 1,   fill: "#0ea5e9", op: 0.3 },
];

const SPOKE_LINES = [0, 60, 120, 180, 240, 300].map((angle) => {
  const rad = (angle * Math.PI) / 180;
  return {
    angle,
    x2: Math.round((270 + 220 * Math.cos(rad)) * 1e6) / 1e6,
    y2: Math.round((270 + 220 * Math.sin(rad)) * 1e6) / 1e6,
  };
});

function LanguageNetwork() {
  return (
    <motion.div
      className="relative w-full aspect-square max-w-[540px] mx-auto select-none"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >

      {/* atmosphere glows */}
      <div className="absolute inset-[24%] rounded-full bg-royal-400/20 blur-[70px] pointer-events-none" />
      <div className="absolute inset-[37%] rounded-full bg-royal-500/25 blur-[35px] pointer-events-none" />

      {/* dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59,91,219,0.12) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* SVG: orbit tracks + faint spokes + bg particles */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 540 540">
        {ORBIT_CONFIG.map((o) => (
          <circle
            key={o.radius}
            cx="270" cy="270" r={o.radius}
            fill="none"
            stroke={o.trackColor}
            strokeWidth="0.6"
            strokeOpacity="0.3"
            strokeDasharray={o.dash || undefined}
          />
        ))}
        {SPOKE_LINES.map((s) => (
          <line
            key={s.angle}
            x1="270" y1="270"
            x2={s.x2} y2={s.y2}
            stroke="#3b5bdb" strokeWidth="0.4" strokeOpacity="0.10"
          />
        ))}
        {BG_NODES.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} opacity={n.op} />
        ))}
      </svg>

      {/* Orbiting language glass cards */}
      {ORBIT_CONFIG.map((orbit) =>
        orbit.tags.map((tag) => (
          <div
            key={tag.name}
            style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0, zIndex: 15 }}
          >
            <motion.div
              style={{ position: "absolute", transformOrigin: "0 0" }}
              initial={{ rotate: tag.start }}
              animate={{ rotate: tag.start + orbit.dir * 360 }}
              transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                style={{ position: "absolute", left: 0, top: -orbit.radius, x: "-50%", y: "-50%" }}
                initial={{ rotate: -tag.start }}
                animate={{ rotate: -(tag.start + orbit.dir * 360) }}
                transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 11px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.95)",
                    border: `1px solid ${tag.glow}40`,
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: `0 0 14px ${tag.glow}20, 0 6px 16px rgba(16,23,51,0.10)`,
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                >
                  <Flag code={tag.flagCode} size={14} rounded="rounded-sm" />
                  <span style={{ color: "#1b2a63", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.03em" }}>
                    {tag.name}
                  </span>
                  <span
                    style={{
                      width: "5px", height: "5px", borderRadius: "50%",
                      background: tag.glow, boxShadow: `0 0 6px ${tag.glow}`,
                      flexShrink: 0, display: "inline-block",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute", top: "100%", left: "50%",
                    width: "1px", height: "10px", transform: "translateX(-50%)",
                    background: `linear-gradient(to bottom, ${tag.glow}55, transparent)`,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        ))
      )}

      {/* Central hub – Earth */}
      <div
        style={{ position: "absolute", top: "50%", left: "50%", width: "62%", aspectRatio: "1", transform: "translate(-50%, -50%)", zIndex: 10 }}
      >
        {/* atmosphere glow */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ inset: "-16%", background: "radial-gradient(circle, rgba(59,91,219,0.5) 0%, rgba(14,165,233,0.16) 45%, transparent 70%)" }}
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.06, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* expanding sonar ring */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(125,211,252,0.35)" }}
          animate={{ scale: [1, 1.32], opacity: [0.55, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeOut" }}
        />
        {/* the planet */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ boxShadow: "0 0 70px rgba(59,91,219,0.45), 0 0 28px rgba(14,165,233,0.3)" }}
        >
          <Image
            src="/images/earth.png"
            alt="Earth"
            fill
            sizes="(min-width:1024px) 340px, 1px"
            className="object-cover"
            priority
          />
          {/* rim-light sheen */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle at 30% 26%, rgba(255,255,255,0.18) 0%, transparent 42%)" }}
          />
        </div>
      </div>

      {/* floating accent particles */}
      <motion.div
        style={{ position: "absolute", top: "6%", right: "9%", width: "8px", height: "8px", borderRadius: "50%", background: "#0ea5e9", boxShadow: "0 0 10px #0ea5e9, 0 0 22px rgba(14,165,233,0.5)", zIndex: 5 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ position: "absolute", bottom: "9%", left: "6%", width: "6px", height: "6px", borderRadius: "50%", background: "#3b5bdb", boxShadow: "0 0 8px #3b5bdb", zIndex: 5 }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        style={{ position: "absolute", top: "47%", right: "2%", width: "4px", height: "4px", borderRadius: "50%", background: "#6d8bff", zIndex: 5 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        style={{ position: "absolute", top: "20%", left: "3%", width: "5px", height: "5px", borderRadius: "50%", background: "#3b5bdb", boxShadow: "0 0 7px #3b5bdb", zIndex: 5 }}
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
      />
    </motion.div>
  );
}

/* ─────────────────────────── Stat Cards ─────────────────────────── */
const STAT_CARDS = [
  { title: "Live-Interactive Sessions", desc: "Real-time classes, never recordings",  Icon: Video,         iconColor: "#3b5bdb", lineColor: "#3b5bdb" },
  { title: "Small Cohorts",             desc: "Max 12 learners per batch",             Icon: Users,         iconColor: "#0ea5e9", lineColor: "#0ea5e9" },
  { title: "24×7 Doubt Support",        desc: "Help whenever you need it",             Icon: MessageCircle, iconColor: "#6d8bff", lineColor: "#6d8bff" },
  { title: "Soft-Skills Included",      desc: "Confidence & communication built in",   Icon: Sparkles,      iconColor: "#3b5bdb", lineColor: "#3b5bdb" },
];

/* Exams each programme prepares you for */
const PREPARES: Record<string, string> = {
  fr: "DELF · DALF · TEF Canada · TCF Canada",
  de: "Goethe · TELC · TestDaF · DSH",
  es: "DELE · SIELE",
  jp: "JLPT (N5–N2)",
  kr: "TOPIK I & II",
  en: "IELTS · PTE · TOEFL",
};

/* Programmes not yet open for enrolment */
const COMING_SOON = ["es", "jp", "kr"];

/* Goal-based learning tracks */
const TRACKS = [
  {
    title: "Immigration Track",
    badge: "Immigration",
    icon: "flight",
    ideal: "Canada PR · France & Germany immigration · Work visas",
    different: "Visa interview simulations, official document vocabulary, and embassy communication in your target language.",
    exams: ["TEF Canada", "TCF Canada", "IELTS", "Goethe"],
  },
  {
    title: "Academic Track",
    badge: "Academic",
    icon: "school",
    ideal: "Study abroad · University admissions · Scholarship applications",
    different: "Academic writing, university interview prep, and Sciences Po / TU Munich-style presentation formats.",
    exams: ["DELF B2", "DALF", "Goethe B2", "IELTS Academic"],
  },
  {
    title: "Career Track",
    badge: "Career",
    icon: "work",
    ideal: "MNC jobs · Client-facing roles · Professional communication",
    different: "Boardroom-ready speaking, email writing in the target language, and negotiation vocabulary.",
    exams: ["Business Comm", "Presentations", "Interview Skills", "IELTS General"],
  },
  {
    title: "Sprint Track",
    badge: "Sprint",
    icon: "rocket",
    ideal: "Tight deadlines — visa filing, university intake, job change or relocation.",
    different: "An intensive schedule with more live classes per week, daily speaking practice, and tight progress checks.",
    exams: ["TEF / TCF Canada", "DELF / Goethe", "IELTS (Acad. & Gen.)"],
  },
];

/* hexagon clip-path for journey nodes */
const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

/* Step-by-step learner journey */
const JOURNEY = [
  { n: "01", icon: "target",   title: "Choose Your Goal",      desc: "Immigration · Academic · Career. Pick the track that matches your destination." },
  { n: "02", icon: "book",     title: "Select Your Programme", desc: "A standard 36-week path, or an intensive 14–16 week pathway for hard deadlines." },
  { n: "03", icon: "computer", title: "Learn & Practice",      desc: "3 live classes a week · AI speaking portal · bi-weekly assessments · soft-skills sessions." },
  { n: "04", icon: "trophy",   title: "Get Certified",         desc: "ALB Level Certificate · international exam readiness · CEFR-aligned credentials." },
];

/* ─────────────────────────── Page ─────────────────────────── */
export default function HomePage() {
  const { openModal } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-site">

      {/* ══════════════════════════ HERO (dark anchor) ══════════════════════════ */}
      <section className="sec-dark relative min-h-[100svh] flex items-center overflow-hidden pt-20 pb-10">

        {/* dot grid bg */}
        <div className="absolute inset-0 grid-dots-light pointer-events-none opacity-40" />
        <div className="blob blob-royal w-[520px] h-[420px] bottom-0 right-[12%] pointer-events-none" />
        <div className="blob blob-sky w-[360px] h-[360px] top-[8%] left-[-6%] pointer-events-none" />

        <div className="container-max px-5 md:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">

            {/* ── Left: text ── */}
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 glass-light text-royal-100 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                  <Globe size={11} />
                  India&apos;s first language + Soft Skills Academy
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl xl:text-[3.6rem] font-black text-white leading-[1.05] tracking-tight"
              >
                Helping you
                <br />
                <span className="gradient-text-light">Speak, Connect &amp; Belong</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-5 text-base md:text-lg text-white/55 max-w-lg leading-relaxed"
              >
                From learning a language to living it. Master the language and
                build the confidence to thrive in every conversation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.33 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link href="/courses" className="btn-primary text-sm px-7 py-3.5 font-bold rounded-full flex items-center gap-2">
                  Explore Courses <ArrowRight size={14} />
                </Link>
                <button
                  onClick={() => openModal()}
                  className="btn-outline-light text-sm px-7 py-3.5 rounded-full flex items-center gap-2"
                >
                  Book a Free Demo <ArrowRight size={14} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.46 }}
                className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-white/50 text-xs"
              >
                {["DELF · DALF", "TEF · TCF Canada", "Goethe · TestDaF", "IELTS · PTE · TOEFL"].map((e) => (
                  <span key={e} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-sky-400" />
                    {e}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-7 flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {["PS", "AM", "KN", "RJ", "SP"].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#141f4d] bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center text-white font-black text-[9px] shadow-sm">
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
                    <span className="text-white text-xs font-bold ml-1">4.9/5</span>
                  </div>
                  <p className="text-white/40 text-xs">from 5,000+ learners</p>
                </div>
              </motion.div>
            </div>

            {/* ── Right: Language Network ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center py-6"
            >
              <LanguageNetwork />
            </motion.div>
          </div>

          {/* ── Stat cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14"
          >
            {STAT_CARDS.map((s) => (
              <div key={s.title} className="card-dark-hover rounded-2xl p-5 flex flex-col gap-3 overflow-hidden">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${s.iconColor}26` }}>
                  <s.Icon size={20} style={{ color: s.iconColor === "#3b5bdb" ? "#9bb2ff" : s.iconColor }} />
                </div>
                <div className="text-lg md:text-xl font-black text-white leading-tight">{s.title}</div>
                <div className="h-0.5 w-8 rounded-full mt-auto" style={{ background: s.lineColor }} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-royal-300">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════ MARQUEE ══════════════════════ */}
      <section className="py-6 border-y border-line bg-white overflow-hidden">
        <div className="marquee-wrap">
          <div className="marquee-inner gap-8">
            {[...languages, ...languages].map((lang, i) => (
              <span key={i} className="flex items-center gap-2.5 text-muted text-sm font-semibold px-6">
                <Flag code={lang.flagCode} size={22} rounded="rounded" className="ring-1 ring-line" />
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROBLEM → SOLUTION ══════════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />
        <div className="blob blob-sky w-[420px] h-[420px] top-0 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">

          {/* ── centered header ── */}
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-royal-300" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-royal-600">The Real Problem</span>
              <span className="h-px w-8 bg-royal-300" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-ink leading-[1.12]">
              Language fluency alone{" "}
              <span className="gradient-text">won&apos;t get you there.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              Most institutes teach grammar, test vocabulary, and hand you a certificate — but
              never prepare you for a visa interview, a university panel, or a salary negotiation.
              That gap between being <strong className="text-ink font-bold">fluent</strong> and being{" "}
              <strong className="text-ink font-bold">effective</strong> is exactly what ALB was built to close.
            </p>
          </AnimateOnView>

          {/* ── three problem cards ── */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { tag: "Problem 01", title: "Froze in the interview", quote: "I passed my DELF but froze in the visa interview." },
              { tag: "Problem 02", title: "Band 7, still stuck", quote: "My IELTS band is 7 but I can't hold a professional conversation." },
              { tag: "Problem 03", title: "Years in, still hesitant", quote: "I learned French for 2 years but couldn't introduce myself confidently." },
            ].map((c, i) => (
              <StaggerItem key={c.title}>
                <div className="card-feature rounded-2xl p-7 flex flex-col h-full min-h-[330px]">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-rose-500">{c.tag}</span>
                  <h3 className="mt-2 text-xl font-black text-ink leading-snug">{c.title}</h3>
                  <p className="mt-3 text-muted text-sm leading-relaxed italic">&ldquo;{c.quote}&rdquo;</p>

                  {/* decorative visual */}
                  <div className="mt-auto pt-8">
                    {i === 0 && (
                      <svg viewBox="0 0 240 80" className="w-full h-20" fill="none" preserveAspectRatio="none">
                        <polyline points="6,54 46,42 86,20 126,26 166,54 234,68" stroke="#3b5bdb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="86" cy="20" r="4" fill="#3b5bdb" />
                        <circle cx="234" cy="68" r="5" fill="#f43f5e" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg viewBox="0 0 240 80" className="w-full h-20">
                        {[30, 46, 62, 42, 54, 32, 20, 14, 18, 10].map((h, idx) => (
                          <rect key={idx} x={idx * 24 + 6} y={72 - h} width="11" height={h} rx="3" fill={idx < 5 ? "#3b5bdb" : "#cdd9f7"} />
                        ))}
                      </svg>
                    )}
                    {i === 2 && (
                      <svg viewBox="0 0 240 80" className="w-full h-20" fill="none">
                        <line x1="16" y1="40" x2="224" y2="40" stroke="#dbe6ff" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round" />
                        {[16, 68, 120, 172, 224].map((x, idx) => (
                          <circle key={idx} cx={x} cy="40" r={idx === 4 ? 7 : 6} fill={idx < 4 ? "#3b5bdb" : "#ffffff"} stroke={idx === 4 ? "#9bb2ff" : "none"} strokeWidth="2" />
                        ))}
                      </svg>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* ── solution CTA bar ── */}
          <AnimateOnView className="mt-6">
            <div className="sec-dark rounded-2xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">
              <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
              <p className="relative z-10 text-white/80 text-center md:text-left text-sm md:text-base leading-relaxed max-w-2xl">
                <strong className="text-white font-bold">At ALB, soft skills aren&apos;t an add-on.</strong> They&apos;re woven into
                every programme from day one — so you don&apos;t just learn the language, you own the room in it.
              </p>
              <button onClick={() => openModal()} className="btn-white relative z-10 whitespace-nowrap flex-shrink-0">
                Book a Free Demo <ArrowRight size={15} />
              </button>
            </div>
          </AnimateOnView>

        </div>
      </section>

      {/* ══════════════════════ LANGUAGE CARDS ══════════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] top-0 right-[-8%] opacity-60 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow-pill-blue">Language Programmes</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-ink mt-1">
              Six languages. One world.
              <br />
              <span className="gradient-text">Infinite doors.</span>
            </h2>
            <p className="mt-4 text-body text-lg max-w-xl mx-auto leading-relaxed">
              CEFR-aligned, culturally immersive, taught by experts who care about
              your goal — not just curriculum coverage.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {[...languages]
              .sort((a, b) => Number(COMING_SOON.includes(a.code)) - Number(COMING_SOON.includes(b.code)))
              .map((lang) => {
                const comingSoon = COMING_SOON.includes(lang.code);

                const card = (
                  <>
                    {/* dark royal header */}
                    <div
                      className="relative flex items-end justify-between px-6 pt-16 pb-5 min-h-[150px] overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #16276b 0%, #2f49c0 100%)" }}
                    >
                      {/* faded flag watermark */}
                      <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
                        <Image src={flagSrc[lang.flagCode]} alt="" fill sizes="380px" className="object-cover" />
                      </div>
                      {/* gradient wash to keep text legible */}
                      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(22,39,107,0.55) 0%, rgba(47,73,192,0.45) 100%)" }} />
                      <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
                      <h3 className="relative z-10 font-display text-3xl font-semibold text-white tracking-wide leading-none">{lang.name}</h3>
                      <Flag code={lang.flagCode} size={30} rounded="rounded-md" className="relative z-10 shadow-md" />
                    </div>

                    {/* white body */}
                    <div className="p-6 bg-white">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Levels</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {lang.levels.map((l) => (
                          <span key={l} className="text-[11px] font-semibold bg-royal-50 text-royal-700 px-2.5 py-1 rounded-full">{l}</span>
                        ))}
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted mt-5">Prepares For</p>
                      <p className="text-sm text-body mt-1.5">{PREPARES[lang.code] ?? lang.tagline}</p>

                      {!comingSoon && (
                        <div className="flex items-center gap-1.5 mt-5 text-royal-600 font-bold text-sm">
                          View program
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </>
                );

                return (
                  <StaggerItem key={lang.code}>
                    {comingSoon ? (
                      <div className="card relative h-full rounded-2xl overflow-hidden cursor-default select-none">
                        {card}
                        {/* coming-soon overlay */}
                        <div className="absolute inset-0 bg-ink/45 backdrop-blur-[2px] flex items-center justify-center">
                          <span className="px-4 py-2 rounded-full bg-white text-royal-700 font-bold text-sm shadow-lg flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    ) : (
                      <Link href={lang.href} className="card-hover group block h-full rounded-2xl overflow-hidden">
                        {card}
                      </Link>
                    )}
                  </StaggerItem>
                );
              })}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ TRACKS (dark anchor) ══════════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="blob blob-sky w-[460px] h-[460px] top-0 right-[-8%] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-white/25" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Choose Your Track</span>
              <span className="h-px w-8 bg-white/25" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.12]">
              A track built around{" "}
              <span className="gradient-text-light">your goal.</span>
            </h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
              Immigrating, studying abroad, advancing your career, or racing a deadline —
              every programme is shaped around the outcome you actually need.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.09}>
            {TRACKS.map((t, i) => (
              <StaggerItem key={t.title}>
                <div className="group/track h-full rounded-3xl p-7 relative overflow-hidden flex flex-col bg-white shadow-[0_18px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1.5">
                  {/* gradient top edge */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b5bdb] to-[#38bdf8]" />
                  <div className="absolute -top-5 -right-5 opacity-[0.06] pointer-events-none">
                    <MuiIcon name={t.icon} size={130} style={{ color: "#3b5bdb" }} />
                  </div>

                  <span className="relative z-10 inline-flex w-fit items-center gap-1.5 bg-royal-50 border border-royal-100 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-royal-700">
                    <MuiIcon name={t.icon} size={13} style={{ color: "#3b5bdb" }} />
                    Track {i + 1}
                  </span>

                  <h3 className="relative z-10 text-2xl font-black text-ink mt-5 leading-tight">{t.title}</h3>

                  <p className="relative z-10 text-xs text-muted mt-3 leading-relaxed">
                    <span className="font-bold text-ink">Ideal for:</span> {t.ideal}
                  </p>
                  <p className="relative z-10 text-sm text-body mt-3 leading-relaxed">{t.different}</p>

                  <div className="relative z-10 flex flex-wrap gap-1.5 mt-5">
                    {t.exams.map((e) => (
                      <span key={e} className="text-[11px] font-semibold bg-royal-50 border border-royal-100 rounded-lg px-2.5 py-1 text-royal-700">
                        {e}
                      </span>
                    ))}
                  </div>

                  <Link href="/courses" className="relative z-10 mt-auto pt-6 inline-flex items-center gap-1.5 text-royal-600 font-bold text-sm">
                    Explore track
                    <ArrowRight size={14} className="group-hover/track:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ WHY ALB ══════════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[460px] h-[460px] top-0 right-0 opacity-40 pointer-events-none" />
        <div className="blob blob-royal w-[380px] h-[380px] bottom-0 left-[-6%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10">

          {/* header */}
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">Why Choose ALB</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-[1.12]">
              Not just a class.{" "}
              <span className="gradient-text">A complete transformation.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              A methodology honed for Indian learners — outcome-driven, immersive, and
              designed to take you straight to the result that matters most to you.
            </p>
          </AnimateOnView>

          {/* bento grid */}
          <StaggerContainer className="grid lg:grid-cols-3 gap-4 md:gap-5" staggerDelay={0.08}>

            {/* Live interactive — wide */}
            <StaggerItem className="lg:col-span-2">
              <div className="card-hover rounded-2xl p-7 h-full flex flex-col sm:flex-row sm:items-center gap-6 overflow-hidden">
                <div className="flex-1">
                  <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                    <MuiIcon name="chat" size={22} style={{ color: "#3b5bdb" }} />
                  </div>
                  <h3 className="text-lg font-black text-ink">Live interactive learning</h3>
                  <p className="text-muted text-sm mt-1.5 leading-relaxed">
                    3 live sessions a week with a qualified mentor, plus regular speaking practice — never pre-recorded.
                  </p>
                </div>
                {/* session-activity bars */}
                <div className="flex items-end gap-1.5 h-24 sm:w-48 flex-shrink-0">
                  {[44, 68, 54, 84, 50, 74, 38, 62, 80, 46].map((h, idx) => (
                    <motion.span
                      key={idx}
                      className="flex-1 rounded-full"
                      style={{ height: `${h}%`, background: idx % 3 === 1 ? "#0ea5e9" : "#c2d2ff", transformOrigin: "bottom" }}
                      animate={idx % 3 === 1 ? { scaleY: [1, 0.7, 1], opacity: [1, 0.7, 1] } : {}}
                      transition={idx % 3 === 1 ? { duration: 2.2, repeat: Infinity, delay: idx * 0.2, ease: "easeInOut" } : {}}
                    />
                  ))}
                </div>
              </div>
            </StaggerItem>

            {/* Small cohorts */}
            <StaggerItem>
              <div className="card-hover rounded-2xl p-7 h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                  <MuiIcon name="people" size={22} style={{ color: "#3b5bdb" }} />
                </div>
                <h3 className="text-lg font-black text-ink">Small cohorts</h3>
                <p className="text-muted text-sm mt-1.5 leading-relaxed">
                  Real speaking time, real feedback — no hiding at the back of a 60-person class.
                </p>
                <div className="flex items-center -space-x-2 mt-auto pt-5">
                  {["AR", "PK", "SN", "RM"].map((x) => (
                    <div key={x} className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center text-white font-black text-[10px]">{x}</div>
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-royal-50 flex items-center justify-center text-royal-700 font-black text-[10px]">+8</div>
                  <span className="text-xs text-muted font-semibold !ml-3">Max 12 / batch</span>
                </div>
              </div>
            </StaggerItem>

            {/* Goal-certified tracks */}
            <StaggerItem>
              <div className="card-hover rounded-2xl p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                  <MuiIcon name="target" size={22} style={{ color: "#3b5bdb" }} />
                </div>
                <h3 className="text-lg font-black text-ink">Goal-certified tracks</h3>
                <p className="text-muted text-sm mt-1.5 leading-relaxed">
                  Immigration, Academic, or Career — your path shapes everything from enrolment day.
                </p>
              </div>
            </StaggerItem>

            {/* International exam prep */}
            <StaggerItem>
              <div className="card-hover rounded-2xl p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                  <MuiIcon name="article" size={22} style={{ color: "#3b5bdb" }} />
                </div>
                <h3 className="text-lg font-black text-ink">International exam prep included</h3>
                <p className="text-muted text-sm mt-1.5 leading-relaxed">
                  DELF, IELTS &amp; Goethe prep built into the final two weeks. No bolt-on fees.
                </p>
              </div>
            </StaggerItem>

            {/* Soft skills */}
            <StaggerItem>
              <div className="card-hover rounded-2xl p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                  <MuiIcon name="sparkle" size={22} style={{ color: "#3b5bdb" }} />
                </div>
                <h3 className="text-lg font-black text-ink">Soft skills in every batch</h3>
                <p className="text-muted text-sm mt-1.5 leading-relaxed">
                  Confidence, communication, and professional presence — not optional. Built in.
                </p>
              </div>
            </StaggerItem>

            {/* India-first pedagogy — full width */}
            <StaggerItem className="lg:col-span-3">
              <div className="card-hover rounded-2xl p-7 h-full flex flex-col md:flex-row md:items-center gap-7">
                <div className="md:max-w-sm">
                  <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                    <MuiIcon name="translate" size={22} style={{ color: "#3b5bdb" }} />
                  </div>
                  <h3 className="text-lg font-black text-ink">India-first pedagogy</h3>
                  <p className="text-muted text-sm mt-1.5 leading-relaxed">
                    Hindi cognates, India-relevant scenarios, and visa &amp; embassy vocabulary — not generic Western textbooks.
                  </p>
                </div>
                <div className="flex-1 flex flex-wrap items-center gap-2 md:gap-3">
                  {["Hindi cognates", "India-relevant scenarios", "Visa & embassy vocabulary", "Real interview prep"].map((c, idx, arr) => (
                    <div key={c} className="flex items-center gap-2 md:gap-3">
                      <span className="bg-royal-50 border border-royal-100 text-royal-700 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap">{c}</span>
                      {idx < arr.length - 1 && <ArrowRight size={14} className="text-royal-300 hidden sm:block flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ +BEYOND (dark anchor) ══════════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-sky w-[520px] h-[320px] bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <span className="eyebrow-pill-light">+Beyond Programmes</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-1">
              Language opens the door.
              <br />
              <span className="gradient-text-light">Soft skills own the room.</span>
            </h2>
            <p className="mt-4 text-white/55 max-w-xl mx-auto">
              Public Speaking, Business Communication, Leadership, Personality Development
              — standalone or bundled with any language course.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 text-left" staggerDelay={0.07}>
            {[
              { icon: "mic",     title: "Public Speaking",         desc: "Command any room — from 5-person meetings to 500-seat stages." },
              { icon: "work",    title: "Business Communication",  desc: "Write sharper emails, lead better meetings, negotiate with clarity." },
              { icon: "sparkle", title: "Personality Development", desc: "Executive presence, EQ, and authentic confidence — built systematically." },
              { icon: "stars",   title: "Leadership Presence",     desc: "Inspire teams and communicate vision at every level." },
              { icon: "target",  title: "Interview Mastery",       desc: "Crack MNC, MBA, visa, and scholarship interviews with confidence." },
              { icon: "globe",   title: "Cross-Cultural Comm.",    desc: "Navigate global workplaces and cultures with ease and empathy." },
            ].map((m) => (
              <StaggerItem key={m.title}>
                <div className="card-dark-hover rounded-2xl p-5 h-full">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <MuiIcon name={m.icon} size={22} style={{ color: "#7dd3fc" }} />
                  </div>
                  <h3 className="text-white font-bold text-base">{m.title}</h3>
                  <p className="text-white/50 text-xs mt-1.5 leading-relaxed">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnView className="mt-10">
            <Link href="/beyond" className="btn-white">
              Explore +Beyond <ArrowRight size={15} />
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] bottom-[-10%] left-[-6%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow-pill-blue">Learner Stories</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-1">
              Real results from <span className="gradient-text">real people.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid md:grid-cols-3 gap-4" staggerDelay={0.08}>
            {testimonials.slice(0, 3).map((t, i) => (
              <StaggerItem key={i}>
                <div className="card rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map((j) => <Star key={j} size={12} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-body text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-line">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center text-white font-black text-xs flex-shrink-0">{t.avatar}</div>
                    <div>
                      <p className="font-bold text-ink text-sm">{t.name}</p>
                      <p className="text-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 mt-4" staggerDelay={0.08}>
            {testimonials.slice(3).map((t, i) => (
              <StaggerItem key={i}>
                <div className="card rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map((j) => <Star key={j} size={12} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-body text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-line">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] flex items-center justify-center text-white font-black text-xs flex-shrink-0">{t.avatar}</div>
                    <div>
                      <p className="font-bold text-ink text-sm">{t.name}</p>
                      <p className="text-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ YOUR JOURNEY ══════════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[440px] h-[440px] top-10 right-[-8%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-royal-300" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-royal-600">The ALB Path</span>
              <span className="h-px w-8 bg-royal-300" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-ink leading-tight">
              Your journey{" "}
              <span className="gradient-text">with us<span className="text-sky-500">.</span></span>
            </h2>
          </AnimateOnView>

          <div className="relative mt-10">

            {/* ── desktop: wave with nodes sitting on the curve ── */}
            <div className="hidden lg:block relative" style={{ height: 500 }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 500" fill="none" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="journeyGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3b5bdb" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,230 C75,170 110,170 150,170 C300,170 320,330 450,330 C600,330 620,170 750,170 C900,170 920,330 1050,330 C1120,330 1160,290 1200,290"
                  stroke="#e6ebf5"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <motion.path
                  id="journeyLine"
                  d="M0,230 C75,170 110,170 150,170 C300,170 320,330 450,330 C600,330 620,170 750,170 C900,170 920,330 1050,330 C1120,330 1160,290 1200,290"
                  stroke="url(#journeyGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
                <circle r="7" fill="#0ea5e9" style={{ filter: "drop-shadow(0 0 7px rgba(14,165,233,0.9))" }}>
                  <animateMotion dur="6s" repeatCount="indefinite">
                    <mpath href="#journeyLine" />
                  </animateMotion>
                </circle>
              </svg>

              {JOURNEY.map((s, i) => {
                const high = i % 2 === 0;
                const y = high ? 170 : 330;
                return (
                  <div key={s.n} className="absolute inset-y-0" style={{ left: `${i * 25}%`, width: "25%" }}>
                    {/* watermark number — under the icon (high) / above the icon (low) */}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 text-[6.5rem] font-black text-royal-100 select-none leading-none pointer-events-none z-0"
                      style={{ top: high ? y + 44 : y - 148 }}
                    >
                      {s.n}
                    </span>

                    {/* hexagon node centred on the curve */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
                      style={{ top: y }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.12 + 0.35 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-royal-400/30 blur-md" />
                      <div className="absolute -inset-[2px]" style={{ background: "#c2d2ff", clipPath: HEX }} />
                      <div className="absolute inset-0 bg-white flex items-center justify-center" style={{ clipPath: HEX }}>
                        <MuiIcon name={s.icon} size={26} style={{ color: "#3b5bdb" }} />
                      </div>
                    </motion.div>

                    {/* text above (high) or below (low) the node */}
                    <div className="absolute left-0 right-0 px-3 text-center" style={high ? { bottom: 378 } : { top: 378 }}>
                      <h3 className="font-black text-ink text-lg">{s.title}</h3>
                      <p className="mt-2 text-muted text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── mobile / tablet: stacked ── */}
            <StaggerContainer className="lg:hidden grid sm:grid-cols-2 gap-x-6 gap-y-12 mt-2" staggerDelay={0.1}>
              {JOURNEY.map((s) => (
                <StaggerItem key={s.n} className="text-center relative">
                  <span className="absolute left-1/2 -translate-x-1/2 -top-6 text-[5rem] font-black text-royal-50 select-none leading-none pointer-events-none">{s.n}</span>
                  <div className="relative z-10 mx-auto w-16 h-16">
                    <div className="absolute inset-0 rounded-full bg-royal-400/30 blur-md" />
                    <div className="absolute -inset-[2px]" style={{ background: "#c2d2ff", clipPath: HEX }} />
                    <div className="absolute inset-0 bg-white flex items-center justify-center" style={{ clipPath: HEX }}>
                      <MuiIcon name={s.icon} size={26} style={{ color: "#3b5bdb" }} />
                    </div>
                  </div>
                  <h3 className="relative z-10 mt-4 font-black text-ink text-lg">{s.title}</h3>
                  <p className="relative z-10 mt-2 text-muted text-sm leading-relaxed max-w-[280px] mx-auto">{s.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FAQ ══════════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <AnimateOnView direction="right" className="lg:sticky lg:top-28">
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-1">
                Got questions?
                <br />
                <span className="gradient-text">We&apos;ve got answers.</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed text-sm">
                Still curious? Book a free 30-minute counselling call — no commitment.
              </p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
                WhatsApp Us <ArrowRight size={15} />
              </a>
            </AnimateOnView>

            <AnimateOnView direction="left" className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-royal-50/50 transition-colors"
                  >
                    <span className="font-semibold text-ink text-sm pr-4">{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0 text-royal-400">
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 text-body text-sm leading-relaxed border-t border-line pt-4">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FINAL CTA (dark anchor) ══════════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-royal w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <span className="eyebrow-pill-light">Start Today</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 max-w-3xl mx-auto leading-tight">
              Your global journey begins with a single conversation.
            </h2>
            <p className="mt-5 text-white/55 text-lg max-w-xl mx-auto">Free counselling · No commitment · Expert guidance</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/courses" className="btn-white text-base px-8 py-4 flex items-center gap-2">
                Explore All Courses <ArrowRight size={16} />
              </Link>
              <button onClick={() => openModal()} className="btn-outline-light text-base px-8 py-4">
                Book Free Call
              </button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/55 text-sm">
              {["5000+ Learners", "95% Goal Rate", "6 Languages", "12+ Years"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-sky-300" />
                  {item}
                </div>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

    </div>
  );
}
