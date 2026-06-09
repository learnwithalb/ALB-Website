"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, CheckCircle, ChevronDown, ChevronRight } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { CountUp } from "@/components/shared/CountUp";
import { MuiIcon } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";

/* ─────────────── data ─────────────── */

const INFO_CHIPS = ["A1 to B2", "36 Weeks", "216 Hours", "TEF / TCF Canada", "Max 6 Per Batch", "Soft Skills Included Free"];

const SNAPSHOT = [
  { value: "36", label: "Teaching Weeks" },
  { value: "216", label: "Hours of Instruction" },
  { value: "6", label: "Max Students Per Batch" },
  { value: "3", label: "Live Classes Per Week" },
  { value: "9.5", label: "Months · Total Journey" },
];

const PROFILES = [
  { icon: "flight",    title: "Canada PR Applicants", desc: "Applying under Express Entry (FSW, CEC, FST), Provincial Nominee Programs, or the Quebec Skilled Worker Program — and needing a recognised French score for your IRCC file." },
  { icon: "article",   title: "Work Permit & LMIA Applicants", desc: "Requiring French language documentation to support a work permit or LMIA application process." },
  { icon: "family",    title: "Family Sponsorship Candidates", desc: "Preparing to join a francophone partner or family in Canada and needing functional French for daily life and official communication." },
  { icon: "globe",     title: "Newcomers to Francophone Canada", desc: "Already in Canada or preparing to arrive in a French-speaking province — needing readiness for work, housing, healthcare, and community life." },
  { icon: "school",    title: "Academic Mobility Students", desc: "Applying to French-medium universities in Canada, France, Belgium, or Switzerland and needing DELF or CEFR-aligned credentials for admission." },
  { icon: "work",      title: "Career Professionals", desc: "Working in multilingual or international environments and needing professional-grade French for workplace advancement." },
];

const RIGHT_PLACE = [
  "You have zero or basic French — and need to reach B2 on a timeline",
  "You need TEF Canada or TCF Canada scores for your immigration file",
  "You want to understand Quebec French — not just Parisian",
  "You want real immigration vocabulary — not textbook grammar",
  "You need classes aligned with your application deadline",
];

const JOURNEY = [
  { stage: "A1", title: "Everyday Survival French", meta: "8 Weeks · 48 Hours · 3 / week", exam: "DELF A1", outcome: "Basic phrases, personal introductions, simple forms.", context: "Visa-profile language, nationality & personal details, appointment scheduling.", earn: "ALB Level 1 Certificate" },
  { stage: "A2", title: "Routine Communication", meta: "8 Weeks · 48 Hours · 3 / week", exam: "DELF A2", outcome: "Everyday transactions, simple written correspondence, navigating daily situations.", context: "Airport & border scenarios, medical visits, formal emails to institutions.", earn: "ALB Level 2 Certificate" },
  { stage: "B1", title: "Independent Communication", meta: "10 Weeks · 60 Hours · 3 / week", exam: "DELF B1 · TEF / TCF Canada (foundation)", outcome: "Express opinions; discuss work, education & settlement services independently.", context: "Official documents, embassy interactions, letters to authorities, immigration vocabulary.", earn: "ALB Level 3 Certificate" },
  { stage: "B2", title: "Advanced Fluency & Exam Readiness", meta: "10 Weeks · 60 Hours · 3 / week", exam: "DELF B2 · TEF / TCF Canada (full)", outcome: "Fluent, confident communication in professional & high-stakes settings.", context: "CLB 7+ readiness, Express Entry preparation, formal writing for Canadian authorities.", earn: "ALB Level 4 Certificate" },
  { stage: "+Beyond", title: "ALB Global Confidence Program", meta: "2 Weeks · 6 Live Sessions · Free", exam: "Included Free", outcome: "Confidence building · professional communication · public speaking · interview skills · personal branding.", context: "", earn: "", beyond: true },
];

