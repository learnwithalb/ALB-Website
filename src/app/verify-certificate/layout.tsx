import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";

// Utility tool — kept out of the index (matches robots.ts disallow).
export const metadata: Metadata = pageMetadata("cert", { noIndex: true });

export default function VerifyCertificateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
