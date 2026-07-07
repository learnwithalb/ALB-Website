import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = pageMetadata("junior");

export default function JuniorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
