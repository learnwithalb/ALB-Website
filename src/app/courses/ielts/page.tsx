"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users, Star, Mic, BookOpen, Headphones, PenLine } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon, CountryBadge } from "@/lib/icons";

const skills = [
  { icon: <Headphones size={28} />, name: "Listening", duration: "30 min", score: "40 questions", desc: "4 sections of recordings — conversations, monologues, lectures. Tests your ability to understand native-speed English.", color: "#3b5bdb" },
  { icon: <BookOpen size={28} />, name: "Reading", duration: "60 min", score: "40 questions", desc: "3 long texts — Academic texts from journals; 3 general texts for General Training. Skimming, scanning, comprehension.", color: "#0ea5e9" },
  { icon: <PenLine size={28} />, name: "Writing", duration: "60 min", score: "2 tasks", desc: "Task 1 (describe data/diagram) + Task 2 (academic essay). The most challenging section for most candidates.", color: "#f59e0b" },
  { icon: <Mic size={28} />, name: "Speaking", duration: "11–14 min", score: "3 parts", desc: "Face-to-face interview with an IELTS examiner — introduction, cue card monologue, two-way discussion.", color: "#6d8bff" },
];

const targetBands = [
  { range: "5.0–5.5", label: "Foundation", use: "Some vocational courses, internal company requirements", color: "#737d9c" },
  { range: "6.0–6.5", label: "Proficient", use: "Undergraduate admissions, most work visas (UK, Australia, Canada)", color: "#0ea5e9" },
  { range: "7.0–7.5", label: "Good User", use: "Postgraduate admissions (UK/US/AUS), nursing registration", color: "#3b5bdb" },
  { range: "8.0+", label: "Expert", use: "Top-tier programmes, clinical roles, elite scholarships", color: "#f59e0b" },
];

const whyAlbIelts = [
  { icon: "chart",   title: "Band 7+ Strategy",    desc: "Every skill has a specific strategy. We don't just practice — we teach you how the examiners score and how to maximise every band point." },
  { icon: "article", title: "Full Mock Tests",      desc: "Weekly full mock tests under exam conditions, with detailed examiner-style feedback on every task." },
  { icon: "article", title: "Writing Correction",   desc: "All Writing Task 1 & 2 submissions are corrected and returned with band-score feedback within 48 hours." },
  { icon: "mic",     title: "Speaking Simulation",  desc: "Recorded speaking practice with AI and human feedback — watch yourself, improve what you see." },
  { icon: "book",    title: "Cambridge Materials",  desc: "Official Cambridge IELTS books 1–18 integrated into the syllabus — you train on the real thing." },
  { icon: "trophy",  title: "Average Score 7.2",    desc: "Our academic batch average is 7.2 — well above the Indian national average of 6.3. Results speak." },
];

