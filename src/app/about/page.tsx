"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, XCircle, Award, Globe, Quote } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { CountUp } from "@/components/shared/CountUp";
import { MuiIcon } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";

/* ─────────────── data ─────────────── */

const HERO_QUOTES = [
  { img: "/images/hero-images/homepage/english.png", quote: "The limits of my language are the limits of my world.", author: "Ludwig Wittgenstein" },
  { img: "/images/hero-images/homepage/french.png", quote: "To have another language is to possess a second soul.", author: "Charlemagne" },
  { img: "/images/hero-images/homepage/german.png", quote: "One language sets you in a corridor for life. Two open every door along the way.", author: "Frank Smith" },
];

const GREETINGS = [
  { w: "Bonjour", c: "#6d8bff" },
  { w: "Hallo", c: "#fbbf24" },
  { w: "Hello", c: "#34d399" },
  { w: "नमस्ते", c: "#fb7185" },
];

const BEATS = [
  {
    eyebrow: "A Family Legacy",
    heading: ["Education runs in our blood.", "It always has."],
    body: [
      "For more than five decades, education has been woven into our family. From school principals to dedicated classroom teachers, the generations before us gave their lives to one belief: that the right education changes lives.",
      "That legacy shaped everything about how we think about teaching — and about what learners truly deserve.",
    ],
    emoji: "📚",
    badge: "50+ years of legacy",
    from: "#3b5bdb", to: "#2f49c0",
  },
  {
    eyebrow: "Why ALB Exists",
    heading: ["Something kept", "bothering us."],
    body: [
      "Students were completing language courses. Attending classes. Passing mock tests. Earning certificates.",
      "And yet, when they sat across from a visa officer, walked into their first job interview abroad, or landed in a new country — they froze. The language was there. The confidence wasn't. The certificate was there. The real-world readiness wasn't.",
      "We believed language learning could be better. More practical. More human. More complete.",
    ],
    gap: true,
    from: "#0ea5e9", to: "#0284c7",
  },
  {
    eyebrow: "The Academy of Languages & Beyond",
    heading: ["So we", "built ALB."],
    body: [
      "Not just a language institute. Not just an exam-prep centre.",
      "A place where you don't just learn French, German, or English — you learn how to use it. In offices. In embassies. In classrooms. In visa queues. In boardrooms. In life.",
      "ALB was built to close the gap between learning a language and living it.",
    ],
    emoji: "🎓",
    badge: "Beyond language",
    from: "#6366f1", to: "#4338ca",
  },
];

const STATS = [
  { value: "3", label: "Languages", desc: "French, German & English" },
  { value: "7", label: "Exam Pathways", desc: "DELF, DALF, TCF, TEF, IELTS & more" },
  { value: "12", label: "Students / Batch", desc: "Personal attention guaranteed" },
  { value: "5", label: "Learning Tracks", desc: "Immigration, Academic, Career & more" },
];

const DESTINATIONS = [
  { country: "Canada", exam: "TEF / TCF Canada", goal: "Permanent Residency", x: 15, y: 24 },
  { country: "France", exam: "DELF / DALF", goal: "Study & Career", x: 48, y: 20 },
  { country: "Germany", exam: "Goethe / TestDaF", goal: "Work & University", x: 62, y: 15 },
  { country: "UK & Australia", exam: "IELTS", goal: "Education & Immigration", x: 83, y: 56 },
];
const INDIA = { x: 33, y: 66 };
const arc = (a: { x: number; y: number }, b: { x: number; y: number }) =>
  `M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${Math.max(Math.min(a.y, b.y) - 6, 2)} ${b.x} ${b.y}`;

