import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = pageMetadata("beyond");

export default function BeyondLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
