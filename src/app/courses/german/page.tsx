"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users, Star } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon, CountryBadge } from "@/lib/icons";

const levels = [
  { code: "A1", name: "Beginner", duration: "3 months", desc: "Alphabet, basic greetings, numbers, simple sentences. Start surviving daily situations in German." },
  { code: "A2", name: "Elementary", duration: "3 months", desc: "Shopping, directions, work basics. Communicate in familiar, everyday contexts." },
  { code: "B1", name: "Intermediate", duration: "4 months", desc: "Handle most travel situations. Describe experiences, give reasons, express opinions." },
  { code: "B2", name: "Upper Intermediate", duration: "5 months", desc: "Work or study in Germany. Goethe B2 certification + DAAD eligibility." },
  { code: "C1", name: "Advanced", duration: "6 months", desc: "Near-native professional German. Academic writing, complex debates, TestDaF preparation." },
];

const whyGerman = [
  { icon: "factory",     title: "No. 1 EU Economy",    desc: "Germany is Europe's largest economy — proficiency unlocks careers at BMW, Siemens, Bosch and thousands of Mittelstand companies." },
  { icon: "school",      title: "DAAD Scholarships",   desc: "German government offers fully-funded scholarships for Indian students. B1 German is the minimum requirement for most programmes." },
  { icon: "hospital",    title: "Healthcare Visas",    desc: "Germany is actively recruiting nurses, doctors, and pharmacists from India. B2 German is mandatory — we help you get there." },
  { icon: "science",     title: "Research Excellence", desc: "German universities rank among the world's best — and most charge zero tuition fees for international students." },
  { icon: "globe",       title: "84M+ Speakers",       desc: "The most spoken native language in the EU, with presence in Austria, Switzerland, Luxembourg, and beyond." },
  { icon: "article",     title: "Goethe Certificate",  desc: "Internationally recognised certifications accepted by German consulates, universities, and employers worldwide." },
];

const examInfo = [
  { exam: "Goethe-Zertifikat A1", use: "Family reunion visa, basic recognition" },
  { exam: "Goethe-Zertifikat B1", use: "Work visa, citizenship requirement" },
  { exam: "Goethe-Zertifikat B2", use: "University admission, work in Germany" },
  { exam: "TestDaF / DSH", use: "University entry — C1 equivalent" },
];

const successRates = [
  { exam: "Goethe A1/A2", rate: 97 },
  { exam: "Goethe B1", rate: 93 },
  { exam: "Goethe B2", rate: 88 },
  { exam: "TestDaF", rate: 84 },
];

