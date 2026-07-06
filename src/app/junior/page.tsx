"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Check, ChevronDown, Users, Globe } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { CountUp } from "@/components/shared/CountUp";
import { useBooking } from "@/components/shared/BookingContext";
import { MuiIcon, Flag } from "@/lib/icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

/* ─────────────── data ─────────────── */

const SCIENCE_STATS = [
  { value: "2+ Languages", label: "One child. Multiple ways to think, communicate, and connect." },
  { value: "<12", label: "The years when language absorption happens most naturally." },
  { value: "A Lifetime Advantage", label: "The confidence built through communication stays long after the classroom." },
];

const REASONS = [
  { icon: "brain", edge: "Sharper Brain", stat: "Bilingual kids score higher on problem-solving, memory, and critical-thinking tests.", from: "#8b5cf6", to: "#6366f1" },
  { icon: "school", edge: "Better Academic Performance", stat: "Bilingual students score roughly 140 more points on the SAT than monolingual peers.", from: "#3b5bdb", to: "#2f49c0" },
  { icon: "globe", edge: "Global Career Advantage", stat: "French is spoken in 29 countries; German-speakers earn 20–30% more in EU jobs.", from: "#0ea5e9", to: "#06b6d4" },
  { icon: "mic", edge: "Native-Level Fluency", stat: "Children under 12 develop native-like accents. After 15, it's significantly harder.", from: "#f43f5e", to: "#ec4899" },
  { icon: "rocket", edge: "Confidence and Growth Mindset", stat: "Making mistakes in a new language builds resilience, a skill that transfers to everything.", from: "#f59e0b", to: "#f97316" },
];

const COURSES = [
  {
    code: "ALB Junior, French",
    flagCode: "FR",
    name: "French Junior",
    popular: true,
    tagline: "The world's most romantic language, and one of its most useful.",
    from: "#3b5bdb", to: "#2f49c0",
    levels: "A1 → A2 → B1 → B2",
    exam: ["DELF A1", "A2", "B1", "B2"],
    points: [
      "Taught through India-relevant stories, games, and real conversations",
      "Every level prepares for an internationally recognised DELF certificate",
      "Canada PR, study in France / Belgium, and an early academic advantage",
      "Absolute beginners welcome, zero prior knowledge needed",
    ],
    bestFor: "A head start in board exams, the Canada immigration pathway, or simply a love for France.",
  },
  {
    code: "ALB Junior, German",
    flagCode: "DE",
    name: "German Junior",
    popular: false,
    tagline: "Germany's economy is the 4th largest in the world. Your child could work in it.",
    from: "#6366f1", to: "#4338ca",
    levels: "A1 → A2 → B1 → B2",
    exam: ["Goethe A1", "A2", "B1", "B2"],
    points: [
      "German grammar taught systematically, the way young minds absorb it best",
      "Prepares for the Goethe-Zertifikat, the most recognised German credential",
      "Opens doors to tuition-free university education in Germany",
      "Perfect for future engineering, medicine, or business students",
    ],
    bestFor: "Ambitious, long-term thinkers → Germany, Austria, Switzerland, and the EU job market.",
  },
];

