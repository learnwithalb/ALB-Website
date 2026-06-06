"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
import {
  ArrowRight, Star, CheckCircle, ChevronDown,
  Shield, Users, Target, Award, Globe,
} from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { languages, testimonials, faqs, whyAlbPoints } from "@/lib/constants";
import { MuiIcon } from "@/lib/icons";

/* ───────────────────────────────────────────────
   Language Network Visualization
   - 3 orbital rings (alternating CW / CCW)
   - 6 glass language cards orbiting the ALB hub
   - Blue + green glow, dot grid, particles
─────────────────────────────────────────────── */

const ORBIT_CONFIG = [
  {
    radius: 112,
    duration: 22,
    dir: 1,
    dash: "",
    trackColor: "#2b6aff",
    tags: [
      { name: "French",  flagCode: "FR", start: 0,   glow: "#4c8aff" },
      { name: "Korean",  flagCode: "KR", start: 180, glow: "#22C55E" },
    ],
  },
  {
    radius: 170,
    duration: 36,
    dir: -1,
    dash: "7 14",
    trackColor: "#22C55E",
    tags: [
      { name: "German",  flagCode: "DE", start: 90,  glow: "#7aaaff" },
      { name: "Spanish", flagCode: "ES", start: 270, glow: "#4ade80" },
    ],
  },
  {
    radius: 220,
    duration: 54,
    dir: 1,
    dash: "3 9",
    trackColor: "#2b6aff",
    tags: [
      { name: "Japanese", flagCode: "JP", start: 45,  glow: "#4c8aff" },
      { name: "IELTS",    flagCode: "EN", start: 225, glow: "#22C55E" },
    ],
  },
];

const BG_NODES = [
  { cx: 58,  cy: 90,  r: 1.5, fill: "#4c8aff", op: 0.5 },
  { cx: 478, cy: 108, r: 1,   fill: "#22C55E", op: 0.6 },
  { cx: 85,  cy: 435, r: 1.5, fill: "#2b6aff", op: 0.4 },
  { cx: 482, cy: 418, r: 1,   fill: "#4c8aff", op: 0.5 },
  { cx: 35,  cy: 270, r: 1,   fill: "#22C55E", op: 0.4 },
  { cx: 508, cy: 270, r: 1.5, fill: "#4c8aff", op: 0.5 },
  { cx: 165, cy: 48,  r: 1,   fill: "#7aaaff", op: 0.4 },
  { cx: 378, cy: 46,  r: 1,   fill: "#22C55E", op: 0.35 },
  { cx: 148, cy: 496, r: 1,   fill: "#4c8aff", op: 0.4 },
  { cx: 392, cy: 498, r: 1,   fill: "#7aaaff", op: 0.4 },
  { cx: 28,  cy: 145, r: 1,   fill: "#4c8aff", op: 0.3 },
  { cx: 518, cy: 155, r: 1,   fill: "#22C55E", op: 0.3 },
];

const SPOKE_LINES = [0, 60, 120, 180, 240, 300].map((angle) => {
  const rad = (angle * Math.PI) / 180;
  return {
    angle,
    x2: Math.round((270 + 220 * Math.cos(rad)) * 1e6) / 1e6,
    y2: Math.round((270 + 220 * Math.sin(rad)) * 1e6) / 1e6,
  };
});

/* ───────────────────────────────────────────────
   Spinning wireframe globe for the network hub.
   Longitude lines are morphed every frame via
   direct SVG DOM writes — no React state updates.
─────────────────────────────────────────────── */
const _R   = 72;
const _CX  = 82;
const _CY  = 82;
const _NUM = 8;

const LAT_LINES = [-55, -33, -11, 11, 33, 55].map((deg) => {
  const rad = (deg * Math.PI) / 180;
  const rx  = Math.round(_R * Math.cos(rad) * 1e6) / 1e6;
  const y   = Math.round((_CY + _R * Math.sin(rad)) * 1e6) / 1e6;
  return { deg, rx, ry: Math.round(rx * 0.27 * 1e6) / 1e6, y };
}).filter((l) => l.rx >= 2);

