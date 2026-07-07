"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Star, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Shield,
  Users, Globe, Video, MessageCircle, Sparkles, Mic,
} from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { languages, testimonials, faqs } from "@/lib/constants";
import { MuiIcon, Flag, flagSrc } from "@/lib/icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { useBooking } from "@/components/shared/BookingContext";

/* ─────────────────────────── Stat Cards ─────────────────────────── */
const STAT_CARDS = [
  { title: "Live-Interactive Sessions", desc: "Real-time classes, never recordings",  Icon: Video,         iconColor: "#3b5bdb", lineColor: "#3b5bdb" },
  { title: "Small Cohorts",             desc: "Max 12 learners per batch",             Icon: Users,         iconColor: "#0ea5e9", lineColor: "#0ea5e9" },
  { title: "24×7 Doubt Support",        desc: "Help whenever you need it",             Icon: MessageCircle, iconColor: "#6d8bff", lineColor: "#6d8bff" },
  { title: "Soft-Skills Included",      desc: "Confidence and communication built in",   Icon: Sparkles,      iconColor: "#3b5bdb", lineColor: "#3b5bdb" },
  { title: "Dedicated Communication Classes", desc: "Speak fluently with focused practice", Icon: Mic,        iconColor: "#0ea5e9", lineColor: "#0ea5e9" },
];

const statCardsV = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.55 } } };
const statCardV = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

/* Exams each programme prepares you for */
const PREPARES: Record<string, string> = {
  fr: "DELF · DALF · TEF Canada · TCF Canada",
  de: "Goethe · TELC · TestDaF · DSH",
  es: "DELE · SIELE",
  jp: "JLPT (N5–N2)",
  kr: "TOPIK I and II",
  en: "IELTS · PTE · TOEFL",
};

/* Cover photos for the language card headers */
const COVER: Record<string, string> = {
  fr: "/images/country/fr.png",
  de: "/images/country/de.png",
  en: "/images/country/en.png",
};

/* Programmes not yet open for enrolment */
const COMING_SOON = ["es", "jp", "kr"];

/* Goal-based learning tracks */
const TRACKS = [
  {
    title: "Immigration Track",
    badge: "Immigration",
    icon: "flight",
    ideal: "Canada PR · France and Germany immigration · Work visas",
    different: "Visa interview simulations, official document vocabulary, and embassy communication in your target language.",
    exams: ["TEF Canada", "TCF Canada", "IELTS", "Goethe"],
  },
  {
    title: "Academic Track",
    badge: "Academic",
    icon: "school",
    ideal: "Study abroad · University admissions · Scholarship applications",
    different: "Academic writing, university interview prep, and Sciences Po / TU Munich-style presentation formats.",
    exams: ["DELF B2", "DALF", "Goethe B2", "IELTS Academic"],
  },
  {
    title: "Career Track",
    badge: "Career",
    icon: "work",
    ideal: "MNC jobs · Client-facing roles · Professional communication",
    different: "Boardroom-ready speaking, email writing in the target language, and negotiation vocabulary.",
    exams: ["Business Comm", "Presentations", "Interview Skills", "IELTS General"],
  },
  {
    title: "Sprint Track",
    badge: "Sprint",
    icon: "rocket",
    ideal: "Tight deadlines, visa filing, university intake, job change or relocation.",
    different: "An intensive schedule with more live classes per week, daily speaking practice, and tight progress checks.",
    exams: ["TEF / TCF Canada", "DELF / Goethe", "IELTS (Acad. and Gen.)"],
  },
];

/* hexagon clip-path for journey nodes */
const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

/* Step-by-step learner journey */
const JOURNEY = [
  { n: "01", icon: "target",   title: "Choose Your Goal",      desc: "Immigration · Academic · Career · Sprint. Pick the track that matches your destination." },
  { n: "02", icon: "book",     title: "Select Your Programme", desc: "A standard 36-week path, or an intensive 14–16 week pathway for hard deadlines." },
  { n: "03", icon: "computer", title: "Learn and Practice",      desc: "3 live-classes a week · Comm. Sessions · Bi-weekly assessments · Soft-skills sessions." },
  { n: "04", icon: "trophy",   title: "Get Certified",         desc: "ALB Level Certificate · International exam readiness · CEFR-aligned credentials." },
];

/* Faculty / mentors */
/* Repeating colour set used across each language's trainer cards */
const TRAINER_COLORS = [
  { from: "#7ea8e8", to: "#4f78cf" }, // blue
  { from: "#f3a48f", to: "#dd7359" }, // coral
  { from: "#84bf6a", to: "#5a9c43" }, // green
  { from: "#b39ae8", to: "#876bd6" }, // purple
  { from: "#e0a64d", to: "#c5821f" }, // amber
  { from: "#5fb89a", to: "#3c9779" }, // teal
];

interface Mentor { name: string; role: string; exp: string; qual: string; spec: string; tagline: string; linkedin?: string; img: string; }

