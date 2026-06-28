"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, CheckCircle, ChevronDown, Hourglass, Video, Clock, Gift, Sparkles } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon } from "@/lib/icons";
import { CountUp } from "@/components/shared/CountUp";
import { useBooking } from "@/components/shared/BookingContext";

/* ─────────────── data ─────────────── */

const HERO_STATS = [
  { Icon: Hourglass, value: "2", unit: "Weeks" },
  { Icon: Video, value: "6", unit: "Live Sessions" },
  { Icon: Clock, value: "6", unit: "Hours" },
  { Icon: Gift, value: "₹0", unit: "Extra Cost" },
];

// Floating gradient icon tiles that frame the hero image
const STATS = [
  { value: "2",  label: "Weeks",             grad: "linear-gradient(135deg,#dde6ff,#c2d2ff)" },
  { value: "6",  label: "Live Sessions",     grad: "linear-gradient(135deg,#e0f2fe,#bae6fd)" },
  { value: "6",  label: "Hours of Training", grad: "linear-gradient(135deg,#e7ecff,#cdd9f7)" },
  { value: "3",  label: "Sessions per Week", grad: "linear-gradient(135deg,#dbeafe,#bfd5fd)" },
  { value: "₹0", label: "Extra Cost",        grad: "linear-gradient(135deg,#3b5bdb,#0ea5e9)", dark: true },
];

const WEEKS = [
  {
    week: "Week 1",
    title: "Confidence and Communication Foundations",
    sessions: [
      { n: 1, title: "Self-Awareness and Confidence Building", topics: ["Understanding communication styles", "Building self-confidence", "Speaking with clarity and presence", "Overcoming hesitation and fear of speaking"] },
      { n: 2, title: "Effective Communication Skills", topics: ["Active listening", "Verbal and non-verbal communication", "Building rapport and empathy", "Everyday professional interactions"] },
      { n: 3, title: "Public Speaking Fundamentals", topics: ["Structuring your thoughts", "Speaking confidently in groups", "Presentation basics", "Practice activities and feedback"] },
    ],
  },
  {
    week: "Week 2",
    title: "Professional Readiness",
    sessions: [
      { n: 4, title: "Professional Communication", topics: ["Email etiquette", "Workplace communication", "Professional introductions", "Cross-cultural communication basics"] },
      { n: 5, title: "Personal Branding and Interview Skills", topics: ["Creating a professional impression", "Interview preparation", "Answering common interview questions", "Confidence under pressure"] },
      { n: 6, title: "Capstone Simulation and Feedback", topics: ["Role plays", "Mock interview or networking activity", "Individual feedback", "Graduation and action plan"] },
    ],
  },
];

const OUTCOMES = [
  { icon: "stars",   title: "Communicate with Greater Confidence", desc: "Speak up in any room, clearly, calmly, and with genuine presence.", from: "#3b5bdb", to: "#6d8bff" },
  { icon: "sparkle", title: "Present Yourself Professionally",     desc: "Make a strong first impression in introductions, meetings, and on stage.", from: "#8b5cf6", to: "#a78bfa" },
  { icon: "target",  title: "Navigate Interviews and Networking",    desc: "Handle interviews, panels, and networking situations with poise and structure.", from: "#0ea5e9", to: "#38bdf8" },
  { icon: "work",    title: "Master Workplace Communication",      desc: "Write sharp emails and communicate effectively across global teams.", from: "#10b981", to: "#34d399" },
  { icon: "globe",   title: "Develop a Global Professional Mindset", desc: "Carry the cross-cultural awareness that international workplaces expect.", from: "#f59e0b", to: "#fbbf24" },
];

const PROFILES = [
  { icon: "work",     title: "The Job Seeker Abroad",   desc: "You've learned the language. Now you need to walk into that interview in Paris or Frankfurt and own the room. This module gives you exactly that." },
  { icon: "article",  title: "The Visa Applicant",      desc: "The officer will ask you questions in French or German. What they're really judging is your composure and clarity, not just your grammar." },
  { icon: "school",   title: "The International Student", desc: "You're heading to a university abroad. The coursework won't be the hard part, presenting yourself, speaking in seminars, and fitting into professional spaces will be." },
  { icon: "business", title: "The Working Professional", desc: "You're already in a multilingual environment, but your emails feel stiff, your meetings feel awkward, and presentations make you nervous. This module changes that." },
];

