import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CourseSchema } from "@/components/courses/CourseSchema";
import { SPANISH } from "@/lib/courseData";

export const metadata: Metadata = buildMetadata({
  title: "Spanish Language Course Online — Beginner to Fluent | ALB",
  description:
    "Learn Spanish online with ALB — live, small-batch classes with speaking practice and DELE exam readiness, plus the +Beyond soft-skills module included free.",
  path: "/courses/spanish",
  keywords: ["spanish course online", "learn spanish india", "DELE preparation", "spanish classes"],
});

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Spanish Language Course"
        description="Online Spanish course with live, small-batch classes and speaking practice."
        path="/courses/spanish"
        about="Spanish language"
        faqs={SPANISH.faq}
      />
      {children}
    </>
  );
}
