"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, CheckCircle, ChevronDown, ChevronRight, Download, X, GraduationCap, Clock, Users, BookOpen, Trophy } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { CountUp } from "@/components/shared/CountUp";
import { useBooking } from "@/components/shared/BookingContext";
import { MuiIcon } from "@/lib/icons";
import type { CourseData } from "@/lib/courseData";

export function CourseLanding({ data }: { data: CourseData }) {
  const { openModal } = useBooking();
  const [mod, setMod] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const a = data.accent;
  const al = data.al;
  const active = data.curriculum[mod];
  const statIcons = [GraduationCap, Clock, Users, BookOpen, Trophy];

  const instructors = [
    { icon: "school", role: `Lead ${data.lang} Language Mentor`, desc: "CEFR-aligned trainer focused on speaking confidence, grammar clarity, pronunciation correction, and structured progression across every level." },
    { icon: "edit", role: data.examRole, desc: "Specialist in exam task strategy, mock testing, writing correction, oral performance, and score improvement for immigration and academic outcomes." },
    { icon: "mic", role: "Soft Skills & Interview Mentor", desc: "Trainer focused on public speaking, email etiquette, presentation delivery, personal branding, and interview performance in professional settings." },
  ];

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative sec-dark overflow-hidden pt-28 pb-14 min-h-[560px] md:min-h-[620px] lg:min-h-[680px] flex items-center">
        {!data.heroImage && <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />}
        {!data.heroImage && <div className="blob blob-royal w-[520px] h-[440px] -top-24 left-1/4 pointer-events-none" />}
        {!data.heroImage && <div className="blob blob-sky w-[400px] h-[400px] bottom-0 right-[-6%] pointer-events-none" />}

        {/* Hero image — full height on the right, blended into the navy */}
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
                    <div className="text-3xl md:text-4xl font-black text-white"><CountUp value={s.n} duration={1500} /></div>
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
          <AnimateOnView className="mb-12 max-w-2xl">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.tracks?.eyebrow ?? "Choose Your Track"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.tracks?.a ?? "Four tracks. One programme. "}<span style={{ color: a }}>{data.sections?.tracks?.b ?? "Your goal, built in."}</span></h2>
            {data.sections?.tracks?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed">{data.sections.tracks.sub}</p>}
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.08}>
            {data.tracks.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative card-hover rounded-2xl p-7 h-full" style={{ borderTop: `4px solid ${t.color}` }}>
                  {t.pop && <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-wider text-white px-2.5 py-1 rounded-full" style={{ background: t.color }}>★ Most Popular</span>}
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: `${t.color}14` }}><MuiIcon name={t.icon} size={26} style={{ color: t.color }} /></span>
                  <h3 className="text-lg font-black text-ink">{t.name}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{t.forText}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {t.exams.map((e) => (<span key={e} className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ color: t.color, background: `${t.color}14`, border: `1px solid ${t.color}33` }}>{e}</span>))}
                  </div>
                  <button onClick={() => openModal(data.modalKey)} className="mt-5 inline-flex items-center gap-1.5 font-bold text-sm" style={{ color: t.color }}>
                    <Download size={14} /> Download {t.name} Curriculum
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-3" staggerDelay={0.1}>
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
      <section id="curriculum" className="section-padding sec-light relative overflow-hidden">
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.curriculum?.eyebrow ?? "The Curriculum in Detail"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.curriculum?.a ?? "What you study at "}<span style={{ color: a }}>{data.sections?.curriculum?.b ?? "every level."}</span></h2>
            {data.sections?.curriculum?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">{data.sections.curriculum.sub}</p>}
          </AnimateOnView>

          <div className="grid lg:grid-cols-[260px_1fr] gap-5 lg:gap-7 items-start">
            {/* module switcher */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {data.curriculum.map((m, i) => {
                const on = mod === i;
                return (
                  <button key={m.label} onClick={() => setMod(i)} className={`flex-shrink-0 lg:w-full text-left rounded-xl px-4 py-3 transition-all border ${on ? "bg-white shadow-md" : "bg-mist/60 border-transparent hover:bg-white"}`} style={on ? { borderColor: `${a}55` } : {}}>
                    <span className="text-[10px] font-bold uppercase tracking-wide block" style={{ color: on ? a : "#737d9c" }}>{m.label}</span>
                    <span className={`text-sm font-bold block leading-tight mt-0.5 ${on ? "text-ink" : "text-muted"}`}>{m.title}</span>
                  </button>
                );
              })}
            </div>

            {/* detail */}
            <AnimatePresence mode="wait">
              <motion.div key={mod} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="card rounded-3xl p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-widest" style={{ color: a }}>{active.badge}</span>
                    <h3 className="text-2xl font-black text-ink mt-1">{active.title}</h3>
                  </div>
                  <span className="text-xs font-bold text-white px-3 py-1.5 rounded-full whitespace-nowrap" style={{ background: a }}>{active.weeks}</span>
                </div>
                <p className="text-body text-sm mt-3 leading-relaxed max-w-2xl">{active.desc}</p>

                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {active.topics.map((tp) => (
                    <div key={tp.t} className="bg-mist rounded-xl p-4" style={{ borderLeft: `3px solid ${a}` }}>
                      <p className="font-bold text-ink text-sm mb-2">{tp.t}</p>
                      <ul className="space-y-1">
                        {tp.i.map((it) => (<li key={it} className="text-xs text-muted flex items-start gap-1.5"><span style={{ color: a }}>·</span>{it}</li>))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-mist rounded-xl px-4 py-3 text-sm text-muted leading-relaxed">
                  <strong className="text-ink">Assessments:</strong> {active.assess}
                </div>
              </motion.div>
            </AnimatePresence>
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
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.usps?.eyebrow ?? "The ALB Difference"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.usps?.a ?? "Why serious learners "}<span style={{ color: a }}>{data.sections?.usps?.b ?? "choose ALB."}</span></h2>
            {data.sections?.usps?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed">{data.sections.usps.sub}</p>}
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.08}>
            {data.usps.map((u) => (
              <StaggerItem key={u.t}>
                <div className="card-feature rounded-2xl p-7 h-full">
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: `${a}14` }}><MuiIcon name={u.i} size={26} style={{ color: a }} /></span>
                  <h3 className="font-black text-ink text-lg">{u.t}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{u.b}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ COMPARISON ══════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.comparison?.eyebrow ?? "ALB vs A Generic Class"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.comparison?.a ?? "See the "}<span style={{ color: a }}>{data.sections?.comparison?.b ?? "difference"}</span>{data.sections?.comparison ? "" : " clearly."}</h2>
            {data.sections?.comparison?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed">{data.sections.comparison.sub}</p>}
          </AnimateOnView>
          <AnimateOnView className="card rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="hidden md:grid grid-cols-[1.2fr_1fr_1fr] text-sm font-bold">
              <div className="px-5 py-4 bg-mist text-muted">Feature</div>
              <div className="px-5 py-4 bg-rose-50 text-rose-700">Generic Class</div>
              <div className="px-5 py-4 text-white" style={{ background: a }}>ALB</div>
            </div>
            {data.comparison.map((r, i) => (
              <div key={r.f} className={`grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] border-t border-line ${i % 2 ? "bg-royal-50/20" : ""}`}>
                <div className="px-5 pt-4 md:py-3.5 font-bold text-ink text-sm">{r.f}</div>
                <div className="px-5 pb-1 md:py-3.5 text-sm text-amber-700 flex items-start gap-1.5"><X size={13} className="text-rose-400 mt-0.5 flex-shrink-0" />{r.g}</div>
                <div className="px-5 pb-4 md:py-3.5 text-sm font-semibold flex items-start gap-1.5" style={{ color: a }}><CheckCircle size={13} className="mt-0.5 flex-shrink-0" />{r.a}</div>
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
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {data.reviews.map((r) => {
              const c = r.b2b ? "#059669" : a;
              return (
                <StaggerItem key={r.name}>
                  <div className="card rounded-2xl p-6 h-full flex flex-col">
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
                </StaggerItem>
              );
            })}
          </StaggerContainer>
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

      {/* ══════════ INSTRUCTORS ══════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow" style={{ color: a }}>{data.sections?.instructors?.eyebrow ?? "The Experts Behind Your Journey"}</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">{data.sections?.instructors?.a ?? "Mentors who know "}<span style={{ color: a }}>{data.sections?.instructors?.b ?? "both the language and the goal."}</span></h2>
            {data.sections?.instructors?.sub && <p className="text-body text-base md:text-lg mt-4 leading-relaxed">{data.sections.instructors.sub}</p>}
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {instructors.map((m) => (
              <StaggerItem key={m.role}>
                <div className="card-hover rounded-2xl p-7 text-center h-full">
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4" style={{ background: `${a}14` }}><MuiIcon name={m.icon} size={32} style={{ color: a }} /></div>
                  <p className="text-[10.5px] font-bold uppercase tracking-widest mb-2" style={{ color: a }}>Faculty</p>
                  <h3 className="font-black text-ink">{m.role}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
                <p className="text-muted text-xs mt-1">Book a free trial — no obligation.</p>
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
