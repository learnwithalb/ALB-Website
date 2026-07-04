import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CourseSchema } from "@/components/courses/CourseSchema";
import { KOREAN } from "@/lib/courseData";

export const metadata: Metadata = buildMetadata({
  title: "Korean Language Course Online — TOPIK Prep | ALB",
  description:
    "Learn Korean online with ALB — live classes building toward TOPIK levels, with speaking practice and the +Beyond soft-skills module included free.",
  path: "/courses/korean",
  keywords: ["korean course online", "learn korean india", "TOPIK preparation", "korean classes"],
});

export default function KoreanLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="Korean Language Course"
        description="Online Korean course with live classes building toward TOPIK levels."
        path="/courses/korean"
        about="Korean language"
        faqs={KOREAN.faq}
      />
      {children}
    </>
  );
}
