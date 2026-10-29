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
  | { steps: string[] }
  | { defs: { t: string; d: string }[] }
  | { table: { head: [string, string]; rows: [string, string][] } }
  | { qa: { q: string; a: string } };

interface Section { id: string; num: string; title: string; short: string; body: Item[]; }

const SECTIONS: Section[] = [
  {
    id: "agreement", num: "01", title: "Agreement", short: "Agreement",
    body: [
      "By enrolling in any programme offered by Academy of Languages and Beyond (referred to throughout as “ALB,” “we,” “us,” or “our”), you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you are enrolling on behalf of a minor, you as the parent or legal guardian accept these Terms on their behalf and take full responsibility for their participation.",
      "These Terms apply to all students, learners, and users who access ALB's language programmes, soft skills modules, trial classes, or any other services offered by Academy of Languages and Beyond, whether accessed through our website, by direct enrolment, or through any other channel. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any content on the website through which the service is provided, without express written permission from us.",
      "Official communication from ALB will be sent via email, phone, or the student portal. It is the student's responsibility to regularly check these platforms for updates, announcements, assignments, and class-related information. Failure to stay informed does not exempt the student from any responsibility or requirement.",
      "Any new features or tools which are added to the current Website / Institution shall also be subject to these Terms and Conditions. You can review the most current version of the Terms and Conditions at any time on this page. We reserve the right to update, change or replace any part of these Terms and Conditions by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes. Changes to the Refund and Cancellation Policy apply only to enrolments made after the change; the version published on your enrolment date applies to your enrolment.",
      "ALB welcomes honest reviews and feedback on any platform. Reviews, positive or negative, do not affect refund decisions, and refund decisions are made only on the terms of this policy, not in response to repeated requests, public reviews or threats. Where a review contains false statements of fact, abusive language, or personal information about ALB's trainers or staff, ALB may report it to the platform, respond publicly with facts (without disclosing the student's personal details), and reserves all its rights under law in respect of statements that are false and damaging.",
      "All course payments must be made directly to official bank accounts or authorized representatives of ALB. The Institution will not be held liable for any payment made to an unauthorized person or entity falsely claiming to represent the Institution. Students are advised to verify payment details through official communication channels before making any transaction. No refunds or services will be provided in cases of such unauthorized payments.",
      "Please do not proceed if you disagree with any part of the Terms and Conditions.",
    ],
  },
  {
    id: "privacy", num: "02", title: "Privacy and Personal Data", short: "Privacy and Personal Data",
    body: [
      "ALB collects and processes personal data in accordance with its Privacy Policy. By enrolling, students consent to ALB using their contact details for programme-related communications, updates, and, with consent, promotional purposes. ALB is committed to protecting the privacy and personal data of its students. Any personal information shared with the Institution during the enrolment or course duration will be used solely for educational and administrative purposes. This information will not be disclosed to third parties without the student's consent, unless required by law. The Institution adheres to applicable data protection laws and maintains confidentiality of all student records.",
      "ALB records live sessions for quality assurance, trainer evaluation, and to share recordings with enrolled students of the same batch for catch-up. By joining a live class, you consent to being recorded. Recordings are not shared publicly or outside your batch without consent. You must not record live sessions using any device or screen-recording tool without ALB's written consent.",
      "Any discount or concession offered to you is personal to you and non-transferable. Please keep it confidential. ALB's fees for other learners are not affected by any discount you received, and ALB may decline future offers to a learner who misuses or shares one.",
      "All students are required to maintain strict confidentiality with regard to course materials, class recordings, login credentials, and any proprietary information shared during the course. Unauthorized sharing, duplication, or distribution of such materials or access links will result in disciplinary action, including suspension or termination without refund. The privacy of other students and instructors must also be respected, and personal data should not be shared without consent. Breach of this clause may also lead to legal consequences.",
      "Students are strictly prohibited from approaching, soliciting, or making direct payment offers to any instructor associated with ALB for private tutoring or personal classes outside of the Institution during your enrolment and for 12 months after it ends. Any violation of this policy may lead to immediate termination of enrolment without refund. The Institution also reserves the right to pursue legal action or claim damages in case of breach.",
    ],
  },
  {
    id: "enrolment", num: "03", title: "Enrolment and Admission", short: "Enrolment and Admission",
    body: [
      "Enrolment in any ALB programme is confirmed on receipt of full payment, or of the first booking payment where an instalment plan has been agreed in writing by ALB.",
      "ALB reserves the right to decline or cancel any enrolment at its discretion, including where a programme is full, where the student does not meet entry requirements, or where ALB determines that the programme may not be suitable. In such cases, a full refund of fees paid will be issued.",
      "Students are responsible for ensuring they meet any entry-level requirements communicated at the time of enrolment. ALB may conduct a brief assessment to confirm suitability for a level. If a student is placed in the wrong level, ALB will move them to the appropriate level at no cost. Enrolment in an inappropriate level does not in itself constitute grounds for a refund beyond the Refund and Cancellation Policy below.",
      "Enrolment is personal. In exceptional cases, a student may transfer their seat to a family member or friend, only with prior written consent from ALB.",
      { h: "Guidelines for Track Changes" },
      "Each track runs at a different pace; for example, the Sprint track covers the curriculum in approximately 3.5 months and is significantly faster than the Immigration track. Students are advised to choose their track carefully, using the Observation Window to assess whether the pace suits them. A student may request to change their track after the programme has begun, subject to the following:",
      { bullets: [
        ["Moving to a lower-priced track (for example, from Sprint to Immigration)", "No additional fee is charged. The difference in fees between the two tracks is not refunded, since the batch cost and all other operational costs are already committed at the time of enrolment and do not change when a learner later chooses a different track."],
        ["Moving to a higher-priced track (for example, from Immigration to Sprint)", "You must pay the balance amount, as determined by ALB at the time of the change, based on the prevailing fees and your progress in the programme. The change takes effect only once the balance amount is paid."],
        "All track changes are subject to the availability of a suitable batch at your current level, and are confirmed only in writing by ALB.",
        ["Please note", "A track change is not a cancellation, and does not make you eligible for a refund."],
      ]},
      "If you change track during the Observation Window, the Observation Window and fixed deduction of your original track apply to any refund request.",
      { h: "Batch Changes" },
      { bullets: [
        "A move from Sprint to Immigration counts as your one free batch change.",
        "Any further batch change is charged and will be decided by the management. It will be prior informed to the students.",
        "Classes missed for personal reasons are covered by session recordings. Students who miss classes are expected to catch up through the recordings; missed classes are not, by themselves, grounds for a free batch change.",
      ]},
      { h: "Pausing and Resuming" },
      `You may pause your programme/track once per enrolment, for up to 60 days, by informing ALB in writing at ${REFUND_EMAIL} before the pause begins.`,
      "In exceptional cases, such as a medical emergency or a change in visa or relocation plans, supported by documents, ALB may extend the pause at its discretion, up to a maximum of 3 months in total.",
      "During a pause, your seat in your original batch is not held. On resuming, ALB will place you in the next available batch at the same level and point in the curriculum where you paused, at no extra cost.",
      "If you wish to resume from an earlier level or point than where you paused (for example, a student who paused after completing A2 and wishes to restart from the middle of A2 instead of starting B1), ALB will accommodate this, but you will be required to pay the difference for the additional portion, as determined by ALB at the time based on the prevailing fees.",
      "If you do not resume within the pause period, ALB may close the enrolment. In that case, fees paid are not refundable.",
      "A pause does not extend the Observation Window or make you eligible for a refund.",
    ],
  },
  {
    id: "payment", num: "04", title: "Payment Terms", short: "Payment Terms",
    body: [
      "All fees are quoted and payable in Indian Rupees (INR) or Canadian Dollars (CAD) unless otherwise stated.",
      "Full payment is required at the time of enrolment unless an instalment plan has been agreed in writing.",
      "Fees are inclusive of all course materials, the +Beyond soft skills module, and any assessments included in the programme, unless otherwise specified. Fees are inclusive of GST where applicable, and a tax invoice is issued for every payment.",
      "ALB does not charge any hidden fees. Any additional costs, such as official examination registration fees for third-party bodies (DELF, Goethe-Institut, IELTS, TEF, TCF, etc.), are entirely separate and are the responsibility of the student.",
      "In the event of a payment failure, reversal, or overdue instalment, ALB reserves the right to suspend or withdraw access to the programme until payment is resolved.",
    ],
  },
  {
    id: "conduct", num: "05", title: "Programme Conduct and Participation", short: "Conduct and Participation",
    body: [
      "ALB reserves the right to modify, merge, split, or reschedule batches, start dates, or class timings based on academic, administrative, or operational needs. You are required to accept and comply with such changes. These adjustments do not qualify for any refund or fee adjustment, except as set out under ‘When ALB is responsible’.",
      "We have created proper community channels for you to increase your participation and have more interactions with the trainers. You are required to respect and build rapport with your batch learners and respect their time too. You can always use the community channel to post your queries in case our trainers are unable to answer them during live classes.",
      "Punctuality is essential for effective learning. Students are encouraged to join classes on time, as late arrivals may miss important portions of the lesson. Instructors are not required to repeat previously covered material for students who join late, and no special accommodations will be made in such cases.",
      "In order to receive a certificate of completion, students must meet the course requirements as defined by the Institution. This includes maintaining a minimum of 75% attendance and completing all assigned coursework and assessments. Certification is subject to the Institution's evaluation and will only be issued if the student satisfactorily completes all academic components of the course.",
      "All course materials, including but not limited to videos, PDFs, presentations, assignments, and study resources provided by ALB, are strictly for the personal use of the enrolled student. Sharing, distributing, reproducing, or disclosing any course material to individuals outside the enrolled batch is strictly prohibited. Students are expected to utilize these resources responsibly and manage their study schedule in alignment with the course pace.",
      "For online classes, you are expected to create a quiet, organized environment and follow appropriate online etiquette. As our program is based on live sessions with the trainers, it is mandatory to keep your cameras on during the live classes. Failure to comply may result in removal from that session. Repeated non-compliance after a written warning may result in suspension or termination of enrolment without refund. ALB also reserves the right to remove, suspend or terminate the enrolment of the learners, if the learner is found using inappropriate language, disruptive conduct, harassment, or disrespect toward instructors, staff, or fellow learners.",
      `ALB is not responsible for the actions, statements or conduct of any student towards another student, whether during a live session, in group chats, in private messages, or on any platform outside ALB's control. Each student is personally responsible for their own conduct. Please report any misconduct in writing to ${REFUND_EMAIL}; ALB will take reasonable action, which may include a warning or removal of the student from the programme, and will cooperate with the relevant authorities where required.`,
      "It is your responsibility to ensure that your devices (laptops, tablets, etc.) are fully charged or connected to a stable power source during online classes. ALB will not be held liable for disruptions in learning caused by power failures, low battery, internet connectivity or other technical issues originating from the student's end.",
      "Completing the course does not constitute a guarantee of fluency, language mastery, or exam success. Language acquisition depends heavily on the student's personal commitment, effort, and practice beyond the classroom. The Institution provides structured guidance and resources, but outcomes are ultimately based on individual performance.",
      "The Institution provides training and resources, but outcomes depend on individual performance and external factors beyond its control. Responsibility for achieving positive results, such as passing language proficiency exams, improving communication skills, or advancing professionally, lies entirely with the student. Success in these areas depends on the student's personal effort, consistency, practice, and dedication. The Institution serves as a facilitator, but cannot be held responsible for outcomes influenced by individual or external variables, including examination scores, visa approvals, university admissions or employment offers.",
    ],
  },
  {
    id: "vision", num: "06", title: "Our Vision", short: "Our Vision",
    body: [
      "We believe that committing yourself to learning a language is adding valuable time to your life. And time is money! Therefore, Academy of Languages and Beyond offers an Observation Window. If our programs are not the right fit for you, you are eligible for a refund within the observation window period by strictly adhering to the provided guidelines.",
    ],
  },
  {
    id: "observation-window", num: "07", title: "Observation Window", short: "Observation Window",
    body: [
      "The window starts on the first scheduled class of the batch you are placed in. For a student who joins after the batch has started, it starts on their first scheduled class. A batch or track change does not restart the window.",
      "For our Sprint Track, the observation period is for 3 class days/6 hours and for Immigration, Academic, Career, Junior and single-level tracks, the observation period is for 4 class days/4 hours. For the French Communication Lab, the Observation Window is the first 3 class days, which must fall within 7 calendar days of the first booked session. FCL classes run Monday to Friday only, so the Observation Window is the same 3 days whether you take 1-hour or 2-hour sessions.",
      "A pause cannot be taken during the Observation Window.",
      "Please note: If ALB reschedules a class within the Observation Window, the window is extended by the same number of days.",
      "We want to ensure that all the students are able to experience high-quality learning in our programs. You are eligible to claim a refund only when you fulfil all the conditions below:",
      { steps: [
        "You must attend all the classes in the Observation Window. A class counts as attended only if you join within 15 minutes of the start and stay for at least 80% of the session, as recorded in ALB's attendance log.",
        "You must keep your camera on during all live classes, and complete and submit all assignments given during the Observation Window.",
        `You must share your concerns with us in writing, through the feedback form or at ${REFUND_EMAIL}, before the Observation Window ends, so we have a chance to resolve them.`,
      ]},
      "A refund is not the first resolution. If you face any difficulty with the pace, timing or trainer, please tell us first so we can try to fix it, for example through trainer support, a batch change or a track change. If the issue is not resolved within your Observation Window, you may request a refund as set out below.",
      "We believe that successful learning is a two-way street and therefore your feedback is equally important for us in enhancing our programs. Our team will be reviewing all the feedback of the students to ensure a smoother learning journey.",
      "Please note: While all feedback is reviewed and considered, the Institution reserves the right to implement changes at its sole discretion. Submission of feedback does not guarantee modification of course structure or policies.",
      "No refund will be provided if you do not meet all of the conditions above.",
    ],
  },
  {
    id: "refund", num: "08", title: "Refund and Cancellation Policy", short: "Refund and Cancellation",
    body: [
      "It takes a collective effort to bring the classes live. All our team members are working very hard towards ensuring a successful start of the batches. As much as we value your time and hard-earned money, it is mandatory to inform the ALB Team via email if you wish to drop out of the program before the batch starts.",
      { table: {
        head: ["When you inform us by official communication channel", "Refund"],
        rows: [
          ["At least 72 hours before your first scheduled class", "Amount paid minus ₹1,500"],
          ["Less than 72 hours before your first scheduled class", "Amount paid minus the fixed deduction for your track (see “Refund amount after classes start” below)"],
        ],
      }},
      "If the amount paid is less than the applicable deduction, no refund is due and no further amount is owed.",
      "Please note: All times are in IST, based on when ALB receives your email.",
      `Cancellation must be sent by email to ${REFUND_EMAIL}. A WhatsApp message to ALB's official number counts as on time only if the email follows within 24 hours.`,
      `Once the batch starts, you must strictly follow the Observation Window guidelines. Even so, after experiencing all the classes under the Observation Window, if you feel that ALB is not the right place for you, you can request a refund via email at ${REFUND_EMAIL} from your registered email address with the subject line: “Refund Request – [Full Name] – [Programme Name]”. Refund requests must reach us by 11:59 PM IST on the day your Observation Window ends. Requests after this deadline are not eligible. We will acknowledge your request within 2 working days and process the refund within 10 working days of a valid request.`,
      { h: "Refund amount after classes start" },
      "Refund = total amount paid minus the fixed deduction for your track:",
      { bullets: [
        ["Sprint", "₹7,000"],
        ["Immigration, Academic, Career, Junior", "₹5,000"],
        ["French Communication Lab", "No refund"],
      ]},
      "If the amount paid is less than the fixed deduction, no refund is due and no further amount is owed. After the Observation Window, fees are non-refundable, except as set out under ‘When ALB is responsible’. You may instead pause, change batch or transfer your seat as set out above.",
      { qa: {
        q: "Why is the fixed deduction the same even if I attend fewer classes, or none?",
        a: "ALB batches are limited to 7–8 students. From your Batch Start Date, your seat is held for you and cannot be offered to anyone else, a trainer is assigned to your batch, and your onboarding and materials are ready. These costs are the same whether you attend every class in the Observation Window, one class, or none. That is why the fixed deduction is a fixed amount for holding your seat, not a charge per class, and it is not reduced or negotiated based on attendance. To pay a lower deduction, please cancel at least 72 hours before your first scheduled class.",
      }},
      { h: "Other refund terms" },
      "Refunds are calculated in INR on the amount received by ALB. Any currency conversion, transfer, or intermediary charges (including those of banks and remittance services) are borne by the student.",
      "Please note:",
      { bullets: [
        "After the Observation Window, no refund applies to French Communication Lab.",
        "The +Beyond Module, free demo classes, course materials and bonus sessions have no cash value and are not refunded separately.",
      ]},
      "A valid refund request within the Observation Window cancels all remaining instalments. Refunds are calculated only on amounts actually received. Refunds are made to the person who paid, through the original payment method or to the payer's bank account. Refunds are based on the amount actually paid after any discount.",
      "An Observation Window refund is available once per learner per language. No Observation Window refund applies after a seat transfer.",
      "Once a refund is processed, access to the LMS, recordings and materials ends. All materials remain ALB's intellectual property.",
      "If you raise a chargeback or payment dispute, ALB may suspend access until it is resolved. Any amount recovered through a chargeback is deducted from any refund due.",
      "Duplicate or excess payments are refunded in full within 7 working days of being confirmed.",
      "A student removed for misconduct (see Programme Conduct and Participation) is not eligible for an Observation Window refund. Serious offences may also attract legal consequences.",
      `If you must miss a class in the Observation Window for an unavoidable reason, inform us in writing at ${REFUND_EMAIL} before the class and watch its recording within 24 hours; that class will then count as attended. A class missed without prior written notice makes you ineligible for an Observation Window refund.`,
      { h: "When ALB is Responsible" },
      "You will receive a refund without any deduction if:",
      { bullets: [
        "Your batch does not start within 14 days of the start date confirmed to you, and you do not accept the revised date: full refund of the amount paid.",
        "ALB cancels your programme or level: refund of fees for all classes not delivered.",
        "ALB permanently changes your batch timing or delivery format and no alternative batch is suitable for you: refund of fees for all classes not delivered.",
        "ALB will refund fees for levels not yet started. Levels started or completed are charged at ALB's current website price for that individual level, and any package or upfront-payment discount no longer applies. The refund is the amount paid minus these charges. If the charges equal or exceed the amount paid, no refund is due. The level in progress at the time of the request counts as started. The level-based exit does not apply to French Communication Lab.",
      ]},
      "A single rescheduled class, or a change of trainer to one of equivalent qualification, does not constitute grounds for a refund.",
    ],
  },
  {
    id: "disputes", num: "09", title: "Dispute Resolution", short: "Dispute Resolution",
    body: [
      "In the event of a dispute, both parties agree to first attempt to resolve the matter through direct communication in good faith.",
      `Step 1, Written complaint: Write to ${REFUND_EMAIL} (for refunds and all other complaints). ALB will respond within 5 working days with its decision and the reasons for it.`,
      `Step 2, Founder review: If you are not satisfied with the response, you may request a review by ALB's founders by writing to ${REFUND_EMAIL} within 15 days. ALB will share a final written decision within 10 working days.`,
      "Step 3, Mediation or arbitration: If a resolution cannot be reached within 30 days of the dispute being formally raised in writing, either party may refer the matter to mediation or arbitration under applicable Indian law. Nothing in these Terms limits any right a student may have under the Consumer Protection Act, 2019.",
      "Records: In any complaint or dispute, ALB will rely on its records, including payment receipts, tax invoices, attendance logs, session recordings, and written communication on email and WhatsApp.",
    ],
  },
  {
    id: "law", num: "10", title: "Governing Law", short: "Governing Law",
    body: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of India. Subject to any right a student may have to approach a consumer commission under the Consumer Protection Act, 2019, any disputes arising under these Terms shall be subject to the jurisdiction of the courts located in Noida, Uttar Pradesh, India.",
    ],
  },
  {
    id: "contact", num: "11", title: "Contact", short: "Contact",
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

const NOTE = "Please note:";

function ItemView({ item }: { item: Item }) {
  if (typeof item === "string")
    return (
      <p className="text-body leading-relaxed">
        {item.startsWith(NOTE) ? (
          <>
            <strong className="text-ink">{NOTE}</strong>
            {item.slice(NOTE.length)}
          </>
        ) : (
          item
        )}
      </p>
    );
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
  if ("steps" in item)
    return (
      <ol className="space-y-2.5">
        {item.steps.map((s, i) => (
          <li key={s} className="flex items-start gap-3 text-body leading-relaxed">
            <span className="mt-0.5 w-6 h-6 rounded-lg bg-royal-50 text-royal-700 text-xs font-black flex items-center justify-center flex-shrink-0">{i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
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
  if ("table" in item)
    return (
      <div className="card rounded-2xl overflow-hidden">
        <div className="grid grid-cols-2 gap-4 px-5 py-3 bg-royal-50/60">
          {item.table.head.map((h) => (
            <span key={h} className="font-bold text-ink text-sm">{h}</span>
          ))}
        </div>
        {item.table.rows.map(([when, refund]) => (
          <div key={when} className="grid grid-cols-2 gap-4 px-5 py-3.5 border-t border-line">
            <span className="text-body text-sm leading-relaxed">{when}</span>
            <span className="text-body text-sm leading-relaxed">{refund}</span>
          </div>
        ))}
      </div>
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
