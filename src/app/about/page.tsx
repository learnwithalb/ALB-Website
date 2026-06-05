"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Heart, Target, Eye, Star, Globe } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { stats } from "@/lib/constants";

const milestones = [
  { year: "2012", title: "Founded in Mumbai", desc: "Started with 12 students and a dream to bridge the language gap for Indian learners going global." },
  { year: "2015", title: "DELF Examination Centre", desc: "Became an authorised DELF/DALF preparation centre, the first in Western India to achieve this recognition." },
  { year: "2017", title: "+Beyond Wing Launched", desc: "Expanded beyond language into soft skills with our first Public Speaking and Communication cohorts." },
  { year: "2019", title: "500+ Annual Enrolments", desc: "Crossed 500 new students per year, with alumni now spread across 30+ countries." },
  { year: "2021", title: "Full Digital Transition", desc: "Launched our hybrid online-offline model, bringing ALB quality to learners across India." },
  { year: "2024", title: "5000+ Learners Transformed", desc: "Our community now spans 5,000+ learners with a 95% goal-achievement rate." },
];

const values = [
  { icon: "🎯", title: "Goal-First Always", desc: "Every decision we make — curriculum, faculty, scheduling — is reverse-engineered from your specific goal." },
  { icon: "🤝", title: "Student-Centred Care", desc: "We remember your name, your goal, and your story. ALB is a community, not a factory." },
  { icon: "🔬", title: "Academic Rigour", desc: "CEFR-aligned curriculum, expert faculty, and structured assessments — zero compromise on quality." },
  { icon: "🌍", title: "Cultural Immersion", desc: "Language is a window into culture. We teach both — with genuine passion and lived experience." },
  { icon: "📈", title: "Transparent Progress", desc: "Monthly reports, speaking simulations, and honest assessments. You always know exactly where you stand." },
  { icon: "♾️", title: "Lifetime Partnership", desc: "Your ALB relationship doesn't end when the course does. Alumni get perpetual access, community, and support." },
];

const team = [
  { name: "Ananya Krishnan", role: "Founder & Lead French Faculty", initials: "AK", bio: "Master's in French Literature from Alliance Française. 14 years of teaching experience across Mumbai and Paris.", colorFrom: "#0a1628", colorTo: "#162d5a", accent: "#4c8aff" },
  { name: "Vikram Desai", role: "Head of +Beyond Programmes", initials: "VD", bio: "Former McKinsey consultant and TEDx speaker. Certified executive coach with 10+ years in corporate training.", colorFrom: "#071a0d", colorTo: "#0d3018", accent: "#22C55E" },
  { name: "Priya Narayanan", role: "German Language Expert", initials: "PN", bio: "Goethe-Institut certified. Lived in Berlin for 6 years. Specialises in DAAD scholarship preparation.", colorFrom: "#1a0d07", colorTo: "#302010", accent: "#f97316" },
  { name: "Carlos Mendes", role: "Spanish & Latin American Culture", initials: "CM", bio: "Native speaker from São Paulo. MA in Hispanic Studies. Teaches with infectious enthusiasm and cultural depth.", colorFrom: "#1a0715", colorTo: "#30102a", accent: "#e879f9" },
  { name: "Yuki Tanaka", role: "Japanese Language Faculty", initials: "YT", bio: "Native Japanese speaker. Certified JLPT examiner. 8 years teaching Japanese to Indian learners.", colorFrom: "#1a0707", colorTo: "#300f0f", accent: "#f43f5e" },
  { name: "Rohan Pillai", role: "IELTS & Academic English", initials: "RP", bio: "British Council certified IELTS trainer. 95% of his students score 7.0+ in their first attempt.", colorFrom: "#07141a", colorTo: "#0f2430", accent: "#7aaaff" },
];

const credentials = [
  { icon: "🏛️", title: "DELF/DALF Prep Centre", body: "Official preparation partner for French government certification exams." },
  { icon: "🎓", title: "Goethe-Institut Aligned", body: "German curriculum aligned with Goethe-Institut standards and examination." },
  { icon: "🌐", title: "CEFR Framework", body: "All language programmes follow the Common European Framework of Reference." },
  { icon: "⭐", title: "4.9/5 Learner Rating", body: "Verified ratings from 5,000+ alumni across Google, Facebook and direct surveys." },
];

const heroCards = [
  { label: "5000+", sublabel: "Learners", icon: "🎓", delay: 0, duration: 3.2, yRange: [0, -18, 0] },
  { label: "95%", sublabel: "Success Rate", icon: "🏆", delay: 0.6, duration: 3.8, yRange: [0, -14, 0] },
  { label: "12+", sublabel: "Years", icon: "⭐", delay: 1.1, duration: 4.2, yRange: [0, -20, 0] },
];