const INIT_LONS = Array.from({ length: _NUM }, (_, i) => {
  const rad = (i * Math.PI) / _NUM;
  return Math.round(Math.abs(_R * Math.cos(rad)) * 1e6) / 1e6;
});

function HubGlobe() {
  const lonRef = useRef<SVGGElement>(null);
  const elapsed = useRef(0);

  useAnimationFrame((_, delta) => {
    elapsed.current += delta;
    const rotDeg = (elapsed.current * (360 / 14000)) % 360;
    if (!lonRef.current) return;
    lonRef.current.querySelectorAll("ellipse").forEach((el, i) => {
      const base   = (i * 180) / _NUM;
      const curRad = ((base + rotDeg) * Math.PI) / 180;
      const rx     = Math.max(Math.abs(_R * Math.cos(curRad)), 0.2);
      const front  = Math.sin(curRad) >= 0;
      el.setAttribute("rx", String(rx));
      el.setAttribute("stroke-opacity", front ? "0.48" : "0.12");
    });
  });

  return (
    <svg width="164" height="164" viewBox="0 0 164 164" style={{ display: "block" }}>
      <defs>
        <radialGradient id="hgSphere" cx="36%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#3b7dff" />
          <stop offset="48%"  stopColor="#1a3faa" />
          <stop offset="100%" stopColor="#060c1a" />
        </radialGradient>
        <radialGradient id="hgAtmo" cx="50%" cy="50%" r="55%">
          <stop offset="0%"   stopColor="#2b6aff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2b6aff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hgHi" cx="34%" cy="27%" r="50%">
          <stop offset="0%"   stopColor="#fff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="hgClip">
          <circle cx={_CX} cy={_CY} r={_R} />
        </clipPath>
      </defs>

      {/* atmosphere halo */}
      <circle cx={_CX} cy={_CY} r={_R + 10} fill="url(#hgAtmo)" />

      {/* sphere body */}
      <circle cx={_CX} cy={_CY} r={_R} fill="url(#hgSphere)" />

      {/* latitude lines – pre-computed, no SSR mismatch */}
      <g clipPath="url(#hgClip)" fill="none">
        {LAT_LINES.map((l) => (
          <ellipse
            key={l.deg}
            cx={_CX} cy={l.y}
            rx={l.rx} ry={l.ry}
            stroke="#7aaaff"
            strokeWidth="0.7"
            strokeOpacity="0.32"
          />
        ))}
      </g>

      {/* longitude lines – animated via DOM ref */}
      <g ref={lonRef} clipPath="url(#hgClip)" fill="none">
        {INIT_LONS.map((rx, i) => (
          <ellipse
            key={i}
            cx={_CX} cy={_CY}
            rx={rx} ry={_R}
            stroke="#7aaaff" strokeWidth="0.7" strokeOpacity="0.35"
          />
        ))}
      </g>

      {/* specular highlight */}
      <circle cx={_CX} cy={_CY} r={_R} fill="url(#hgHi)" />

      {/* edge ring */}
      <circle
        cx={_CX} cy={_CY} r={_R}
        fill="none" stroke="#4c8aff" strokeWidth="1.5" strokeOpacity="0.55"
      />
    </svg>
  );
}

