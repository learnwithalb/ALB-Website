import type { Metadata } from "next";
import { AnimateOnView } from "@/components/shared/AnimateOnView";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Academy of Languages & Beyond courses, services, and website.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By enrolling in any course or programme offered by Academy of Languages & Beyond ("ALB", "we", "us"), or by accessing our website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not enroll or continue using our services.`,
  },
  {
    id: "enrollment",
    title: "2. Enrollment & Registration",
    content: `Enrollment is confirmed upon receipt of the course fee (full or first instalment where an EMI plan is agreed). ALB reserves the right to decline enrollment at its discretion. Seats are limited per batch; registration on a first-come, first-served basis. A placement test may be required for certain levels.`,
  },
  {
    id: "fees",
    title: "3. Course Fees & Payment",
    content: `Course fees are displayed inclusive of applicable taxes at the time of enrollment. Fees are non-refundable except as described in Section 4. EMI plans are available on select courses; failure to pay subsequent instalments may result in suspension of access. ALB reserves the right to revise fees for future batches.`,
  },
  {
    id: "refund",
    title: "4. Refund & Cancellation Policy",
    content: `Cancellation before the course start date: 80% refund of fees paid. Cancellation within 7 days of course commencement: 50% refund. Cancellation after 7 days of commencement: No refund. Course transfers to a different batch or level are permitted once per course at no charge, subject to availability. If ALB cancels a course, a full refund will be issued. Refunds are processed within 7–10 business days.`,
  },
  {
    id: "pause",
    title: "5. Course Pause Policy",
    content: `Students may pause their active enrolment for up to 3 months in cases of medical emergency or significant personal circumstances, supported by documentation. Pause requests must be submitted in writing to hello@academyoflanguagesandbeyond.com. Pauses cannot be applied retroactively. The remaining course duration resumes on return.`,
  },
  {
    id: "conduct",
    title: "6. Student Code of Conduct",
    content: `Students are expected to: (a) treat faculty and fellow students with respect; (b) attend classes punctually; (c) refrain from recording sessions without written permission; (d) not share course materials outside the enrolled batch; (e) engage in good faith with assessments. ALB reserves the right to remove any student for violation of this code without refund.`,
  },
  {
    id: "ip",
    title: "7. Intellectual Property",
    content: `All course content, materials, recordings, worksheets, and teaching methods are the intellectual property of Academy of Languages & Beyond. Students are granted a personal, non-transferable licence to use materials for private study only. Reproduction, redistribution, or commercial use without written consent is strictly prohibited.`,
  },
  {
    id: "online",
    title: "8. Online Classes",
    content: `Online classes are conducted via video conferencing platforms. Students are responsible for their own hardware, software, and internet connection. ALB is not liable for session disruptions due to student-side technical issues. Classes cancelled due to faculty unavailability will be rescheduled without charge. Sessions are not recorded by default; exceptions require prior written agreement.`,
  },
  {
    id: "certification",
    title: "9. Certificates & Assessments",
    content: `ALB certificates of completion are issued upon meeting the attendance and assessment criteria specified for each course (typically 75% attendance and a passing grade on the final assessment). ALB certificates are not equivalent to official government certifications (DELF, Goethe, IELTS). For external exam registrations, ALB assists with preparation only; examination results are determined by the certifying bodies.`,
  },
  {
    id: "privacy",
    title: "10. Privacy",
    content: `Use of your personal data is governed by ALB's Privacy Policy, incorporated by reference. By enrolling, you consent to ALB using your name, photograph (if shared), and testimonial (with your approval) for marketing purposes. You may withdraw this consent at any time by emailing hello@academyoflanguagesandbeyond.com.`,
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    content: `ALB's liability for any claim arising from the provision of its services is limited to the amount of course fees paid by the student for the relevant course. ALB is not liable for indirect, consequential, or punitive damages. ALB does not guarantee specific outcomes (exam results, visa approval, job placement) as these depend on individual effort and third-party decisions.`,
  },
  {
    id: "changes",
    title: "12. Changes to Terms",
    content: `ALB reserves the right to update these Terms & Conditions at any time. Changes will be notified via email to enrolled students and updated on the website. Continued participation in courses after notification constitutes acceptance of updated terms.`,
  },
  {
    id: "governing",
    title: "13. Governing Law",
    content: `These Terms & Conditions are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.`,
  },
  {
    id: "contact",
    title: "14. Contact",
    content: `For any queries regarding these terms, please contact us at: hello@academyoflanguagesandbeyond.com or call +91 98765 43210. Our registered address is available upon request.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="hero-light pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[400px] h-[300px] top-0 right-0 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView>
            <span className="eyebrow-pill-outline">Legal</span>
            <h1 className="text-4xl md:text-5xl font-black text-ink mt-4">Terms &amp; Conditions</h1>
            <p className="mt-3 text-muted">Last updated: June 2026</p>
          </AnimateOnView>
        </div>
      </section>

      <section className="section-padding sec-light">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <AnimateOnView className="glass-blue rounded-2xl p-5 mb-10">
              <p className="text-body text-sm leading-relaxed">
                <strong className="text-ink">Important:</strong> Please read these Terms &amp; Conditions carefully before enrolling
                in any ALB programme. By enrolling, you confirm that you have read, understood, and
                agree to be bound by these terms.
              </p>
            </AnimateOnView>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <AnimateOnView key={section.id} delay={i * 0.03}>
                  <div id={section.id}>
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
