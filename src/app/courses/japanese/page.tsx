import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";

export const metadata: Metadata = {
  title: "Japanese Language Course | JLPT Preparation",
  description: "Learn Japanese from N5 to N2 at ALB. JLPT exam prep, anime culture, and business Japanese for India's Japan-bound professionals.",
};

const highlights = [
  "JLPT N5 to N2 preparation",
  "Hiragana, Katakana & Kanji mastery",
  "Business Japanese for IT professionals",
  "Japan work visa language support",
  "Anime & pop culture integration",
  "Native Japanese conversation partner sessions",
];

export default function JapanesePage() {
  return (
    <>
      <section className="relative bg-[#060c1a] pt-28 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#BC002D]/12 blur-[100px] pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView>
            <Link href="/courses" className="text-white/50 text-sm hover:text-white transition-colors mb-5 inline-block">← All Courses</Link>
            <div className="text-5xl mb-4">🇯🇵</div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-2xl">
              Japanese Language
              <span className="gradient-text"> Programme</span>
            </h1>
            <p className="mt-4 text-xl text-white/60 max-w-xl leading-relaxed">
              Unlock Japan — the world&apos;s third-largest economy and one of the most
              culturally rich nations. Japanese proficiency opens doors in IT, anime, business, and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary">Enroll Now <ArrowRight size={16} /></a>
              <Link href="/courses" className="btn-outline">All Languages</Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
            {highlights.map((h) => (
              <StaggerItem key={h}>
                <div className="flex items-start gap-3 card-dark rounded-xl p-4">
                  <CheckCircle size={16} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/55">{h}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimateOnView className="text-center mt-10">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Free Counselling <ArrowRight size={16} />
            </a>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
