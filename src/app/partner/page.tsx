"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, Phone, ChevronDown, Download } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon, Flag } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";
import DotGrid from "@/components/shared/DotGrid";

const WA = "https://wa.me/919876543210";
const PARTNER_EMAIL = "partners@academyoflanguagesandbeyond.com";

const AUDIENCES = [
  { icon: "flight",    title: "Study Abroad Agencies",        desc: "Help your students hit their IELTS, French or German targets on time — and arrive campus-ready." },
  { icon: "handshake", title: "Immigration Consultants",      desc: "Strengthen PR and work-permit files with French, German and English tracks built around CLB/CEFR and exam requirements." },
  { icon: "school",    title: "Schools & Colleges",           desc: "Add global languages and communication labs without overloading your faculty." },
  { icon: "business",  title: "Corporates & Training Companies", desc: "Upgrade your workforce with Career English, business writing and cross-culture language support." },
];

const TRACKS = [
  {
    lang: "French", flag: "🇫🇷", from: "#3b5bdb", to: "#2f49c0",
    items: [
      { t: "French Immigration Track", d: "A1–B2, TEF/TCF Canada oriented, CLB 7+ and francophone life skills." },
      { t: "French Academic Track", d: "French for higher education and academic pathways." },
      { t: "French Career Track", d: "French for professional settings and client communication." },
      { t: "French Junior", d: "A1–B2 for ages 6–16; stories, projects, DELF-style tasks." },
      { t: "French Sprint", d: "Intensive program from beginner towards B2 for tight deadlines." },
    ],
  },
  {
    lang: "German", flag: "🇩🇪", from: "#6366f1", to: "#4338ca",
    items: [
      { t: "German Immigration Track", d: "A1–B2 German for PR and work in Germany, Austria and Switzerland." },
      { t: "German Academic Track", d: "German for Studienkolleg and university entry." },
      { t: "German Career Track", d: "German for workplace communication and professional roles." },
      { t: "German Junior", d: "A1–B2 German for school-age learners." },
      { t: "German Sprint", d: "Intensive track from beginner towards B2 on a fast timeline." },
    ],
  },
  {
    lang: "English", flag: "🇬🇧", from: "#0ea5e9", to: "#0284c7",
    items: [
      { t: "English Communication Program (ECP)", d: "A1–B1/B2 everyday and academic/professional English." },
      { t: "IELTS Advantage Program", d: "8–10 week structured prep for Academic & General Training, bands ~6.5–7.5." },
      { t: "ALB Career English Lab", d: "Business communication & interview mastery for placements and professionals." },
    ],
  },
];

const BENEFITS = [
  { icon: "globe",     title: "One partner for multiple languages", desc: "French, German and English across immigration, academic, career, junior and sprint tracks." },
  { icon: "grade",     title: "CEFR & exam-aligned design",         desc: "Mapped to CEFR levels and leading exams — IELTS, TEF/TCF, DELF and Goethe — so results are recognised globally." },
  { icon: "mic",       title: "Soft skills built in",               desc: "Interviews, group discussions, presentations and email writing are integrated into training, not sold separately." },
  { icon: "people",    title: "Small cohorts, high feedback",       desc: "Limited batch sizes so learners get real speaking time, individual corrections and visible improvement." },
  { icon: "translate", title: "India-first teaching style",         desc: "Trainers who understand Indian learners' strengths, hesitations and multilingual reality." },
  { icon: "handshake", title: "Clean referral experience",          desc: "ALB is your training partner. Your brand stays in front; we work in the background." },
  { icon: "chart",     title: "Transparent reporting",              desc: "Shared updates on enrolments, progress, mock scores and CEFR levels — you always know what's happening." },
];

