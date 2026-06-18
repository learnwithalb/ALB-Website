import type { Metadata } from "next";
import { AnimateOnView } from "@/components/shared/AnimateOnView";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Academy of Languages & Beyond, how we collect, use, and protect your personal data.",
};

const sections = [
  {
    title: "1. Who We Are",
    content: `Academy of Languages & Beyond ("ALB", "we", "us", "our") is a language and soft skills academy based in Mumbai, India. Our website is academyoflanguagesandbeyond.com. This Privacy Policy explains how we collect, use, and protect information about you when you use our website or enroll in our programmes.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect information you provide directly: name, email address, phone number, and payment information during enrollment; messages you send us via WhatsApp, email, or contact forms; feedback and testimonials you provide. We automatically collect: pages visited, time on site, device type, and browser information via analytics tools. We do not collect sensitive personal data (health information, government IDs) unless strictly required.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your information to: process enrollment and communicate about your course; send progress reports and course-related updates; respond to your enquiries; improve our website and services; send marketing communications (you can opt out at any time); comply with legal obligations. We do not sell your personal data to third parties.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your data on the following legal bases: Contract, to fulfil our obligations under your enrollment; Legitimate Interest, to improve our services and communicate with prospective students; Consent, for marketing communications (which you may withdraw at any time); Legal Obligation, where required by law.`,
  },
  {
    title: "5. Data Sharing",
    content: `We may share your data with: payment processors (for secure transaction handling); video conferencing platforms (Zoom, Google Meet) for online classes; analytics providers (Google Analytics) in anonymised form; legal authorities when required by law. All third-party providers are bound by data protection agreements and may not use your data for their own purposes.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal data for as long as your enrollment is active and for 3 years thereafter for legal and accounting purposes. Marketing data is retained until you withdraw consent. You may request deletion of your data at any time (see Section 8).`,
  },
  {
    title: "7. Cookies",
    content: `Our website uses essential cookies (required for the site to function), analytics cookies (to understand how visitors use the site), and marketing cookies (to show relevant content). You can manage cookie preferences in your browser settings. Disabling cookies may affect some website functionality.`,
  },
  {
    title: "8. Your Rights",
    content: `You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data (subject to legal retention requirements); withdraw consent for marketing at any time; lodge a complaint with the relevant data protection authority. To exercise any of these rights, email hello@academyoflanguagesandbeyond.com. We will respond within 30 days.`,
  },
  {
    title: "9. Security",
    content: `We implement industry-standard security measures including SSL encryption, access controls, and secure payment processing. No internet transmission is 100% secure. We encourage you not to share passwords or sensitive information over unsecured channels.`,
  },
  {
    title: "10. Children's Privacy",
    content: `Our Junior programmes serve children aged 6–16. For learners under 18, we require parental consent at enrollment. We do not knowingly collect data from children under 6 or use children's data for marketing purposes. Parents may request access to or deletion of their child's data at any time.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Significant changes will be notified by email to enrolled students and posted on our website. The date at the top of this page indicates when the policy was last updated.`,
  },
  {
    title: "12. Contact Us",
    content: `For any privacy-related queries or to exercise your rights, please contact: Email: hello@academyoflanguagesandbeyond.com · Phone: +91 98765 43210 · Address: Mumbai, Maharashtra, India.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="hero-light pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-sky w-[400px] h-[300px] top-0 right-0 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView>
            <span className="eyebrow-pill-outline">Legal</span>
            <h1 className="text-4xl md:text-5xl font-black text-ink mt-4">Privacy Policy</h1>
            <p className="mt-3 text-muted">Last updated: June 2026</p>
          </AnimateOnView>
        </div>
      </section>

      <section className="section-padding sec-light">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <AnimateOnView className="glass-blue rounded-2xl p-5 mb-10">
              <p className="text-body text-sm leading-relaxed">
                Your privacy matters to us. ALB is committed to being transparent about how we use your data
                and to giving you control over your personal information.
              </p>
            </AnimateOnView>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <AnimateOnView key={section.title} delay={i * 0.03}>
                  <div>
                    <h2 className="text-xl font-black text-ink mb-3">{section.title}</h2>
                    <p className="text-body leading-relaxed">{section.content}</p>
                  </div>
                  {i < sections.length - 1 && <div className="border-b border-line mt-10" />}
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
