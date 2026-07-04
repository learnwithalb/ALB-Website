import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { courseSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { ExamLanding } from "@/components/courses/ExamLanding";
import { getPostsByCluster, type BlogFaq } from "@/lib/blog";

const PATH = "/courses/delf";
const ACCENT = "#0ea5e9";

const FAQS: BlogFaq[] = [
  { q: "What DELF levels does ALB prepare for?", a: "ALB prepares learners for DELF A1 through B2, with structured coaching, mock exams, and speaking practice built into the French pathway." },
  { q: "Does the DELF diploma expire?", a: "No. DELF and DALF diplomas are valid for life, making them a strong long-term credential for study, work, and immigration." },
  { q: "Where can I take the DELF exam in India?", a: "DELF is administered by Alliance Française centres across major Indian cities; our DELF exam centres guide explains registration." },
];

const HIGHLIGHTS = [
  "All DELF levels covered, A1 to B2",
  "Mock exams with detailed written feedback",
  "Timed speaking practice for the oral section",
  "Formal-letter and essay writing frameworks",
  "Exam-day strategy and registration guidance",
  "Integrated into ALB's structured French pathway",
];

export const metadata: Metadata = buildMetadata({
  title: "DELF Exam Preparation (A1–B2) — Online Coaching | ALB",
  description:
    "Prepare for the DELF exam (A1 to B2) with ALB — structured coaching, mock exams, timed speaking practice, and writing frameworks, inside a complete French pathway.",
  path: PATH,
  keywords: ["delf preparation", "delf coaching online", "delf a1 a2 b1 b2", "delf exam india"],
});

export default function DelfPage() {
  const relatedPosts = getPostsByCluster("delf-dalf").slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          courseSchema({
            name: "DELF Exam Preparation (A1–B2)",
            description: "Structured online DELF preparation from A1 to B2 with mock exams and speaking practice.",
            path: PATH,
            about: "DELF French exam",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
            { name: "DELF Preparation", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <ExamLanding
        eyebrow="Exam Preparation"
        title="DELF Exam Preparation"
        intro="Prepare for every DELF level from A1 to B2 with structured, exam-focused coaching. Mock exams, timed speaking practice, and writing frameworks are built directly into ALB's French pathway."
        accent={ACCENT}
        breadcrumbLabel="DELF Preparation"
        path={PATH}
        highlights={HIGHLIGHTS}
        faqs={FAQS}
        relatedPosts={relatedPosts}
        courseHref="/courses/french"
        courseLabel="Explore the French Course"
        topic="DELF Preparation"
      />
    </>
  );
}