const LEVELS = [
  {
    code: "A1", meta: "8 Weeks · 48 Hours",
    topics: ["Greetings & introductions", "Numbers, dates & time", "Family & personal descriptions", "Daily routines", "Food & restaurants", "Shopping & places", "Weather & seasons", "DELF A1 exam preparation"],
    immigration: ["Visa-profile introductions", "Passport dates & appointment scheduling", "Family details for official forms", "Daily routine in a new country", "Grocery & restaurant survival French", "Shopping in a settlement context", "Travel & relocation conversations", "Oral answers for immigration-style profile talk"],
    assessments: ["Week 4 — Grammar & speaking check", "Week 7 — Writing, listening & oral interaction", "Week 8 — Full mock exam + ALB Level 1 Certificate"],
    weekly: ["Vocabulary log", "Pronunciation practice", "Short written task", "Speaking recording"],
  },
  {
    code: "A2", meta: "8 Weeks · 48 Hours",
    topics: ["Travel & transport", "Past experiences (passé composé)", "City navigation & directions", "Health & medical language", "Future plans & intention", "Written communication (emails)", "DELF A2 exam preparation"],
    immigration: ["Airport, border & transport scenarios", "Explaining recent activities & timelines", "Navigating embassies, centres & public services", "Medical & emergency language for settlement", "Immigration timeline & future planning", "Formal emails to institutions", "Official communication practice"],
    assessments: ["Week 12 — Navigation & communication test", "Week 15 — Email writing & speaking test", "Week 16 — Full mock exam + ALB Level 2 Certificate"],
    weekly: ["Short email", "Listening worksheet", "Oral recording", "Reading comprehension task"],
  },
  {
    code: "B1", meta: "10 Weeks · 60 Hours",
    topics: ["Work & careers vocabulary", "Education systems", "Society & environment", "Media & current affairs", "Opinions & argumentation", "Immigration & visa context", "Professional correspondence", "Francophone culture revision", "DELF B1 & TEF/TCF foundation prep"],
    immigration: ["Occupation language for immigration profiles", "Credential discussions for applications", "Community life & public systems", "Immigration news & policy vocabulary", "Justifying migration plans & choices", "Core visa, PR & document language", "Letters to authorities & institutions", "Canada-focused listening & lexical prep", "Settlement across francophone regions"],
    assessments: ["Week 20 — Media & opinion integrated test", "Week 24 — Formal writing & oral performance test", "Week 26 — Full mock exam + ALB Level 3 Certificate"],
    weekly: ["Paragraph writing", "Oral opinion recording", "Reading summary notes", "Vocabulary workbook"],
  },
  {
    code: "B2", meta: "10 Weeks · 60 Hours",
    topics: ["Argumentation & debate", "Professional French register", "Literature & media", "Academic writing structures", "Advanced grammar (gerund, complex structures)", "Culture & identity", "Advanced speaking: fluency & monologue", "TEF/TCF Canada intensive prep", "DELF B2 full preparation"],
    immigration: ["Persuasive answers for interview-style settings", "High-stakes formal communication", "Media comprehension for settlement awareness", "Analytical writing for formal exams", "Integration & multicultural interaction", "Accuracy for TEF/TCF scoring", "Formal written responses for authorities", "Oral performance for Canada-oriented outcomes", "PR-focused next-step counselling"],
    assessments: ["Week 30 — Academic & professional writing assessment", "Week 34 — Advanced speaking assessment", "Week 36 — Full mock exam + ALB Level 4 Certificate"],
    weekly: ["Advanced writing task", "Oral presentation clip", "Reading analysis sheet", "Connector & grammar revision pack"],
  },
];

const USPS = [
  { icon: "flight",     title: "Immigration-First Curriculum", desc: "Not a textbook course repurposed for immigration. Every week, every level, every example is built around what you'll actually need in Canada — embassies, government forms, work, and daily life." },
  { icon: "grade",      title: "TEF Canada & TCF Canada Specialists", desc: "We don't add exam prep at the end. We build it in from B1 — timed mocks, evaluator-style oral practice, structured writing correction, and score-improvement strategies." },
  { icon: "translate",  title: "Quebec French Training", desc: "Canada is not Paris. You'll learn the Québécois accent, vocabulary, and cultural context standard courses ignore — because the officers, employers, and communities you'll meet are in Canada." },
  { icon: "people",     title: "Maximum 6 Students Per Batch", desc: "Small is intentional. Every batch is capped at 6 so speaking time, instructor attention, and personal feedback are never diluted. You are not a face in a row of thirty." },
  { icon: "brain",      title: "India-First Teaching Method", desc: "Every analogy and cultural comparison is designed for Indian learners. We bridge from Hindi and regional-language thinking to French — your first language is an asset, not an obstacle." },
  { icon: "sparkle",    title: "+Beyond Soft Skills Included Free", desc: "The ALB Global Confidence Program — 2 weeks, 6 live sessions on professional communication, confidence, interview skills, and personal branding — included at no extra cost." },
];

