"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Download, Quote, Sparkles, Info } from "lucide-react";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { useBooking } from "@/components/shared/BookingContext";
import { useBrochure } from "@/components/shared/BrochureContext";

/**
 * French-only standalone offering shown above the "Your Journey" section on the
 * French course page. Passed to <CourseLanding> via its `beforeJourney` slot.
 * On-brand dark section: Satoshi type + royal/sky palette (no serif, no gold).
 * Presented as a highlighted, framed panel with an animated glow border,
 * flowing background lines and a drawn timeline through the feature list.
 */

const ROYAL = "#3b5bdb";
const SKY = "#38bdf8";
const MODAL_KEY = "French Communication Lab (1:1)";
// TODO: replace with the French Communication Lab curriculum PDF link.
const CURRICULUM_URL = "https://drive.google.com/file/d/1NiUwld37lo5_TBIjaNyoSp3SDI_3gowE/view?usp=sharing";

const CHIPS = ["1:1 only", "2 sessions / week", "2 hours / session", "Free demo included"];

const FEATURES = [
  "Every session is 100% dedicated to your learning — 1:1 with a Native Trainer",
  "Dedicated speaking tasks and intensive listening comprehension drills",
  "TEF Canada Expression Orale and Compréhension Orale preparation on request",
  "Same trainer from your free demo through every session — no hand-offs",
  "Real-time correction, verbal feedback report, and between-session assignment",
];

const FOR_YOU = [
  "You freeze when someone speaks French to you — even though you know the grammar",
  "Your TEF Canada Expression Orale or Compréhension Orale is holding your CLB score below 7",
  "You understand French well but can't produce it spontaneously in real conversation",
  "You studied French before and want to revive your speaking — without starting from A1",
  "You've been self-learning and have had almost no real live conversation practice",
];

/** Right-column card shell: royal→sky top accent + hover border, matching the site. */
function AccentCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7 overflow-hidden transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]">
      <span className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #3b5bdb, #38bdf8, transparent)" }} />
      <span className="absolute -right-16 -top-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" style={{ background: SKY }} />
      {children}
    </div>
  );
}

