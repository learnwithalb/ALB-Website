import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories, Real Learner Journeys | Academy of Languages and Beyond",
  description:
    "Read real success stories from ALB learners across French, German, and English, immigration, academic, career, sprint, and junior tracks. Small batches, exam preparation, soft skills, and outcomes that changed lives.",
};

export default function SuccessStoriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