const PILLARS = [
  { icon: "article", title: "Immigration Vocabulary Modules", items: ["Visa categories: Express Entry, PNP, LMIA, NOC codes & streams", "Government bodies: IRCC, CRA, Service Canada, MIFI, CBSA", "Legal & official document language: affidavits, declarations", "Citizenship & PR vocabulary: rights, responsibilities, oath"] },
  { icon: "chat",    title: "Real-World Communication Modules", items: ["Settling in Canada: housing, utilities, banking, healthcare, schools", "Communicating with employers & HR in French", "Canadian workplace culture & professional etiquette", "Community integration: social conversations & civic participation"] },
  { icon: "translate", title: "Quebec French Awareness Module", items: ["Joual & informal Québécois expressions in daily use", "Pronunciation differences: France vs Canada", "Cultural context, regional identity & social norms", "Quebec media: news, radio & print comprehension"] },
  { icon: "grade",   title: "Exam Technique Modules", items: ["TEF / TCF format mastery — every section, every question type", "Reading: skimming, scanning & inference strategies", "Listening: note-taking & keyword identification", "Writing templates + speaking rubrics, fluency & pronunciation drills"] },
];

const EXAMS = [
  { name: "TEF Canada", full: "Test d'Évaluation de Français (Canada)", accepted: "Accepted by IRCC for Express Entry · Provincial Nominee Programs · Quebec immigration", components: ["Listening Comprehension", "Reading Comprehension", "Written Expression", "Oral Expression"], prep: ["Immigration-specific vocabulary banks", "Timed mock tests", "Evaluator-style oral practice", "Structured writing correction with rubric feedback"] },
  { name: "TCF Canada", full: "Test de Connaissance du Français (Canada)", accepted: "Accepted by IRCC · Quebec authorities (MIFI) · Administered by France Éducation International", components: ["Listening", "Reading", "Writing (Compulsory)", "Speaking (Optional)"], prep: ["Diagnostic tests", "Section-specific drills", "Progress tracking", "Speaking simulations with evaluation criteria"] },
];

const CLB_POINTS = [
  "Additional CRS points in your Express Entry profile",
  "Improved competitiveness across FSW, CEC & FST streams",
  "Eligibility for Francophone immigration stream advantages",
  "Stronger professional & settlement prospects in French-speaking Canada",
];

const CEFR = [
  { l: "A1", t: "Beginner", d: "Basic phrases, personal information, simple forms" },
  { l: "A2", t: "Elementary", d: "Everyday situations, simple transactions, basic correspondence" },
  { l: "B1", t: "Intermediate", d: "Independent communication, employment, settlement services" },
  { l: "B2", t: "Upper Intermediate", d: "Fluent communication, exam-ready, fully immigration-ready" },
];

const INCLUDED = [
  "Class notes for every session",
  "Weekly assignments across all four skills",
  "Pronunciation practice materials",
  "Guided speaking sessions with instructor feedback",
  "Writing corrections throughout the programme",
  "Formal mid-level assessments at each stage",
  "Full mock exams before each level certification",
  "ALB credential certificate at every level (A1–B2)",
  "TEF Canada & TCF Canada exam guidance + registration support",
  "ALB Global Confidence Program (+Beyond) — included free",
  "Instructor access between classes for query resolution",
  "Progress tracking across your full learning journey",
];

const OUTCOMES = [
  "Communicate confidently in everyday French — shopping, healthcare, banking, transport",
  "Understand and apply formal immigration & legal vocabulary",
  "Complete government forms, visa applications & official documents in French",
  "Participate in settlement interviews and visa appointments with clarity",
  "Navigate Quebec French — accent, vocabulary & idiomatic expressions",
  "Read and respond to official Canadian government correspondence in French",
  "Write formal letters and emails for immigration-related purposes",
  "Achieve B2 with demonstrated TEF Canada & TCF Canada exam readiness",
  "Communicate effectively with employers, officials & settlement workers",
  "Understand your rights and navigate daily life in a French-speaking province",
];

const STEPS = [
  { n: "01", title: "Book a Free Trial Class", desc: "No cost. No obligation. Experience a live ALB class, meet your instructor, and see the curriculum before committing." },
  { n: "02", title: "Enrol with the Registration Fee", desc: "Confirm your seat with a ₹5,000 registration fee — covering batch allocation, placement assessment, and onboarding." },
  { n: "03", title: "Attend Your 2-Week Trial", desc: "Your first two weeks are a structured trial. Attend classes, experience the teaching, and decide with full information." },
  { n: "04", title: "Continue or Exit — Your Choice", desc: "If it feels right, continue. If not — for any reason within the trial — you're entitled to a refund per ALB's policy. No pressure." },
  { n: "05", title: "Progress Through A1–B2", desc: "Advance level by level. Earn your ALB certificate at each level and build a verifiable portfolio for your immigration file." },
];

const INSTRUCTORS = [
  { icon: "translate", title: "Lead French Language Mentor", desc: "CEFR-aligned trainer with expertise in speaking confidence, grammar clarity, pronunciation correction, and structured progression from A1 through B2.", from: "#3b5bdb", to: "#2f49c0" },
  { icon: "grade",     title: "TEF / TCF & DELF Coach", desc: "Specialist in exam task strategy, mock testing, writing correction, oral performance, and score improvement for immigration and academic outcomes.", from: "#0ea5e9", to: "#0284c7" },
  { icon: "mic",       title: "Soft Skills & Interview Mentor", desc: "Trainer focused on public speaking, email etiquette, presentation delivery, personal branding, and interview performance in professional settings.", from: "#6366f1", to: "#4338ca" },
];

