import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Academy of Languages and Beyond, our French, German, and English programmes, exams, fees, online classes, and more.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
