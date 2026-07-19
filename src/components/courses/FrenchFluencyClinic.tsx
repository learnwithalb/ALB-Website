"use client";

import { Check, ArrowRight, Download, Quote, Sparkles, Info } from "lucide-react";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { useBooking } from "@/components/shared/BookingContext";
import { useBrochure } from "@/components/shared/BrochureContext";

/**
 * French-only standalone offering shown above the "Your Journey" section on the
 * French course page. Passed to <CourseLanding> via its `beforeJourney` slot.
 * On-brand dark section: Satoshi type + royal/sky palette (no serif, no gold).
 */

const SKY = "#38bdf8";
const MODAL_KEY = "French Fluency Clinic (1:1)";
// TODO: replace with the French Fluency Clinic curriculum PDF link.
const CURRICULUM_URL = "https://drive.google.com/file/d/1NiUwld37lo5_TBIjaNyoSp3SDI_3gowE/view?usp=sharing";

const CHIPS = ["1:1 only", "2 sessions / week", "2 hours / session", "Free demo included"];

const FEATURES = [
  "100% 1:1 with a certified trainer — every session, no batch sharing",
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
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7 overflow-hidden transition-colors duration-300 hover:border-white/20">
      <span className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #3b5bdb, #38bdf8, transparent)" }} />
      {children}
    </div>
  );
}

export function FrenchFluencyClinic() {
  const { openModal } = useBooking();
  const { openBrochureForm } = useBrochure();

  return (
    <section className="sec-dark relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 grid-dots-light opacity-25 pointer-events-none" />
      <div className="blob blob-royal w-[480px] h-[400px] -top-28 left-[-6%] pointer-events-none" />
      <div className="blob blob-sky w-[380px] h-[380px] bottom-[-20%] right-[-6%] pointer-events-none opacity-50" />

      <div className="container-max px-5 md:px-8 relative z-10">
        {/* top badge row */}
        <AnimateOnView className="flex flex-wrap items-center gap-3 mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3b5bdb] to-[#0ea5e9] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 shadow-[0_8px_20px_-6px_rgba(59,91,219,0.7)]">
            <Sparkles size={11} /> New
          </span>
          <span className="hidden sm:block h-4 w-px bg-white/15" />
          <span className="text-white/55 text-sm">
            Not starting from scratch? This is a separate offering — built for you.
          </span>
        </AnimateOnView>

        <div className="grid lg:grid-cols-[1.12fr_1fr] gap-8 lg:gap-14 items-start">
          {/* ── LEFT ── */}
          <AnimateOnView direction="right">
            <span className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: SKY }}>
              French Fluency Clinic
            </span>
            <h2 className="text-4xl md:text-[3rem] font-black leading-[1.06] tracking-tight mt-4 text-white">
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
              {CHIPS.map((c) => (
                <span
                  key={c}
                  className="text-xs font-semibold text-white/80 border border-white/15 bg-white/5 rounded-full px-3.5 py-1.5 backdrop-blur-sm"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* features */}
            <ul className="mt-7 space-y-3.5">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/85 text-sm md:text-[15px] leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center">
                    <Check size={12} strokeWidth={3} className="text-emerald-400" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => openModal(MODAL_KEY)} className="btn-white text-sm px-7 py-3.5">
                Book a demo <ArrowRight size={15} />
              </button>
              <button onClick={() => openBrochureForm("French Fluency Clinic curriculum", CURRICULUM_URL)} className="btn-outline-light text-sm px-7 py-3.5">
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
                {FOR_YOU.map((x) => (
                  <li key={x} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                    <span
                      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: `${SKY}22`, border: `1px solid ${SKY}55` }}
                    >
                      <Check size={10} strokeWidth={3} style={{ color: SKY }} />
                    </span>
                    {x}
                  </li>
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
        <AnimateOnView className="mt-14 pt-6 border-t border-white/10 flex items-start gap-2.5 text-white/45 text-xs md:text-sm leading-relaxed">
          <Info size={15} className="flex-shrink-0 mt-0.5" />
          <span>
            The French Fluency Clinic is not one of the five standard tracks. It is a standalone 1:1 product
            designed for intermediate and above learners only. A minimum of A2 level French is required to join.
          </span>
        </AnimateOnView>
      </div>
    </section>
  );
}