const STEPS = [
  { n: "01", title: "Align", desc: "We understand your context, audiences and goals, then shortlist the right ALB tracks for you." },
  { n: "02", title: "Refer", desc: "You share ALB via a referral link, form or code. We handle placement assessments and counselling calls." },
  { n: "03", title: "We Deliver", desc: "Our trainers run live online sessions, assignments, mock tests and feedback — fully managed by ALB." },
  { n: "04", title: "You Earn & Monitor", desc: "You receive referral fees / revenue share on each enrolment, plus monthly or quarterly reports." },
  { n: "05", title: "Grow Together", desc: "We co-create campaigns around your pipeline — intakes, PR pools, placement season, internal cohorts." },
];

const SOLUTIONS = [
  { icon: "flight",    title: "Study Abroad Agencies",   subtitle: "Language & exam readiness for your applicants.",            challenges: "IELTS bands, language prerequisites, campus readiness.",                       tracks: "ECP · IELTS Advantage · French Academic & Sprint · German Academic & Sprint" },
  { icon: "handshake", title: "Immigration Consultants", subtitle: "Language & CLB readiness for PR and work-permit clients.",  challenges: "CLB/CEFR requirements, TEF/TCF & IELTS timelines, settlement communication.",  tracks: "French Immigration Track · German Immigration Track · IELTS Advantage" },
  { icon: "school",    title: "Schools & Colleges",      subtitle: "Global languages and communication labs for your campus.", challenges: "Faculty bandwidth, global language pathways, placements and study abroad.",    tracks: "French/German Junior · French/German Academic · ECP · IELTS Advantage · Career English Lab" },
  { icon: "business",  title: "Corporates & Training",   subtitle: "Career English & communication skills for high-performing teams.", challenges: "Client communication, leadership communication, global mobility.",          tracks: "Career English Lab (corporate) · ECP for teams · French Career Track · German Career Track" },
];

const FOUNDER = [
  "Education has been part of my family's legacy for more than five decades. From principals to teachers, I grew up watching how learning can transform lives and create opportunities.",
  "When I explored the education industry, I noticed a gap. Many students were learning languages and preparing for exams, yet they often lacked the confidence to communicate in real-world situations.",
  "That's why I founded ALB — Academy of Languages & Beyond.",
  "Our mission goes beyond helping students learn a language. We help them build the confidence, communication skills, and professional readiness needed to thrive in a global world.",
  "Every ALB program combines language learning with practical soft skills — because success is not just about what you know, it is about how effectively you can communicate it.",
  "Whether your goal is higher education, immigration, career growth, or personal development, we're here to help you move beyond language barriers and closer to the opportunities you deserve.",
];

type HubCard = {
  title: string; icon: string; pos: string; line: [number, number];
  flags?: string[]; subs?: { i: string; l: string }[];
};
const HUB_CARDS: HubCard[] = [
  { title: "Schools & Colleges", icon: "school", pos: "top-0 left-0", line: [26, 24], flags: ["FR", "DE", "EN"] },
  { title: "Study Abroad Agencies", icon: "globe", pos: "top-[6%] right-0", line: [76, 26], subs: [{ i: "article", l: "Visa" }, { i: "people", l: "Student" }, { i: "institution", l: "University" }] },
  { title: "Immigration Consultants", icon: "article", pos: "bottom-[8%] left-0", line: [26, 76], subs: [{ i: "description", l: "Passport" }, { i: "people", l: "Interview" }, { i: "translate", l: "Language Test" }] },
  { title: "Corporates", icon: "business", pos: "bottom-0 right-0", line: [76, 75], subs: [{ i: "people", l: "Team Training" }, { i: "chat", l: "Communication" }, { i: "grade", l: "Certifications" }] },
];
const HERO_BUBBLES = [
  { t: "Bonjour", cls: "top-[1%] left-[46%]", tint: "#3b5bdb" },
  { t: "Hello", cls: "top-[40%] right-[-3%]", tint: "#0ea5e9" },
  { t: "Guten Tag", cls: "top-[47%] left-[1%]", tint: "#7c5cff" },
];
const HERO_EXAMS = ["DELF", "Goethe Institut", "English UK"];
const BUILT_FOR = [
  { icon: "school", label: "Schools & Colleges" },
  { icon: "globe", label: "Study Abroad Agencies" },
  { icon: "article", label: "Immigration Consultants" },
  { icon: "business", label: "Corporates" },
  { icon: "book", label: "Training Companies" },
];

