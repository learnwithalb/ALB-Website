"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Languages,
  MapPin,
  MessageCircle,
  Mic2,
  Plane,
  Play,
  Sprout,
  Target,
  FileText,
  Monitor,
  Users,
  Video,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { useBooking } from "@/components/shared/BookingContext";

/* ─────────────── data ─────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const faqs = [
  ["TEF Canada or TCF Canada: which should I take?", "Both are accepted for Canadian immigration purposes when the applicable requirements are met. They differ in format and task types. We help you understand the exams and prepare for the one that fits your plan; confirm current requirements with IRCC before choosing."],
  ["Can I join as a complete beginner?", "Yes. Start at A1 and build your foundations before moving into exam preparation."],
  ["How long does preparation take?", "It depends on your starting level, target, study time and the score you need. We assess your current French and help map a realistic learning path."],
  ["Are classes online?", "Yes. Classes are live online, with trainer interaction, guided practice and feedback."],
  ["What are the class timings?", "Timings depend on the current batch schedule. Book a free demo and our team can share suitable options."],
  ["What does NCLC 7 mean?", "NCLC 7 is a Canadian language benchmark level. For the French-language proficiency category in Express Entry, the current requirement includes NCLC 7 in all four French abilities, subject to other applicable criteria."],
  ["Does ALB register me for the exam?", "ALB prepares learners for TEF Canada and TCF Canada. Exam registration is handled with the official exam provider; fees are separate."],
  ["Will learning French guarantee PR or an invitation?", "No. French study or a test score does not guarantee permanent residence, an invitation or any immigration outcome. Eligibility and selection depend on your individual profile and current IRCC requirements."],
];

// French learner videos (YouTube Shorts) from the success stories page.
const videoStories = [
  { id: "cOCET-r7ZBs", name: "Jasmeet", title: "Jasmeet's France Admission Success Story", caption: "Her France admission success story.", tag: "France Admission" },
  { id: "fpAK_nXI7AY", name: "Neha", title: "Neha's Canada PR Journey with ALB's Sprint Track", caption: "Her Canada PR journey with ALB's Sprint Track.", tag: "Canada PR" },
  { id: "ibmz8qFM4y0", name: "Tanishk", title: "Tanishk Completes A1 French with Academy of Languages and Beyond", caption: "Completed A1 French with ALB.", tag: "A1 Complete" },
  { id: "l9zL8_Olw1g", name: "Dishant", title: "Dishant's Journey on French Sprint Track | TEF Prep for Canada PR", caption: "French Sprint Track and TEF prep for Canada PR.", tag: "TEF Prep" },
  { id: "qn8nEVg2jnI", name: "Sagarika", title: "Sagarika achieving CLB 7+ for Canada PR with ALB's French Sprint Track", caption: "Achieving CLB 7+ for Canada PR with the Sprint Track.", tag: "CLB 7+" },
  { id: "ZQ6KzcxhGSU", name: "Gaurav", title: "Gaurav's Review on Learning French While Working Full-Time", caption: "Learning French while working full-time.", tag: "Working Professional" },
  { id: "CaVjCYreDog", name: "Manmeet", title: "Manmeet's Review on French Career Track | Learning French for Business Growth", caption: "French Career Track for business growth.", tag: "Career Track" },
  { id: "tfIEqrVO8cY", name: "Mrunal", title: "How Mrunal improved her business communication with French clients", caption: "Better business communication with French clients.", tag: "Business French" },
  { id: "pyQhGEPL_wQ", name: "Shubham", title: "Shubham's Review on Relearning French | Building Consistency", caption: "Relearning French and building consistency.", tag: "Relearning French" },
  { id: "takWPxrE6E8", name: "Shubham", title: "How Shubham gained Confidence after joining Academy of Languages and Beyond", caption: "Gaining confidence after joining ALB.", tag: "Confidence" },
];

const audiences: { title: string; desc: string; cta: string; level: string; Icon: LucideIcon; tint: string; color: string }[] = [
  { title: "I’m starting from zero", desc: "Build your French foundation from A1 upwards.", cta: "Start here", level: "Beginner", Icon: Sprout, tint: "#e7f5ec", color: "#2f855a" },
  { title: "I already know French", desc: "Skip what you already know. Focus on the gaps holding your progress back.", cta: "Find my level", level: "Intermediate", Icon: BookOpen, tint: "#e3f4f4", color: "#0f766e" },
  { title: "My exam is the priority", desc: "Get focused TEF / TCF Canada preparation with structured practice.", cta: "Prepare for my exam", level: "Exam ready", Icon: Target, tint: "#fdecec", color: "#dc2626" },
];

const journey: [LucideIcon, string, string, string][] = [
  [MapPin, "India", "Your ambition starts here", "/images/journey-india-gateway.png"],
  [Languages, "Learn French", "Build your language skills", "/images/journey-learn-french.png"],
  [Award, "TEF / TCF", "Get certified with confidence", "/images/journey-tef-tcf.png"],
  [Plane, "Canada plan", "A stronger profile, more opportunities", "/images/journey-canada.png"],
];

const frictions: [LucideIcon, string][] = [
  [MessageCircle, "I understand French… but I can’t speak."],
  [Headphones, "I don’t know if I’m actually ready for TEF."],
  [BookOpen, "I don’t want to spend months learning the wrong things."],
  [Target, "I don’t know what score I should be targeting."],
];

const pathSteps = [
  ["01", "Assess", "Find your current level."],
  ["02", "Build", "Strengthen grammar, vocabulary and fundamentals."],
  ["03", "Speak", "Real conversation, correction and confidence."],
  ["04", "Practise", "Listening, reading, speaking and writing."],
  ["05", "Prepare", "TEF / TCF-focused preparation."],
  ["06", "Test ready", "Know where you stand before the exam."],
];

const levels = ["A1", "A2", "B1", "B2", "TEF / TCF"];

const features: [LucideIcon, string, string][] = [
  [Video, "Live classes", "Real teachers. Real conversations."],
  [Users, "Small batches", "More attention. Faster progress."],
  [Mic2, "Speaking practice", "Build confidence. Speak naturally."],
  [Check, "Personal guidance", "Feedback shaped around your goals."],
];

const skills: [string, number][] = [["Listening", 78], ["Speaking", 62], ["Reading", 71], ["Writing", 58]];

const comparison = [
  ["Know your current level", "Guesswork", "Guided assessment"],
  ["Practise speaking regularly", "Hard to stay consistent", "Live speaking practice"],
  ["Know what to improve", "Search across resources", "Trainer feedback and writing correction"],
  ["Prepare for TEF / TCF", "Build your own plan", "Structured exam practice and mock tests"],
];


/* ─────────────── small pieces ─────────────── */