function StatCard({ stat, index }: { stat: typeof stats[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center p-8 rounded-2xl overflow-hidden"
      style={{
        background: "rgba(13,23,41,0.7)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Animated glowing underline sweep */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ width: "100%", transformOrigin: "left center", background: "linear-gradient(90deg, transparent, #22C55E, transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: [0, 1, 0], opacity: [0, 1, 0] } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: index * 0.15 + 0.3, repeat: Infinity, repeatDelay: 3 }}
      />
      <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
      <div className="text-sm text-white/50 font-semibold">{stat.label}</div>
      {/* Subtle glow dot */}
      <motion.div
        className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#22C55E]"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
      />
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-[#060c1a] overflow-hidden pt-24 pb-16">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2b6aff]/12 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#22C55E]/8 blur-[100px]" />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{ background: "radial-gradient(circle, rgba(43,106,255,0.06) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <AnimateOnView>
                <span className="eyebrow-pill-outline">Our Story</span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mt-4 leading-[1.0] tracking-tight">
                  We exist to turn{" "}
                  <span className="gradient-text">ambition</span>
                  <br />
                  into opportunity.
                </h1>
                <p className="mt-6 text-xl text-white/55 max-w-xl leading-relaxed">
                  Academy of Languages &amp; Beyond was born from a simple belief: every
                  Indian learner who dares to go global deserves world-class preparation
                  — in language, confidence, presence, and communication.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/courses" className="btn-primary">
                    Explore Courses
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Book a Call
                  </Link>
                </div>
              </AnimateOnView>
            </div>

            {/* Right: floating glass cards */}
            <div className="hidden lg:flex flex-col items-end gap-5 pr-4">
              {heroCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  animate={{ y: card.yRange }}
                  transition={{
                    duration: card.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  }}
                  className="glass rounded-2xl px-7 py-5 flex items-center gap-5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                    minWidth: 200,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.2)" }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white leading-none">{card.label}</div>
                    <div className="text-sm text-white/50 mt-0.5 font-medium">{card.sublabel}</div>
                  </div>
                  {/* Pulsing green dot */}
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-[#22C55E] ml-auto"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                </motion.div>
              ))}

              {/* Decorative orbit ring */}
              <motion.div
                className="absolute right-8 top-1/2 w-72 h-72 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(43,106,255,0.12)", translateY: "-50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="w-3 h-3 rounded-full bg-[#2b6aff] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ boxShadow: "0 0 12px #2b6aff" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="py-16 bg-[#04080f]">
        <div className="container-max px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max px-5 md:px-8">
          <AnimateOnView className="text-center mb-14">
            <span className="eyebrow">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Purpose-built for{" "}
              <span className="gradient-text-blue">global ambition</span>
            </h2>
          </AnimateOnView>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission — animated gradient border */}
            <AnimateOnView direction="right">
              <div className="relative rounded-3xl p-px overflow-hidden h-full">
                {/* Spinning gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "conic-gradient(from 0deg, #22C55E, #4c8aff, #22C55E)",
                    opacity: 0.6,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <div
                  className="relative rounded-3xl p-8 h-full"
                  style={{ background: "#060c1a" }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.25)" }}
                  >
                    <Target size={22} className="text-[#22C55E]" />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-2xl font-black text-white">Our Mission</h2>
                    {/* Pulsing green dot */}
                    <motion.div
                      className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"
                      animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <p className="text-white/60 leading-relaxed text-lg">
                    To empower every ambitious Indian learner with the language fluency,
                    communication confidence, and global mindset they need to thrive on
                    the world stage — delivered through expert teaching, cultural
                    immersion, and genuine care.
                  </p>
                </div>
              </div>
            </AnimateOnView>

            {/* Vision */}
            <AnimateOnView direction="left">
              <div
                className="rounded-3xl p-8 h-full"
                style={{
                  background: "rgba(13,23,41,0.7)",
                  border: "1px solid rgba(43,106,255,0.18)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(43,106,255,0.12)", border: "1px solid rgba(43,106,255,0.25)" }}
                >
                  <Eye size={22} className="text-[#4c8aff]" />
                </div>
                <h2 className="text-2xl font-black text-white mb-4">Our Vision</h2>
                <p className="text-white/60 leading-relaxed text-lg">
                  A world where every Indian professional, student, and dreamer walks
                  into any global room — boardroom, campus, embassy, or street — with
                  the language and confidence to belong, connect, and lead.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-[#4c8aff] font-semibold">
                  <Globe size={16} />
                  <span>30+ countries, one community</span>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max px-5 md:px-8">
          <AnimateOnView className="text-center mb-14">
            <span className="eyebrow">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              12 years of{" "}
              <span className="gradient-text">transformation</span>
            </h2>
          </AnimateOnView>

          <div className="relative max-w-3xl mx-auto">
            {/* Gradient timeline line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #22C55E 0%, rgba(34,197,94,0.3) 60%, transparent 100%)" }}
            />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimateOnView key={i} delay={i * 0.08} direction="left">
                  <div className="pl-14 relative">
                    {/* Pulsing node */}
                    <div className="absolute left-4 top-2 -translate-x-1/2">
                      <motion.div
                        className="w-4 h-4 rounded-full bg-[#22C55E]"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#22C55E]"
                        animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    </div>

                    <div
                      className="rounded-2xl p-5"
                      style={{
                        background: "rgba(13,23,41,0.6)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className="text-xs font-black tracking-widest uppercase"
                        style={{ color: "#22C55E" }}
                      >
                        {m.year}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1">{m.title}</h3>
                      <p className="text-sm text-white/45 mt-2 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES GRID ─── */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max px-5 md:px-8">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Our values shape every class,
              <br />
              <span className="gradient-text">every conversation.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  className="rounded-2xl p-6 h-full cursor-default group"
                  style={{
                    background: "rgba(13,23,41,0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                    transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(34,197,94,0.35)",
                    boxShadow: "0 20px 60px rgba(34,197,94,0.1)",
                  }}
                >
                  {/* Floating emoji icon */}
                  <motion.div
                    className="text-4xl mb-4 inline-block"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + Math.random() * 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {v.icon}
                  </motion.div>
                  <h3 className="font-bold text-white text-lg">{v.title}</h3>
                  <p className="text-sm text-white/45 mt-2 leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── TEAM GRID ─── */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max px-5 md:px-8">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Our Faculty</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Meet the experts behind
              <span className="gradient-text"> your transformation.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  className="rounded-2xl p-6 group cursor-default"
                  style={{
                    background: "rgba(13,23,41,0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                    transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: member.accent + "55",
                    boxShadow: `0 20px 60px ${member.accent}20`,
                  }}
                >
                  {/* Gradient avatar */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${member.colorFrom} 0%, ${member.colorTo} 100%)`,
                      border: `1px solid ${member.accent}30`,
                      boxShadow: `0 4px 20px ${member.accent}15`,
                    }}
                  >
                    <span style={{ color: member.accent }}>{member.initials}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg leading-tight">{member.name}</h3>
                  <p className="text-sm font-semibold mt-1" style={{ color: member.accent }}>{member.role}</p>
                  <p className="text-sm text-white/40 mt-3 leading-relaxed">{member.bio}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CREDENTIALS ─── */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max px-5 md:px-8 text-center">
          <AnimateOnView>
            <span className="eyebrow-pill-outline">Recognition</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
              Trusted. Accredited. Proven.
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10" staggerDelay={0.08}>
            {credentials.map((c, i) => (
              <StaggerItem key={c.title}>
                <motion.div
                  className="glass rounded-2xl p-6 text-left h-full"
                  whileHover={{
                    y: -3,
                    boxShadow: "0 16px 48px rgba(43,106,255,0.12)",
                    borderColor: "rgba(43,106,255,0.3)",
                  }}
                  style={{ transition: "border-color 0.25s, box-shadow 0.25s" }}
                >
                  <motion.div
                    className="text-4xl mb-3 inline-block"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    {c.icon}
                  </motion.div>
                  <h3 className="text-white font-bold text-base">{c.title}</h3>
                  <p className="text-white/50 text-sm mt-2 leading-relaxed">{c.body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max px-5 md:px-8">
          <AnimateOnView>
            <div
              className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(13,23,41,0.95) 0%, rgba(7,16,32,0.95) 100%)",
                border: "1px solid rgba(43,106,255,0.15)",
              }}
            >
              {/* Glow blobs */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#22C55E]/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#2b6aff]/10 blur-[80px] pointer-events-none" />

              {/* Rotating ring decoration */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(34,197,94,0.08)",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-5"
                >
                  <Heart size={36} className="text-[#22C55E] mx-auto" />
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Ready to become
                  <br />
                  <span className="gradient-text">part of our story?</span>
                </h2>
                <p className="mt-5 text-white/55 max-w-lg mx-auto text-lg">
                  Book a free counselling call and let&apos;s design the perfect learning path for your goals.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <Link href="/courses" className="btn-primary">
                    Browse Courses
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Book a Free Call
                  </Link>
                </div>

                {/* Social proof micro row */}
                <div className="mt-8 flex items-center justify-center gap-2 text-white/40 text-sm">
                  <div className="flex -space-x-2">
                    {["AK", "VM", "SP", "RJ"].map((init) => (
                      <div
                        key={init}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0d1729] to-[#162d5a] border border-white/10 flex items-center justify-center text-[9px] font-bold text-white/60"
                      >
                        {init}
                      </div>
                    ))}
                  </div>
                  <span>Join 5,000+ learners already on their journey</span>
                  <Star size={12} className="text-[#22C55E]" fill="#22C55E" />
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