function LanguageNetwork() {
  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto select-none">

      {/* atmosphere glows */}
      <div className="absolute inset-[22%] rounded-full bg-[#1535a8]/30 blur-[70px] pointer-events-none" />
      <div className="absolute inset-[37%] rounded-full bg-[#2b6aff]/40 blur-[35px] pointer-events-none" />

      {/* dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #4c8aff 1px, transparent 0)",
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
            strokeWidth="0.5"
            strokeOpacity="0.2"
            strokeDasharray={o.dash || undefined}
          />
        ))}
        {SPOKE_LINES.map((s) => (
          <line
            key={s.angle}
            x1="270" y1="270"
            x2={s.x2} y2={s.y2}
            stroke="#2b6aff" strokeWidth="0.3" strokeOpacity="0.08"
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
            {/* rotating orbit arm */}
            <motion.div
              style={{ position: "absolute", transformOrigin: "0 0" }}
              initial={{ rotate: tag.start }}
              animate={{ rotate: tag.start + orbit.dir * 360 }}
              transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
            >
              {/* counter-rotating tag so it stays upright */}
              <motion.div
                style={{ position: "absolute", left: 0, top: -orbit.radius, x: "-50%", y: "-50%" }}
                initial={{ rotate: -tag.start }}
                animate={{ rotate: -(tag.start + orbit.dir * 360) }}
                transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
              >
                {/* glass card */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 11px",
                    borderRadius: "10px",
                    background: "rgba(7,14,38,0.90)",
                    border: `1px solid ${tag.glow}38`,
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: `0 0 14px ${tag.glow}16, 0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)`,
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                >
                  <span style={{ fontSize: "10px", fontWeight: 900, color: tag.glow, letterSpacing: "0.05em" }}>{tag.flagCode}</span>
                  <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.03em" }}>
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
                {/* connector line to orbit */}
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

      {/* Central hub – spinning globe */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 20 }}>
        {/* pulse rings */}
        <motion.div
          style={{ position: "absolute", inset: "-8px", borderRadius: "50%", border: "1px solid rgba(43,106,255,0.5)" }}
          animate={{ scale: [1, 1.75, 1.75], opacity: [0.65, 0, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          style={{ position: "absolute", inset: "-8px", borderRadius: "50%", border: "1px solid rgba(43,106,255,0.28)" }}
          animate={{ scale: [1, 2.2, 2.2], opacity: [0.4, 0, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 0.95 }}
        />
        {/* outer glow behind globe */}
        <div style={{ position: "absolute", inset: "-16px", borderRadius: "50%", background: "radial-gradient(circle, rgba(43,106,255,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* spinning wireframe globe */}
        <HubGlobe />
      </div>

      {/* floating accent particles */}
      <motion.div
        style={{ position: "absolute", top: "6%", right: "9%", width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 10px #22C55E, 0 0 22px rgba(34,197,94,0.5)", zIndex: 5 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ position: "absolute", bottom: "9%", left: "6%", width: "6px", height: "6px", borderRadius: "50%", background: "#4c8aff", boxShadow: "0 0 8px #4c8aff", zIndex: 5 }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        style={{ position: "absolute", top: "47%", right: "2%", width: "4px", height: "4px", borderRadius: "50%", background: "#7aaaff", zIndex: 5 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        style={{ position: "absolute", top: "20%", left: "3%", width: "5px", height: "5px", borderRadius: "50%", background: "#4c8aff", boxShadow: "0 0 7px #4c8aff", zIndex: 5 }}
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
      />
    </div>
  );
}

/* ─────────────────────────── Stat Cards ─────────────────────────── */
const STAT_CARDS = [
  { value: "5000+", label: "Learners Transformed", Icon: Users,  iconColor: "#4c8aff", lineColor: "#4c8aff" },
  { value: "95%",   label: "Goal Achievement Rate", Icon: Target, iconColor: "#4c8aff", lineColor: "#7aaaff" },
  { value: "12+",   label: "Years of Excellence",   Icon: Award,  iconColor: "#22C55E", lineColor: "#22C55E" },
  { value: "6",     label: "Languages Offered",     Icon: Globe,  iconColor: "#4c8aff", lineColor: "#4c8aff" },
];

/* ─────────────────────────── Page ─────────────────────────── */
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-site">

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="hero-gradient relative min-h-[100svh] flex items-center overflow-hidden pt-20 pb-10">

        {/* dot grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute bottom-0 right-[20%] w-[500px] h-[380px] rounded-full bg-[#2b6aff]/16 blur-[90px] pointer-events-none" />

        <div className="container-max px-5 md:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">

            {/* ── Left: text ── */}
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 glass-blue text-[#7aaaff] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                  <Globe size={11} />
                  India&apos;s Premier Language &amp; Soft Skills Academy
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
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
                <span className="gradient-text">Lead Bold.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-5 text-base md:text-lg text-white/45 max-w-lg leading-relaxed"
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
                <Link href="/courses" className="btn-white text-sm px-7 py-3.5 font-bold rounded-full flex items-center gap-2">
                  Explore Courses <ArrowRight size={14} />
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm px-7 py-3.5 rounded-full flex items-center gap-2"
                >
                  Book Free Session <ArrowRight size={14} />
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.46 }}
                className="mt-4 text-white/25 text-xs flex items-center gap-2"
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
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#060c1a] bg-gradient-to-br from-[#2b6aff] to-[#4c8aff] flex items-center justify-center text-white font-black text-[9px]">
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => <Star key={i} size={11} className="text-[#22C55E] fill-[#22C55E]" />)}
                    <span className="text-white text-xs font-bold ml-1">4.9/5</span>
                  </div>
                  <p className="text-white/30 text-xs">from 5,000+ learners</p>
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
              <div key={s.value} className="card-dark rounded-2xl p-5 flex flex-col gap-3 overflow-hidden">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${s.iconColor}16` }}>
                  <s.Icon size={20} style={{ color: s.iconColor }} />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white">{s.value}</div>
                  <div className="text-white/40 text-xs mt-0.5 leading-snug">{s.label}</div>
                </div>
                <div className="h-0.5 w-8 rounded-full mt-auto" style={{ background: s.lineColor }} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════ MARQUEE ══════════════════════ */}
      <section className="py-6 border-y border-white/5 overflow-hidden">
        <div className="marquee-wrap">
          <div className="marquee-inner gap-8">
            {[...languages, ...languages].map((lang, i) => (
              <span key={i} className="flex items-center gap-2 text-white/30 text-sm font-semibold px-6">
                <span className="text-xs font-black uppercase opacity-60">{lang.flagCode}</span>
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ LANGUAGE CARDS ══════════════════════ */}
      <section className="section-padding section-gradient">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow-pill-blue">Language Programmes</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-1">
              Six languages. One world.
              <br />
              <span className="gradient-text">Infinite doors.</span>
            </h2>
            <p className="mt-4 text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
              CEFR-aligned, culturally immersive, taught by experts who care about
              your goal — not just curriculum coverage.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
            {languages.map((lang) => (
              <StaggerItem key={lang.code}>
                <Link href={lang.href} className="card-dark-hover rounded-2xl p-6 flex flex-col group block">
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="text-xs font-black uppercase px-2.5 py-1.5 rounded-lg"
                      style={{ background: `${lang.color}22`, color: lang.color }}
                    >{lang.flagCode}</span>
                    {lang.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider glass-blue text-[#7aaaff] px-2.5 py-1 rounded-full">
                        {lang.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-black text-white">{lang.name}</h3>
                  <p className="text-white/45 text-sm mt-1.5 leading-relaxed">{lang.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {lang.levels.map((l) => (
                      <span key={l} className="text-[11px] font-semibold glass text-white/60 px-2 py-0.5 rounded-full">{l}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-5 text-[#22C55E] font-bold text-sm">
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
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2b6aff]/8 blur-[80px] pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-outline">Why Choose ALB</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-1 leading-tight">
                Not just a class.
                <br />
                <span className="gradient-text-blue">A complete transformation.</span>
              </h2>
              <p className="mt-4 text-white/45 leading-relaxed">
                12+ years perfecting a methodology that works for Indian learners —
                goal-first, immersive, and built around your timeline.
              </p>
              <Link href="/about" className="btn-outline-blue mt-8 inline-flex">
                Learn About Us <ArrowRight size={15} />
              </Link>
            </AnimateOnView>

            <StaggerContainer className="grid sm:grid-cols-2 gap-3" staggerDelay={0.07}>
              {whyAlbPoints.map((pt) => (
                <StaggerItem key={pt.title}>
                  <div className="card-dark rounded-2xl p-5">
                    <div className="text-2xl mb-3">{pt.icon}</div>
                    <h3 className="font-bold text-white text-sm">{pt.title}</h3>
                    <p className="text-white/40 text-xs mt-1.5 leading-relaxed">{pt.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ══════════════════════ +BEYOND ══════════════════════ */}
      <section className="section-padding relative overflow-hidden bg-[#04080f]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#22C55E]/6 blur-[80px] pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <span className="eyebrow-pill">+Beyond Programmes</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-1">
              Language opens the door.
              <br />
              <span className="gradient-text">Soft skills own the room.</span>
            </h2>
            <p className="mt-4 text-white/45 max-w-xl mx-auto">
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
                <div className="card-dark rounded-2xl p-5 hover:border-[rgba(34,197,94,0.2)] transition-colors">
                  <div className="mb-3">
                    <MuiIcon name={m.icon} size={28} style={{ color: "#22C55E" }} />
                  </div>
                  <h3 className="text-white font-bold text-base">{m.title}</h3>
                  <p className="text-white/40 text-xs mt-1.5 leading-relaxed">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnView className="mt-10">
            <Link href="/beyond" className="btn-primary">
              Explore +Beyond <ArrowRight size={15} />
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="section-padding section-gradient">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow-pill-blue">Learner Stories</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-1">
              Real results from <span className="gradient-text">real people.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid md:grid-cols-3 gap-4" staggerDelay={0.08}>
            {testimonials.slice(0, 3).map((t, i) => (
              <StaggerItem key={i}>
                <div className="card-dark rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map((j) => <Star key={j} size={12} className="text-[#22C55E] fill-[#22C55E]" />)}
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/6">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2b6aff] to-[#4c8aff] flex items-center justify-center text-white font-black text-xs flex-shrink-0">{t.avatar}</div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-white/35 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 mt-4" staggerDelay={0.08}>
            {testimonials.slice(3).map((t, i) => (
              <StaggerItem key={i}>
                <div className="card-dark rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map((j) => <Star key={j} size={12} className="text-[#22C55E] fill-[#22C55E]" />)}
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/6">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#22C55E] to-[#4ade80] flex items-center justify-center text-[#060c1a] font-black text-xs flex-shrink-0">{t.avatar}</div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-white/35 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">The ALB Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-1">How it works</h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.09}>
            {[
              { n: "01", icon: "chat",    title: "Free Counselling", desc: "Tell us your goal and timeline. We map the perfect learning path." },
              { n: "02", icon: "article", title: "Placement Test",   desc: "Quick diagnostic to confirm your exact starting level." },
              { n: "03", icon: "book",    title: "Start Learning",   desc: "Live classes, cultural immersion, regular feedback every week." },
              { n: "04", icon: "trophy",  title: "Achieve Your Goal", desc: "Exam pass, visa approved, job landed. We celebrate every win." },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="card-dark rounded-2xl p-6 text-center relative overflow-hidden">
                  <span className="absolute top-3 right-4 text-5xl font-black text-white/4 select-none">{s.n}</span>
                  <div className="mb-4 flex justify-center">
                    <MuiIcon name={s.icon} size={28} style={{ color: "#22C55E" }} />
                  </div>
                  <h3 className="font-bold text-white text-base">{s.title}</h3>
                  <p className="text-white/40 text-xs mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ FAQ ══════════════════════ */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <AnimateOnView direction="right" className="lg:sticky lg:top-28">
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-1">
                Got questions?
                <br />
                <span className="gradient-text">We&apos;ve got answers.</span>
              </h2>
              <p className="mt-4 text-white/40 leading-relaxed text-sm">
                Still curious? Book a free 30-minute counselling call — no commitment.
              </p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
                WhatsApp Us <ArrowRight size={15} />
              </a>
            </AnimateOnView>

            <AnimateOnView direction="left" className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="card-dark rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/4 transition-colors"
                  >
                    <span className="font-semibold text-white/90 text-sm pr-4">{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0 text-white/30">
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
                        <div className="px-6 pb-5 text-white/45 text-sm leading-relaxed border-t border-white/6 pt-4">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FINAL CTA ══════════════════════ */}
      <section className="section-padding relative overflow-hidden bg-[#04080f]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#2b6aff]/14 blur-[100px]" />
        </div>
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <span className="eyebrow-pill-blue">Start Today</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 max-w-3xl mx-auto leading-tight">
              Your global journey begins with a single conversation.
            </h2>
            <p className="mt-5 text-white/40 text-lg max-w-xl mx-auto">Free counselling · No commitment · Expert guidance</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/courses" className="btn-white text-base px-8 py-4 flex items-center gap-2">
                Explore All Courses <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-8 py-4">
                Book Free Call
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/30 text-sm">
              {["5000+ Learners", "95% Goal Rate", "6 Languages", "12+ Years"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-[#22C55E]" />
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
