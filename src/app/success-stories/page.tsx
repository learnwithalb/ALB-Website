"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Quote, Star, MapPin, Sparkles } from "lucide-react";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { CountUp } from "@/components/shared/CountUp";
import { Flag, MuiIcon } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";

/* ─────────────────────────  DATA  ───────────────────────── */

type Lang = "French" | "German" | "English" | "Multi";

interface Story {
  id: number;
  name: string;
  lang: Lang;
  track: string;
  location: string;
  init: string;
  text: string;
  featured?: boolean;
}

const STORIES: Story[] = [
  { id: 1, name: "Priya Sharma", lang: "French", track: "Immigration Track", location: "Toronto", init: "PS", text: "I joined ALB because I'd read that French could significantly help with Canada's Express Entry system, but I had no idea how the CRS or TEF Canada actually worked. The programme didn't just teach me French, they explained the whole immigration mechanism, why language matters for the score, what the CLB conversion means. I've never had a language school actually contextualise what I was learning inside the goal I was trying to reach. Four months in, my French is at B1 and I have a clear path to what I need before I'm exam-ready. The soft skills sessions were something I didn't expect and genuinely valued." },
  { id: 2, name: "Aditya Menon", lang: "French", track: "Academic Track", location: "Hyderabad", init: "AM", text: "I was preparing for DELF B2 for my university applications and had tried self-studying for almost a year before joining ALB. The difference was the mock examination sessions, real timed practice with written corrections that told me specifically what to fix, not just whether I'd passed or failed. The speaking mocks were nerve-wracking but essential, by the time I sat the real exam the format didn't feel unfamiliar. The student success team also spent time with me on my application statement, which I hadn't expected at all. That kind of support is rare." },
  { id: 3, name: "Kabir Malhotra", lang: "French", track: "Sprint Track", location: "Ontario", init: "KM", text: "I did Sprint because I had a hard deadline. I'd looked at a few other intensive options and what made ALB's Sprint different was their extensive TEF prep module. Daily classes are difficult to commit to when you have a full-time job, I won't pretend otherwise. But the progress is proportional to the commitment, and by week twelve I was producing French I couldn't have imagined at week one. The soft skills work woven into Sprint, presentation, speaking under pressure, was a smart addition to what could have just been a grammar sprint." },
  { id: 4, name: "Neha Iyer", lang: "French", track: "Career Track", location: "Mumbai", init: "NI", text: "My work involves a lot of interaction with France-based teams and I was tired of being the person in the meeting who needed everything repeated or translated. The Career Track at ALB is genuinely workplace-focused, professional vocabulary, email structure, how to participate confidently in a meeting when you're not yet fluent. Three months in, I followed an entire client call without interpretation for the first time. The soft skills sessions have been an added bonus that extends well beyond French, I've used those frameworks in English presentations too." },
  { id: 5, name: "Sunita Kapoor", lang: "French", track: "Junior Track", location: "Ghaziabad", init: "SK", text: "I was genuinely unsure whether my son would take to structured language learning or whether it would feel like extra school. It doesn't. He talks about his French class the way he talks about things he's chosen, not things he's obligated to. The junior teaching approach is noticeably different from adult programmes, games, role-plays, storytelling, not grammar drills. What I value as a parent, beyond the French, is that he's developing confidence in communicating. He presented a small project in class last term and I watched a child who normally hates speaking in front of people stand up and do it without falling apart." },
  { id: 6, name: "Tanvi Krishnan", lang: "French", track: "Career Track", location: "Bangalore", init: "TK", text: "I've always struggled with speaking up, in meetings, in class, anywhere with a group. I joined ALB for the French, not thinking it would change anything about that. But the small batch size means there's nowhere to hide, and somehow that gentle pressure started to shift something. Five months in, my French has progressed meaningfully, but what I keep telling people is the soft skills component. Presentation skills, speaking under pressure, how to structure a thought before you say it out loud. They've crossed over into my English professional life in ways I didn't expect." },
  { id: 7, name: "Rohan Bose", lang: "French", track: "Academic Track", location: "Kolkata", init: "RB", featured: true, text: "My first application to a programme in France was unsuccessful. The rejection was about how I'd presented my application, the language was acceptable but my statement of purpose didn't make sense to a French academic admissions committee. I mentioned this to ALB's student success team almost in passing. They took it seriously in a way I didn't expect. Over several sessions, they helped me understand what I'd missed, how to frame my background differently, what narrative would resonate with French institutions. I rebuilt my application. I applied again. I got in. I don't know if other language schools do this. I don't think most do. It was the thing that made the biggest difference in the end." },
  { id: 8, name: "Vikram Sharma", lang: "German", track: "Immigration Track", location: "Pune", init: "VS", text: "I'm planning to move to Germany on a skilled worker visa, and I needed German that was actually functional for that purpose, not tourist German, not classroom German, but the kind you need for official appointments, workplace communication, and daily settlement scenarios. ALB's German Immigration track covers all of that. They explained the immigration pathway too, the Chancenkarte, how language proficiency feeds into visa requirements. The trainers are patient with German's complexity, and the small batch means you get corrected constantly. I'm at A2, moving to B1, and Germany feels like a realistic near-term plan rather than an abstract aspiration." },
  { id: 9, name: "Shruti Ramanathan", lang: "German", track: "Academic Track", location: "Chennai", init: "SR", text: "I'm applying for a Studienkolleg in Germany as a pathway to university, and my German needed to be strong enough to actually study in it, not just to gain entry. ALB's German Academic track is the first programme I've found that treats this goal seriously, building toward reading academic German, writing structured arguments, understanding lecture-style audio. It's not Duolingo. It's structured, demanding, and genuinely educational. The DAAD pathway context was something they explained clearly too. I feel genuinely prepared rather than just hopeful." },
  { id: 10, name: "Arjun Nair", lang: "German", track: "Career Track", location: "Gurgaon", init: "AN", text: "My company works with clients across Germany and Austria, and my German was essentially zero when I started. Career Track at ALB is built around professional communication, business German, how to handle client calls and emails, how to contribute in a meeting when you're not yet fluent. The soft skills component is something I keep recommending to colleagues: professional self-presentation, how to structure spoken communication quickly, interview preparation framed through German business culture. Six months in my German is at B1 and I'm having actual professional conversations in it. Not perfect ones. Real ones. That distinction matters." },
  { id: 11, name: "Pooja Mehta", lang: "German", track: "Sprint Track", location: "Berlin", init: "PM", text: "Chose Sprint because I had no choice, I needed to reach a functional German level within a specific timeline for a visa-related reason. Daily classes with ALB's German Sprint track are intense and I won't sugarcoat that. By week ten, I was producing German sentences I couldn't have imagined in week one. The soft skills sessions, managing communication under pressure, speaking without shutting down when you make errors, were particularly useful in German, where fear of making mistakes can really hold you back. Recommend Sprint only if you're genuinely committed to showing up every day. If you are, it works." },
  { id: 12, name: "Ravi Gupta", lang: "German", track: "Junior Track", location: "Mumbai", init: "RG", text: "My daughter takes German at school as a second language and was struggling with it. I enrolled her in ALB's Junior track expecting it to function like tuition. It's been more than that. The programme has its own structure and pace, and the way they teach at this age is genuinely different from a school classroom, more interactive, more oral practice, more real-world contexts. Her school grades have improved but more importantly she's less anxious about German. She used to dread German class. Now she doesn't. That change in attitude is worth more to me than any particular grade." },
  { id: 13, name: "Meera Joshi", lang: "English", track: "IELTS Advantage", location: "Bengaluru", init: "MJ", text: "I'd sat IELTS twice before joining ALB and couldn't clear the band I needed, specifically my Writing score kept pulling the overall down. The IELTS Advantage track treated this as a specific, diagnosable problem, not a general 'practise more' situation. I understood why a sentence wasn't working, not just that it was wrong. The speaking mock sessions were the other thing that made a real difference, I now know exactly what Part 3 questions are trying to assess and how to respond under time pressure. I sat the exam after the programme and cleared the band I needed." },
  { id: 14, name: "Sana Khan", lang: "English", track: "Communication Track", location: "Lucknow", init: "SK", text: "I can read and understand English well but speaking it confidently in professional settings has always been a struggle since my schooling was from UP Board. The English Communication track addressed this directly, not grammar from scratch, but functional, real-world communication practice with consistent correction. The soft skills component ran alongside from the beginning: presentation skills, how to contribute in meetings, professional email tone, interview preparation. After about three months I handled a client presentation in English I would not have been able to do before, not because my grammar changed dramatically but because my relationship with speaking under pressure changed." },
  { id: 15, name: "Nikhil Reddy", lang: "English", track: "Career English Lab", location: "Hyderabad", init: "NR", text: "I joined Career English Lab specifically for the professional communication dimension, my English was functional but my writing was too casual for the level I was trying to operate at. The Lab is designed for exactly this: professional email register, business writing that's clear and direct, meeting language, stakeholder communication, interview preparation. The soft skills sessions have been the most valuable component, how to handle difficult conversations, how to present proposals, how to structure a negotiation. These extend well beyond language. I've recommended this to two colleagues already." },
  { id: 16, name: "Divya Kulkarni", lang: "French", track: "Immigration Track", location: "Calgary", init: "DK", featured: true, text: "I want to write specifically about the soft skills component because it's not something I've seen other language institutes take seriously in this way. Interview preparation, presentation skills, public speaking basics, how to communicate under pressure, these are woven into every ALB programme as a standard part of the curriculum, not an upsell. I've attended workshops at my company that cost significantly more and covered this material less practically. I joined for French. I'm leaving with a noticeably different relationship with professional communication in any language. It changed things for me." },
  { id: 17, name: "Amit Sehgal", lang: "German", track: "Small Batch Experience", location: "Delhi", init: "AS", featured: true, text: "I've tried three language institutes in the last four years. The differences are many but the one that matters most is batch size. At the others I was one of fifteen to twenty learners. I might speak once in a session, get a correction once a week. At ALB the cap is genuinely small, five to six people. I speak every session. I get corrected every session. The trainer knows specifically where I struggle and addresses it proactively. Six months of ALB's German has produced more functional language ability than eighteen months at two other institutes combined. I'm not exaggerating. I genuinely wish I'd found this sooner." },
  { id: 18, name: "Ananya Pillai", lang: "Multi", track: "French and German Career", location: "Bengaluru", init: "AP", text: "I completed the French Career track first and then started German, same institute, same teaching philosophy, different trainers. The continuity of approach made the transition easier than I expected. The CEFR-aligned progression means my French A2 concepts helped me understand the structural logic of German A1 more quickly, which sounds counterintuitive but genuinely worked. Having one language school for both has been practical and consistent. ALB has become my long-term language partner. I'm now in French B1 and German A2 simultaneously, which would have seemed impossible to me two years ago." },
  { id: 19, name: "Priyanka Desai", lang: "Multi", track: "Junior, French + German", location: "Mumbai", init: "PD", text: "Both my children are enrolled at ALB, one in Junior French, one in Junior German. The reasons are partly practical (future educational options, study abroad, the cognitive benefits of multilingualism) and partly instinctive. What ALB's junior programme does well is hold the balance between structure and joy. These are not grammar classes with a friendly teacher. They are genuinely designed for how children engage, through stories, games, performances, projects. Worth every bit of the commitment." },
  { id: 20, name: "Jasleen Kaur", lang: "French", track: "Immigration Track", location: "Chandigarh", init: "JK", featured: true, text: "I'm going to be honest: I didn't expect to feel this way about a language school. I expected lessons, practice, maybe some exam prep. What I got was a programme that treats the reason I'm learning French, Canada, PR, a different life, as part of the educational context rather than just my personal problem. The immigration pathway explanation was thorough and clear. The French teaching is rigorous and consistent. The small batch means the trainer actually knows my name and my specific gaps. And the student success team has answered questions about my immigration journey that weren't strictly about language at all." },
];

