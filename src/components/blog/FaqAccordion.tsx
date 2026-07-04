"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { BlogFaq } from "@/lib/blog";

/** Presentational FAQ accordion. Emit FAQ JSON-LD separately via <JsonLd>. */
export function FaqAccordion({ faqs }: { faqs: BlogFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  if (!faqs.length) return null;

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className="card rounded-2xl overflow-hidden"
            style={{ borderColor: isOpen ? "rgba(59,91,219,0.35)" : undefined }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-royal-50/40 transition-colors"
              aria-expanded={isOpen}
            >
              <h3 className="flex-1 font-bold text-ink text-[15px] leading-snug">{f.q}</h3>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.22 }}
                className="flex-shrink-0 text-royal-400"
              >
                <ChevronDown size={18} />
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
                  <p className="px-5 pb-5 text-body text-sm leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
