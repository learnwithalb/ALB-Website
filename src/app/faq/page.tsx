"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Sparkles, Globe, GraduationCap, ArrowRight, MessageCircleQuestion } from "lucide-react";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { useBooking } from "@/components/shared/BookingContext";
import { Flag } from "@/lib/icons";
import { faqs } from "@/lib/constants";
import { FRENCH, GERMAN, ENGLISH } from "@/lib/courseData";

/* ─────────────── curated cross-site FAQ groups ─────────────── */

const GENERAL = faqs.filter((f) =>
  [
    "What languages does ALB teach?",
    "Can I learn French, German, or English online from India?",
    "What is the CEFR language level system, and which level do I need?",
    "Which language should I learn for Canada immigration, French or English?",
    "Does learning French or German improve my chances of getting a job abroad?",
  ].includes(f.q),
);

const ABOUT = [
  { q: "What makes ALB different from language apps like Duolingo or Babbel?", a: "Language apps build vocabulary and habit but have real limitations, no live instructor, no speaking practice under real conditions, no structured exam preparation, and no professional soft skills layer. ALB offers live instructor-led classes capped at 12 students, built-in preparation for internationally recognised certifications, and a +Beyond soft skills module, designed for learners with a real goal beyond the language itself." },
  { q: "What is the +Beyond Global Confidence Programme?", a: "+Beyond is ALB's signature soft-skills programme. It focuses on public speaking, presentation skills, interview readiness, professional communication, personal branding, and confidence-building to help learners succeed beyond language learning." },
  { q: "Are classes live or recorded?", a: "All classes are conducted live by experienced instructors in small batches. Session recordings are also shared with enrolled learners for revision and practice." },
  { q: "How many students are there in each batch?", a: "ALB maintains small cohorts to ensure personalised attention, speaking opportunities, individual feedback, and active participation for every learner." },
  { q: "Will I receive a certificate after completing the programme?", a: "Yes. Learners receive ALB completion certificates at milestone levels. Students pursuing exam preparation also receive mock assessment reports and performance feedback throughout the programme." },
  { q: "Can I attend a trial class before enrolling?", a: "Yes. ALB offers a free trial class so learners can experience the teaching methodology, meet the instructor, and understand the programme before making a decision." },
];

const PROGRAMMES = [
  { q: "How long does it take to go from beginner to B2 level in a language?", a: "At ALB, the full journey from A1 beginner to B2 upper-intermediate takes 36 weeks across four levels for French and German, approximately nine months of consistent study. Each level runs eight to ten weeks, with three live sessions per week plus daily AI-powered speaking practice. Individual timelines vary based on prior language exposure and consistency of practice." },
  { q: "What exams can I prepare for at ALB?", a: "ALB prepares learners for the full range of internationally recognised language examinations: DELF (A1 to B2) and DALF (C1) for French; Goethe-Zertifikat (A1 to B2), TestDaF, and DSH for German; and IELTS Academic and General Training for English. TEF Canada and TCF Canada preparation is built into the French B1 and B2 levels. Exam preparation is included in every course, not sold separately." },
  { q: "Do I need perfect grammar before I start speaking?", a: "No. One of the biggest misconceptions is that learners must master grammar before speaking. At ALB, learners begin speaking from the start while improving grammar naturally through structured communication practice and feedback." },
  { q: "Why do many learners understand a language but struggle to speak it?", a: "This usually happens because learners spend years studying a language academically without sufficient speaking practice. ALB focuses on active communication, helping learners convert passive knowledge into real-world speaking ability." },
];

type Cat = {
  key: string;
  label: string;
  accent: string;
  items: { q: string; a: string }[];
  Icon?: typeof Globe;
  flag?: string;
};

const CATEGORIES: Cat[] = [
  { key: "general", label: "General", accent: "#3b5bdb", Icon: Globe, items: GENERAL },
  { key: "about", label: "About ALB", accent: "#8b5cf6", Icon: Sparkles, items: ABOUT },
  { key: "programmes", label: "Programmes", accent: "#0ea5e9", Icon: GraduationCap, items: PROGRAMMES },
  { key: "french", label: "French Programme", accent: "#2563EB", flag: "FR", items: [...FRENCH.faq] },
  { key: "german", label: "German Programme", accent: "#B45309", flag: "DE", items: [...GERMAN.faq] },
  { key: "english", label: "English Programme", accent: "#012169", flag: "EN", items: [...ENGLISH.faq] },
];

/* ─────────────── page ─────────────── */

