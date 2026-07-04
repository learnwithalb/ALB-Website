"use client";

import { useEffect, useState } from "react";
import { headingId } from "@/lib/blog";

/** Sticky table of contents with scroll-spy highlighting. */
export function TableOfContents({ headings }: { headings: string[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = headings.map(headingId);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="font-bold text-ink mb-3 text-xs uppercase tracking-wider">On this page</p>
      <ul className="space-y-2 border-l border-line">
        {headings.map((h) => {
          const id = headingId(h);
          const on = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block -ml-px border-l-2 pl-3 leading-snug transition-colors ${
                  on
                    ? "border-royal-500 text-royal-600 font-semibold"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {h}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