const FAQS = [
  { q: "Do I need any prior French knowledge to join?", a: "No. The programme is structured to take complete beginners from zero French through to B2 systematically. If you already have some French, we conduct a placement assessment to determine your correct entry point — A2, B1, or B2 entry are all available." },
  { q: "How long does the full A1 to B2 programme take?", a: "Approximately 36 weeks at standard pace — around 9 months for the language programme, plus 2 weeks for the ALB Global Confidence Program (+Beyond), making the full journey roughly 9.5 months. An accelerated option is available through our French Sprint Track." },
  { q: "Which exam should I choose — TEF Canada or TCF Canada?", a: "Both are accepted by IRCC for Express Entry, PNP, and Quebec immigration. Your choice depends on your application timeline, target province, and individual strengths. ALB advisors will guide your decision in your free consultation." },
  { q: "How many students are in each batch?", a: "A maximum of 6 students per batch. This is a deliberate design decision — small cohorts mean more speaking time, more instructor attention, and meaningful feedback for every student, every class." },
  { q: "Are classes online or in person?", a: "ALB is a fully remote school. All classes are conducted live online — instructor-led, interactive, and real-time. You attend from anywhere in India or abroad." },
  { q: "How many classes per week, and how long is each one?", a: "Three live classes per week, each 1.5 hours long." },
  { q: "Does ALB help with TEF Canada and TCF Canada exam registration?", a: "Yes. We guide you through the full registration process — documentation, scheduling, and test-centre selection for both exams." },
  { q: "Is the +Beyond soft skills module mandatory?", a: "It is included with every programme and strongly recommended — particularly for students planning to work or study in Canada post-immigration. If your sole focus is the exam score, discuss this with your advisor." },
  { q: "What is the registration fee and is it refundable?", a: "The registration fee is ₹5,000. After your 2-week trial experience, if you decide not to continue — for any reason — the fee is refunded as per ALB's refund policy. See our Refund Policy page for full details." },
  { q: "What exams does ALB prepare me for?", a: "TEF Canada · TCF Canada · DELF A1 · DELF A2 · DELF B1 · DELF B2. Our programme builds from beginner certifications through to full immigration-grade exam readiness." },
  { q: "What is CLB and why does it matter for my immigration file?", a: "CLB stands for Canadian Language Benchmarks — the system IRCC uses to assess language ability for immigration. French exam results from TEF Canada and TCF Canada are converted into CLB scores. Higher CLB levels, particularly CLB 7 and above, can significantly strengthen your Express Entry CRS score and open additional Francophone immigration pathways." },
  { q: "What sets ALB apart from other French language institutes?", a: "Our immigration-specific curriculum, Quebec French training, small batch sizes of maximum 6, exam simulation depth, India-first pedagogy, and the integrated ALB Global Confidence Program create an outcome no generic French course can replicate. We don't just teach French — we prepare you for French-speaking Canada." },
];

/* ─────────────── page ─────────────── */