const FAQS = [
  { q: "What is the right age for a child to start learning a second language?", a: "Research consistently shows that children between 6 and 12 years old are in an optimal window for second language acquisition, pronunciation accuracy, retention, and instinctive grammar absorption are all significantly higher at this stage than in adulthood. Starting before 10 specifically gives children a near-native accent advantage that becomes much harder to develop after puberty. Academy of Languages and Beyond (ALB) Junior is designed for learners aged 6 to 18, with curriculum adapted by age group." },
  { q: "Should my child learn French or German, which is better for their future?", a: "Both carry strong long-term value but for different reasons. French is the second most taught language globally, opens pathways to Canada, France, Belgium, Switzerland, and Francophone Africa, and carries weight in international organisations. German offers strong university and Ausbildung opportunities in Germany and Austria. For Indian school students, French integrates more naturally as a third language option. The best choice depends on your child's long-term educational or career direction." },
  { q: "What are the benefits of learning French or German for Indian school students?", a: "For Indian school students, learning French or German offers three distinct advantages: academic, French is a recognised third language option in CBSE and ICSE boards and can contribute to board exam scores; competitive, multilingual candidates stand out in university admissions globally; and long-term, language certifications like DELF and Goethe-Zertifikat earned in school remain valid for life and give students a verifiable credential years before their peers." },
  { q: "What language certifications can school students earn?", a: "School students learning French can earn internationally recognised DELF (Diplôme d'Études en Langue Française) certifications at A1 and A2 levels, official credentials issued by the French Ministry of Education that never expire. Students learning German can work toward Goethe-Zertifikat A1 and A2. Both are globally recognised, accepted by universities and visa authorities worldwide, and carry significantly more weight than school grades alone in international university applications." },
  { q: "How long does it take for a child to earn a DELF A1 or A2 certificate?", a: "With consistent structured learning, most children with no prior French exposure can reach DELF A1 readiness in approximately 8 weeks and A2 readiness in a further 8 weeks. At Academy of Languages and Beyond (ALB) Junior, each level runs 8 weeks with three live sessions per week, meaning a child can realistically earn a DELF A1 certification within their first term and A2 within two terms, well within a standard academic year." },
  { q: "Is French or German difficult for Indian children to learn?", a: "Less difficult than most parents expect, particularly French for Hindi-speaking children. French shares hundreds of cognates with English (words like 'nation,' 'information,' 'animal' are identical or near-identical), making vocabulary acquisition faster than it appears. German has a more complex grammar system but children absorb grammatical patterns more intuitively than adults. Both languages become significantly more natural when taught with India-specific examples and linguistic bridges rather than Western textbooks." },
  { q: "Will learning French or German help my child in CBSE or ICSE exams?", a: "Yes, French is available as a third language option in both CBSE and ICSE boards, and a strong foundation built through structured courses like Academy of Languages and Beyond (ALB) Junior directly supports board exam performance. Beyond school exams, children who learn French or German to a certified level (DELF A2 or above) also strengthen their university applications significantly, both in India and for institutions abroad that value demonstrated multilingualism." },
  { q: "How do online language classes for children actually work?", a: "Effective online language classes for children require small group sizes, live instructor interaction, and structured speaking time in every session, not passive video watching. Academy of Languages and Beyond (ALB) Junior batches are capped at 12 students, run live three times per week, and incorporate speaking practice in every class rather than reserving it for assessments. Sessions are age-adapted, activity-based, and supported by AI-powered pronunciation practice between classes for daily reinforcement." },
  { q: "Can a child with no language background start learning French or German?", a: "Absolutely, both French and German courses at Academy of Languages and Beyond (ALB) Junior begin at A1, which assumes zero prior knowledge. The curriculum is specifically designed for complete beginners, with vocabulary, grammar, and pronunciation introduced progressively and reinforced through age-appropriate activities. No prior language exposure is needed or expected. Many of Academy of Languages and Beyond (ALB)'s strongest junior learners started with no background at all and reached certified A2 level within a single academic year." },
  { q: "Does learning a second language early give children a cognitive advantage?", a: "Yes, and the research is well established. Children who learn a second language consistently show stronger performance in problem-solving, pattern recognition, and focused attention compared to monolingual peers. Multilingualism has also been linked to stronger working memory and greater mental flexibility. Beyond the cognitive benefits, children who gain a language certification before 18 carry a verifiable, lifelong credential into university applications and early career opportunities." },
];

/* ─────────────── page ─────────────── */

