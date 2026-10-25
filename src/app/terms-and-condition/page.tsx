import type { Metadata } from "next";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { pageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = pageMetadata("terms");

const EMAIL = "info@learnwithalb.com";
const REFUND_EMAIL = "help@learnwithalb.com";
const PHONE = "+91 98212 75843";
const ADDRESS = "6th Floor, Tower-B, Bhutani Alphathum, Unit 603-604, Sector 90, Noida, Uttar Pradesh 201305";

// a bullet is plain text, or [bold lead, text] rendered as "Lead: text"
type Bullet = string | [string, string];

type Item =
  | string
  | { h: string }
  | { bullets: Bullet[] }
  | { defs: { t: string; d: string }[] }
  | { qa: { q: string; a: string } };

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
        { t: "Booking Amount", d: "The minimum amount of ₹5,000 required to reserve a seat in a programme." },
        { t: "Batch", d: "The group of students assigned to a programme cohort." },
        { t: "Batch Start Date", d: "The date of the first scheduled class of the student's batch." },
        { t: "Observation Window", d: "The initial period of a programme during which a student may attend classes and request a refund, as set out in Section 5.2." },
        { t: "Observation Fee", d: "The fixed, non-refundable amount of ₹5,000 retained on a refund within the Observation Window, as set out in Section 5.3." },
        { t: "Fees", d: "The total amount paid by the student for their enrolled programme." },
        { t: "+Beyond Module", d: "The ALB Global Confidence Program, included free with every language programme." },
      ]},
    ],
  },
  {
    id: "enrolment", num: "03", title: "Enrolment and Admission", short: "Enrolment and Admission",
    body: [
      "3.1 Enrolment in any ALB programme is confirmed on receipt of full payment, or of the Booking Amount where an instalment plan has been agreed in writing by ALB.",
      "3.2 ALB reserves the right to decline or cancel any enrolment at its discretion, including where a programme is full, where the student does not meet entry requirements, or where ALB determines that the programme may not be suitable. In such cases, a full refund of fees paid will be issued.",
      "3.3 Students are responsible for ensuring they meet any entry-level requirements communicated at the time of enrolment. ALB may conduct a brief assessment to confirm suitability for a level. If a student is placed in the wrong level, ALB will move them to the appropriate level at no cost. Enrolment in an inappropriate level does not in itself constitute grounds for a refund beyond the policy stated in Section 5.",
      "3.4 Enrolment is personal. In exceptional cases, a student may transfer their seat to a family member or friend, only with prior written consent from ALB.",
      "3.5 ALB reserves the right to reschedule, modify, or reorganise batch timings, instructors, or delivery format with reasonable prior notice. Such changes do not constitute grounds for a refund, except as set out in Section 5.9.",
      { h: "3.6 Track changes" },
      "Each track runs at a different pace; for example, the Sprint track covers the curriculum in approximately 3.5 months and is significantly faster than the Immigration track. Students are advised to choose their track carefully, using the Observation Window (Section 5.2) to assess whether the pace suits them. A student may request to change their track after the programme has begun, subject to the following:",
      { bullets: [
        ["Moving to a lower-priced track (for example, from Sprint to Immigration)", "no additional fee is charged. The difference in fees between the two tracks is not refunded since the batch cost and all other operational costs are already calculated at the time of enrollment. Hence a learner's decision later on should not affect ALB."],
        ["Moving to a higher-priced track (for example, from Immigration to Sprint)", "the student must pay the balance amount, as determined by ALB at the time of the change, based on the prevailing fees and the student's progress in the programme. The change takes effect only once the balance amount is paid."],
        "All track changes are subject to the availability of a suitable batch at the student's current level, and are confirmed only in writing by ALB.",
        "A track change does not restart the Observation Window, and the Observation Window refund does not apply after a track change.",
        "A track change is not a cancellation, and does not make a student eligible for a refund under Section 5.",
      ]},
      { h: "3.7 Batch changes" },
      { bullets: [
        "Each enrolment includes one free batch change in a similar track.",
        "Any further batch change is charged a batch change fee of fixed ₹5,000.",
        "Classes missed for personal reasons are covered by session recordings (Section 9.1). Students who miss classes are expected to catch up through the recordings; missed classes are not, by themselves, grounds for a free batch change.",
        "All batch changes are subject to seat availability and are confirmed only in writing by ALB.",
      ]},
      { h: "3.8 Pausing and resuming" },
      { bullets: [
        "A student may pause their programme once per enrolment, for up to 60 days or in exceptional cases indefinitely until the learner wants to resume, by informing ALB in writing before the pause begins.",
        "During a pause, the student's seat in their original batch is not held. On resuming, ALB will place the student in the next available batch at the same level and point in the curriculum where they paused, at no extra cost.",
        "If a student wishes to resume from an earlier level or point than where they paused (for example, a student who paused after completing A2 and wishes to restart from the middle of A2 instead of starting B1), ALB will accommodate this, but the student must pay the difference for the additional portion, as determined by ALB at the time based on the prevailing fees.",
        "If a student does not resume within the pause period, ALB may close the enrolment. The options in Sections 5.7 and 5.8 continue to apply.",
        "A pause does not extend the Observation Window or make a student eligible for a refund.",
      ]},
    ],
  },
  {
    id: "payment", num: "04", title: "Payment Terms", short: "Payment Terms",
    body: [
      "4.1 All fees are quoted and payable in Indian Rupees (INR) unless otherwise stated.",
      "4.2 Full payment is required at the time of enrolment unless an instalment plan has been agreed in writing. Where an instalment plan is agreed, the minimum Booking Amount is ₹5,000, and the remaining instalments are payable on the agreed dates.",
      "4.3 Fees are inclusive of all course materials, the +Beyond soft skills module, and any assessments included in the programme, unless otherwise specified. Fees are inclusive of applicable GST, and a tax invoice is issued for every payment.",
      "4.4 ALB does not charge any hidden fees. Any additional costs, such as official examination registration fees for third-party bodies (DELF, Goethe-Institut, IELTS, TEF, TCF, etc.), are entirely separate and are the responsibility of the student.",
      "4.5 In the event of a payment failure, reversal, or overdue instalment, ALB reserves the right to suspend or withdraw access to the programme until payment is resolved.",
    ],
  },
  {
    id: "refund", num: "05", title: "Refund and Cancellation Policy", short: "Refund and Cancellation",
    body: [
      { h: "5.1 Our approach" },
      "We want you to be sure about ALB before you commit. Every programme starts with an Observation Window: attend your first classes, meet your trainer and batch, and decide. If it isn't the right fit, request a refund within the window and we will refund your fees minus a fixed Observation Fee of ₹5,000. After the window, your enrolment is confirmed and the options in 5.7 and 5.8 apply.",
      { h: "5.2 Observation Window" },
      "The Observation Window starts on your Batch Start Date, whether or not you attend.",
      "The Observation Window for each programme is:",
      { bullets: [
        ["Sprint", "the first 3 scheduled class days (approximately 6 hours of lessons)."],
        ["Immigration, Academic, Career, Junior and single-level programmes", "the first 7 calendar days from the Batch Start Date (approximately 5 hours of lessons for Immigration)."],
        ["French Communication Lab (1:1)", "the first 3 days of classes. FCL classes run Monday to Friday only, so the Observation Window is the same 3 days whether you take 1-hour or 2-hour sessions. After this window, no refund of any kind is applicable for French Communication Lab, regardless of the number of sessions completed or remaining."],
      ]},
      "You do not need to attend a minimum number of classes to request a refund. The Observation Fee is fixed and does not change with the number of classes attended (see 5.3).",
      "If ALB reschedules a class within the Observation Window, the window is extended by the same number of days.",
      "Your Observation Window end date is shared with you when your batch begins.",
      { h: "5.3 Refund amount" },
      "Refund = total amount paid (including GST) minus the Observation Fee of ₹5,000, minus any other deductions (platform fee) if there are any. The Observation Fee is the same for all programmes.",
      "The minimum Booking Amount is ₹5,000. If you have paid only the Booking Amount, no refund is due and no further amount is owed.",
      "The Observation Fee covers your reserved seat in a small batch, trainer time, onboarding, platform access and course materials. It is charged for holding your seat from the Batch Start Date, not per class, and is not reduced if you attend fewer classes or none. To avoid it, cancel before the Batch Start Date (see 5.5).",
      { qa: {
        q: "Why is the Observation Fee the same even if I attend fewer classes, or none?",
        a: "ALB batches are limited to 7–8 students. From your Batch Start Date, your seat is held for you and cannot be offered to anyone else, a trainer is assigned to your batch, and your onboarding and materials are ready. These costs are the same whether you attend every class in the Observation Window, one class, or none. That is why the Observation Fee is a fixed amount for holding your seat, not a charge per class, and it is not reduced or negotiated based on attendance. If you would like a refund without the Observation Fee, please cancel before your Batch Start Date (see 5.5).",
      }},
      { h: "5.4 How and when to request a refund" },
      `Email ${REFUND_EMAIL} from your registered email address with the subject line: “Refund Request – [Full Name] – [Programme Name]”. Include your registered phone number, and your bank account details if you paid by bank transfer.`,
      { bullets: [
        "Your request must reach us by 11:59 PM IST on the day after your Observation Window ends.",
        "A request sent on WhatsApp to ALB's official number within this deadline will be treated as on time, provided the email request follows within 48 hours.",
        "Requests received after the deadline are handled under 5.7 and 5.8, not as Observation Window refunds.",
      ]},
      { h: "5.5 Cancellation before the batch starts" },
      `If you cancel before your Batch Start Date, we will refund the full amount paid minus a processing fee of ₹1,000. Alternatively, you may move to a later batch at no cost. You need to inform us 2 days prior if you change your mind by mailing us at ${REFUND_EMAIL}.`,
      { h: "5.6 Instalments and pending payments" },
      { bullets: [
        "Refunds are calculated only on amounts actually received by ALB.",
        "A valid refund request within the Observation Window cancels all remaining instalments.",
        "After the Observation Window, instalments are payable on the agreed dates. Access may be paused for overdue payments (see 4.5). Instalments already paid are not refunded on account of non-payment of later instalments.",
      ]},
      { h: "5.7 Options after the Observation Window" },
      "Refunds for a change of mind are not available after the Observation Window. Instead, you may choose one of the following:",
      { bullets: [
        ["Pause", "pause your programme once, for up to 60 days, and resume in a later batch, as set out in Section 3.8."],
        ["Batch transfer", "move to another batch or timing, subject to seat availability. Your first batch change is free; further changes are charged as set out in Section 3.7."],
        ["Seat transfer", "transfer your remaining enrolment to a family member or friend, with ALB's written approval (see 3.4)."],
        ["Credit", "convert your unused fees into ALB credit, valid for 12 months and usable for any ALB programme."],
      ]},
      "In cases of a medical emergency or a change in visa or immigration plans, supported by documents, ALB may at its discretion allow a longer pause or extended credit.",
      { h: "5.8 Level-based exit" },
      "If you leave a multi-level programme after the Observation Window, ALB will refund fees for levels not yet started. Levels started or completed are charged at ALB's current website price for that individual level, and any package or upfront-payment discount no longer applies. The refund is the amount paid minus these charges. If the charges equal or exceed the amount paid, no refund is due. The level in progress at the time of the request counts as started. The level-based exit does not apply to French Communication Lab.",
      { h: "5.9 When ALB is responsible" },
      "You will receive a refund without deduction of the Observation Fee if:",
      { bullets: [
        "Your batch does not start within 14 days of the start date confirmed to you, and you do not accept the revised date — full refund of the amount paid.",
        "ALB cancels your programme or level — refund of fees for all classes not delivered.",
        "ALB permanently changes your batch timing or delivery format and no alternative batch is suitable for you — refund of fees for all classes not delivered.",
      ]},
      "A single rescheduled class, or a change of trainer to one of equivalent qualification, does not constitute grounds for a refund.",
      { h: "5.10 Refund processing" },
      { bullets: [
        "ALB will confirm receipt of your request within 2 working days and complete the refund within 10 working days of a valid request.",
        "Refunds are made to the original payment method or to the payer's bank account, and are paid to the person who made the payment (for Junior learners, the parent or legal guardian).",
        "ALB will issue a credit note against the relevant tax invoice for the refunded amount.",
      ]},
      { h: "5.11 International payments" },
      "Refunds are calculated in INR on the amount received by ALB. Any currency conversion, transfer, or intermediary charges (including those of banks and remittance services) are borne by the student.",
      { h: "5.12 Discounts, free inclusions and repeat enrolments" },
      { bullets: [
        "Refunds are based on the amount actually paid after any discount or scholarship.",
        "The +Beyond Module, free demo classes, course materials and bonus sessions have no cash value and are not refunded separately.",
        "An Observation Window refund is available once per student per language.",
        "A free demo or trial class is separate from your programme and does not count toward the Observation Window.",
      ]},
      { h: "5.13 Payment errors and chargebacks" },
      { bullets: [
        "Duplicate or excess payments are refunded in full within 7 working days of being confirmed.",
        "If you raise a chargeback or payment dispute while a refund request is open, or instead of following this policy, ALB may suspend programme access until the matter is resolved. Any amount recovered through a chargeback will be deducted from any refund due.",
      ]},
      { h: "5.14 Circumstances not eligible for refund" },
      { bullets: [
        "Requests received after the deadline in 5.4 (the options in 5.7 and 5.8 still apply)",
        "Removal from a programme for misconduct after a formal warning (see 6.3)",
        "Missed classes or low attendance after the Observation Window",
        "French Communication Lab sessions after its Observation Window, however many sessions have been completed or remain",
        "Third-party examination fees or results (DELF, Goethe, IELTS, TEF, TCF, etc.), which are entirely independent of ALB",
        "Visa, admission, or employment outcomes (see 10.1)",
      ]},
      { h: "5.15 After a refund" },
      "Once a refund is processed, access to the LMS, session recordings and course materials ends, and no certificate is issued. All course materials remain ALB's intellectual property (see Section 08). The version of this policy published on your Enrolment Date applies to your enrolment.",
      { h: "5.16 Consistent application" },
      "This policy is applied in the same way to every student. Refund decisions are made only on the terms set out in this Section 5. ALB does not make exceptions in response to repeated requests, public reviews, or threats of complaints or legal action. ALB maintains records of enrolment, payments, attendance and communication, and uses them to assess every request.",
    ],
  },
  {
    id: "conduct", num: "06", title: "Programme Conduct and Participation", short: "Conduct and Participation",
    body: [
      "6.1 Students are expected to participate respectfully in all live sessions, group activities, and any communication with instructors or peers.",
      "6.2 ALB operates a zero-tolerance policy toward any form of harassment, discrimination, abusive language, or disruptive behaviour directed at instructors, staff, or fellow students, whether in live sessions, group chats, or any other ALB-associated platform.",
      "6.3 ALB reserves the right to remove a student from a programme without refund if, after a formal warning, the student continues to engage in behaviour that disrupts the learning environment or violates this code of conduct.",
      "6.4 Students are expected to attend sessions on time. While ALB understands that life happens, habitual tardiness or absence without notice affects both the student's progress and the batch experience.",
      "6.5 Students, and parents or guardians acting for them, are expected to communicate respectfully with ALB staff and trainers at all times, including during refund requests or disputes. If communication becomes abusive, threatening or harassing, ALB may end the call or chat and continue the matter in writing by email only.",
    ],
  },
  {
    id: "attendance", num: "07", title: "Attendance and Rescheduling", short: "Attendance and Rescheduling",
    body: [
      "7.1 ALB schedules sessions in advance and shares the calendar with students at the start of each programme. Students are expected to note and plan around the session schedule.",
      "7.2 If a student is unable to attend a scheduled session, they must notify ALB in advance where possible. Missed sessions are not automatically compensated with additional one-on-one sessions unless explicitly offered by the instructor.",
      "7.3 ALB will make reasonable efforts to reschedule sessions in the event of an instructor absence or technical failure on ALB's part. Sessions rescheduled by ALB within the Observation Window extend that window, as set out in Section 5.2.",
      "7.4 In the event of an unavoidable class cancellation by ALB (national holiday, technical outage, or instructor emergency), the session will be rescheduled at the earliest mutually convenient time. No refund is applicable solely on account of a single rescheduled session (see Section 5.9).",
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
      "10.2 Language learning outcomes depend on individual effort, consistency, and engagement. ALB provides the instruction, environment, and tools; outcomes are co-created with the student.",
      "10.3 ALB shall not be held liable for any indirect, consequential, or special damages arising from participation in, or withdrawal from, any programme, beyond the refund provisions stated in Section 5.",
      "10.4 ALB is not responsible for technical failures arising from the student's internet connection, device, or third-party platforms beyond ALB's control.",
      `10.5 ALB is not responsible for the actions, statements or conduct of any student towards another student, whether during a live session, in group chats, in private messages, or on any platform outside ALB's control. Each student is personally responsible for their own conduct. Students should report any misconduct to ALB in writing at ${REFUND_EMAIL}, and ALB will take reasonable action under Section 6, which may include a warning or removal of the student from the programme. Where required, ALB will cooperate with the relevant authorities.`,
    ],
  },
  {
    id: "disputes", num: "11", title: "Dispute Resolution", short: "Dispute Resolution",
    body: [
      "11.1 In the event of a dispute, both parties agree to first attempt to resolve the matter through direct communication in good faith.",
      `11.2 Step 1 — Written complaint: Write to ${REFUND_EMAIL} (for refunds). ALB will respond within 5 working days with its decision and the reasons for it.`,
      `11.3 Step 2 — Founder review: If you are not satisfied with the response, you may request a review by ALB's founders by writing to ${REFUND_EMAIL} within 15 days. ALB will share a final written decision within 10 working days.`,
      "11.4 Step 3 — Mediation or arbitration: If a resolution cannot be reached within 30 days of the dispute being formally raised in writing, either party may refer the matter to mediation or arbitration under applicable Indian law. Nothing in these Terms limits any right a student may have under the Consumer Protection Act, 2019.",
      "11.5 Records: In any complaint or dispute, ALB will rely on its records, including payment receipts, tax invoices, attendance logs, session recordings, and written communication on email and WhatsApp.",
      "11.6 Reviews and public feedback: ALB welcomes honest reviews and feedback on any platform. Reviews, whether positive or negative, do not affect refund decisions. Where a review contains false statements of fact, abusive language, or personal information about ALB's trainers or staff, ALB may report it to the platform concerned and may respond publicly with factual information, without disclosing any personal details of the student. ALB reserves all its rights under applicable law in respect of statements that are false and damaging to its reputation.",
    ],
  },
  {
    id: "law", num: "12", title: "Governing Law", short: "Governing Law",
    body: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of India. Subject to any right a student may have to approach a consumer commission under the Consumer Protection Act, 2019, any disputes arising under these Terms shall be subject to the jurisdiction of the courts located in Noida, Uttar Pradesh, India.",
    ],
  },
  {
    id: "amendments", num: "13", title: "Amendments", short: "Amendments",
    body: [
      "ALB reserves the right to update or modify these Terms and Conditions at any time. Students will be notified of material changes via email or a notice on the ALB website. Continued participation following notification of changes constitutes acceptance of the revised Terms. Changes to the Refund and Cancellation Policy apply only to enrolments made after the change.",
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
        { t: "Phone / WhatsApp", d: PHONE },
        { t: "Address", d: ADDRESS },
      ]},
    ],
  },
];