export function FrenchFluencyClinic() {
  const { openModal } = useBooking();
  const { openBrochureForm } = useBrochure();

  return (
    <section className="sec-dark relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 grid-dots-light opacity-20 pointer-events-none" />
      <div className="blob blob-royal w-[520px] h-[440px] -top-32 left-[-8%] pointer-events-none" />
      <div className="blob blob-sky w-[420px] h-[420px] bottom-[-22%] right-[-8%] pointer-events-none opacity-50" />

      <div className="container-max px-4 sm:px-6 md:px-8 relative z-10">
        {/* ══════════ HIGHLIGHT PANEL ══════════ */}
        <div className="relative rounded-[1.75rem] md:rounded-[2.25rem]">
          {/* rotating conic glow — reads as a lit, animated border */}
          <div className="absolute -inset-px rounded-[inherit] overflow-hidden pointer-events-none">
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[240%] w-[240%] -translate-x-1/2 -translate-y-1/2 opacity-70"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 200deg, #3b5bdb 250deg, #38bdf8 275deg, #7dd3fc 285deg, #38bdf8 295deg, transparent 340deg, transparent 360deg)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* inner panel */}
          <div className="relative rounded-[inherit] border border-white/10 overflow-hidden bg-gradient-to-br from-[#0a1338] via-[#070d26] to-[#0a1030]">
            {/* flowing decorative lines */}
            <svg
              aria-hidden
              className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.5]"
              viewBox="0 0 1200 640"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="fcl-stroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={ROYAL} stopOpacity="0" />
                  <stop offset="50%" stopColor={SKY} stopOpacity="0.55" />
                  <stop offset="100%" stopColor={ROYAL} stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M -40 120 C 220 40, 420 220, 700 130 S 1100 60, 1260 160"
                fill="none"
                stroke="url(#fcl-stroke)"
                strokeWidth="1.4"
                style={{ strokeDasharray: "10 14" }}
                animate={{ strokeDashoffset: [0, -240] }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M -40 520 C 260 600, 520 420, 780 520 S 1120 600, 1260 480"
                fill="none"
                stroke="url(#fcl-stroke)"
                strokeWidth="1.4"
                style={{ strokeDasharray: "6 16" }}
                animate={{ strokeDashoffset: [0, 240] }}
                transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* corner brackets */}
            <span className="absolute left-5 top-5 w-8 h-8 border-l border-t rounded-tl-xl pointer-events-none" style={{ borderColor: `${SKY}44` }} />
            <span className="absolute right-5 bottom-5 w-8 h-8 border-r border-b rounded-br-xl pointer-events-none" style={{ borderColor: `${SKY}44` }} />
            {/* soft corner glow */}
            <span className="absolute -left-24 -top-24 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: `${ROYAL}33` }} />

            <div className="relative z-10 p-6 sm:p-9 md:p-12 lg:p-14">
              {/* top badge row */}
              <AnimateOnView className="flex flex-wrap items-center gap-3 mb-9">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3b5bdb] to-[#0ea5e9] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 shadow-[0_8px_20px_-6px_rgba(59,91,219,0.7)]">
                  <Sparkles size={11} /> New
                </span>
                <span className="hidden sm:block h-4 w-px bg-white/15" />
                <span className="text-white/55 text-sm">
                  Not starting from scratch? This is a separate offering — built for you.
                </span>
              </AnimateOnView>

              <div className="grid lg:grid-cols-[1.12fr_1fr] gap-10 lg:gap-14 items-start">
                {/* ── LEFT ── */}
                <AnimateOnView direction="right">
                  {/* eyebrow with pulsing dot + drawn underline */}
                  <span className="inline-flex items-center gap-2.5">
                    <motion.span
                      className="w-2 h-2 rounded-full"
                      style={{ background: SKY, boxShadow: `0 0 10px ${SKY}` }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: SKY }}>
                      French Communication Lab
                    </span>
                  </span>
                  <motion.span
                    className="block h-px mt-3 origin-left"
                    style={{ background: `linear-gradient(90deg, ${SKY}, ${ROYAL}, transparent)`, maxWidth: 220 }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <h2 className="text-4xl md:text-[3rem] font-black leading-[1.06] tracking-tight mt-5 text-white">
                    Already know French?
                    <br />
                    <span className="gradient-text-light">Focus on what&apos;s holding you back.</span>
                  </h2>
                  <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
                    A dedicated 1-on-1 programme for people who already have French knowledge but struggle to
                    speak and listen fluently. Not a track. A standalone product — personalised, intensive, and
                    built around your exact gaps.
                  </p>

                  {/* chips */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {CHIPS.map((c, i) => (
                      <motion.span
                        key={c}
                        className="text-xs font-semibold text-white/80 border border-white/15 bg-white/5 rounded-full px-3.5 py-1.5 backdrop-blur-sm hover:border-white/30 transition-colors"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                      >
                        {c}
                      </motion.span>
                    ))}
                  </div>

                  {/* features — drawn timeline */}
                  <div className="relative mt-8">
                    <motion.span
                      aria-hidden
                      className="absolute left-[13px] top-3 bottom-3 w-px origin-top"
                      style={{ background: `linear-gradient(to bottom, ${SKY}, ${ROYAL}, transparent)` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <ul className="space-y-4">
                      {FEATURES.map((f, i) => (
                        <motion.li
                          key={f}
                          className="relative flex items-start gap-4 text-white/85 text-sm md:text-[15px] leading-relaxed"
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.09, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <span
                            className="relative z-10 mt-0.5 flex-shrink-0 w-[27px] h-[27px] rounded-full flex items-center justify-center"
                            style={{
                              background: "#0b1330",
                              border: `1px solid ${SKY}55`,
                              boxShadow: `0 0 0 4px #0a1030, 0 0 14px ${SKY}22`,
                            }}
                          >
                            <Check size={13} strokeWidth={3} style={{ color: SKY }} />
                          </span>
                          <span className="pt-0.5">{f}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="mt-9 flex flex-wrap gap-3">
                    <button onClick={() => openModal(MODAL_KEY)} className="btn-white text-sm px-7 py-3.5">
                      Book a demo <ArrowRight size={15} />
                    </button>
                    <button onClick={() => openBrochureForm("French Communication Lab curriculum", CURRICULUM_URL)} className="btn-outline-light text-sm px-7 py-3.5">
                      <Download size={15} /> Download curriculum
                    </button>
                  </div>
                </AnimateOnView>

                {/* ── RIGHT ── */}
                <AnimateOnView direction="left" className="space-y-5">
                  <AccentCard>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-4" style={{ color: SKY }}>
                      This is for you if…
                    </p>
                    <ul className="space-y-3.5">
                      {FOR_YOU.map((x, i) => (
                        <motion.li
                          key={x}
                          className="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                        >
                          <span
                            className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                            style={{ background: `${SKY}22`, border: `1px solid ${SKY}55` }}
                          >
                            <Check size={10} strokeWidth={3} style={{ color: SKY }} />
                          </span>
                          {x}
                        </motion.li>
                      ))}
                    </ul>
                  </AccentCard>

                  {/* quote card */}
                  <AccentCard>
                    <span className="w-9 h-9 rounded-full flex items-center justify-center mb-4" style={{ background: `${SKY}1f`, color: SKY }}>
                      <Quote size={15} />
                    </span>
                    <p className="text-white/85 text-[15px] md:text-base leading-relaxed italic">
                      &ldquo;Your trainer meets you in the free demo — and stays with you for every single session
                      after that.&rdquo;
                    </p>
                    <p className="mt-3 text-white/45 text-xs">
                      DELF B2 and TEF Canada certified · Consistent, personalised, no hand-offs
                    </p>
                  </AccentCard>
                </AnimateOnView>
              </div>

              {/* footer note */}
              <AnimateOnView className="mt-12 pt-6 border-t border-white/10 flex items-start gap-2.5 text-white/45 text-xs md:text-sm leading-relaxed">
                <Info size={15} className="flex-shrink-0 mt-0.5" />
                <span>
                  The French Communication Lab is not one of the five standard tracks. It is a standalone 1:1 product
                  designed for intermediate and above learners only. A minimum of A2 level French is required to join.
                </span>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
