"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, Globe, Quote, Sparkles, PenLine, Check } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";

/* ─────────────── data ─────────────── */

const HERO_QUOTES = [
  { img: "/images/hero-images/homepage/english.png", quote: "Learning another language is not only learning different words for the same things, but learning another way to think about things.", author: "Flora Lewis" },
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
      "For more than five decades, education has been woven into our family's story. From school principals to dedicated teachers, generations before us devoted their lives to helping students grow, learn, and unlock opportunities through learning.",
      "We grew up seeing firsthand how the right teacher can change a student's confidence, direction, and future.",
      "That legacy became the foundation of everything we would later build.",
    ],
    cover: "/images/about-us/story-cover1.png",
    from: "#3b5bdb", to: "#2f49c0",
  },
  {
    eyebrow: "The Gap We Couldn't Ignore",
    heading: ["Students were learning languages.", "But something was missing."],
    body: [
      "Students were attending classes, completing courses, and earning certificates.",
      "Yet when it was time to speak in an interview, participate in a university discussion, present an idea, or adapt to life in a new country, many struggled.",
      "The language was there. The confidence wasn't.",
      "The certificate was there. The communication skills weren't.",
      "We realised that success requires more than knowing a language. It requires knowing how to use it.",
    ],
    cover: "/images/about-us/story-cover2.png",
    from: "#0ea5e9", to: "#0284c7",
  },
  {
    eyebrow: "The Birth of ALB",
    heading: ["So we built", "something different."],
    body: [
      "Not just a language academy. Not just an exam-preparation centre.",
      "We created Academy of Languages and Beyond, a place where language learning meets communication, confidence, and real-world readiness.",
      "A place where learners don't simply study French, German, English, etc. They learn how to express themselves, connect with others, and thrive in the opportunities they're working towards.",
      "That's why we are the Academy of Languages and Beyond.",
    ],
    cover: "/images/about-us/story-cover3.png",
    from: "#6366f1", to: "#4338ca",
  },
];

const DESTINATIONS = [
  { country: "Canada", exam: "TEF / TCF Canada", goal: "Permanent Residency", x: 23, y: 33 },
  { country: "UK", exam: "IELTS", goal: "Study and Work", x: 40, y: 22 },
  { country: "Germany", exam: "Goethe / TestDaF", goal: "Work and University", x: 53, y: 27 },
  { country: "France", exam: "DELF / DALF", goal: "Study and Career", x: 43, y: 35 },
  { country: "Australia", exam: "IELTS / PTE", goal: "Education and Immigration", x: 89, y: 89 },
];
const INDIA = { x: 69, y: 52 };
const arc = (a: { x: number; y: number }, b: { x: number; y: number }) =>
  `M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${Math.max(Math.min(a.y, b.y) - 6, 2)} ${b.x} ${b.y}`;

const DIFF = [
  { icon: "sparkle", title: "Language + Life Skills", desc: "Every programme includes our Global Confidence Programme, live, interactive, and free. Because fluency without confidence is only half the story.", from: "#3b5bdb", to: "#6d8bff" },
  { icon: "chat",    title: "Live and Interactive",     desc: "No recorded lectures. Every session is instructor-led and built around real conversation, because that's how humans actually learn to speak.", from: "#8b5cf6", to: "#a78bfa" },
  { icon: "target",  title: "Built for the Real World", desc: "We design every programme around the professional, academic, and social situations our students actually face. Practical from day one.", from: "#0ea5e9", to: "#38bdf8" },
  { icon: "people",  title: "Intimate Cohorts",       desc: "We keep cohorts small deliberately, so every student is known, seen, and supported. Big enough to learn from, small enough to matter.", from: "#10b981", to: "#34d399" },
];

/* ─────────────── page ─────────────── */