export default function FrenchPage() {
  const { openModal } = useBooking();
  const [openLevel, setOpenLevel] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const Chips = ({ items, accent = false }: { items: string[]; accent?: boolean }) => (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span key={t} className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${accent ? "bg-sky-50 border border-sky-200 text-sky-700" : "bg-royal-50 border border-royal-100 text-royal-700"}`}>{t}</span>
      ))}
    </div>
  );

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative hero-light overflow-hidden pt-28 pb-20 min-h-[92vh] flex items-center">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[520px] h-[440px] -top-24 left-1/4 pointer-events-none" />
        <div className="blob blob-sky w-[400px] h-[400px] bottom-0 right-[-6%] pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10 w-full">
          <nav className="text-xs text-muted mb-5 flex items-center gap-1.5">
            <Link href="/" className="hover:text-royal-700">Home</Link>
            <ChevronRight size={12} />
            <Link href="/courses" className="hover:text-royal-700">Courses</Link>
            <ChevronRight size={12} />
            <span className="text-royal-700 font-semibold">French</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="eyebrow-pill-outline">The ALB French Master Pathway — Immigration Track</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-[3.4rem] font-black text-ink leading-[1.06] tracking-tight"
              >
                Your French journey starts here.{" "}
                <span className="gradient-text">Your Canadian dream follows.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }}
                className="mt-5 text-lg text-body max-w-xl leading-relaxed"
              >
                A structured A1 to B2 French course for Canada PR — built around Canadian immigration, not grammar
                textbooks. TEF Canada · TCF Canada · DELF. Exam-ready and life-ready.
              </motion.p>

              <motion.div
                className="mt-7 flex flex-wrap gap-2.5"
                initial="hidden" animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } } }}
              >
                {INFO_CHIPS.map((c) => (
                  <motion.span key={c} variants={{ hidden: { opacity: 0, scale: 0.8, y: 10 }, visible: { opacity: 1, scale: 1, y: 0 } }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="flex items-center gap-1.5 bg-white border border-line shadow-sm rounded-full px-3 py-1.5 text-xs font-bold text-ink">
                    <CheckCircle size={11} className="text-royal-500" /> {c}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="mt-8 flex flex-wrap items-center gap-4">
                <button onClick={() => openModal("French Language")} className="btn-primary">Book a Free Trial Class <ArrowRight size={16} /></button>
                <Link href="#curriculum" className="inline-flex items-center gap-1.5 text-royal-700 font-bold text-sm group">
                  View the full curriculum
                  <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowDown size={15} /></motion.span>
                </Link>
              </motion.div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="mt-4 text-muted text-xs">
                Free trial class available · No obligation
              </motion.p>
            </div>

            {/* pathway visual */}
            <motion.div className="hidden lg:block" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <motion.div className="relative max-w-sm mx-auto" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <div className="blob blob-royal absolute -inset-8 opacity-50" />
                <div className="relative card rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-royal-700 bg-royal-50 px-2.5 py-1 rounded-full">🇫🇷 French Master Pathway</span>
                    <span className="text-2xl">🇨🇦</span>
                  </div>
                  {[["A1", "Survival French", "8 wks"], ["A2", "Routine Communication", "8 wks"], ["B1", "Independent", "10 wks"], ["B2", "Fluency + Exam", "10 wks"]].map((s, i) => (
                    <motion.div key={s[0]} className="flex items-center gap-3 rounded-xl bg-royal-50/70 px-3 py-2.5 mb-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.12 }}>
                      <span className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-xs font-black text-royal-600">{s[0]}</span>
                      <span className="text-sm font-semibold text-ink flex-1">{s[1]}</span>
                      <span className="text-[11px] text-muted font-semibold">{s[2]}</span>
                    </motion.div>
                  ))}
                  <div className="mt-3 rounded-xl bg-gradient-to-r from-[#3b5bdb] to-[#0ea5e9] text-white px-4 py-3 text-center font-bold text-sm">
                    🎯 CLB 7+ · Express Entry Ready
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ PROGRAMME SNAPSHOT ══════════ */}
      <section className="sec-dark relative overflow-hidden py-14">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-sky w-[500px] h-[240px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center">
            {SNAPSHOT.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="md:border-r md:border-white/10 md:last:border-r-0">
                <div className="text-4xl md:text-5xl font-black gradient-text-light"><CountUp value={s.value} duration={1600} /></div>
                <div className="text-white/55 text-xs md:text-sm font-semibold mt-1 px-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHO THIS IS FOR ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">Is This Programme Right for You?</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">This programme is <span className="gradient-text">designed for.</span></h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {PROFILES.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card-feature rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center mb-3"><MuiIcon name={p.icon} size={24} style={{ color: "#3b5bdb" }} /></div>
                  <h3 className="font-bold text-ink">{p.title}</h3>
                  <p className="text-muted text-sm mt-1.5 leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ YOU'RE IN THE RIGHT PLACE IF ══════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10 max-w-3xl mx-auto text-center">
          <AnimateOnView className="mb-10">
            <span className="eyebrow-pill-outline">A Quick Check</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">You&apos;re in the <span className="gradient-text">right place if…</span></h2>
          </AnimateOnView>
          <StaggerContainer className="space-y-3 text-left" staggerDelay={0.08}>
            {RIGHT_PLACE.map((r) => (
              <StaggerItem key={r}>
                <div className="card rounded-2xl p-4 md:p-5 flex items-center gap-4">
                  <span className="w-9 h-9 rounded-full bg-royal-500 flex items-center justify-center flex-shrink-0"><CheckCircle size={18} className="text-white" /></span>
                  <p className="text-ink font-semibold text-sm md:text-base">{r}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ THE LEARNING JOURNEY ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-10 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">Your Path from A1 to B2</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">One structured journey. <span className="gradient-text">Four milestones. One complete you.</span></h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">Every step builds on the last — in language, in confidence, and in real-world immigration readiness.</p>
          </AnimateOnView>

          <StaggerContainer className="relative max-w-4xl mx-auto space-y-4 before:absolute before:left-[27px] before:top-3 before:bottom-3 before:w-px before:bg-royal-100 before:hidden before:md:block" staggerDelay={0.1}>
            {JOURNEY.map((s) => (
              <StaggerItem key={s.stage}>
                <div className={`relative md:pl-20 ${s.beyond ? "" : ""}`}>
                  <span className={`hidden md:flex absolute left-0 top-1 w-14 h-14 rounded-2xl items-center justify-center font-black text-sm shadow-lg z-10 ${s.beyond ? "bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] text-white" : "bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] text-white"}`}>{s.stage}</span>
                  <div className={`card rounded-2xl p-5 md:p-6 ${s.beyond ? "ring-1 ring-sky-200" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="md:hidden text-xs font-black text-white bg-royal-500 px-2.5 py-1 rounded-full">{s.stage}</span>
                      <h3 className="font-black text-ink text-lg">{s.title}</h3>
                      <span className="text-xs text-muted font-semibold">{s.meta}</span>
                    </div>
                    {s.beyond ? (
                      <p className="text-body text-sm mt-2 leading-relaxed">{s.outcome}</p>
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-3 text-sm">
                        <p className="text-body"><span className="font-bold text-ink">Outcome:</span> {s.outcome}</p>
                        <p className="text-body"><span className="font-bold text-ink">Immigration:</span> {s.context}</p>
                      </div>
                    )}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold bg-royal-50 border border-royal-100 text-royal-700 px-2.5 py-1 rounded-lg">Exam: {s.exam}</span>
                      {s.earn && <span className="text-[11px] font-semibold bg-amber-400/15 border border-amber-400/30 text-amber-600 px-2.5 py-1 rounded-lg">🏅 {s.earn}</span>}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ LEVEL-BY-LEVEL BREAKDOWN ══════════ */}
      <section id="curriculum" className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-outline">The Curriculum in Detail</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">What you study at <span className="gradient-text">every level.</span></h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">Each level is CEFR-aligned, immigration-contextualised, and assessment-driven — with Canadian life woven into every week.</p>
          </AnimateOnView>

          <div className="max-w-4xl mx-auto space-y-3">
            {LEVELS.map((lv, i) => {
              const open = openLevel === i;
              return (
                <div key={lv.code} className="card rounded-2xl overflow-hidden" style={{ borderColor: open ? "rgba(59,91,219,0.35)" : undefined }}>
                  <button onClick={() => setOpenLevel(open ? -1 : i)} className="w-full flex items-center gap-4 p-5 text-left hover:bg-royal-50/40 transition-colors">
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] text-white font-black flex items-center justify-center shadow-md">{lv.code}</span>
                    <div className="flex-1">
                      <h3 className="font-black text-ink">Level {lv.code}</h3>
                      <p className="text-muted text-xs">{lv.meta}</p>
                    </div>
                    <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }} className="text-royal-400"><ChevronDown size={20} /></motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                        <div className="px-5 pb-6 grid md:grid-cols-2 gap-6 border-t border-line pt-5">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-royal-600 mb-2">Topics Covered</p>
                            <Chips items={lv.topics} />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-sky-600 mb-2">Immigration Focus</p>
                            <Chips items={lv.immigration} accent />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-muted mb-2">Assessments</p>
                            <ul className="space-y-1.5">
                              {lv.assessments.map((a) => (<li key={a} className="flex items-start gap-2 text-sm text-body"><CheckCircle size={13} className="text-royal-500 mt-0.5 flex-shrink-0" />{a}</li>))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-muted mb-2">Weekly Work</p>
                            <Chips items={lv.weekly} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ WHAT MAKES THIS DIFFERENT ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">The ALB Difference</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">Most institutes teach you the language. <span className="gradient-text">We prepare you for what comes after.</span></h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">Six reasons serious immigration candidates choose ALB over a generic French class.</p>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {USPS.map((u, i) => (
              <StaggerItem key={u.title}>
                <div className="card-feature rounded-2xl p-6 h-full relative overflow-hidden">
                  <span className="absolute top-4 right-5 text-5xl font-black text-royal-50 select-none">{String(i + 1).padStart(2, "0")}</span>
                  <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center mb-3 relative z-10"><MuiIcon name={u.icon} size={24} style={{ color: "#3b5bdb" }} /></div>
                  <h3 className="font-bold text-ink relative z-10">{u.title}</h3>
                  <p className="text-muted text-sm mt-1.5 leading-relaxed relative z-10">{u.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ CURRICULUM HIGHLIGHTS ══════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-outline">What You&apos;ll Study</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">A curriculum built around <span className="gradient-text">Canadian life</span> — not just grammar books.</h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">Four curriculum pillars that go well beyond vocabulary lists and verb conjugation.</p>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-2 gap-5" staggerDelay={0.09}>
            {PILLARS.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card rounded-2xl p-7 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-royal-50 flex items-center justify-center"><MuiIcon name={p.icon} size={22} style={{ color: "#3b5bdb" }} /></div>
                    <h3 className="font-black text-ink text-lg">{p.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {p.items.map((it) => (<li key={it} className="flex items-start gap-2 text-sm text-body leading-relaxed"><CheckCircle size={14} className="text-royal-500 mt-0.5 flex-shrink-0" />{it}</li>))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ EXAM PREPARATION ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">Internationally Recognised · Immigration-Validated</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">TEF Canada &amp; TCF Canada preparation — <span className="gradient-text">built into the programme.</span></h2>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">Both exams are accepted by IRCC. ALB delivers complete TEF Canada preparation with immigration-specific vocabulary, timed mocks, and evaluator-trained feedback.</p>
          </AnimateOnView>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {EXAMS.map((e) => (
              <AnimateOnView key={e.name}>
                <div className="card rounded-3xl p-7 h-full">
                  <h3 className="font-black text-ink text-xl">{e.name}</h3>
                  <p className="text-muted text-sm italic">{e.full}</p>
                  <p className="text-body text-sm mt-3 leading-relaxed">{e.accepted}</p>
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-royal-600 mb-2">Components</p>
                    <Chips items={e.components} />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted mb-2">ALB prepares you with</p>
                    <ul className="space-y-1.5">
                      {e.prep.map((p) => (<li key={p} className="flex items-start gap-2 text-sm text-body"><CheckCircle size={13} className="text-royal-500 mt-0.5 flex-shrink-0" />{p}</li>))}
                    </ul>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>

          {/* CLB */}
          <AnimateOnView>
            <div className="sec-dark rounded-3xl p-7 md:p-9 relative overflow-hidden">
              <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black text-white">Understanding CLB Levels</h3>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed">Canadian immigration converts French exam results into Canadian Language Benchmarks (CLB). Higher CLB levels deliver:</p>
                  <span className="inline-flex items-center gap-2 mt-4 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-bold text-white">🎯 ALB B2 graduates target CLB 7+</span>
                </div>
                <ul className="space-y-2.5">
                  {CLB_POINTS.map((c) => (<li key={c} className="flex items-start gap-2.5 text-white/80 text-sm"><CheckCircle size={15} className="text-sky-300 mt-0.5 flex-shrink-0" />{c}</li>))}
                </ul>
              </div>
            </div>
          </AnimateOnView>

          {/* CEFR reference */}
          <AnimateOnView className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CEFR.map((c) => (
                <div key={c.l} className="card rounded-2xl p-5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-royal-50 text-royal-600 font-black text-sm flex items-center justify-center">{c.l}</span>
                    <span className="font-bold text-ink text-sm">{c.t}</span>
                  </div>
                  <p className="text-muted text-xs mt-2 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted text-xs mt-5 max-w-2xl mx-auto">All levels align with the Common European Framework of Reference (CEFR) — recognised by IRCC, Canadian immigration authorities, and academic institutions worldwide.</p>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════ WHAT'S INCLUDED (dark) ══════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-royal w-[460px] h-[460px] top-0 left-[-8%] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-light">Everything in Your Enrolment</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-1 leading-tight">One programme. <span className="gradient-text-light">Everything included.</span></h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">No add-ons. No hidden fees. No separate exam-prep packages sold on the side.</p>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto" staggerDelay={0.05}>
            {INCLUDED.map((it) => (
              <StaggerItem key={it}>
                <div className="card-dark rounded-xl p-4 flex items-start gap-3 h-full">
                  <CheckCircle size={16} className="text-sky-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white/85 text-sm leading-relaxed">{it}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimateOnView className="mt-6 max-w-3xl mx-auto">
            <p className="text-white/45 text-xs text-center leading-relaxed">Note: Third-party examination registration fees for TEF Canada, TCF Canada, or DELF are charged separately by the respective examination bodies and are not included in ALB&apos;s programme fees.</p>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════ LEARNING OUTCOMES ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] bottom-0 right-[-8%] opacity-40 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-blue">What You Will Be Able to Do</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">After the ALB French Master Pathway, <span className="gradient-text">you will:</span></h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 gap-3 max-w-4xl mx-auto" staggerDelay={0.05}>
            {OUTCOMES.map((o) => (
              <StaggerItem key={o}>
                <div className="card rounded-xl p-4 flex items-start gap-3 h-full">
                  <span className="w-6 h-6 rounded-full bg-royal-500 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle size={13} className="text-white" /></span>
                  <span className="text-body text-sm leading-relaxed">{o}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ HOW TO JOIN ══════════ */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-outline">Your Next Steps</span>
            <h2 className="text-3xl md:text-5xl font-black text-ink mt-1 leading-tight">Five steps to start your <span className="gradient-text">French journey.</span></h2>
          </AnimateOnView>
          <StaggerContainer className="max-w-3xl mx-auto space-y-3" staggerDelay={0.1}>
            {STEPS.map((s) => (
              <StaggerItem key={s.n}>
                <div className="card rounded-2xl p-5 md:p-6 flex gap-5 items-start">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] text-white font-black flex items-center justify-center flex-shrink-0 shadow-lg shadow-royal-500/25">{s.n}</span>
                  <div>
                    <h3 className="font-black text-ink">{s.title}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ MEET THE INSTRUCTORS (dark) ══════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
        <div className="blob blob-sky w-[440px] h-[440px] top-0 right-[-8%] pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill-light">The Experts Behind Your Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-1 leading-tight">Instructors who know both <span className="gradient-text-light">the language and the destination.</span></h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">Our mentors bring together language expertise, exam-prep experience, and professional development coaching — not just textbook teaching.</p>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {INSTRUCTORS.map((m) => (
              <StaggerItem key={m.title}>
                <div className="card-dark-hover rounded-2xl p-7 h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg" style={{ background: `linear-gradient(135deg, ${m.from}, ${m.to})` }}><MuiIcon name={m.icon} size={26} style={{ color: "#fff" }} /></div>
                  <h3 className="font-black text-white text-lg">{m.title}</h3>
                  <p className="text-white/55 text-sm mt-2 leading-relaxed">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-royal w-[400px] h-[400px] top-10 right-[-8%] opacity-30 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-12 lg:gap-16 items-start">
            {/* sticky intro */}
            <AnimateOnView direction="right" className="lg:sticky lg:top-28">
              <span className="eyebrow-pill-blue">Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-1 leading-tight">
                Everything you want to know <span className="gradient-text">before you enrol.</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed text-sm">
                Batches, exams, fees, CLB and more — answered. Still unsure? A free trial class makes it clear.
              </p>
              <div className="mt-6 card rounded-2xl p-5">
                <p className="font-bold text-ink text-sm">Still have a question?</p>
                <p className="text-muted text-xs mt-1">Talk to an ALB advisor — no obligation.</p>
                <button onClick={() => openModal("French Language")} className="btn-primary text-sm px-4 py-2.5 mt-4">
                  Book a Free Trial <ArrowRight size={14} />
                </button>
              </div>
            </AnimateOnView>

            {/* accordion */}
            <StaggerContainer className="space-y-3" staggerDelay={0.04}>
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <StaggerItem key={f.q}>
                    <div className="card rounded-2xl relative overflow-hidden" style={{ borderColor: open ? "rgba(59,91,219,0.35)" : undefined }}>
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3b5bdb] to-[#38bdf8] origin-top transition-transform duration-300 ${open ? "scale-y-100" : "scale-y-0"}`} />
                      <button onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center gap-4 p-5 text-left hover:bg-royal-50/40 transition-colors" aria-expanded={open}>
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] text-white font-black text-xs flex items-center justify-center shadow-md shadow-royal-500/25">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="flex-1 font-bold text-ink text-[15px] leading-snug">{f.q}</h3>
                        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0 text-royal-400"><ChevronDown size={18} /></motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} className="overflow-hidden">
                            <p className="px-5 pb-5 pl-[3.75rem] text-body text-sm leading-relaxed">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA (dark) ══════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <div className="blob blob-royal w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <AnimateOnView>
            <span className="eyebrow-pill-light">Your Canada Story Begins With One Conversation</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 max-w-3xl mx-auto leading-tight">
              Your French journey starts here. <span className="gradient-text-light">Your Canadian dream follows.</span>
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              The candidates who succeed prepare smarter. Book your free trial class and speak to an ALB advisor who&apos;ll map your immigration timeline to your language goals — at no cost, no obligation.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
              {["Assess your current French proficiency level", "Map your immigration timeline to your language goals", "Design a personalised study plan", "Recommend the right exam pathway — TEF or TCF Canada"].map((c) => (
                <div key={c} className="flex items-start gap-2.5 text-white/75 text-sm"><CheckCircle size={15} className="text-sky-300 mt-0.5 flex-shrink-0" />{c}</div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <button onClick={() => openModal("French Language")} className="btn-white text-base px-8 py-4">Book Your Free French Trial Class <ArrowRight size={16} /></button>
              <button onClick={() => openModal("French Language")} className="btn-outline-light text-base px-8 py-4">Speak to an Advisor</button>
            </div>
            <p className="mt-5 text-white/40 text-xs">No Obligation · No Cost · Just Clarity</p>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
