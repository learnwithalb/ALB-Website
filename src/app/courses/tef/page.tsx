import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { courseSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { ExamLanding } from "@/components/courses/ExamLanding";
import { getPostsByCluster, type BlogFaq } from "@/lib/blog";

const PATH = "/courses/tef";
const ACCENT = "#3b5bdb";

const FAQS: BlogFaq[] = [
  { q: "What is the TEF Canada exam used for?", a: "TEF Canada is an IRCC-approved French exam used for Canadian immigration pathways, including Express Entry, where French can add significant CRS points." },
  { q: "What TEF level do I need for Express Entry?", a: "A TEF result mapping to CLB 7 across all four abilities unlocks meaningful French bonus points; higher levels increase your standing further." },
  { q: "Does ALB prepare for both TEF and TCF Canada?", a: "Yes. ALB's Immigration Track prepares learners for the accepted Canadian French exams, with mock tests and CLB-targeted coaching." },
];

const HIGHLIGHTS = [
  "TEF Canada listening, reading, writing, and speaking",
  "CLB 7+ targeted coaching for Express Entry",
  "Mock tests under real exam conditions",
  "Speaking practice for the Expression Orale tasks",
  "CLB conversion and points strategy explained",
  "Built into ALB's immigration-focused French pathway",
];

export const metadata: Metadata = buildMetadata({
  title: "TEF Canada Preparation for Express Entry — Online | ALB",
  description:
    "Prepare for TEF Canada with ALB — CLB 7+ targeted coaching, mock tests, and speaking practice for Express Entry, inside an immigration-focused French pathway.",
  path: PATH,
  keywords: ["tef canada preparation", "tef canada coaching", "tef for express entry", "clb 7 french"],
});

export default function TefPage() {
  const relatedPosts = getPostsByCluster("french-canada").slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          courseSchema({
            name: "TEF Canada Preparation",
            description: "Online TEF Canada preparation targeting CLB 7+ for Express Entry, with mock tests and speaking practice.",
            path: PATH,
            about: "TEF Canada French exam",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
            { name: "TEF Canada Preparation", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <ExamLanding
        eyebrow="Exam Preparation"
        title="TEF Canada Preparation"
        intro="Prepare for TEF Canada with CLB 7+ targeted coaching for Express Entry. Mock tests, Expression Orale practice, and a clear points strategy are built into ALB's immigration-focused French pathway."
        accent={ACCENT}
        breadcrumbLabel="TEF Canada Preparation"
        path={PATH}
        highlights={HIGHLIGHTS}
        faqs={FAQS}
        relatedPosts={relatedPosts}
        courseHref="/courses/french"
        courseLabel="Explore the French Course"
        topic="TEF Canada Preparation"
      />
    </>
  );
}
