"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Star, CheckCircle, ChevronDown,
  Shield, Users, Target, Award, Globe,
} from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { languages, testimonials, faqs, whyAlbPoints } from "@/lib/constants";
import { MuiIcon, Flag } from "@/lib/icons";
import { CountUp } from "@/components/shared/CountUp";
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
  { value: "5000+", label: "Learners Transformed", Icon: Users,  iconColor: "#3b5bdb", lineColor: "#3b5bdb" },
  { value: "95%",   label: "Goal Achievement Rate", Icon: Target, iconColor: "#0ea5e9", lineColor: "#0ea5e9" },
  { value: "12+",   label: "Years of Excellence",   Icon: Award,  iconColor: "#6d8bff", lineColor: "#6d8bff" },
  { value: "6",     label: "Languages Offered",     Icon: Globe,  iconColor: "#3b5bdb", lineColor: "#3b5bdb" },
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
                  India&apos;s Premier Language &amp; Soft Skills Academy
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl xl:text-[3.6rem] font-black text-white leading-[1.05] tracking-tight"
              >
                Go Global. Speak Fluent.
                <br />
                <span className="gradient-text-light">Lead Bold.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-5 text-base md:text-lg text-white/55 max-w-lg leading-relaxed"
              >
                French, German, Spanish, Japanese, Korean &amp; IELTS — plus world-class
                soft skills that turn ambitious Indian learners into confident global citizens.
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
                  Book Free Session <ArrowRight size={14} />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.46 }}
                className="mt-4 text-white/40 text-xs flex items-center gap-2"
              >
                <Shield size={10} />
                Free counselling · No commitment · Expert guidance
              </motion.p>

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
              <div key={s.value} className="card-dark-hover rounded-2xl p-5 flex flex-col gap-3 overflow-hidden">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${s.iconColor}26` }}>
                  <s.Icon size={20} style={{ color: s.iconColor === "#3b5bdb" ? "#9bb2ff" : s.iconColor }} />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white">
                    <CountUp value={s.value} duration={2000} />
                  </div>
                  <div className="text-white/50 text-xs mt-0.5 leading-snug">{s.label}</div>
                </div>
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

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
            {languages.map((lang) => (
              <StaggerItem key={lang.code}>
                <Link href={lang.href} className="card-feature rounded-2xl p-6 flex flex-col group block h-full">
                  <div className="flex items-start justify-between mb-4">
                    <Flag code={lang.flagCode} size={40} rounded="rounded-lg" />
                    {lang.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider glass-blue text-royal-700 px-2.5 py-1 rounded-full">
                        {lang.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-black text-ink">{lang.name}</h3>
                  <p className="text-body text-sm mt-1.5 leading-relaxed">{lang.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {lang.levels.map((l) => (
                      <span key={l} className="text-[11px] font-semibold bg-royal-50 text-royal-700 px-2 py-0.5 rounded-full">{l}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-5 text-royal-600 font-bold text-sm">
                    View Programme
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ WHY ALB ══════════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[460px] h-[460px] top-0 right-0 opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-outline">Why Choose ALB</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">
                Not just a class.
                <br />
                <span className="gradient-text-blue">A complete transformation.</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed">
                12+ years perfecting a methodology that works for Indian learners —
                goal-first, immersive, and built around your timeline.
              </p>
              <Link href="/about" className="btn-outline mt-8 inline-flex">
                Learn About Us <ArrowRight size={15} />
              </Link>
            </AnimateOnView>

            <StaggerContainer className="grid sm:grid-cols-2 gap-3" staggerDelay={0.07}>
              {whyAlbPoints.map((pt) => (
                <StaggerItem key={pt.title}>
                  <div className="card-hover rounded-2xl p-5 h-full">
                    <div className="w-10 h-10 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                      <MuiIcon name={pt.icon} size={20} style={{ color: "#3b5bdb" }} />
                    </div>
                    <h3 className="font-bold text-ink text-sm">{pt.title}</h3>
                    <p className="text-muted text-xs mt-1.5 leading-relaxed">{pt.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
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

      {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">The ALB Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-1">How it works</h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative" staggerDelay={0.09}>
            {[
              { n: "01", icon: "chat",    title: "Free Counselling", desc: "Tell us your goal and timeline. We map the perfect learning path." },
              { n: "02", icon: "article", title: "Placement Test",   desc: "Quick diagnostic to confirm your exact starting level." },
              { n: "03", icon: "book",    title: "Start Learning",   desc: "Live classes, cultural immersion, regular feedback every week." },
              { n: "04", icon: "trophy",  title: "Achieve Your Goal", desc: "Exam pass, visa approved, job landed. We celebrate every win." },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="card-hover rounded-2xl p-6 text-center relative overflow-hidden h-full">
                  <span className="absolute top-2 right-4 text-6xl font-black text-royal-50 select-none">{s.n}</span>
                  <div className="mb-4 flex justify-center relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center">
                      <MuiIcon name={s.icon} size={24} style={{ color: "#3b5bdb" }} />
                    </div>
                  </div>
                  <h3 className="font-bold text-ink text-base relative z-10">{s.title}</h3>
                  <p className="text-muted text-xs mt-2 leading-relaxed relative z-10">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
