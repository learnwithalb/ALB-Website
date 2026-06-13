"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { CountUp } from "@/components/shared/CountUp";
import { useBooking } from "@/components/shared/BookingContext";
import { MuiIcon, Flag } from "@/lib/icons";

/* ─────────────── data ─────────────── */

const TRUST = ["Ages 6–16", "Live Online", "Small Cohorts", "DELF / Goethe Exam Readiness", "India-First Curriculum"];

const SCIENCE_STATS = [
  { value: "140", prefix: "+", label: "SAT points vs monolingual peers" },
  { value: "29", label: "Countries that speak French" },
  { value: "12", prefix: "<", label: "The critical age for native fluency" },
];

const REASONS = [
  { icon: "brain", edge: "Sharper Brain", stat: "Bilingual kids score higher on problem-solving, memory, and critical-thinking tests." },
  { icon: "school", edge: "Better Academic Performance", stat: "Bilingual students score roughly 140 more points on the SAT than monolingual peers." },
  { icon: "globe", edge: "Global Career Advantage", stat: "French is spoken in 29 countries; German-speakers earn 20–30% more in EU jobs." },
  { icon: "mic", edge: "Native-Level Fluency", stat: "Children under 12 develop native-like accents. After 15, it's significantly harder." },
  { icon: "rocket", edge: "Confidence & Growth Mindset", stat: "Making mistakes in a new language builds resilience — a skill that transfers to everything." },
];

const COURSES = [
  {
    code: "ALB Junior — French",
    flagCode: "FR",
    name: "French Junior",
    popular: false,
    tagline: "The world's most romantic language — and one of its most useful.",
    from: "#3b5bdb", to: "#2f49c0",
    levels: "A1 → A2 → B1 → B2",
    exam: ["DELF A1", "A2", "B1", "B2"],
    points: [
      "Taught through India-relevant stories, games, and real conversations",
      "Every level prepares for an internationally recognised DELF certificate",
      "Canada PR, study in France / Belgium, and an early academic advantage",
      "Absolute beginners welcome — zero prior knowledge needed",
    ],
    bestFor: "A head start in board exams, the Canada immigration pathway, or simply a love for France.",
  },
  {
    code: "ALB Junior — English",
    flagCode: "GB",
    name: "English Junior",
    popular: true,
    tagline: "They already know English. Now let's make them brilliant at it.",
    from: "#0ea5e9", to: "#0284c7",
    levels: "Foundation → Intermediate → Advanced",
    exam: ["IELTS 5.5", "6.5", "7.5+"],
    points: [
      "Tackles Indian-English challenges — pronunciation, hesitation, grammar in speech",
      "Builds reading, writing, listening AND speaking — all four IELTS skills",
      "Prepares for competitive schools, Model UN, debate, and interviews",
      "Foundation → Advanced track targets IELTS bands 5.5 through 7.5+",
    ],
    bestFor: "International schools, abroad applications, competitive exams, or real everyday confidence.",
  },
  {
    code: "ALB Junior — German",
    flagCode: "DE",
    name: "German Junior",
    popular: false,
    tagline: "Germany's economy is the 4th largest in the world. Your child could work in it.",
    from: "#6366f1", to: "#4338ca",
    levels: "A1 → A2 → B1 → B2",
    exam: ["Goethe A1", "A2", "B1", "B2"],
    points: [
      "German grammar taught systematically — the way young minds absorb it best",
      "Prepares for the Goethe-Zertifikat, the most recognised German credential",
      "Opens doors to tuition-free university education in Germany",
      "Perfect for future engineering, medicine, or business students",
    ],
    bestFor: "Ambitious, long-term thinkers → Germany, Austria, Switzerland, and the EU job market.",
  },
];