const FAQS = [
  { q: "What is a soft skills training programme and who is it for?", a: "A soft skills training programme builds the professional communication, confidence, and interpersonal skills that academic and technical qualifications alone don't teach. It's designed for anyone preparing for a global career, international university, or life abroad, where how you communicate matters as much as what you know. At ALB, this training is built directly into every language course through our +Beyond module, not sold separately." },
  { q: "Can soft skills training genuinely help with visa interviews and job interviews abroad?", a: "Yes, significantly. Visa and job interviews abroad test more than language ability. They assess how clearly you express yourself under pressure, how confidently you handle unexpected questions, and how professionally you present your intent. ALB's +Beyond module specifically covers interview preparation, STAR-method responses, and high-pressure speaking scenarios so learners arrive at these moments practised, not just prepared in theory." },
  { q: "What soft skills do Indian professionals need to work or study abroad?", a: "The most critical soft skills for working or studying abroad are professional communication (written and spoken), cultural adaptability, confident public speaking, and business email writing that meets international register standards. Indian professionals specifically often face gaps in formal presentation style and networking in cross-cultural environments. ALB's +Beyond module addresses each of these directly, in the context of the target language and destination country." },
  { q: "How does a soft skills course improve professional communication in English?", a: "A structured soft skills course improves professional communication by moving beyond grammar into register, tone, and context, the things that determine whether an email gets acted on or ignored, whether a presentation persuades or just informs. ALB's +Beyond module covers professional email writing, presentation structure, and business communication across real workplace scenarios, specifically designed for learners targeting global roles or international study environments." },
  { q: "What is the difference between language fluency and professional readiness?", a: "Language fluency means you can understand and produce the language accurately. Professional readiness means you can use it effectively under real-world pressure, in a visa interview, a client meeting, a university admissions conversation. Most language courses build fluency. Very few build readiness. ALB's +Beyond module exists specifically to close this gap, combining language training with the professional communication skills that determine real outcomes." },
  { q: "How long does it take to improve professional communication and soft skills?", a: "Meaningful improvement in professional communication is achievable in two to four weeks of focused, structured practice, provided the training addresses specific scenarios rather than generic theory. ALB's +Beyond module runs intensively over two weeks, ten sessions, covering personal effectiveness in week one and professional communication in week two. Most learners notice a measurable shift in confidence and clarity within the first five sessions." },
  { q: "Is online soft skills training as effective as in-person training?", a: "For most learners, yes, when the online format is live, structured, and cohort-based rather than self-paced. The key variables are real-time instructor feedback, peer interaction, and practised speaking under observation, all of which are replicable online. ALB's +Beyond sessions are fully live, capped at 20 students per cohort, and include recorded mock interviews and presentations so learners can review their own progress, something in-person training rarely offers." },
];

/* ─────────────── page ─────────────── */

