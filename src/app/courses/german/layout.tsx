import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";
import { CourseSchema } from "@/components/courses/CourseSchema";
import { GERMAN } from "@/lib/courseData";

export const metadata: Metadata = pageMetadata("german");

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="German Language Course (A1–B2)"
        description="German course from A1 to B2 for immigration and study in Germany, with Goethe, TestDaF, and DSH preparation."
        path="/courses/german"
        about="German language"
        faqs={GERMAN.faq}
      />
      {children}
    </>
  );
}
