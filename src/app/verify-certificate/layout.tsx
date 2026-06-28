import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificate Verification | Academy of Languages and Beyond",
  description:
    "Verify the authenticity of certificates issued by Academy of Languages and Beyond. Enter your certificate ID to confirm a credential is genuine.",
};

export default function VerifyCertificateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