export default function AboutPage() {
  const { openModal } = useBooking();

  const [slide, setSlide] = useState(0);
  // Tap-to-flip for the story cards (hover flips on desktop; touch has no hover).
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const toggleFlip = (i: number) =>
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
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
        {/* soft animated spotlight behind the headline */}
        <motion.div
          className="absolute left-1/2 top-32 -translate-x-1/2 w-[680px] max-w-[92vw] h-[340px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(59,91,219,0.14), transparent 70%)" }}
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.06, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

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
              <span key={b.label} className="flex items-center gap-2 bg-white/90 backdrop-blur border border-line shadow-sm rounded-full pl-2 pr-4 py-1.5 transition-all hover:-translate-y-0.5 hover:shadow-md">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
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
            className="mt-7 text-center mx-auto max-w-5xl text-3xl sm:text-4xl lg:text-[3.2rem] font-black text-ink leading-[1.1] tracking-tight"
          >
            We don&apos;t just teach languages.<br />
            We build{" "}
            <span className="aurora-text inline-block pb-1">fluency, confidence and belonging.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-center mx-auto max-w-3xl text-sm md:text-base text-body leading-relaxed"
          >
            Academy of Languages and Beyond bridges the gap between learning a language and living it,
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
            {/* card 1, quote + photo carousel */}
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

            {/* card 2, stat */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="md:col-span-3 group relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[340px] p-6 flex flex-col"
              style={{ background: "linear-gradient(150deg,#3b5bdb,#2f49c0)" }}
            >
              {/* texture + ambient glows */}
              <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.20), transparent 70%)" }} />
              {/* concentric heritage rings */}
              <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full border border-white/10 pointer-events-none" />
              <div className="absolute -bottom-14 -left-14 w-44 h-44 rounded-full border border-white/10 pointer-events-none" />

              {/* top: icon badge + heritage pill */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Award size={20} className="text-white" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-white/75 bg-white/10 border border-white/20 rounded-full px-3 py-1">ALB Heritage</span>
              </div>

              {/* bottom: stat */}
              <div className="relative z-10 mt-auto">
                <div className="flex items-end gap-2.5">
                  <span className="text-6xl md:text-7xl font-black text-white leading-[0.85]">3</span>
                  <span className="text-white/90 text-xl font-black mb-1.5">Generations</span>
                </div>
                <div className="h-px w-14 bg-white/30 my-3.5" />
                <p className="text-white/80 text-sm font-semibold leading-snug">A family tradition of teaching, mentoring, and helping learners grow across generations.</p>
              </div>
            </motion.div>

            {/* card 3, CTA */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="md:col-span-4 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[340px] p-7 flex flex-col"
              style={{ background: "linear-gradient(150deg,#dbeafe,#bfdbfe 55%,#a8c8fb)" }}
            >
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/45 blur-2xl pointer-events-none" />
              <h3 className="relative z-10 text-2xl md:text-3xl font-black text-ink leading-tight">Learn A Language.<br />Build A Future.</h3>
              <ul className="relative z-10 mt-5 space-y-2.5">
                {["Communication Skills Included", "Interview Readiness", "Presentation Skills", "Confidence Building"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-royal-800 text-sm font-semibold">
                    <span className="w-5 h-5 rounded-full bg-royal-600 flex items-center justify-center flex-shrink-0">
                      <Check size={13} strokeWidth={3} className="text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/soft-skills-training-online"
                className="relative z-10 mt-auto inline-flex items-center gap-2.5 self-start pl-6 pr-2.5 py-2.5 rounded-full font-black text-white text-sm transition-transform hover:-translate-y-0.5"
                style={{ background: "#3b5bdb" }}
              >
                Explore +Beyond
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
      </section>

      {/* ══════════════════ OUR STORY (flip cards) ══════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
        <div className="blob blob-royal w-[460px] h-[460px] -top-24 left-[-8%] opacity-40 pointer-events-none" />
        <div className="blob blob-sky w-[420px] h-[420px] bottom-[-10%] right-[-8%] opacity-30 pointer-events-none" />

        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-light">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-1 leading-tight">The story <span className="gradient-text-light">behind ALB.</span></h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">Hover each chapter to read the full story.</p>
          </AnimateOnView>

          <StaggerContainer className="grid md:grid-cols-3 gap-5 lg:gap-6" staggerDelay={0.1}>
            {BEATS.map((b, i) => (
              <StaggerItem key={i} className="h-full">
                <div
                  onClick={() => toggleFlip(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFlip(i); } }}
                  aria-pressed={flipped.has(i)}
                  className="group relative h-[500px] cursor-pointer [perspective:2000px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2"
                >
                  {/* colored glow that blooms on hover */}
                  <div
                    className="absolute -inset-3 rounded-[28px] opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(150deg, ${b.from}, ${b.to})` }}
                  />
                  <div
                    className={`relative h-full w-full transition-transform duration-[750ms] ease-[cubic-bezier(0.34,1.2,0.4,1)] [transform-style:preserve-3d] ${flipped.has(i) ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}
                  >
                    {/* FRONT — cover image + heading */}
                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)]">
                      {/* cover image */}
                      <Image src={b.cover} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      {/* dark gradient overlay for legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040a23]/95 via-[#081138]/45 to-[#081138]/20 pointer-events-none" />
                      <span className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${b.from}, transparent)` }} />

                      <div className="relative z-10 p-7 flex flex-col h-full">
                        <div className="flex items-center justify-between">
                          <span className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 backdrop-blur flex items-center justify-center text-white font-black text-sm">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="mt-auto">
                          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white/75 block mb-2.5">/ {b.eyebrow}</span>
                          <h3 className="text-2xl md:text-[1.7rem] font-black text-white leading-[1.12] tracking-tight">
                            {b.heading[0]} {b.heading[1]}
                          </h3>
                          <span className="mt-5 inline-flex items-center gap-1.5 text-white/80 text-[11px] font-bold uppercase tracking-wide">
                            Read the story
                            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* BACK — body */}
                    <div
                      className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden p-7 flex flex-col shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)]"
                      style={{ background: `linear-gradient(150deg, ${b.from}, ${b.to})` }}
                    >
                      <div className="absolute inset-0 bg-[#00082a]/55 pointer-events-none" />
                      <div className="relative z-10 flex items-center justify-between mb-5 pb-4 border-b border-white/15">
                        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white/80">/ {b.eyebrow}</span>
                        <span className="w-8 h-8 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center text-white font-black text-xs">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="relative z-10 space-y-2.5 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {b.body.map((p, k) => (
                          <p key={k} className="text-white text-[13px] md:text-sm font-medium leading-relaxed">{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ FOUNDER'S NOTE ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-50 pointer-events-none" />
        <div className="blob blob-royal w-[480px] h-[480px] -top-24 right-[-10%] opacity-30 pointer-events-none" />
        <div className="blob blob-sky w-[420px] h-[420px] bottom-[-12%] left-[-8%] opacity-25 pointer-events-none" />

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16 items-center">

            {/* ── Founder photo card ── */}
            <AnimateOnView direction="right">
              <div className="relative mx-auto w-full max-w-sm">
                {/* soft animated glow behind the card */}
                <motion.div
                  className="absolute -inset-4 rounded-[2.2rem] blur-2xl pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(59,91,219,0.28), rgba(14,165,233,0.18))" }}
                  animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.03, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative rounded-[1.6rem] overflow-hidden bg-white border border-line shadow-[0_34px_80px_-34px_rgba(16,23,51,0.5)]">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/hero-images/Founder.png"
                      alt="Jasmine Kaur, Founder of ALB"
                      fill
                      sizes="(max-width:1024px) 90vw, 400px"
                      className="object-cover object-top"
                    />
                    {/* legibility gradient at the base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />

                    {/* legacy badge */}
                    <motion.span
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ink/70 backdrop-blur-md border border-white/15 px-3 py-1.5 text-[11px] font-black text-white tracking-wide"
                    >
                      <motion.span
                        animate={{ rotate: [0, 18, -8, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-amber-400 inline-flex"
                      >
                        <Sparkles size={13} fill="currentColor" />
                      </motion.span>
                      50+ yr legacy
                    </motion.span>

                    {/* glass name plate */}
                    <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-ink/65 backdrop-blur-md border border-white/15 px-4 py-3">
                      <div className="min-w-0">
                        <p className="text-white font-black text-base leading-tight">Jasmine Kaur</p>
                        <p className="text-white/60 text-xs font-semibold">Founder, ALB</p>
                      </div>
                      <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: "linear-gradient(135deg,#3b5bdb,#6d8bff)" }}>
                        <PenLine size={16} className="text-white" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnView>

            {/* ── Founder's words ── */}
            <AnimateOnView direction="left">
              <span className="eyebrow-pill-outline">Founder&apos;s Note</span>

              <h2 className="text-3xl md:text-5xl font-black text-ink mt-4 leading-[1.12]">
                In the <span className="gradient-text">founder&apos;s words.</span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 h-1 w-20 origin-left rounded-full"
                style={{ background: "linear-gradient(90deg,#3b5bdb,#6d8bff)" }}
              />

              <div className="relative mt-6">
                <Quote size={46} className="absolute -top-3 -left-1 text-royal-100 -z-0" fill="currentColor" />

                <StaggerContainer className="relative space-y-4" staggerDelay={0.12}>
                  <StaggerItem>
                    <p className="text-body leading-relaxed">
                      When I first began exploring the language-learning industry, I noticed a pattern.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-body leading-relaxed">
                      Students were spending months preparing for language exams and certifications. Many achieved impressive scores. Many completed their courses successfully.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-body leading-relaxed">
                      But when real opportunities arrived, an interview, a university admission process, a client meeting, a visa interaction, or life in a new country, they often lacked the confidence to communicate effectively.
                    </p>
                  </StaggerItem>

                  {/* highlighted founding line */}
                  <StaggerItem>
                    <div className="flex gap-3.5 my-5">
                      <span className="w-1 rounded-full flex-shrink-0 self-stretch" style={{ background: "linear-gradient(to bottom,#3b5bdb,#6d8bff)" }} />
                      <p className="text-lg md:text-xl font-black text-ink leading-snug">
                        That observation became the starting point for the Academy of Languages and Beyond.
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <p className="text-body leading-relaxed">
                      I didn&apos;t want to create another language institute focused only on grammar, vocabulary, and examination scores. I wanted to build a learning experience that prepared people for what happens after the certificate.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-body leading-relaxed">
                      That&apos;s why every ALB programme focuses not only on language proficiency, but also on communication, confidence, critical thinking, and professional readiness.
                    </p>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* signature */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex items-center gap-4 pt-6 border-t border-line"
              >
                <span className="font-display text-3xl md:text-4xl text-ink leading-none italic">Jasmine Kaur</span>
                <span className="text-muted text-sm font-semibold">Founder and Director, ALB</span>
              </motion.div>
            </AnimateOnView>
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
            <div className="relative w-full aspect-[16/8] rounded-3xl overflow-hidden border border-line shadow-lg">
              <Image src="/images/about-us/map.png" alt="World map of ALB destinations" fill sizes="(min-width:768px) 100vw, 0px" className="object-cover" />
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
              residency, or London for a fresh start, ALB builds the language skills, exam credentials, and real-world
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
            {DIFF.map((d, i) => (
              <StaggerItem key={d.title} className="h-full">
                <div className="group relative w-full h-full min-h-[230px] flex flex-col rounded-2xl bg-white border border-line p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_-24px_rgba(16,23,51,0.3)]">
                  {/* colored glow fills the lower corner */}
                  <span
                    className="absolute -bottom-14 -right-12 w-52 h-52 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ background: d.from }}
                  />
                  {/* colored hover ring */}
                  <span
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1.5px ${d.from}44` }}
                  />
                  {/* number watermark */}
                  <span
                    className="absolute top-5 right-6 text-6xl font-black select-none leading-none pointer-events-none opacity-[0.12] group-hover:opacity-25 transition-opacity duration-300"
                    style={{ color: d.from }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* gradient icon tile — anchored top */}
                  <span
                    className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ background: `linear-gradient(150deg, ${d.from}, ${d.to})`, boxShadow: `0 8px 22px ${d.from}59` }}
                  >
                    <MuiIcon name={d.icon} size={24} style={{ color: "#ffffff" }} />
                  </span>

                  {/* text — anchored to the bottom */}
                  <div className="relative z-10 mt-auto pt-10">
                    <h3 className="font-black text-ink text-lg md:text-xl leading-snug">{d.title}</h3>
                    <p className="text-muted text-sm mt-2 leading-relaxed max-w-md">{d.desc}</p>
                  </div>

                  {/* gradient accent line slides in on hover */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, ${d.from}, ${d.to})` }}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ VISION and MISSION ══════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission, light */}
            <AnimateOnView direction="right">
              <div className="relative h-full rounded-[28px] p-8 md:p-12 bg-white border border-line shadow-xl overflow-hidden">
                <span className="text-sm font-extrabold text-ink tracking-tight">Our Mission</span>
                <p className="mt-7 text-2xl md:text-[1.9rem] font-black text-ink leading-[1.2]">
                  Empower every voice.
                </p>
                <p className="mt-6 text-xl md:text-2xl font-medium text-body leading-[1.35]">
                  To equip learners with language skills, communication confidence, and professional
                  readiness to thrive in a connected, global world.
                </p>
              </div>
            </AnimateOnView>

            {/* Vision, gradient */}
            <AnimateOnView direction="left">
              <div
                className="relative h-full rounded-[28px] p-8 md:p-12 overflow-hidden text-white shadow-xl"
                style={{ background: "linear-gradient(135deg,#6366f1 0%,#4f7cf5 55%,#4f87e8 100%)" }}
              >
                <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                <span className="relative z-10 text-sm font-extrabold text-white/90 tracking-tight">Our Vision</span>
                <p className="relative z-10 mt-7 text-2xl md:text-[1.9rem] font-black leading-[1.2]">
                  A world without barriers.
                </p>
                <p className="relative z-10 mt-6 text-xl md:text-2xl font-medium text-white/90 leading-[1.35]">
                  Where language is never a barrier and confidence is never the missing piece, every
                  learner walks in hesitant and walks out ready.
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
              We don&apos;t just teach languages. We help learners build the confidence to use them,
              in every room, every country, every opportunity.
            </p>

            <div className="mt-10 pt-8 border-t border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-black text-white">Join a community going beyond.</h3>
              <p className="mt-3 text-white/55 leading-relaxed">
                Beyond language. Beyond hesitation. Beyond limits. Your journey starts with a single
                conversation, and we&apos;re ready to have it.
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
