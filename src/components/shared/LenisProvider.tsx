"use client";

import { useEffect } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: { destroy: () => void; raf: (time: number) => void } | null = null;
    let rafId: number;

    (async () => {
      const LenisClass = (await import("lenis")).default;
      lenis = new LenisClass({ lerp: 0.1, smoothWheel: true });

      function raf(time: number) {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    })();

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
