import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CtaBand } from "@/components/shared/CtaBand";
import { FaqAccordion } from "@/components/blog/FaqAccordion";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import type { BlogPost, BlogFaq } from "@/lib/blog";

export interface ExamLandingProps {
  eyebrow: string;
  title: string;
  intro: string;
  accent: string;
  breadcrumbLabel: string;
  path: string;
  highlights: string[];
  faqs: BlogFaq[];
  relatedPosts: BlogPost[];
  courseHref: string;
  courseLabel: string;
  topic: string;
}

/**
 * Shared exam-prep landing page (DELF, TEF). Reuses Breadcrumb, FaqAccordion,
 * RelatedPosts, and CtaBand rather than duplicating layout logic.
 */
export function ExamLanding({
  eyebrow,
  title,
  intro,
  accent,
  breadcrumbLabel,
  path,
  highlights,
  faqs,
  relatedPosts,
  courseHref,
  courseLabel,
  topic,
}: ExamLandingProps) {
  return (
    <>
      {/* Hero */}
      <header className="relative hero-light pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />
        <div className="blob w-[420px] h-[420px] top-0 right-[-6%] pointer-events-none opacity-25" style={{ background: accent }} />
        <div className="container-max px-5 md:px-8 relative z-10 max-w-3xl">
          <Breadcrumb
            items={[
              { name: "Home", path: "/" },
              { name: "Courses", path: "/courses" },
              { name: breadcrumbLabel, path },
            ]}
          />
          <span
            className="mt-5 inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ color: accent, background: `${accent}14` }}
          >
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-black text-ink leading-[1.08] tracking-tight">{title}</h1>
          <p className="mt-4 text-body text-lg leading-relaxed">{intro}</p>
          <div className="mt-7">
            <Link href={courseHref} className="btn-primary text-sm px-6 py-3 inline-flex">
              {courseLabel} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </header>

      {/* What's covered */}
      <section className="container-max px-5 md:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-black text-ink">What the preparation covers</h2>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-3xl">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 card rounded-xl p-4">
              <Check size={18} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
              <span className="text-body text-sm">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Related guides */}
      {relatedPosts.length > 0 && (
        <section className="section-padding sec-mist relative overflow-hidden">
          <div className="container-max px-5 md:px-8 relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-ink mb-6">Guides to help you prepare</h2>
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="container-max px-5 md:px-8 py-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-ink mb-6">Frequently asked questions</h2>
          <FaqAccordion faqs={faqs} />
        </section>
      )}

      {/* CTA */}
      <section className="container-max px-5 md:px-8 pb-16">
        <CtaBand
          heading="Start preparing with expert coaching."
          sub="Book a free counselling session and get a preparation plan built around your target."
          topic={topic}
        />
      </section>
    </>
  );
}