const FAQS = [
  { q: "What age group is ALB Junior designed for?", a: "ALB Junior is designed for children aged 6 to 16. Students aged 6–10 follow a play-based, story-led curriculum focused on confidence and vocabulary. Students aged 11–16 follow a structured, exam-ready track aligned to internationally recognised DELF, Goethe-Zertifikat, and IELTS standards." },
  { q: "Which languages can my child learn at ALB Junior?", a: "ALB Junior offers three languages — French, English, and German — for children aged 6 to 16. All courses are fully online, live, and taught in small batches of maximum 12 students. Each language runs from beginner (A1) through to upper-intermediate (B2) level." },
  { q: "How many students are in each batch?", a: "Every ALB Junior batch has a maximum of 12 students. This ensures every child gets individual speaking time, personalised corrections, and direct attention from the instructor — something impossible in larger classroom or mass-market online settings." },
  { q: "What certificate does my child receive?", a: "Certificates depend on the language. French learners are prepared for DELF A1/A2/B1/B2 — issued by the French Ministry of Education and valid for life. German learners sit the Goethe-Zertifikat. English learners are prepared for IELTS. All exam preparation is built into every level at no extra charge." },
  { q: "Are classes recorded? What if my child misses a session?", a: "Yes — all ALB Junior sessions are recorded and shared with enrolled students. If your child misses a class, they can watch the recording before the next session. Progress reports are shared with parents every 4 weeks so you always know exactly where your child stands." },
  { q: "Does my child need any prior knowledge to join?", a: "No prior knowledge is required. ALB Junior's A1 level is designed for absolute beginners — children with zero exposure to French or German. For English, a placement assessment helps identify the right starting level (Foundation, Intermediate, or Advanced)." },
  { q: "Will my child be the only Indian kid in the class?", a: "Not at all! ALB Junior batches are filled with students from across India — Delhi, Mumbai, Bangalore, Hyderabad, and beyond. Your child will make friends learning the same language, which makes practising far more fun." },
  { q: "Is French or German hard for Indian kids to learn?", a: "Not as hard as you'd think! French shares over 1,000 words with English — words like “nation,” “police,” and “culture” are almost identical. German is very logical once you understand the pattern. Most ALB Junior students hold full conversations within their first 4 weeks." },
  { q: "What happens in a typical ALB Junior class?", a: "A typical 90-minute class includes a warm-up activity, new vocabulary or grammar introduced through stories or games, a speaking-practice round where every student participates, and a short fun activity or challenge. No student just sits and listens — everyone speaks." },
  { q: "Can my child try a class before enrolling?", a: "Yes! ALB Junior offers a free demo class with no commitment required. Your child gets to meet the teacher, try a real activity, and see if the class feels right — before any decision is made." },
  { q: "Will learning French or German help in school exams?", a: "Yes — significantly. French is offered as a second language in CBSE and ICSE boards, and a strong foundation from ALB Junior gives students a huge advantage over classroom-only learners. German is increasingly recognised in competitive school assessments and scholarship applications." },
  { q: "How long does it take to get a DELF certificate?", a: "DELF A1 takes approximately 8 weeks to complete at ALB Junior (3 sessions per week). After completing the level, students are fully prepared to sit the official DELF exam. Most students reach A2 within one academic year, and B1 by their second year." },
];

type Floater = { kind: "flag" | "icon"; val: string; d: number; top?: string; bottom?: string; left?: string; right?: string };
const FLOATERS: Floater[] = [
  { kind: "flag", val: "FR", top: "14%", left: "6%",  d: 3.4 },
  { kind: "flag", val: "DE", top: "22%", right: "9%", d: 4.2 },
  { kind: "icon", val: "edit", bottom: "26%", left: "9%", d: 3.0 },
  { kind: "icon", val: "globe", top: "55%", right: "5%", d: 3.8 },
  { kind: "icon", val: "school", bottom: "16%", right: "16%", d: 4.6 },
  { kind: "flag", val: "GB", top: "40%", left: "3%", d: 3.2 },
];

/* ─────────────── page ─────────────── */

