import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { faqs } from "@/lib/constants";

export const metadata: Metadata = pageMetadata("faq");

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faq" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
