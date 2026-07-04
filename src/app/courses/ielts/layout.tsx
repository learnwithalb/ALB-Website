import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";
import { CourseSchema } from "@/components/courses/CourseSchema";
import { ENGLISH } from "@/lib/courseData";

// Spreadsheet "English" page maps to the existing IELTS/English route.
export const metadata: Metadata = pageMetadata("english");

export default function IeltsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseSchema
        name="IELTS & English Coaching"
        description="Online IELTS coaching with live classes and mock tests for Academic and General Training, targeting your required band."
        path="/courses/ielts"
        about="English language and IELTS"
        faqs={ENGLISH.faq}
      />
      {children}
    </>
  );
}
