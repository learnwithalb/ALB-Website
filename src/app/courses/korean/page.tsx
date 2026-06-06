"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users, Star } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon, CountryBadge } from "@/lib/icons";

const levels = [
  { code: "Beg.", name: "Beginner", duration: "3 months", desc: "Hangul mastery in 2 weeks. Basic phrases, greetings, numbers, self-introduction. K-drama vocabulary." },
  { code: "T-I", name: "TOPIK I", duration: "4 months", desc: "Levels 1–2. Daily conversations, common situations, simple reading and writing." },
  { code: "T-II", name: "TOPIK II", duration: "6 months", desc: "Levels 3–4. Complex grammar, extended conversation, Korean workplace communication." },
  { code: "Adv.", name: "Advanced", duration: "5 months", desc: "Levels 5–6. Academic Korean, professional settings, Korean company culture and business etiquette." },
];

const kCultureCards = [
  { icon: "music",    title: "K-Pop",          desc: "Learn the language of BTS, BLACKPINK, and TWICE. Decode lyrics, understand fan communities, and connect with Korean music culture." },
  { icon: "tv",       title: "K-Drama",        desc: "Understand Squid Game, Crash Landing on You, and Vincenzo in their original language. Dramatically accelerates vocabulary acquisition." },
  { icon: "movie",    title: "Korean Cinema",  desc: "Bong Joon-ho, Park Chan-wook — Korean cinema has taken over global awards. Original language viewing changes everything." },
  { icon: "computer", title: "Korean Tech",    desc: "Samsung, Hyundai, LG, Kakao — Korean companies are global. Korean proficiency opens doors in these giants." },
];

const whyKorean = [
  { icon: "waves",     title: "Ride the Hallyu Wave",    desc: "Korean culture is experiencing a global moment — K-pop, K-drama, K-food. Language unlocks it all authentically." },
  { icon: "phone",     title: "Samsung & Hyundai",       desc: "Korea's tech and automotive giants actively recruit globally. Korean language is a valuable differentiator." },
  { icon: "trophy",    title: "TOPIK Certification",     desc: "Test of Proficiency in Korean — recognised for university admission, work visas, and scholarships in Korea." },
  { icon: "flight",    title: "Study in Korea",          desc: "Korean universities offer scholarships (GKS) for international students. Korean proficiency greatly improves chances." },
  { icon: "ramen",     title: "Korean Cuisine & Culture", desc: "From bibimbap to Korean skincare — understanding the language gives you authentic access to a rich culture." },
  { icon: "translate", title: "Fastest Script to Learn", desc: "Hangul, the Korean alphabet, is considered the world's most logical writing system. You can read it in a week." },
];

