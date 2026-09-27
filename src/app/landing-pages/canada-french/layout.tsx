import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "French for Your Canada Journey | TEF & TCF Canada Prep — ALB",
  description: "Build French skills for TEF Canada or TCF Canada with live online classes, small batches, speaking practice and personalised guidance from ALB.",
  alternates: { canonical: "/landing-pages/canada-french" },
};

export default function CanadaFrenchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