function ItemView({ item }: { item: Item }) {
  if (typeof item === "string") return <p className="text-body leading-relaxed">{item}</p>;
  if ("h" in item) return <h3 className="text-lg font-black text-ink mt-6">{item.h}</h3>;
  if ("bullets" in item)
    return (
      <ul className="space-y-2">
        {item.bullets.map((b) => (
          <li key={typeof b === "string" ? b : b[0]} className="flex items-start gap-2.5 text-body leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-royal-400 flex-shrink-0" />
            {typeof b === "string" ? b : <span><strong className="text-ink">{b[0]}:</strong> {b[1]}</span>}
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
  if ("qa" in item)
    return (
      <div className="card rounded-2xl p-5">
        <h4 className="font-black text-ink text-sm">{item.qa.q}</h4>
        <p className="text-muted text-sm mt-2 leading-relaxed">{item.qa.a}</p>
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
            <p className="mt-3 text-muted">Last updated: October 2026</p>
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
                  enrolling in any ALB programme, in particular{" "}
                  <a href="#enrolment" className="font-semibold text-royal-700 hover:underline">Section 3.6 to 3.8</a> (Track
                  Changes, Batch Changes, Pausing and Resuming) and{" "}
                  <a href="#refund" className="font-semibold text-royal-700 hover:underline">Section 5</a> (Refund and
                  Cancellation Policy). By enrolling or making a payment, you confirm that you have read, understood, and agree
                  to be bound by these terms.
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
