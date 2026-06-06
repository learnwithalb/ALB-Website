"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Heart, Target, Eye, Star, Globe } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { stats } from "@/lib/constants";
import { MuiIcon } from "@/lib/icons";
import { CountUp } from "@/components/shared/CountUp";
import { useBooking } from "@/components/shared/BookingContext";

const milestones = [
  { year: "2012", title: "Founded in Mumbai", desc: "Started with 12 students and a dream to bridge the language gap for Indian learners going global." },
  { year: "2015", title: "DELF Examination Centre", desc: "Became an authorised DELF/DALF preparation centre, the first in Western India to achieve this recognition." },
  { year: "2017", title: "+Beyond Wing Launched", desc: "Expanded beyond language into soft skills with our first Public Speaking and Communication cohorts." },
  { year: "2019", title: "500+ Annual Enrolments", desc: "Crossed 500 new students per year, with alumni now spread across 30+ countries." },
  { year: "2021", title: "Full Digital Transition", desc: "Launched our hybrid online-offline model, bringing ALB quality to learners across India." },
  { year: "2024", title: "5000+ Learners Transformed", desc: "Our community now spans 5,000+ learners with a 95% goal-achievement rate." },
];

const values = [
  { icon: "target",   title: "Goal-First Always", desc: "Every decision we make — curriculum, faculty, scheduling — is reverse-engineered from your specific goal." },
  { icon: "handshake", title: "Student-Centred Care", desc: "We remember your name, your goal, and your story. ALB is a community, not a factory." },
  { icon: "science",  title: "Academic Rigour", desc: "CEFR-aligned curriculum, expert faculty, and structured assessments — zero compromise on quality." },
  { icon: "globe",    title: "Cultural Immersion", desc: "Language is a window into culture. We teach both — with genuine passion and lived experience." },
  { icon: "trending", title: "Transparent Progress", desc: "Monthly reports, speaking simulations, and honest assessments. You always know exactly where you stand." },
  { icon: "infinite", title: "Lifetime Partnership", desc: "Your ALB relationship doesn't end when the course does. Alumni get perpetual access, community, and support." },
];

const team = [
  { name: "Ananya Krishnan", role: "Founder & Lead French Faculty", initials: "AK", bio: "Master's in French Literature from Alliance Française. 14 years of teaching experience across Mumbai and Paris.", colorFrom: "#3b5bdb", colorTo: "#2f49c0", accent: "#3b5bdb" },
  { name: "Vikram Desai", role: "Head of +Beyond Programmes", initials: "VD", bio: "Former McKinsey consultant and TEDx speaker. Certified executive coach with 10+ years in corporate training.", colorFrom: "#0ea5e9", colorTo: "#0284c7", accent: "#0ea5e9" },
  { name: "Priya Narayanan", role: "German Language Expert", initials: "PN", bio: "Goethe-Institut certified. Lived in Berlin for 6 years. Specialises in DAAD scholarship preparation.", colorFrom: "#6d8bff", colorTo: "#3b5bdb", accent: "#6d8bff" },
  { name: "Carlos Mendes", role: "Spanish & Latin American Culture", initials: "CM", bio: "Native speaker from São Paulo. MA in Hispanic Studies. Teaches with infectious enthusiasm and cultural depth.", colorFrom: "#2f49c0", colorTo: "#1b2a63", accent: "#2f49c0" },
  { name: "Yuki Tanaka", role: "Japanese Language Faculty", initials: "YT", bio: "Native Japanese speaker. Certified JLPT examiner. 8 years teaching Japanese to Indian learners.", colorFrom: "#0ea5e9", colorTo: "#2f49c0", accent: "#0284c7" },
  { name: "Rohan Pillai", role: "IELTS & Academic English", initials: "RP", bio: "British Council certified IELTS trainer. 95% of his students score 7.0+ in their first attempt.", colorFrom: "#3b5bdb", colorTo: "#6d8bff", accent: "#3b5bdb" },
];

const credentials = [
  { icon: "institution", title: "DELF/DALF Prep Centre", body: "Official preparation partner for French government certification exams." },
  { icon: "school",      title: "Goethe-Institut Aligned", body: "German curriculum aligned with Goethe-Institut standards and examination." },
  { icon: "language",    title: "CEFR Framework", body: "All language programmes follow the Common European Framework of Reference." },
  { icon: "star",        title: "4.9/5 Learner Rating", body: "Verified ratings from 5,000+ alumni across Google, Facebook and direct surveys." },
];

