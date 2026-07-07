import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";
import { CourseSchema } from "@/components/courses/CourseSchema";
import { FRENCH } from "@/lib/courseData";

export const metadata: Metadata = pageMetadata("french");

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="French Language Course (A1–B2)"
        description="Immigration-focused French course from A1 to B2 with TEF/TCF Canada preparation and CLB 7+ readiness."
        path="/courses/french-language-course-online"
        about="French language"
        faqs={FRENCH.faq}
      />
      {children}
    </>
  );
}
