"use client";

import { useEffect, useRef } from "react";
import { AnimateOnView } from "@/components/shared/AnimateOnView";

/**
 * Dark video band under the hero. Background is a "tunnel" grid (square rings
 * receding to a central vanishing point + radial spokes). The YouTube video
 * autoplays muted and pauses whenever it scrolls out of view (Intersection
 * Observer → YouTube postMessage command API). The player spans the same width
 * as the navbar (container-max + matching padding).
 */

const VIDEO_ID = "Gqj5TePdwP4";
const RINGS = [0, 1, 2, 3, 4, 5, 6, 7];
const RING_DURATION = 7; // seconds
const SPOKES = 12;

export function HomeVideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;

    const command = (func: "playVideo" | "pauseVideo") => {
      el.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: "" }),
        "*"
      );
    };

    const io = new IntersectionObserver(
      ([entry]) => command(entry.isIntersecting ? "playVideo" : "pauseVideo"),
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec-dark relative overflow-hidden py-16 md:py-24">
      {/* ── tunnel grid background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* radial spokes converging to the vanishing point */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.13]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1000 600"
          aria-hidden
        >
          {Array.from({ length: SPOKES }).map((_, i) => {
            const a = (i / SPOKES) * Math.PI * 2;
            return (
              <line
                key={i}
                x1="500"
                y1="300"
                x2={500 + Math.cos(a) * 1000}
                y2={300 + Math.sin(a) * 1000}
                stroke="#ffffff"
                strokeWidth="1"
              />
            );
          })}
        </svg>
        {/* square rings expanding outward from the centre */}
        {RINGS.map((r) => (
          <span
            key={r}
            className="tunnel-ring absolute left-1/2 top-1/2 w-[120vmax] h-[120vmax] rounded-[3rem] border border-white/25"
            style={{
              animation: `tunnel-ring ${RING_DURATION}s linear infinite`,
              animationDelay: `${(-RING_DURATION / RINGS.length) * r}s`,
            }}
          />
        ))}
        {/* centre glow at the vanishing point */}
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)" }}
        />
      </div>
      <div className="blob blob-royal w-[520px] h-[440px] -top-28 left-[-8%] opacity-50 pointer-events-none" />
      <div className="blob blob-sky w-[420px] h-[420px] bottom-[-24%] right-[-6%] opacity-40 pointer-events-none" />

      {/* ── content (navbar-width container) ── */}
      <div className="container-max px-5 md:px-8 relative z-10">
        <AnimateOnView className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow-pill-light">Watch</span>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mt-1">
            See ALB <span className="gradient-text-light">in action.</span>
          </h2>
        </AnimateOnView>

        <AnimateOnView>
          <div
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
            style={{ boxShadow: "0 40px 90px -30px rgba(0,0,0,0.7)" }}
          >
            <span
              className="absolute inset-x-0 top-0 h-px z-10"
              style={{ background: "linear-gradient(90deg, transparent, #38bdf8, transparent)" }}
            />
            <iframe
              ref={iframeRef}
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&loop=1&playlist=${VIDEO_ID}`}
              title="Academy of Languages and Beyond"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
