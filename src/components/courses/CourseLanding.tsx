"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, CheckCircle, Check, ChevronDown, ChevronRight, Download, X, GraduationCap, Clock, Users, BookOpen, Trophy } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { CountUp } from "@/components/shared/CountUp";
import { useBooking } from "@/components/shared/BookingContext";
import { MuiIcon } from "@/lib/icons";
import type { CourseData } from "@/lib/courseData";

export function CourseLanding({
  data,
  // When true, per-track "Download curriculum" buttons are hidden in favour of a
  // single button below the grid (used only on the English programme page).
  singleDownload = false,
}: {
  data: CourseData;
  singleDownload?: boolean;
}) {
  const { openModal } = useBooking();
  const [mod, setMod] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const a = data.accent;
  const al = data.al;
  const active = data.curriculum[mod];
  // drop a leading CEFR level when it already repeats later in the badge (e.g. "A1 · DELF A1" → "DELF A1")
  const activeBadge = active.badge.replace(/^((?:Pre-)?[A-C][12])\s*·\s*(?=.*\b\1\b)/, "");
  const statIcons = [GraduationCap, Clock, Users, BookOpen, Trophy];

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative sec-dark overflow-hidden pt-28 pb-14 min-h-[560px] md:min-h-[620px] lg:min-h-[680px] flex items-center">
        {!data.heroImage && <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />}
        {!data.heroImage && <div className="blob blob-royal w-[520px] h-[440px] -top-24 left-1/4 pointer-events-none" />}
        {!data.heroImage && <div className="blob blob-sky w-[400px] h-[400px] bottom-0 right-[-6%] pointer-events-none" />}

        {/* Hero image, full height on the right, blended into the navy */}
        {data.heroImage && (
          <>
            {/* flat navy base so the image edge blends with no seam */}
            <div
              className="absolute inset-0 z-0"
              style={{ background: "#030b35" }}
            />
            {/* royal glow upper-left for depth */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 44% 42% at 55% 36%, rgba(18,93,255,0.22) 0%, transparent 65%)" }}
            />
            {/* image with a slow cinematic zoom-in reveal */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1.03 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={data.heroImage}
                  alt={`${data.lang} programme`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center select-none"
                />
              </motion.div>
              {/* fade the image's left edge into the base navy */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, #030b35 0%, rgba(3,11,53,0.98) 24%, rgba(3,11,53,0.70) 50%, rgba(3,11,53,0.18) 78%, transparent 100%)",
                }}
              />
            </div>
            {/* darken the very top (breadcrumb) + fade bottom into the stats strip */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{ background: "linear-gradient(180deg, rgba(2,8,43,0.8) 0%, rgba(2,8,43,0.16) 14%, rgba(2,8,43,0) 38%, rgba(2,8,43,0) 82%, #02072a 100%), radial-gradient(ellipse 58% 46% at 78% 72%, rgba(113,42,255,0.34) 0%, transparent 58%)" }}
            />
          </>
        )}

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <div className={data.heroImage ? "max-w-2xl" : ""}>
          <nav className={`${data.heroImage ? "text-xs mb-6 text-white/45" : "text-xs mb-6 text-white/40"} flex items-center gap-2`}>
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <ChevronRight size={12} />
            <span className="font-semibold" style={{ color: al }}>{data.lang}</span>
          </nav>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg px-3.5 py-1.5 text-[11px] inline-flex items-center border bg-white/[0.04] backdrop-blur-sm font-bold uppercase tracking-[0.18em]"
            style={{
              color: al,
              borderColor: data.heroImage ? `${al}7a` : `${al}40`,
              boxShadow: data.heroImage ? `0 0 0 1px ${al}1f, 0 0 22px ${al}47` : `inset 0 1px 0 ${al}33`,
            }}
          >
            {data.heroImage && (
              <motion.span
                className="inline-block w-1.5 h-1.5 rounded-full mr-2.5 flex-shrink-0"
                style={{ background: al, boxShadow: `0 0 8px ${al}` }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            {data.ew}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className={`${data.heroImage ? "text-4xl sm:text-5xl xl:text-[3.6rem] mt-5" : "text-4xl md:text-6xl mt-4"} font-black text-white leading-[1.05] tracking-tight`} style={data.heroImage ? { textShadow: "0 6px 44px rgba(2,8,40,0.55)" } : undefined}>
            {data.h1a}<br /><span className={data.heroImage ? "shimmer-text" : ""} style={data.heroImage ? { backgroundImage: `linear-gradient(110deg, ${al} 0%, ${al} 38%, #ffffff 50%, ${al} 62%, ${al} 100%)` } : { color: al }}>{data.h1b}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }} className={`${data.heroImage ? "mt-5 text-base md:text-lg text-white/75 max-w-xl" : "mt-5 text-lg text-white/65 max-w-2xl"} leading-relaxed`}>
            {data.hs}
          </motion.p>

          {!data.heroImage && (
            <motion.div className="mt-7 gap-2.5 flex flex-wrap" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } } }}>
              {data.chips.map((c) => (
                <motion.span
                  key={c}
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                  className="text-xs px-3.5 py-1.5 rounded-full border-white/20 bg-white/10 inline-flex items-center gap-1.5 font-semibold text-white/90 border backdrop-blur-sm"
                >
                  {c}
                </motion.span>
              ))}
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className={`${data.heroImage ? "mt-8 gap-5" : "mt-8 gap-4"} flex flex-wrap items-center`}>
            <button
              onClick={() => openModal(data.modalKey)}
              className={`${data.heroImage ? "text-base px-7 py-3.5 rounded-full" : "btn-white text-base px-7 py-3.5"} inline-flex items-center gap-2.5 font-black transition-transform hover:-translate-y-0.5`}
              style={data.heroImage ? { background: al, color: "#0a1024", boxShadow: `0 0 30px ${al}59` } : undefined}
            >
              Book a Free Trial Class <ArrowRight size={16} />
            </button>
            <Link href="#curriculum" className="text-sm inline-flex items-center gap-1.5 text-white/80 font-bold">
              View the curriculum
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowDown size={15} /></motion.span>
            </Link>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="mt-4 text-white/35 text-xs">Free trial class available · No obligation</motion.p>
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section
        className={`relative overflow-hidden pb-16 -mt-2 ${data.heroImage ? "" : "sec-dark"}`}
        style={data.heroImage ? { background: "linear-gradient(180deg,#02072a 0%,#061336 100%)" } : undefined}
      >
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur-sm px-4 py-8 md:px-6 md:py-9 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-2 text-center">
              {data.stats.map((s, i) => {
                const Icon = statIcons[i % statIcons.length];
                return (
                  <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -3 }} className="group md:border-r md:border-white/10 md:last:border-r-0 cursor-default">
                    <Icon size={22} strokeWidth={1.75} className="mx-auto mb-2.5 transition-transform duration-300 group-hover:scale-110" style={{ color: al }} />
                    <div className="text-xl md:text-2xl font-black text-white leading-tight"><CountUp value={s.n} duration={1500} /></div>
                    <div className="text-[10.5px] md:text-xs font-bold uppercase tracking-wider text-white/45 mt-1.5 transition-colors group-hover:text-white/70">{s.l}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRACKS ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.tracks?.eyebrow ?? "Choose Your Track"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.tracks?.a ?? "Four tracks. One programme. "}<span style={{ color: a }}>{data.sections?.tracks?.b ?? "Your goal, built in."}</span></h2>
            {data.sections?.tracks?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed">{data.sections.tracks.sub}</p>}
          </AnimateOnView>
          <StaggerContainer className={`grid sm:grid-cols-2 ${data.tracks.length === 3 ? "lg:grid-cols-3 max-w-5xl mx-auto" : "lg:grid-cols-4"} gap-5 items-stretch`} staggerDelay={0.08}>
            {data.tracks.map((t, i) => {
              // solid, deep colours per track (blue, purple, green, amber)
              const acc = ["#1e3a8a", "#5b21b6", "#065f46", "#9a3412"][i % 4];
              return (
              <StaggerItem key={t.name} className="h-full">
                <div
                  className="group relative h-full flex flex-col rounded-2xl p-6 bg-white border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_54px_-24px_rgba(16,23,51,0.3)]"
                  style={t.pop ? { borderColor: acc, boxShadow: `0 22px 46px -26px ${acc}aa` } : { borderColor: "#e6ebf5" }}
                >
                  {/* soft colour wash at the top */}
                  <span className="absolute inset-x-0 top-0 h-28 rounded-t-2xl pointer-events-none" style={{ background: `linear-gradient(${acc}14, transparent)` }} />
                  {/* most-popular ribbon */}
                  {t.pop && (
                    <span className="absolute -top-2.5 right-5 text-[10px] font-black uppercase tracking-wide rounded-full px-3 py-1 text-white shadow-md" style={{ background: acc }}>★ Most Popular</span>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    {/* icon + label */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                        style={{ background: `linear-gradient(150deg, ${acc}, ${acc}b3)`, boxShadow: `0 8px 20px ${acc}55` }}
                      >
                        <MuiIcon name={t.icon} size={24} style={{ color: "#ffffff" }} />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-muted">Goal-based</span>
                    </div>

                    {/* title */}
                    <h3 className="text-xl font-black leading-tight" style={{ color: acc }}>{t.name}</h3>

                    {/* description */}
                    <p className="text-muted text-sm leading-relaxed mt-2.5">{t.forText}</p>

                    {/* best-for / exam-ready chips */}
                    <div className="mt-5">
                      <p className="text-muted text-[10.5px] font-bold uppercase tracking-wider mb-2">{t.bestFor ? "Best For" : "Exam Ready"}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {(t.bestFor ?? t.exams).map((e) => (
                          <span key={e} className="text-[11px] font-bold px-2.5 py-1 rounded-lg" style={{ color: acc, background: `${acc}14`, border: `1px solid ${acc}2e` }}>{e}</span>
                        ))}
                      </div>
                    </div>

                    {/* outcome */}
                    {t.outcome && (
                      <div className="mt-5 rounded-xl px-4 py-3" style={{ background: `${acc}0d`, border: `1px solid ${acc}24` }}>
                        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: acc }}>Outcome</p>
                        <p className="text-ink text-sm leading-snug font-semibold">{t.outcome}</p>
                      </div>
                    )}

                    {/* download CTA (per-card, unless the page uses a single one) */}
                    {!singleDownload && (
                      <button
                        onClick={() => openModal(data.modalKey)}
                        className="mt-auto pt-6"
                      >
                        <span
                          className="flex w-full items-center justify-center gap-2 rounded-full font-bold text-sm py-2.5 transition-colors"
                          style={t.pop
                            ? { background: acc, color: "#ffffff", boxShadow: `0 10px 24px -8px ${acc}aa` }
                            : { color: acc, border: `1.5px solid ${acc}40` }}
                        >
                          <Download size={14} /> Download curriculum
                        </span>
                      </button>
                    )}
                  </div>

                  {/* colored bottom accent grows in on hover */}
                  <span className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" style={{ background: `linear-gradient(90deg, ${acc}, ${acc}33)` }} />
                </div>
              </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* single download CTA below the grid (English programme) */}
          {singleDownload && (
            <AnimateOnView className="mt-10 flex justify-center">
              <button
                onClick={() => openModal(data.modalKey)}
                className="inline-flex items-center justify-center gap-2 rounded-full font-bold text-white text-sm px-8 py-3.5 transition-transform hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${a}, ${a}cc)`, boxShadow: `0 14px 30px -10px ${a}aa` }}
              >
                <Download size={16} /> Download curriculum
              </button>
            </AnimateOnView>
          )}
        </div>
      </section>

      {/* ══════════ JOURNEY ══════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.journey?.eyebrow ?? "The Learning Journey"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.journey?.a ?? "One structured journey. "}<span style={{ color: a }}>{data.sections?.journey?.b ?? "Every milestone counts."}</span></h2>
            {data.sections?.journey?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed">{data.sections.journey.sub}</p>}
          </AnimateOnView>
          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px" style={{ background: `linear-gradient(90deg, ${a}33, ${a}, ${a}33)` }} />
            <StaggerContainer className={`grid grid-cols-2 sm:grid-cols-3 ${data.journey.length === 6 ? "lg:grid-cols-6" : "lg:grid-cols-5"} gap-6 lg:gap-3`} staggerDelay={0.1}>
              {data.journey.map((j, i) => {
                const edge = i === 0 || i === data.journey.length - 1;
                return (
                  <StaggerItem key={j.t} className="text-center">
                    <div className="relative z-10 w-14 h-14 mx-auto rounded-full flex items-center justify-center font-black shadow-md mb-4" style={edge ? { background: a, color: "#fff" } : { background: "#fff", border: `2px solid ${a}33`, color: a }}>{j.l}</div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: a }}>{j.w}</p>
                    <h3 className="font-black text-ink text-sm">{j.t}</h3>
                    <p className="text-muted text-xs mt-1 leading-snug">{j.s}</p>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ══════════ CURRICULUM ══════════ */}
      <section id="curriculum" className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-royal w-[460px] h-[460px] -top-24 left-[-8%] opacity-40 pointer-events-none" />
        <div className="blob blob-sky w-[420px] h-[420px] bottom-[-10%] right-[-8%] opacity-30 pointer-events-none" />

        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full" style={{ color: "#fff", background: `${a}33`, border: `1px solid ${a}66` }}>
              {data.sections?.curriculum?.eyebrow ?? "The Curriculum in Detail"}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mt-4">{data.sections?.curriculum?.a ?? "What you study at "}<span className="gradient-text-light">{data.sections?.curriculum?.b ?? "every level."}</span></h2>
            {data.sections?.curriculum?.sub && <p className="text-white/60 text-base md:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">{data.sections.curriculum.sub}</p>}
          </AnimateOnView>

          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-12 items-start">
            {/* ── right: the module "screen" ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={mod}
                initial={{ opacity: 0, y: 16, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl overflow-hidden lg:sticky lg:top-28 lg:order-2 border border-white/10 bg-white/[0.04] backdrop-blur-xl"
                style={{ boxShadow: `0 40px 80px -40px ${a}80` }}
              >
                {/* glow edge */}
                <span className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${a}, transparent)` }} />
                {/* faux app chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-[11px] font-semibold text-white/45 truncate">{active.label} · {active.title}</span>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="text-[10.5px] font-bold uppercase tracking-widest" style={{ color: a }}>{activeBadge}</span>
                      <h3 className="text-2xl font-black text-white mt-1">{active.title}</h3>
                    </div>
                    <span className="text-xs font-bold text-white px-3 py-1.5 rounded-full whitespace-nowrap" style={{ background: a }}>{active.weeks}</span>
                  </div>
                  <p className="text-white/65 text-sm mt-3 leading-relaxed">{active.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mt-6">
                    {active.topics.map((tp, ti) => (
                      <motion.div
                        key={tp.t}
                        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 + ti * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-xl p-4 bg-white/[0.04] border border-white/10"
                        style={{ borderLeft: `3px solid ${a}` }}
                      >
                        <p className="font-bold text-white text-sm mb-2">{tp.t}</p>
                        <ul className="space-y-1">
                          {tp.i.map((it) => (<li key={it} className="text-xs text-white/55 flex items-start gap-1.5"><span style={{ color: a }}>·</span>{it}</li>))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 + active.topics.length * 0.07 }}
                    className="mt-5 rounded-xl px-4 py-3 text-sm text-white/60 leading-relaxed bg-white/[0.04] border border-white/10"
                  >
                    <strong className="text-white">Assessments:</strong> {active.assess}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ── left: vertical module stepper ── */}
            <StaggerContainer className="relative lg:order-1 lg:self-stretch lg:flex lg:flex-col lg:justify-between" staggerDelay={0.08}>
              {/* continuous connector line */}
              <span className="hidden lg:block absolute left-[22px] top-[22px] bottom-[22px] w-0.5 -translate-x-1/2 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} />
              {data.curriculum.map((m, i) => {
                const on = mod === i;
                const done = i < mod;
                return (
                  <StaggerItem key={m.label}>
                    <button
                      onClick={() => setMod(i)}
                      className="group relative flex gap-4 text-left w-full pb-6 lg:pb-0 last:pb-0"
                    >
                      {/* number tile */}
                      <span
                        className="relative z-10 flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-300 group-hover:scale-105"
                        style={
                          on
                            ? { background: a, color: "#fff", boxShadow: `0 10px 24px ${a}88` }
                            : done
                              ? { background: `${a}33`, color: "#fff" }
                              : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.1)" }
                        }
                      >
                        {i + 1}
                      </span>
                      {/* text card */}
                      <span
                        className={`flex-1 rounded-xl px-4 py-3.5 flex items-center justify-between gap-3 transition-all duration-300 ${on ? "bg-white/[0.07]" : "border border-transparent group-hover:bg-white/[0.04] group-hover:translate-x-1"}`}
                        style={on ? { boxShadow: `0 18px 40px -18px ${a}99`, border: `1px solid ${a}66` } : undefined}
                      >
                        <span className="min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wide block" style={{ color: on ? a : "rgba(255,255,255,0.45)" }}>{m.label}</span>
                          <span className={`text-base md:text-lg font-black block leading-snug mt-0.5 ${on ? "" : "text-white"}`} style={on ? { color: a } : undefined}>{m.title}</span>
                        </span>
                        <span className="flex items-center gap-2.5 flex-shrink-0">
                          <span
                            className="hidden xl:inline-block text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                            style={{ background: on ? `${a}22` : "rgba(255,255,255,0.06)", color: on ? a : "rgba(255,255,255,0.5)" }}
                          >
                            {m.weeks}
                          </span>
                          <ChevronRight
                            size={18}
                            className={`transition-all duration-300 ${on ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"}`}
                            style={{ color: on ? a : "#fff" }}
                          />
                        </span>
                      </span>
                    </button>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ══════════ OUTCOMES ══════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.outcomes?.eyebrow ?? "What You Will Be Able to Do"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.outcomes?.a ?? "Outcomes you "}<span style={{ color: a }}>{data.sections?.outcomes?.b ?? "keep for life."}</span></h2>
            {data.sections?.outcomes?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed">{data.sections.outcomes.sub}</p>}
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {data.outcomes.map((o) => (
              <StaggerItem key={o.t}>
                <div className="card-hover rounded-2xl p-5 flex gap-4 h-full">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${a}14` }}><MuiIcon name={o.i} size={22} style={{ color: a }} /></span>
                  <div>
                    <p className="font-bold text-ink text-sm leading-snug">{o.t}</p>
                    <p className="text-muted text-xs mt-1 leading-relaxed">{o.s}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ USPs ══════════ */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* full-bleed background image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/alb-difference-bg.png')" }} />
        {/* dark overlay for legibility */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,10,26,0.72) 0%, rgba(6,10,26,0.6) 50%, rgba(6,10,26,0.8) 100%)" }} />
        <div className="absolute inset-0 grid-dots-light opacity-15 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow-pill-light">{data.sections?.usps?.eyebrow ?? "The ALB Difference"}</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 leading-tight">{data.sections?.usps?.a ?? "Why serious learners "}<span className="gradient-text-light">{data.sections?.usps?.b ?? "choose ALB."}</span></h2>
            {data.sections?.usps?.sub && <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">{data.sections.usps.sub}</p>}
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
            {data.usps.map((u) => (
              <StaggerItem key={u.t} className="h-full">
                <div className="h-full rounded-2xl p-7 border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1] hover:border-white/30 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5">
                    <MuiIcon name={u.i} size={22} style={{ color: "#ffffff" }} />
                  </div>
                  <h3 className="text-lg font-black text-white leading-snug">{u.t}</h3>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed">{u.b}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnView className="mt-10 flex justify-center">
            <button onClick={() => openModal(data.modalKey)} className="btn-white text-base px-8 py-4">
              Book a Free Demo <ArrowRight size={16} />
            </button>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════ COMPARISON ══════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.comparison?.eyebrow ?? "Why Learners Choose ALB"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.comparison?.a ?? "See the "}<span style={{ color: a }}>{data.sections?.comparison?.b ?? "difference"}</span>{data.sections?.comparison ? "" : " clearly."}</h2>
            {data.sections?.comparison?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed">{data.sections.comparison.sub}</p>}
          </AnimateOnView>
          <AnimateOnView className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-line bg-white shadow-[0_24px_60px_-32px_rgba(16,23,51,0.32)]">
            {/* header */}
            <div className="hidden md:grid grid-cols-[1.4fr_1fr_1fr] text-sm font-black">
              <div className="px-5 py-4 text-muted uppercase tracking-wide text-[11px]">Feature</div>
              <div className="px-5 py-4 bg-rose-50 text-rose-600 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center"><X size={12} className="text-rose-500" strokeWidth={3} /></span>
                Other Classes
              </div>
              <div className="px-5 py-4 text-white flex items-center gap-2" style={{ background: `linear-gradient(135deg, ${a}, ${a}cc)` }}>
                <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center"><Check size={12} className="text-white" strokeWidth={3} /></span>
                ALB
              </div>
            </div>
            {/* rows */}
            {data.comparison.map((r) => (
              <div key={r.f} className="group grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] border-t border-line">
                <div className="px-5 pt-4 md:py-4 font-bold text-ink text-sm transition-colors group-hover:bg-mist/50">{r.f}</div>
                <div className="px-5 pb-1 md:py-4 text-sm text-muted flex items-start gap-2 transition-colors group-hover:bg-mist/50">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0"><X size={11} className="text-rose-400" strokeWidth={3} /></span>
                  {r.g}
                </div>
                <div className="px-5 pb-4 md:py-4 text-sm font-semibold flex items-start gap-2" style={{ background: `${a}0b`, color: a }}>
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${a}1f` }}><Check size={11} strokeWidth={3} style={{ color: a }} /></span>
                  {r.a}
                </div>
              </div>
            ))}
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════ REVIEWS ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] top-10 left-[-8%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.reviews?.eyebrow ?? "Learner Stories"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.reviews?.a ?? "Real results from "}<span style={{ color: a }}>{data.sections?.reviews?.b ?? `real ${data.lang} learners.`}</span></h2>
            {data.sections?.reviews?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed">{data.sections.reviews.sub}</p>}
          </AnimateOnView>
          <div className="reviews-mask relative z-10 -mx-5 md:-mx-8 lg:-mx-10 marquee-wrap [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
            <div className="reviews-track py-2">
              {[...data.reviews, ...data.reviews].map((r, i) => {
                const c = r.b2b ? "#059669" : a;
                return (
                  <div key={i} className="card rounded-2xl p-6 flex flex-col shrink-0 w-[330px] sm:w-[380px] whitespace-normal">
                    <div className="text-amber-400 tracking-[2px] text-sm mb-3">★★★★★</div>
                    <p className="text-body text-sm leading-relaxed italic flex-1">&ldquo;{r.text}&rdquo;</p>
                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-line">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xs flex-shrink-0" style={{ background: c }}>{r.init}</div>
                      <div className="min-w-0">
                        <p className="font-bold text-ink text-sm leading-tight">{r.name}</p>
                        <p className="text-muted text-xs">{r.role} · {r.co}</p>
                        <span className="inline-block text-[10.5px] font-bold mt-1 px-2 py-0.5 rounded-full" style={{ color: c, background: `${c}14` }}>{r.track}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHAT'S INCLUDED (dark) ══════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-royal w-[460px] h-[460px] top-0 left-[-8%] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-light">Everything in Your Enrolment</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-1 leading-tight">One programme. <span className="gradient-text-light">Everything included.</span></h2>
            <p className="mt-5 text-white/60 text-base md:text-lg">No add-ons. No hidden fees. No separate exam-prep packages.</p>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto" staggerDelay={0.04}>
            {data.included.map((it) => (
              <StaggerItem key={it}>
                <div className="card-dark rounded-xl p-4 flex items-start gap-3 h-full">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: al }} />
                  <span className="text-white/85 text-sm leading-relaxed">{it}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimateOnView className="mt-6 max-w-3xl mx-auto">
            <p className="text-white/45 text-xs text-center leading-relaxed">Note: Third-party examination registration fees (DELF, Goethe, IELTS, TEF, TCF, etc.) are charged separately by the respective examination bodies and are not included in ALB&apos;s programme fees.</p>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-12 lg:gap-16 items-start">
            <AnimateOnView direction="right" className="lg:sticky lg:top-28">
              <span className="eyebrow" style={{ color: a }}>Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">Everything you want to know <span style={{ color: a }}>before you enrol.</span></h2>
              <div className="mt-6 card rounded-2xl p-5">
                <p className="font-bold text-ink text-sm">Still have a question?</p>
                <p className="text-muted text-xs mt-1">Book a free trial, no obligation.</p>
                <button onClick={() => openModal(data.modalKey)} className="btn-primary text-sm px-4 py-2.5 mt-4">Book a Free Trial <ArrowRight size={14} /></button>
              </div>
            </AnimateOnView>
            <StaggerContainer className="space-y-3" staggerDelay={0.05}>
              {data.faq.map((f, i) => {
                const open = openFaq === i;
                return (
                  <StaggerItem key={f.q}>
                    <div className="card rounded-2xl relative overflow-hidden" style={{ borderColor: open ? `${a}55` : undefined }}>
                      <div className="absolute left-0 top-0 bottom-0 w-1 origin-top transition-transform duration-300" style={{ background: a, transform: open ? "scaleY(1)" : "scaleY(0)" }} />
                      <button onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center gap-4 p-5 text-left hover:bg-royal-50/40 transition-colors" aria-expanded={open}>
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg text-white font-black text-xs flex items-center justify-center" style={{ background: a }}>{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="flex-1 font-bold text-ink text-[15px] leading-snug">{f.q}</h3>
                        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0" style={{ color: a }}><ChevronDown size={18} /></motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} className="overflow-hidden">
                            <p className="px-5 pb-5 pl-[3.75rem] text-body text-sm leading-relaxed">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ══════════ CTA (dark) ══════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-royal w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: al }}>Start Today</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 max-w-3xl mx-auto leading-tight">{data.ctaH}</h2>
            <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto">{data.ctaS}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => openModal(data.modalKey)} className="btn-white text-base px-8 py-4">Book a Free Trial Class <ArrowRight size={16} /></button>
              <button onClick={() => openModal(data.modalKey)} className="btn-outline-light text-base px-8 py-4">Speak to an Advisor</button>
            </div>
            <p className="mt-5 text-white/40 text-xs">No Obligation · No Cost · Just Clarity</p>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
