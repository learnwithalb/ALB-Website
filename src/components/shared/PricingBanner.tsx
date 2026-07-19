"use client";

import { ArrowRight, CalendarDays, MessageSquare, Video, ShieldCheck } from "lucide-react";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { useBooking } from "@/components/shared/BookingContext";

/**
 * Affordability banner — value headline + CTA on the left, a price card on the
 * right. Used on the home page and the courses page only. On-brand: royal/sky
 * palette, Satoshi type.
 */

const CARD_POINTS = [
  { icon: Video, title: "Live, interactive sessions", sub: "Engaging classes. Real conversations." },
  { icon: ShieldCheck, title: "Certified expert trainers", sub: "Learn from experienced professionals." },
];

export function PricingBanner() {
  const { openModal } = useBooking();

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "linear-gradient(120deg, #f2f5ff 0%, #eef2fe 45%, #eaf6ff 100%)" }}
    >
      {/* decorative background: faint arcs + dot grids */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 620" aria-hidden>
        <circle cx="1300" cy="70" r="240" fill="none" stroke="#3b5bdb" strokeOpacity="0.06" strokeWidth="1.5" />
        <circle cx="1300" cy="70" r="330" fill="none" stroke="#3b5bdb" strokeOpacity="0.05" strokeWidth="1.5" />
        <path d="M -40 560 Q 360 400 760 560 T 1500 540" fill="none" stroke="#3b5bdb" strokeOpacity="0.06" strokeWidth="1.5" />
      </svg>
      <div
        className="absolute bottom-8 left-6 w-28 h-24 opacity-[0.5] pointer-events-none hidden md:block"
        style={{ backgroundImage: "radial-gradient(#3b5bdb 1.4px, transparent 1.4px)", backgroundSize: "14px 14px" }}
      />
      <div className="blob blob-royal w-[420px] h-[420px] -top-24 left-[-8%] opacity-30 pointer-events-none" />
      <div className="blob blob-sky w-[360px] h-[360px] bottom-[-24%] right-[-6%] opacity-30 pointer-events-none" />

      <div className="container-max px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── LEFT: headline + CTA ── */}
          <AnimateOnView direction="right">
            {/* eyebrow pill with icon */}
            <span className="inline-flex items-center gap-2.5 rounded-full bg-white border border-royal-100 shadow-sm pl-1.5 pr-4 py-1.5">
              <span className="w-7 h-7 rounded-full bg-royal-500 flex items-center justify-center">
                <MessageSquare size={13} className="text-white" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-royal-700">
                Affordable Fluency
              </span>
            </span>

            <h2 className="text-4xl md:text-[3.4rem] font-black text-ink leading-[1.04] tracking-tight mt-5">
              Smaller than your Pizza order.
              <br />
              <span className="gradient-text">Bigger than you think.</span>
            </h2>
            {/* hand-drawn underline flourish under the accent line */}
            <svg width="230" height="14" viewBox="0 0 230 14" fill="none" className="mt-1.5 max-w-[60%]" aria-hidden>
              <path d="M3 9C48 3 120 2 165 6.5C190 9 210 8 227 5.5" stroke="#3b5bdb" strokeWidth="3.5" strokeLinecap="round" />
            </svg>

            <p className="mt-6 text-body text-lg md:text-xl leading-relaxed">
              Live language classes from{" "}
              <span className="font-black text-royal-600">₹417</span> per session.
            </p>

            <button
              onClick={() => openModal()}
              className="group mt-9 inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-white font-bold text-base transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(120deg, #3b5bdb, #4f6ff5)",
                boxShadow: "0 18px 40px -14px rgba(59,91,219,0.7)",
              }}
            >
              <CalendarDays size={18} />
              Book a Free Demo
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </AnimateOnView>

          {/* ── RIGHT: price card ── */}
          <AnimateOnView direction="left" className="w-full lg:justify-self-end lg:max-w-md">
            <div
              className="relative rounded-[28px] p-8 md:p-10 text-white overflow-hidden"
              style={{
                background: "linear-gradient(150deg, #21398f 0%, #2f4fc7 52%, #3b6bf0 100%)",
                boxShadow: "0 40px 90px -30px rgba(33,57,143,0.7)",
              }}
            >
              {/* sheen + textures */}
              <span
                className="absolute -top-20 -right-12 w-60 h-60 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)" }}
              />
              <span
                className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full border border-white/10 pointer-events-none"
              />
              <div
                className="absolute bottom-6 right-8 w-24 h-16 opacity-40 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1.3px, transparent 1.3px)", backgroundSize: "12px 12px" }}
              />

              <div className="relative z-10">
                {/* badge */}
                <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-white bg-white/15 border border-white/25 backdrop-blur-sm">
                  Per Session
                </span>

                {/* price */}
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl md:text-7xl font-black leading-none tracking-tight">₹417</span>
                  <span className="text-lg font-semibold text-white/70 mb-2">/ session</span>
                </div>

                {/* points */}
                <ul className="mt-8 space-y-5 pt-7 border-t border-white/15">
                  {CARD_POINTS.map(({ icon: Icon, title, sub }) => (
                    <li key={title} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
                        <Icon size={19} className="text-white" strokeWidth={2} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-white text-[15px] leading-tight">{title}</p>
                        <p className="text-white/60 text-[13px] leading-snug mt-1">{sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
