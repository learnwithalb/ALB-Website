"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";

const skillCards = [
  { icon: "mic",    label: "Public Speaking", top: "5%",  left: "55%", duration: 3.2, delay: 0 },
  { icon: "work",   label: "Business Comm",   top: "22%", left: "72%", duration: 4.1, delay: 0.5 },
  { icon: "sparkle",label: "Personality",     top: "48%", left: "80%", duration: 3.7, delay: 1.0 },
  { icon: "stars",  label: "Leadership",      top: "68%", left: "62%", duration: 4.5, delay: 0.3 },
  { icon: "target", label: "Interview",       top: "60%", left: "38%", duration: 3.4, delay: 1.4 },
  { icon: "globe",  label: "Cross-Cultural",  top: "30%", left: "42%", duration: 4.8, delay: 0.8 },
];

const whoItsFor = [
  { icon: "work",     title: "Working Professionals", desc: "Preparing for global roles, promotions, or MNC interviews where communication is the differentiator.", color: "#3b5bdb" },
  { icon: "school",   title: "Students & Graduates",  desc: "Applying for top MBA programmes, international universities, or their first corporate role.", color: "#0ea5e9" },
  { icon: "language", title: "Language Learners",     desc: "ALB language students who want the full package — fluency AND confidence AND presence.", color: "#3b5bdb" },
  { icon: "business", title: "Corporate Teams",       desc: "Organisations that need their client-facing teams to communicate with global polish.", color: "#0ea5e9" },
];

const moduleDetails = [
  {
    icon: "mic",
    title: "Public Speaking Mastery",
    duration: "8 weeks · 16 sessions",
    price: "₹14,999",
    bar: "from-[#3b5bdb] to-[#6d8bff]",
    highlights: [
      "Eliminate stage fright in first 2 weeks",
      "Impromptu speaking & structured presentations",
      "Voice modulation, body language, eye contact",
      "Live practice with video feedback",
      "10-min TED-style final speech",
    ],
  },
  {
    icon: "work",
    title: "Business Communication",
    duration: "6 weeks · 12 sessions",
    price: "₹11,999",
    bar: "from-[#0ea5e9] to-[#38bdf8]",
    highlights: [
      "Email and report writing masterclass",
      "Meeting facilitation and agenda-setting",
      "Negotiation and persuasion frameworks",
      "Written and spoken business English",
      "Workplace scenario role-plays",
    ],
  },
  {
    icon: "sparkle",
    title: "Personality Development",
    duration: "10 weeks · 20 sessions",
    price: "₹17,999",
    bar: "from-[#3b5bdb] to-[#6d8bff]",
    highlights: [
      "Emotional intelligence & self-awareness",
      "First impression and personal brand building",
      "Mindset and resilience coaching",
      "Social confidence and networking skills",
      "Individual coaching sessions included",
    ],
  },
  {
    icon: "stars",
    title: "Leadership Presence",
    duration: "8 weeks · 16 sessions",
    price: "₹15,999",
    bar: "from-[#0ea5e9] to-[#38bdf8]",
    highlights: [
      "Leadership communication styles",
      "Conflict resolution",
      "Vision communication",
      "Executive gravitas",
      "360-degree peer feedback",
    ],
  },
  {
    icon: "target",
    title: "Interview Mastery",
    duration: "4 weeks · 8 sessions",
    price: "₹8,999",
    bar: "from-[#3b5bdb] to-[#6d8bff]",
    highlights: [
      "Behavioural interview (STAR method)",
      "Case study and group discussion prep",
      "Resume and LinkedIn optimisation",
      "Mock interviews with industry mentors",
      "Visa and scholarship interview simulation",
    ],
  },
  {
    icon: "globe",
    title: "Cross-Cultural Communication",
    duration: "6 weeks · 12 sessions",
    price: "₹11,999",
    bar: "from-[#0ea5e9] to-[#38bdf8]",
    highlights: [
      "High vs low context communication",
      "Working with global teams remotely",
      "Cultural nuances: Europe, Asia, US",
      "Avoiding cultural faux pas",
      "Building trust across cultures",
    ],
  },
];

