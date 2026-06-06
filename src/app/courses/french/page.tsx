"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users, Star } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon, CountryBadge } from "@/lib/icons";

const levels = [
  { code: "A1", name: "Beginner", duration: "3 months", sessions: "24 sessions", desc: "Greetings, numbers, daily routines, family, food. Start holding basic conversations." },
  { code: "A2", name: "Elementary", duration: "3 months", sessions: "24 sessions", desc: "Travel, shopping, work, hobbies. Describe your world in French with growing confidence." },
  { code: "B1", name: "Intermediate", duration: "4 months", sessions: "32 sessions", desc: "Handle most real-life situations. Discuss news, express opinions, write simple essays." },
  { code: "B2", name: "Upper Intermediate", duration: "5 months", sessions: "40 sessions", desc: "Work or study in a French-speaking environment. DELF B2 certification achievable." },
  { code: "C1", name: "Advanced", duration: "6 months", sessions: "48 sessions", desc: "Near-native fluency. Academic French, sophisticated debate, literary analysis." },
];

const curriculum = [
  { module: "Phonetics & Pronunciation", weeks: "Weeks 1–2",   icon: "mic",      topics: ["French sounds & alphabet", "Liaison and elision", "Accent patterns", "Tongue placement"] },
  { module: "Core Grammar",              weeks: "Weeks 3–8",   icon: "book",     topics: ["Verb conjugations", "Noun genders & articles", "Adjective agreement", "Tense system"] },
  { module: "Vocabulary Building",       weeks: "Ongoing",     icon: "brain",    topics: ["Thematic vocabulary sets", "Idiomatic expressions", "False friends", "Register (formal/informal)"] },
  { module: "Speaking & Listening",      weeks: "Every class", icon: "chat",     topics: ["Conversation circles", "Authentic French media", "Roleplay scenarios", "DELF oral simulation"] },
  { module: "Reading & Writing",         weeks: "Weeks 6+",    icon: "article",  topics: ["Text comprehension", "Essay and letter writing", "Newspaper articles", "Email composition"] },
  { module: "Cultural Immersion",        weeks: "Weekly",      icon: "theater",  topics: ["French cinema & music", "Cuisine and traditions", "Regional dialects", "Contemporary France"] },
];

const delfRates = [
  { level: "DELF A1/A2", rate: 98, use: "School applications, visa documentation" },
  { level: "DELF B1", rate: 94, use: "French citizenship, some university applications" },
  { level: "DELF B2", rate: 91, use: "Study in France, work visa, university admission" },
  { level: "DALF C1", rate: 87, use: "Professional and academic French" },
];

const testimonials = [
  { quote: "Within 10 months I cleared DELF B2 and got my French work visa. The teachers make grammar feel intuitive, not intimidating.", name: "Priya Sharma", role: "Software Engineer, Paris", avatar: "PS" },
  { quote: "Got the DAAD scholarship and French was a strong differentiator. ALB's structured curriculum and mock interviews made all the difference.", name: "Rahul Joshi", role: "IIT Graduate, DAAD Scholar", avatar: "RJ" },
];