const LANG_META: Record<Lang, { color: string; soft: string; flags: string[]; label: string }> = {
  French: { color: "#3b5bdb", soft: "#2f49c0", flags: ["FR"], label: "French" },
  German: { color: "#d97706", soft: "#b45309", flags: ["DE"], label: "German" },
  English: { color: "#059669", soft: "#047857", flags: ["EN"], label: "English" },
  Multi: { color: "#7c3aed", soft: "#6d28d9", flags: ["FR", "DE"], label: "French and German" },
};

const FILTERS: { key: "All" | Lang; label: string }[] = [
  { key: "All", label: "All Stories" },
  { key: "French", label: "French" },
  { key: "German", label: "German" },
  { key: "English", label: "English" },
  { key: "Multi", label: "Multilingual" },
];

const HERO_STATS = [
  { n: "3", l: "Languages", icon: "language", color: "#3b5bdb" },
  { n: "4", l: "Goal-Based Tracks", icon: "target", color: "#0ea5e9" },
  { n: "+Beyond", l: "Soft Skills Included", icon: "sparkle", color: "#8b5cf6" },
  { n: "1 Community", l: "Learners Growing Globally", icon: "people", color: "#f59e0b" },
];

/* ─────────────────────────  PIECES  ───────────────────────── */

function Stars({ color = "#fbbf24", size = 14 }: { color?: string; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -40 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.07, type: "spring", stiffness: 320, damping: 14 }}
        >
          <Star size={size} fill={color} style={{ color }} />
        </motion.span>
      ))}
    </div>
  );
}

