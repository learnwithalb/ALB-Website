import type { Metadata } from "next";

export const metadata: Metadata = {
  // `absolute` skips the root "%s | ALB" template, which would duplicate "| ALB".
  title: { absolute: "TEF & TCF Canada Coaching Online | French for Canada PR | ALB" },
  description: "Live online TEF Canada & TCF Canada coaching from A1 to NCLC 7. Learn French for Canada PR and up to 50 extra CRS points, with evening IST and Canada-friendly morning batches.",
  alternates: { canonical: "/landing-pages/canada-french" },
};

// Runs before the hero is parsed, so the TEF/TCF headline is chosen before the
// first paint (no flash or layout shift once the page hydrates).
const EXAM_HEADLINE_SCRIPT = `if(/tef|tcf/i.test(location.search))document.documentElement.classList.add("lp-exam")`;

export default function CanadaFrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: EXAM_HEADLINE_SCRIPT }} />
      {children}
    </>
  );
}