export default function PartnerPage() {
  const { openModal } = useBooking();

  const goldBtn = "inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-ink font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-400/25";

  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative overflow-hidden pt-28 pb-16 min-h-[92vh] flex items-center" style={{ background: "linear-gradient(115deg, #060c28 0%, #0c1640 44%, #101d52 72%, #0a1238 100%)" }}>
        {/* interactive dot-grid background (reacts to the cursor) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <DotGrid dotSize={3} gap={26} baseColor="#243a82" activeColor="#9bb2ff" proximity={120} shockRadius={220} shockStrength={4} resistance={750} returnDuration={1.4} />
        </div>
        {/* right-side blue globe glow */}
        <div className="absolute inset-y-0 right-0 w-[66%] z-0 pointer-events-none hidden lg:block" style={{ background: "radial-gradient(circle at 62% 46%, rgba(59,91,219,0.40) 0%, rgba(14,165,233,0.18) 40%, transparent 72%)" }} />

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-8 items-center">
            {/* ── LEFT: copy ── */}
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-royal-100"><MuiIcon name="handshake" size={15} style={{ color: "#9bb2ff" }} /> Partnerships at ALB</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl xl:text-[3.4rem] font-black text-white leading-[1.06] tracking-tight mt-5"
              >
                Partner With ALB.<br />Deliver Global Language Success <span className="gradient-text-light">Under Your Brand.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5 text-base md:text-lg text-white/75 max-w-xl leading-relaxed"
              >
                French, German and English tracks for your students, clients and teams — delivered by our trainers, under your brand.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}
                className="mt-3 text-sm md:text-[15px] text-white/55 max-w-xl leading-relaxed"
              >
                Whether you run a study abroad agency, an immigration practice, a school or a corporate training function, your people need more than paperwork and degrees. They need language proficiency, exam scores and communication confidence to succeed in global environments.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.34 }}
                className="mt-3 text-sm md:text-[15px] text-white/70 max-w-xl leading-relaxed"
              >
                <span className="font-bold text-white">ALB becomes your specialist language partner</span> so you can offer end-to-end solutions without building an academy from scratch.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.42 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <button onClick={() => openModal("Partnership Enquiry")} className="inline-flex items-center gap-2 text-base px-7 py-3.5 rounded-full font-bold text-white bg-royal-600 hover:bg-royal-700 shadow-[0_10px_26px_rgba(59,91,219,0.30)] hover:-translate-y-0.5 transition-all">
                  Book a Partner Call <ArrowRight size={16} />
                </button>
                <a href={`mailto:${PARTNER_EMAIL}?subject=Partner%20Brochure%20Request`} className="inline-flex items-center gap-2 text-base px-6 py-3.5 rounded-full font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/15 hover:-translate-y-0.5 transition-all">
                  <Download size={16} /> Download Partner Brochure
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="mt-9">
                <p className="text-xs font-black uppercase tracking-wider text-white/45 mb-3">Built for:</p>
                <div className="flex flex-wrap gap-2.5">
                  {BUILT_FOR.map((b) => (
                    <span key={b.label} className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-md border border-white/15 shadow-sm rounded-xl px-3 py-2 text-xs font-bold text-white/90">
                      <MuiIcon name={b.icon} size={16} style={{ color: "#9bb2ff" }} /> {b.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: partner network ── */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full max-w-[600px] mx-auto aspect-[1/0.98]">
                {/* connectors */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
                  {HUB_CARDS.map((c, i) => (
                    <g key={c.title}>
                      <line x1="50" y1="50" x2={c.line[0]} y2={c.line[1]} stroke="#7d96ff" strokeWidth="0.5" strokeOpacity="0.45" strokeDasharray="2 2" />
                      <motion.circle r="1" fill="#9bb2ff" animate={{ cx: [50, c.line[0]], cy: [50, c.line[1]], opacity: [0, 1, 0] }} transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }} />
                    </g>
                  ))}
                </svg>

                {/* centre hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  {[0, 1].map((i) => (
                    <motion.span key={i} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-royal-300" style={{ width: 128, height: 128 }} animate={{ scale: [1, 1.8, 1.8], opacity: [0.5, 0, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }} />
                  ))}
                  <div className="relative w-36 h-36 rounded-full bg-white flex flex-col items-center justify-center" style={{ boxShadow: "0 0 50px rgba(59,91,219,0.35)", border: "5px solid rgba(59,91,219,0.12)" }}>
                    <Image src="/images/logo-v2.png" alt="ALB" width={955} height={442} className="h-5 w-auto mb-1" />
                    <span className="text-[24px] font-black text-royal-600 leading-none">ALB</span>
                    <span className="mt-1 text-[8.5px] font-bold uppercase tracking-wider text-muted">Language Partner</span>
                    <span className="block w-8 h-0.5 rounded-full bg-royal-400 mt-1.5" />
                  </div>
                </div>

                {/* connected cards */}
                {HUB_CARDS.map((c, i) => (
                  <motion.div key={c.title} className={`absolute z-10 w-[44%] ${c.pos}`} animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}>
                    <div className="rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/12 shadow-[0_14px_38px_rgba(0,0,0,0.4)] p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-9 h-9 rounded-xl bg-royal-500/20 flex items-center justify-center flex-shrink-0"><MuiIcon name={c.icon} size={19} style={{ color: "#9bb2ff" }} /></span>
                        <span className="text-[12.5px] font-black text-white leading-tight">{c.title}</span>
                      </div>
                      {c.flags ? (
                        <div className="space-y-1.5">
                          {[["FR", "French"], ["DE", "German"], ["EN", "English"]].map(([code, label]) => (
                            <div key={code} className="flex items-center gap-2 rounded-lg bg-white/[0.06] border border-white/10 px-2 py-1.5">
                              <Flag code={code} size={18} rounded="rounded" />
                              <span className="text-[11px] font-bold text-white/90">{label}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 gap-1.5">
                          {c.subs?.map((s) => (
                            <div key={s.l} className="flex flex-col items-center gap-1 rounded-lg bg-white/[0.06] border border-white/10 px-1 py-2">
                              <MuiIcon name={s.i} size={16} style={{ color: "#9bb2ff" }} />
                              <span className="text-[8.5px] font-semibold text-white/55 text-center leading-tight">{s.l}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* language bubbles */}
                {HERO_BUBBLES.map((b, i) => (
                  <motion.span key={b.t} className={`absolute z-20 ${b.cls} px-3 py-1.5 rounded-2xl rounded-bl-sm text-xs font-bold text-white shadow-lg`} style={{ background: b.tint }} animate={{ y: [0, -6, 0] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}>{b.t}</motion.span>
                ))}
              </div>

              {/* exam badges */}
              <div className="flex items-center justify-center gap-3 mt-3">
                {HERO_EXAMS.map((e) => (
                  <div key={e} className="px-4 py-2 rounded-xl bg-white/[0.07] backdrop-blur border border-white/12 shadow-sm text-[11px] font-black text-white/70 uppercase tracking-wide">{e}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHO IS THIS FOR ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">Who We Work With</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">Who is this <span className="gradient-text">for?</span></h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              We collaborate with organisations that support learners and professionals on their global journeys.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.09}>
            {AUDIENCES.map((a) => (
              <StaggerItem key={a.title}>
                <div className="group card-feature rounded-2xl p-7 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center mb-4 shadow-lg shadow-royal-500/25">
                    <MuiIcon name={a.icon} size={26} style={{ color: "#ffffff" }} />
                  </div>
                  <h3 className="font-black text-ink text-lg">{a.title}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{a.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-royal-600 font-bold text-sm group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ OUR TRACKS ══════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-outline">Our Tracks</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">
              French, German &amp; English — <span className="gradient-text">one partner, multiple tracks.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              ALB offers a full portfolio of programs you can mix and match based on your audience.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid lg:grid-cols-3 gap-6" staggerDelay={0.12}>
            {TRACKS.map((col) => (
              <StaggerItem key={col.lang}>
                <div className="card rounded-3xl overflow-hidden h-full flex flex-col">
                  <div className="relative px-6 py-5 flex items-center gap-3 overflow-hidden" style={{ background: `linear-gradient(135deg, ${col.from}, ${col.to})` }}>
                    <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                    <span className="relative z-10 text-3xl">{col.flag}</span>
                    <h3 className="relative z-10 text-xl font-black text-white">{col.lang} Tracks</h3>
                  </div>
                  <div className="p-6 space-y-3 flex-1">
                    {col.items.map((it) => (
                      <div key={it.t} className="flex gap-3">
                        <CheckCircle size={16} className="text-royal-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-ink text-sm">{it.t}</p>
                          <p className="text-muted text-xs mt-0.5 leading-relaxed">{it.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ WHY PARTNERS CHOOSE ALB ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">Why Partner With Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">Why partners <span className="gradient-text">choose ALB.</span></h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              We&apos;re a specialised language and communication partner — not a generic coaching centre.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.07}>
            {BENEFITS.map((b) => (
              <StaggerItem key={b.title}>
                <div className="card-hover rounded-2xl p-6 h-full flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center flex-shrink-0">
                    <MuiIcon name={b.icon} size={22} style={{ color: "#3b5bdb" }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">{b.title}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ HOW THE PARTNER MODEL WORKS ══════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow-pill-outline">The Partner Model</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">How the ALB partner model <span className="gradient-text">works.</span></h2>
          </AnimateOnView>

          <div className="relative">
            {/* connector line (desktop) */}
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-royal-200 via-royal-500 to-royal-200" />
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4" staggerDelay={0.1}>
              {STEPS.map((s) => (
                <StaggerItem key={s.n}>
                  <div className="text-center">
                    <div className="relative z-10 w-14 h-14 mx-auto rounded-full bg-white border-2 border-royal-200 flex items-center justify-center font-black text-royal-600 shadow-md">{s.n}</div>
                    <h3 className="font-black text-ink mt-4">{s.title}</h3>
                    <p className="text-muted text-sm mt-1.5 leading-relaxed">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <AnimateOnView className="text-center mt-12">
            <Link href="#contact" className="btn-primary">
              Talk to us about referral &amp; co-branded models <ArrowRight size={16} />
            </Link>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════ SOLUTIONS BY ORGANISATION TYPE ══════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">Tailored Solutions</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">Solutions tailored to <span className="gradient-text">your organisation.</span></h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              Every partner type has different goals and constraints. We customise tracks and formats so ALB fits naturally into your existing services.
            </p>
          </AnimateOnView>

          <StaggerContainer className="space-y-4 max-w-4xl mx-auto" staggerDelay={0.1}>
            {SOLUTIONS.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group card-hover rounded-2xl p-6 md:p-7 flex flex-col md:flex-row gap-5 md:items-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center flex-shrink-0 shadow-lg shadow-royal-500/25">
                    <MuiIcon name={s.icon} size={26} style={{ color: "#ffffff" }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-ink text-lg">{s.title}</h3>
                    <p className="text-royal-600 font-semibold text-sm mt-0.5">{s.subtitle}</p>
                    <p className="text-muted text-sm mt-2 leading-relaxed"><span className="font-bold text-ink">Challenges:</span> {s.challenges}</p>
                    <p className="text-muted text-sm mt-1 leading-relaxed"><span className="font-bold text-ink">Suggested tracks:</span> {s.tracks}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-royal-600 font-bold text-sm group-hover:gap-2.5 transition-all flex-shrink-0 whitespace-nowrap">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════ FOUNDER'S NOTE ══════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            {/* founder card */}
            <AnimateOnView direction="right">
              <div className="relative">
                <div className="blob blob-royal absolute -inset-4 opacity-50" />
                <div className="relative card rounded-3xl p-8 text-center">
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center text-white font-black text-3xl shadow-xl">JK</div>
                  <p className="mt-5 font-black text-ink text-xl">Jasmine Kaur</p>
                  <p className="text-royal-600 font-semibold text-sm">Founder, ALB</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-3 py-1.5 text-xs font-bold text-amber-600">
                    ✦ 50+ years of family legacy in education
                  </div>
                </div>
              </div>
            </AnimateOnView>

            {/* note */}
            <AnimateOnView direction="left">
              <span className="eyebrow-pill-outline">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">
                In the <span className="gradient-text">founder&apos;s words.</span>
              </h2>
              <div className="relative mt-6 space-y-4">
                <span aria-hidden className="absolute -top-8 -left-2 font-display text-7xl text-royal-200 leading-none select-none">&ldquo;</span>
                {FOUNDER.map((p, i) => (
                  <p key={i} className={`relative leading-relaxed ${i === 2 ? "text-ink font-bold text-lg" : "text-body"}`}>{p}</p>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ══════════════════ FINAL CTA & CONTACT (royal) ══════════════════ */}
      <section id="contact" className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-sky w-[520px] h-[360px] top-0 right-0 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* copy + buttons */}
            <AnimateOnView direction="right">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Ready to explore a partnership with <span className="gradient-text-light">ALB?</span>
              </h2>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                Whether you want to add language offerings, improve admission and visa outcomes, support your students,
                or upskill your teams — we can help you design a solution that fits your reality and your budget.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => openModal("Partnership Strategy Call")} className={goldBtn}>
                  Book a 30-Minute Partner Strategy Call <ArrowRight size={16} />
                </button>
                <a href={`mailto:${PARTNER_EMAIL}`} className="btn-outline-light">
                  <Mail size={15} /> Email Our Partnerships Team
                </a>
              </div>
              <p className="mt-5 text-white/45 text-sm flex items-center gap-2">
                <Phone size={14} className="text-sky-300" />
                Prefer WhatsApp? <a href={WA} target="_blank" rel="noopener noreferrer" className="text-sky-300 font-semibold hover:underline">Message us →</a>
              </p>
            </AnimateOnView>

            {/* contact form */}
            <AnimateOnView direction="left">
              <div className="bg-white rounded-3xl p-7 md:p-8 shadow-2xl">
                <h3 className="font-black text-ink text-xl mb-5">Tell us about your organisation</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" placeholder="Your full name" />
                    <Field label="Organisation" placeholder="Company / institution" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-1.5">Type of organisation</label>
                    <div className="relative">
                      <select className="w-full bg-mist border border-line rounded-xl px-4 py-3 text-sm text-body appearance-none focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 transition-all cursor-pointer">
                        <option>Study Abroad Agency</option>
                        <option>Immigration Consultant</option>
                        <option>School / College</option>
                        <option>Corporate / Training Company</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-royal-300 pointer-events-none" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email" type="email" placeholder="you@organisation.com" />
                    <Field label="Phone / WhatsApp" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-1.5">Message</label>
                    <textarea rows={3} placeholder="Tell us briefly what you're looking for…" className="w-full bg-mist border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder-royal-300 focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 transition-all resize-none" />
                  </div>
                  <a href={`mailto:${PARTNER_EMAIL}`} className="btn-primary w-full justify-center">
                    Send Partnership Enquiry <ArrowRight size={16} />
                  </a>
                </form>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-mist border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder-royal-300 focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 transition-all"
      />
    </div>
  );
}
