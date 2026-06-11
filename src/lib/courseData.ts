export interface CourseTrack { icon: string; name: string; color: string; pop: boolean; forText: string; exams: string[]; }
export interface CourseJourney { l: string; w: string; t: string; s: string; }
export interface CurriculumTopic { t: string; i: string[]; }
export interface CurriculumModule { label: string; title: string; badge: string; weeks: string; desc: string; topics: CurriculumTopic[]; assess: string; }
export interface CourseOutcome { i: string; t: string; s: string; }
export interface CourseUsp { i: string; t: string; b: string; }
export interface CompareRow { f: string; g: string; a: string; }
export interface CourseReview { name: string; role: string; co: string; track: string; b2b: boolean; init: string; text: string; }
export interface CourseFaq { q: string; a: string; }

export interface CourseData {
  lang: string;
  modalKey: string;
  accent: string;
  al: string;
  ew: string;
  h1a: string;
  h1b: string;
  hs: string;
  chips: string[];
  stats: { n: string; l: string }[];
  tracks: CourseTrack[];
  journey: CourseJourney[];
  curriculum: CurriculumModule[];
  outcomes: CourseOutcome[];
  usps: CourseUsp[];
  comparison: CompareRow[];
  reviews: CourseReview[];
  included: string[];
  examRole: string;
  faq: CourseFaq[];
  ctaH: string;
  ctaS: string;
}

const SOFT_SKILLS_MODULE: CurriculumModule = {
  label: "Module 5", title: "+Beyond — Global Confidence", badge: "Soft Skills · Free · All Tracks", weeks: "2 Weeks",
  desc: "The ALB Global Confidence Program — 6 live sessions on confidence, professional communication, personal branding, and interview skills.",
  topics: [
    { t: "Week 1: Personal Effectiveness", i: ["Self-awareness & confidence building", "Public speaking fundamentals", "Active listening & empathy"] },
    { t: "Week 2: Professional Readiness", i: ["Email etiquette & workplace communication", "Personal branding & interview skills", "Capstone simulation & feedback"] },
  ],
  assess: "Day 3 & Day 7 micro-presentations · Day 9 mock interview · Day 10 Capstone — ALB Soft Skills Certificate",
};