function CountUp({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration, ease: EASE, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to, duration]);

  return <span ref={ref}>{value}</span>;
}

// Ring that fills to NCLC 7 of 12 when scrolled into view.
function SkillRing({ label, delay }: { label: string; delay: number }) {
  const r = 26;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
          <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="5" />
          <motion.circle
            cx="32" cy="32" r={r} fill="none" stroke="url(#ring-grad)" strokeWidth="5" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 7 / 12 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay, ease: EASE }}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-white font-black text-lg">7</span>
      </div>
      <span className="text-[11px] font-bold uppercase tracking-wider text-white/60">{label}</span>
    </div>
  );
}

function SectionHead({ eyebrow, title, lead, light, center }: { eyebrow: string; title: React.ReactNode; lead?: string; light?: boolean; center?: boolean }) {
  return (
    <AnimateOnView className={center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <span className={light ? "eyebrow-pill-light" : "eyebrow-pill-outline"}>{eyebrow}</span>
      <h2 className={`text-3xl md:text-5xl font-black mt-4 leading-[1.1] ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {lead && <p className={`mt-4 text-base md:text-lg ${light ? "text-white/70" : "text-body"}`}>{lead}</p>}
    </AnimateOnView>
  );
}

type Audience = (typeof audiences)[number];

// "Which one are you?" card: flips up on entry, cursor-following glow on hover.
function AudienceCard({ a, index, onBook }: { a: Audience; index: number; onBook: () => void }) {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const glow = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, ${a.tint}, transparent 72%)`;
  const { Icon } = a;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50, rotateX: 22 },
        visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: EASE } },
      }}
      className="h-full"
    >
      <motion.article
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(e.clientX - r.left);
          my.set(e.clientY - r.top);
        }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="group relative h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-line p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift"
      >
        {/* cursor spotlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />
        {/* accent bar */}
        <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: a.color }} />
        {/* big step number */}
        <span aria-hidden className="pointer-events-none select-none absolute -right-1 -top-5 text-[120px] font-black leading-none text-ink/[0.04] transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-1">
          0{index + 1}
        </span>

        <div className="relative flex items-center justify-between">
          <span className="relative grid place-items-center w-14 h-14 rounded-2xl" style={{ background: a.tint, color: a.color }}>
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
            >
              <Icon size={26} />
            </motion.span>
            <span aria-hidden className="absolute inset-0 rounded-2xl border-2 opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" style={{ borderColor: a.color }} />
          </span>
          <span className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider" style={{ background: a.tint, color: a.color }}>
            {a.level}
          </span>
        </div>

        <h3 className="relative mt-6 text-xl font-black text-ink">{a.title}</h3>
        <p className="relative mt-2 flex-1 text-sm text-muted leading-relaxed">{a.desc}</p>

        <button
          onClick={onBook}
          className="relative mt-6 self-start overflow-hidden inline-flex items-center gap-2 rounded-full bg-royal-950 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white"
        >
          <span aria-hidden className="absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" style={{ background: a.color }} />
          <span className="relative">{a.cta}</span>
          <ArrowRight size={14} className="relative transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </motion.article>
    </motion.div>
  );
}

/* ─────────────── page ─────────────── */