function AnimatedBar({ rate }: { rate: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 bg-royal-100 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-[#3b5bdb] to-[#6d8bff] rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${rate}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

export default function FrenchPage() {
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
                  <CountryBadge code="FR" color="#3b5bdb" size="lg" />
                </motion.span>
                <span className="eyebrow-pill-outline text-sm">Most Popular</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-ink leading-tight">
                French Language
                <span className="gradient-text"> Programme</span>
              </h1>
              <p className="mt-4 text-xl text-body leading-relaxed">
                From bonjour to C1 fluency — CEFR-aligned, immersive, expert-led French instruction.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Enroll Now <ArrowRight size={16} />
                </a>
                <Link href="#curriculum" className="btn-outline">View Curriculum</Link>
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left" className="hidden lg:block">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: "300M+", label: "Speakers worldwide" },
                  { stat: "29", label: "Official-language countries" },
                  { stat: "#2", label: "Most studied language" },
                  { stat: "Top 5", label: "Business language in EU" },
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

      {/* Quick Facts (royal band) */}
      <section className="sec-dark">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: <Clock size={18} />, label: "Duration", value: "3–18 months" },
              { icon: <Users size={18} />, label: "Batch Size", value: "Max 12" },
              { icon: <Star size={18} />, label: "Rating", value: "4.9 / 5" },
              { icon: <CheckCircle size={18} />, label: "Levels", value: "A1 to C1" },
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

      {/* Levels */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] top-10 right-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Programme Structure</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              One level at a time.{" "}
              <span className="gradient-text">Every step counts.</span>
            </h2>
          </AnimateOnView>

          <div className="space-y-4">
            {levels.map((level, i) => (
              <AnimateOnView key={level.code} delay={i * 0.07}>
                <motion.div
                  className="card-hover rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-royal-50 border border-royal-100 flex flex-col items-center justify-center">
                      <span className="text-royal-600 font-black text-lg leading-none">{level.code}</span>
                      <span className="text-muted text-xs">{level.name}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-body leading-relaxed text-sm">{level.desc}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-body text-xs font-semibold">{level.duration}</p>
                    <p className="text-muted text-xs">{level.sessions}</p>
                  </div>
                </motion.div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding sec-mist relative overflow-hidden" id="curriculum">
        <div className="blob blob-sky w-[420px] h-[420px] bottom-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">What You&apos;ll Learn</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              A complete curriculum.{" "}
              <span className="gradient-text">Zero gaps.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {curriculum.map((c) => (
              <StaggerItem key={c.module}>
                <div className="card-feature rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                    <MuiIcon name={c.icon} size={24} style={{ color: "#3b5bdb" }} />
                  </div>
                  <h3 className="font-bold text-ink text-base">{c.module}</h3>
                  <p className="text-xs text-royal-600 font-semibold uppercase tracking-wider mt-1">{c.weeks}</p>
                  <ul className="mt-4 space-y-1.5">
                    {c.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-xs text-body">
                        <div className="w-1 h-1 rounded-full bg-royal-500 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DELF Section */}
      <section className="section-padding sec-light">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-outline">Exam Preparation</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-4">
                DELF & DALF{" "}
                <span className="gradient-text">Certification</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed">
                The DELF is the official French government certification — recognised by universities, embassies, and employers worldwide. Every ALB French batch includes DELF preparation.
              </p>
              <div className="mt-6 space-y-3">
                {delfRates.map((d) => (
                  <div key={d.level} className="bg-royal-50 border border-royal-100 rounded-xl px-4 py-3">
                    <span className="text-royal-700 font-bold text-sm">{d.level}</span>
                    <span className="text-body text-sm ml-2">— {d.use}</span>
                  </div>
                ))}
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left">
              <div className="card rounded-3xl p-8">
                <h3 className="text-ink font-bold text-xl mb-6">Our DELF Success Rate</h3>
                {delfRates.map((s) => (
                  <div key={s.level} className="mb-5 last:mb-0">
                    <div className="flex justify-between mb-2">
                      <span className="text-body text-sm">{s.level}</span>
                      <span className="text-royal-600 font-bold text-sm">{s.rate}%</span>
                    </div>
                    <AnimatedBar rate={s.rate} />
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] top-0 right-[-6%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-10">
            <span className="eyebrow">Learner Stories</span>
            <h2 className="text-3xl font-black text-ink mt-2">
              They did it.{" "}
              <span className="gradient-text">So can you.</span>
            </h2>
          </AnimateOnView>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnView key={i} delay={i * 0.15}>
                <motion.div className="card rounded-2xl p-8" whileHover={{ y: -4 }}>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-body leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center text-white font-black text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-ink text-sm">{t.name}</p>
                      <p className="text-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (dark anchor) */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-royal w-[500px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-max text-center relative z-10">
          <AnimateOnView>
            <motion.div className="text-5xl mb-4 inline-block" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🇫🇷</motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Prêt à commencer?{" "}
              <span className="gradient-text-light">Ready to begin?</span>
            </h2>
            <p className="mt-4 text-white/55 max-w-lg mx-auto">
              Book a free French placement and counselling call — 30 minutes, no commitment, expert advice.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-white text-lg px-8 py-4">
                Start French Today <ArrowRight size={18} />
              </a>
              <Link href="/courses" className="btn-outline-light text-lg px-8 py-4">View All Languages</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