export default function BeyondPage() {
  const { openModal } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section
        className="relative overflow-hidden pt-32 pb-16 lg:pb-20 flex items-center min-h-[90vh]"
        style={{ background: "linear-gradient(180deg,#f4f3fe 0%,#eef1fe 55%,#eef6ff 100%)" }}
      >
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-50" />
        <div className="blob blob-royal w-[460px] h-[420px] -top-20 left-[-6%] opacity-30 pointer-events-none" />
        <div className="blob blob-sky w-[420px] h-[420px] bottom-[-12%] right-[-4%] opacity-30 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            {/* ── left: copy ── */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-royal-200 bg-white shadow-sm px-4 py-2 text-sm font-bold text-royal-700"
              >
                <Sparkles size={15} className="text-royal-500" />
                Included Free with Every Language Program
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl xl:text-[3.7rem] font-black text-ink leading-[1.04] tracking-tight mt-6"
              >
                Beyond Language.
                <br />
                Beyond <span className="gradient-text">Limits.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-5 text-base md:text-lg text-body max-w-xl leading-relaxed"
              >
                Most language schools teach you <em className="text-ink not-italic font-semibold">what</em> to say.
                ALB teaches you <em className="text-ink not-italic font-semibold">how</em> to say it, with the confidence,
                clarity, and professional presence that changes how the world receives you.
              </motion.p>

              {/* stat chips */}
              <motion.div
                className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
              >
                {HERO_STATS.map(({ Icon, value, unit }) => (
                  <motion.div
                    key={unit}
                    variants={{ hidden: { opacity: 0, scale: 0.85, y: 10 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2.5 rounded-2xl border border-line bg-white shadow-sm px-3.5 py-3"
                  >
                    <span className="w-9 h-9 rounded-xl bg-royal-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-royal-500" />
                    </span>
                    <span className="text-sm leading-tight">
                      <span className="font-black text-ink">{value}</span>{" "}
                      <span className="text-muted font-semibold">{unit}</span>
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-5"
              >
                <button
                  onClick={() => openModal("ALB Global Confidence Program")}
                  className="inline-flex items-center gap-3 text-base pl-7 pr-3 py-2.5 rounded-full font-black text-white transition-transform hover:-translate-y-0.5"
                  style={{ background: "#3b5bdb", boxShadow: "0 12px 30px rgba(59,91,219,0.40)" }}
                >
                  Explore the Module
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center" style={{ color: "#3b5bdb" }}><ArrowRight size={16} /></span>
                </button>
                <Link href="#outcomes" className="inline-flex items-center gap-2 text-ink font-bold text-sm border-b border-royal-300 pb-1 hover:text-royal-600 hover:border-royal-500 transition-colors">
                  See the Outcome
                  <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowDown size={15} />
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* ── right: people-network image + graphical accents ── */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* slow rotating gradient glow behind the image */}
              <motion.div
                className="absolute inset-6 rounded-full pointer-events-none"
                style={{ background: "conic-gradient(from 0deg, #3b5bdb, #0ea5e9, #6366f1, #3b5bdb)", filter: "blur(46px)", opacity: 0.22 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              />
              {/* pulsing dashed orbit ring */}
              <motion.div
                className="absolute inset-0 rounded-[2rem] border border-dashed border-royal-300/40 pointer-events-none hidden md:block"
                animate={{ scale: [1, 1.03, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="lg:scale-[1.22] origin-center">
                <Image
                  src="/images/hero-images/beyond-hero-image3.png"
                  alt="ALB +Beyond, speak with confidence in any language"
                  width={1600}
                  height={929}
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 122vw, 88vw"
                  className="relative w-full h-auto select-none drop-shadow-[0_24px_60px_rgba(59,91,219,0.18)]"
                />
              </div>

              {/* drifting sparkles */}
              {[
                { cls: "top-4 right-10", s: 18, d: 0 },
                { cls: "bottom-10 right-4", s: 14, d: 1.2 },
                { cls: "bottom-2 left-1/3", s: 16, d: 0.6 },
              ].map((sp, i) => (
                <motion.div
                  key={i}
                  className={`absolute z-20 ${sp.cls} text-royal-400 pointer-events-none`}
                  animate={{ scale: [0.7, 1, 0.7], opacity: [0.3, 0.9, 0.3], rotate: [0, 90, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: sp.d }}
                >
                  <Sparkles size={sp.s} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY +BEYOND EXISTS ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* ── left: headline + glassy pull-quote ── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow-pill-outline">Why +Beyond Exists</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-3 leading-tight">
                Language alone <span className="gradient-text">isn&apos;t enough.</span>
              </h2>
              {/* animated underline */}
              <motion.div
                className="h-1 rounded-full mt-3"
                style={{ background: "linear-gradient(90deg,#3b5bdb,#0ea5e9)" }}
                initial={{ width: 0 }} whileInView={{ width: 104 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              />

              {/* pull quote, glass card with animated glow */}
              <motion.div
                className="relative mt-8 rounded-3xl p-7 overflow-hidden"
                style={{ background: "linear-gradient(135deg,#eef2ff,#e8edff)", border: "1px solid rgba(59,91,219,0.14)" }}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle,rgba(59,91,219,0.20),transparent 70%)" }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span aria-hidden className="absolute -top-2 left-5 font-display text-7xl text-royal-300/70 leading-none select-none">&ldquo;</span>
                <p className="relative text-xl md:text-2xl font-semibold text-ink leading-snug pt-5">
                  You don&apos;t just leave ALB with a language. You leave{" "}
                  <span className="gradient-text">ready for every room</span> it opens.
                </p>
                <div className="relative mt-5 flex items-center gap-2 text-sm font-black text-royal-600">
                  <Sparkles size={15} /> The ALB +Beyond promise
                </div>
              </motion.div>
            </motion.div>

            {/* ── right: animated timeline ── */}
            <div className="relative">
              {/* growing connector line */}
              <motion.div
                className="absolute left-5 top-7 bottom-7 w-px origin-top hidden sm:block"
                style={{ background: "linear-gradient(to bottom,#6d8bff,#0ea5e9,#bfd5fd)" }}
                initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
              <div className="space-y-5">
                {[
                  { t: "The pattern we kept seeing", d: "Students completed language courses, earned their certificates, passed their mock tests, clocked their hours. And then froze." },
                  { t: "Where it broke down", d: "In visa interviews. In job interviews. On their first day in a new country. The language was there. The confidence wasn't. The certificate was there. The real-world readiness wasn't." },
                  { t: "How +Beyond closes the gap", d: "The +Beyond module exists to close that gap. Every ALB language student receives it automatically, at no extra cost, because language education is incomplete without the human skills that bring it to life.", highlight: true },
                ].map((r, i) => (
                  <motion.div
                    key={i}
                    className="relative flex gap-4 sm:gap-5"
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* number badge with sonar pulse */}
                    <div className="relative flex-shrink-0 w-10 h-10">
                      <motion.span
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(59,91,219,0.28)" }}
                        animate={{ scale: [1, 1.7, 1.7], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
                      />
                      <div
                        className="relative w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                        style={{ background: r.highlight ? "linear-gradient(135deg,#3b5bdb,#0ea5e9)" : "linear-gradient(135deg,#6d8bff,#3b5bdb)", boxShadow: "0 8px 20px rgba(59,91,219,0.35)" }}
                      >
                        {i + 1}
                      </div>
                    </div>
                    {/* card */}
                    <div className={`group flex-1 rounded-2xl p-5 transition-all hover:-translate-y-0.5 ${r.highlight ? "bg-white border-2 border-royal-200 shadow-lg shadow-royal-500/10" : "bg-white/70 backdrop-blur-sm border border-line shadow-sm hover:shadow-md"}`}>
                      <h3 className={`font-black text-xs uppercase tracking-wider mb-1.5 ${r.highlight ? "text-royal-600" : "text-ink"}`}>{r.t}</h3>
                      <p className="text-body text-sm md:text-base leading-relaxed">{r.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS BENTO (dark) ══════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-royal w-[460px] h-[460px] top-0 left-[-8%] pointer-events-none" />
        <div className="blob blob-sky w-[360px] h-[360px] bottom-0 right-[-6%] pointer-events-none" />
        {/* floating particles */}
        <motion.div className="absolute top-[18%] right-[14%] w-2 h-2 rounded-full bg-sky-400 pointer-events-none" style={{ boxShadow: "0 0 12px #38bdf8" }} animate={{ y: [0, -16, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[22%] left-[12%] w-1.5 h-1.5 rounded-full bg-royal-300 pointer-events-none" animate={{ y: [0, 14, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.div className="absolute top-[60%] right-[40%] w-1 h-1 rounded-full bg-white/70 pointer-events-none" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* left, copy */}
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-light">At a Glance</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-1 leading-tight">
                Maximum impact.{" "}
                <span className="gradient-text-light">Zero extra cost.</span>
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed max-w-md">
                Two focused weeks. Six live, interactive sessions. Real transformation,
                included free with every ALB language program.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#structure" className="btn-white">
                  Explore the Module <ArrowRight size={16} />
                </Link>
                <button onClick={() => openModal("+Beyond (Soft Skills)")} className="btn-outline-light">
                  Talk to us
                </button>
              </div>
            </AnimateOnView>

            {/* right, stat bento (dark glass tiles + graphics) */}
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
              {STATS.map((s, i) => {
                // vibrant full-width "free" highlight
                if (i === 4) {
                  return (
                    <StaggerItem key={s.label} className="col-span-2">
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className="relative overflow-hidden rounded-2xl p-6 flex items-center justify-between shadow-[0_18px_50px_rgba(59,91,219,0.4)]"
                        style={{ background: "linear-gradient(120deg,#3b5bdb,#2f49c0 55%,#0ea5e9)" }}
                      >
                        <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                        {/* shimmer sweep */}
                        <motion.div
                          className="absolute inset-y-0 w-1/3 pointer-events-none"
                          style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)" }}
                          animate={{ x: ["-150%", "350%"] }}
                          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                        />
                        <div className="relative z-10">
                          <div className="text-4xl md:text-5xl font-black text-white"><CountUp value={s.value} duration={1600} /></div>
                          <div className="text-white/85 text-sm font-semibold mt-1">{s.label}</div>
                        </div>
                        <span className="relative z-10 inline-flex items-center gap-1.5 bg-white/15 border border-white/25 rounded-full px-3.5 py-2 text-xs font-bold text-white">
                          <CheckCircle size={14} /> 100% Free
                        </span>
                      </motion.div>
                    </StaggerItem>
                  );
                }

                return (
                  <StaggerItem key={s.label}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="card-dark-hover rounded-2xl p-6 h-full relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-4xl md:text-5xl font-black gradient-text-light"><CountUp value={s.value} duration={1600} /></div>
                          <div className="text-white/55 text-sm font-semibold mt-1">{s.label}</div>
                        </div>

                        {/* per-card animated graphic */}
                        <div className="flex-shrink-0 pt-1">
                          {i === 0 && (
                            <div className="flex flex-col gap-1.5 w-12">
                              {[100, 64].map((w, k) => (
                                <div key={k} className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                                  <motion.div className="h-full rounded-full bg-sky-400" initial={{ width: 0 }} whileInView={{ width: `${w}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 + k * 0.25, ease: "easeOut" }} />
                                </div>
                              ))}
                            </div>
                          )}
                          {i === 1 && (
                            <div className="grid grid-cols-3 gap-1.5">
                              {Array.from({ length: 6 }).map((_, k) => (
                                <motion.span key={k} className="w-2 h-2 rounded-full bg-sky-400" animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.25, 1] }} transition={{ duration: 1.6, repeat: Infinity, delay: k * 0.18, ease: "easeInOut" }} />
                              ))}
                            </div>
                          )}
                          {i === 2 && (
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                              <circle cx="23" cy="23" r="18" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
                              <motion.circle
                                cx="23" cy="23" r="18" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round"
                                transform="rotate(-90 23 23)" strokeDasharray={113}
                                initial={{ strokeDashoffset: 113 }} whileInView={{ strokeDashoffset: 28 }} viewport={{ once: true }}
                                transition={{ duration: 1.3, ease: "easeInOut", delay: 0.2 }}
                              />
                            </svg>
                          )}
                          {i === 3 && (
                            <div className="flex items-end gap-1.5 h-11">
                              {[55, 100, 70].map((h, k) => (
                                <motion.div key={k} className="w-2.5 rounded-full bg-sky-400 origin-bottom" style={{ height: `${h}%` }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 + k * 0.15, ease: "easeOut" }} />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ══════════════════ WEEK BREAKDOWN ══════════════════ */}
      <section id="structure" className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] top-10 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">The Program Structure</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">
              What happens in <span className="gradient-text">2 weeks.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              Three sessions a week. One hour each. Live, interactive, and built for real transformation.
            </p>
          </AnimateOnView>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {WEEKS.map((w, wi) => (
              <AnimateOnView key={w.week} delay={wi * 0.15} direction={wi === 0 ? "right" : "left"}>
                <div className="card rounded-3xl p-6 md:p-7 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r from-[#3b5bdb] to-[#2f49c0] px-3 py-1.5 rounded-full">{w.week}</span>
                    <h3 className="font-bold text-ink text-lg leading-tight">{w.title}</h3>
                  </div>

                  <div className="relative space-y-4 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-royal-100">
                    {w.sessions.map((s, si) => (
                      <motion.div
                        key={s.n}
                        className="relative pl-11"
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: si * 0.1 }}
                      >
                        <span className="absolute left-0 top-0 w-8 h-8 rounded-full bg-royal-500 text-white flex items-center justify-center text-xs font-black shadow-md shadow-royal-500/30 z-10">{s.n}</span>
                        <h4 className="font-bold text-ink text-[15px]">{s.title}</h4>
                        <ul className="mt-2 grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                          {s.topics.map((t) => (
                            <li key={t} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                              <CheckCircle size={12} className="text-royal-400 mt-0.5 flex-shrink-0" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ LEARNING OUTCOMES ══════════════════ */}
      <section id="outcomes" className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] bottom-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-outline">What You&apos;ll Walk Away With</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">
              You leave with more than <span className="gradient-text">a language.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              Five outcomes. Real, measurable, and yours to keep, for every room you walk into after.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5" staggerDelay={0.09}>
            {OUTCOMES.map((o, i) => (
              <StaggerItem key={o.title} className={`h-full ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
                <div className="group relative w-full h-full min-h-[230px] flex flex-col rounded-2xl bg-white border border-line p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_-24px_rgba(16,23,51,0.3)]">
                  {/* colored glow fills the lower corner */}
                  <span
                    className="absolute -bottom-14 -right-12 w-52 h-52 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ background: o.from }}
                  />
                  {/* colored hover ring */}
                  <span
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1.5px ${o.from}44` }}
                  />
                  {/* number watermark */}
                  <span
                    className="absolute top-5 right-6 text-6xl font-black select-none leading-none pointer-events-none opacity-[0.12] group-hover:opacity-25 transition-opacity duration-300"
                    style={{ color: o.from }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* gradient icon tile, anchored top */}
                  <span
                    className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ background: `linear-gradient(150deg, ${o.from}, ${o.to})`, boxShadow: `0 8px 22px ${o.from}59` }}
                  >
                    <MuiIcon name={o.icon} size={24} style={{ color: "#ffffff" }} />
                  </span>

                  {/* text, anchored to the bottom */}
                  <div className="relative z-10 mt-auto pt-10">
                    <h3 className="font-black text-ink text-lg md:text-xl leading-snug">{o.title}</h3>
                    <p className="text-muted text-sm mt-2 leading-relaxed max-w-md">{o.desc}</p>
                  </div>

                  {/* gradient accent line slides in on hover */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, ${o.from}, ${o.to})` }}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ WHO IS THIS FOR (dark) ══════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-royal w-[440px] h-[440px] top-0 left-[-8%] pointer-events-none" />
        <div className="blob blob-sky w-[360px] h-[360px] bottom-0 right-[-6%] pointer-events-none" />
        {/* floating particles */}
        <motion.div className="absolute top-[20%] right-[16%] w-2 h-2 rounded-full bg-sky-400 pointer-events-none" style={{ boxShadow: "0 0 12px #38bdf8" }} animate={{ y: [0, -16, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[24%] left-[10%] w-1.5 h-1.5 rounded-full bg-royal-300 pointer-events-none" animate={{ y: [0, 14, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />

        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-light">Who This Is For</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-1 leading-tight">
              Built for learners <span className="gradient-text-light">like you.</span>
            </h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
              Whether you&apos;re heading abroad, stepping into an interview, or simply ready to communicate better.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.1}>
            {PROFILES.map((p) => (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group card-dark-hover rounded-2xl p-7 h-full relative overflow-hidden"
                >
                  {/* watermark icon graphic */}
                  <motion.div
                    className="absolute -top-5 -right-5 opacity-[0.07] pointer-events-none"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MuiIcon name={p.icon} size={130} style={{ color: "#ffffff" }} />
                  </motion.div>
                  {/* corner glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(120% 100% at 0% 0%, rgba(59,91,219,0.28), transparent 55%)" }}
                  />
                  <div className="relative z-10 flex gap-5">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center flex-shrink-0 shadow-lg shadow-royal-500/30"
                      whileHover={{ rotate: -6, scale: 1.08 }}
                    >
                      <MuiIcon name={p.icon} size={26} style={{ color: "#ffffff" }} />
                    </motion.div>
                    <div>
                      <h3 className="font-black text-white text-lg">{p.title}</h3>
                      <p className="text-white/60 text-sm mt-1.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] top-10 right-[-8%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-12 lg:gap-16 items-start">

            {/* left, sticky intro + helper */}
            <AnimateOnView direction="right" className="lg:sticky lg:top-28">
              <span className="eyebrow-pill-outline">Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">
                Everything you want to know about <span className="gradient-text">+Beyond.</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed text-sm">
                Quick answers about the ALB Global Confidence Program, what it covers, how it runs,
                and why it&apos;s included free with every language course.
              </p>

              <div className="mt-6 card rounded-2xl p-5">
                <p className="font-bold text-ink text-sm">Still have a question?</p>
                <p className="text-muted text-xs mt-1">Talk to a counsellor, no commitment.</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <button onClick={() => openModal("+Beyond (Soft Skills)")} className="btn-primary text-sm px-4 py-2.5">
                    Book a Free Call <ArrowRight size={14} />
                  </button>
                  <a href="https://wa.me/919821275843" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-4 py-2.5">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimateOnView>

            {/* right, numbered Q and A accordion */}
            <StaggerContainer className="space-y-4" staggerDelay={0.07}>
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <StaggerItem key={f.q}>
                    <div className="card rounded-2xl relative overflow-hidden transition-colors" style={{ borderColor: open ? "rgba(59,91,219,0.35)" : undefined }}>
                      {/* gradient left accent */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3b5bdb] to-[#38bdf8] origin-top transition-transform duration-300 ${open ? "scale-y-100" : "scale-y-0"}`} />
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="w-full flex items-start gap-4 p-6 text-left hover:bg-royal-50/40 transition-colors"
                        aria-expanded={open}
                      >
                        <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] text-white font-black text-xs flex items-center justify-center shadow-md shadow-royal-500/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="flex-1 font-bold text-ink text-[15px] md:text-base leading-snug pt-1.5">{f.q}</h3>
                        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0 text-royal-400 mt-1.5">
                          <ChevronDown size={18} />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-6 pl-[4.25rem] text-body text-sm leading-relaxed">{f.a}</p>
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

      {/* ══════════════════ ALB PROMISE / CTA (dark) ══════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-royal w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[480px] h-[480px] rounded-full pointer-events-none hidden md:block"
          style={{ border: "1px solid rgba(255,255,255,0.08)", translateX: "-50%", translateY: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <span className="eyebrow-pill-light">The ALB Promise</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 max-w-3xl mx-auto leading-tight">
              You don&apos;t just leave with a language.{" "}
              <span className="gradient-text-light">You leave ready.</span>
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Students leave ALB with stronger language skills, deeper confidence, sharper communication,
              and real professional readiness, without paying a rupee extra. That&apos;s the +Beyond difference.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => openModal("+Beyond (Soft Skills)")} className="btn-white text-base px-8 py-4">
                Start Your Language Journey <ArrowRight size={16} />
              </button>
              <Link href="/courses" className="btn-outline-light text-base px-8 py-4">
                View All Courses
              </Link>
            </div>
            <p className="mt-5 text-white/40 text-xs flex items-center justify-center gap-2">
              <CheckCircle size={12} className="text-sky-300" />
              Free Trial Class Available · No Commitment Required
            </p>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