export default function BeyondPage() {
  const { openModal } = useBooking();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center hero-light overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[560px] h-[560px] -top-40 left-1/4 pointer-events-none" />
        <div className="blob blob-sky w-[400px] h-[400px] bottom-0 right-0 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <AnimateOnView>
              <span className="eyebrow-pill-outline">+Beyond Programmes</span>
              <h1 className="text-4xl md:text-6xl font-black text-ink mt-5 leading-tight">
                Language opens the door.
                <br />
                <span className="gradient-text">You own the room.</span>
              </h1>
              <p className="mt-5 text-xl text-body leading-relaxed max-w-lg">
                Our +Beyond wing transforms communication, leadership, and presence
                — the skills that separate good professionals from exceptional ones.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#modules" className="btn-primary">
                  Explore Modules
                  <ArrowRight size={16} />
                </Link>
                <button onClick={() => openModal("+Beyond (Soft Skills)")} className="btn-outline">
                  Book Free Counselling
                </button>
              </div>
            </AnimateOnView>

            {/* Right: floating skill cards */}
            <div className="hidden lg:block relative h-[460px]">
              {skillCards.map((card) => (
                <motion.div
                  key={card.label}
                  className="absolute glass rounded-2xl px-5 py-4 flex items-center gap-3 border border-royal-200 cursor-default select-none"
                  style={{ top: card.top, left: card.left }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: card.duration,
                    delay: card.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MuiIcon name={card.icon} size={22} style={{ color: "#3b5bdb" }} />
                  <span className="text-sm font-bold text-ink whitespace-nowrap">{card.label}</span>
                </motion.div>
              ))}
              {/* Centre decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-royal-200/70" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-royal-100" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Who It&apos;s For</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              Built for anyone who wants to
              <span className="gradient-text"> communicate at their best.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
            {whoItsFor.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="relative rounded-2xl card p-6 text-center overflow-hidden group cursor-default"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center mx-auto mb-3">
                    <MuiIcon name={item.icon} size={26} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-ink text-base">{item.title}</h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed">{item.desc}</p>
                  <motion.div
                    className="absolute bottom-0 left-0 h-[3px] rounded-b-2xl"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.35 }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="section-padding sec-mist relative overflow-hidden" id="modules">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Our Programmes</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              Six paths. One destination:
              <span className="gradient-text"> your best self.</span>
            </h2>
            <p className="mt-4 text-body max-w-xl mx-auto">
              Take a standalone module or bundle with any language course for an unbeatable combined rate.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {moduleDetails.map((mod) => (
              <StaggerItem key={mod.title}>
                <motion.div
                  className="card rounded-2xl overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <motion.div
                    className={`h-1.5 w-full bg-gradient-to-r ${mod.bar}`}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center mb-4">
                      <MuiIcon name={mod.icon} size={26} style={{ color: "#3b5bdb" }} />
                    </div>
                    <h3 className="text-xl font-black text-ink">{mod.title}</h3>
                    <p className="text-xs text-muted font-semibold mt-1 tracking-wide uppercase">
                      {mod.duration}
                    </p>

                    <ul className="mt-4 space-y-2 flex-1">
                      {mod.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-body">
                          <CheckCircle size={13} className="text-royal-500 flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 pt-5 border-t border-line flex items-center justify-between">
                      <span className="text-2xl font-black text-ink">{mod.price}</span>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2.5"
                      >
                        Enroll
                      </a>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Bundle Offer (dark anchor) ── */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <motion.div
          className="blob blob-sky w-[600px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-max relative z-10">
          <AnimateOnView>
            <div className="text-center max-w-4xl mx-auto">
              <span className="eyebrow-pill-light">Best Value</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-5">
                Bundle your language + soft skills.
                <br />
                <span className="gradient-text-light">Save up to 30%.</span>
              </h2>
              <p className="mt-5 text-white/55 max-w-xl mx-auto text-lg leading-relaxed">
                Every ALB language student gets a special bundled rate on any +Beyond module.
                Because fluency and confidence should go hand in hand.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/courses" className="btn-white">
                  View Language Courses
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  Ask About Bundles
                </a>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] top-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Results That Speak</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              From our <span className="gradient-text">alumni.</span>
            </h2>
          </AnimateOnView>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "The Beyond programme changed how I show up in meetings. I used to freeze during presentations. Now I'm facilitating workshops for 50-person teams with confidence.",
                name: "Sneha Pillai",
                role: "Content Strategist · Public Speaking Mastery",
                avatar: "SP",
              },
              {
                quote:
                  "The communication mastery module reshaped my entire training methodology. My session ratings jumped from 3.8 to 4.7 within two months of completing the programme.",
                name: "Siddharth Roy",
                role: "Corporate Trainer · Communication Mastery",
                avatar: "SR",
              },
            ].map((t, i) => (
              <AnimateOnView key={i} delay={i * 0.15}>
                <div className="card rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-body leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-ink text-sm">{t.name}</p>
                      <p className="text-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