export default function JuniorPage() {
  const { openModal } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden pt-28 pb-20 hero-light">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[520px] h-[460px] -top-24 left-1/4 pointer-events-none" />
        <div className="blob blob-sky w-[420px] h-[420px] bottom-0 right-[-6%] pointer-events-none" />

        {/* floating flag & icon chips */}
        {FLOATERS.map((f, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block select-none pointer-events-none"
            style={{ top: f.top, left: f.left, right: f.right, bottom: f.bottom }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -18, 0], rotate: [0, 6, -6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.6 + i * 0.1 },
              scale: { duration: 0.6, delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 },
              y: { duration: f.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
              rotate: { duration: f.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
            }}
          >
            {f.kind === "flag" ? (
              <Flag code={f.val} size={44} rounded="rounded-xl" className="shadow-lg shadow-royal-500/20 ring-1 ring-white/60" />
            ) : (
              <span className="w-12 h-12 rounded-2xl bg-white shadow-lg shadow-royal-500/15 border border-line flex items-center justify-center">
                <MuiIcon name={f.val} size={24} style={{ color: "#3b5bdb" }} />
              </span>
            )}
          </motion.div>
        ))}

        <div className="container-max px-5 md:px-8 relative z-10 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow-pill">ALB Junior · Ages 6–16</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-black text-ink leading-[1.05] tracking-tight max-w-4xl mx-auto"
          >
            Give your child a head start{" "}
            <span className="gradient-text">the world will notice.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-5 text-lg md:text-xl text-body max-w-2xl mx-auto leading-relaxed"
          >
            French, German &amp; English — taught live, online, in small batches.
            Designed for Indian children. Structured for global success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.33 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <button onClick={() => openModal("ALB Junior (Ages 6–16)")} className="btn-primary text-base px-7 py-3.5">
              Book a Free Demo Class <ArrowRight size={16} />
            </button>
            <Link href="#courses" className="btn-outline text-base px-7 py-3.5">
              View Courses for My Child
            </Link>
          </motion.div>

          {/* trust strip */}
          <motion.div
            className="mt-9 flex flex-wrap justify-center gap-2.5"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } } }}
          >
            {TRUST.map((t) => (
              <motion.span
                key={t}
                variants={{ hidden: { opacity: 0, scale: 0.8, y: 10 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-1.5 bg-white border border-line shadow-sm rounded-full px-3.5 py-1.5 text-xs font-bold text-ink"
              >
                <CheckCircle size={12} className="text-royal-500" />
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ BENTO ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {/* tile 1 — graphic */}
            <StaggerItem>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="relative h-full min-h-[230px] rounded-3xl overflow-hidden flex flex-col justify-end p-7 shadow-lg" style={{ background: "linear-gradient(155deg,#3b5bdb,#2f49c0)" }}>
                <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                <motion.div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <MuiIcon name="computer" size={32} style={{ color: "#ffffff" }} />
                </motion.div>
                <p className="relative z-10 text-white font-bold text-lg">Live online classes</p>
                <p className="relative z-10 text-white/60 text-sm mt-1">Real teachers, real-time — never pre-recorded.</p>
              </motion.div>
            </StaggerItem>

            {/* tile 2 — quote */}
            <StaggerItem>
              <div className="relative h-full min-h-[230px] card rounded-3xl p-7 flex flex-col justify-center text-center overflow-hidden">
                <span aria-hidden className="absolute -top-3 left-5 font-display text-6xl text-royal-100 leading-none select-none">&ldquo;</span>
                <p className="relative font-display text-2xl md:text-[1.7rem] font-semibold text-ink leading-snug">
                  Every child deserves a global voice.
                </p>
                <motion.span
                  className="relative z-10 mt-5 mx-auto inline-flex items-center gap-2 bg-royal-50 border border-royal-100 rounded-full px-4 py-2 text-xs font-bold text-royal-700"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Flag code="FR" size={16} rounded="rounded" /> French A1 → 8 Weeks
                </motion.span>
              </div>
            </StaggerItem>

            {/* tile 3 — graphic */}
            <StaggerItem>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="relative h-full min-h-[230px] rounded-3xl overflow-hidden flex flex-col justify-end p-7 shadow-lg" style={{ background: "linear-gradient(155deg,#0ea5e9,#0284c7)" }}>
                <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                <motion.div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                  <MuiIcon name="people" size={32} style={{ color: "#ffffff" }} />
                </motion.div>
                <p className="relative z-10 text-white font-bold text-lg">Small, joyful batches</p>
                <p className="relative z-10 text-white/70 text-sm mt-1">Max 12 kids — everyone speaks, every class.</p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          <AnimateOnView className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-2 text-center">
            <p className="text-sm text-muted font-semibold flex items-center gap-2"><CheckCircle size={14} className="text-royal-500" /> Educators with 5+ years of language-instruction experience</p>
            <p className="text-sm text-muted font-semibold flex items-center gap-2"><CheckCircle size={14} className="text-royal-500" /> Curriculum designed by certified DELF &amp; Goethe examiners</p>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════ THE SCIENCE (dark) ══════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-sky w-[460px] h-[460px] top-0 right-[-8%] pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-light">The Science Is Clear</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-1 leading-tight">
                The edge your child gets today{" "}
                <span className="gradient-text-light">lasts their entire life.</span>
              </h2>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                Research from the NIH, the University of Michigan, and global cognitive studies shows that
                children who learn a second language before 12 gain measurable, lifelong advantages — in
                memory, focus, academics, and confidence.
              </p>
            </AnimateOnView>

            {/* graphic: brain orb + stat cards */}
            <AnimateOnView direction="left">
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span key={i} className="absolute rounded-full border border-white/15" style={{ width: 56 + i * 36, height: 56 + i * 36 }} animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.15, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }} />
                    ))}
                    <motion.div className="relative flex items-center justify-center" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
                      <MuiIcon name="brain" size={56} style={{ color: "#7dd3fc" }} />
                    </motion.div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {SCIENCE_STATS.map((s) => (
                    <div key={s.label} className="card-dark rounded-2xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-black gradient-text-light">
                        {s.prefix}<CountUp value={s.value} duration={1600} />
                      </div>
                      <div className="text-white/50 text-[11px] font-semibold mt-1 leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ══════════════════ 5 REASONS ══════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] top-10 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">Why Start Early</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">
              5 reasons <span className="gradient-text">smart parents</span> start early.
            </h2>
          </AnimateOnView>

          <StaggerContainer className="max-w-4xl mx-auto space-y-3" staggerDelay={0.1}>
            {REASONS.map((r, i) => (
              <StaggerItem key={r.edge}>
                <motion.div whileHover={{ x: 6 }} className="group card rounded-2xl p-5 md:p-6 flex items-center gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-royal-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-royal-100">
                    <MuiIcon name={r.icon} size={28} style={{ color: "#3b5bdb" }} />
                  </div>
                  <div className="flex-1 min-w-0 grid md:grid-cols-[200px_1fr] gap-1 md:gap-5 md:items-center">
                    <h3 className="font-black text-ink text-base md:text-lg">{r.edge}</h3>
                    <p className="text-muted text-sm leading-relaxed">{r.stat}</p>
                  </div>
                  <span className="hidden md:block flex-shrink-0 text-3xl font-black text-royal-100 group-hover:text-royal-300 transition-colors select-none">{String(i + 1).padStart(2, "0")}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ COURSES ══════════════════ */}
      <section id="courses" className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[440px] h-[440px] bottom-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-outline">Choose a Language</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">
              Three languages. One academy.{" "}
              <span className="gradient-text">A lifetime of doors.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              Every course is live, online, India-first, and exam-ready — designed specifically for children aged 6 to 16.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {COURSES.map((c) => (
              <StaggerItem key={c.code}>
                <div className="card-hover rounded-3xl overflow-hidden h-full flex flex-col relative">
                  {c.popular && (
                    <span className="absolute top-4 right-4 z-20 bg-amber-400 text-ink text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow">★ Most Popular</span>
                  )}
                  {/* gradient header */}
                  <div className="relative px-6 pt-7 pb-6 overflow-hidden" style={{ background: `linear-gradient(150deg, ${c.from}, ${c.to})` }}>
                    <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                    <motion.div className="relative z-10 inline-flex" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                      <Flag code={c.flagCode} size={56} rounded="rounded-2xl" className="shadow-xl ring-2 ring-white/40" />
                    </motion.div>
                    <h3 className="relative z-10 text-2xl font-black text-white mt-3">{c.name}</h3>
                    <p className="relative z-10 text-white/75 text-sm mt-1.5 leading-relaxed">{c.tagline}</p>
                  </div>

                  {/* body */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* meta */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[["Ages", "6–16"], ["Levels", c.levels], ["Sessions", "3 / week · 90 min"], ["Batch", "Max 12"]].map(([k, v]) => (
                        <div key={k} className="rounded-xl bg-royal-50 px-3 py-2">
                          <p className="text-[10px] font-bold uppercase tracking-wide text-muted">{k}</p>
                          <p className="text-xs font-bold text-ink mt-0.5 leading-tight">{v}</p>
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-2 flex-1">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-body leading-relaxed">
                          <CheckCircle size={14} className="text-royal-500 mt-0.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    {/* exam-ready chips */}
                    <div className="mt-4">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-muted mb-2">Exam Ready</p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.exam.map((e) => (
                          <span key={e} className="text-[11px] font-semibold bg-royal-50 border border-royal-100 text-royal-700 px-2.5 py-1 rounded-lg">{e}</span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-muted mt-4 leading-relaxed"><span className="font-bold text-ink">Best for:</span> {c.bestFor}</p>

                    <button onClick={() => openModal(c.code)} className="btn-primary w-full justify-center mt-5">
                      Enroll Now <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* age-split visual */}
          <AnimateOnView className="mt-8 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }} className="group card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <MuiIcon name="gaming" size={28} style={{ color: "#0ea5e9" }} />
              </div>
              <div>
                <p className="font-black text-ink">Ages 6–10</p>
                <p className="text-muted text-sm mt-0.5">Play-based, story-led — confidence &amp; vocabulary first.</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }} className="group card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-royal-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <MuiIcon name="target" size={28} style={{ color: "#3b5bdb" }} />
              </div>
              <div>
                <p className="font-black text-ink">Ages 11–16</p>
                <p className="text-muted text-sm mt-0.5">Structured, exam-ready — DELF, Goethe &amp; IELTS aligned.</p>
              </div>
            </motion.div>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════ CTA (dark) ══════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-royal w-[640px] h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <motion.div className="mb-4 inline-flex" animate={{ rotate: [0, 12, -12, 0], y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <MuiIcon name="globe" size={56} style={{ color: "#7dd3fc" }} />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
              Ready to say{" "}
              <span className="gradient-text-light">Bonjour, Hallo, or Hello</span>{" "}
              — like you mean it?
            </h2>
            <p className="mt-5 text-white/55 text-lg">First demo class is completely free — no commitment.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => openModal("ALB Junior (Ages 6–16)")} className="btn-white text-base px-8 py-4">
                Start With a Free Demo Class <ArrowRight size={16} />
              </button>
              <Link href="#courses" className="btn-outline-light text-base px-8 py-4">
                View All Courses
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] top-10 right-[-8%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-12 lg:gap-16 items-start">
            <AnimateOnView direction="right" className="lg:sticky lg:top-28">
              <span className="eyebrow-pill-blue">Parent FAQs</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">
                Everything you want to know about <span className="gradient-text">ALB Junior.</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed text-sm">
                Ages, languages, batches, certificates and more — answered for parents.
              </p>
              <div className="mt-6 card rounded-2xl p-5">
                <p className="font-bold text-ink text-sm">Still have a question?</p>
                <p className="text-muted text-xs mt-1">Book a free demo — meet the teacher first.</p>
                <button onClick={() => openModal("ALB Junior (Ages 6–16)")} className="btn-primary text-sm px-4 py-2.5 mt-4">
                  Book a Free Demo <ArrowRight size={14} />
                </button>
              </div>
            </AnimateOnView>

            <StaggerContainer className="space-y-3" staggerDelay={0.05}>
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <StaggerItem key={f.q}>
                    <div className="card rounded-2xl relative overflow-hidden" style={{ borderColor: open ? "rgba(59,91,219,0.35)" : undefined }}>
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3b5bdb] to-[#38bdf8] origin-top transition-transform duration-300 ${open ? "scale-y-100" : "scale-y-0"}`} />
                      <button onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center gap-4 p-5 text-left hover:bg-royal-50/40 transition-colors" aria-expanded={open}>
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] text-white font-black text-xs flex items-center justify-center shadow-md shadow-royal-500/25">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="flex-1 font-bold text-ink text-[15px] leading-snug">{f.q}</h3>
                        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0 text-royal-400"><ChevronDown size={18} /></motion.div>
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
    </>
  );
}
