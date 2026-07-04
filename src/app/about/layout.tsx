import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = pageMetadata("about");

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