const ALL_TRAINERS: Mentor[] = [
  {
    name: "Bhavika Jain",
    role: "French Language Trainer",
    exp: "5+ Years · International experience (France)",
    qual: "DELF B2 Certified",
    spec: "Beginner–Intermediate French • Conversation • Exam Preparation",
    tagline: "Helping learners speak French with confidence through practical, interactive learning.",
    linkedin: "https://www.linkedin.com/in/bhavika-jain-153451234/",
    img: "/images/mentor-images/bhavika.png",
  },
  {
    name: "Belhadj Moussa Garba",
    role: "French Language Trainer",
    exp: "5+ Years · International language educator",
    qual: "UNESCO MGIEP Certified Master Trainer · Master's in Project Management",
    spec: "French • ESP • CEFR A1–B2 • Cross-cultural Communication",
    tagline: "International educator specializing in CEFR-based language training and global communication.",
    linkedin: "https://www.linkedin.com/in/bel-hadj-moussa-garba/",
    img: "/images/mentor-images/bel hadj.png",
  },
  {
    name: "Meghasi Bhatt",
    role: "Senior French Language Trainer",
    exp: "15+ Years",
    qual: "Diploma in French — Alliance Française, Ahmedabad",
    spec: "French A1–B2 • DELF • TEF • School and University French",
    tagline: "Helping learners build confidence and fluency in French through practical learning.",
    linkedin: "https://www.linkedin.com/in/meghasi-bhatt-54b5b1112/",
    img: "/images/mentor-images/Meghasi.png",
  },
  {
    name: "Anna Becker",
    role: "Senior German Language Trainer",
    exp: "8+ Years",
    qual: "Goethe-Zertifikat C2 · Master's in German Language and Literature",
    spec: "German A1–C1 • Goethe Exam Prep • Business German • Conversational German",
    tagline: "Helping learners master German with confidence, clarity, and cultural understanding.",
    linkedin: "https://www.linkedin.com/in/anna-becker-4ab24a41a/",
    img: "/images/mentor-images/Anna becker.png",
  },
  {
    name: "Taranpreet Kaur",
    role: "Senior French Language Trainer",
    exp: "10+ Years",
    qual: "DELF B2 Certified",
    spec: "TEF Canada • TCF Canada • DELF • French A1–B2 • Conversational French",
    tagline: "Helping learners achieve fluency and international exam success through practical French learning.",
    linkedin: "https://www.linkedin.com/in/taranpreet-kaur-333651311/",
    img: "/images/mentor-images/Taranpreet.png",
  },
  {
    name: "Sukruti Desai",
    role: "French and Spanish Language Trainer",
    exp: "5+ Years",
    qual: "French and Spanish Language Educator",
    spec: "French • Spanish • DELF • DELE • TEF Preparation",
    tagline: "Making language learning interactive, practical, and enjoyable for every learner.",
    img: "/images/mentor-images/Sukruti.png",
  },
  {
    name: "Dr. Gurdeep Kaur Tripathi",
    role: "Senior English and Soft Skills Trainer",
    exp: "18+ Years",
    qual: "Ph.D. and M.Phil. in English Literature",
    spec: "English Communication • Business English • Soft Skills • Interview Prep • Public Speaking",
    tagline: "Empowering learners with confident English communication and professional skills.",
    img: "/images/mentor-images/Gurdeep.png",
  },
];

/* Cover images for the hero language cards (by language code) */
const COVERS: Record<string, string> = {
  fr: "/images/hero-images/homepage/french.png",
  de: "/images/hero-images/homepage/german.png",
  en: "/images/hero-images/homepage/english.png",
};

/* Hero card copy overrides */
const HERO_TAGLINES: Record<string, string> = {
  fr: "Study abroad. Immigration. International growth.",
  de: "Europe's strongest economy starts with the language.",
  en: "The skill behind every successful career.",
};

const HERO_TAGS: Record<string, string> = {
  fr: "For Canada and Europe",
  de: "For Germany and EU Careers",
  en: "For Global Success",
};