const heroCards = [
  { label: "5000+", sublabel: "Learners",     icon: "school", delay: 0,   duration: 3.2, yRange: [0, -18, 0] },
  { label: "95%",   sublabel: "Success Rate", icon: "trophy", delay: 0.6, duration: 3.8, yRange: [0, -14, 0] },
  { label: "12+",   sublabel: "Years",        icon: "star",   delay: 1.1, duration: 4.2, yRange: [0, -20, 0] },
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
      className="card relative flex flex-col items-center text-center p-8 rounded-2xl overflow-hidden"
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ width: "100%", transformOrigin: "left center", background: "linear-gradient(90deg, transparent, #3b5bdb, transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: [0, 1, 0], opacity: [0, 1, 0] } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: index * 0.15 + 0.3, repeat: Infinity, repeatDelay: 3 }}
      />
      <div className="text-4xl font-black gradient-text mb-1">
        <CountUp value={stat.value} duration={2000} />
      </div>
      <div className="text-sm text-muted font-semibold">{stat.label}</div>
      <motion.div
        className="absolute top-3 right-3 w-2 h-2 rounded-full bg-royal-500"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
      />
    </motion.div>
  );
}

export default function AboutPage() {
  const { openModal } = useBooking();
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center hero-light overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[560px] h-[560px] top-0 left-1/4 pointer-events-none" />
        <div className="blob blob-sky w-[400px] h-[400px] bottom-0 right-0 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <AnimateOnView>
                <span className="eyebrow-pill-outline">Our Story</span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-ink mt-4 leading-[1.0] tracking-tight">
                  We exist to turn{" "}
                  <span className="gradient-text">ambition</span>
                  <br />
                  into opportunity.
                </h1>
                <p className="mt-6 text-xl text-body max-w-xl leading-relaxed">
                  Academy of Languages &amp; Beyond was born from a simple belief: every
                  Indian learner who dares to go global deserves world-class preparation
                  — in language, confidence, presence, and communication.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/courses" className="btn-primary">
                    Explore Courses
                    <ArrowRight size={16} />
                  </Link>
                  <button onClick={() => openModal()} className="btn-outline">
                    Book a Call
                  </button>
                </div>
              </AnimateOnView>
            </div>

            {/* Right: floating cards */}
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
                  className="card rounded-2xl px-7 py-5 flex items-center gap-5"
                  style={{ minWidth: 200 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-royal-50">
                    <MuiIcon name={card.icon} size={22} style={{ color: "#3b5bdb" }} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-ink leading-none">
                      <CountUp value={card.label} duration={1800} />
                    </div>
                    <div className="text-sm text-muted mt-0.5 font-medium">{card.sublabel}</div>
                  </div>
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-sky-500 ml-auto"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                </motion.div>
              ))}

              {/* Decorative orbit ring */}
              <motion.div
                className="absolute right-8 top-1/2 w-72 h-72 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(59,91,219,0.18)", translateY: "-50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="w-3 h-3 rounded-full bg-royal-500 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ boxShadow: "0 0 12px #3b5bdb" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="py-16 sec-mist">
        <div className="container-max px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView className="text-center mb-14">
            <span className="eyebrow">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              Purpose-built for{" "}
              <span className="gradient-text-blue">global ambition</span>
            </h2>
          </AnimateOnView>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission — animated gradient border */}
            <AnimateOnView direction="right">
              <div className="relative rounded-3xl p-px overflow-hidden h-full shadow-[0_8px_30px_rgba(16,23,51,0.08)]">
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "conic-gradient(from 0deg, #3b5bdb, #38bdf8, #3b5bdb)",
                    opacity: 0.85,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative rounded-3xl p-8 h-full bg-white">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-royal-50 border border-royal-100">
                    <Target size={22} className="text-royal-500" />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-2xl font-black text-ink">Our Mission</h2>
                    <motion.div
                      className="w-2.5 h-2.5 rounded-full bg-royal-500"
                      animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <p className="text-body leading-relaxed text-lg">
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
              <div className="card rounded-3xl p-8 h-full">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-sky-500/10 border border-sky-500/20">
                  <Eye size={22} className="text-sky-500" />
                </div>
                <h2 className="text-2xl font-black text-ink mb-4">Our Vision</h2>
                <p className="text-body leading-relaxed text-lg">
                  A world where every Indian professional, student, and dreamer walks
                  into any global room — boardroom, campus, embassy, or street — with
                  the language and confidence to belong, connect, and lead.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-sky-600 font-semibold">
                  <Globe size={16} />
                  <span>30+ countries, one community</span>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView className="text-center mb-14">
            <span className="eyebrow">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              12 years of{" "}
              <span className="gradient-text">transformation</span>
            </h2>
          </AnimateOnView>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #3b5bdb 0%, rgba(59,91,219,0.3) 60%, transparent 100%)" }}
            />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimateOnView key={i} delay={i * 0.08} direction="left">
                  <div className="pl-14 relative">
                    <div className="absolute left-4 top-2 -translate-x-1/2">
                      <motion.div
                        className="w-4 h-4 rounded-full bg-royal-500"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-royal-500"
                        animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    </div>

                    <div className="card rounded-2xl p-5">
                      <span className="text-xs font-black tracking-widest uppercase text-royal-600">
                        {m.year}
                      </span>
                      <h3 className="text-lg font-bold text-ink mt-1">{m.title}</h3>
                      <p className="text-sm text-muted mt-2 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES GRID ─── */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              Our values shape every class,
              <br />
              <span className="gradient-text">every conversation.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-feature rounded-2xl p-6 h-full cursor-default">
                  <motion.div
                    className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-royal-50"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MuiIcon name={v.icon} size={22} style={{ color: "#3b5bdb" }} />
                  </motion.div>
                  <h3 className="font-bold text-ink text-lg">{v.title}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── TEAM GRID ─── */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 right-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Our Faculty</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              Meet the experts behind
              <span className="gradient-text"> your transformation.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  className="card rounded-2xl p-6 group cursor-default"
                  whileHover={{
                    y: -4,
                    boxShadow: `0 24px 60px ${member.accent}22`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${member.colorFrom} 0%, ${member.colorTo} 100%)`,
                      boxShadow: `0 8px 20px ${member.accent}30`,
                    }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-ink text-lg leading-tight">{member.name}</h3>
                  <p className="text-sm font-semibold mt-1" style={{ color: member.accent }}>{member.role}</p>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{member.bio}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CREDENTIALS ─── */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-6%] opacity-50 pointer-events-none" />
        <div className="container-max px-5 md:px-8 text-center relative z-10">
          <AnimateOnView>
            <span className="eyebrow-pill-outline">Recognition</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-4">
              Trusted. Accredited. Proven.
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10" staggerDelay={0.08}>
            {credentials.map((c, i) => (
              <StaggerItem key={c.title}>
                <div className="card-feature rounded-2xl p-6 text-left h-full">
                  <motion.div
                    className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-royal-50"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    <MuiIcon name={c.icon} size={22} style={{ color: "#3b5bdb" }} />
                  </motion.div>
                  <h3 className="text-ink font-bold text-base">{c.title}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA (dark anchor) ─── */}
      <section className="section-padding sec-light">
        <div className="container-max px-5 md:px-8">
          <AnimateOnView>
            <div className="sec-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
              <div className="blob blob-sky w-80 h-80 top-0 right-0 pointer-events-none" />
              <div className="blob blob-royal w-60 h-60 bottom-0 left-0 pointer-events-none" />

              <motion.div
                className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.10)", translateX: "-50%", translateY: "-50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-5"
                >
                  <Heart size={36} className="text-sky-300 mx-auto" />
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Ready to become
                  <br />
                  <span className="gradient-text-light">part of our story?</span>
                </h2>
                <p className="mt-5 text-white/55 max-w-lg mx-auto text-lg">
                  Book a free counselling call and let&apos;s design the perfect learning path for your goals.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <Link href="/courses" className="btn-white">
                    Browse Courses
                    <ArrowRight size={16} />
                  </Link>
                  <button onClick={() => openModal()} className="btn-outline-light">
                    Book a Free Call
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-white/55 text-sm">
                  <div className="flex -space-x-2">
                    {["AK", "VM", "SP", "RJ"].map((init) => (
                      <div
                        key={init}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3b5bdb] to-[#2f49c0] border border-white/20 flex items-center justify-center text-[9px] font-bold text-white"
                      >
                        {init}
                      </div>
                    ))}
                  </div>
                  <span>Join 5,000+ learners already on their journey</span>
                  <Star size={12} className="text-amber-400" fill="#fbbf24" />
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
