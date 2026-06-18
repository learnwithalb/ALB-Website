"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string;      // e.g. "5000+", "95%", "12+", "4.9/5", "6", "4.9★"
  duration?: number;  // ms, default 1800
  className?: string;
}

function parse(raw: string) {
  const m = raw.match(/^([^0-9]*)(\d+\.?\d*)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: raw, decimal: false };
  return {
    prefix: m[1],
    num: parseFloat(m[2]),
    suffix: m[3],
    decimal: m[2].includes("."),
  };
}

// easeOutExpo, rocket-fast start, butter-smooth landing
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function CountUp({ value, duration = 1800, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  // amount: 0 means ANY pixel in view triggers it (good for small elements)
  const inView = useInView(ref, { once: true, amount: 0 });

  const [count, setCount] = useState(0);
  const { prefix, num, suffix, decimal } = parse(value);

  useEffect(() => {
    if (!inView) return;

    let rafId: number;
    let startTs: number | null = null;

    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const elapsed  = ts - startTs;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutExpo(progress);

      setCount(eased * num);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(num); // snap to exact final value
      }
    };

    rafId = requestAnimationFrame(tick);

    // cleanup so StrictMode double-invoke doesn't leave a ghost RAF
    return () => cancelAnimationFrame(rafId);
  }, [inView, num, duration]); // inView only ever goes false → true (once:true), so this is safe

  const display = decimal
    ? count.toFixed(1)
    : Math.round(count).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
