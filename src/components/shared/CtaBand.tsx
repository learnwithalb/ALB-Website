"use client";

import { ArrowRight } from "lucide-react";
import { useBooking } from "./BookingContext";
import { siteConfig } from "@/lib/constants";

interface CtaBandProps {
  heading?: string;
  sub?: string;
  /** Programme/topic passed to the booking modal. */
  topic?: string;
  buttonLabel?: string;
}

/**
 * Reusable conversion band (booking modal + WhatsApp). Used at the end of blog
 * articles and can be dropped into any page.
 */
export function CtaBand({
  heading = "Ready to start your journey?",
  sub = "Book a free counselling session. No obligation, just clarity.",
  topic,
  buttonLabel = "Book a Free Trial",
}: CtaBandProps) {
  const { openModal } = useBooking();

  return (
    <div className="relative overflow-hidden rounded-3xl sec-dark p-8 md:p-10 text-center">
      <div className="blob blob-royal w-[420px] h-[220px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-black text-white">{heading}</h2>
        <p className="mt-2 text-white/60 text-sm md:text-base max-w-xl mx-auto">{sub}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => openModal(topic)} className="btn-white text-sm px-6 py-3">
            {buttonLabel} <ArrowRight size={15} />
          </button>
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light text-sm px-6 py-3"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