function AnimatedBar({ rate, color = "#3b5bdb" }: { rate: number; color?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 bg-royal-100 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${rate}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

export default function IeltsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-light pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[560px] h-[560px] -top-40 right-0 pointer-events-none" />
        <div className="blob blob-sky w-[380px] h-[380px] bottom-0 left-0 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView>
              <Link href="/courses" className="inline-flex items-center gap-1.5 text-muted text-sm hover:text-royal-700 transition-colors mb-5">
                ← All Courses
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  className="inline-block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CountryBadge code="GB" color="#012169" size="lg" />
                </motion.span>
                <span className="eyebrow-pill-outline text-sm">Most Critical</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-ink leading-tight">
                IELTS Coaching
                <span className="gradient-text"> Programme</span>
              </h1>
              <p className="mt-4 text-xl text-body leading-relaxed">
                Your passport to global education and careers. Band 7+ strategy — not just practice.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Enroll Now <ArrowRight size={16} />
                </a>
                <Link href="/courses" className="btn-outline">All Languages</Link>
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left" className="hidden lg:block">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: "3M+", label: "Tests taken yearly" },
                  { stat: "140+", label: "Countries accept IELTS" },
                  { stat: "7.2", label: "Our average band" },
                  { stat: "90 days", label: "Intensive course" },
                ].map((w, i) => (
                  <motion.div
                    key={w.label}
                    className="card rounded-2xl p-6 text-center"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    <div className="text-3xl font-black gradient-text">{w.stat}</div>
                    <div className="text-muted text-sm mt-1">{w.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Quick facts (royal band) */}
      <section className="sec-dark">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: <Clock size={18} />, label: "Duration", value: "45–90 days" },
              { icon: <Users size={18} />, label: "Batch Size", value: "Max 8" },
              { icon: <Star size={18} />, label: "Rating", value: "4.9 / 5" },
              { icon: <CheckCircle size={18} />, label: "Target Band", value: "7.0+" },
            ].map((f, i) => (
              <div key={i} className="py-6 px-5 text-center border-r border-white/12 last:border-r-0">
                <div className="flex justify-center text-sky-300 mb-1">{f.icon}</div>
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wider">{f.label}</div>
                <div className="text-white font-black text-xl mt-0.5">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic vs General */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Which IELTS Do You Need?</span>
            <h2 className="text-3xl font-black text-ink mt-2">
              Academic vs{" "}
              <span className="gradient-text">General Training</span>
            </h2>
          </AnimateOnView>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                type: "Academic",
                for: "University admission, postgraduate study, professional registration",
                examples: ["UK/US/AUS/Canada universities", "Medical & nursing councils", "Engineering bodies", "Academic scholarships"],
                color: "#3b5bdb",
              },
              {
                type: "General Training",
                for: "Work experience, secondary school, migration to English-speaking countries",
                examples: ["Australia & Canada PR", "UK Skilled Worker Visa", "New Zealand residency", "Work experience programmes"],
                color: "#0ea5e9",
              },
            ].map((item) => (
              <AnimateOnView key={item.type}>
                <motion.div
                  className="card rounded-2xl p-8"
                  style={{ borderTop: `3px solid ${item.color}` }}
                  whileHover={{ y: -4 }}
                >
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: `${item.color}14`, color: item.color }}>
                    IELTS {item.type}
                  </div>
                  <p className="text-body text-sm leading-relaxed mb-5">{item.for}</p>
                  <ul className="space-y-2">
                    {item.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-sm text-body">
                        <CheckCircle size={13} style={{ color: item.color }} className="flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimateOnView>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-6">Not sure which you need? <a href="https://wa.me/919876543210" className="text-royal-600 font-semibold hover:underline">WhatsApp us</a> and we&apos;ll tell you in 2 minutes.</p>
        </div>
      </section>

      {/* 4 skills */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Exam Format</span>
            <h2 className="text-3xl font-black text-ink mt-2">
              4 skills. <span className="gradient-text">One exam. Infinite doors.</span>
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.09}>
            {skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <motion.div
                  className="card rounded-2xl p-6 h-full"
                  style={{ borderTop: `3px solid ${skill.color}` }}
                  whileHover={{ y: -6 }}
                >
                  <div className="mb-4" style={{ color: skill.color }}>{skill.icon}</div>
                  <h3 className="font-black text-ink text-lg">{skill.name}</h3>
                  <div className="flex gap-3 mt-2 mb-3">
                    <span className="text-xs text-muted">{skill.duration}</span>
                    <span className="text-royal-200">·</span>
                    <span className="text-xs text-muted">{skill.score}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{skill.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why ALB IELTS */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Why ALB for IELTS?</span>
            <h2 className="text-3xl font-black text-ink mt-2">
              Strategy, not just{" "}
              <span className="gradient-text">practice.</span>
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {whyAlbIelts.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="card-feature rounded-2xl p-6 h-full">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center mb-3"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <MuiIcon name={item.icon} size={26} style={{ color: "#3b5bdb" }} />
                  </motion.div>
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Band target section */}
      <section className="section-padding sec-mist">
        <div className="container-max">
          <AnimateOnView className="text-center mb-10">
            <span className="eyebrow">Band Score Guide</span>
            <h2 className="text-3xl font-black text-ink mt-2">
              What does your{" "}
              <span className="gradient-text">target band unlock?</span>
            </h2>
          </AnimateOnView>
          <div className="space-y-4 max-w-3xl mx-auto">
            {targetBands.map((band, i) => (
              <AnimateOnView key={band.range} delay={i * 0.08}>
                <motion.div className="card-hover rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4" whileHover={{ x: 4 }}>
                  <div className="flex-shrink-0">
                    <div className="text-2xl font-black" style={{ color: band.color }}>{band.range}</div>
                    <div className="text-xs text-muted font-semibold">{band.label}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-body text-sm leading-relaxed">{band.use}</p>
                  </div>
                </motion.div>
              </AnimateOnView>
            ))}
          </div>

          <AnimateOnView className="mt-10">
            <div className="card rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-ink font-bold text-xl mb-6 text-center">ALB Average Band Scores</h3>
              {[
                { skill: "Listening", avg: 8.0 },
                { skill: "Reading", avg: 7.5 },
                { skill: "Writing", avg: 6.8 },
                { skill: "Speaking", avg: 7.2 },
              ].map((s) => (
                <div key={s.skill} className="mb-5 last:mb-0">
                  <div className="flex justify-between mb-2">
                    <span className="text-body text-sm">{s.skill}</span>
                    <span className="text-royal-600 font-bold text-sm">{s.avg.toFixed(1)}</span>
                  </div>
                  <AnimatedBar rate={(s.avg / 9) * 100} />
                </div>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

    </>
  );
}
