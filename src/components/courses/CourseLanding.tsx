"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, CheckCircle, ChevronDown, ChevronRight, Download, Star, X } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { CountUp } from "@/components/shared/CountUp";
import { useBooking } from "@/components/shared/BookingContext";
import type { CourseData } from "@/lib/courseData";

export function CourseLanding({ data }: { data: CourseData }) {
  const { openModal } = useBooking();
  const [mod, setMod] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const a = data.accent;
  const al = data.al;
  const active = data.curriculum[mod];

  const instructors = [
    { emoji: "🎓", role: `Lead ${data.lang} Language Mentor`, desc: "CEFR-aligned trainer focused on speaking confidence, grammar clarity, pronunciation correction, and structured progression across every level." },
    { emoji: "📝", role: data.examRole, desc: "Specialist in exam task strategy, mock testing, writing correction, oral performance, and score improvement for immigration and academic outcomes." },
    { emoji: "🎤", role: "Soft Skills & Interview Mentor", desc: "Trainer focused on public speaking, email etiquette, presentation delivery, personal branding, and interview performance in professional settings." },
  ];

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative sec-dark overflow-hidden pt-28 pb-16 min-h-[78vh] flex items-center">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-royal w-[520px] h-[440px] -top-24 left-1/4 pointer-events-none" />
        <div className="blob blob-sky w-[400px] h-[400px] bottom-0 right-[-6%] pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <nav className="text-xs text-white/40 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <ChevronRight size={12} />
            <span className="font-semibold" style={{ color: al }}>{data.lang}</span>
          </nav>

          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold uppercase tracking-[0.18em] block" style={{ color: al }}>
            {data.ew}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mt-4">
            {data.h1a}<br /><span style={{ color: al }}>{data.h1b}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }} className="mt-5 text-lg text-white/65 max-w-2xl leading-relaxed">
            {data.hs}
          </motion.p>

          <motion.div className="mt-7 flex flex-wrap gap-2.5" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } } }}>
            {data.chips.map((c) => (
              <motion.span key={c} variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="text-xs font-semibold text-white/85 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full">{c}</motion.span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={() => openModal(data.modalKey)} className="btn-white text-base px-7 py-3.5">Book a Free Trial Class <ArrowRight size={16} /></button>
            <Link href="#curriculum" className="inline-flex items-center gap-1.5 text-white/80 font-bold text-sm">
              View the curriculum
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowDown size={15} /></motion.span>
            </Link>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="mt-4 text-white/35 text-xs">Free trial class available · No obligation</motion.p>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="sec-dark relative overflow-hidden py-12 border-t border-white/10">
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-2 text-center">
            {data.stats.map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="md:border-r md:border-white/10 md:last:border-r-0">
                <div className="text-3xl md:text-4xl font-black text-white"><CountUp value={s.n} duration={1500} /></div>
                <div className="text-[10.5px] md:text-xs font-bold uppercase tracking-wider text-white/40 mt-1.5">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRACKS ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="mb-12 max-w-2xl">
            <span className="eyebrow" style={{ color: a }}>Choose Your Track</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">Four tracks. One programme. <span style={{ color: a }}>Your goal, built in.</span></h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.08}>
            {data.tracks.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative card-hover rounded-2xl p-7 h-full" style={{ borderTop: `4px solid ${t.color}` }}>
                  {t.pop && <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-wider text-white px-2.5 py-1 rounded-full" style={{ background: t.color }}>★ Most Popular</span>}
                  <span className="text-3xl block mb-3">{t.icon}</span>
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
            <span className="eyebrow" style={{ color: a }}>The Learning Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">One structured journey. <span style={{ color: a }}>Every milestone counts.</span></h2>
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
            <span className="eyebrow" style={{ color: a }}>The Curriculum in Detail</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">What you study at <span style={{ color: a }}>every level.</span></h2>
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
            <span className="eyebrow" style={{ color: a }}>What You Will Be Able to Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">Outcomes you <span style={{ color: a }}>keep for life.</span></h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.06}>
            {data.outcomes.map((o) => (
              <StaggerItem key={o.t}>
                <div className="card-hover rounded-2xl p-5 flex gap-4 h-full">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${a}14` }}>{o.i}</span>
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
            <span className="eyebrow" style={{ color: a }}>The ALB Difference</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">Why serious learners <span style={{ color: a }}>choose ALB.</span></h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.08}>
            {data.usps.map((u) => (
              <StaggerItem key={u.t}>
                <div className="card-feature rounded-2xl p-7 h-full">
                  <span className="text-2xl block mb-3">{u.i}</span>
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
            <span className="eyebrow" style={{ color: a }}>ALB vs A Generic Class</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">See the <span style={{ color: a }}>difference</span> clearly.</h2>
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
            <span className="eyebrow" style={{ color: a }}>Learner Stories</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">Real results from <span style={{ color: a }}>real {data.lang} learners.</span></h2>
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
            <span className="eyebrow" style={{ color: a }}>The Experts Behind Your Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight">Mentors who know <span style={{ color: a }}>both the language and the goal.</span></h2>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {instructors.map((m) => (
              <StaggerItem key={m.role}>
                <div className="card-hover rounded-2xl p-7 text-center h-full">
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-4" style={{ background: `${a}14` }}>{m.emoji}</div>
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
