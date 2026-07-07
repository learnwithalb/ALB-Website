import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ALL_FAQS } from "@/lib/faqData";

export const metadata: Metadata = pageMetadata("faq");

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(ALL_FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/frequently-asked-questions" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