function AnimatedBar({ rate, color = "#e11d48" }: { rate: number; color?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${rate}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

export default function KoreanPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060c1a] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#e11d48]/12 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3b82f6]/8 blur-[80px]" />
        </div>
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView>
              <Link href="/courses" className="inline-flex items-center gap-1.5 text-white/50 text-sm hover:text-white transition-colors mb-5">
                ← All Courses
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  className="inline-block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CountryBadge code="KR" color="#e11d48" size="lg" />
                </motion.span>
                <span className="eyebrow-pill-outline text-sm">Trending Fast</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Korean Language
                <span className="gradient-text"> Programme</span>
              </h1>
              <p className="mt-4 text-xl text-white/60 leading-relaxed">
                Ride the Hallyu wave. From Hangul mastery to TOPIK 2 — authentic Korean for culture, career, and beyond.
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
                  { stat: "77M", label: "Speakers worldwide" },
                  { stat: "#1", label: "Fastest growing interest" },
                  { stat: "1 wk", label: "Hangul mastery time" },
                  { stat: "GKS", label: "Scholarship available" },
                ].map((w, i) => (
                  <motion.div
                    key={w.label}
                    className="card-dark rounded-2xl p-6 text-center"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    <div className="text-3xl font-black text-[#e11d48]">{w.stat}</div>
                    <div className="text-white/50 text-sm mt-1">{w.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section style={{ background: "#e11d48" }}>
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: <Clock size={18} />, label: "Duration", value: "3–18 months" },
              { icon: <Users size={18} />, label: "Batch Size", value: "Max 12" },
              { icon: <Star size={18} />, label: "Rating", value: "4.9 / 5" },
              { icon: <CheckCircle size={18} />, label: "Levels", value: "Beg. to TOPIK 6" },
            ].map((f, i) => (
              <div key={i} className="py-6 px-5 text-center border-r border-white/15 last:border-r-0">
                <div className="flex justify-center text-white mb-1">{f.icon}</div>
                <div className="text-white/50 text-xs font-semibold uppercase tracking-wider">{f.label}</div>
                <div className="text-white font-black text-xl mt-0.5">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* K-Culture cards */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">K-Culture Connection</span>
            <h2 className="text-3xl font-black text-white mt-2">
              Learn Korean through{" "}
              <span className="gradient-text">what you already love.</span>
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.09}>
            {kCultureCards.map((card, i) => (
              <StaggerItem key={card.title}>
                <motion.div
                  className="card-dark rounded-2xl p-6 text-center h-full"
                  whileHover={{ y: -6, borderColor: "rgba(225,29,72,0.3)" }}
                >
                  <motion.div
                    className="mb-4 inline-block"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    <MuiIcon name={card.icon} size={36} style={{ color: "#e11d48" }} />
                  </motion.div>
                  <h3 className="font-bold text-white text-base">{card.title}</h3>
                  <p className="text-sm text-white/40 mt-2 leading-relaxed">{card.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Levels */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Course Levels</span>
            <h2 className="text-3xl font-black text-white mt-2">
              Beginner to TOPIK 6 — <span className="gradient-text">We go the distance.</span>
            </h2>
          </AnimateOnView>
          <div className="space-y-4">
            {levels.map((level, i) => (
              <AnimateOnView key={level.code} delay={i * 0.07}>
                <motion.div className="card-dark rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5" whileHover={{ x: 4 }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl flex flex-col items-center justify-center" style={{ background: "rgba(225,29,72,0.1)", border: "1px solid rgba(225,29,72,0.2)" }}>
                      <span className="font-black text-sm leading-none text-center" style={{ color: "#e11d48" }}>{level.code}</span>
                      <span className="text-white/30 text-xs">{level.name}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 leading-relaxed text-sm">{level.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-white/40 text-xs">{level.duration}</p>
                  </div>
                </motion.div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Korean */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Why Korean?</span>
            <h2 className="text-3xl font-black text-white mt-2">
              More than K-pop.{" "}
              <span className="gradient-text">Real world value.</span>
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {whyKorean.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div className="card-dark rounded-2xl p-6 h-full" whileHover={{ y: -4 }}>
                  <motion.div
                    className="mb-3 inline-block"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <MuiIcon name={item.icon} size={36} style={{ color: "#e11d48" }} />
                  </motion.div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TOPIK pass rates */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max max-w-2xl mx-auto">
          <AnimateOnView className="text-center mb-8">
            <h2 className="text-2xl font-black text-white">Our TOPIK Pass Rate</h2>
          </AnimateOnView>
          <div className="card-dark rounded-3xl p-8">
            {[
              { exam: "TOPIK I (Level 1)", rate: 97 },
              { exam: "TOPIK I (Level 2)", rate: 94 },
              { exam: "TOPIK II (Level 3)", rate: 89 },
              { exam: "TOPIK II (Level 4)", rate: 84 },
            ].map((s) => (
              <div key={s.exam} className="mb-5 last:mb-0">
                <div className="flex justify-between mb-2">
                  <span className="text-white/70 text-sm">{s.exam}</span>
                  <span className="font-bold text-sm" style={{ color: "#e11d48" }}>{s.rate}%</span>
                </div>
                <AnimatedBar rate={s.rate} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#04080f] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full blur-[80px]" style={{ background: "rgba(225,29,72,0.08)" }} />
        </div>
        <div className="container-max text-center relative z-10">
          <AnimateOnView>
            <motion.div className="text-5xl mb-4 inline-block" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🇰🇷</motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              시작해볼까요?{" "}
              <span className="gradient-text">Shall we begin?</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              From Hangul on day one to TOPIK 4 — your Korean journey starts with a free placement call.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                Start Korean Today <ArrowRight size={18} />
              </a>
              <Link href="/courses" className="btn-outline text-lg px-8 py-4">View All Languages</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
