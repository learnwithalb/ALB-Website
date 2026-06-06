"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";

const FLOATING_ICONS = [
  { icon: "globe",  top: "12%", left: "8%",   size: 40, dur: 3.2, color: "#4c8aff" },
  { icon: "rocket", top: "20%", right: "10%", size: 32, dur: 4.0, color: "#22C55E" },
  { icon: "target", bottom: "30%", left: "5%", size: 28, dur: 3.6, color: "#7aaaff" },
  { icon: "baby",   top: "55%", right: "6%",  size: 40, dur: 2.8, color: "#4ade80" },
  { icon: "star",   bottom: "15%", right: "15%", size: 28, dur: 4.4, color: "#22C55E" },
  { icon: "school", top: "40%", left: "12%",  size: 32, dur: 3.0, color: "#4c8aff" },
];

const ageGroups = [
  {
    label: "Little Explorers",
    ages: "Ages 6–9",
    icon: "baby",
    color: "#2b6aff",
    gradient: "from-[#2b6aff] to-[#4c8aff]",
    desc: "Playful introduction through songs, stories, and games. No pressure — only fun.",
    highlights: ["30-min sessions", "Visual & story-based", "Parent updates weekly", "2 languages"],
  },
  {
    label: "Junior Speakers",
    ages: "Ages 10–13",
    icon: "rocket",
    color: "#7c3aed",
    gradient: "from-[#7c3aed] to-[#a855f7]",
    desc: "Real foundation with vocabulary, grammar, and confidence-building conversation.",
    highlights: ["45-min sessions", "Digital flashcards & quizzes", "Monthly report", "All 6 languages"],
  },
  {
    label: "Teen Achievers",
    ages: "Ages 14–16",
    icon: "target",
    color: "#22C55E",
    gradient: "from-[#22C55E] to-[#4ade80]",
    desc: "Serious prep for DELF Junior, exams, and global readiness.",
    highlights: ["60-min sessions", "Exam-aligned curriculum", "Live debates", "Certificate on completion"],
  },
];

const whyJunior = [
  { icon: "brain",     title: "Science-backed methods", desc: "Children's brains acquire language exponentially faster. We leverage that window." },
  { icon: "gaming",    title: "Gamified learning",      desc: "Points, badges, leaderboards keep kids excited every week." },
  { icon: "globe",     title: "Cultural storytelling",  desc: "Each lesson includes a story from the target culture." },
  { icon: "family",    title: "Parent transparency",    desc: "Monthly reports, termly showcases, and parent WhatsApp group." },
  { icon: "teacher",   title: "Child-specialist faculty", desc: "Trained in child psychology AND language pedagogy." },
  { icon: "article",   title: "Recognised certification", desc: "DELF Junior and Goethe Kids certificates." },
];

const faqs = [
  { q: "My child has zero exposure — can they still join?", a: "Absolutely. Our Little Explorers starts from zero with a pressure-free, play-based approach." },
  { q: "How many children per batch?", a: "Max 8 for Little Explorers, 10 for older groups — every child gets individual attention." },
  { q: "Is there homework?", a: "Minimal and fun — a 5-min worksheet or a short game. Never a burden." },
  { q: "Can my teenager join adult batches?", a: "For learners 16+ at B1+, we assess case-by-case with parent consent." },
];

