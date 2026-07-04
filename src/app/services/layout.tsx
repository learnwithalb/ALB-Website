import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Services — Language Training, Exam Prep & Soft Skills",
  description:
    "ALB's services: live language training in French, German, and English, exam preparation for DELF, TEF, TestDaF, and IELTS, plus the +Beyond soft-skills programme.",
  path: "/services",
  keywords: ["language training services", "exam preparation", "soft skills training"],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
