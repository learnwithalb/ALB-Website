import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("success");

export default function SuccessStoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Success Stories", path: "/success-stories" },
        ])}
      />
      {children}
    </>
  );
}
