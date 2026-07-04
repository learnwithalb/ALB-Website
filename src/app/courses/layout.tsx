import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = pageMetadata("courses");

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