const DIFF = [
  { icon: "sparkle", title: "Language + Life Skills", desc: "Every programme includes our Global Confidence Programme — live, interactive, and free. Because fluency without confidence is only half the story." },
  { icon: "chat",    title: "Live & Interactive",     desc: "No recorded lectures. Every session is instructor-led and built around real conversation — because that's how humans actually learn to speak." },
  { icon: "target",  title: "Built for the Real World", desc: "We design every programme around the professional, academic, and social situations our students actually face. Practical from day one." },
  { icon: "people",  title: "Intimate Cohorts",       desc: "We keep cohorts small deliberately, so every student is known, seen, and supported. Big enough to learn from, small enough to matter." },
];

/* ─────────────── page ─────────────── */

export default function AboutPage() {
  const { openModal } = useBooking();

  const [slide, setSlide] = useState(0);
  const slidePaused = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (slidePaused.current) return;
      setSlide((p) => (p + 1) % HERO_QUOTES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative hero-light overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />
        <div className="blob blob-royal w-[520px] h-[420px] -top-24 right-[4%] opacity-50 pointer-events-none" />
        <div className="blob blob-sky w-[440px] h-[440px] -bottom-28 left-[-6%] opacity-40 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10">
          {/* credential badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { Icon: Award, label: "50+ Years Teaching Legacy" },
              { Icon: Globe, label: "French · German · English" },
            ].map((b) => (
              <span key={b.label} className="flex items-center gap-2 bg-white border border-line shadow-sm rounded-full pl-2 pr-4 py-1.5">
                <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <b.Icon size={13} className="text-amber-500" />
                </span>
                <span className="text-xs font-extrabold text-ink tracking-tight">{b.label}</span>
              </span>
            ))}
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-center mx-auto max-w-5xl text-3xl sm:text-4xl lg:text-[3rem] font-black text-ink leading-[1.08] tracking-tight"
          >
            We don&apos;t just teach languages.<br />
            We build{" "}
            <span style={{ color: "#3b5bdb" }}>fluency</span>,{" "}
            <span style={{ color: "#0ea5e9" }}>confidence</span> &amp;{" "}
            <span style={{ color: "#6366f1" }}>belonging</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-center mx-auto max-w-3xl text-sm md:text-base text-body leading-relaxed"
          >
            Academy of Languages &amp; Beyond bridges the gap between learning a language and living it —
            through live teaching, real-world practice, and the confidence to belong anywhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-9 flex justify-center"
          >
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2.5 text-sm pl-6 pr-2.5 py-2 rounded-full font-black text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "#3b5bdb", boxShadow: "0 14px 30px rgba(59,91,219,0.40)" }}
            >
              Book a Free Demo
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center" style={{ color: "#3b5bdb" }}><ArrowRight size={15} /></span>
            </button>
          </motion.div>

          {/* three cards */}
          <motion.div
            initial="hidden" animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.5 } } }}
            className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
          >
            {/* card 1 — quote + photo carousel */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              onMouseEnter={() => { slidePaused.current = true; }}
              onMouseLeave={() => { slidePaused.current = false; }}
              className="md:col-span-5 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[340px]"
              style={{ background: "linear-gradient(135deg,#2b3a66,#16244f)" }}
            >
              {/* slides */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={HERO_QUOTES[slide].img}
                    alt={HERO_QUOTES[slide].author}
                    fill sizes="(max-width:768px) 100vw, 500px"
                    className="object-cover object-top"
                    style={{ maskImage: "linear-gradient(to left, #000 30%, transparent 88%)", WebkitMaskImage: "linear-gradient(to left, #000 30%, transparent 88%)" }}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 grid-dots-light opacity-15 pointer-events-none" />
              <Quote className="absolute top-6 left-6 text-white/25 z-10" size={34} />

              {/* pagination dots */}
              <div className="absolute top-7 right-6 z-20 flex items-center gap-1.5">
                {HERO_QUOTES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Quote ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === slide ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
                  />
                ))}
              </div>

              {/* quote text (animates per slide) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="flex items-end justify-between gap-4"
                  >
                    <p className="font-display text-xl md:text-2xl font-semibold text-white leading-snug max-w-[62%]">
                      {`"${HERO_QUOTES[slide].quote}"`}
                    </p>
                    <span className="text-white/55 text-xs font-semibold text-right leading-tight max-w-[92px]">{HERO_QUOTES[slide].author}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* card 2 — stat */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="md:col-span-3 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[340px] p-6 flex flex-col"
              style={{ background: "linear-gradient(150deg,#3b5bdb,#2f49c0)" }}
            >
              <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
              <div className="relative z-10 mt-auto">
                <div className="text-6xl md:text-7xl font-black text-white leading-none">50<span className="text-4xl align-top">+</span></div>
                <p className="text-white/80 text-sm font-semibold mt-3 leading-snug">Years of family teaching legacy behind every class</p>
              </div>
              <span className="relative z-10 text-white/45 text-xs font-bold mt-4 tracking-wide uppercase">ALB Heritage</span>
            </motion.div>

            {/* card 3 — CTA */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="md:col-span-4 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[340px] p-7 flex flex-col"
              style={{ background: "linear-gradient(150deg,#dbeafe,#bfdbfe 55%,#a8c8fb)" }}
            >
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/45 blur-2xl pointer-events-none" />
              <h3 className="relative z-10 text-2xl md:text-3xl font-black text-ink leading-tight">Learn a language you&apos;ll actually use.</h3>
              <p className="relative z-10 text-royal-700/80 text-sm mt-2.5 font-medium leading-relaxed">Live, interactive cohorts. Exam-ready. Real-world confident.</p>
              <Link
                href="/courses"
                className="relative z-10 mt-auto inline-flex items-center gap-2.5 self-start pl-6 pr-2.5 py-2.5 rounded-full font-black text-white text-sm transition-transform hover:-translate-y-0.5"
                style={{ background: "#3b5bdb" }}
              >
                Explore programmes
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center" style={{ color: "#3b5bdb" }}><ArrowRight size={14} /></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ GREETING STRIP (dark) ══════════════════ */}
      <section className="sec-dark relative overflow-hidden py-6 md:py-8">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <motion.div
            className="flex items-center gap-8 md:gap-12 whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center gap-8 md:gap-12">
                {GREETINGS.concat(GREETINGS).map((g, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center gap-8 md:gap-12">
                    <span className="font-display text-3xl md:text-4xl font-bold" style={{ color: g.c }}>{g.w}</span>
                    <span className="text-white/15 text-2xl md:text-3xl">·</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
        <p className="relative z-10 text-center text-white/45 text-xs font-semibold tracking-widest uppercase mt-3">
          French · German · English · &amp; the warmth of home
        </p>
      </section>

      {/* ══════════════════ OUR STORY — 3 beats ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-1/4 right-[-8%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10 space-y-20 md:space-y-28">
          {BEATS.map((b, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={i} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* text */}
                <AnimateOnView direction={flip ? "left" : "right"} className={flip ? "lg:order-2" : ""}>
                  <span className="eyebrow-pill-blue">{b.eyebrow}</span>
                  <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">
                    {b.heading[0]}
                    <br />
                    <span className="gradient-text">{b.heading[1]}</span>
                  </h2>
                  <div className="mt-5 space-y-4">
                    {b.body.map((p, k) => (
                      <p key={k} className="text-body text-base md:text-lg leading-relaxed">{p}</p>
                    ))}
                  </div>
                </AnimateOnView>

                {/* visual */}
                <AnimateOnView direction={flip ? "right" : "left"} className={flip ? "lg:order-1" : ""}>
                  <motion.div
                    className="relative rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center shadow-xl"
                    style={{ background: `linear-gradient(150deg, ${b.from}, ${b.to})` }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                    {b.gap ? (
                      // gap beat: certificate ✓ / confidence ✗
                      <div className="relative z-10 flex flex-col gap-3 px-8 w-full max-w-xs">
                        <div className="flex items-center gap-3 bg-white/12 border border-white/15 rounded-xl px-4 py-3">
                          <CheckCircle size={20} className="text-emerald-300 flex-shrink-0" />
                          <span className="text-white font-semibold">Certificate earned</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/12 border border-white/15 rounded-xl px-4 py-3">
                          <CheckCircle size={20} className="text-emerald-300 flex-shrink-0" />
                          <span className="text-white font-semibold">Mock tests passed</span>
                        </div>
                        <div className="flex items-center gap-3 bg-rose-500/20 border border-rose-300/30 rounded-xl px-4 py-3">
                          <XCircle size={20} className="text-rose-200 flex-shrink-0" />
                          <span className="text-white font-semibold">Real-world confidence?</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative z-10 text-center">
                        <div className="text-7xl">{b.emoji}</div>
                        <span className="mt-4 inline-flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold text-white">
                          {b.badge}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </AnimateOnView>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════ STATS BAR (dark) ══════════════════ */}
      <section className="sec-dark relative overflow-hidden py-14 md:py-16">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-royal w-[500px] h-[260px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center md:border-r md:border-white/10 md:last:border-r-0"
              >
                <div className="text-4xl md:text-5xl font-black gradient-text-light"><CountUp value={s.value} duration={1600} /></div>
                <div className="text-white font-bold text-sm mt-1">{s.label}</div>
                <div className="text-white/45 text-xs mt-1 px-2 leading-snug">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WORLD MAP / DESTINATIONS ══════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[440px] h-[440px] bottom-0 left-[-8%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow-pill-outline">One Starting Point</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">
              A world of destinations. <span className="gradient-text">We prepare you for all of them.</span>
            </h2>
          </AnimateOnView>

          {/* map (md+) */}
          <AnimateOnView className="hidden md:block">
            <div className="relative w-full aspect-[16/8] rounded-3xl card overflow-hidden">
              <div className="absolute inset-0 grid-dots opacity-60 pointer-events-none" />
              {/* arcs */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
                {DESTINATIONS.map((d, i) => (
                  <motion.path
                    key={d.country}
                    d={arc({ x: INDIA.x, y: INDIA.y * 0.5 }, { x: d.x, y: d.y * 0.5 })}
                    stroke="#3b5bdb" strokeWidth="0.4" strokeDasharray="1.5 1.5"
                    initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.5 }} viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.2, ease: "easeInOut" }}
                  />
                ))}
              </svg>
              {/* India origin */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 z-20" style={{ left: `${INDIA.x}%`, top: `${INDIA.y}%` }}>
                <motion.span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-royal-500/40" animate={{ scale: [1, 2.6, 2.6], opacity: [0.7, 0, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }} />
                <div className="relative w-4 h-4 rounded-full bg-royal-600 ring-4 ring-royal-500/25" />
                <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-black text-royal-700 bg-white px-2 py-0.5 rounded-full shadow-sm border border-line">🇮🇳 You Are Here</span>
              </div>
              {/* destinations */}
              {DESTINATIONS.map((d, i) => (
                <motion.div
                  key={d.country}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: `${d.x}%`, top: `${d.y}%` }}
                  initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.15, type: "spring", stiffness: 300, damping: 18 }}
                >
                  <div className="card rounded-xl px-3 py-2 shadow-lg min-w-[150px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <p className="font-black text-ink text-sm">{d.country}</p>
                    </div>
                    <p className="text-[11px] text-royal-600 font-semibold mt-0.5">{d.exam}</p>
                    <p className="text-[11px] text-muted">{d.goal}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateOnView>

          {/* destinations list (mobile) */}
          <StaggerContainer className="md:hidden grid grid-cols-1 gap-3" staggerDelay={0.08}>
            {DESTINATIONS.map((d) => (
              <StaggerItem key={d.country}>
                <div className="card rounded-2xl p-4 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-royal-50 flex items-center justify-center"><MuiIcon name="flight" size={18} style={{ color: "#3b5bdb" }} /></span>
                  <div>
                    <p className="font-black text-ink text-sm">{d.country} <span className="text-royal-600 font-semibold">· {d.exam}</span></p>
                    <p className="text-muted text-xs">{d.goal}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnView className="max-w-3xl mx-auto text-center mt-10">
            <p className="text-body text-base md:text-lg leading-relaxed">
              Whether you&apos;re headed to Paris for a master&apos;s, Frankfurt for a new career, Montréal for permanent
              residency, or London for a fresh start — ALB builds the language skills, exam credentials, and real-world
              confidence to get you there.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════ WHAT MAKES ALB DIFFERENT ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">What Sets Us Apart</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">
              The ALB difference: <span className="gradient-text">more than a language school.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              A few things that make learning at ALB unlike anywhere else.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.09}>
            {DIFF.map((d) => (
              <StaggerItem key={d.title}>
                <div className="card-feature rounded-2xl p-7 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center mb-4 shadow-lg shadow-royal-500/25">
                    <MuiIcon name={d.icon} size={26} style={{ color: "#ffffff" }} />
                  </div>
                  <h3 className="font-black text-ink text-lg">{d.title}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ VISION & MISSION ══════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission — royal filled */}
            <AnimateOnView direction="right">
              <div className="relative h-full rounded-3xl p-8 md:p-10 overflow-hidden text-white shadow-xl" style={{ background: "linear-gradient(150deg,#3b5bdb,#2f49c0)" }}>
                <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                <span className="relative z-10 eyebrow-pill-light">Our Mission</span>
                <h3 className="relative z-10 text-2xl md:text-3xl font-black mt-1">Empower Every Voice</h3>
                <p className="relative z-10 mt-4 text-white/70 text-lg leading-relaxed">
                  To equip learners with language skills, communication confidence, and professional readiness
                  to thrive in a connected, global world.
                </p>
              </div>
            </AnimateOnView>

            {/* Vision — white */}
            <AnimateOnView direction="left">
              <div className="relative h-full card rounded-3xl p-8 md:p-10">
                <span className="eyebrow-pill-outline">Our Vision</span>
                <h3 className="text-2xl md:text-3xl font-black text-ink mt-1">A World Without Barriers</h3>
                <p className="mt-4 text-body text-lg leading-relaxed">
                  A world where language is never a barrier and confidence is never the missing piece —
                  where every learner walks in hesitant and walks out <span className="gradient-text font-bold">ready.</span>
                </p>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ══════════════════ THE ALB PROMISE (dark CTA) ══════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-royal w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[480px] h-[480px] rounded-full pointer-events-none hidden md:block"
          style={{ border: "1px solid rgba(255,255,255,0.08)", translateX: "-50%", translateY: "-50%" }}
          animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <span className="eyebrow-pill-light">The ALB Promise</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 max-w-3xl mx-auto leading-tight">
              From learning a language to <span className="gradient-text-light">living it.</span>
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just teach languages. We help learners build the confidence to use them —
              in every room, every country, every opportunity.
            </p>

            <div className="mt-10 pt-8 border-t border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-black text-white">Join a community going beyond.</h3>
              <p className="mt-3 text-white/55 leading-relaxed">
                Beyond language. Beyond hesitation. Beyond limits. Your journey starts with a single
                conversation — and we&apos;re ready to have it.
              </p>
              <div className="mt-7 flex flex-wrap justify-center items-center gap-4">
                <Link href="/courses" className="btn-white text-base px-8 py-4">
                  Explore Our Programmes <ArrowRight size={16} />
                </Link>
                <button onClick={() => openModal()} className="inline-flex items-center gap-1.5 text-sky-300 font-bold text-sm hover:text-sky-200 transition-colors">
                  Have questions? Talk to us <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