function AnimatedBar({ rate }: { rate: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-[#2b6aff] to-[#7aaaff] rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${rate}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

export default function GermanPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060c1a] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#DD0000]/12 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#2b6aff]/8 blur-[80px]" />
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
                  <CountryBadge code="DE" color="#2b6aff" size="lg" />
                </motion.span>
                <span className="eyebrow-pill-outline text-sm">High Demand</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                German Language
                <span className="gradient-text-blue"> Programme</span>
              </h1>
              <p className="mt-4 text-xl text-white/60 leading-relaxed">
                The language of precision, opportunity, and Europe&apos;s largest economy. From A1 to C1, Goethe-aligned.
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
                  { stat: "84M+", label: "Native speakers" },
                  { stat: "#1", label: "EU economy" },
                  { stat: "3rd", label: "Most studied globally" },
                  { stat: "€0", label: "Tuition at top unis" },
                ].map((w, i) => (
                  <motion.div
                    key={w.label}
                    className="card-dark rounded-2xl p-6 text-center"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    <div className="text-3xl font-black text-[#4c8aff]">{w.stat}</div>
                    <div className="text-white/50 text-sm mt-1">{w.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[#2b6aff]">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: <Clock size={18} />, label: "Duration", value: "3–18 months" },
              { icon: <Users size={18} />, label: "Batch Size", value: "Max 10" },
              { icon: <Star size={18} />, label: "Rating", value: "4.9 / 5" },
              { icon: <CheckCircle size={18} />, label: "Levels", value: "A1 to C1" },
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

      {/* Why German */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Why German?</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Guten Tag to{" "}
              <span className="gradient-text">global opportunities.</span>
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {whyGerman.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div className="card-dark rounded-2xl p-6 h-full" whileHover={{ y: -4 }}>
                  <motion.div
                    className="mb-3 inline-block"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <MuiIcon name={item.icon} size={36} style={{ color: "#2b6aff" }} />
                  </motion.div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/40 mt-2 leading-relaxed">{item.desc}</p>
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
              A1 to C1 — <span className="gradient-text-blue">Goethe-aligned.</span>
            </h2>
          </AnimateOnView>
          <div className="space-y-4">
            {levels.map((level, i) => (
              <AnimateOnView key={level.code} delay={i * 0.07}>
                <motion.div className="card-dark rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5" whileHover={{ x: 4 }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-[#2b6aff]/10 border border-[#2b6aff]/20 flex flex-col items-center justify-center">
                      <span className="text-[#4c8aff] font-black text-lg leading-none">{level.code}</span>
                      <span className="text-white/30 text-xs">{level.name}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 leading-relaxed text-sm">{level.desc}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-white/40 text-xs">{level.duration}</p>
                  </div>
                </motion.div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Exam prep + rates */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-blue">Exam Preparation</span>
              <h2 className="text-3xl font-black text-white mt-4">
                Goethe & TestDaF <span className="gradient-text-blue">Certification</span>
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Goethe-Institut certifications are accepted by German consulates, universities, and employers worldwide. Every ALB German batch includes mock exams and exam coaching.
              </p>
              <div className="mt-6 space-y-3">
                {examInfo.map((d) => (
                  <div key={d.exam} className="glass-blue rounded-xl px-4 py-3">
                    <span className="text-[#4c8aff] font-bold text-sm">{d.exam}</span>
                    <span className="text-white/50 text-sm ml-2">— {d.use}</span>
                  </div>
                ))}
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left">
              <div className="card-dark rounded-3xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">Our Goethe Pass Rate</h3>
                {successRates.map((s) => (
                  <div key={s.exam} className="mb-5 last:mb-0">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/70 text-sm">{s.exam}</span>
                      <span className="text-[#4c8aff] font-bold text-sm">{s.rate}%</span>
                    </div>
                    <AnimatedBar rate={s.rate} />
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Study in Germany */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-10">
            <span className="eyebrow">Your Path to Germany</span>
            <h2 className="text-3xl font-black text-white mt-2">
              Study, Work &{" "}
              <span className="gradient-text-blue">Live in Germany</span>
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-3 gap-5" staggerDelay={0.1}>
            {[
              { icon: "school",   title: "Student Visa",    level: "A2–B1 required", desc: "Enrol in German universities, most with €0 tuition. Goethe B1 is the minimum." },
              { icon: "work",     title: "Job Seeker Visa", level: "B1–B2 required", desc: "6 months to find employment in Germany. B2 proficiency greatly improves chances." },
              { icon: "hospital", title: "Healthcare Visa", level: "B2–C1 required", desc: "Germany is actively recruiting nurses, doctors, and paramedics from India. B2 is mandatory." },
            ].map((card, i) => (
              <StaggerItem key={card.title}>
                <motion.div
                  className="glass rounded-2xl p-7 text-center h-full"
                  whileHover={{ y: -4, borderColor: "rgba(76,138,255,0.4)" }}
                >
                  <div className="mb-4 flex justify-center">
                    <MuiIcon name={card.icon} size={36} style={{ color: "#4c8aff" }} />
                  </div>
                  <h3 className="font-bold text-white text-lg">{card.title}</h3>
                  <div className="inline-block text-xs font-bold text-[#4c8aff] bg-[#2b6aff]/10 px-3 py-1 rounded-full mt-2 mb-3">{card.level}</div>
                  <p className="text-sm text-white/40 leading-relaxed">{card.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#04080f] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-[#2b6aff]/8 blur-[80px]" />
        </div>
        <div className="container-max text-center relative z-10">
          <AnimateOnView>
            <motion.div className="text-5xl mb-4 inline-block" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🇩🇪</motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Bereit anzufangen?{" "}
              <span className="gradient-text-blue">Ready to begin?</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              Book a free German placement call and we&apos;ll design the right path to your Germany goal.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                Start German Today <ArrowRight size={18} />
              </a>
              <Link href="/courses" className="btn-outline text-lg px-8 py-4">View All Languages</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