export const FRENCH: CourseData = {
  lang: "French", modalKey: "French Language",
  accent: "#2563EB", al: "#93C5FD",
  ew: "French · A1 to B2 · Four Tracks",
  h1a: "Learn French.", h1b: "Achieve What Matters.",
  hs: "A1 to B2 in 36 weeks. Four tracks — Immigration, Academic, Career, and Junior. One structured programme built for Indian learners with a clear goal.",
  chips: ["36 Weeks", "216 Hours", "Max 6 / Batch", "4 Tracks", "A1 to B2", "+Beyond Included"],
  stats: [{ n: "36", l: "Teaching Weeks" }, { n: "216", l: "Instruction Hours" }, { n: "6", l: "Max Per Batch" }, { n: "4", l: "Learning Tracks" }, { n: "9.5M", l: "Full Journey" }],
  tracks: [
    { icon: "🇨🇦", name: "Immigration Track", color: "#2563EB", pop: true, forText: "Canada PR applicants — Express Entry (FSW, CEC, FST), PNP, Quebec Skilled Worker Program, LMIA, and work permit candidates needing a recognised French score for IRCC.", exams: ["TEF Canada", "TCF Canada", "CLB 7+"] },
    { icon: "🎓", name: "Academic Track", color: "#7C3AED", pop: false, forText: "Students applying to French-medium universities in France, Belgium, Switzerland, or Quebec — needing DELF B2 or DALF C1 for university admission.", exams: ["DELF B2", "DALF C1"] },
    { icon: "💼", name: "Career Track", color: "#059669", pop: false, forText: "Working professionals in multilingual or international environments needing professional-grade French for workplace advancement and global career goals.", exams: ["DELF B1", "DELF B2"] },
    { icon: "⭐", name: "Junior Track", color: "#D97706", pop: false, forText: "School students (Class 6–12) building early French proficiency for academic advantage, DELF certifications, and future university or immigration goals.", exams: ["DELF A1", "DELF A2", "DELF B1"] },
  ],
  journey: [
    { l: "A1", w: "8 Weeks", t: "Survival French", s: "DELF A1 · Everyday basics" },
    { l: "A2", w: "8 Weeks", t: "Routine Communication", s: "DELF A2 · Daily transactions" },
    { l: "B1", w: "10 Weeks", t: "Independent", s: "DELF B1 · TEF/TCF foundation" },
    { l: "B2", w: "10 Weeks", t: "Fluent & Exam-Ready", s: "TEF/TCF Canada · DELF B2" },
    { l: "★", w: "2 Weeks", t: "+Beyond", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "Survival French", badge: "A1 · DELF A1", weeks: "8 Weeks", desc: "Start from zero. Build confidence to introduce yourself, fill forms, and navigate everyday situations across all four tracks.", topics: [
      { t: "Greetings & Introductions", i: ["Formal vs informal address", "Nationalities & professions", "Self-introduction for all contexts"] },
      { t: "Numbers, Dates & Time", i: ["Passport dates & scheduling", "Travel timetables", "Key number vocabulary"] },
      { t: "Family & Personal Life", i: ["Family details for official forms", "Physical descriptions", "Profile-building language"] },
      { t: "Daily Life, Food & Shopping", i: ["Daily routine in a new place", "Restaurant & grocery French", "Shopping & settlement context"] },
    ], assess: "Week 4 grammar check · Week 7 integrated test · Week 8 full mock + ALB Level 1 Certificate" },
    { label: "Module 2", title: "Routine Communication", badge: "A2 · DELF A2", weeks: "8 Weeks", desc: "Handle everyday transactions, travel, health situations, and simple formal correspondence — relevant to immigration, campus life, and professional settings.", topics: [
      { t: "Travel & Transport", i: ["Airport, border & relocation", "Transport booking vocabulary", "City navigation"] },
      { t: "Past Experiences", i: ["Passé composé (avoir & être)", "Narrating timelines & events", "History language"] },
      { t: "Health & Medical", i: ["Symptoms & doctor visits", "Emergency language", "Settlement health services"] },
      { t: "Written Communication", i: ["Formal vs informal emails", "Openings & closings", "Writing to institutions"] },
    ], assess: "Week 12 navigation test · Week 15 email & speaking test · Week 16 full mock + ALB Level 2 Certificate" },
    { label: "Module 3", title: "Independent Communication", badge: "B1 · DELF B1 · TEF/TCF Foundation", weeks: "10 Weeks", desc: "Express opinions, discuss work and education, and handle formal communication scenarios. Immigration exam prep begins. Academic writing introduced.", topics: [
      { t: "Work, Careers & Education", i: ["Occupation language & credentials", "Workplace vocabulary", "Academic system vocabulary"] },
      { t: "Society, Media & Opinions", i: ["News & current affairs", "Expressing arguments", "Community & social life"] },
      { t: "Official & Formal Language", i: ["Core PR, visa & document vocabulary", "Letters to authorities", "Embassy & institutional French"] },
      { t: "Quebec French & Canada", i: ["Québec vs standard French", "Canada-specific listening", "TEF/TCF task preparation"] },
    ], assess: "Week 20 media & opinion test · Week 24 formal writing & oral test · Week 26 full mock + ALB Level 3 Certificate" },
    { label: "Module 4", title: "Advanced Fluency & Exam Readiness", badge: "B2 · TEF/TCF Canada · DELF B2", weeks: "10 Weeks", desc: "Achieve fluent, professional communication. Master complex grammar, write persuasively, and prepare for high-stakes exams across all tracks.", topics: [
      { t: "Argumentation & Professional French", i: ["Debate & structured discussion", "Business French register", "Persuasive academic writing"] },
      { t: "Academic Writing & Media", i: ["Essay planning & thesis", "Complex text comprehension", "Media & cultural analysis"] },
      { t: "Advanced Grammar", i: ["Participial clauses & gerund", "Complex subjunctive", "Error correction & accuracy"] },
      { t: "Exam Intensive (TEF/TCF/DELF B2)", i: ["Full exam strategy & timing", "Track-specific preparation", "Oral + written simulations"] },
    ], assess: "Week 30 academic writing · Week 34 advanced speaking · Week 36 full mock + ALB Level 4 Certificate" },
    SOFT_SKILLS_MODULE,
  ],
  outcomes: [
    { i: "🗣️", t: "Communicate confidently in everyday French", s: "Shopping, healthcare, banking, and public services" },
    { i: "📄", t: "Complete visa applications and official forms in French", s: "Immigration files, official correspondence, government documents" },
    { i: "🎓", t: "Meet university admission requirements", s: "DELF B2 or DALF C1 for French-medium universities globally" },
    { i: "💼", t: "Communicate professionally in international French contexts", s: "Business French, presentations, client communication" },
    { i: "🍁", t: "Navigate Quebec French and Canadian life", s: "Accent, joual expressions, cultural context, and settlement language" },
    { i: "📝", t: "Achieve exam readiness across all four tracks", s: "TEF Canada, TCF Canada, DELF A1–B2, DALF C1 — target score ready" },
    { i: "⭐", t: "Build a strong CEFR-credentialled portfolio", s: "ALB certificate + international exam credential at every completed level" },
    { i: "🏆", t: "Speak, write, and think in French confidently", s: "Professional and personal readiness for French-speaking environments" },
  ],
  usps: [
    { i: "🎯", t: "Goal-Certified Track System", b: "Four outcome-specific tracks under one programme — Immigration, Academic, Career, and Junior. Your curriculum emphasis, case studies, and exam focus are tailored from day one." },
    { i: "📝", t: "Exam Prep Built In — Not Sold Separately", b: "TEF Canada, TCF Canada, DELF B2, DALF C1 — preparation is woven into the final levels of every track. No bolt-on fees." },
    { i: "🍁", t: "Quebec French Training", b: "Canada isn't Paris. You learn the Québécois accent, joual expressions, and cultural nuances that standard courses ignore." },
    { i: "👥", t: "Max 6 Per Batch — Always", b: "Speaking time, feedback, and instructor attention are never diluted. You are not a face in a row of thirty." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic French class", a: "Four outcome-specific tracks from day one" },
    { f: "Batch size", g: "20–40 students per class", a: "Max 6 per batch — by design" },
    { f: "Quebec French", g: "Parisian French only", a: "Québécois accent, joual & cultural context" },
    { f: "Exam preparation", g: "Sold as a separate add-on", a: "Built into the final levels — no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions) — free" },
    { f: "Certifications", g: "Course completion certificate only", a: "CEFR credential at every completed level" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy — built for Indian learners" },
  ],
  reviews: [
    { name: "Priya Sharma", role: "Software Engineer", co: "Express Entry Applicant", track: "Immigration Track", b2b: false, init: "PS", text: "The immigration-focused vocabulary made every class feel directly useful. I wasn't just learning French — I was learning the exact French I needed for my PR file. Cleared TEF Canada on my first attempt with CLB 8." },
    { name: "Rahul Mehra", role: "HR Manager", co: "Tech Mahindra", track: "Corporate Training", b2b: true, init: "RM", text: "We enrolled 5 employees ahead of their Montreal relocation. ALB's small batch size and structured curriculum meant everyone came back genuinely prepared — not just exam-ready. Monthly progress reports were a bonus." },
    { name: "Anika Reddy", role: "Student → ESCP Paris", co: "Academic Track", track: "Academic Track", b2b: false, init: "AR", text: "My goal was DELF B2 for my Masters application in Paris. The academic writing modules and mock exams were exactly what I needed. First attempt, B2 cleared. ESCP confirmed." },
    { name: "Sanjay Kumar", role: "Civil Engineer", co: "Quebec PR Applicant", track: "Immigration Track", b2b: false, init: "SK", text: "Most institutes teach you French. ALB taught me French for my actual life in Canada — forms, appointments, employer conversations. I walked into my IRCC appointment genuinely prepared." },
    { name: "Neha Patel", role: "Head of L&D", co: "GlobalServe India", track: "Corporate Partner", b2b: true, init: "NP", text: "ALB is now our preferred language partner for pre-relocation French training. The structured reporting, small batches, and genuine progress visibility make the ROI easy to justify internally." },
    { name: "Rohan Singh", role: "Class 11, International School Bangalore", co: "Junior Track", track: "Junior Track", b2b: false, init: "RS", text: "My French went from A1 to DELF B1 in 8 months. The classes are nothing like school French — it actually made sense and I actually speak it now." },
  ],
  included: ["Class notes for every session", "Weekly 4-skill assignments", "Pronunciation practice materials", "Guided speaking with instructor feedback", "Writing corrections throughout", "Mid-level formal assessments", "Full mock exams at each level", "ALB Certificate at every level (A1–B2)", "TEF Canada & TCF Canada exam guidance", "DELF / DALF exam guidance", "+Beyond Soft Skills (2 weeks, free)", "Progress tracking throughout"],
  examRole: "TEF / TCF & DELF Coach",
  faq: [
    { q: "Which track should I choose?", a: "It depends on your goal. Canada PR? → Immigration Track. University in France or Belgium? → Academic Track. International career? → Career Track. School student? → Junior Track. During your free trial class, an ALB advisor will map your goal to the right track." },
    { q: "Is the core curriculum the same across all tracks?", a: "Yes. The A1 to B2 programme structure, weekly hours, and CEFR progression are the same. What changes is the emphasis — vocabulary, case studies, mock exams, and outcome focus are tailored to your track from the beginning." },
    { q: "Can I switch tracks during the programme?", a: "Yes. If your goals change — for instance, you decide to apply to a French university after starting with an immigration focus — we can adjust your track emphasis. Speak to your instructor or advisor." },
    { q: "Do I need prior French knowledge to join?", a: "No. Complete beginners are welcome at A1 entry. If you have some French, a short placement assessment will place you at A2, B1, or B2 entry directly." },
    { q: "Are classes online or in person?", a: "Fully online, instructor-led, and live. You attend from anywhere in India or abroad — morning, evening, and weekend batches available." },
  ],
  ctaH: "Your French Journey Starts Here.",
  ctaS: "Choose your track. Book a free trial class. Speak to an advisor. Zero commitment.",
};

export const ENGLISH: CourseData = {
  lang: "English", modalKey: "IELTS Coaching",
  accent: "#059669", al: "#6EE7B7",
  ew: "English Speaking · Foundation to Advanced · Four Tracks",
  h1a: "Speak English.", h1b: "Change Your Story.",
  hs: "Foundation to Advanced in 22 weeks. Four tracks — Immigration, Academic, Career, and Junior. Built for Indian professionals and students who are ready to go further.",
  chips: ["22 Weeks", "132 Hours", "Max 6 / Batch", "4 Tracks", "IELTS Band 7+", "+Beyond Included"],
  stats: [{ n: "22", l: "Teaching Weeks" }, { n: "132", l: "Instruction Hours" }, { n: "6", l: "Max Per Batch" }, { n: "4", l: "Learning Tracks" }, { n: "7.0+", l: "IELTS Band Target" }],
  tracks: [
    { icon: "✈️", name: "Immigration Track", color: "#059669", pop: true, forText: "Canada, UK, and Australia PR applicants and work visa holders needing IELTS, PTE, or TOEFL scores for Express Entry, skilled worker visas, and settlement.", exams: ["IELTS General", "PTE", "TOEFL"] },
    { icon: "🎓", name: "Academic Track", color: "#7C3AED", pop: false, forText: "Students applying to international universities — UK, USA, Canada, Australia — needing IELTS Academic 6.5+ or equivalent PTE/TOEFL scores for admission.", exams: ["IELTS Academic", "PTE Academic", "TOEFL"] },
    { icon: "💼", name: "Career Track", color: "#2563EB", pop: false, forText: "Working professionals at MNCs, BPOs, and global companies needing professional-grade English for client communication, presentations, and leadership roles.", exams: ["IELTS General", "PTE"] },
    { icon: "⭐", name: "Junior Track", color: "#D97706", pop: false, forText: "School students building strong English foundations for academic excellence, competitive exams, and early preparation for university or immigration goals.", exams: ["IELTS", "School prep", "Competitive exams"] },
  ],
  journey: [
    { l: "L1", w: "6 Weeks", t: "Foundation", s: "Pronunciation · Fluency base" },
    { l: "L2", w: "8 Weeks", t: "Intermediate", s: "Professional English · Writing" },
    { l: "L3", w: "8 Weeks", t: "Advanced", s: "Fluency · Executive presence" },
    { l: "IELTS", w: "6 Weeks", t: "IELTS Module", s: "All 4 bands · Band 7.0+ target" },
    { l: "★", w: "2 Weeks", t: "+Beyond", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "Foundation", badge: "B1 Equivalent", weeks: "6 Weeks", desc: "Build your spoken English foundation. Address pronunciation, fluency, and confidence — tackling the specific challenges Indian learners face, head-on.", topics: [
      { t: "Pronunciation & Phonetics", i: ["IPA basics & Indian-English corrections", "Retroflex sounds & vowel reduction", "Stress, intonation & rhythm"] },
      { t: "Grammar for Fluency", i: ["Tense review through speech", "Subject-verb agreement in conversation", "Speaking naturally, not robotically"] },
      { t: "Listening & Comprehension", i: ["British, American & Australian accents", "Gist vs detail listening", "Note-taking strategies"] },
      { t: "Confidence & Accent", i: ["Managing speaking anxiety", "Neutral Indian English approach", "Body language & vocal presence"] },
    ], assess: "Week 3: fluency check · Week 6: full assessment + ALB Foundation Certificate" },
    { label: "Module 2", title: "Intermediate — Professional English", badge: "B2 Equivalent", weeks: "8 Weeks", desc: "Communicate complex ideas clearly in professional and formal contexts. Presentations, emails, group discussions, and business writing.", topics: [
      { t: "Complex Communication", i: ["Justifying opinions & comparing options", "Hedging language & diplomacy", "Storytelling & narrative techniques"] },
      { t: "Professional Writing", i: ["Email structure & subject lines", "Formal register & CC etiquette", "Request & complaint emails"] },
      { t: "Presentations & Public Speaking", i: ["Structuring a 3-minute talk", "Transitions & handling Q&A", "Slide design principles"] },
      { t: "Group Discussions", i: ["Turn-taking & polite interrupting", "Agreeing diplomatically", "Leading a discussion effectively"] },
    ], assess: "Week 9: communication test · Week 14: written & speaking assessment + ALB Intermediate Certificate" },
    { label: "Module 3", title: "Advanced — Fluency & Presence", badge: "C1 Equivalent", weeks: "8 Weeks", desc: "Achieve spontaneous, precise communication across all professional scenarios. IELTS 7.0+ readiness. Executive presence.", topics: [
      { t: "Debate & Critical Thinking", i: ["Structuring arguments & rebuttal", "Handling pressure questions", "Expressing opinion with evidence"] },
      { t: "Negotiation & Persuasion", i: ["Negotiation vocabulary & tactics", "Soft persuasion & closing language", "Cross-cultural communication norms"] },
      { t: "Academic & Business Writing", i: ["Essay & thesis development", "Executive presentations", "APA/MLA referencing"] },
      { t: "Interview & Career Skills", i: ["STAR method for competency answers", "Salary negotiation language", "Confidence under pressure"] },
    ], assess: "Week 18: advanced speaking · Week 22: capstone + ALB Advanced Certificate" },
    { label: "Module 4", title: "IELTS Exam Preparation", badge: "IELTS Band 7.0+ Target", weeks: "6 Weeks", desc: "A dedicated 6-week IELTS module covering all four skill bands — with full mocks, band prediction, and a personalised score improvement plan.", topics: [
      { t: "Reading & Listening", i: ["Skimming, scanning & TRUE/FALSE strategies", "Matching headings & note completion", "4-section listening & prediction"] },
      { t: "Writing Task 1", i: ["Academic: data & graph description", "General: formal letter writing", "Structure, vocabulary & coherence"] },
      { t: "Writing Task 2", i: ["Opinion, discussion & problem-solution essays", "Coherence, lexical resource & accuracy", "Band 6.5 → 7.5+ strategies"] },
      { t: "Speaking Parts 1, 2 & 3", i: ["Part 2 cue card (12 key topics)", "Part 3 abstract discussion fluency", "Self-correction & pronunciation scoring"] },
    ], assess: "Week 24: full mock · Band prediction · Personalised score improvement plan" },
    SOFT_SKILLS_MODULE,
  ],
  outcomes: [
    { i: "🎤", t: "Speak English with confidence in any setting", s: "Meetings, interviews, client calls, and presentations" },
    { i: "📊", t: "Achieve your target IELTS / PTE / TOEFL score", s: "Band 7.0+ pathway with structured exam preparation" },
    { i: "📧", t: "Write professional emails and documents", s: "Clear, appropriately formal, and error-free" },
    { i: "💼", t: "Deliver presentations and lead meetings", s: "Executive presence, structured delivery, confident Q&A" },
    { i: "🎓", t: "Meet international university admission requirements", s: "IELTS Academic 6.5–7.5+ for UK, USA, Canada, Australia" },
    { i: "🌍", t: "Communicate across cultural contexts", s: "Global professional norms and cross-cultural awareness" },
    { i: "✈️", t: "Strengthen your immigration application", s: "IELTS General / PTE scores for Express Entry and skilled worker visas" },
    { i: "🏆", t: "Command authority in high-stakes situations", s: "Negotiations, board rooms, client pitches, and interviews" },
  ],
  usps: [
    { i: "🇮🇳", t: "Built for Indian Learners", b: "We address what actually holds Indian speakers back: retroflex sounds, tense hesitation, mother-tongue influence, and register confusion. Standard courses pretend these don't exist. We don't." },
    { i: "📝", t: "IELTS Prep Woven In — No Extra Fee", b: "A dedicated 6-week IELTS module covers all four skill bands — with full mocks, band prediction, and a personalised score improvement plan. No bolt-on fees." },
    { i: "💼", t: "Real Professional Scenarios", b: "Job interviews, client calls, emails, presentations, negotiations — every scenario is India-relevant and workplace-ready. Not grammar drills from Western textbooks." },
    { i: "🎤", t: "Confidence as a Core Skill", b: "Public speaking, vocal clarity, and executive presence are taught as core skills — not assumed. Fluency without confidence gets you nowhere. We build both." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic English class", a: "Four outcome-specific tracks from day one" },
    { f: "Indian learner challenges", g: "Ignored or treated generically", a: "Addressed head-on — accent, hesitation, register" },
    { f: "Batch size", g: "20–40 students per class", a: "Max 6 per batch — by design" },
    { f: "IELTS preparation", g: "Sold as a separate course", a: "Dedicated 6-week module — no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions) — free" },
    { f: "Certifications", g: "Course completion only", a: "CEFR credential at every completed level" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy — built for Indian learners" },
  ],
  reviews: [
    { name: "Amit Tiwari", role: "Senior Manager", co: "Genpact India", track: "Career Track", b2b: false, init: "AT", text: "My spoken English was fine but I froze in client calls with US teams. After ALB's Advanced module, I led my first global presentation without a script. The transformation in 3 months surprised even me." },
    { name: "Sonal Verma", role: "Head of L&D", co: "Wipro Technologies", track: "Corporate Training", b2b: true, init: "SV", text: "We partnered with ALB to upskill 8 client-facing managers before a major account expansion. The structured curriculum, small batches, and measurable progress reports made the investment very easy to justify to leadership." },
    { name: "Kiran Reddy", role: "MBBS Doctor", co: "UK Immigration Applicant", track: "Immigration Track", b2b: false, init: "KR", text: "I needed IELTS 7.5 for my UK GMC registration. ALB's dedicated IELTS module and the way they tackled my pronunciation and writing simultaneously — I hit 7.5 in my first sitting." },
    { name: "Pooja Iyer", role: "MBA Student → University of Exeter", co: "Academic Track", track: "Academic Track", b2b: false, init: "PI", text: "The academic writing modules genuinely changed how I structure arguments. University of Exeter sent my admission letter two weeks after I submitted my IELTS score. ALB got me there." },
    { name: "Ravi Chandran", role: "VP Client Services", co: "Mphasis", track: "Career Track", b2b: false, init: "RC", text: "English was never my weakness — presence was. ALB's Advanced module gave me the executive communication skills I needed to step into a VP role with confidence in front of international clients." },
    { name: "Tanisha Gupta", role: "Class 12, DPS RK Puram", co: "Junior Track", track: "Junior Track", b2b: false, init: "TG", text: "I used to panic in English debates and GDs. After ALB's Foundation module I placed second at my school MUN. The pronunciation work and structured speaking practice actually worked." },
  ],
  included: ["Class notes for every session", "Weekly 4-skill assignments", "Pronunciation & accent correction", "Guided speaking with feedback", "Professional email writing practice", "Mid-level formal assessments", "Full IELTS mock exams (all 4 bands)", "ALB Certificate (Foundation · Intermediate · Advanced)", "IELTS / PTE exam guidance & registration support", "+Beyond Soft Skills (2 weeks, free)", "Instructor access between classes", "Progress tracking throughout"],
  examRole: "IELTS & PTE Coach",
  faq: [
    { q: "Which track is right for me?", a: "Canada/UK/Australia PR? → Immigration Track. International university? → Academic Track. MNC/BPO career growth? → Career Track. School student? → Junior Track. Your ALB advisor will confirm the right track in your free trial class." },
    { q: "I already speak English — what will I actually learn?", a: "Most Indian speakers know English well but struggle with spoken confidence, professional register, accent clarity, and high-stakes communication. This programme addresses all four directly." },
    { q: "What IELTS band can I target?", a: "Foundation to Intermediate prepares for Band 6.0–6.5. The Advanced + IELTS module targets Band 7.0–7.5+. A personalised score plan is created for every student." },
    { q: "Is IELTS or PTE better for immigration?", a: "PTE is faster to schedule and computer-marked. IELTS is more widely accepted. Choice depends on your visa requirements and personal strengths. We advise in your free consultation." },
    { q: "Are classes online or in person?", a: "Fully online, instructor-led, and live. Morning, evening, and weekend batches available from anywhere in India." },
  ],
  ctaH: "Your English Story Starts Here.",
  ctaS: "Choose your track. Book a free trial class. No commitment needed.",
};

export const GERMAN: CourseData = {
  lang: "German", modalKey: "German Language",
  accent: "#B45309", al: "#FBBF24",
  ew: "German · A1 to B2 · Four Tracks",
  h1a: "Learn German.", h1b: "Open Any Door.",
  hs: "A1 to B2 in 36 weeks. Four tracks — Immigration, Academic, Career, and Junior. One systematic programme for Indian learners targeting Germany, Austria, and Switzerland.",
  chips: ["36 Weeks", "216 Hours", "Max 6 / Batch", "4 Tracks", "Goethe · TestDaF · DSH", "+Beyond Included"],
  stats: [{ n: "36", l: "Teaching Weeks" }, { n: "216", l: "Instruction Hours" }, { n: "6", l: "Max Per Batch" }, { n: "4", l: "Learning Tracks" }, { n: "4", l: "Exam Pathways" }],
  tracks: [
    { icon: "🇩🇪", name: "Immigration Track", color: "#B45309", pop: true, forText: "Germany work visa & Blue Card applicants, Ausbildung candidates, and family reunion visa holders needing Goethe A1, B1, or B2 as mandatory documentation.", exams: ["Goethe A1", "Goethe B1", "TestDaF", "DSH"] },
    { icon: "🎓", name: "Academic Track", color: "#7C3AED", pop: false, forText: "Students targeting German universities — TU Munich, LMU, RWTH Aachen — for Bachelor's or Master's programmes requiring DSH 2 or TestDaF TDN 4.", exams: ["Goethe B2", "TestDaF TDN 4", "DSH 2"] },
    { icon: "💼", name: "Career Track", color: "#059669", pop: false, forText: "Working professionals in German-speaking companies, global roles with German clients, or multilingual environments needing professional-grade German.", exams: ["Goethe B1", "Goethe B2", "TELC"] },
    { icon: "⭐", name: "Junior Track", color: "#D97706", pop: false, forText: "School students (Class 6–12) building early German proficiency for competitive advantage, Goethe certifications, and future university goals.", exams: ["Goethe A1", "Goethe A2", "Goethe B1"] },
  ],
  journey: [
    { l: "A1", w: "8 Weeks", t: "German Foundations", s: "Goethe A1 · Family reunion visa" },
    { l: "A2", w: "8 Weeks", t: "Everyday German", s: "Goethe A2/TELC · Ausbildung entry" },
    { l: "B1", w: "10 Weeks", t: "Independent German", s: "Goethe B1 · Work visa ready" },
    { l: "B2", w: "10 Weeks", t: "Advanced Fluency & Exam-Ready", s: "Goethe B2 · TestDaF · DSH" },
    { l: "★", w: "2 Weeks", t: "+Beyond", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "German Foundations", badge: "A1 · Goethe A1", weeks: "8 Weeks", desc: "Start from zero. Learn essential German grammar, introduce yourself confidently, and meet the Goethe A1 requirement for family reunion visas.", topics: [
      { t: "Greetings & Introductions", i: ["Formal Sie vs informal du", "Nationalities & professions", "Basic self-introduction"] },
      { t: "German Grammatical Gender", i: ["der/die/das — nominative case", "ein/eine & kein/keine", "Common noun genders"] },
      { t: "Daily Life & Shopping", i: ["Modal verbs: können, wollen, müssen", "Household vocabulary & routines", "Shops, prices & daily transactions"] },
      { t: "Goethe A1 Exam Prep", i: ["Listening & reading strategies", "Writing and speaking task practice", "Full mock: Hören, Lesen, Schreiben, Sprechen"] },
    ], assess: "Week 4: grammar check · Week 7: integrated assessment · Week 8: full mock + ALB Level 1 Certificate" },
    { label: "Module 2", title: "Everyday German", badge: "A2 · Goethe A2 / TELC A2", weeks: "8 Weeks", desc: "Handle everyday situations in Germany. Navigate cities, narrate past events, manage health scenarios, and write formal correspondence.", topics: [
      { t: "City & Directions", i: ["Dative case introduction", "Two-way prepositions (an, auf, in)", "Navigating German public services"] },
      { t: "Past Tenses (Perfekt)", i: ["Perfekt with haben (weak verbs)", "Perfekt with sein (movement verbs)", "Narrating events & timelines"] },
      { t: "Health & Travel", i: ["Body parts & symptoms", "Doctor visits & pharmacy German", "German transport & booking vocabulary"] },
      { t: "Written Communication", i: ["Formal email structures", "Subordinating conjunctions (weil, dass)", "Writing to German institutions"] },
    ], assess: "Week 12: navigation test · Week 15: email & speaking test · Week 16: full mock + ALB Level 2 Certificate" },
    { label: "Module 3", title: "Independent German", badge: "B1 · Goethe B1 · Work Visa Ready", weeks: "10 Weeks", desc: "Communicate independently on work, education, and daily life. Master all four German cases. Reach Goethe B1 for work visa eligibility.", topics: [
      { t: "Work & Careers in Germany", i: ["Genitive case & compound nouns", "Job application vocabulary", "CV writing in German"] },
      { t: "Conditional & Subordinate Clauses", i: ["Konjunktiv II (würde + infinitive)", "Weil, obwohl, wenn, als constructions", "Indirect speech introduction"] },
      { t: "Life in Germany", i: ["University system & DAAD terminology", "Work visa & Ausbildung vocabulary", "German integration & cultural competence"] },
      { t: "Professional Correspondence", i: ["Business letters & formal emails", "Nominalization & professional register", "Phone calls & meetings in German"] },
    ], assess: "Week 20: media & opinion test · Week 24: formal writing & oral test · Week 26: full mock + ALB Level 3 Certificate" },
    { label: "Module 4", title: "Advanced Fluency & Exam Readiness", badge: "B2 · Goethe B2 · TestDaF · DSH", weeks: "10 Weeks", desc: "Achieve fluent, academic-grade German. Master complex grammar, prepare for TestDaF and DSH formats, and communicate with precision in any setting.", topics: [
      { t: "Academic Writing in German", i: ["Essay structures: Erörterung, Grafik", "Partizipialkonstruktionen", "Data description & academic coherence"] },
      { t: "Complex Grammar", i: ["Extended participial clauses", "Double infinitive structures", "Advanced passive & formal register"] },
      { t: "TestDaF & DSH Strategy", i: ["Reading comprehension under time pressure", "TestDaF writing formats", "Goethe B2 speaking & writing formats"] },
      { t: "Full Mock & Feedback", i: ["Full Goethe B2 mock exam", "Detailed individual score analysis", "Next-step counselling for visa or university"] },
    ], assess: "Week 30: academic writing · Week 34: advanced speaking · Week 36: full mock + ALB Level 4 Certificate" },
    SOFT_SKILLS_MODULE,
  ],
  outcomes: [
    { i: "🗣️", t: "Communicate confidently in everyday German", s: "Shopping, transport, healthcare, and social situations" },
    { i: "🏛️", t: "Handle German bureaucracy fluently", s: "Anmeldung, official forms, Behördengänge, and correspondence" },
    { i: "💼", t: "Communicate professionally with German employers", s: "CVs, interviews, emails, and German workplace conversations" },
    { i: "🎓", t: "Meet university admission requirements", s: "DSH-2 or TestDaF TDN 4 for German university entry" },
    { i: "📝", t: "Achieve Goethe, TestDaF, or DSH exam readiness", s: "Visa, Ausbildung, or university language threshold met" },
    { i: "🔧", t: "Handle your specific immigration language requirement", s: "Goethe A1 for family reunion · B1 for work visa · B2 for university" },
    { i: "🏠", t: "Navigate daily life and workplace culture in Germany", s: "Professional norms, cultural etiquette, and community integration" },
    { i: "⭐", t: "Build a CEFR-credentialled portfolio", s: "ALB certificate + Goethe/TestDaF/DSH credential at every milestone" },
  ],
  usps: [
    { i: "🇩🇪", t: "Germany-Focused Context, Every Level", b: "Visa scenarios, Anmeldung, Krankenversicherung, embassy language — the German you'll actually use in real life, not textbook exercises set in fictional European cafes." },
    { i: "🧩", t: "Case System Made Clear", b: "German grammar is systematic when taught right. We introduce the four cases step-by-step — Nominative, Akkusativ, Dativ, Genitiv — so they become logical and learnable, not overwhelming." },
    { i: "📝", t: "Four Exam Pathways in One Programme", b: "Goethe (A1–B2), TestDaF, DSH, and TELC — all prepared within the programme. No need to find separate exam coaching. Your track determines your exam focus." },
    { i: "👥", t: "Max 6 Per Batch — Always", b: "Speaking time, feedback, and instructor attention are never diluted. Small cohorts are a deliberate design choice — especially important for a case-system language like German." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic German class", a: "Four outcome-specific tracks from day one" },
    { f: "Germany immigration context", g: "Generic grammar exercises", a: "Visa scenarios, Anmeldung & real-life German built in" },
    { f: "Case system teaching", g: "Presented as a theory wall", a: "Step-by-step, systematic, practical use-first" },
    { f: "Exam preparation", g: "Goethe / TestDaF sold separately", a: "Built into the programme — no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions) — free" },
    { f: "Certifications", g: "Course completion only", a: "CEFR credential at every completed level" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy — built for Indian learners" },
  ],
  reviews: [
    { name: "Vikram Nair", role: "Mechanical Engineer", co: "Germany Work Visa Applicant", track: "Immigration Track", b2b: false, init: "VN", text: "I needed Goethe B1 for my skilled worker visa. Most coaching centres gave me grammar tables and sent me home. ALB gave me German I could actually use — at the Ausländerbehörde, at work, and in daily life. Cleared B1 on my first attempt." },
    { name: "Shruti Kapoor", role: "Training Manager", co: "KPIT Technologies", track: "Corporate Training", b2b: true, init: "SK", text: "We enrolled 4 engineers in ALB's German Immigration Track before their Pune-to-Munich transfers. The structured curriculum and weekly progress updates gave us full visibility. All four cleared Goethe B1 within the programme timeline." },
    { name: "Aryan Shah", role: "Student → TU Munich", co: "Academic Track", track: "Academic Track", b2b: false, init: "AS", text: "TestDaF TDN 4 was my target for TU Munich admission. ALB's B2 module and the dedicated TestDaF preparation week were exactly what I needed. Cleared TestDaF with TDN 4 across all four skills. TU Munich accepted." },
    { name: "Kavitha Rao", role: "IT Consultant", co: "Family Reunion Visa", track: "Immigration Track", b2b: false, init: "KR", text: "I only needed Goethe A1 for my spouse's family reunion visa. ALB didn't oversell me a full programme — they helped me prepare specifically for A1 and I was ready in 8 weeks. Straightforward, honest, and effective." },
    { name: "Deepak Joshi", role: "VP HR", co: "Persistent Systems", track: "Corporate Partner", b2b: true, init: "DJ", text: "Persistent has been working with ALB for German language training for our Europe-bound engineers. What stands out is the seriousness of the curriculum. This isn't generic language coaching — it's career-specific preparation." },
    { name: "Aditi Mehta", role: "Class 10, Delhi Public School", co: "Junior Track", track: "Junior Track", b2b: false, init: "AM", text: "German was just a third language in school for me. After ALB I actually enjoy it. I cleared Goethe A2 last month and I'm continuing to B1. The grammar made sense for the first time — especially the case system." },
  ],
  included: ["Class notes for every session", "Weekly 4-skill assignments", "Pronunciation & case system practice", "Guided speaking with instructor feedback", "Writing corrections throughout", "Mid-level formal assessments", "Full mock exams at each level", "ALB Certificate (A1 · A2 · B1 · B2)", "Goethe / TestDaF / DSH exam guidance", "Exam registration support", "+Beyond Soft Skills (2 weeks, free)", "Progress tracking throughout"],
  examRole: "Goethe & TestDaF Coach",
  faq: [
    { q: "Which track should I choose?", a: "Germany work visa or Ausbildung? → Immigration Track. University (TU Munich, LMU, etc.)? → Academic Track. Working with German companies? → Career Track. School student? → Junior Track. Your ALB advisor will confirm in your free trial." },
    { q: "Is German grammar really that hard?", a: "It's systematic — not random. The case system feels overwhelming at first, but with the structured approach we use, it becomes logical. Most students find it manageable within A2." },
    { q: "Which exam do I need for a German work visa?", a: "Goethe B1 for most skilled worker visas. A2 for some Ausbildung programmes. Goethe A1 for family reunion visa. TestDaF TDN 4 or DSH 2 for university. We advise based on your specific category." },
    { q: "How long to reach B1 from zero?", a: "About 5 months at standard pace (A1 + A2 + B1 combined). An accelerated Sprint Track is available for those with a tight visa timeline." },
    { q: "Are classes online or in person?", a: "Fully online, instructor-led, and live. Morning, evening, and weekend batches from anywhere in India." },
  ],
  ctaH: "Your Germany Story Starts Here.",
  ctaS: "Choose your track. Book a free trial class. No commitment needed.",
};

export const SPANISH: CourseData = {
  lang: "Spanish", modalKey: "Spanish Language",
  accent: "#DC2626", al: "#FCA5A5",
  ew: "Spanish · A1 to B2 · Four Tracks",
  h1a: "Learn Spanish.", h1b: "Speak to the World.",
  hs: "A1 to B2 in 32 weeks. Four tracks — Academic, Career, Culture & Travel, and Junior. One vibrant language across 20+ countries, built for Indian learners.",
  chips: ["32 Weeks", "192 Hours", "Max 6 / Batch", "4 Tracks", "A1 to B2", "+Beyond Included"],
  stats: [{ n: "32", l: "Teaching Weeks" }, { n: "192", l: "Instruction Hours" }, { n: "6", l: "Max Per Batch" }, { n: "4", l: "Learning Tracks" }, { n: "500M", l: "Speakers Worldwide" }],
  tracks: [
    { icon: "🎓", name: "Academic Track", color: "#DC2626", pop: true, forText: "Students applying to universities in Spain or Latin America needing DELE B1/B2 for admission, plus learners pursuing Spanish as a major or research language.", exams: ["DELE B1", "DELE B2", "SIELE"] },
    { icon: "💼", name: "Career Track", color: "#059669", pop: false, forText: "Professionals at multinationals, BPOs, and global companies serving Spanish-speaking markets — needing business Spanish for client communication and international roles.", exams: ["DELE B2", "SIELE"] },
    { icon: "✈️", name: "Culture & Travel Track", color: "#7C3AED", pop: false, forText: "Travellers, content lovers, and lifelong learners wanting confident conversational Spanish for Spain, Latin America, film, music, and authentic cultural connection.", exams: ["DELE A2", "DELE B1"] },
    { icon: "⭐", name: "Junior Track", color: "#D97706", pop: false, forText: "School students building early Spanish proficiency for academic advantage, DELE certifications, and a head start on a globally valuable language.", exams: ["DELE A1", "DELE A2", "DELE B1"] },
  ],
  journey: [
    { l: "A1", w: "6 Weeks", t: "Survival Spanish", s: "DELE A1 · Speak from day one" },
    { l: "A2", w: "6 Weeks", t: "Everyday Communication", s: "DELE A2 · Daily transactions" },
    { l: "B1", w: "8 Weeks", t: "Independent", s: "DELE B1 · Opinions & stories" },
    { l: "B2", w: "10 Weeks", t: "Fluent & Exam-Ready", s: "DELE B2 · University & career" },
    { l: "★", w: "2 Weeks", t: "+Beyond", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "Survival Spanish", badge: "A1 · DELE A1", weeks: "6 Weeks", desc: "Start speaking from day one. Spanish phonetics are kind to learners — build confidence to introduce yourself and handle everyday situations fast.", topics: [
      { t: "Greetings & Introductions", i: ["Tú vs usted", "Nationalities & professions", "Self-introduction for all contexts"] },
      { t: "Pronunciation & Phonetics", i: ["Spanish vowels & rolled r", "Reading aloud with confidence", "Castilian vs Latin American sounds"] },
      { t: "Numbers, Time & Dates", i: ["Prices & shopping", "Telling the time", "Days, months & scheduling"] },
      { t: "Daily Life & Food", i: ["Daily routine vocabulary", "Café & restaurant Spanish", "Ser vs estar essentials"] },
    ], assess: "Week 3 grammar check · Week 5 speaking test · Week 6 full mock + ALB Level 1 Certificate" },
    { label: "Module 2", title: "Everyday Communication", badge: "A2 · DELE A2", weeks: "6 Weeks", desc: "Handle travel, shopping, and daily life across the Spanish-speaking world. Communicate in familiar, everyday contexts with growing confidence.", topics: [
      { t: "Travel & Directions", i: ["Getting around a city", "Booking & transport vocabulary", "Asking for help confidently"] },
      { t: "Past Tenses", i: ["Pretérito perfecto & indefinido", "Narrating experiences", "Talking about holidays & events"] },
      { t: "Shopping & Services", i: ["Markets, sizes & bargaining", "Banking & post office", "Making complaints politely"] },
      { t: "Describing People & Places", i: ["Personality & appearance", "Comparisons", "Your city & country"] },
    ], assess: "Week 9 navigation test · Week 11 speaking & writing test · Week 12 full mock + ALB Level 2 Certificate" },
    { label: "Module 3", title: "Independent Communication", badge: "B1 · DELE B1", weeks: "8 Weeks", desc: "Express opinions, tell stories, and handle most situations while travelling, studying, or working in a Spanish-speaking environment. DELE B1 preparation begins.", topics: [
      { t: "Work & Education", i: ["Jobs & workplace vocabulary", "Study & academic life", "Future plans & ambitions"] },
      { t: "Subjunctive Introduced", i: ["Present subjunctive basics", "Wishes, doubts & emotions", "Giving advice & recommendations"] },
      { t: "Opinions & Society", i: ["News & current affairs", "Agreeing & disagreeing", "Argument & connectors"] },
      { t: "Culture & Media", i: ["Film, music & literature", "Regional varieties", "Idioms & natural speech"] },
    ], assess: "Week 16 media & opinion test · Week 19 formal writing & oral test · Week 20 full mock + ALB Level 3 Certificate" },
    { label: "Module 4", title: "Advanced Fluency & Exam Readiness", badge: "B2 · DELE B2", weeks: "10 Weeks", desc: "Achieve fluent, precise communication for university and professional contexts. Master complex grammar and prepare thoroughly for the DELE B2 exam.", topics: [
      { t: "Argumentation & Debate", i: ["Structured discussion", "Persuasive register", "Formal vs informal style"] },
      { t: "Academic & Business Writing", i: ["Essays & reports", "Formal emails & letters", "Coherence & cohesion"] },
      { t: "Advanced Grammar", i: ["Imperfect & past subjunctive", "Conditional sentences", "Error correction & accuracy"] },
      { t: "Exam Intensive (DELE B2)", i: ["Full exam strategy & timing", "Reading & listening tasks", "Oral + written simulations"] },
    ], assess: "Week 26 academic writing · Week 30 advanced speaking · Week 32 full mock + ALB Level 4 Certificate" },
    SOFT_SKILLS_MODULE,
  ],
  outcomes: [
    { i: "🗣️", t: "Hold confident conversations across 20+ countries", s: "Spain, Mexico, Argentina, Colombia, and beyond" },
    { i: "🎬", t: "Enjoy Spanish film, music, and series in the original", s: "Netflix originals, cinema, and Latin music without subtitles" },
    { i: "🎓", t: "Meet university admission requirements", s: "DELE B1/B2 for study in Spain and Latin America" },
    { i: "💼", t: "Communicate professionally with Spanish-speaking markets", s: "Business Spanish, client calls, and international roles" },
    { i: "✈️", t: "Travel the Spanish-speaking world with ease", s: "Confident, natural conversation wherever you go" },
    { i: "📝", t: "Achieve exam readiness across all four tracks", s: "DELE A1–B2 and SIELE — target score ready" },
    { i: "⭐", t: "Build a strong CEFR-credentialled portfolio", s: "ALB certificate + DELE credential at every completed level" },
    { i: "🏆", t: "Speak, write, and think in Spanish confidently", s: "Personal, academic, and professional readiness" },
  ],
  usps: [
    { i: "🎯", t: "Goal-Certified Track System", b: "Four outcome-specific tracks under one programme — Academic, Career, Culture & Travel, and Junior. Your curriculum emphasis and exam focus are tailored from day one." },
    { i: "🌎", t: "Castilian and Latin American Spanish", b: "We teach both varieties and expose you to the full spectrum of accents — Spain, Mexico, Argentina, Colombia — so you understand Spanish wherever you meet it." },
    { i: "📝", t: "DELE Prep Built In — No Extra Fee", b: "DELE preparation is woven into the relevant levels of every track, with full mocks and exam coaching. No bolt-on fees." },
    { i: "👥", t: "Max 6 Per Batch — Always", b: "Speaking time, feedback, and instructor attention are never diluted. You are not a face in a row of thirty." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic Spanish class", a: "Four outcome-specific tracks from day one" },
    { f: "Batch size", g: "20–40 students per class", a: "Max 6 per batch — by design" },
    { f: "Spanish varieties", g: "One accent only", a: "Castilian & Latin American — full spectrum" },
    { f: "Exam preparation", g: "Sold as a separate add-on", a: "DELE built into the levels — no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions) — free" },
    { f: "Certifications", g: "Course completion certificate only", a: "CEFR credential at every completed level" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy — built for Indian learners" },
  ],
  reviews: [
    { name: "Ananya Krishnan", role: "Student → IE University Madrid", co: "Academic Track", track: "Academic Track", b2b: false, init: "AK", text: "I needed DELE B2 for my admission to IE University in Madrid. The structured writing modules and mock exams got me there on my first attempt. The classes were genuinely fun too." },
    { name: "Vikram Shetty", role: "Customer Success Lead", co: "Career Track", track: "Career Track", b2b: false, init: "VS", text: "My company expanded into Latin America and I needed Spanish for client calls. ALB's business-focused track had me handling real conversations in four months. The accent training across regions was the difference." },
    { name: "Meera Pillai", role: "L&D Manager", co: "Concentrix India", track: "Corporate Training", b2b: true, init: "MP", text: "We trained 8 agents for a LATAM account. ALB's small batches and measurable progress reports made the investment easy to justify, and the team was genuinely conversational by the end." },
    { name: "Rohit Saxena", role: "Travel Creator", co: "Culture & Travel Track", track: "Culture & Travel Track", b2b: false, init: "RS", text: "I travel across South America for content and wanted real conversational Spanish, not textbook phrases. ALB delivered exactly that. I now film entire pieces in Spanish." },
    { name: "Fatima Sheikh", role: "Spanish Major", co: "Academic Track", track: "Academic Track", b2b: false, init: "FS", text: "The subjunctive used to terrify me. The way ALB built it up gradually — wishes, doubts, advice — finally made it natural. My university Spanish papers improved dramatically." },
    { name: "Aarav Gupta", role: "Class 10, DPS Bangalore", co: "Junior Track", track: "Junior Track", b2b: false, init: "AG", text: "I started Spanish for fun because of football and music, and ended up clearing DELE A2 in school. The classes never felt like homework — I actually looked forward to them." },
  ],
  included: ["Class notes for every session", "Weekly 4-skill assignments", "Pronunciation & accent practice", "Guided speaking with instructor feedback", "Writing corrections throughout", "Castilian & Latin American exposure", "Full mock exams at each level", "ALB Certificate at every level (A1–B2)", "DELE & SIELE exam guidance", "+Beyond Soft Skills (2 weeks, free)", "Instructor access between classes", "Progress tracking throughout"],
  examRole: "DELE / SIELE Coach",
  faq: [
    { q: "Which track should I choose?", a: "It depends on your goal. University in Spain or Latin America? → Academic Track. Career with Spanish-speaking markets? → Career Track. Travel, culture, and content? → Culture & Travel Track. School student? → Junior Track. Your ALB advisor will confirm the right track in your free trial class." },
    { q: "Do you teach Spain Spanish or Latin American Spanish?", a: "Both. The core grammar and vocabulary are shared, and we expose you to accents and usage across Spain, Mexico, Argentina, and Colombia so you can understand and be understood anywhere." },
    { q: "Is Spanish really one of the fastest languages to learn?", a: "For English speakers and most Indian learners, yes — phonetic spelling, familiar script, and shared vocabulary make early progress fast. Many learners reach confident A2 conversation within a few months." },
    { q: "Do I need prior Spanish knowledge to join?", a: "No. Complete beginners are welcome at A1 entry. If you have some Spanish, a short placement assessment will place you at A2, B1, or B2 entry directly." },
    { q: "Are classes online or in person?", a: "Fully online, instructor-led, and live. You attend from anywhere in India or abroad — morning, evening, and weekend batches available." },
  ],
  ctaH: "Your Spanish Journey Starts Here.",
  ctaS: "Choose your track. Book a free trial class. Speak to an advisor. Zero commitment.",
};

export const JAPANESE: CourseData = {
  lang: "Japanese", modalKey: "Japanese Language",
  accent: "#BE123C", al: "#FDA4AF",
  ew: "Japanese · N5 to N2 · Four Tracks",
  h1a: "Learn Japanese.", h1b: "Work With the World's 3rd Economy.",
  hs: "N5 to N2 in 38 weeks. Four tracks — IT & Tech, Work in Japan, Culture & Media, and Junior. From Hiragana to JLPT N2, built for Indian learners.",
  chips: ["38 Weeks", "228 Hours", "Max 6 / Batch", "4 Tracks", "N5 to N2", "+Beyond Included"],
  stats: [{ n: "38", l: "Teaching Weeks" }, { n: "228", l: "Instruction Hours" }, { n: "6", l: "Max Per Batch" }, { n: "4", l: "Learning Tracks" }, { n: "N2", l: "Work Standard" }],
  tracks: [
    { icon: "💻", name: "IT & Tech Track", color: "#BE123C", pop: true, forText: "Indian IT professionals targeting Japan-facing roles — bridge SE, offshore, and onsite positions where N2 Japanese commands a 40–60% salary premium.", exams: ["JLPT N3", "JLPT N2"] },
    { icon: "🗼", name: "Work in Japan Track", color: "#059669", pop: false, forText: "Engineers, specified-skilled workers (SSW), and professionals relocating to Japan — needing N3/N2 for work visas as Japan actively recruits internationally.", exams: ["JLPT N2", "JFT-Basic"] },
    { icon: "🎌", name: "Culture & Media Track", color: "#7C3AED", pop: false, forText: "Anime, manga, gaming, and culture lovers wanting to enjoy Japanese media in the original and travel confidently across Japan.", exams: ["JLPT N5", "JLPT N4"] },
    { icon: "⭐", name: "Junior Track", color: "#D97706", pop: false, forText: "School and college students building strong early Japanese foundations for higher studies, exchange programmes, and future careers.", exams: ["JLPT N5", "JLPT N4"] },
  ],
  journey: [
    { l: "N5", w: "8 Weeks", t: "Scripts & Foundations", s: "JLPT N5 · Kana + 100 kanji" },
    { l: "N4", w: "8 Weeks", t: "Everyday Japanese", s: "JLPT N4 · 300 kanji" },
    { l: "N3", w: "10 Weeks", t: "Intermediate", s: "JLPT N3 · 650 kanji" },
    { l: "N2", w: "10 Weeks", t: "Work-Ready & Exam", s: "JLPT N2 · 1000+ kanji" },
    { l: "★", w: "2 Weeks", t: "+Beyond", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "Scripts & Foundations", badge: "N5 · JLPT N5", weeks: "8 Weeks", desc: "Master Hiragana and Katakana in the first weeks, build your first 100 kanji, and start handling daily survival Japanese with confidence.", topics: [
      { t: "Hiragana & Katakana", i: ["Both scripts mastered fast", "Reading & writing practice", "Pronunciation & pitch basics"] },
      { t: "Core Grammar", i: ["は / が / を particles", "です / ます polite forms", "Basic sentence structure"] },
      { t: "First 100 Kanji", i: ["Numbers, days & people", "Stroke order & radicals", "Reading everyday signs"] },
      { t: "Daily Survival", i: ["Self-introduction (jikoshoukai)", "Shopping & ordering food", "Time, dates & directions"] },
    ], assess: "Week 4 kana & kanji check · Week 7 speaking test · Week 8 full mock + ALB N5 Certificate" },
    { label: "Module 2", title: "Everyday Japanese", badge: "N4 · JLPT N4", weeks: "8 Weeks", desc: "Reach conversational ability, expand to ~300 kanji, and handle simple reading and writing for everyday and travel situations.", topics: [
      { t: "Verb Forms", i: ["て-form & connecting actions", "Plain (dictionary) form", "Past & negative forms"] },
      { t: "Expanded Kanji (~300)", i: ["Daily life & places", "Compound words", "Reading short passages"] },
      { t: "Everyday Conversation", i: ["Making plans & invitations", "Giving & asking permission", "Expressing wants & abilities"] },
      { t: "Travel & Situations", i: ["Transport & navigation", "Hotels & appointments", "Polite requests"] },
    ], assess: "Week 12 grammar test · Week 15 reading & speaking test · Week 16 full mock + ALB N4 Certificate" },
    { label: "Module 3", title: "Intermediate Japanese", badge: "N3 · JLPT N3", weeks: "10 Weeks", desc: "Bridge from beginner to advanced. Handle everyday situations fully, watch media with growing comprehension, and build toward ~650 kanji.", topics: [
      { t: "Keigo Foundations", i: ["Polite vs casual register", "Humble & honorific basics", "Workplace-appropriate speech"] },
      { t: "Intermediate Grammar", i: ["Conditionals (たら/ば/と)", "Giving & receiving (あげる/くれる)", "Causative & passive intro"] },
      { t: "Kanji to ~650", i: ["Abstract & compound kanji", "News & article reading", "Reading speed building"] },
      { t: "Media & Listening", i: ["Anime & drama comprehension", "Natural speed listening", "Note-taking strategies"] },
    ], assess: "Week 20 reading test · Week 24 listening & speaking test · Week 26 full mock + ALB N3 Certificate" },
    { label: "Module 4", title: "Advanced & Work-Ready", badge: "N2 · JLPT N2", weeks: "12 Weeks", desc: "Reach the standard most IT and global companies require. Read news and business documents, master keigo, and prepare thoroughly for JLPT N2.", topics: [
      { t: "Business & Keigo Mastery", i: ["Full honorific/humble system", "Emails & business documents", "Meetings & phone Japanese"] },
      { t: "Advanced Grammar", i: ["Nuanced expressions & nuance", "Formal written grammar", "Error correction & accuracy"] },
      { t: "Kanji to 1000+", i: ["Business & technical kanji", "News & report comprehension", "Speed reading for exams"] },
      { t: "Exam Intensive (JLPT N2)", i: ["Full exam strategy & timing", "Grammar, reading & listening", "Track-specific preparation"] },
    ], assess: "Week 30 business writing · Week 36 advanced listening · Week 38 full mock + ALB N2 Certificate" },
    SOFT_SKILLS_MODULE,
  ],
  outcomes: [
    { i: "🈁", t: "Read and write all three Japanese scripts", s: "Hiragana, Katakana, and 1000+ kanji by N2" },
    { i: "💻", t: "Qualify for high-paying Japan-facing IT roles", s: "N2 commands a 40–60% salary premium for Indian engineers" },
    { i: "🗼", t: "Meet work-visa Japanese requirements", s: "N3/N2 for engineering, SSW, and onsite assignments" },
    { i: "🎌", t: "Enjoy anime, manga, and games in the original", s: "Comprehension that turns your passion into fluency" },
    { i: "🤝", t: "Use keigo and business Japanese with confidence", s: "Emails, meetings, and professional etiquette" },
    { i: "📝", t: "Achieve exam readiness across all four tracks", s: "JLPT N5–N2 and JFT-Basic — target level ready" },
    { i: "⭐", t: "Build a strong JLPT-credentialled portfolio", s: "ALB certificate + JLPT credential at every completed level" },
    { i: "🏆", t: "Speak, read, and think in Japanese confidently", s: "Personal, academic, and professional readiness" },
  ],
  usps: [
    { i: "🎯", t: "Goal-Certified Track System", b: "Four outcome-specific tracks under one programme — IT & Tech, Work in Japan, Culture & Media, and Junior. Your curriculum emphasis and exam focus are tailored from day one." },
    { i: "🈂️", t: "Scripts & Kanji Without the Fear", b: "Kana in weeks, kanji built progressively with radicals and mnemonics. The writing system stops being a wall and becomes a system you actually understand." },
    { i: "💻", t: "IT & Business Japanese, Built In", b: "Bridge-SE vocabulary, keigo, and business documents are part of the upper levels — the exact Japanese that Japan-facing roles actually demand." },
    { i: "👥", t: "Max 6 Per Batch — Always", b: "Speaking time, feedback, and instructor attention are never diluted. You are not a face in a row of thirty." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic Japanese class", a: "Four outcome-specific tracks from day one" },
    { f: "Batch size", g: "20–40 students per class", a: "Max 6 per batch — by design" },
    { f: "Kanji approach", g: "Rote memorisation, no system", a: "Radicals & mnemonics, built progressively" },
    { f: "Exam preparation", g: "Sold as a separate add-on", a: "JLPT built into the levels — no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions) — free" },
    { f: "Business Japanese", g: "Not covered", a: "Keigo & IT vocabulary in upper levels" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy — built for Indian learners" },
  ],
  reviews: [
    { name: "Naveen Kumar", role: "Software Engineer", co: "Japan IT Placement", track: "IT & Tech Track", b2b: false, init: "NK", text: "I cleared JLPT N2 with ALB and landed a bridge-SE role in Tokyo with a huge salary jump. The kanji approach with radicals and the business Japanese modules made all the difference." },
    { name: "Shruti Iyer", role: "L&D Partner", co: "Infosys Japan Practice", track: "Corporate Training", b2b: true, init: "SI", text: "We trained a cohort of engineers from N5 toward N3 before onsite deployment. ALB's structured curriculum and small batches meant genuine, measurable progress — not just attendance." },
    { name: "Aman Rajput", role: "SSW Applicant", co: "Work in Japan Track", track: "Work in Japan Track", b2b: false, init: "AR", text: "I needed N3 for my Specified Skilled Worker visa. ALB built my kanji and listening together, and the mock exams matched the real test closely. Cleared N3 first attempt." },
    { name: "Riya Sen", role: "Anime Translator", co: "Culture & Media Track", track: "Culture & Media Track", b2b: false, init: "RS", text: "I started just to watch anime without subtitles and ended up working as a freelance translator. The media-based listening practice was exactly how I learn best." },
    { name: "Harish Menon", role: "Engineering Manager", co: "Rakuten India", track: "IT & Tech Track", b2b: false, init: "HM", text: "Keigo terrified me until ALB broke the honorific system into something logical. My Japanese stand-ups and client emails are finally natural. N2 cleared on schedule." },
    { name: "Tanya Bhat", role: "Class 12, NPS Bangalore", co: "Junior Track", track: "Junior Track", b2b: false, init: "TB", text: "I went from zero to JLPT N4 in my final school years. The small batch meant I actually spoke every class — nothing like the huge online courses my friends tried." },
  ],
  included: ["Class notes for every session", "Hiragana, Katakana & kanji workbooks", "Weekly 4-skill assignments", "Guided speaking with instructor feedback", "Writing & kanji corrections throughout", "Media-based listening practice", "Full JLPT mock exams at each level", "ALB Certificate at every level (N5–N2)", "JLPT & JFT-Basic exam guidance", "+Beyond Soft Skills (2 weeks, free)", "Instructor access between classes", "Progress tracking throughout"],
  examRole: "JLPT Exam Coach",
  faq: [
    { q: "Which track should I choose?", a: "It depends on your goal. Japan-facing IT career? → IT & Tech Track. Relocating to Japan for work? → Work in Japan Track. Anime, media, and travel? → Culture & Media Track. School or college student? → Junior Track. Your ALB advisor will confirm the right track in your free trial class." },
    { q: "Do I really need N2 for jobs in Japan?", a: "For most IT, engineering, and professional roles, N2 is the standard requirement — and it commands a significant salary premium. Some Specified Skilled Worker routes accept N3 or JFT-Basic. We map the right target to your goal." },
    { q: "Is the kanji really that hard?", a: "Kanji is a system, not a memory test. We teach radicals, mnemonics, and patterns so each level adds kanji in a structured, retainable way — most learners are surprised how manageable it becomes." },
    { q: "Do I need prior Japanese knowledge to join?", a: "No. Complete beginners start at N5 with the scripts. If you already know some Japanese, a short placement assessment will place you at N4, N3, or N2 entry directly." },
    { q: "Are classes online or in person?", a: "Fully online, instructor-led, and live. You attend from anywhere in India or abroad — morning, evening, and weekend batches available." },
  ],
  ctaH: "Your Japanese Journey Starts Here.",
  ctaS: "Choose your track. Book a free trial class. Speak to an advisor. Zero commitment.",
};

export const KOREAN: CourseData = {
  lang: "Korean", modalKey: "Korean Language",
  accent: "#4F46E5", al: "#A5B4FC",
  ew: "Korean · Beginner to TOPIK II · Four Tracks",
  h1a: "Learn Korean.", h1b: "Ride the Hallyu Wave.",
  hs: "Hangul to TOPIK II in 34 weeks. Four tracks — Study in Korea, Career, K-Culture, and Junior. Authentic Korean for culture, career, and beyond — built for Indian learners.",
  chips: ["34 Weeks", "204 Hours", "Max 6 / Batch", "4 Tracks", "Hangul to TOPIK II", "+Beyond Included"],
  stats: [{ n: "34", l: "Teaching Weeks" }, { n: "204", l: "Instruction Hours" }, { n: "6", l: "Max Per Batch" }, { n: "4", l: "Learning Tracks" }, { n: "6", l: "TOPIK Levels" }],
  tracks: [
    { icon: "🎓", name: "Study in Korea Track", color: "#4F46E5", pop: true, forText: "Students applying to Korean universities and the Global Korea Scholarship (GKS) — needing TOPIK 3–4 for admission and scholarship eligibility.", exams: ["TOPIK I", "TOPIK II"] },
    { icon: "💼", name: "Career Track", color: "#059669", pop: false, forText: "Professionals targeting Samsung, Hyundai, LG, and Korean firms — needing workplace Korean and business etiquette for global and on-site roles.", exams: ["TOPIK II", "Business Korean"] },
    { icon: "💜", name: "K-Culture Track", color: "#DB2777", pop: false, forText: "K-pop, K-drama, and K-cinema fans wanting to understand lyrics and dialogue in the original and connect authentically with Korean culture.", exams: ["TOPIK I", "Beginner"] },
    { icon: "⭐", name: "Junior Track", color: "#D97706", pop: false, forText: "School and college students building early Korean foundations for higher studies, exchange programmes, and future opportunities in Korea.", exams: ["TOPIK I", "Beginner"] },
  ],
  journey: [
    { l: "가", w: "3 Weeks", t: "Hangul & Basics", s: "Read & write in 2 weeks" },
    { l: "1", w: "7 Weeks", t: "TOPIK I · Level 1", s: "Everyday phrases" },
    { l: "2", w: "8 Weeks", t: "TOPIK I · Level 2", s: "Daily conversation" },
    { l: "3·4", w: "14 Weeks", t: "TOPIK II", s: "Work & academic Korean" },
    { l: "★", w: "2 Weeks", t: "+Beyond", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "Hangul & Survival Korean", badge: "Beginner · Hangul", weeks: "6 Weeks", desc: "Master Hangul — the world's most logical alphabet — in about two weeks, then build the phrases, numbers, and self-introduction you need to start speaking.", topics: [
      { t: "Hangul Mastery", i: ["Consonants & vowels", "Syllable blocks & reading", "Pronunciation rules"] },
      { t: "Core Grammar", i: ["은/는 and 이/가 particles", "이에요 / 예요 sentences", "Basic word order"] },
      { t: "Numbers & Time", i: ["Sino-Korean & native numbers", "Telling the time & dates", "Prices & counting"] },
      { t: "Daily Survival", i: ["Self-introduction", "Ordering food & shopping", "K-drama everyday phrases"] },
    ], assess: "Week 2 Hangul check · Week 5 speaking test · Week 6 full mock + ALB Beginner Certificate" },
    { label: "Module 2", title: "TOPIK I — Foundations", badge: "TOPIK I · Levels 1–2", weeks: "8 Weeks", desc: "Handle daily conversations and common situations with simple reading and writing. Build toward the TOPIK I exam (Levels 1–2).", topics: [
      { t: "Everyday Conversation", i: ["Making plans & invitations", "Likes, wants & abilities", "Asking & giving directions"] },
      { t: "Verb & Tense Forms", i: ["Present, past & future", "Honorific 요 vs casual", "Connecting sentences"] },
      { t: "Reading & Writing", i: ["Short passages & messages", "Filling simple forms", "Vocabulary expansion"] },
      { t: "Situations & Culture", i: ["Restaurants & transport", "Phone & appointments", "Polite expressions"] },
    ], assess: "Week 10 grammar test · Week 13 reading & speaking test · Week 14 full mock + ALB TOPIK I Certificate" },
    { label: "Module 3", title: "TOPIK II — Intermediate", badge: "TOPIK II · Levels 3–4", weeks: "8 Weeks", desc: "Move into extended conversation and more complex grammar. Handle workplace and social situations and build toward TOPIK II Levels 3–4.", topics: [
      { t: "Honorifics & Register", i: ["Formal vs informal speech", "Honorific verbs & nouns", "Workplace-appropriate Korean"] },
      { t: "Intermediate Grammar", i: ["Connectors & clauses", "Reported speech", "Conditionals & reasons"] },
      { t: "Extended Communication", i: ["Opinions & explanations", "Describing experiences", "Longer reading passages"] },
      { t: "K-Media Comprehension", i: ["Drama & variety listening", "Lyrics & natural speech", "Note-taking strategies"] },
    ], assess: "Week 18 reading test · Week 21 listening & speaking test · Week 22 full mock + ALB TOPIK II (Lower) Certificate" },
    { label: "Module 4", title: "TOPIK II — Advanced & Exam", badge: "TOPIK II · Levels 5–6", weeks: "12 Weeks", desc: "Reach academic and professional Korean. Master complex grammar, business etiquette, and prepare thoroughly for higher TOPIK II bands.", topics: [
      { t: "Business & Academic Korean", i: ["Emails & business etiquette", "Presentations & meetings", "Formal written style"] },
      { t: "Advanced Grammar", i: ["Nuanced expressions", "Formal & literary forms", "Error correction & accuracy"] },
      { t: "Reading & Writing for TOPIK II", i: ["Essay & opinion writing", "Complex passage comprehension", "Speed & accuracy building"] },
      { t: "Exam Intensive (TOPIK II)", i: ["Full exam strategy & timing", "Listening, reading & writing", "Track-specific preparation"] },
    ], assess: "Week 26 essay writing · Week 32 advanced speaking · Week 34 full mock + ALB TOPIK II (Upper) Certificate" },
    SOFT_SKILLS_MODULE,
  ],
  outcomes: [
    { i: "🔡", t: "Read and write Hangul fluently", s: "The world's most logical alphabet — mastered in two weeks" },
    { i: "🎓", t: "Meet Korean university and GKS requirements", s: "TOPIK 3–4 for admission and scholarship eligibility" },
    { i: "💼", t: "Communicate professionally in Korean workplaces", s: "Business Korean, etiquette, and Samsung/Hyundai-ready skills" },
    { i: "🎤", t: "Understand K-pop, K-drama, and K-cinema", s: "Lyrics and dialogue in the original, without subtitles" },
    { i: "🙇", t: "Use honorifics and register with confidence", s: "Formal, polite, and casual speech for every situation" },
    { i: "📝", t: "Achieve exam readiness across all four tracks", s: "TOPIK I and TOPIK II — target level ready" },
    { i: "⭐", t: "Build a strong TOPIK-credentialled portfolio", s: "ALB certificate + TOPIK credential at every completed stage" },
    { i: "🏆", t: "Speak, read, and think in Korean confidently", s: "Personal, academic, and professional readiness" },
  ],
  usps: [
    { i: "🎯", t: "Goal-Certified Track System", b: "Four outcome-specific tracks under one programme — Study in Korea, Career, K-Culture, and Junior. Your curriculum emphasis and exam focus are tailored from day one." },
    { i: "🔡", t: "Hangul Fast-Track", b: "Korean's alphabet is the most logical writing system in the world. We have you reading and writing Hangul within two weeks — so real learning starts immediately." },
    { i: "📝", t: "TOPIK Prep Built In — No Extra Fee", b: "TOPIK I and II preparation is woven into the relevant stages, with full mocks and exam coaching. No bolt-on fees." },
    { i: "👥", t: "Max 6 Per Batch — Always", b: "Speaking time, feedback, and instructor attention are never diluted. You are not a face in a row of thirty." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic Korean class", a: "Four outcome-specific tracks from day one" },
    { f: "Batch size", g: "20–40 students per class", a: "Max 6 per batch — by design" },
    { f: "Hangul start", g: "Romanised crutches for months", a: "Real Hangul reading within two weeks" },
    { f: "Exam preparation", g: "Sold as a separate add-on", a: "TOPIK built into the stages — no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions) — free" },
    { f: "Honorifics & register", g: "Glossed over", a: "Taught systematically for real situations" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy — built for Indian learners" },
  ],
  reviews: [
    { name: "Ishita Roy", role: "Student → Yonsei University", co: "Study in Korea Track", track: "Study in Korea Track", b2b: false, init: "IR", text: "I needed TOPIK Level 4 for my GKS scholarship and Yonsei admission. ALB's structured path from Hangul to TOPIK II got me there. The writing modules were exactly what the exam needed." },
    { name: "Sandeep Reddy", role: "Supply Chain Lead", co: "Career Track", track: "Career Track", b2b: false, init: "SR", text: "My role involves a Korean parent company. ALB's business Korean and honorific training changed how I work with HQ — emails and meetings are genuinely smoother now." },
    { name: "Pooja Menon", role: "L&D Manager", co: "Hyundai India Supplier", track: "Corporate Training", b2b: true, init: "PM", text: "We trained a team to work with Korean counterparts. ALB's small batches and honorifics focus meant our people could navigate the etiquette, not just the words. Real, reportable progress." },
    { name: "Aditi Nair", role: "K-Content Creator", co: "K-Culture Track", track: "K-Culture Track", b2b: false, init: "AN", text: "I started because of K-dramas and BTS, and now I understand most of what I watch without subtitles. The Hangul fast-track had me reading in days — I couldn't believe it." },
    { name: "Rahul Pillai", role: "Exchange Student", co: "Study in Korea Track", track: "Study in Korea Track", b2b: false, init: "RP", text: "The honorific system used to confuse me completely. ALB broke it down by situation — formal, polite, casual — until it was natural. My semester in Seoul was so much easier for it." },
    { name: "Sara Khan", role: "Class 11, International School Mumbai", co: "Junior Track", track: "Junior Track", b2b: false, init: "SK", text: "I cleared TOPIK I while still in school. The classes were tiny so I spoke constantly, and learning through music and dramas never felt like studying." },
  ],
  included: ["Class notes for every session", "Hangul reading & writing workbook", "Weekly 4-skill assignments", "Guided speaking with instructor feedback", "Writing corrections throughout", "K-media listening practice", "Full TOPIK mock exams at each stage", "ALB Certificate at every stage (Beginner–TOPIK II)", "TOPIK I & II exam guidance", "+Beyond Soft Skills (2 weeks, free)", "Instructor access between classes", "Progress tracking throughout"],
  examRole: "TOPIK Exam Coach",
  faq: [
    { q: "Which track should I choose?", a: "It depends on your goal. University or GKS scholarship in Korea? → Study in Korea Track. Career with Korean firms? → Career Track. K-pop, K-drama, and culture? → K-Culture Track. School or college student? → Junior Track. Your ALB advisor will confirm the right track in your free trial class." },
    { q: "Is Hangul really that easy to learn?", a: "Yes. Hangul was scientifically designed to be learnable quickly — most of our students read and write it within two weeks. That means real Korean learning starts almost immediately, without romanised crutches." },
    { q: "What TOPIK level do I need?", a: "For most university admissions and the GKS scholarship, TOPIK Level 3–4 is required. Many jobs with Korean firms look for TOPIK II as well. We map the right target level to your specific goal." },
    { q: "Do I need prior Korean knowledge to join?", a: "No. Complete beginners start with Hangul. If you already know some Korean, a short placement assessment will place you at the right stage directly." },
    { q: "Are classes online or in person?", a: "Fully online, instructor-led, and live. You attend from anywhere in India or abroad — morning, evening, and weekend batches available." },
  ],
  ctaH: "Your Korean Journey Starts Here.",
  ctaS: "Choose your track. Book a free trial class. Speak to an advisor. Zero commitment.",
};