export default function FaqPage() {
  const { openModal } = useBooking();
  const [activeKey, setActiveKey] = useState("general");
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const active = CATEGORIES.find((c) => c.key === activeKey) ?? CATEGORIES[0];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return active.items;
    return active.items.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [active, query]);

  const selectCat = (key: string) => {
    setActiveKey(key);
    setOpen(0);
    setQuery("");
  };

  return (
    <>
      {/* ── hero ── */}
      <section className="hero-light pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[460px] h-[360px] top-0 right-[-6%] pointer-events-none opacity-60" />
        <div className="blob blob-sky w-[360px] h-[360px] bottom-[-30%] left-[-6%] pointer-events-none opacity-40" />
        <div className="container-max px-5 md:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <AnimateOnView>
            <span className="eyebrow-pill-outline inline-flex items-center gap-2">
              <MessageCircleQuestion size={14} /> Help Centre
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-ink mt-4 leading-[1.08]">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
              Everything you need to know about languages, ALB, programmes, fees, and more.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* ── body ── */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] top-1/3 right-[-10%] opacity-25 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-[270px_1fr] gap-8 lg:gap-12 items-start">
            {/* ── left: category nav ── */}
            <nav className="lg:sticky lg:top-28">
              {/* mobile: horizontal scroll · desktop: vertical list */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {CATEGORIES.map((c) => {
                  const on = c.key === activeKey;
                  return (
                    <button
                      key={c.key}
                      onClick={() => selectCat(c.key)}
                      className="group relative flex items-center gap-3 rounded-xl px-4 py-3 text-left whitespace-nowrap flex-shrink-0 transition-colors"
                    >
                      {on && (
                        <motion.span
                          layoutId="faqActiveCat"
                          className="absolute inset-0 rounded-xl"
                          style={{ background: c.accent, boxShadow: `0 14px 30px -12px ${c.accent}cc` }}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0" style={{ background: on ? "rgba(255,255,255,0.18)" : `${c.accent}14` }}>
                        {c.flag ? (
                          <Flag code={c.flag} size={18} rounded="rounded" />
                        ) : c.Icon ? (
                          <c.Icon size={15} style={{ color: on ? "#fff" : c.accent }} />
                        ) : null}
                      </span>
                      <span className={`relative z-10 text-sm font-bold ${on ? "text-white" : "text-ink group-hover:text-royal-700"}`}>{c.label}</span>
                      <span className={`relative z-10 ml-auto text-[11px] font-black rounded-full px-2 py-0.5 ${on ? "bg-white/20 text-white" : "bg-line/60 text-muted"}`}>{c.items.length}</span>
                    </button>
                  );
                })}
              </div>

              {/* still stuck CTA */}
              <div className="hidden lg:block mt-6 rounded-2xl p-5 card">
                <p className="text-sm font-black text-ink">Still have a question?</p>
                <p className="text-xs text-muted mt-1 leading-relaxed">Book a free demo and talk to an advisor, zero commitment.</p>
                <button onClick={() => openModal("FAQ Page")} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-royal-600 hover:gap-2.5 transition-all">
                  Get in touch <ArrowRight size={14} />
                </button>
              </div>
            </nav>

            {/* ── right: search + accordion ── */}
            <div>
              {/* search */}
              <div className="relative mb-6">
                <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setOpen(null); }}
                  placeholder={`Search ${active.label} questions...`}
                  className="w-full rounded-2xl border border-line bg-white pl-11 pr-4 py-3.5 text-sm text-ink placeholder:text-muted/70 outline-none transition-shadow focus:border-royal-300 focus:shadow-[0_0_0_4px_rgba(59,91,219,0.12)]"
                />
              </div>

              {/* active category heading */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-2 w-2 rounded-full" style={{ background: active.accent }} />
                <h2 className="text-lg font-black text-ink">{active.label}</h2>
                <span className="text-xs text-muted font-semibold">· {visible.length} {visible.length === 1 ? "question" : "questions"}</span>
              </div>

              {/* list */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeKey + query}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-2.5"
                >
                  {visible.length === 0 && (
                    <div className="card rounded-2xl px-6 py-10 text-center">
                      <p className="text-ink font-bold">No matching questions.</p>
                      <p className="text-muted text-sm mt-1">Try a different search term or category.</p>
                    </div>
                  )}

                  {visible.map((f, i) => {
                    const isOpen = open === i;
                    return (
                      <motion.div
                        key={f.q}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        className="card rounded-2xl overflow-hidden"
                        style={isOpen ? { borderColor: `${active.accent}66`, boxShadow: `0 18px 40px -22px ${active.accent}99` } : undefined}
                      >
                        <button
                          onClick={() => setOpen(isOpen ? null : i)}
                          className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left transition-colors hover:bg-royal-50/40"
                        >
                          <span className="font-bold text-ink text-sm md:text-[15px]">{f.q}</span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full"
                            style={{ background: isOpen ? active.accent : "rgba(16,23,51,0.05)", color: isOpen ? "#fff" : "#737d9c" }}
                          >
                            <ChevronDown size={16} />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: "easeInOut" }}
                            >
                              <div className="px-5 md:px-6 pb-5 text-body text-sm leading-relaxed border-t border-line pt-4">{f.a}</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
