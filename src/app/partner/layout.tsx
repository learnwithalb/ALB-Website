import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = pageMetadata("partner");

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