/* ─────────────────────────── Page ─────────────────────────── */
export default function HomePage() {
  const { openModal } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeLang, setActiveLang] = useState(0);
  const trainerScroll = useRef<HTMLDivElement>(null);
  const scrollTrainers = (dir: number) => {
    const el = trainerScroll.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  // Auto-cycle the hero language cards every 3s; pause while hovered.
  const heroLangs = languages.filter((l) => !l.comingSoon);
  const cardsPaused = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (cardsPaused.current) return;
      setActiveLang((p) => (p + 1) % heroLangs.length);
    }, 3000);
    return () => clearInterval(id);
  }, [heroLangs.length]);

  return (
    <div className="bg-site">

      {/* ══════════════════════════ HERO (dark anchor) ══════════════════════════ */}
      <section className="hero-light relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-10">

        {/* light texture + soft glows */}
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-60 z-0" />
        <div className="blob blob-royal w-[520px] h-[420px] bottom-0 right-[12%] pointer-events-none z-0" />
        <div className="blob blob-sky w-[360px] h-[360px] top-[8%] left-[-6%] pointer-events-none z-0" />

        <div className="container-max px-5 md:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">

            {/* ── Left: text ── */}
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 bg-royal-50 border border-royal-100 text-royal-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                  <Globe size={11} />
                  India&apos;s first language + Soft Skills Academy
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl xl:text-[3.6rem] font-black text-ink leading-[1.05] tracking-tight"
              >
                Helping you
                <br />
                <span className="aurora-text inline-block pb-1">Speak, Connect and Belong</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-5 text-base md:text-lg text-body max-w-lg leading-relaxed"
              >
                From learning a language to living it. Master the language and
                build the confidence to thrive in every conversation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.33 }}
                className="mt-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/courses" className="btn-primary text-sm px-7 py-3.5 font-bold rounded-full flex items-center gap-2">
                    Explore Courses <ArrowRight size={14} />
                  </Link>
                  <button onClick={() => openModal()} className="btn-outline text-sm px-7 py-3.5 rounded-full flex items-center gap-2">
                    Book a Free Demo <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.46 }}
                className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-muted text-xs"
              >
                {["DELF · DALF", "TEF · TCF Canada", "Goethe · TestDaF", "IELTS · PTE · TOEFL"].map((e) => (
                  <span key={e} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-royal-500" />
                    {e}
                  </span>
                ))}
              </motion.div>

            </div>

            {/* ── Right: expanding language cards ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => { cardsPaused.current = true; }}
              onMouseLeave={() => { cardsPaused.current = false; }}
              className="hidden lg:flex gap-3 h-[440px]"
            >
              {heroLangs.map((l, i) => {
                const active = activeLang === i;
                return (
                  <div
                    key={l.code}
                    onMouseEnter={() => setActiveLang(i)}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${active ? "flex-[4]" : "flex-[1]"}`}
                    style={{
                      border: "1px solid rgba(255,255,255,0.14)",
                      boxShadow: active
                        ? "0 24px 54px rgba(16,23,51,0.24)"
                        : "0 10px 26px rgba(16,23,51,0.14)",
                    }}
                  >
                    {/* cover image */}
                    {COVERS[l.code] && (
                      <Image src={COVERS[l.code]} alt={l.name} fill priority sizes="420px" className="object-cover" />
                    )}
                    {/* readability overlay */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,10,36,0.20) 0%, rgba(6,10,36,0.08) 36%, rgba(6,10,36,0.62) 72%, rgba(4,8,30,0.94) 100%)" }} />
                    {/* top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ background: l.color }} />

                    {active ? (
                      <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.12 }}
                        className="absolute inset-0 p-6 flex flex-col justify-between z-10"
                      >
                        <div className="flex items-start justify-between">
                          <Flag code={l.flagCode} size={46} rounded="rounded-xl" className="shadow-lg" />
                          {(HERO_TAGS[l.code] ?? l.tag) && <span className="text-[10px] font-black uppercase tracking-wider text-white bg-white/15 border border-white/25 backdrop-blur-sm px-2.5 py-1 rounded-full">{HERO_TAGS[l.code] ?? l.tag}</span>}
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-white leading-none drop-shadow-lg">{l.name}</h3>
                          <p className="text-white/85 text-sm mt-2 leading-relaxed max-w-[15rem]">{HERO_TAGLINES[l.code] ?? l.tagline}</p>
                          <Link href={l.href} className="mt-5 inline-flex items-center gap-1.5 text-white font-bold text-sm hover:gap-2.5 transition-all">
                            View course <ArrowRight size={15} />
                          </Link>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-between py-6 z-10">
                        <Flag code={l.flagCode} size={30} rounded="rounded-lg" />
                        <span className="[writing-mode:vertical-rl] rotate-180 text-white font-bold tracking-wide whitespace-nowrap drop-shadow">{l.name}</span>
                        <span className="w-2 h-2 rounded-full bg-white/85" />
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ── Stat cards ── */}
          <motion.div
            variants={statCardsV}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mt-14"
          >
            {STAT_CARDS.map((s, i) => {
              const glow = s.iconColor === "#3b5bdb" ? "#9bb2ff" : s.iconColor;
              return (
                <motion.div
                  key={s.title}
                  variants={statCardV}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative rounded-2xl px-4 py-7 overflow-hidden flex flex-col items-center text-center gap-4"
                  style={{ background: "#ffffff", border: "1px solid #e6ebf5", boxShadow: "0 1px 2px rgba(16,23,51,0.04), 0 8px 24px rgba(16,23,51,0.06)" }}
                >
                  {/* hover glow wash */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(120% 110% at 50% 0%, ${glow}26 0%, transparent 60%)` }}
                  />

                  {/* circular gradient icon badge + dotted arc trail */}
                  <div className="relative z-10">
                    {/* dotted arc accent */}
                    <svg className="absolute -right-5 -top-1 w-10 h-14 pointer-events-none" viewBox="0 0 40 56" fill="none">
                      <path d="M6 4 A 24 24 0 0 1 6 52" stroke={s.iconColor} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="0.5 6" opacity="0.45" />
                    </svg>
                    <motion.div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(140deg, ${s.iconColor} 0%, ${glow} 100%)`,
                        boxShadow: `0 10px 22px ${s.iconColor}40`,
                      }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.span
                        className="absolute inset-0 rounded-full"
                        style={{ background: s.iconColor }}
                        animate={{ opacity: [0, 0.3, 0], scale: [0.9, 1.4, 0.9] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      />
                      <s.Icon size={24} className="relative z-10 text-white" />
                    </motion.div>
                  </div>

                  <div className="relative z-10 text-sm md:text-[15px] font-black text-ink leading-snug">{s.title}</div>

                  {/* bottom accent bar */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-14 rounded-t-full origin-center"
                    style={{ background: s.iconColor }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7 + i * 0.12, duration: 0.6, ease: "easeOut" }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-royal-300">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════ MARQUEE ══════════════════════ */}
      <section className="py-6 border-y border-line bg-white overflow-hidden">
        <div className="marquee-wrap">
          <div className="marquee-inner gap-8">
            {[...languages, ...languages].map((lang, i) => (
              <span key={i} className="flex items-center gap-2.5 text-muted text-sm font-semibold px-6">
                <Flag code={lang.flagCode} size={22} rounded="rounded" />
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROBLEM → SOLUTION ══════════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />
        <div className="blob blob-sky w-[420px] h-[420px] top-0 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">

          {/* ── centered header ── */}
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-royal-300" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-royal-600">The Real Problem</span>
              <span className="h-px w-8 bg-royal-300" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-ink leading-[1.12]">
              Language fluency alone{" "}
              <span className="gradient-text">won&apos;t get you there.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              Most institutes teach grammar, test vocabulary, and hand you a certificate, but
              never prepare you for a visa interview, a university panel, or a salary negotiation.
              That gap between being <strong className="text-ink font-bold">fluent</strong> and being{" "}
              <strong className="text-ink font-bold">effective</strong> is exactly what ALB was built to close.
            </p>
          </AnimateOnView>

          {/* ── three problem cards ── */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { tag: "Problem 01", title: "Froze in the interview", quote: "I passed my DELF but froze in the visa interview." },
              { tag: "Problem 02", title: "Band 7, still stuck", quote: "My IELTS band is 7 but I can't hold a professional conversation." },
              { tag: "Problem 03", title: "Years in, still hesitant", quote: "I learned French for 2 years but couldn't introduce myself confidently." },
            ].map((c, i) => (
              <StaggerItem key={c.title}>
                <div className="card-feature rounded-2xl p-7 flex flex-col h-full min-h-[330px]">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-rose-500">{c.tag}</span>
                  <h3 className="mt-2 text-xl font-black text-ink leading-snug">{c.title}</h3>
                  <p className="mt-3 text-muted text-sm leading-relaxed italic">&ldquo;{c.quote}&rdquo;</p>

                  {/* decorative visual, animates in on view */}
                  <div className="mt-auto pt-8">
                    {i === 0 && (
                      <svg viewBox="0 0 240 80" className="w-full h-20" fill="none" preserveAspectRatio="none">
                        <motion.polyline
                          points="6,54 46,42 86,20 126,26 166,54 234,68"
                          stroke="#3b5bdb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: "easeInOut" }}
                        />
                        <motion.circle cx="86" cy="20" r="4" fill="#3b5bdb"
                          style={{ transformBox: "fill-box", transformOrigin: "center" }}
                          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                          transition={{ delay: 0.6, type: "spring", stiffness: 320, damping: 16 }}
                        />
                        <motion.circle cx="234" cy="68" r="5" fill="#f43f5e"
                          style={{ transformBox: "fill-box", transformOrigin: "center" }}
                          initial={{ scale: 0 }} whileInView={{ scale: [0, 1.5, 1] }} viewport={{ once: true }}
                          transition={{ delay: 1.05, duration: 0.4 }}
                        />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg viewBox="0 0 240 80" className="w-full h-20">
                        {[30, 46, 62, 42, 54, 32, 20, 14, 18, 10].map((h, idx) => (
                          <motion.rect
                            key={idx} x={idx * 24 + 6} y={72 - h} width="11" height={h} rx="3"
                            fill={idx < 5 ? "#3b5bdb" : "#cdd9f7"}
                            style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
                            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
                          />
                        ))}
                      </svg>
                    )}
                    {i === 2 && (
                      <svg viewBox="0 0 240 80" className="w-full h-20" fill="none">
                        <motion.line
                          x1="16" y1="40" x2="224" y2="40" stroke="#dbe6ff" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round"
                          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeInOut" }}
                        />
                        {[16, 68, 120, 172, 224].map((x, idx) => (
                          <motion.circle
                            key={idx} cx={x} cy="40" r={idx === 4 ? 7 : 6}
                            fill={idx < 4 ? "#3b5bdb" : "#ffffff"} stroke={idx === 4 ? "#9bb2ff" : "none"} strokeWidth="2"
                            style={{ transformBox: "fill-box", transformOrigin: "center" }}
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.12, type: "spring", stiffness: 320, damping: 16 }}
                          />
                        ))}
                      </svg>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* ── solution CTA bar ── */}
          <AnimateOnView className="mt-6">
            <div className="sec-dark rounded-2xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">
              <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
              <p className="relative z-10 text-white/80 text-center md:text-left text-sm md:text-base leading-relaxed max-w-2xl">
                <strong className="text-white font-bold">At ALB, soft skills aren&apos;t an add-on.</strong> They&apos;re woven into
                every programme from day one, so you don&apos;t just learn the language, you own the room in it.
              </p>
              <button onClick={() => openModal()} className="btn-white relative z-10 whitespace-nowrap flex-shrink-0">
                Book a Free Demo <ArrowRight size={15} />
              </button>
            </div>
          </AnimateOnView>

        </div>
      </section>

      {/* ══════════════════════ LANGUAGE CARDS ══════════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] top-0 right-[-8%] opacity-60 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow-pill-blue">Language Programmes</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-ink mt-1 leading-[1.15]">
              Six languages. One world.
              <br />
              <span className="gradient-text inline-block pb-1">Infinite doors.</span>
            </h2>
            <p className="mt-4 text-body text-lg max-w-xl mx-auto leading-relaxed">
              CEFR-aligned, culturally immersive, taught by experts who care about
              your goal, not just curriculum coverage.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {[...languages]
              .sort((a, b) => Number(COMING_SOON.includes(a.code)) - Number(COMING_SOON.includes(b.code)))
              .map((lang) => {
                const comingSoon = COMING_SOON.includes(lang.code);
                const cover = COVER[lang.code];

                const card = (
                  <>
                    {/* dark royal header */}
                    <div
                      className="relative flex items-end justify-between px-6 pt-16 pb-5 min-h-[150px] overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #16276b 0%, #2f49c0 100%)" }}
                    >
                      {cover ? (
                        <>
                          {/* country cover photo */}
                          <Image src={cover} alt="" fill sizes="380px" className="object-cover" />
                          {/* dark wash for legibility */}
                          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(15,24,64,0.92) 0%, rgba(20,31,77,0.55) 50%, rgba(27,42,99,0.25) 100%)" }} />
                        </>
                      ) : (
                        <>
                          {/* faded flag watermark */}
                          <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
                            <Image src={flagSrc[lang.flagCode]} alt="" fill sizes="380px" className="object-cover" />
                          </div>
                          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(22,39,107,0.55) 0%, rgba(47,73,192,0.45) 100%)" }} />
                        </>
                      )}
                      <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                      <h3 className="relative z-10 font-display text-3xl font-semibold text-white tracking-wide leading-none">{lang.name}</h3>
                      <Flag code={lang.flagCode} size={30} rounded="rounded-md" className="relative z-10 shadow-md" />
                    </div>

                    {/* white body */}
                    <div className="p-6 bg-white">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Levels</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {lang.levels.map((l) => (
                          <span key={l} className="text-[11px] font-semibold bg-royal-50 text-royal-700 px-2.5 py-1 rounded-full">{l}</span>
                        ))}
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted mt-5">Prepares For</p>
                      <p className="text-sm text-body mt-1.5">{PREPARES[lang.code] ?? lang.tagline}</p>

                      {!comingSoon && (
                        <div className="flex items-center gap-1.5 mt-5 text-royal-600 font-bold text-sm">
                          View program
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </>
                );

                return (
                  <StaggerItem key={lang.code}>
                    {comingSoon ? (
                      <div className="card relative h-full rounded-2xl overflow-hidden cursor-default select-none">
                        {card}
                        {/* coming-soon overlay */}
                        <div className="absolute inset-0 bg-ink/45 backdrop-blur-[2px] flex items-center justify-center">
                          <span className="px-4 py-2 rounded-full bg-white text-royal-700 font-bold text-sm shadow-lg flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    ) : (
                      <Link href={lang.href} className="card-hover group block h-full rounded-2xl overflow-hidden">
                        {card}
                      </Link>
                    )}
                  </StaggerItem>
                );
              })}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ TRACKS (dark anchor) ══════════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="blob blob-sky w-[460px] h-[460px] top-0 right-[-8%] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-white/25" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Choose Your Track</span>
              <span className="h-px w-8 bg-white/25" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.12]">
              A track built around{" "}
              <span className="gradient-text-light">your goal.</span>
            </h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
              Immigrating, studying abroad, advancing your career, or racing a deadline,
              every programme is shaped around the outcome you actually need.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.09}>
            {TRACKS.map((t, i) => (
              <StaggerItem key={t.title}>
                <div className="group/track h-full rounded-3xl p-7 relative overflow-hidden flex flex-col bg-white shadow-[0_18px_50px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1.5">
                  {/* gradient top edge */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b5bdb] to-[#38bdf8]" />
                  <div className="absolute -top-5 -right-5 opacity-[0.06] pointer-events-none">
                    <MuiIcon name={t.icon} size={130} style={{ color: "#3b5bdb" }} />
                  </div>

                  <span className="relative z-10 inline-flex w-fit items-center gap-1.5 bg-royal-50 border border-royal-100 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-royal-700">
                    <MuiIcon name={t.icon} size={13} style={{ color: "#3b5bdb" }} />
                    Track {i + 1}
                  </span>

                  <h3 className="relative z-10 text-2xl font-black text-ink mt-5 leading-tight">{t.title}</h3>

                  <p className="relative z-10 text-xs text-muted mt-3 leading-relaxed">
                    <span className="font-bold text-ink">Ideal for:</span> {t.ideal}
                  </p>
                  <p className="relative z-10 text-sm text-body mt-3 leading-relaxed">{t.different}</p>

                  <div className="relative z-10 flex flex-wrap gap-1.5 mt-5">
                    {t.exams.map((e) => (
                      <span key={e} className="text-[11px] font-semibold bg-royal-50 border border-royal-100 rounded-lg px-2.5 py-1 text-royal-700">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ WHY ALB ══════════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[460px] h-[460px] top-0 right-0 opacity-40 pointer-events-none" />
        <div className="blob blob-royal w-[380px] h-[380px] bottom-0 left-[-6%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10">

          {/* header */}
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">Why Choose ALB</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-[1.12]">
              Not just a class.{" "}
              <span className="gradient-text">A complete transformation.</span>
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              A methodology honed for Indian learners, outcome-driven, immersive, and
              designed to take you straight to the result that matters most to you.
            </p>
          </AnimateOnView>

          {/* bento grid */}
          <StaggerContainer className="grid lg:grid-cols-3 gap-4 md:gap-5" staggerDelay={0.08}>

            {/* Live interactive, wide */}
            <StaggerItem className="lg:col-span-2">
              <div className="card-hover rounded-2xl p-7 h-full flex flex-col sm:flex-row sm:items-center gap-6 overflow-hidden">
                <div className="flex-1">
                  <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                    <MuiIcon name="chat" size={22} style={{ color: "#3b5bdb" }} />
                  </div>
                  <h3 className="text-lg font-black text-ink">Live interactive learning</h3>
                  <p className="text-muted text-sm mt-1.5 leading-relaxed">
                    3 live sessions a week with a qualified mentor, plus regular speaking practice, never pre-recorded.
                  </p>
                </div>
                {/* session-activity bars */}
                <div className="flex items-end gap-1.5 h-24 sm:w-48 flex-shrink-0">
                  {[44, 68, 54, 84, 50, 74, 38, 62, 80, 46].map((h, idx) => (
                    <motion.span
                      key={idx}
                      className="flex-1 rounded-full"
                      style={{ height: `${h}%`, background: idx % 3 === 1 ? "#0ea5e9" : "#c2d2ff", transformOrigin: "bottom" }}
                      animate={idx % 3 === 1 ? { scaleY: [1, 0.7, 1], opacity: [1, 0.7, 1] } : {}}
                      transition={idx % 3 === 1 ? { duration: 2.2, repeat: Infinity, delay: idx * 0.2, ease: "easeInOut" } : {}}
                    />
                  ))}
                </div>
              </div>
            </StaggerItem>

            {/* Small cohorts */}
            <StaggerItem>
              <div className="card-hover rounded-2xl p-7 h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                  <MuiIcon name="people" size={22} style={{ color: "#3b5bdb" }} />
                </div>
                <h3 className="text-lg font-black text-ink">Small cohorts</h3>
                <p className="text-muted text-sm mt-1.5 leading-relaxed">
                  Real speaking time, real feedback, no hiding at the back of a 60-person class.
                </p>
                <div className="flex items-center -space-x-2 mt-auto pt-5">
                  {["AR", "PK", "SN", "RM"].map((x) => (
                    <div key={x} className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] flex items-center justify-center text-white font-black text-[10px]">{x}</div>
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-royal-50 flex items-center justify-center text-royal-700 font-black text-[10px]">+4</div>
                  <span className="text-xs text-muted font-semibold !ml-3">Min batch size</span>
                </div>
              </div>
            </StaggerItem>

            {/* Goal-certified tracks */}
            <StaggerItem>
              <div className="card-hover rounded-2xl p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                  <MuiIcon name="target" size={22} style={{ color: "#3b5bdb" }} />
                </div>
                <h3 className="text-lg font-black text-ink">Goal-certified tracks</h3>
                <p className="text-muted text-sm mt-1.5 leading-relaxed">
                  Immigration, Academic, Career or Sprint, your path shapes everything from enrolment day.
                </p>
              </div>
            </StaggerItem>

            {/* International exam prep */}
            <StaggerItem>
              <div className="card-hover rounded-2xl p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                  <MuiIcon name="article" size={22} style={{ color: "#3b5bdb" }} />
                </div>
                <h3 className="text-lg font-black text-ink">International exam prep included</h3>
                <p className="text-muted text-sm mt-1.5 leading-relaxed">
                  DELF, IELTS and Goethe prep built into the curriculum. No bolt-on fees.
                </p>
              </div>
            </StaggerItem>

            {/* Soft skills */}
            <StaggerItem>
              <div className="card-hover rounded-2xl p-7 h-full">
                <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center mb-3">
                  <MuiIcon name="sparkle" size={22} style={{ color: "#3b5bdb" }} />
                </div>
                <h3 className="text-lg font-black text-ink">Soft skills in every batch</h3>
                <p className="text-muted text-sm mt-1.5 leading-relaxed">
                  Confidence, communication, and professional presence, not optional. Built in.
                </p>
              </div>
            </StaggerItem>

            {/* Dedicated speaking sessions, full width */}
            <StaggerItem className="lg:col-span-3">
              <div className="card-hover relative overflow-hidden rounded-2xl p-7 h-full flex flex-col md:flex-row md:items-center gap-8">
                {/* soft accent wash */}
                <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(109,139,255,0.10) 0%, transparent 70%)" }} />

                <div className="relative md:max-w-sm">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #3b5bdb 0%, #6d8bff 100%)", boxShadow: "0 10px 22px rgba(59,91,219,0.32)" }}>
                    <MuiIcon name="teacher" size={24} style={{ color: "#ffffff" }} />
                  </div>
                  <h3 className="text-xl font-black text-ink">Dedicated speaking sessions</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">
                    Real conversation practice is built into every level, because reading about a language and speaking it are two different things.
                  </p>
                </div>

                {/* step flow */}
                <div className="relative flex-1 flex flex-wrap items-center gap-y-3">
                  {["Listen", "Respond", "Get corrected", "Speak with confidence"].map((c, idx, arr) => {
                    const last = idx === arr.length - 1;
                    return (
                      <div key={c} className="flex items-center">
                        <div
                          className={`flex items-center gap-2.5 rounded-xl pl-2 pr-4 py-2 text-sm font-bold whitespace-nowrap transition-transform hover:-translate-y-0.5 ${last ? "text-white shadow-lg" : "bg-white border border-royal-100 text-royal-700 shadow-sm"}`}
                          style={last ? { background: "linear-gradient(135deg, #3b5bdb 0%, #6d8bff 100%)", boxShadow: "0 8px 20px rgba(59,91,219,0.30)" } : undefined}
                        >
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black ${last ? "bg-white/25 text-white" : "bg-royal-50 text-royal-600"}`}>
                            {idx + 1}
                          </span>
                          {c}
                        </div>
                        {idx < arr.length - 1 && <ArrowRight size={16} className="text-royal-300 mx-1.5 md:mx-2.5 hidden sm:block flex-shrink-0" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════ +BEYOND (dark anchor) ══════════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-sky w-[520px] h-[320px] bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <span className="eyebrow-pill-light">+Beyond Programmes</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-1">
              Language opens the door.
              <br />
              <span className="gradient-text-light">Soft skills own the room.</span>
            </h2>
            <p className="mt-4 text-white/55 max-w-xl mx-auto">
              Public Speaking, Business Communication, Leadership, Personality Development
             , standalone or bundled with any language course.
            </p>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 text-left" staggerDelay={0.07}>
            {[
              { icon: "mic",     title: "Public Speaking",         desc: "Command any room, from 5-person meetings to 500-seat stages.",         from: "#3b5bdb", to: "#6d8bff" },
              { icon: "work",    title: "Business Communication",  desc: "Write sharper emails, lead better meetings, negotiate with clarity.",   from: "#7c3aed", to: "#a855f7" },
              { icon: "sparkle", title: "Personality Development", desc: "Executive presence, EQ, and authentic confidence, built systematically.", from: "#0ea5e9", to: "#38bdf8" },
              { icon: "stars",   title: "Leadership Presence",     desc: "Inspire teams and communicate vision at every level.",                  from: "#10b981", to: "#34d399" },
              { icon: "target",  title: "Interview Mastery",       desc: "Crack MNC, MBA, visa, and scholarship interviews with confidence.",      from: "#f59e0b", to: "#fbbf24" },
              { icon: "globe",   title: "Cross-Cultural Comm.",    desc: "Navigate global workplaces and cultures with ease and empathy.",         from: "#6d28d9", to: "#8b5cf6" },
            ].map((m, i) => (
              <StaggerItem key={m.title}>
                <div className="card-dark-hover rounded-2xl p-6 h-full relative overflow-hidden">
                  <span className="absolute top-3 right-5 text-5xl font-black text-white/[0.06] select-none leading-none pointer-events-none">{String(i + 1).padStart(2, "0")}</span>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative z-10"
                    style={{ background: `linear-gradient(135deg, ${m.from}, ${m.to})`, boxShadow: `0 6px 18px ${m.from}55` }}
                  >
                    <MuiIcon name={m.icon} size={22} style={{ color: "#ffffff" }} />
                  </div>
                  <h3 className="text-white font-bold text-base relative z-10">{m.title}</h3>
                  <p className="text-white/50 text-sm mt-1.5 leading-relaxed relative z-10">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnView className="mt-10">
            <Link href="/soft-skills-training-online" className="btn-white">
              Explore +Beyond <ArrowRight size={15} />
            </Link>
            <p className="mt-4 text-white/40 text-xs flex items-center justify-center gap-1.5">
              <Shield size={12} /> Standalone or bundled with any language course.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] bottom-[-10%] left-[-6%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow-pill-blue">Learner Stories</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-1">
              Real results from <span className="gradient-text">real people.</span>
            </h2>
          </AnimateOnView>
        </div>

        {/* infinite review marquee (pauses on hover) */}
        <div className="reviews-mask relative z-10 -mx-5 md:-mx-8 lg:-mx-10 marquee-wrap [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
          <div className="reviews-track py-2">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="card relative overflow-hidden rounded-3xl p-7 md:p-8 flex flex-col shrink-0 w-[340px] sm:w-[430px] whitespace-normal"
              >
                <span className="absolute -bottom-10 right-3 font-display text-[9rem] leading-none text-royal-50 select-none pointer-events-none">&rdquo;</span>

                {/* top: opening quote + author pill */}
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <span className="font-display text-6xl leading-[0.6] text-royal-200 select-none">&ldquo;</span>
                  <div className="inline-flex items-center gap-2.5 bg-royal-50 border border-royal-100 rounded-2xl px-4 py-2">
                    <div className="min-w-0 text-right">
                      <p className="text-ink font-bold text-sm leading-tight">{t.name}</p>
                      <p className="text-muted text-xs leading-tight">{t.course}</p>
                    </div>
                  </div>
                </div>

                {/* quote */}
                <p className="relative z-10 mt-5 text-ink text-sm md:text-[15px] font-medium leading-relaxed flex-1 line-clamp-[9]">{t.quote}</p>

                {/* divider */}
                <div className="relative z-10 mt-6 h-0.5 w-16 rounded-full bg-royal-200" />

                {/* stars */}
                <div className="relative z-10 flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((j) => <Star key={j} size={16} className="text-amber-400 fill-amber-400" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ INSTRUCTORS ══════════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        {/* perspective grids — mirrored ceiling (top) + floor (bottom) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:700px]">
          {/* ceiling grid (top) */}
          <div
            className="absolute top-0 left-1/2 h-[72%] w-[220%] -translate-x-1/2 origin-top"
            style={{
              transform: "rotateX(-64deg)",
              backgroundImage:
                "linear-gradient(to right, rgba(59,91,219,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,91,219,0.16) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85), transparent 70%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85), transparent 70%)",
            }}
          />
          {/* floor grid (bottom) */}
          <div
            className="absolute bottom-0 left-1/2 h-[72%] w-[220%] -translate-x-1/2 origin-bottom"
            style={{
              transform: "rotateX(64deg)",
              backgroundImage:
                "linear-gradient(to right, rgba(59,91,219,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,91,219,0.16) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "linear-gradient(to top, rgba(0,0,0,0.85), transparent 70%)",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.85), transparent 70%)",
            }}
          />
        </div>
        <div className="blob blob-royal w-[440px] h-[440px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="blob blob-sky w-[380px] h-[380px] bottom-0 left-[-6%] opacity-30 pointer-events-none" />

        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-royal-300" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-royal-600">Meet the Instructors</span>
              <span className="h-px w-8 bg-royal-300" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-ink leading-[1.12]">
              <span className="gradient-text inline-block mr-3">Learn</span>from India&apos;s best mentors
            </h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              In today&apos;s competitive world, you need industry-relevant skills taught by certified,
              exam-trained faculty who&apos;ve guided thousands to their goal.
            </p>
          </AnimateOnView>

          {/* instructor slider */}
          <AnimateOnView className="relative max-w-6xl mx-auto px-2 sm:px-0">
            {/* prev / next buttons */}
            <button
              type="button"
              onClick={() => scrollTrainers(-1)}
              aria-label="Previous instructors"
              className="hidden sm:flex absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-line shadow-lg items-center justify-center text-ink hover:bg-royal-50 hover:text-royal-700 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollTrainers(1)}
              aria-label="Next instructors"
              className="hidden sm:flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-line shadow-lg items-center justify-center text-ink hover:bg-royal-50 hover:text-royal-700 transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            <div
              ref={trainerScroll}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {ALL_TRAINERS.map((m, i) => {
                const c = TRAINER_COLORS[i % TRAINER_COLORS.length];
                return (
                  <div
                    key={m.name}
                    className="group flex-shrink-0 w-[270px] h-[380px] snap-start [perspective:1600px]"
                  >
                    <div className="relative h-full w-full transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* ── FRONT: photo + name ── */}
                      <div
                        className="absolute inset-0 [backface-visibility:hidden] group-hover:pointer-events-none rounded-3xl overflow-hidden"
                        style={{ background: `linear-gradient(160deg, ${c.from}, ${c.to})` }}
                      >
                        <Image
                          src={encodeURI(m.img)}
                          alt={m.name}
                          fill
                          sizes="270px"
                          className="object-cover object-top"
                        />
                        {/* readability gradient */}
                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,10,36,0.04) 38%, rgba(6,10,36,0.55) 72%, rgba(5,8,30,0.94) 100%)" }} />
                        {/* experience */}
                        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-[11px] font-bold text-ink shadow-sm">
                          {m.exp.split("·")[0].trim()}
                        </span>
                        {/* name + role */}
                        <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                          <h3 className="text-white font-black text-lg leading-tight drop-shadow">{m.name}</h3>
                          <p className="text-white/70 text-xs mt-1 leading-snug">{m.role}</p>
                        </div>
                      </div>

                      {/* ── BACK: details ── */}
                      <div
                        className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] pointer-events-none group-hover:pointer-events-auto rounded-3xl overflow-hidden p-5 flex flex-col"
                        style={{ background: "linear-gradient(160deg, #16203f 0%, #0a0f24 100%)" }}
                      >
                        <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
                        {/* accent glow + top line in the mentor's colour */}
                        <span className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: c.from }} />
                        <span className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${c.from}, transparent)` }} />
                        <div className="relative z-10 flex flex-col h-full">
                          <h3 className="text-white font-black text-base leading-tight">{m.name}</h3>
                          <p className="text-white/60 text-[11px] mt-0.5 leading-snug">{m.role}</p>
                          <div className="h-px bg-white/15 my-3" />
                          <div className="space-y-2.5">
                            {[
                              { k: "Experience", v: m.exp },
                              { k: "Qualification", v: m.qual },
                              { k: "Specialization", v: m.spec },
                            ].map((d) => (
                              <div key={d.k}>
                                <p className="text-white/40 text-[9.5px] font-bold uppercase tracking-wider">{d.k}</p>
                                <p className="text-white/90 text-[12px] font-semibold leading-snug mt-0.5">{d.v}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-auto pt-3">
                            <p className="text-white/55 text-[11px] italic leading-snug">{m.tagline}</p>
                            {m.linkedin && (
                              <a
                                href={m.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-1.5 text-white text-[11px] font-bold rounded-full px-3 py-1.5 transition-transform hover:-translate-y-0.5"
                                style={{ background: c.from }}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg> Connect
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════════ CREDENTIALS (dark anchor) ══════════════════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-sky w-[480px] h-[480px] top-0 right-[-10%] pointer-events-none" />
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] pointer-events-none" />

        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-light">What You Earn</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-1 leading-[1.12]">
              Every level ends in{" "}
              <span className="gradient-text-light">a credential.</span>
            </h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
              Unlike platforms that hand you streaks and badges, ALB issues verifiable,
              CEFR-aligned certificates at the end of every module, while preparing you for
              internationally recognised exams accepted by universities, embassies, and employers worldwide.
            </p>
          </AnimateOnView>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">

            {/* certificate visual */}
            <AnimateOnView direction="left" className="lg:order-2">
              <div className="relative">
                <div className="blob blob-sky w-[420px] h-[320px] inset-0 m-auto pointer-events-none" />
                <motion.div
                  className="relative rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ rotate: -1.5, scale: 1.02 }}
                >
                  <Image src="/images/certificate/Alb-certificate.png" alt="ALB Level Certificate" width={1536} height={1024} className="w-full h-auto" />
                </motion.div>
                {/* floating verified badge */}
                <motion.div
                  className="absolute -bottom-4 -right-3 bg-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <CheckCircle className="text-royal-600" size={18} />
                  <div>
                    <p className="text-ink font-bold text-xs leading-tight">Verifiable</p>
                    <p className="text-muted text-[10px] leading-tight">Shareable on LinkedIn</p>
                  </div>
                </motion.div>
              </div>
            </AnimateOnView>

            {/* credential type cards */}
            <AnimateOnView direction="right" className="space-y-4 lg:order-1">
              <div className="card-dark-hover rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <MuiIcon name="grade" size={22} style={{ color: "#7dd3fc" }} />
                  </div>
                  <h3 className="text-white font-black text-lg">ALB Level Certificate</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["CEFR level", "Exam-readiness score", "Can-do statements"].map((c) => (
                    <span key={c} className="text-xs font-semibold bg-white/10 border border-white/15 text-white/85 px-2.5 py-1 rounded-lg">{c}</span>
                  ))}
                </div>
                <p className="text-white/55 text-sm mt-4 leading-relaxed">Verifiable and shareable on LinkedIn, proof of exactly what you can do.</p>
              </div>

              <div className="card-dark-hover rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                    <MuiIcon name="globe" size={22} style={{ color: "#9bb2ff" }} />
                  </div>
                  <h3 className="text-white font-black text-lg">International Exams</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["DELF", "DALF", "TEF Canada", "TCF Canada", "Goethe-Zertifikat", "TestDaF", "IELTS", "PTE", "TOEFL"].map((c) => (
                    <span key={c} className="text-xs font-semibold bg-white/10 border border-white/15 text-white/85 px-2.5 py-1 rounded-lg">{c}</span>
                  ))}
                </div>
                <p className="text-white/55 text-sm mt-4 leading-relaxed">Accepted by universities, embassies, and employers worldwide.</p>
              </div>
            </AnimateOnView>
          </div>

          {/* exam logo / trust strip */}
          <AnimateOnView className="mt-14 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Prepares you for exams recognised worldwide</p>
            <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.05}>
              {["DELF", "DALF", "TEF Canada", "TCF Canada", "Goethe-Institut", "TestDaF", "IELTS", "PTE", "TOEFL"].map((b) => (
                <StaggerItem key={b}>
                  <div className="glass-light rounded-xl px-4 py-2.5 text-white/85 font-bold text-sm tracking-wide hover:bg-white/15 transition-colors">
                    {b}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════════════════ YOUR JOURNEY ══════════════════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[440px] h-[440px] top-10 right-[-8%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-royal-300" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-royal-600">The ALB Path</span>
              <span className="h-px w-8 bg-royal-300" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-ink leading-tight">
              Your journey{" "}
              <span className="gradient-text">with us<span className="text-sky-500">.</span></span>
            </h2>
          </AnimateOnView>

          <div className="relative mt-10">

            {/* ── desktop: wave with nodes sitting on the curve ── */}
            <div className="hidden lg:block relative" style={{ height: 500 }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 500" fill="none" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="journeyGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3b5bdb" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,230 C75,170 110,170 150,170 C300,170 320,330 450,330 C600,330 620,170 750,170 C900,170 920,330 1050,330 C1120,330 1160,290 1200,290"
                  stroke="#e6ebf5"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <motion.path
                  id="journeyLine"
                  d="M0,230 C75,170 110,170 150,170 C300,170 320,330 450,330 C600,330 620,170 750,170 C900,170 920,330 1050,330 C1120,330 1160,290 1200,290"
                  stroke="url(#journeyGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
                <circle r="7" fill="#0ea5e9" style={{ filter: "drop-shadow(0 0 7px rgba(14,165,233,0.9))" }}>
                  <animateMotion dur="6s" repeatCount="indefinite">
                    <mpath href="#journeyLine" />
                  </animateMotion>
                </circle>
              </svg>

              {JOURNEY.map((s, i) => {
                const high = i % 2 === 0;
                const y = high ? 170 : 330;
                return (
                  <div key={s.n} className="absolute inset-y-0" style={{ left: `${i * 25}%`, width: "25%" }}>
                    {/* watermark number, under the icon (high) / above the icon (low) */}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 text-[6.5rem] font-black text-royal-100 select-none leading-none pointer-events-none z-0"
                      style={{ top: high ? y + 44 : y - 148 }}
                    >
                      {s.n}
                    </span>

                    {/* hexagon node centred on the curve */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
                      style={{ top: y }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.12 + 0.35 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-royal-400/30 blur-md" />
                      <div className="absolute -inset-[2px]" style={{ background: "#c2d2ff", clipPath: HEX }} />
                      <div className="absolute inset-0 bg-white flex items-center justify-center" style={{ clipPath: HEX }}>
                        <MuiIcon name={s.icon} size={26} style={{ color: "#3b5bdb" }} />
                      </div>
                    </motion.div>

                    {/* text above (high) or below (low) the node */}
                    <div className="absolute left-0 right-0 px-3 text-center" style={high ? { bottom: 378 } : { top: 378 }}>
                      <h3 className="font-black text-ink text-lg">{s.title}</h3>
                      <p className="mt-2 text-muted text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── mobile / tablet: stacked ── */}
            <StaggerContainer className="lg:hidden grid sm:grid-cols-2 gap-x-6 gap-y-12 mt-2" staggerDelay={0.1}>
              {JOURNEY.map((s) => (
                <StaggerItem key={s.n} className="text-center relative">
                  <span className="absolute left-1/2 -translate-x-1/2 -top-6 text-[5rem] font-black text-royal-50 select-none leading-none pointer-events-none">{s.n}</span>
                  <div className="relative z-10 mx-auto w-16 h-16">
                    <div className="absolute inset-0 rounded-full bg-royal-400/30 blur-md" />
                    <div className="absolute -inset-[2px]" style={{ background: "#c2d2ff", clipPath: HEX }} />
                    <div className="absolute inset-0 bg-white flex items-center justify-center" style={{ clipPath: HEX }}>
                      <MuiIcon name={s.icon} size={26} style={{ color: "#3b5bdb" }} />
                    </div>
                  </div>
                  <h3 className="relative z-10 mt-4 font-black text-ink text-lg">{s.title}</h3>
                  <p className="relative z-10 mt-2 text-muted text-sm leading-relaxed max-w-[280px] mx-auto">{s.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FAQ ══════════════════════ */}
      <JsonLd data={faqSchema(faqs)} />
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <AnimateOnView direction="right" className="lg:sticky lg:top-28">
              <span className="eyebrow">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-1">
                Got questions?
                <br />
                <span className="gradient-text">We&apos;ve got answers.</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed text-sm">
                Still curious? Book a free 30-minute counselling call, no commitment.
              </p>
              <a href="https://wa.me/919821275843" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
                WhatsApp Us <ArrowRight size={15} />
              </a>
            </AnimateOnView>

            <AnimateOnView direction="left" className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-royal-50/50 transition-colors"
                  >
                    <span className="font-semibold text-ink text-sm pr-4">{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0 text-royal-400">
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 text-body text-sm leading-relaxed border-t border-line pt-4">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </AnimateOnView>
          </div>
        </div>
      </section>

    </div>
  );
}