function LangBadge({ flags }: { flags: string[] }) {
  return (
    <span className="flex -space-x-2">
      {flags.map((f, i) => (
        <span key={f} className="rounded-full ring-2 ring-white shadow-sm" style={{ zIndex: flags.length - i }}>
          <Flag code={f} size={26} rounded="rounded-full" />
        </span>
      ))}
    </span>
  );
}

function StoryCard({ s, index }: { s: Story; index: number }) {
  const meta = LANG_META[s.lang];
  const c = meta.color;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 6) * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative mb-5 break-inside-avoid rounded-2xl bg-white overflow-hidden"
      style={{
        border: "1px solid #e6ebf5",
        borderTop: `3px solid ${c}`,
        boxShadow: "0 1px 2px rgba(16,23,51,0.04), 0 10px 30px rgba(16,23,51,0.05)",
      }}
    >
      {/* hover glow wash */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(120% 80% at 100% 0%, ${c}0f 0%, transparent 60%)` }}
      />

      {s.featured && (
        <span
          className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white shadow-sm"
          style={{ background: `linear-gradient(135deg, ${c}, ${meta.soft})` }}
        >
          <Sparkles size={11} /> Featured
        </span>
      )}

      <div className="relative z-[1] p-6">
        {/* big quote mark */}
        <motion.span
          className="block"
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Quote size={30} className="transition-transform duration-300 group-hover:scale-110" style={{ color: `${c}` }} fill={`${c}1f`} />
        </motion.span>

        <p className={`mt-3 text-body leading-relaxed ${s.featured ? "text-[15px]" : "text-sm"}`}>{s.text}</p>

        <div className="mt-5 pt-4 flex items-center gap-3 border-t border-line">
          <div className="min-w-0 flex-1">
            <p className="font-bold text-ink text-sm leading-tight truncate">{s.name}</p>
            <p className="text-muted text-xs flex items-center gap-1 mt-0.5">
              <MapPin size={11} style={{ color: c }} />
              <span className="truncate">{s.location}</span>
            </p>
          </div>
          <LangBadge flags={meta.flags} />
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <span
            className="text-[11px] font-bold px-2.5 py-1 rounded-full"
            style={{ color: meta.soft, background: `${c}12`, border: `1px solid ${c}2e` }}
          >
            {meta.label} · {s.track}
          </span>
          <Stars color={c} />
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────  PAGE  ───────────────────────── */

export default function SuccessStoriesPage() {
  const { openModal } = useBooking();
  const [filter, setFilter] = useState<"All" | Lang>("All");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  const shown = filter === "All" ? STORIES : STORIES.filter((s) => s.lang === filter);

  const counts: Record<string, number> = {
    All: STORIES.length,
    French: STORIES.filter((s) => s.lang === "French").length,
    German: STORIES.filter((s) => s.lang === "German").length,
    English: STORIES.filter((s) => s.lang === "English").length,
    Multi: STORIES.filter((s) => s.lang === "Multi").length,
  };

  return (
    <>
      {/* scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{ scaleX: progress, background: "linear-gradient(90deg,#3b5bdb,#0ea5e9,#059669)" }}
      />

      {/* ══════════ HERO ══════════ */}
      <section className="relative hero-light overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10">
          {/* scattered portrait arc */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full mx-auto max-w-6xl"
          >
            <Image
              src="/images/ss-hero-image.png"
              alt="ALB learners from various backgrounds"
              width={3063}
              height={957}
              priority
              sizes="100vw"
              className="w-full h-auto select-none pointer-events-none [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]"
            />

            {/* copy tucked under the arch, flanked by the lower portraits */}
            <div className="relative -mt-8 md:-mt-16 lg:-mt-20">
              <div className="max-w-2xl mx-auto text-center px-2">
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-royal-700 bg-royal-50 border border-royal-100 rounded-full px-3.5 py-1.5"
                >
                  <Sparkles size={12} /> Success Stories
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-ink leading-[1.05] tracking-tight mt-4"
                >
                  Trusted by learners
                  <br />
                  <span className="text-muted">chasing bigger goals.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.75 }}
                  className="mt-5 text-base md:text-lg text-body max-w-xl mx-auto leading-relaxed"
                >
                  From immigration files and university admissions to first confident client calls, see why learners across French, German, and English choose ALB.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="mt-7 flex justify-center"
                >
                  <a
                    href="#stories"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-ink text-white font-bold text-base px-7 py-3.5 shadow-[0_14px_34px_-12px_rgba(14,23,51,0.7)] transition-transform hover:-translate-y-0.5"
                  >
                    Read Success Stories
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {HERO_STATS.map((s, i) => (
              <motion.div
                key={s.l}
                className="group relative card rounded-2xl text-center px-4 py-6 overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, delay: i * 0.02 }}
              >
                {/* top accent line */}
                <span className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}33)` }} />
                {/* hover glow */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" style={{ background: s.color }} />
                {/* icon badge */}
                <span
                  className="relative z-10 mx-auto mb-3 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}1a`, boxShadow: `inset 0 0 0 1px ${s.color}33` }}
                >
                  <MuiIcon name={s.icon} size={20} style={{ color: s.color }} />
                </span>
                <div className="relative z-10 text-xl md:text-2xl font-black gradient-text leading-tight">
                  <CountUp value={s.n} duration={1600} />
                </div>
                <div className="relative z-10 text-[10.5px] md:text-xs font-bold uppercase tracking-wider text-muted mt-1.5">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ STORIES + FILTER ══════════ */}
      <section id="stories" className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-10 right-[-8%] opacity-30 pointer-events-none" />
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 left-[-8%] opacity-25 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">In Their Own Words</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2 leading-tight">
              Stories that started with a goal, and{" "}
              <span className="gradient-text">ended with a result.</span>
            </h2>
            <p className="mt-3 text-body leading-relaxed">
              Filter by language and read the full, unedited words of learners who trusted ALB with their next chapter.
            </p>
          </AnimateOnView>

          {/* filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {FILTERS.map((f) => {
              const on = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className="relative px-4 py-2 rounded-full text-sm font-bold transition-colors"
                  style={{ color: on ? "#fff" : "#46506e" }}
                >
                  {on && (
                    <motion.span
                      layoutId="filterPill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "linear-gradient(135deg,#3b5bdb,#2f49c0)", boxShadow: "0 8px 22px -8px rgba(59,91,219,0.7)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {!on && <span className="absolute inset-0 rounded-full bg-mist border border-line" />}
                  <span className="relative z-10 inline-flex items-center gap-1.5">
                    {f.label}
                    <span
                      className="text-[10px] font-black px-1.5 py-0.5 rounded-full"
                      style={on ? { background: "rgba(255,255,255,0.22)", color: "#fff" } : { background: "#fff", color: "#737d9c" }}
                    >
                      {counts[f.key]}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* masonry grid — re-keyed by filter so it replays the reveal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="columns-1 md:columns-2 lg:columns-3 gap-5"
            >
              {shown.map((s, i) => (
                <StoryCard key={s.id} s={s} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="section-padding sec-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-dots-light opacity-30 pointer-events-none" />
        <motion.div
          className="blob blob-royal w-[700px] h-[420px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container-max px-5 md:px-8 relative z-10 text-center">
          <AnimateOnView>
            <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#6d8bff" }}>
              Your Turn
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 max-w-3xl mx-auto leading-tight">
              The next success story on this page could be{" "}
              <span className="gradient-text-light">yours.</span>
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto">
              Book a free trial class, meet your trainer, and see how a goal-based programme feels. No obligation, just clarity.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => openModal()} className="btn-white text-base px-8 py-4">
                Book a Free Trial Class <ArrowRight size={16} />
              </button>
              <button onClick={() => openModal()} className="btn-outline-light text-base px-8 py-4">
                Speak to an Advisor
              </button>
            </div>
            <p className="mt-5 text-white/40 text-xs">No Obligation · No Cost · Just Clarity</p>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
