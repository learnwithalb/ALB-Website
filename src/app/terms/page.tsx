import type { Metadata } from "next";
import { AnimateOnView } from "@/components/shared/AnimateOnView";

export const metadata: Metadata = {
  title: "Terms and Conditions | Academy of Languages and Beyond",
  description: "Terms and Conditions for Academy of Languages and Beyond, enrolment, payment, refund and cancellation policy, conduct, intellectual property, privacy, and more.",
};

const EMAIL = "info@learnwithalb.com";
const REFUND_EMAIL = "refund@learnwithalb.com";
const COMPLAINTS_EMAIL = "complaints@learnwithalb.com";
const PHONE = "+91 98212 75843";
const ADDRESS = "6th Floor, Tower-B, Bhutani Alphathum, Unit 603-604, Sector 90, Noida, Uttar Pradesh 201305";

type Item =
  | string
  | { h: string }
  | { bullets: string[] }
  | { defs: { t: string; d: string }[] }
  | { conditions: { title: string; text: string }[] }
  | { table: [string, string][] }
  | { note: string };

interface Section { id: string; num: string; title: string; short: string; body: Item[]; }

const SECTIONS: Section[] = [
  {
    id: "agreement", num: "01", title: "Agreement", short: "Agreement",
    body: [
      "By enrolling in any programme offered by Academy of Languages and Beyond (referred to throughout as “ALB,” “we,” “us,” or “our”), you confirm that you have read, understood, and agree to be bound by these Terms and Conditions.",
      "These Terms apply to all students, learners, and users who access ALB's language programmes, soft skills modules, trial classes, or any other services offered by Academy of Languages and Beyond, whether accessed through our website, by direct enrolment, or through any other channel.",
      "If you are enrolling on behalf of a minor, you as the parent or legal guardian accept these Terms on their behalf and take full responsibility for their participation.",
      "If you do not agree with any part of these Terms, please do not proceed with enrolment.",
    ],
  },
  {
    id: "definitions", num: "02", title: "Definitions", short: "Definitions",
    body: [
      "For the purpose of these Terms:",
      { defs: [
        { t: "Programme", d: "Any language course, soft skills module, trial class, or learning track offered by ALB." },
        { t: "Student", d: "The individual enrolled in a programme." },
        { t: "Enrolment Date", d: "The date on which payment is received and confirmed by ALB." },
        { t: "First Class Date", d: "The date of the student's first live session in their enrolled programme." },
        { t: "Fees", d: "The total amount paid by the student for their enrolled programme." },
        { t: "+Beyond Module", d: "The ALB Global Confidence Program, included free with every language programme." },
        { t: "Batch", d: "The group of students assigned to a programme cohort." },
      ]},
    ],
  },
  {
    id: "enrolment", num: "03", title: "Enrolment and Admission", short: "Enrolment and Admission",
    body: [
      "3.1 Enrolment in any ALB programme is confirmed only upon receipt of full payment unless a payment plan has been expressly agreed upon in writing by ALB.",
      "3.2 ALB reserves the right to decline or cancel any enrolment at its discretion, including where a programme is full, where the student does not meet entry requirements, or where ALB determines that the programme may not be suitable. In such cases, a full refund of fees paid will be issued.",
      "3.3 Students are responsible for ensuring they meet any entry-level requirements communicated at the time of enrolment. ALB may conduct a brief placement assessment to confirm suitability for a level. Enrolment in an inappropriate level does not in itself constitute grounds for a refund beyond the policy stated in Section 5.",
      "3.4 Enrolment is personal and non-transferable. A student may not transfer their seat to another individual without prior written consent from ALB.",
      "3.5 ALB reserves the right to reschedule, modify, or reorganise batch timings, instructors, or delivery format with reasonable prior notice. Such changes do not automatically constitute grounds for a refund.",
    ],
  },
  {
    id: "payment", num: "04", title: "Payment Terms", short: "Payment Terms",
    body: [
      "4.1 All fees are quoted and payable in Indian Rupees (INR) unless otherwise stated.",
      "4.2 Full payment is required at the time of enrolment unless an instalment plan has been agreed upon in writing. Instalment arrangements are subject to separate terms communicated at the time of agreement.",
      "4.3 Fees are inclusive of all course materials, the +Beyond soft skills module, and any assessments included in the programme, unless otherwise specified.",
      "4.4 ALB does not charge any hidden fees. Any additional costs, such as official examination registration fees for third-party bodies (DELF, Goethe-Institut, IELTS, TEF, TCF, etc.), are entirely separate and are the responsibility of the student.",
      "4.5 In the event of a payment failure or reversal, ALB reserves the right to suspend or withdraw access to the programme until payment is resolved.",
    ],
  },
  {
    id: "refund", num: "05", title: "Refund and Cancellation Policy", short: "Refund and Cancellation",
    body: [
      "ALB's refund policy is designed to be transparent and fair. Students who complete the programme and find it was not the right fit are protected, provided the conditions below are met in full.",
      { h: "5.1 Refund Eligibility Conditions" },
      "A refund request will only be considered valid if all four of the following conditions are satisfied:",
      { conditions: [
        { title: "Condition 1, 30% Deduction", text: "30% of the total amount paid is non-refundable under all circumstances. This covers the operational costs of the 6 sessions conducted, instructor time, platform costs, and administrative overhead. The maximum refund is therefore 70% of total fees paid." },
        { title: "Condition 2, Full Attendance Required", text: "The student must have attended all 6 sessions in full. Partial attendance does not qualify. Sessions missed, for any reason, are forfeited without exception and do not count toward refund eligibility." },
        { title: "Condition 3, Refund Request Window", text: "The refund request must be submitted within 48 hours of completing the 6th session. Requests submitted after this window will not be entertained, regardless of reason." },
        { title: "Condition 4, No Mid-Pack Exits", text: "Students cannot exit mid-way and claim a refund. The full 6-session pack must be completed before any refund request can be assessed." },
      ]},
      { h: "5.2 Summary of Refund Conditions" },
      { table: [
        ["Attendance", "All 6 sessions attended in full"],
        ["Request timing", "Within 48 hours of completing Session 6"],
        ["Refund amount", "70% of total fees paid"],
        ["Non-refundable", "30% retained, no exceptions"],
        ["Mid-pack exits", "Not permitted, full pack must be completed"],
      ]},
      { h: "5.3 How to Request a Refund" },
      "To submit a valid refund request, students must:",
      { bullets: [
        `Email ${REFUND_EMAIL} with the subject line: “Refund Request, [Full Name], [Programme Name]”`,
        "Include: full name, registered phone number or email, programme enrolled in, and date of 6th session completed",
        "Submit within 48 hours of completing their 6th session",
      ]},
      { note: "Requests via WhatsApp, social media, phone call, or verbal communication will not be accepted as formal refund requests. Written email submission is the only valid channel." },
      { h: "5.4 Refund Processing" },
      "Once a refund request is verified and approved:",
      { bullets: [
        "ALB will confirm receipt within 2 working days",
        "The 70% refund will be processed within 7 to 10 working days to the original payment method",
      ]},
      { h: "5.5 Circumstances Not Eligible for Refund" },
      { bullets: [
        "Requests submitted more than 48 hours after the 6th session",
        "Students who did not attend all 6 sessions in full",
        "Requests submitted before completing all 6 sessions",
        "Students who have received a programme completion certificate",
        "No-shows or absences without prior communication",
        "Dissatisfaction with third-party examination outcomes (DELF, Goethe, IELTS, TEF, TCF, etc.), these are entirely independent of ALB",
      ]},
      { h: "5.6 Trial Class Policy" },
      "If a student attends a free or paid trial class prior to full enrolment, the 6-session refund window and attendance conditions apply exclusively to the main enrolled programme. The trial class is separate and does not count toward the 6-session requirement.",
      { h: "5.7 The +Beyond Module" },
      "The ALB Global Confidence Program (+Beyond) is included free with every language programme and carries no separate fee. Sessions attended as part of the +Beyond module are not counted toward the 6-session refund eligibility requirement, and are not deducted from the 70% refund amount.",
    ],
  },
  {
    id: "conduct", num: "06", title: "Programme Conduct and Participation", short: "Conduct and Participation",
    body: [
      "6.1 Students are expected to participate respectfully in all live sessions, group activities, and any communication with instructors or peers.",
      "6.2 ALB operates a zero-tolerance policy toward any form of harassment, discrimination, abusive language, or disruptive behaviour directed at instructors, staff, or fellow students, whether in live sessions, group chats, or any other ALB-associated platform.",
      "6.3 ALB reserves the right to remove a student from a programme without refund if, after a formal warning, the student continues to engage in behaviour that disrupts the learning environment or violates this code of conduct.",
      "6.4 Students are expected to attend sessions on time. While ALB understands that life happens, habitual tardiness or absence without notice affects both the student's progress and the batch experience.",
    ],
  },
  {
    id: "attendance", num: "07", title: "Attendance and Rescheduling", short: "Attendance and Rescheduling",
    body: [
      "7.1 ALB schedules sessions in advance and shares the calendar with students at the start of each programme. Students are expected to note and plan around the session schedule.",
      "7.2 If a student is unable to attend a scheduled session, they must notify ALB in advance where possible. Missed sessions are not automatically compensated with additional one-on-one sessions unless explicitly offered by the instructor.",
      "7.3 ALB will make reasonable efforts to reschedule sessions in the event of an instructor absence or technical failure on ALB's part. Rescheduled sessions do not affect the 6-session refund window.",
      "7.4 In the event of an unavoidable class cancellation by ALB (national holiday, technical outage, or instructor emergency), the session will be rescheduled at the earliest mutually convenient time. No refund is applicable solely on account of a single rescheduled session.",
    ],
  },
  {
    id: "ip", num: "08", title: "Intellectual Property", short: "Intellectual Property",
    body: [
      "8.1 All content, materials, lesson plans, recordings, worksheets, slides, and resources created and shared by ALB are the exclusive intellectual property of Academy of Languages and Beyond.",
      "8.2 Students may use course materials strictly for their personal learning. Sharing, reproducing, distributing, uploading, or selling any ALB course material, in any format, on any platform, is strictly prohibited and may result in legal action.",
      "8.3 Any feedback, testimonials, or project submissions shared by students during the programme may be used by ALB for educational or marketing purposes, with the student's identity anonymised unless explicit written consent is given to use their name.",
    ],
  },
  {
    id: "privacy", num: "09", title: "Session Recording and Privacy", short: "Recording and Privacy",
    body: [
      "9.1 ALB may record live sessions for internal quality assurance, instructor evaluation, or to share recordings with absent enrolled students for catch-up purposes only.",
      "9.2 Session recordings are not publicly shared, uploaded to open platforms, or distributed beyond the enrolled cohort without student consent.",
      "9.3 Students must not record live sessions using any external device or screen recording tool without the explicit written consent of ALB and the instructor.",
      "9.4 ALB collects and processes personal data in accordance with its Privacy Policy. By enrolling, students consent to ALB using their contact details for programme-related communications, updates, and, with consent, promotional purposes.",
    ],
  },
  {
    id: "liability", num: "10", title: "Limitation of Liability", short: "Limitation of Liability",
    body: [
      "10.1 ALB is committed to delivering high-quality language and communication education. However, ALB does not guarantee specific outcomes, including but not limited to examination scores, visa approvals, employment offers, university admissions, or any particular result arising from completion of a programme.",
      "10.2 Language learning outcomes depend on individual effort, consistency, and engagement. ALB provides the instruction, environment, and tools, outcomes are co-created with the student.",
      "10.3 ALB shall not be held liable for any indirect, consequential, or special damages arising from participation in, or withdrawal from, any programme, beyond the refund provisions stated in Section 5.",
      "10.4 ALB is not responsible for technical failures arising from the student's internet connection, device, or third-party platforms beyond ALB's control.",
    ],
  },
  {
    id: "disputes", num: "11", title: "Dispute Resolution", short: "Dispute Resolution",
    body: [
      "11.1 In the event of a dispute, both parties agree to first attempt to resolve the matter through direct communication in good faith.",
      "11.2 If a resolution cannot be reached within 30 days of the dispute being formally raised in writing, either party may refer the matter to mediation or arbitration under applicable Indian law.",
      `11.3 ALB's formal complaint channel is ${COMPLAINTS_EMAIL}. All complaints must be submitted in writing, and ALB commits to responding within 5 working days.`,
    ],
  },
  {
    id: "law", num: "12", title: "Governing Law", short: "Governing Law",
    body: [
      `These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh, India.`,
    ],
  },
  {
    id: "amendments", num: "13", title: "Amendments", short: "Amendments",
    body: [
      "ALB reserves the right to update or modify these Terms and Conditions at any time. Students will be notified of material changes via email or a notice on the ALB website. Continued participation following notification of changes constitutes acceptance of the revised Terms.",
      "The most current version of these Terms will always be available on the ALB website with the date of last update clearly marked.",
    ],
  },
  {
    id: "contact", num: "14", title: "Contact", short: "Contact",
    body: [
      "If you have any questions about these Terms and Conditions, our refund policy, or anything related to your enrolment, please reach out:",
      { defs: [
        { t: "General", d: EMAIL },
        { t: "Refund queries", d: REFUND_EMAIL },
        { t: "Complaints", d: COMPLAINTS_EMAIL },
        { t: "Phone", d: PHONE },
        { t: "Address", d: ADDRESS },
      ]},
    ],
  },
];

