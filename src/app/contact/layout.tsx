import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact ALB — Book a Free Counselling Session",
  description:
    "Get in touch with Academy of Languages and Beyond. Book a free counselling session to plan your French, German, or IELTS journey with expert guidance.",
  path: "/contact",
  keywords: ["contact ALB", "book language counselling", "language academy contact"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
