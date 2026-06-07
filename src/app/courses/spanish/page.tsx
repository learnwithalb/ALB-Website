"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users, Star } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon, CountryBadge } from "@/lib/icons";

const levels = [
  { code: "A1", name: "Beginner", duration: "3 months", desc: "Greetings, introductions, numbers, colours. Start speaking from day one." },
  { code: "A2", name: "Elementary", duration: "3 months", desc: "Travel, shopping, daily life. Handle simple conversations with confidence." },
  { code: "B1", name: "Intermediate", duration: "4 months", desc: "Express opinions, tell stories, describe experiences. DELE B1 preparation." },
  { code: "B2", name: "Upper Intermediate", duration: "5 months", desc: "Work and study in Spanish-speaking countries. Advanced grammar and debate." },
];

const whySpanish = [
  { icon: "globe",   title: "500M+ Speakers",    desc: "The world's second most spoken language by native speakers — connecting you to 20+ countries." },
  { icon: "trophy",  title: "Career Advantage",  desc: "Spanish proficiency is among the highest-valued language skills for multinational companies." },
  { icon: "theater", title: "Vibrant Culture",   desc: "Flamenco, telenovelas, Cervantes, García Márquez — the richest Spanish-speaking cultural universe." },
  { icon: "waves",   title: "Travel Everywhere", desc: "Spain, Mexico, Argentina, Colombia, Peru — one language opens an entire continent." },
  { icon: "tv",      title: "Content Paradise",  desc: "Netflix originals, music, cinema — Spanish content is everywhere. Learning feels like entertainment." },
  { icon: "article", title: "DELE Certification", desc: "Instituto Cervantes' official exam — recognised by governments, universities, and employers worldwide." },
];

const regions = [
  { region: "Spain",     flagCode: "ES", cities: "Madrid, Barcelona, Seville", accent: "Castilian" },
  { region: "Mexico",    flagCode: "MX", cities: "Mexico City, Guadalajara",   accent: "Latin American" },
  { region: "Argentina", flagCode: "AR", cities: "Buenos Aires, Córdoba",      accent: "Rioplatense" },
  { region: "Colombia",  flagCode: "CO", cities: "Bogotá, Medellín",           accent: "Neutral accent" },
];

const examInfo = [
  { exam: "DELE A1/A2", use: "Basic recognition, tourism visas" },
  { exam: "DELE B1", use: "Spain student visa, most work scenarios" },
  { exam: "DELE B2", use: "University admission, professional use" },
  { exam: "DELE C1/C2", use: "Academic and professional excellence" },
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

export default function SpanishPage() {
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
                  <CountryBadge code="ES" color="#AA151B" size="lg" />
                </motion.span>
                <span className="eyebrow-pill-outline text-sm">Most Accessible</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-ink leading-tight">
                Spanish Language
                <span className="gradient-text"> Programme</span>
              </h1>
              <p className="mt-4 text-xl text-body leading-relaxed">
                20+ countries. 500M speakers. The world&apos;s most vibrant language — and one of the fastest to learn.
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
                  { stat: "500M+", label: "Native speakers" },
                  { stat: "20+", label: "Countries" },
                  { stat: "#2", label: "Most spoken natively" },
                  { stat: "A2", label: "Fastest path to B1" },
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

      {/* Quick facts bar (royal band) */}
      <section className="sec-dark">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: <Clock size={18} />, label: "Duration", value: "3–14 months" },
              { icon: <Users size={18} />, label: "Batch Size", value: "Max 12" },
              { icon: <Star size={18} />, label: "Rating", value: "4.8 / 5" },
              { icon: <CheckCircle size={18} />, label: "Levels", value: "A1 to B2" },
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

      {/* Why Spanish */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Why Spanish?</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              One language.{" "}
              <span className="gradient-text">Infinite horizons.</span>
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {whySpanish.map((item, i) => (
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

      {/* Levels */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] bottom-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Course Levels</span>
            <h2 className="text-3xl font-black text-ink mt-2">
              A1 to B2 — <span className="gradient-text">DELE-aligned.</span>
            </h2>
          </AnimateOnView>
          <div className="space-y-4">
            {levels.map((level, i) => (
              <AnimateOnView key={level.code} delay={i * 0.07}>
                <motion.div className="card-hover rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5" whileHover={{ x: 4 }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-royal-50 border border-royal-100 flex flex-col items-center justify-center">
                      <span className="text-royal-600 font-black text-lg leading-none">{level.code}</span>
                      <span className="text-muted text-xs">{level.name}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-body leading-relaxed text-sm">{level.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-body text-xs font-semibold">{level.duration}</p>
                  </div>
                </motion.div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Spanish-speaking world */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-10">
            <span className="eyebrow">The Spanish-Speaking World</span>
            <h2 className="text-3xl font-black text-ink mt-2">
              One language.{" "}
              <span className="gradient-text">Many accents. Many worlds.</span>
            </h2>
            <p className="text-body mt-3 max-w-xl mx-auto text-sm">We teach both Castilian Spanish (Spain) and Latin American Spanish, exposing you to the full spectrum of accents and dialects.</p>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
            {regions.map((r) => (
              <StaggerItem key={r.region}>
                <motion.div className="card-hover rounded-2xl p-6 text-center" whileHover={{ y: -4 }}>
                  <div className="flex justify-center mb-3">
                    <CountryBadge code={r.flagCode} color="#3b5bdb" size="lg" />
                  </div>
                  <h3 className="font-bold text-ink">{r.region}</h3>
                  <p className="text-xs text-muted mt-1">{r.cities}</p>
                  <div className="mt-3 text-xs font-semibold text-royal-600">{r.accent}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DELE exam */}
      <section className="section-padding sec-mist">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-outline">Exam Preparation</span>
              <h2 className="text-3xl font-black text-ink mt-4">
                DELE Certification
              </h2>
              <p className="mt-4 text-body leading-relaxed">
                The DELE (Diplomas de Español como Lengua Extranjera) by Instituto Cervantes is the gold standard for Spanish certification — recognised globally.
              </p>
              <div className="mt-6 space-y-3">
                {examInfo.map((d) => (
                  <div key={d.exam} className="card rounded-xl px-4 py-3">
                    <span className="font-bold text-sm text-royal-700">{d.exam}</span>
                    <span className="text-body text-sm ml-2">— {d.use}</span>
                  </div>
                ))}
              </div>
            </AnimateOnView>
            <AnimateOnView direction="left">
              <div className="card rounded-3xl p-8">
                <h3 className="text-ink font-bold text-xl mb-6">Our DELE Pass Rate</h3>
                {[
                  { exam: "DELE A1/A2", rate: 98 },
                  { exam: "DELE B1", rate: 95 },
                  { exam: "DELE B2", rate: 90 },
                ].map((s) => (
                  <div key={s.exam} className="mb-5 last:mb-0">
                    <div className="flex justify-between mb-2">
                      <span className="text-body text-sm">{s.exam}</span>
                      <span className="font-bold text-sm text-royal-600">{s.rate}%</span>
                    </div>
                    <AnimatedBar rate={s.rate} />
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

    </>
  );
}