function ItemView({ item }: { item: Item }) {
  if (typeof item === "string") return <p className="text-body leading-relaxed">{item}</p>;
  if ("h" in item) return <h3 className="text-lg font-black text-ink mt-6">{item.h}</h3>;
  if ("note" in item)
    return <p className="text-sm text-royal-700 bg-royal-50 border border-royal-100 rounded-xl px-4 py-3 leading-relaxed">{item.note}</p>;
  if ("bullets" in item)
    return (
      <ul className="space-y-2">
        {item.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-body leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-royal-400 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    );
  if ("defs" in item)
    return (
      <dl className="space-y-2.5">
        {item.defs.map((d) => (
          <div key={d.t} className="flex flex-col sm:flex-row sm:gap-3">
            <dt className="font-bold text-ink sm:w-44 flex-shrink-0">{d.t}</dt>
            <dd className="text-body leading-relaxed">{d.d}</dd>
          </div>
        ))}
      </dl>
    );
  if ("conditions" in item)
    return (
      <div className="grid sm:grid-cols-2 gap-3">
        {item.conditions.map((c) => (
          <div key={c.title} className="card rounded-2xl p-5">
            <h4 className="font-black text-ink text-sm">{c.title}</h4>
            <p className="text-muted text-sm mt-2 leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    );
  if ("table" in item)
    return (
      <div className="card rounded-2xl overflow-hidden">
        {item.table.map(([k, v], i) => (
          <div key={k} className={`grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] gap-3 px-5 py-3.5 ${i % 2 ? "bg-royal-50/40" : ""}`}>
            <span className="font-bold text-ink text-sm">{k}</span>
            <span className="text-body text-sm">{v}</span>
          </div>
        ))}
      </div>
    );
  return null;
}

export default function TermsPage() {
  return (
    <>
      {/* hero */}
      <section className="hero-light pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[420px] h-[320px] top-0 right-0 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView>
            <span className="eyebrow-pill-outline">Legal</span>
            <h1 className="text-4xl md:text-5xl font-black text-ink mt-4">Terms and Conditions</h1>
            <p className="mt-3 text-muted">Last updated: June 2026</p>
          </AnimateOnView>
        </div>
      </section>

      {/* content */}
      <section className="section-padding sec-light">
        <div className="container-max px-5 md:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-14 items-start">
            {/* sticky TOC */}
            <aside className="hidden lg:block lg:sticky lg:top-28">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-3">On this page</p>
              <nav className="space-y-1">
                {SECTIONS.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2.5 text-sm text-body hover:text-royal-700 py-1.5 transition-colors group">
                    <span className="text-[11px] font-black text-royal-300 group-hover:text-royal-500 w-5">{s.num}</span>
                    {s.short}
                  </a>
                ))}
              </nav>
            </aside>

            {/* sections */}
            <div className="max-w-3xl">
              <AnimateOnView className="glass-blue rounded-2xl p-5 mb-10">
                <p className="text-body text-sm leading-relaxed">
                  <strong className="text-ink">Important:</strong> Please read these Terms and Conditions carefully before
                  enrolling in any ALB programme. By enrolling, you confirm that you have read, understood, and agree to be bound by these terms.
                </p>
              </AnimateOnView>

              <div className="space-y-12">
                {SECTIONS.map((s, i) => (
                  <AnimateOnView key={s.id} delay={Math.min(i * 0.02, 0.1)}>
                    <div id={s.id} className="scroll-mt-28">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] text-white font-black text-xs flex items-center justify-center shadow-md shadow-royal-500/20">{s.num}</span>
                        <h2 className="text-xl md:text-2xl font-black text-ink">{s.title}</h2>
                      </div>
                      <div className="space-y-3 pl-0 md:pl-12">
                        {s.body.map((item, k) => (
                          <ItemView key={k} item={item} />
                        ))}
                      </div>
                    </div>
                    {i < SECTIONS.length - 1 && <div className="border-b border-line mt-12 md:ml-12" />}
                  </AnimateOnView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