export default function CanadaFrenchLandingPage() {
  const { openModal } = useBooking();
  const book = () => openModal("Canada French — Free Demo");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [playingStory, setPlayingStory] = useState<string | null>(null);

  // Video story scroller: arrow buttons, edge state and progress bar
  const storyTrackRef = useRef<HTMLDivElement>(null);
  const [storyEdges, setStoryEdges] = useState({ atStart: true, atEnd: false });
  const { scrollXProgress: storyProgress } = useScroll({ container: storyTrackRef });
  const updateStoryEdges = () => {
    const el = storyTrackRef.current;
    if (!el) return;
    setStoryEdges({ atStart: el.scrollLeft <= 4, atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };
  const scrollStories = (dir: number) => {
    const el = storyTrackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  useEffect(() => {
    updateStoryEdges();
    window.addEventListener("resize", updateStoryEdges);
    return () => window.removeEventListener("resize", updateStoryEdges);
  }, []);

  // Hero image parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(heroProgress, [0, 1], [0, 60]);
  const heroImgScale = useTransform(heroProgress, [0, 1], [1.05, 1.12]);

  // Journey + learning-path lines draw as you scroll through them
  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: journeyProgress } = useScroll({ target: journeyRef, offset: ["start 85%", "center 45%"] });
  const journeyLine = useSpring(journeyProgress, { stiffness: 120, damping: 30 });

  const pathRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pathProgress } = useScroll({ target: pathRef, offset: ["start 80%", "end 55%"] });
  const pathLine = useSpring(pathProgress, { stiffness: 120, damping: 30 });

  const headline = ["Your Canada Plan", "Could Start With"];

  return (
    <MotionConfig reducedMotion="user">
      <div className="overflow-x-clip bg-white">
        {/* ══════════════ HERO ══════════════ */}
        <section ref={heroRef} className="relative hero-light overflow-hidden pt-28 lg:pt-28 pb-14 lg:pb-12 px-5 md:px-10">
          <motion.div
            className="blob blob-royal w-[520px] h-[520px] -top-40 -right-32"
            animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container-max relative">
            {/* top row: headline + copy/CTA */}
            <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-end">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="inline-block rounded-full bg-royal-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink"
                >
                  French for your Canada journey
                </motion.span>

                <h1 className="mt-5 text-[44px] leading-[1] sm:text-6xl lg:text-[clamp(52px,min(5.6vw,8svh),84px)] font-black text-ink tracking-tight">
                  {headline.map((line, i) => (
                    <span key={line} className="block overflow-hidden pb-1">
                      <motion.span
                        className="block"
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: EASE }}
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                  <span className="block overflow-hidden pb-4">
                    <motion.span
                      className="relative inline-block text-royal-500"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
                    >
                      French.
                      <svg className="absolute left-[18%] -bottom-3 w-[105%] h-5" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden>
                        <motion.path
                          d="M2 17 C 60 6, 130 2, 198 6"
                          fill="none" stroke="#6d8bff" strokeWidth="4" strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.9, delay: 1, ease: EASE }}
                        />
                      </svg>
                    </motion.span>
                  </span>
                </h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                className="lg:pb-6"
              >
                <p className="max-w-md text-lg text-body leading-relaxed">
                  Build the French skills you need for TEF Canada or TCF Canada — and work towards the score your Canada journey demands.
                </p>
                <button
                  onClick={book}
                  className="group mt-7 inline-flex items-center gap-5 rounded-full bg-royal-950 pl-8 pr-2 py-2 text-lg font-bold text-white shadow-lift transition-colors hover:bg-royal-800"
                >
                  Check My French Level
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-white text-royal-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45">
                    <ArrowRight size={20} />
                  </span>
                </button>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.9 } } }}
                  className="mt-6 flex flex-wrap gap-x-6 gap-y-3"
                >
                  {([[Video, "Live Classes"], [Users, "Small Batches"], [Award, "Expert Guidance"]] as [LucideIcon, string][]).map(([Icon, label]) => (
                    <motion.span
                      key={label}
                      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } } }}
                      className="inline-flex items-center gap-2 text-sm text-ink"
                    >
                      <Icon size={22} strokeWidth={1.6} /> {label}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* bottom row: three showcase cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
              className="mt-10 lg:mt-8 grid md:grid-cols-2 lg:grid-cols-[2.1fr_.62fr_.6fr] lg:h-[clamp(340px,44svh,480px)] gap-4"
            >
              {/* main card */}
              <motion.article
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }}
                className="group relative md:col-span-2 lg:col-span-1 min-h-[480px] lg:min-h-0 rounded-3xl overflow-hidden shadow-lift"
              >
                <motion.div className="absolute inset-0" style={{ y: heroImgY, scale: heroImgScale }}>
                  <Image
                    src="/images/canada-french-hero.png"
                    alt="Learners studying French in a Toronto café"
                    fill
                    priority
                    sizes="(max-width:1024px) 92vw, 820px"
                    className="object-cover object-[72%_center] transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                </motion.div>
                {/* darken only where the copy sits so the photo stays bright */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1747]/90 via-[#0a1747]/60 to-[#0a1747]/90 md:bg-gradient-to-r md:from-[#0a1747]/90 md:via-[#0a1747]/40 md:to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 hidden md:block bg-gradient-to-t from-[#0a1747]/80 to-transparent" />

                {/* floating exam badge over the photo */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                  transition={{ opacity: { delay: 1.1 }, x: { delay: 1.1, duration: 0.6 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                  className="absolute top-6 right-6 hidden md:flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 pl-2 pr-4 py-2 text-white shadow-lift"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-white text-royal-600"><Target size={18} /></span>
                  <span className="text-xs leading-tight text-white/80">
                    <b className="block text-sm text-white">TEF / TCF Canada</b>
                    Focused exam prep
                  </span>
                </motion.div>

                <div className="relative h-full flex flex-col justify-between gap-6 p-6 md:p-9 lg:p-[clamp(20px,3svh,36px)]">
                  <div className="max-w-lg">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-300" /> Canada French programme
                    </span>
                    <h2 className="mt-4 text-3xl md:text-[42px] lg:text-[clamp(28px,4.4svh,42px)] font-black leading-[1.06] text-white">
                      Study French for Your <span className="text-sky-300">Canada Goals</span>
                    </h2>
                    <p className="mt-4 max-w-md text-white/85 md:text-lg leading-snug">
                      From foundational French to TEF/TCF preparation — a structured, mentor-led path to help you study, work, and settle in Canada.
                    </p>
                  </div>

                  {/* level track + CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                    <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3.5 sm:min-w-[340px]">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Your path</p>
                      <div className="relative mt-3">
                        <div className="absolute inset-x-2 top-1/2 h-0.5 -translate-y-1/2 bg-white/20" />
                        <motion.div
                          className="absolute inset-x-2 top-1/2 h-0.5 -translate-y-1/2 origin-left"
                          style={{ background: "linear-gradient(90deg,#9bb2ff,#7dd3fc)" }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1.4, delay: 1.2, ease: EASE }}
                        />
                        <div className="relative flex justify-between gap-2">
                          {levels.map((lvl, i) => (
                            <motion.span
                              key={lvl}
                              initial={{ opacity: 0, scale: 0.6 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.2 + i * 0.28, duration: 0.4, ease: EASE }}
                              className={`rounded-full px-2.5 py-1 text-xs font-black whitespace-nowrap ${i === levels.length - 1 ? "bg-sky-300 text-ink" : "bg-white text-royal-700"}`}
                            >
                              {lvl}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={book}
                      className="group/cta self-start sm:self-auto inline-flex items-center gap-3 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-sm font-bold text-ink shadow-lift transition-colors hover:bg-royal-50"
                    >
                      Book a Free Demo
                      <span className="grid place-items-center w-10 h-10 rounded-full bg-royal-500 text-white transition-transform duration-300 group-hover/cta:-rotate-45">
                        <ArrowRight size={18} />
                      </span>
                    </button>
                  </div>
                </div>
              </motion.article>

              {/* learn french card */}
              <motion.a
                href="#pathway"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[320px] md:min-h-[380px] lg:min-h-0 rounded-3xl overflow-hidden p-7 flex flex-col justify-end text-white shadow-lift"
                style={{ background: "linear-gradient(160deg,#5b8def 0%,#2f63d6 45%,#1b3f9e 100%)" }}
              >
                {/* flowing light waves */}
                <motion.span
                  aria-hidden
                  className="absolute -top-24 -left-20 w-[340px] h-[340px] rounded-full bg-white/20 blur-2xl"
                  animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  aria-hidden
                  className="absolute top-10 -right-24 w-[300px] h-[420px] rounded-[45%] border-[28px] border-white/10"
                  animate={{ rotate: [0, 12, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative">
                  <h3 className="text-4xl font-black leading-[1.05] text-white">Learn<br />French</h3>
                  <p className="mt-4 text-sky-100 leading-snug">Build strong language skills with a structured, mentor-led approach.</p>
                  <span className="mt-8 grid place-items-center w-14 h-14 rounded-full border-2 border-white/80 transition-all duration-300 group-hover:bg-white group-hover:text-royal-700 group-hover:-rotate-45">
                    <ArrowRight size={22} />
                  </span>
                </div>
              </motion.a>

              {/* canada journey card */}
              <motion.a
                href="#why-french"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[320px] md:min-h-[380px] lg:min-h-0 rounded-3xl overflow-hidden p-7 flex flex-col justify-between text-white shadow-lift bg-royal-950"
              >
                {/* Toronto skyline and Canadian flag */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/images/journey-canada.png"
                    alt="Toronto skyline and the Canadian flag"
                    fill
                    sizes="(max-width:768px) 100vw, 900px"
                    className="object-cover object-[38%_center] transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1446]/75 via-[#c2410c]/15 to-[#0b1433]/90" />
                <h3 className="relative text-4xl font-black leading-[1.05] text-white">Your<br />Canada<br />Journey</h3>
                <div className="relative">
                  <p className="text-sm font-bold text-white">Study · Work · Settle</p>
                  <p className="mt-1 text-white/85 leading-snug">A stronger profile.<br />More opportunities.</p>
                  <span className="mt-6 grid place-items-center w-12 h-12 rounded-full border-2 border-white/80 transition-all duration-300 group-hover:bg-white group-hover:text-ink group-hover:-rotate-45">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ══════════════ JOURNEY ══════════════ */}
        <section id="why-french" className="section-padding relative overflow-hidden bg-gradient-to-br from-[#f7fbff] via-[#edf6ff] to-[#f9fcff]">
          <div className="container-max grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
            <AnimateOnView direction="right" className="relative z-10 border-l-4 border-royal-500 pl-6">
              <span className="eyebrow text-royal-500">More than a language</span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-ink md:text-6xl">Imagine <span className="text-royal-500">this.</span></h2>
              <p className="mt-5 text-lg text-body leading-relaxed">You’re not staring at your CRS calculator wondering, “What else can I improve?”</p>
              <p className="mt-4 text-body leading-relaxed">You’re preparing for your French test with confidence. You understand your target. You know where you stand. And every class is taking you closer to the profile you’re building for Canada.</p>
            </AnimateOnView>

            <div ref={journeyRef} className="journey-visual relative z-10">
              <StaggerContainer className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3" staggerDelay={0.15}>
                {journey.map(([Icon, title, text, image], index) => (
                  <StaggerItem key={title} className="relative flex min-w-0 flex-col items-center text-center">
                    <div className={`w-full overflow-hidden rounded-2xl shadow-lift ${index === 0 ? "bg-blue-600 text-white" : index === 2 ? "bg-[#102c58] text-white" : "bg-white text-ink"}`}>
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                      <Image src={image} alt={`${title} — ${text}`} fill sizes="(max-width: 640px) 45vw, 16vw" className="object-cover" />
                    </div>
                    <div className="flex min-h-[58px] w-full flex-col justify-center px-1.5 py-2 sm:px-2">
                      <b className="text-xs font-black sm:text-sm">{title}</b>
                      <small className={`mt-1 text-[10px] leading-tight sm:text-xs ${index === 0 || index === 2 ? "text-white/85" : "text-muted"}`}>{text}</small>
                    </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-3">
                {journey.map(([Icon, title]) => (
                  <div key={title} className="flex flex-col items-center text-center">
                    <motion.span whileHover={{ scale: 1.1, rotate: -5 }} className="grid h-14 w-14 place-items-center rounded-full bg-blue-100/80 text-blue-600 ring-8 ring-blue-100/35">
                      <Icon size={27} strokeWidth={1.8} />
                    </motion.span>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 hidden h-14 sm:block">
                <div className="absolute inset-x-0 top-4 grid grid-cols-4 gap-3">
                  {["from-sky-400 to-blue-400", "from-blue-500 to-blue-600", "from-[#183965] to-[#183965]", "from-sky-500 to-cyan-400"].map((colors, index) => <span key={index} className={`h-2 rounded-full bg-gradient-to-r ${colors}`} />)}
                </div>
                <motion.div className="absolute inset-x-[4%] top-4 h-2 origin-left rounded-full bg-white/25" style={{ scaleX: journeyLine }} />
                <div className="absolute inset-0 grid grid-cols-4 gap-3">
                  {journey.map(([, title], index) => <span key={title} className={`mx-auto grid h-9 w-9 place-items-center rounded-full border-2 border-white text-sm font-black text-white shadow-md ${index === 2 ? "bg-[#102c58]" : index === 3 ? "bg-sky-500" : "bg-blue-600"}`}>{index + 1}</span>)}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════ CRS ══════════════ */}
        <section className="section-padding sec-dark overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6d8bff" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
          <div className="container-max relative grid lg:grid-cols-[1fr_1.25fr] gap-12 items-center">
            <div>
              <SectionHead light eyebrow="Market trends" title="French can strengthen your Express Entry profile." />
              <AnimateOnView delay={0.2}>
                <div className="mt-8 flex items-end gap-2.5 h-32" aria-hidden>
                  {[25, 38, 31, 55, 68, 83, 100].map((h, i) => (
                    <motion.span
                      key={i}
                      className="flex-1 rounded-t-md origin-bottom"
                      style={{ height: `${h}%`, background: i === 6 ? "linear-gradient(180deg,#6d8bff,#3b5bdb)" : "rgba(255,255,255,0.14)" }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 * i, ease: EASE }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-white/45">CRS / French-language points</p>
              </AnimateOnView>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <AnimateOnView className="rounded-3xl p-7 bg-white/[0.06] border border-white/10 backdrop-blur">
                <p className="text-6xl md:text-7xl font-black tracking-tight">
                  <span className="gradient-text-light">+<CountUp to={50} /></span>
                </p>
                <p className="mt-3 font-black text-white text-lg">Additional CRS points</p>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">French-language proficiency can provide up to 50 additional CRS points when the applicable requirements are met.</p>
              </AnimateOnView>
              <AnimateOnView delay={0.15} className="rounded-3xl p-7 bg-white/[0.06] border border-white/10 backdrop-blur">
                <p className="text-5xl md:text-6xl font-black tracking-tight text-white">NCLC 7</p>
                <p className="mt-3 font-black text-white text-lg">All four French skills</p>
                <div className="mt-5 grid grid-cols-4 gap-1">
                  {["Listen", "Speak", "Read", "Write"].map((s, i) => <SkillRing key={s} label={s} delay={0.2 + i * 0.12} />)}
                </div>
              </AnimateOnView>
              <AnimateOnView delay={0.25} className="sm:col-span-2 text-sm text-white/65 leading-relaxed">
                <p>The French-language proficiency category currently requires NCLC 7 in all four French abilities, along with the other applicable Express Entry requirements.</p>
                <p className="mt-3 text-xs italic text-white/45">French proficiency does not guarantee PR, an invitation or any immigration outcome. Eligibility depends on your individual profile and current IRCC requirements.</p>
              </AnimateOnView>
            </div>
          </div>
        </section>

        {/* THE REAL CHALLENGE */}
        <section className="bg-white py-12 md:py-16">
          <div className="container-max px-5 md:px-8">
            <AnimateOnView className="relative overflow-hidden rounded-3xl bg-royal-950 shadow-lift">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: EASE }}
              >
                <Image src="/images/real-challenge-banner.png" alt="" fill sizes="(max-width:1280px) 100vw, 1280px" className="object-cover object-left" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1433]/40 via-[#0b1433]/85 to-[#0b1433]/95 md:from-transparent md:via-[#0b1433]/40" />

              <div className="relative px-6 py-8 md:px-10 md:py-10 md:pl-[30%]">
                <span className="eyebrow-pill-light">The real challenge</span>
                <h2 className="mt-3 text-2xl md:text-4xl font-black leading-[1.1] text-white">
                  Learning French is easy. Learning it for a score is <span className="text-sky-300">different.</span>
                </h2>

                <StaggerContainer className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3" staggerDelay={0.1}>
                  {frictions.map(([Icon, text]) => (
                    <StaggerItem key={text}>
                      <motion.article
                        whileHover={{ y: -4, borderColor: "rgba(125,211,252,0.6)" }}
                        className="h-full rounded-2xl p-4 bg-white/[0.07] border border-white/15 backdrop-blur-md"
                      >
                        <span className="grid place-items-center w-8 h-8 rounded-lg bg-white/10 text-sky-300"><Icon size={16} /></span>
                        <p className="mt-3 text-sm text-white font-bold leading-snug">“{text}”</p>
                      </motion.article>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <p className="mt-6 inline-flex items-center gap-3 text-base md:text-lg font-black text-white">
                  That’s where ALB changes the approach.
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}><ArrowRight size={20} className="text-sky-300" /></motion.span>
                </p>
              </div>
            </AnimateOnView>
          </div>
        </section>

        {/* ══════════════ LEARNING PATH ══════════════ */}
        <section id="pathway" className="section-padding sec-light scroll-mt-24">
          <div className="container-max">
            <SectionHead center eyebrow="The ALB learning path" title={<>A clearer route from <span className="gradient-text">A1 to your target.</span></>} />

            <div ref={pathRef} className="relative mt-14">
              <div className="hidden lg:block absolute left-[8%] right-[8%] top-7 h-1 rounded-full bg-royal-50" />
              <motion.div
                className="hidden lg:block absolute left-[8%] right-[8%] top-7 h-1 rounded-full origin-left"
                style={{ scaleX: pathLine, background: "linear-gradient(90deg,#3b5bdb,#6d8bff,#38bdf8)" }}
              />
              <StaggerContainer className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" staggerDelay={0.1}>
                {pathSteps.map(([n, title, desc]) => (
                  <StaggerItem key={n} className="flex flex-col items-center text-center">
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      className="relative grid place-items-center w-14 h-14 rounded-full text-white font-black shadow-lift ring-8 ring-white"
                      style={{ background: "linear-gradient(135deg,#3b5bdb,#6d8bff)" }}
                    >
                      {n}
                    </motion.span>
                    <b className="mt-4 text-sm font-black uppercase tracking-wider text-ink">{title}</b>
                    <small className="mt-1.5 text-sm text-muted leading-snug max-w-[170px]">{desc}</small>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <AnimateOnView className="mt-14">
              <div className="rounded-3xl bg-royal-950 px-5 py-6 md:py-8 flex flex-wrap items-center justify-center gap-2 md:gap-4">
                {levels.map((lvl, i) => (
                  <span key={lvl} className="inline-flex items-center gap-2 md:gap-4">
                    <motion.span
                      initial={{ opacity: 0.25, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.22, duration: 0.45, ease: EASE }}
                      className={`rounded-full px-4 md:px-6 py-2 text-lg md:text-3xl font-black ${i === levels.length - 1 ? "text-ink" : "text-white bg-white/10"}`}
                      style={i === levels.length - 1 ? { background: "linear-gradient(135deg,#9bb2ff,#7dd3fc)" } : undefined}
                    >
                      {lvl}
                    </motion.span>
                    {i < levels.length - 1 && <ArrowRight className="text-royal-400 w-4 md:w-6" />}
                  </span>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </section>

        {/* ══════════════ EXPERIENCE ══════════════ */}
        <section id="classes" className="section-padding sec-mist scroll-mt-24">
          <div className="container-max">
            <SectionHead eyebrow="The ALB experience" title={<>Live. Small. <span className="gradient-text">Interactive.</span></>} />

            <div className="mt-12 grid lg:grid-cols-[1fr_1.15fr_.9fr] gap-6 items-stretch">
              <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
                {features.map(([Icon, title, desc]) => (
                  <StaggerItem key={title}>
                    <motion.article whileHover={{ y: -5 }} className="group h-full rounded-2xl bg-white p-5 border border-line shadow-soft">
                      <span className="grid place-items-center w-11 h-11 rounded-xl bg-royal-50 text-royal-500 transition-all duration-300 group-hover:bg-royal-500 group-hover:text-white group-hover:rotate-6">
                        <Icon size={20} />
                      </span>
                      <b className="block mt-4 text-ink font-black">{title}</b>
                      <small className="block mt-1 text-sm text-muted">{desc}</small>
                    </motion.article>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <AnimateOnView delay={0.1} className="relative min-h-[340px] rounded-3xl overflow-hidden shadow-lift">
                <Image src="/images/live-classes-panel.png" alt="A learner in a live online French class" fill sizes="(max-width:1024px) 92vw, 460px" className="object-cover object-[center_60%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white">
                  <motion.span className="w-2 h-2 rounded-full bg-white" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                  LIVE
                </span>
                <motion.span
                  className="absolute top-14 right-4 rounded-2xl rounded-tr-sm bg-white px-4 py-2 text-sm font-bold text-ink shadow-lift"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Bonjour ! 👋
                </motion.span>
                <motion.span
                  className="absolute bottom-16 left-4 rounded-2xl rounded-bl-sm bg-royal-500 px-4 py-2 text-sm font-bold text-white shadow-lift"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  Très bien !
                </motion.span>
                <p className="absolute bottom-4 left-4 right-4 text-white font-black">Live French class</p>
              </AnimateOnView>

              <AnimateOnView delay={0.2} className="rounded-3xl bg-white p-7 border border-line shadow-soft">
                <span className="eyebrow">TEF / TCF practice</span>
                <h3 className="text-2xl font-black text-ink leading-tight">Train for the test.<br />Not just the language.</h3>
                <div className="mt-6 space-y-4">
                  {skills.map(([s, pct], i) => (
                    <div key={s}>
                      <div className="flex justify-between text-sm font-bold text-ink">
                        <span>{s}</span>
                        <span className="text-muted">{pct}%</span>
                      </div>
                      <div className="mt-1.5 h-2 rounded-full bg-royal-50 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(90deg,#3b5bdb,#38bdf8)" }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease: EASE }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnView>
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="relative section-padding sec-light overflow-hidden">
          <div className="absolute inset-0 grid-dots-light opacity-50 pointer-events-none" />
          <div className="container-max relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <AnimateOnView>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">Which one are you?</span>
                <h2 className="mt-2 text-3xl md:text-5xl font-black text-ink">
                  Start <span className="gradient-text">wherever you are.</span>
                </h2>
              </AnimateOnView>
              <AnimateOnView delay={0.15} className="max-w-xs text-body md:text-right">
                Pick your starting point. We&apos;ll map the rest of the route with you.
              </AnimateOnView>
            </div>

            {/* progress rail: beginner → exam ready */}
            <div className="relative mt-10 hidden md:grid grid-cols-3 gap-5" aria-hidden>
              <div className="absolute left-[16.66%] right-[16.66%] top-1/2 h-0.5 -translate-y-1/2 bg-royal-100" />
              <motion.div
                className="absolute left-[16.66%] right-[16.66%] top-1/2 h-0.5 -translate-y-1/2 origin-left"
                style={{ background: `linear-gradient(90deg,${audiences.map((a) => a.color).join(",")})` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
              />
              {audiences.map((a, i) => (
                <motion.span
                  key={a.title}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.3 + i * 0.45 }}
                  className="relative mx-auto inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold shadow-soft border border-line"
                  style={{ color: a.color }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: a.color }} />
                  {a.level}
                </motion.span>
              ))}
            </div>

            <StaggerContainer className="mt-6 md:mt-8 grid md:grid-cols-3 gap-5 [perspective:1200px]" staggerDelay={0.14}>
              {audiences.map((a, i) => (
                <AudienceCard key={a.title} a={a} index={i} onBook={book} />
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ══════════════ STORIES ══════════════ */}
        <section id="stories" className="section-padding sec-light scroll-mt-24 overflow-hidden">
          <div className="container-max grid lg:grid-cols-[.8fr_2fr] gap-10 lg:gap-12 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-outline">Real people, real progress</span>
              <h2 className="mt-4 text-3xl md:text-[40px] font-black leading-[1.1] text-ink">
                From “I don’t know where to start” → <span className="gradient-text">“I’m ready to take the test.”</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed">
                Real ALB students on how they built skills, moved forward and found confidence. Tap a story to watch.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4">
                <a
                  href="https://www.learnwithalb.com/success-stories"
                  className="group inline-flex items-center gap-3 font-bold text-ink"
                >
                  <span className="grid place-items-center w-12 h-12 rounded-full border-2 border-ink transition-all duration-300 group-hover:bg-ink group-hover:text-white group-hover:rotate-45">
                    <ArrowUpRight size={22} />
                  </span>
                  Read more ALB success stories
                </a>
                <a
                  href="https://www.instagram.com/learnwithalb/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-royal-500 hover:gap-3 transition-all"
                >
                  More stories on Instagram <ArrowRight size={15} />
                </a>
              </div>
            </AnimateOnView>

            <div className="min-w-0">
              <div
                ref={storyTrackRef}
                onScroll={updateStoryEdges}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-px-5 sm:scroll-px-0 -mx-5 px-5 sm:mx-0 sm:px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {videoStories.map((v, i) => {
                  const playing = playingStory === v.id;
                  const accent = i % 3 === 2;
                  return (
                    <motion.article
                      key={v.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: Math.min(i, 3) * 0.12, ease: EASE }}
                      whileHover={playing ? undefined : { y: -8 }}
                      className="group relative shrink-0 snap-start w-[74%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] aspect-[9/15] rounded-3xl overflow-hidden bg-ink shadow-lift"
                    >
                      {playing ? (
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
                          title={v.title}
                          allow="autoplay; encrypted-media; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setPlayingStory(v.id)}
                          aria-label={`Play ${v.name}'s story`}
                          className="absolute inset-0 w-full h-full text-left"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://i.ytimg.com/vi/${v.id}/oar2.jpg`}
                            alt=""
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <span className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/25 to-ink/90" />

                          <span className="absolute top-4 left-4 grid place-items-center w-9 h-9 rounded-full bg-white text-ink text-sm font-black shadow-soft">
                            {i + 1}
                          </span>

                          {/* play hint */}
                          <span className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 grid place-items-center">
                            <motion.span
                              aria-hidden
                              className="absolute w-16 h-16 rounded-full bg-white/30"
                              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: (i % 3) * 0.4 }}
                            />
                            <span className="relative grid place-items-center w-14 h-14 rounded-full bg-white/90 text-ink backdrop-blur transition-transform duration-300 group-hover:scale-110">
                              <Play size={20} fill="currentColor" className="ml-0.5" />
                            </span>
                          </span>

                          <span className="absolute inset-x-0 bottom-0 p-4">
                            <span className="block text-lg font-black text-white">{v.name}</span>
                            <span className="mt-1 block text-sm leading-snug text-white/85">{v.caption}</span>
                            <span
                              className={`mt-4 flex items-center justify-between rounded-full pl-4 pr-1 py-1 text-sm font-bold ${accent ? "bg-sky-300 text-ink" : "bg-royal-500 text-white"}`}
                            >
                              {v.tag}
                              <span className={`grid place-items-center w-8 h-8 rounded-full transition-transform duration-300 group-hover:-rotate-45 ${accent ? "bg-ink/10" : "bg-white/20"}`}>
                                <ArrowRight size={16} />
                              </span>
                            </span>
                          </span>
                        </button>
                      )}
                    </motion.article>
                  );
                })}
              </div>

              {/* scroller controls */}
              <div className="mt-6 flex items-center gap-5">
                <div className="relative flex-1 h-1 rounded-full bg-royal-50 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 origin-left rounded-full"
                    style={{ scaleX: storyProgress, background: "linear-gradient(90deg,#3b5bdb,#38bdf8)" }}
                  />
                </div>
                <span className="text-sm font-bold text-muted tabular-nums">{videoStories.length} stories</span>
                <div className="flex gap-2">
                  {([[-1, ChevronLeft, "Previous stories", storyEdges.atStart], [1, ChevronRight, "Next stories", storyEdges.atEnd]] as [number, LucideIcon, string, boolean][]).map(([dir, Icon, label, disabled]) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => scrollStories(dir)}
                      disabled={disabled}
                      aria-label={label}
                      className="grid place-items-center w-11 h-11 rounded-full border-2 border-ink text-ink transition-all duration-300 hover:bg-ink hover:text-white disabled:opacity-25 disabled:pointer-events-none"
                    >
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ COMPARISON ══════════════ */}
        <section className="section-padding sec-mist">
          <div className="container-max">
            <SectionHead eyebrow="A clearer way to prepare" title={<>Self-study or a <span className="gradient-text">guided path?</span></>} />
            <AnimateOnView className="mt-12 rounded-3xl bg-white border border-line shadow-soft overflow-hidden">
              <div className="hidden md:grid grid-cols-[1.1fr_1fr_1.2fr] gap-3 px-8 py-4 bg-royal-950 text-white text-xs md:text-sm font-bold uppercase tracking-wider">
                <span>What you need</span>
                <span className="text-white/60">Learning alone</span>
                <span className="text-royal-300">ALB programme</span>
              </div>
              {comparison.map(([need, alone, alb], i) => (
                <motion.div
                  key={need}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                  className="grid grid-cols-2 md:grid-cols-[1.1fr_1fr_1.2fr] gap-x-3 gap-y-2 px-5 md:px-8 py-5 border-t first:border-t-0 md:first:border-t border-line items-center text-sm md:text-base transition-colors hover:bg-royal-50/60"
                >
                  <b className="col-span-2 md:col-span-1 text-ink">{need}</b>
                  <span className="flex items-center gap-2 text-muted"><X size={16} className="shrink-0 text-rose-400" />{alone}</span>
                  <strong className="flex items-center gap-2 text-royal-600">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 400, damping: 14, delay: 0.3 + i * 0.1 }}
                      className="grid place-items-center shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white"
                    >
                      <Check size={14} strokeWidth={3} />
                    </motion.span>
                    {alb}
                  </strong>
                </motion.div>
              ))}
            </AnimateOnView>
          </div>
        </section>

        {/* ══════════════ FAQ ══════════════ */}
        <section className="section-padding sec-light">
          <div className="container-max grid lg:grid-cols-[.75fr_1.25fr] gap-10 lg:gap-16">
            <div className="lg:sticky lg:top-28 self-start">
              <SectionHead eyebrow="Good questions" title="Before you begin." lead="Clear answers for your French and Canada plan." />
            </div>
            <StaggerContainer className="space-y-3" staggerDelay={0.05}>
              {faqs.map(([q, a], i) => {
                const open = openFaq === i;
                return (
                  <StaggerItem key={q}>
                    <article className={`rounded-2xl border transition-colors ${open ? "border-royal-200 bg-royal-50/60" : "border-line bg-white hover:border-royal-200"}`}>
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        aria-expanded={open}
                        className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5 font-bold text-ink"
                      >
                        {q}
                        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-royal-50 text-royal-500">
                          <ChevronDown size={18} />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 md:px-6 pb-5 text-body leading-relaxed">{a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ══════════════ FINAL CTA ══════════════ */}
        <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#061232] px-5 py-16 md:min-h-[480px] md:px-8 xl:min-h-[max(540px,33.33vw)]">
          {/* slow zoom-out on the skyline photo */}
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ scale: 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: EASE }}
          >
            <Image
              src="/images/canada-french-cta.png"
              alt="A couple looking toward the Toronto skyline at sunset"
              fill
              sizes="100vw"
              className="object-cover object-[72%_center] md:object-[center_55%]"
            />
          </motion.div>
          {/* navy wash on the left keeps the copy readable; photo stays vivid on the right */}
          <div
            className="absolute inset-0 -z-10 hidden md:block"
            style={{ background: "linear-gradient(90deg,rgba(6,18,58,.97) 0%,rgba(10,32,92,.88) 30%,rgba(12,40,110,.55) 46%,rgba(12,40,110,.1) 64%,transparent 78%)" }}
          />
          <div className="absolute inset-0 -z-10 md:hidden bg-gradient-to-b from-[#06123a]/95 via-[#0a2060]/80 to-[#0a2060]/30" />

          {/* faint maple leaf, gently drifting */}
          <motion.svg
            aria-hidden
            viewBox="0 0 100 100"
            className="pointer-events-none absolute right-[4%] top-[6%] hidden md:block h-[46%] w-[20%] max-w-[360px] text-white/15"
            animate={{ rotate: [0, 6, 0, -4, 0], y: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <path fill="currentColor" d="M50 1 59 23 75 13 73 34 94 32 82 49 99 59 79 68 82 88 62 81 50 99 38 81 18 88 21 68 1 59 18 49 6 32 27 34 25 13 41 23Z" />
          </motion.svg>
          {/* thin arc that draws itself in */}
          <svg aria-hidden viewBox="0 0 600 500" preserveAspectRatio="none" className="pointer-events-none absolute right-0 top-0 hidden md:block h-[52%] w-[42%]">
            <motion.path
              d="M600 0C470 40 430 170 300 235S100 330 0 500"
              fill="none"
              stroke="rgba(125,211,252,.55)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, delay: 0.4, ease: EASE }}
            />
          </svg>

          <div className="relative w-full container-max">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="max-w-[640px] xl:max-w-[720px]"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } } }} className="flex items-center gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/85">Your future is worth it</span>
                <motion.span
                  className="h-px w-24 origin-left bg-sky-400/70"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                />
              </motion.div>

              {/* vertical accent line beside the heading */}
              <div className="relative mt-5 pl-5 md:pl-7">
                <motion.span
                  aria-hidden
                  className="absolute left-0 top-1 bottom-1 w-px origin-top bg-gradient-to-b from-sky-400 to-blue-600/0"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: EASE }}
                />
                <motion.h2
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }}
                  className="text-[34px] font-black leading-[1.04] text-white sm:text-5xl xl:text-[58px]"
                >
                  The Canada life you are{" "}
                  <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                    planning for will not build itself.
                  </span>
                </motion.h2>
                <motion.p
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
                  className="mt-5 text-lg text-white/85 sm:text-xl"
                >
                  Start with the skill you can work on today.
                </motion.p>
              </div>

              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                className="mt-7 flex flex-wrap gap-3 pl-5 md:pl-7"
              >
                {([[Monitor, "Live online classes"], [FileText, "TEF & TCF preparation"], [Users, "Small batches"]] as [LucideIcon, string][]).map(([Icon, label]) => (
                  <motion.span
                    key={label}
                    variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } } }}
                    whileHover={{ y: -3 }}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white backdrop-blur-md"
                  >
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-blue-600 shadow-[0_0_14px_rgba(37,99,235,.6)]">
                      <Icon size={14} />
                    </span>
                    {label}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
                className="mt-8 pl-5 md:pl-7"
              >
                <motion.button
                  onClick={book}
                  animate={{ boxShadow: ["0 10px 30px rgba(37,99,235,.35)", "0 10px 44px rgba(56,189,248,.55)", "0 10px 30px rgba(37,99,235,.35)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-bold text-white"
                >
                  <span aria-hidden className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[420%]" />
                  <span className="relative">Book a Free Demo</span>
                  <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