export default function JuniorPage() {
  const { openModal } = useBooking();
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20 bg-[#060c1a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#2b6aff]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#22C55E]/8 blur-[100px]" />
        </div>

        {/* Floating background icons */}
        {FLOATING_ICONS.map((item, i) => (
          <motion.div
            key={i}
            className="absolute select-none pointer-events-none opacity-10"
            style={{ top: item.top, left: (item as any).left, right: (item as any).right, bottom: (item as any).bottom }}
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: item.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            <MuiIcon name={item.icon} size={item.size} style={{ color: item.color }} />
          </motion.div>
        ))}

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <AnimateOnView>
              <span className="eyebrow-pill mb-4">ALB Junior</span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Give your child the gift of{" "}
                <span className="gradient-text">a global voice.</span>
              </h1>
              <p className="mt-5 text-xl text-white/60 max-w-xl leading-relaxed">
                Fun, structured language learning for ages 6–16. French, German, Spanish, Japanese — taught the way kids actually learn: through stories, games, and joy.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/courses" className="btn-primary">
                  Enroll Your Child <ArrowRight size={16} />
                </Link>
                <button onClick={() => openModal("ALB Junior (Ages 6–16)")} className="btn-outline">
                  Book Free Trial
                </button>
              </div>
            </AnimateOnView>

            {/* Right — stacked age group preview cards */}
            <div className="hidden lg:flex flex-col gap-4">
              {ageGroups.map((g, i) => (
                <motion.div
                  key={g.label}
                  className="glass rounded-2xl p-5 flex items-center gap-5"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${g.color}22, ${g.color}44)`, border: `1px solid ${g.color}44` }}
                  >
                    <MuiIcon name={g.icon} size={28} style={{ color: g.color }} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{g.label}</p>
                    <p className="text-white/45 text-xs mt-0.5">{g.ages} · {g.highlights[0]}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: g.color }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-[#04080f] py-10">
        <div className="container-max px-5 md:px-8">
          <div className="card-dark rounded-2xl p-8 border-l-4 border-[#22C55E] flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-3 h-3 rounded-full bg-[#22C55E]"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-[#22C55E]/30"
                animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <p className="text-white font-black text-xl md:text-2xl">
                3× faster language acquisition before age 10.
              </p>
              <p className="text-white/45 text-sm mt-1">
                Every year of delay is a year of exponential advantage lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Age group cards */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Learning Tracks by Age</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              The right programme for{" "}
              <span className="gradient-text">every stage.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {ageGroups.map((group, i) => (
              <StaggerItem key={group.label}>
                <motion.div
                  className="rounded-2xl overflow-hidden bg-[#04080f] border border-white/6"
                  whileHover={{ y: -6, boxShadow: `0 20px 60px ${group.color}33` }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  {/* Colored top bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${group.gradient}`} />
                  <div className="p-7">
                    <motion.div
                      className="mb-4 inline-block"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <MuiIcon name={group.icon} size={48} style={{ color: group.color }} />
                    </motion.div>
                    <div
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ml-2"
                      style={{ background: `${group.color}1a`, color: group.color }}
                    >
                      {group.ages}
                    </div>
                    <h3 className="text-xl font-black text-white">{group.label}</h3>
                    <p className="text-sm text-white/40 mt-2 leading-relaxed">{group.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {group.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-white/55">
                          <CheckCircle size={13} className="flex-shrink-0" style={{ color: group.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link href="/courses" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: group.color }}>
                      View details <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why ALB Junior */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Why ALB Junior Works</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Designed for how kids{" "}
              <span className="gradient-text">actually learn.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {whyJunior.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="card-dark card-dark-hover rounded-2xl p-6"
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    className="mb-3 inline-block"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.8 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
                  >
                    <MuiIcon name={item.icon} size={36} style={{ color: "#4c8aff" }} />
                  </motion.div>
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <p className="text-sm text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <AnimateOnView>
              <div className="card-dark rounded-3xl p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22C55E] to-[#4ade80]" />
                <div className="flex justify-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div key={i} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}>
                      <Star size={20} className="text-[#22C55E] fill-[#22C55E]" />
                    </motion.div>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                  &ldquo;My 8-year-old daughter started French with ALB Junior 6 months ago. She now sings French songs at dinner and corrects my pronunciation. The teachers make it feel like playtime, not study time.&rdquo;
                </blockquote>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#22C55E] to-[#4ade80] flex items-center justify-center text-[#060c1a] font-black text-sm">
                    SM
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">Sunita Mehta</p>
                    <p className="text-white/45 text-xs">Parent of Riya (Age 8) · French Little Explorer</p>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max max-w-3xl mx-auto">
          <AnimateOnView className="text-center mb-10">
            <span className="eyebrow">Parent FAQs</span>
            <h2 className="text-3xl font-black text-white mt-2">Your questions, answered.</h2>
          </AnimateOnView>
          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="card-dark rounded-2xl p-6 border-l-2 border-[#22C55E]/30">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-black text-[#22C55E] bg-[#22C55E]/10 px-2 py-1 rounded-lg mt-0.5 flex-shrink-0">Q</span>
                    <div>
                      <h3 className="font-bold text-white">{faq.q}</h3>
                      <p className="text-sm text-white/45 mt-2 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#04080f] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#22C55E]/8 blur-[80px]" />
        </div>
        <div className="container-max text-center relative z-10">
          <AnimateOnView>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Give your child a head start that{" "}
              <span className="gradient-text">lasts a lifetime.</span>
            </h2>
            <p className="mt-4 text-white/50 text-lg">
              First trial class is completely free — no commitment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => openModal("ALB Junior (Ages 6–16)")} className="btn-primary">
                Book Free Trial Class <ArrowRight size={16} />
              </button>
              <Link href="/courses" className="btn-outline">
                View All Junior Courses
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
