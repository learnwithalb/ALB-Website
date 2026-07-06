"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Quote, Star, MapPin, Sparkles, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { useBooking } from "@/components/shared/BookingContext";
import { JsonLd } from "@/components/seo/JsonLd";
import { reviewSchema } from "@/lib/schema";

/* Minimal YouTube IFrame API typings (only what we use) */
type YTPlayer = {
  loadVideoById: (id: string) => void;
  playVideo: () => void;
  unMute: () => void;
  destroy: () => void;
};
declare global {
  interface Window {
    YT?: {
      Player: new (el: string | HTMLElement, opts: unknown) => YTPlayer;
      PlayerState: { ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

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

/* YouTube Shorts — learner success stories, played inline in the hero carousel.
   First entry plays first on load (Jasmeet — the girl in the black top). */
const VIDEOS = [
  "cOCET-r7ZBs", // Jasmeet — France admission (plays first, centre)
  "l9zL8_Olw1g", "ZQ6KzcxhGSU", "zyu7vOwR6sg", "CaVjCYreDog",
  "qn8nEVg2jnI", "tfIEqrVO8cY", "pyQhGEPL_wQ",
  "ibmz8qFM4y0", // Tanishk — pink t-shirt (corner)
  "fpAK_nXI7AY", "takWPxrE6E8",
];
const ROYAL = "#3b5bdb";
const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

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
  const [current, setCurrent] = useState(0);
  const [vw, setVw] = useState(1280);
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const currentRef = useRef(0);

  // Track viewport width so the full-bleed carousel sizes/spreads responsively.
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goTo = useCallback(
    (dir: 1 | -1) => setCurrent((c) => (c + dir + VIDEOS.length) % VIDEOS.length),
    [],
  );

  // Load the YouTube IFrame API once and build the inline (on-page) player.
  useEffect(() => {
    let cancelled = false;
    const host = hostRef.current;
    const build = () => {
      if (cancelled || playerRef.current || !window.YT || !host) return;
      // The YouTube IFrame API can throw synchronously (e.g. on client-side
      // navigation when it is already cached); guard so it can never crash the
      // page — the worst case is the video quietly failing to initialise.
      try {
        // Give YT its own child node so it never fights React over the DOM.
        const mount = document.createElement("div");
        mount.style.width = "100%";
        mount.style.height = "100%";
        host.innerHTML = "";
        host.appendChild(mount);

        playerRef.current = new window.YT.Player(mount, {
          videoId: VIDEOS[currentRef.current],
          width: "100%",
          height: "100%",
          // Muted autoplay is the only kind browsers permit on load; we unmute on first interaction.
          playerVars: { autoplay: 1, mute: 1, playsinline: 1, controls: 1, rel: 0, modestbranding: 1 },
          events: {
            onReady: (e: { target: YTPlayer }) => {
              try { e.target.playVideo(); } catch { /* autoplay blocked */ }
            },
            onStateChange: (e: { data: number }) => {
              // Auto-advance to the next story when the current one finishes.
              if (window.YT && e.data === window.YT.PlayerState.ENDED) {
                setCurrent((c) => (c + 1) % VIDEOS.length);
              }
            },
          },
        });
      } catch (err) {
        console.error("YouTube player init failed", err);
      }
    };

    if (window.YT && window.YT.Player) {
      build();
    } else {
      if (!document.getElementById("yt-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = build;
    }

    return () => {
      cancelled = true;
      try { playerRef.current?.destroy(); } catch { /* ignore */ }
      playerRef.current = null;
      if (host) host.innerHTML = "";
    };
  }, []);

  // Swap the playing video whenever the active card changes.
  useEffect(() => {
    currentRef.current = current;
    try { playerRef.current?.loadVideoById(VIDEOS[current]); } catch { /* player not ready */ }
  }, [current]);

  // Unmute the player the first time the visitor interacts with the page.
  useEffect(() => {
    const unmute = () => {
      try { playerRef.current?.unMute(); } catch { /* ignore */ }
      window.removeEventListener("pointerdown", unmute);
      window.removeEventListener("keydown", unmute);
      window.removeEventListener("touchstart", unmute);
    };
    window.addEventListener("pointerdown", unmute);
    window.addEventListener("keydown", unmute);
    window.addEventListener("touchstart", unmute);
    return () => {
      window.removeEventListener("pointerdown", unmute);
      window.removeEventListener("keydown", unmute);
      window.removeEventListener("touchstart", unmute);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  const shown = filter === "All" ? STORIES : STORIES.filter((s) => s.lang === filter);

  // Responsive, full-bleed carousel sizing derived from viewport width.
  // maxOff is computed so the outermost cards always reach past the screen
  // edges (cropped), making the row span the full viewport width.
  const isMobile = vw < 640;
  const cardW = Math.round(isMobile ? Math.min(148, vw * 0.4) : Math.min(240, vw / 6));
  const cardH = Math.round((cardW * 16) / 9);
  const spacing = cardW * (isMobile ? 0.56 : 0.64);
  const maxVisible = Math.floor((VIDEOS.length - 1) / 2);
  const maxOff = Math.min(maxVisible, Math.ceil((vw / 2 + cardW / 2) / spacing));

  const counts: Record<string, number> = {
    All: STORIES.length,
    French: STORIES.filter((s) => s.lang === "French").length,
    German: STORIES.filter((s) => s.lang === "German").length,
    English: STORIES.filter((s) => s.lang === "English").length,
    Multi: STORIES.filter((s) => s.lang === "Multi").length,
  };

  return (
    <>
      <JsonLd data={reviewSchema(STORIES.map((s) => ({ author: s.name, body: s.text })))} />
      {/* scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{ scaleX: progress, background: "linear-gradient(90deg,#3b5bdb,#0ea5e9,#059669)" }}
      />

      {/* ══════════ HERO ══════════ */}
      <section className="relative hero-light overflow-hidden pt-24 md:pt-28 pb-14 md:pb-16">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

        <div className="container-max px-5 md:px-8 relative z-10">
          {/* headline */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-royal-50 border border-royal-100 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-royal-700"
            >
              <Sparkles size={12} /> Success Stories
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black text-ink leading-[1.03] tracking-tight"
            >
              Hear It Straight,
              <br />
              <span className="gradient-text">From Our Learners.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mx-auto mt-4 max-w-xl text-base md:text-lg text-body leading-relaxed"
            >
              Real ALB students on how they cleared exams, moved abroad, and found their confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 flex justify-center"
            >
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-base font-bold text-white shadow-[0_14px_34px_-12px_rgba(14,23,51,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Book a Free Trial
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={14} />
                </span>
              </button>
            </motion.div>
          </div>

          {/* inline autoplay carousel — full-bleed */}
          <div className="relative z-10 mt-12 md:mt-14">
            <div
              className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden [perspective:1700px]"
              style={{ height: cardH + 48 }}
            >
              {VIDEOS.map((id, i) => {
                const N = VIDEOS.length;
                let off = i - current;
                if (off > N / 2) off -= N;
                if (off < -N / 2) off += N;
                const a = Math.min(Math.abs(off), maxOff + 1);
                const isHidden = Math.abs(off) > maxOff;
                const isActive = off === 0;
                return (
                  <motion.button
                    key={id}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Play story ${i + 1}`}
                    animate={{
                      x: off * spacing,
                      rotateY: off * (isMobile ? 10 : 7),
                      z: -a * (isMobile ? 35 : 45),
                      scale: isActive ? 1 : 1 - a * (isMobile ? 0.09 : 0.05),
                      opacity: isHidden ? 0 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    className="group absolute overflow-hidden rounded-2xl bg-black ring-2 ring-white shadow-[0_24px_50px_-18px_rgba(14,23,51,0.55)]"
                    style={{
                      width: cardW,
                      height: cardH,
                      left: "50%",
                      top: "50%",
                      marginLeft: -cardW / 2,
                      marginTop: -cardH / 2,
                      transformStyle: "preserve-3d",
                      zIndex: 20 - a,
                      pointerEvents: isHidden ? "none" : "auto",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ytThumb(id)}
                      alt="ALB learner success story"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    {!isActive && (
                      <>
                        <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/10" />
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg">
                            <Play size={17} className="ml-0.5 text-ink" fill="currentColor" />
                          </span>
                        </span>
                      </>
                    )}
                  </motion.button>
                );
              })}

              {/* persistent inline player over the centre slot */}
              <div
                className="absolute left-1/2 top-1/2 z-30 overflow-hidden rounded-2xl bg-black ring-2 ring-white shadow-[0_28px_60px_-18px_rgba(14,23,51,0.6)]"
                style={{ width: cardW, height: cardH, marginLeft: -cardW / 2, marginTop: -cardH / 2 }}
              >
                <div ref={hostRef} className="h-full w-full" />
              </div>
            </div>

            {/* slide controls */}
            <div className="mt-7 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => goTo(-1)}
                aria-label="Previous story"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-royal-300 hover:text-royal-600"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-1.5">
                {VIDEOS.map((id, i) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to story ${i + 1}`}
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: i === current ? 22 : 8,
                      background: i === current ? ROYAL : "#d5dbe8",
                    }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(1)}
                aria-label="Next story"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-royal-300 hover:text-royal-600"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
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