export default function JuniorPage() {
  const { openModal } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative hero-light overflow-hidden pt-28 pb-0 flex flex-col">
        <div className="blob blob-sky w-[420px] h-[420px] top-[8%] right-[10%] opacity-40 pointer-events-none" />
        <div className="blob blob-royal w-[400px] h-[400px] top-[24%] left-[8%] opacity-30 pointer-events-none" />

        {/* ── centre content ── */}
        <div className="container-max px-5 md:px-8 relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow-pill">ALB Junior · Ages 6–16</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[3.9rem] font-black text-ink leading-[1.05] tracking-tight mt-5"
          >
            A brighter future for <span className="gradient-text">your child.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-body"
          >
            Let your child speak, present, and belong on the world stage.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-7">
            <button
              onClick={() => openModal("ALB Junior (Ages 6–16)")}
              className="inline-flex items-center gap-3 text-base pl-7 pr-3 py-2.5 rounded-full font-black text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "#3b5bdb", boxShadow: "0 12px 28px rgba(59,91,219,0.40)" }}
            >
              Book a Free Demo
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center" style={{ color: "#3b5bdb" }}><ArrowRight size={16} /></span>
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 text-sm text-body max-w-md leading-relaxed"
          >
            French, German and English, taught live and online in small batches, with real
            speaking practice, projects and exam-ready milestones throughout the journey.
          </motion.p>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-start justify-center gap-10 sm:gap-16"
          >
            {[
              { Icon: Users, value: "Age-Appropriate Curriculum", label: "Designed for young learners" },
              { Icon: Globe, value: "3", label: "Languages, French, German and English" },
            ].map((s) => (
              <div key={s.value} className="flex items-start gap-3 text-left max-w-[200px]">
                <span className="w-9 h-9 rounded-full bg-white shadow-sm border border-line flex items-center justify-center flex-shrink-0 mt-1">
                  <s.Icon size={16} className="text-royal-500" />
                </span>
                <div>
                  <div className="text-lg md:text-xl font-black text-ink leading-tight">{s.value}</div>
                  <p className="text-muted text-xs mt-1.5 leading-snug">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── side kid photos (anchored to a centred track so they don't drift on wide screens) ── */}
        <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
          <div className="relative h-full w-full max-w-[1380px] mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-[44%] -translate-y-1/2"
            >
              <div className="relative w-[260px] h-[260px] xl:w-[300px] xl:h-[300px] rounded-full" style={{ background: "radial-gradient(circle at 50% 38%, #fbbf24 0%, #f59e0b 100%)", boxShadow: "0 30px 60px rgba(245,158,11,0.28)" }}>
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image src="/images/hero-images/junior/kid1.png" alt="ALB Junior learner" fill sizes="300px" className="object-cover object-[50%_12%]" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-[44%] -translate-y-1/2"
            >
              <div className="relative w-[260px] h-[260px] xl:w-[300px] xl:h-[300px] rounded-full" style={{ background: "radial-gradient(circle at 50% 38%, #fb923c 0%, #ea6c12 100%)", boxShadow: "0 30px 60px rgba(234,108,18,0.28)" }}>
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image src="/images/hero-images/junior/kid2.png" alt="ALB Junior learner" fill sizes="300px" className="object-cover object-[88%_30%] scale-[1.3] origin-center" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Programmes strip ── */}
        <div className="container-max px-5 md:px-8 relative z-20 mt-14 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-t-3xl overflow-hidden p-6 md:p-8 grid lg:grid-cols-[1fr_2fr] gap-6 items-center"
            style={{ background: "linear-gradient(135deg, #1b2a63 0%, #0f1840 60%, #00082A 100%)" }}
          >
            <div>
              <h3 className="text-white font-black text-2xl">Programmes</h3>
              <p className="text-white/55 text-sm mt-2 leading-relaxed max-w-xs">
                Live language programmes designed to develop your child, ages 6 to 16.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { flag: "FR", name: "French", href: "/courses/french" },
                { flag: "EN", name: "English", href: "/courses/ielts" },
                { flag: "DE", name: "German", href: "/courses/german" },
              ].map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group rounded-2xl p-4 transition-all bg-white/[0.06] border border-white/10 hover:bg-white/10"
                >
                  <Flag code={p.flag} size={34} rounded="rounded-lg" className="shadow" />
                  <p className="text-white font-black text-sm mt-3">{p.name}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold mt-1 text-white/60 group-hover:gap-1.5 transition-all">
                    Learn more <ArrowRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ BENTO ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          {/* heading */}
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow-pill-blue">Why Families Love ALB Junior</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">
              Big confidence, <span className="gradient-text">small joyful classes.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {[
              { src: "/images/hero-images/junior/card1.png", alt: "Live online classes, real teachers, real-time" },
              { src: "/images/hero-images/junior/card5.png", alt: "Every child deserves a global voice" },
              { src: "/images/hero-images/junior/card4.png", alt: "Small, joyful batches, max 12 kids" },
            ].map((c) => (
              <StaggerItem key={c.src}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative aspect-[3/2] rounded-3xl overflow-hidden shadow-lg ring-1 ring-line/60"
                >
                  <Image src={c.src} alt={c.alt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  {/* shine sweep on hover */}
                  <motion.div
                    className="absolute top-0 -left-1/3 w-1/3 h-full bg-white/15 blur-md -skew-x-12 pointer-events-none opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ x: ["0%", "380%"] }}
                    transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="mt-8 flex flex-wrap items-center justify-center gap-3" staggerDelay={0.1}>
            {["Educators with 5+ years of language-instruction experience", "Curriculum designed by certified DELF and Goethe examiners"].map((t) => (
              <StaggerItem key={t}>
                <span className="inline-flex items-center gap-2 bg-white border border-line shadow-sm rounded-full px-4 py-2 text-sm font-semibold text-ink">
                  <CheckCircle size={14} className="text-royal-500" /> {t}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
                The advantages of learning young{" "}
                <span className="gradient-text-light">last a lifetime.</span>
              </h2>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                Research consistently shows that learning another language at an early age strengthens
                communication skills, cultural awareness, cognitive flexibility, and long-term confidence.
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
                    <div key={s.label} className="card-dark rounded-2xl p-4 text-center flex flex-col">
                      <div className="text-base md:text-lg font-black gradient-text-light leading-tight">
                        <CountUp value={s.value} duration={1600} />
                      </div>
                      <div className="text-white/50 text-[11px] font-semibold mt-2 leading-snug">{s.label}</div>
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

          <StaggerContainer className="max-w-4xl mx-auto space-y-3.5" staggerDelay={0.1}>
            {REASONS.map((r, i) => (
              <StaggerItem key={r.edge}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative card rounded-2xl p-5 md:p-6 flex items-center gap-5 overflow-hidden transition-shadow duration-300"
                >
                  {/* colored accent bar */}
                  <span
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(${r.from}, ${r.to})` }}
                  />
                  {/* soft colored glow that blooms on hover */}
                  <span
                    className="absolute -left-8 -top-10 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ background: r.from }}
                  />

                  {/* glowing gradient icon tile */}
                  <div
                    className="relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ background: `linear-gradient(150deg, ${r.from}, ${r.to})`, boxShadow: `0 8px 22px ${r.from}66, 0 0 0 1px ${r.from}22` }}
                  >
                    <MuiIcon name={r.icon} size={28} style={{ color: "#ffffff" }} />
                  </div>

                  <div className="relative flex-1 min-w-0 grid md:grid-cols-[200px_1fr] gap-1 md:gap-5 md:items-center">
                    <h3 className="font-black text-ink text-base md:text-lg">{r.edge}</h3>
                    <p className="text-muted text-sm leading-relaxed">{r.stat}</p>
                  </div>

                  <span
                    className="hidden md:block flex-shrink-0 text-4xl font-black opacity-20 group-hover:opacity-100 transition-opacity duration-300 select-none"
                    style={{ color: r.from }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
              Two world languages. One academy.{" "}
              <span className="gradient-text">A lifetime of doors.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              Every course is live, online, India-first, and exam-ready, designed specifically for children aged 6 to 16.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto items-stretch" staggerDelay={0.12}>
            {COURSES.map((c) => (
              <StaggerItem key={c.code} className="h-full">
                <div
                  className="group relative h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-line transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: "0 18px 46px -22px rgba(16,23,51,0.28)" }}
                >
                  {/* colour ribbon on top edge */}
                  <span className="absolute top-0 inset-x-0 h-1.5 z-20" style={{ background: `linear-gradient(90deg, ${c.from}, ${c.to})` }} />

                  {c.popular && (
                    <span
                      className="absolute top-4 right-4 z-30 inline-flex items-center gap-1 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md"
                      style={{ background: c.from }}
                    >
                      ★ Popular
                    </span>
                  )}

                  {/* gradient header */}
                  <div className="relative px-7 pt-9 pb-7 overflow-hidden" style={{ background: `linear-gradient(150deg, ${c.from}, ${c.to})` }}>
                    <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                    <div className="absolute -top-12 -right-10 w-48 h-48 rounded-full bg-white/15 blur-2xl pointer-events-none" />
                    <motion.div className="relative z-10 inline-flex" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                      <Flag code={c.flagCode} size={54} rounded="rounded-2xl" className="shadow-xl ring-2 ring-white/40" />
                    </motion.div>
                    <h3 className="relative z-10 text-[1.7rem] font-black text-white mt-4 leading-none">{c.name}</h3>
                    <p className="relative z-10 text-white/85 text-sm mt-2.5 leading-relaxed">{c.tagline}</p>
                  </div>

                  {/* body */}
                  <div className="p-7 flex flex-col flex-1">
                    {/* stat strip */}
                    <div className="grid grid-cols-2 gap-x-5 gap-y-4 pb-6 mb-6 border-b border-line">
                      {[["Ages", "6–16"], ["Batch", "Max 12"], ["Sessions", "3 / week · 90 min"], ["Levels", c.levels]].map(([k, v]) => (
                        <div key={k}>
                          <p className="text-[10px] font-extrabold uppercase tracking-wide" style={{ color: c.from }}>{k}</p>
                          <p className="text-[13px] font-bold text-ink mt-1 leading-tight">{v}</p>
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-3 flex-1">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-body leading-relaxed">
                          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${c.from}1f` }}>
                            <Check size={12} strokeWidth={3.5} style={{ color: c.from }} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    {/* exam-ready chips */}
                    <div className="mt-6 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-muted mr-1">Exam Ready</span>
                      {c.exam.map((e) => (
                        <span
                          key={e}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-lg border"
                          style={{ color: c.to, borderColor: `${c.from}33`, background: `${c.from}0f` }}
                        >
                          {e}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-muted mt-5 leading-relaxed"><span className="font-bold text-ink">Best for:</span> {c.bestFor}</p>

                    <button
                      onClick={() => openModal(c.code)}
                      className="group/btn w-full justify-center mt-6 inline-flex items-center gap-2 rounded-full font-black text-white text-sm py-3.5 transition-transform hover:-translate-y-0.5"
                      style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, boxShadow: `0 12px 28px -8px ${c.from}aa` }}
                    >
                      Enroll Now <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-1" />
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
                <p className="text-muted text-sm mt-0.5">Play-based, story-led, confidence and vocabulary first.</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }} className="group card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-royal-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <MuiIcon name="target" size={28} style={{ color: "#3b5bdb" }} />
              </div>
              <div>
                <p className="font-black text-ink">Ages 11–16</p>
                <p className="text-muted text-sm mt-0.5">Structured, exam-ready, DELF, Goethe and IELTS aligned.</p>
              </div>
            </motion.div>
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
                Ages, languages, batches, certificates and more, answered for parents.
              </p>
              <div className="mt-6 card rounded-2xl p-5">
                <p className="font-bold text-ink text-sm">Still have a question?</p>
                <p className="text-muted text-xs mt-1">Book a free demo, meet the teacher first.</p>
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
