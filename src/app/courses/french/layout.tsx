import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "French Language Course for Canada Immigration, A1 to B2 | Academy of Languages and Beyond",
  description:
    "Learn French from A1 to B2 with ALB's immigration-focused French Master Pathway. A French course for Canada PR from India with TEF Canada and TCF Canada preparation, CLB 7+ readiness, and confident real-world French, in 36 weeks. Book a free trial class.",
};

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
