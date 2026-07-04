import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CourseSchema } from "@/components/courses/CourseSchema";
import { JAPANESE } from "@/lib/courseData";

export const metadata: Metadata = buildMetadata({
  title: "Japanese Language Course Online — JLPT Prep | ALB",
  description:
    "Learn Japanese online with ALB — live classes building toward JLPT levels, with speaking practice and the +Beyond soft-skills module included free.",
  path: "/courses/japanese",
  keywords: ["japanese course online", "learn japanese india", "JLPT preparation", "japanese classes"],
});

export default function JapaneseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Japanese Language Course"
        description="Online Japanese course with live classes building toward JLPT levels."
        path="/courses/japanese"
        about="Japanese language"
        faqs={JAPANESE.faq}
      />
      {children}
    </>
  );
}
