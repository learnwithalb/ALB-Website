"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, Phone, ChevronDown, Download } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { MuiIcon, Flag } from "@/lib/icons";
import { LanguageGlobe } from "@/components/shared/LanguageGlobe";
import { useBooking } from "@/components/shared/BookingContext";

const WA = "https://wa.me/919876543210";
const PARTNER_EMAIL = "partners@academyoflanguagesandbeyond.com";

const AUDIENCES = [
  { icon: "flight",    tint: "#6c47ff", title: "Study Abroad Agencies",        desc: "Help your students hit their IELTS, French or German targets on time — and arrive campus-ready." },
  { icon: "handshake", tint: "#22c55e", title: "Immigration Consultants",      desc: "Strengthen PR and work-permit files with French, German and English tracks built around CLB/CEFR and exam requirements." },
  { icon: "school",    tint: "#f5b81a", title: "Schools & Colleges",           desc: "Add global languages and communication labs without overloading your faculty." },
  { icon: "business",  tint: "#3b82f6", title: "Corporates & Training Companies", desc: "Upgrade your workforce with Career English, business writing and cross-culture language support." },
];

const TRACKS = [
  {
    lang: "French", flagCode: "FR", from: "#3b5bdb", to: "#2f49c0",
    items: [
      { t: "French Immigration Track", d: "A1–B2, TEF/TCF Canada oriented, CLB 7+ and francophone life skills." },
      { t: "French Academic Track", d: "French for higher education and academic pathways." },
      { t: "French Career Track", d: "French for professional settings and client communication." },
      { t: "French Junior", d: "A1–B2 for ages 6–16; stories, projects, DELF-style tasks." },
      { t: "French Sprint", d: "Intensive program from beginner towards B2 for tight deadlines." },
    ],
  },
  {
    lang: "German", flagCode: "DE", from: "#6366f1", to: "#4338ca",
    items: [
      { t: "German Immigration Track", d: "A1–B2 German for PR and work in Germany, Austria and Switzerland." },
      { t: "German Academic Track", d: "German for Studienkolleg and university entry." },
      { t: "German Career Track", d: "German for workplace communication and professional roles." },
      { t: "German Junior", d: "A1–B2 German for school-age learners." },
      { t: "German Sprint", d: "Intensive track from beginner towards B2 on a fast timeline." },
    ],
  },
  {
    lang: "English", flagCode: "GB", from: "#0ea5e9", to: "#0284c7",
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
  { icon: "flight",    tint: "#6c47ff", title: "Study Abroad Agencies",   subtitle: "Language & exam readiness for your applicants.",            challenges: "IELTS bands, language prerequisites, campus readiness.",                       tracks: "ECP · IELTS Advantage · French Academic & Sprint · German Academic & Sprint" },
  { icon: "handshake", tint: "#22c55e", title: "Immigration Consultants", subtitle: "Language & CLB readiness for PR and work-permit clients.",  challenges: "CLB/CEFR requirements, TEF/TCF & IELTS timelines, settlement communication.",  tracks: "French Immigration Track · German Immigration Track · IELTS Advantage" },
  { icon: "school",    tint: "#f5b81a", title: "Schools & Colleges",      subtitle: "Global languages and communication labs for your campus.", challenges: "Faculty bandwidth, global language pathways, placements and study abroad.",    tracks: "French/German Junior · French/German Academic · ECP · IELTS Advantage · Career English Lab" },
  { icon: "business",  tint: "#3b82f6", title: "Corporates & Training",   subtitle: "Career English & communication skills for high-performing teams.", challenges: "Client communication, leadership communication, global mobility.",          tracks: "Career English Lab (corporate) · ECP for teams · French Career Track · German Career Track" },
];

const FOUNDER = [
  "Education has been part of my family's legacy for more than five decades. From principals to teachers, I grew up watching how learning can transform lives and create opportunities.",
  "When I explored the education industry, I noticed a gap. Many students were learning languages and preparing for exams, yet they often lacked the confidence to communicate in real-world situations.",
  "That's why I founded ALB — Academy of Languages & Beyond.",
  "Our mission goes beyond helping students learn a language. We help them build the confidence, communication skills, and professional readiness needed to thrive in a global world.",
  "Every ALB program combines language learning with practical soft skills — because success is not just about what you know, it is about how effectively you can communicate it.",
  "Whether your goal is higher education, immigration, career growth, or personal development, we're here to help you move beyond language barriers and closer to the opportunities you deserve.",
];

const HERO_STATS = [
  { value: "3", label: "Languages — French, German & English", dot: "#3b5bdb" },
  { value: "12+", label: "Programs & specialised tracks", dot: "#0ea5e9" },
  { value: "CEFR", label: "& exam-aligned: IELTS, TEF/TCF, DELF, Goethe", dot: "#f59e0b" },
  { value: "100%", label: "Delivered under your brand", dot: "#6366f1" },
];
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
      <section className="sec-light relative overflow-hidden pt-32 lg:pt-36 pb-20">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-50" />
        <div className="blob blob-royal w-[480px] h-[440px] -top-24 right-[-4%] opacity-30 pointer-events-none" />
        <div className="blob blob-sky w-[400px] h-[400px] bottom-[-10%] left-[-6%] opacity-30 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* ── left: copy ── */}
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="eyebrow-pill-outline inline-flex items-center gap-2"><MuiIcon name="handshake" size={15} /> Partnerships at ALB</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-[2.4rem] sm:text-5xl lg:text-[3.5rem] font-black text-ink leading-[1.04] tracking-tight"
              >
                Partner with ALB. Deliver global language success <span className="gradient-text">under your brand.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base md:text-lg text-body max-w-xl leading-relaxed"
              >
                French, German and English tracks for your students, clients and teams — delivered by our trainers, under your brand. <span className="font-bold text-ink">ALB becomes your specialist language partner</span>, so you can offer end-to-end solutions without building an academy from scratch.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button onClick={() => openModal("Partnership Enquiry")} className="btn-primary">
                  Book a Partner Call <ArrowRight size={16} />
                </button>
                <a href={`mailto:${PARTNER_EMAIL}?subject=Partner%20Brochure%20Request`} className="btn-outline">
                  <Download size={16} /> Download Partner Brochure
                </a>
              </motion.div>
            </div>

            {/* ── right: orbiting language globe ── */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <LanguageGlobe />
            </motion.div>
          </div>

          {/* stat row */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
            className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-line pt-12"
          >
            {HERO_STATS.map((s) => (
              <motion.div key={s.label} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                <span className="block w-2.5 h-2.5 rounded-full mb-3" style={{ background: s.dot }} />
                <div className="text-4xl md:text-5xl font-black text-ink tracking-tight">{s.value}</div>
                <div className="text-sm text-muted mt-2 leading-snug max-w-[16rem]">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* built for */}
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-12">
            <p className="text-xs font-black uppercase tracking-wider text-muted mb-3">Built for</p>
            <div className="flex flex-wrap gap-2.5">
              {BUILT_FOR.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2 text-sm font-bold text-ink">
                  <MuiIcon name={b.icon} size={16} style={{ color: "#6c47ff" }} /> {b.label}
                </span>
              ))}
            </div>
          </motion.div>
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
                    <span className="relative z-10 w-10 h-10 rounded-xl bg-white/95 shadow-md flex items-center justify-center flex-shrink-0">
                      <Flag code={col.flagCode} size={26} rounded="rounded-md" />
                    </span>
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
