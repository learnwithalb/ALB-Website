export interface CourseTrack { icon: string; name: string; color: string; pop: boolean; forText: string; exams: string[]; bestFor?: string[]; outcome?: string; }
export interface CourseJourney { l: string; w: string; t: string; s: string; }
export interface CurriculumTopic { t: string; i: string[]; }
export interface CurriculumModule { label: string; title: string; badge: string; weeks: string; desc: string; topics: CurriculumTopic[]; assess: string; }
export interface CourseOutcome { i: string; t: string; s: string; }
export interface CourseUsp { i: string; t: string; b: string; }
export interface CompareRow { f: string; g: string; a: string; }
export interface CourseReview { name: string; role: string; co: string; track: string; b2b: boolean; init: string; text: string; }
export interface CourseFaq { q: string; a: string; }
/** Optional per-section heading override. `a` = plain part, `b` = accented part, `sub` = subheading. */
export interface SecHead { eyebrow?: string; a?: string; b?: string; sub?: string; }
export interface CourseSections {
  tracks?: SecHead;
  journey?: SecHead;
  curriculum?: SecHead;
  outcomes?: SecHead;
  usps?: SecHead;
  comparison?: SecHead;
  reviews?: SecHead;
  instructors?: SecHead;
}

export interface CourseData {
  lang: string;
  modalKey: string;
  accent: string;
  al: string;
  heroImage?: string;
  sections?: CourseSections;
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
  label: "Module 5", title: "+Beyond, Global Confidence", badge: "Soft Skills · Free · All Tracks", weeks: "2 Weeks",
  desc: "The ALB Global Confidence Program, 6 live sessions on confidence, professional communication, personal branding, and interview skills.",
  topics: [
    { t: "Week 1: Personal Effectiveness", i: ["Self-awareness and confidence building", "Public speaking fundamentals", "Active listening and empathy"] },
    { t: "Week 2: Professional Readiness", i: ["Email etiquette and workplace communication", "Personal branding and interview skills", "Capstone simulation and feedback"] },
  ],
  assess: "Day 3 and Day 7 micro-presentations · Day 9 mock interview · Day 10 Capstone, ALB Soft Skills Certificate",
};

export const FRENCH: CourseData = {
  lang: "French", modalKey: "French Language",
  accent: "#2563EB", al: "#93C5FD",
  heroImage: "/images/hero-images/french.png",
  ew: "French · For Immigration, Study and Career Growth",
  h1a: "French That Takes You", h1b: "Further.",
  hs: "A1 to B2 in 36 weeks. Choose the pathway that fits your future and learn French with a purpose.",
  chips: ["36 Weeks", "Certified Trainers", "Small Cohorts", "Soft Skills", "Communication Classes"],
  stats: [{ n: "36", l: "Weeks" }, { n: "Certified", l: "Trainers" }, { n: "Small", l: "Cohorts" }, { n: "Soft-skills", l: "Included" }, { n: "Communication", l: "Classes" }],
  sections: {
    tracks: { eyebrow: "Choose Your Pathway", a: "Choose the Future ", b: "You're Working Towards", sub: "From Canadian immigration and international education to global careers and personal milestones, choose the pathway that aligns with your next chapter." },
    journey: { eyebrow: "Your Journey", a: "From First Words to ", b: "Real-World Fluency.", sub: "Progress through a structured A1–B2 pathway designed to help you communicate confidently, achieve your goals, and thrive in French-speaking environments around the world." },
    curriculum: { eyebrow: "The ALB Learning Experience", a: "More Than French. ", b: "Skills For Life, Work and Opportunity.", sub: "Every stage of the programme combines language learning with practical communication, professional readiness, and confidence-building. By the time you reach B2, you're not just speaking French, you're prepared for interviews, presentations, university applications, and real-world interactions." },
    outcomes: { eyebrow: "What You'll Achieve", a: "Where French ", b: "Can Take You.", sub: "By the end of your journey, you'll have more than language skills. You'll have the confidence, communication ability, and credentials to pursue opportunities across education, careers, travel, and international life." },
    usps: { eyebrow: "The ALB Difference", a: "We Don't Just ", b: "Teach French", sub: "Most language institutes focus on grammar and exams. ALB combines language learning, communication skills, and professional development to help learners succeed beyond the classroom." },
    comparison: { eyebrow: "Why Learners Choose ALB", a: "Not All Language Courses ", b: "Are Equal.", sub: "The difference isn't just what you learn. It's what you become." },
    reviews: { sub: "From university admissions and immigration goals to promotions and career growth, our learners use French to unlock opportunities that matter." },
    instructors: { eyebrow: "Learn From Experts", a: "Language Coaches. ", b: "Communication Mentors.", sub: "Our instructors help you develop not only language proficiency, but also the confidence and communication skills needed to succeed in academic, professional, and international environments." },
  },
  tracks: [
    { icon: "flight", name: "Immigration Track", color: "#2563EB", pop: true, forText: "Canada PR applicants, Express Entry (FSW, CEC, FST), PNP, Quebec Skilled Worker Program, LMIA, and work permit candidates needing a recognised French score for IRCC.", exams: ["TEF Canada", "TCF Canada", "CLB 7+"] },
    { icon: "school", name: "Academic Track", color: "#7C3AED", pop: false, forText: "Students applying to French-medium universities in France, Belgium, Switzerland, or Quebec, needing DELF B2 or DALF C1 for university admission.", exams: ["DELF B2", "DALF C1"] },
    { icon: "work", name: "Career Track", color: "#059669", pop: false, forText: "Working professionals in multilingual or international environments needing professional-grade French for workplace advancement and global career goals.", exams: ["DELF B1", "DELF B2"] },
    { icon: "rocket", name: "Sprint Track", color: "#D97706", pop: false, forText: "Designed for learners with urgent goals, visa deadlines, university applications, job opportunities, or upcoming exams, who need structured French learning at an accelerated pace.", exams: ["TEF", "TCF", "DELF"] },
  ],
  journey: [
    { l: "A1", w: "8 Weeks", t: "Foundations", s: "DELF A1" },
    { l: "A2", w: "8 Weeks", t: "Everyday Confidence", s: "DELF A2" },
    { l: "B1", w: "10 Weeks", t: "Real-World Communication", s: "DELF B1 · TEF/TCF" },
    { l: "B2", w: "10 Weeks", t: "Advanced Fluency", s: "DELF B2 · TEF/TCF Canada" },
    { l: "★", w: "2 Weeks", t: "Global Confidence (+Beyond)", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "Foundation", badge: "A1 · DELF A1", weeks: "8 Weeks", desc: "Build the confidence to communicate in everyday situations and establish a strong foundation in French pronunciation, grammar, and conversation.", topics: [
      { t: "Greetings, Introductions and Personal Identity", i: ["Formal and informal communication", "Introducing yourself and others", "Nationalities, professions, and personal information"] },
      { t: "Numbers, Dates and Everyday Communication", i: ["Time, dates, schedules, and appointments", "Basic transactions and daily interactions", "Essential question and answer structures"] },
      { t: "Family, Daily Life and Social Situations", i: ["Family and relationships", "Daily routines and habits", "Describing people, places, and preferences"] },
      { t: "Food, Shopping and Local Services", i: ["Ordering food and dining etiquette", "Shopping and service interactions", "Asking for directions and navigating public spaces"] },
    ], assess: "Week 4 grammar and speaking check · Week 7 integrated assessment · Week 8 DELF-style mock and ALB Level 1 Certificate" },
    { label: "Module 2", title: "Everyday Confidence", badge: "A2 · DELF A2", weeks: "8 Weeks", desc: "Develop the ability to manage everyday situations independently. Learn to communicate in travel, study, work, and administrative environments while building confidence in speaking, listening, reading, and writing.", topics: [
      { t: "Travel, Transport and City Life", i: ["Travel planning and bookings", "Public transportation vocabulary", "Navigating cities and public services"] },
      { t: "Past Experiences and Storytelling", i: ["Talking about past events", "Describing experiences and achievements", "Narrating personal and professional journeys"] },
      { t: "Health, Housing and Daily Administration", i: ["Healthcare and appointments", "Accommodation and housing vocabulary", "Basic administrative communication"] },
      { t: "Written Communication", i: ["Formal and informal emails", "Requests, enquiries, and confirmations", "Communication with institutions and organisations"] },
    ], assess: "Week 12 communication assessment · Week 15 writing and speaking evaluation · Week 16 DELF-style mock and ALB Level 2 Certificate" },
    { label: "Module 3", title: "Real-World Communication", badge: "B1 · DELF B1 · TEF/TCF Foundation", weeks: "10 Weeks", desc: "Use French confidently in academic, professional, and social situations while learning to express ideas, opinions, and experiences effectively.", topics: [
      { t: "Work, Careers and Professional Communication", i: ["Workplace communication and etiquette", "Professional vocabulary and networking", "Business correspondence and meetings"] },
      { t: "Education, Universities and Academic Life", i: ["Academic vocabulary and university systems", "Presentations and classroom discussions", "Research and study-related communication"] },
      { t: "Society, Culture and Media", i: ["Current affairs and social topics", "Expressing opinions and arguments", "Cultural awareness across Francophone regions"] },
      { t: "Formal Communication and Exam Foundations", i: ["Official correspondence and documentation", "Introduction to TEF, TCF, and DELF exam formats", "Structured speaking and writing tasks"] },
    ], assess: "Week 20 communication and presentation assessment · Week 24 formal writing and speaking evaluation · Week 26 DELF B1-style mock and ALB Level 3 Certificate" },
    { label: "Module 4", title: "Advanced Fluency and Opportunity Readiness", badge: "B2 · DELF B2 · TEF Canada · TCF Canada", weeks: "10 Weeks", desc: "Achieve advanced communication skills for university admissions, professional environments, immigration pathways, and international opportunities.", topics: [
      { t: "Advanced Communication and Argumentation", i: ["Debate and structured discussion", "Persuasive communication", "Professional and academic presentations"] },
      { t: "Academic and Professional Writing", i: ["Essays, reports, and formal documents", "Research summaries and analytical writing", "Business communication and proposals"] },
      { t: "Advanced Grammar and Accuracy", i: ["Complex sentence structures", "Advanced verb forms and connectors", "Accuracy, coherence, and style"] },
      { t: "Exam Preparation and Real-World Application", i: ["DELF B2 preparation", "TEF Canada and TCF Canada readiness", "Mock interviews, presentations, and simulations"] },
    ], assess: "Week 30 advanced writing assessment · Week 34 presentation and speaking evaluation · Week 36 full mock examination and ALB Level 4 Certificate" },
    { label: "Module 5", title: "+Beyond, Global Confidence Program", badge: "Soft Skills · Complimentary", weeks: "2 Weeks", desc: "Develop interview skills, presentation abilities, professional communication, personal branding, and workplace confidence that go beyond language learning.", topics: [
      { t: "Personal Effectiveness and Communication", i: ["Confidence building", "Public speaking fundamentals", "Active listening and interpersonal skills"] },
      { t: "Professional Readiness", i: ["Email etiquette and workplace communication", "Personal branding and interview preparation", "Professional presentations and networking"] },
    ], assess: "Presentations · Mock interview · Final capstone activity · ALB Global Confidence Certificate" },
  ],
  outcomes: [
    { i: "teacher", t: "Communicate With Confidence", s: "Navigate everyday conversations, social interactions, and real-world situations naturally in French." },
    { i: "school", t: "Study Without Language Barriers", s: "Participate in academic discussions, presentations, and university life with confidence." },
    { i: "work", t: "Work Across Borders", s: "Communicate professionally with clients, colleagues, and employers in French-speaking environments." },
    { i: "description", t: "Handle Official Communication", s: "Understand forms, documents, emails, and administrative processes independently." },
    { i: "globe", t: "Adapt to New Environments", s: "Build the language and cultural awareness needed to thrive internationally." },
    { i: "edit", t: "Prepare for International Exams", s: "Develop the skills required for DELF, TEF Canada, and TCF Canada success." },
    { i: "mic", t: "Present Yourself Effectively", s: "Speak clearly, confidently, and professionally in interviews, presentations, and discussions." },
    { i: "rocket", t: "Become Globally Ready", s: "Develop the confidence and communication skills needed to pursue opportunities anywhere in the world." },
  ],
  usps: [
    { i: "target", t: "Goal-Based Learning", b: "Choose a pathway aligned with your ambitions, whether that's immigration, higher education, career growth, or a personal milestone." },
    { i: "people", t: "Small Cohorts, Real Attention", b: "With small batch sizes, every student receives meaningful speaking practice, personalised feedback, and instructor support." },
    { i: "edit", t: "International Exam Readiness", b: "Build confidence for DELF, TEF Canada, and TCF Canada through structured preparation integrated into your learning journey." },
    { i: "rocket", t: "Beyond Language: Global Readiness", b: "Exclusive to ALB, our +Beyond programme develops interview skills, presentation confidence, professional communication, workplace readiness, and personal branding." },
    { i: "teacher", t: "Communication and Fluency Labs", b: "Build confidence through guided conversations, speaking drills, role plays, discussions, presentations, and real-world communication practice integrated throughout the programme." },
    { i: "chat", t: "24X7 Doubt Support", b: "Questions shouldn't wait until the next class. Learners receive continuous support for grammar, vocabulary, assignments, pronunciation, and exam-related queries, ensuring steady progress throughout the programme." },
  ],
  comparison: [
    { f: "Learning pathways", g: "One generic French class", a: "Goal-based pathways aligned to your future" },
    { f: "Batch size", g: "20–40 students per class", a: "Small cohorts, real speaking time for everyone" },
    { f: "Communication skills", g: "Grammar and exams only", a: "Dedicated communication and fluency labs" },
    { f: "Exam preparation", g: "Sold as a separate add-on", a: "DELF, TEF and TCF prep built into the journey" },
    { f: "Soft skills", g: "Not included", a: "+Beyond global confidence programme, free" },
    { f: "Doubt support", g: "Only during class", a: "Continuous support between sessions" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy, built for Indian learners" },
  ],
  reviews: [
    { name: "Priya Sharma", role: "Software Engineer", co: "Express Entry Applicant", track: "Immigration Track", b2b: false, init: "PS", text: "The immigration-focused vocabulary made every class feel directly useful. I wasn't just learning French, I was learning the exact French I needed for my PR file. Cleared TEF Canada on my first attempt with CLB 8." },
    { name: "Rahul Mehra", role: "HR Manager", co: "Tech Mahindra", track: "Corporate Training", b2b: true, init: "RM", text: "We enrolled 5 employees ahead of their Montreal relocation. ALB's small batch size and structured curriculum meant everyone came back genuinely prepared, not just exam-ready. Monthly progress reports were a bonus." },
    { name: "Anika Reddy", role: "Student → ESCP Paris", co: "Academic Track", track: "Academic Track", b2b: false, init: "AR", text: "My goal was DELF B2 for my Masters application in Paris. The academic writing modules and mock exams were exactly what I needed. First attempt, B2 cleared. ESCP confirmed." },
    { name: "Sanjay Kumar", role: "Civil Engineer", co: "Quebec PR Applicant", track: "Immigration Track", b2b: false, init: "SK", text: "Most institutes teach you French. ALB taught me French for my actual life in Canada, forms, appointments, employer conversations. I walked into my IRCC appointment genuinely prepared." },
    { name: "Neha Patel", role: "Head of Learning and Development", co: "GlobalServe India", track: "Corporate Partner", b2b: true, init: "NP", text: "ALB is now our preferred language partner for pre-relocation French training. The structured reporting, small batches, and genuine progress visibility make the ROI easy to justify internally." },
    { name: "Rohan Singh", role: "Class 11, International School Bangalore", co: "Junior Track", track: "Junior Track", b2b: false, init: "RS", text: "My French went from A1 to DELF B1 in 8 months. The classes are nothing like school French, it actually made sense and I actually speak it now." },
  ],
  included: ["Class notes for every session", "Weekly 4-skill assignments", "Pronunciation practice materials", "Guided speaking with instructor feedback", "Writing corrections throughout", "Mid-level formal assessments", "Full mock exams at each level", "ALB Certificate at every level (A1–B2)", "TEF Canada and TCF Canada exam guidance", "DELF / DALF exam guidance", "+Beyond Soft Skills (2 weeks, free)", "Progress tracking throughout"],
  examRole: "TEF / TCF and DELF Coach",
  faq: [
    { q: "Is French worth learning in India?", a: "Yes. French is one of the most widely taught foreign languages in India and is recognised by schools, universities, employers, and immigration authorities worldwide. It can support academic opportunities, international careers, study-abroad plans, and immigration pathways such as Canada." },
    { q: "How long does it take to learn French from A1 to B2?", a: "At Academy of Languages and Beyond (ALB), learners can progress from A1 to B2 in approximately 36 weeks through a structured pathway that combines language learning, communication practice, exam preparation, and confidence-building activities." },
    { q: "Which French exam should I take?", a: "The right exam depends on your goal. DELF is widely recognised internationally and suitable for academic and professional purposes. TEF Canada and TCF Canada are commonly used for Canadian immigration pathways. Academy of Languages and Beyond (ALB) helps learners choose the exam most relevant to their goals." },
    { q: "Is French difficult for English speakers?", a: "French has a learning curve, particularly with pronunciation and grammar, but English speakers already know thousands of words that share French origins. With structured practice and regular communication activities, most learners progress faster than expected." },
    { q: "Can I learn French for Canada immigration?", a: "Yes. French language proficiency can contribute significantly to Canadian immigration applications. Academy of Languages and Beyond (ALB)'s Immigration Track prepares learners for French language requirements relevant to immigration pathways and recognised language exams." },
    { q: "What level of French is required for studying in France?", a: "Requirements vary by institution and programme. Many universities require B2-level French proficiency, while some programmes taught in English may require lower levels or no French at all. Academy of Languages and Beyond (ALB)'s Academic Track is designed to help learners work towards university language requirements." },
    { q: "What can I do with a B2 level in French?", a: "A B2 level allows learners to communicate confidently in academic, professional, and everyday situations. It is often accepted for university admissions, professional opportunities, and international mobility programmes." },
    { q: "Is French useful for career growth?", a: "Yes. French is used in international business, diplomacy, aviation, hospitality, education, technology, and multinational organisations. French proficiency can help professionals stand out in global job markets." },
  ],
  ctaH: "Your French Journey Starts Here.",
  ctaS: "Choose your pathway. Book a free demo class. Speak to an advisor. Zero commitment.",
};

export const ENGLISH: CourseData = {
  lang: "English", modalKey: "IELTS Coaching",
  accent: "#059669", al: "#6EE7B7",
  heroImage: "/images/hero-images/english.png",
  ew: "English · Module 0 to Advanced · Three Tracks",
  h1a: "English Courses Designed", h1b: "Around Your Goal.",
  hs: "From everyday conversations to university admissions and global careers, develop the communication skills that create opportunities for life.",
  chips: ["Module 0 Included", "IELTS Advantage", "Career English Lab", "Soft Skills Training"],
  stats: [{ n: "Module 0", l: "Included" }, { n: "IELTS", l: "Advantage" }, { n: "Career", l: "English Lab" }, { n: "Soft Skills", l: "Training" }, { n: "Communication", l: "Classes" }],
  sections: {
    tracks: { eyebrow: "Choose Your Track", a: "Three Tracks. One Goal: ", b: "Better English.", sub: "Whether you're building everyday confidence, preparing for IELTS, or strengthening professional communication skills, choose the pathway designed around your goals." },
    journey: { eyebrow: "Your Journey", a: "From First Conversations to ", b: "Global Confidence.", sub: "A structured progression that builds communication skills, workplace confidence, exam readiness, and professional presence, one stage at a time." },
    curriculum: { eyebrow: "The Curriculum", a: "From Hesitation To ", b: "Confident Communication.", sub: "Every learner follows a structured progression designed to build fluency, confidence, professional communication skills, and real-world English usage. Whether you're starting from zero or refining advanced communication, every stage moves you closer to your goal." },
  },
  tracks: [
    { icon: "chat", name: "English Communication", color: "#059669", pop: false, forText: "For learners who want to speak English confidently in everyday situations, social interactions, and professional environments.", exams: [], bestFor: ["Everyday fluency", "Speaking confidence", "Vocabulary building", "Communication skills"], outcome: "Communicate naturally and confidently in real-life situations." },
    { icon: "edit", name: "IELTS Advantage", color: "#7C3AED", pop: true, forText: "For learners preparing for study abroad, immigration, or academic opportunities that require IELTS scores.", exams: [], bestFor: ["IELTS Academic", "IELTS General", "Study Abroad", "Immigration Pathways"], outcome: "Build the skills needed to achieve your target IELTS band score." },
    { icon: "work", name: "Career English Lab", color: "#2563EB", pop: false, forText: "For professionals who want stronger workplace communication, presentations, meetings, interviews, and leadership communication.", exams: [], bestFor: ["Working professionals", "Job seekers", "Client-facing roles", "Career growth"], outcome: "Communicate with confidence in modern professional environments." },
    { icon: "rocket", name: "Sprint Track", color: "#D97706", pop: false, forText: "Designed for learners with urgent goals, visa deadlines, university applications, job opportunities, or upcoming exams, who need structured English learning at an accelerated pace.", exams: [], bestFor: ["IELTS deadlines", "Visa timelines", "Admission cut-offs", "Fast-track prep"], outcome: "Reach your target English level fast, without sacrificing depth or confidence." },
  ],
  journey: [
    { l: "A1", w: "4 Weeks", t: "English Foundations", s: "Build confidence with essential vocabulary, grammar, pronunciation, and everyday conversations." },
    { l: "A2", w: "6 Weeks", t: "Everyday Communication", s: "Handle common conversations confidently in social, academic, and workplace situations." },
    { l: "B1", w: "6 Weeks", t: "Independent Communication", s: "Express ideas clearly, participate in discussions, and communicate effectively in real-world settings." },
    { l: "B2", w: "6 Weeks", t: "Advanced Fluency", s: "Develop professional communication skills, advanced vocabulary, presentations, and workplace readiness." },
    { l: "IELTS", w: "Optional Specialisation", t: "IELTS Advantage", s: "Target higher band scores through focused preparation across Listening, Reading, Writing, and Speaking." },
    { l: "★", w: "2 Weeks", t: "Global Confidence (+Beyond)", s: "Public speaking, interview skills, professional communication, personal branding, and confidence development." },
  ],
  curriculum: [
    { label: "Module 0", title: "Absolute Beginner Foundation", badge: "Pre-A1 Foundation", weeks: "4 Weeks", desc: "Designed for learners with little or no English exposure. Build the vocabulary, pronunciation, sentence structures, and speaking confidence required to begin your English journey successfully.", topics: [
      { t: "Alphabet, Sounds and First Words", i: ["English alphabet and phonics", "Basic pronunciation patterns", "Greetings and introductions"] },
      { t: "Building Vocabulary", i: ["Family, home, and classroom vocabulary", "Numbers, colours, and everyday words", "Common expressions"] },
      { t: "First Sentences", i: ["Subject + verb structures", "Asking simple questions", "Everyday communication practice"] },
      { t: "Readiness and Confidence", i: ["Role-play conversations", "Speaking confidence activities", "Module readiness assessment"] },
    ], assess: "Week 4 readiness assessment · Speaking confidence evaluation · ALB Foundation Certificate" },
    { label: "A1", title: "Foundation Communication", badge: "A1 · Foundation Communication", weeks: "8 Weeks", desc: "Build the confidence to communicate about yourself, your routines, experiences, plans, and everyday situations using practical spoken and written English.", topics: [
      { t: "Introducing Yourself", i: ["Self-introductions", "Family and personal information", "Everyday conversations"] },
      { t: "Daily Life and Routines", i: ["Time and schedules", "Habits and activities", "Everyday communication"] },
      { t: "People, Places and Experiences", i: ["Descriptions and directions", "Talking about past events", "Sharing experiences"] },
      { t: "Shopping and Information", i: ["Transactions and prices", "Asking questions", "Requests and enquiries"] },
    ], assess: "Week 4 fluency check · Week 7 speaking assessment · Week 8 final evaluation + ALB A1 Certificate" },
    { label: "A2", title: "Practical Communication", badge: "A2 · Practical Communication", weeks: "8 Weeks", desc: "Develop the ability to manage real-world situations independently while improving fluency, confidence, speaking, listening, reading, and writing skills.", topics: [
      { t: "Travel and Everyday Situations", i: ["Travel planning and bookings", "Public transportation", "Directions and navigation"] },
      { t: "Discussions and Storytelling", i: ["Sharing opinions", "Describing experiences", "Structured conversations"] },
      { t: "Workplace and Daily Communication", i: ["Office communication", "Professional interactions", "Telephone conversations"] },
      { t: "Written Communication", i: ["Emails and messages", "Requests and confirmations", "Clear written communication"] },
    ], assess: "Week 12 communication assessment · Week 15 speaking evaluation · Week 16 final assessment + ALB A2 Certificate" },
    { label: "B1", title: "Fluency and Professional Confidence", badge: "B1 · Fluency and Professional Confidence", weeks: "8 Weeks", desc: "Move beyond basic communication and develop the fluency, confidence, and professional communication skills required for interviews, presentations, meetings, and workplace success.", topics: [
      { t: "Advanced Conversations", i: ["Social and professional discussions", "Networking communication", "Confidence-building practice"] },
      { t: "Presentations and Public Speaking", i: ["Speech structure", "Presentation delivery", "Audience engagement"] },
      { t: "Interviews and Workplace Communication", i: ["Interview preparation", "Meetings and collaboration", "Professional communication"] },
      { t: "Professional Writing", i: ["Formal emails", "Reports and proposals", "Workplace writing skills"] },
    ], assess: "Week 20 progress review · Week 23 communication showcase · Week 24 final assessment + ALB B1 Certificate" },
    { label: "+Beyond", title: "Global Confidence Programme", badge: "Global Confidence Programme", weeks: "2 Weeks", desc: "Language opens doors. Confidence helps you walk through them. Develop the communication and soft skills needed to thrive in academic, professional, and international environments.", topics: [
      { t: "Public Speaking", i: ["Stage confidence", "Speaking under pressure", "Audience engagement"] },
      { t: "Interview Readiness", i: ["Mock interviews", "Structured responses", "Confidence coaching"] },
      { t: "Professional Presence", i: ["Workplace etiquette", "Personal branding", "Networking confidence"] },
      { t: "Career Communication", i: ["LinkedIn optimisation", "Presentation skills", "Professional introductions"] },
    ], assess: "Final confidence showcase · Communication performance review · ALB Global Confidence Certificate" },
  ],
  outcomes: [
    { i: "mic", t: "Speak English with confidence in any setting", s: "Meetings, interviews, client calls, and presentations" },
    { i: "chart", t: "Achieve your target IELTS / PTE / TOEFL score", s: "Band 7.0+ pathway with structured exam preparation" },
    { i: "email", t: "Write professional emails and documents", s: "Clear, appropriately formal, and error-free" },
    { i: "work", t: "Deliver presentations and lead meetings", s: "Executive presence, structured delivery, confident Q and A" },
    { i: "school", t: "Meet international university admission requirements", s: "IELTS Academic 6.5–7.5+ for UK, USA, Canada, Australia" },
    { i: "globe", t: "Communicate across cultural contexts", s: "Global professional norms and cross-cultural awareness" },
    { i: "flight", t: "Strengthen your immigration application", s: "IELTS General / PTE scores for Express Entry and skilled worker visas" },
    { i: "trophy", t: "Command authority in high-stakes situations", s: "Negotiations, board rooms, client pitches, and interviews" },
  ],
  usps: [
    { i: "people", t: "Built for Indian Learners", b: "We address what actually holds Indian speakers back: retroflex sounds, tense hesitation, mother-tongue influence, and register confusion. Standard courses pretend these don't exist. We don't." },
    { i: "edit", t: "IELTS Prep Woven In, No Extra Fee", b: "A dedicated 6-week IELTS module covers all four skill bands, with full mocks, band prediction, and a personalised score improvement plan. No bolt-on fees." },
    { i: "work", t: "Real Professional Scenarios", b: "Job interviews, client calls, emails, presentations, negotiations, every scenario is India-relevant and workplace-ready. Not grammar drills from Western textbooks." },
    { i: "mic", t: "Confidence as a Core Skill", b: "Public speaking, vocal clarity, and executive presence are taught as core skills, not assumed. Fluency without confidence gets you nowhere. We build both." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic English class", a: "Three outcome-specific tracks from day one" },
    { f: "Indian learner challenges", g: "Ignored or treated generically", a: "Addressed head-on, accent, hesitation, register" },
    { f: "Batch size", g: "20–40 students per class", a: "Max 6 per batch, by design" },
    { f: "IELTS preparation", g: "Sold as a separate course", a: "Dedicated IELTS Advantage module, no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions), free" },
    { f: "Certifications", g: "Course completion only", a: "CEFR credential at every completed level" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy, built for Indian learners" },
  ],
  reviews: [
    { name: "Amit Tiwari", role: "Senior Manager", co: "Genpact India", track: "Career Track", b2b: false, init: "AT", text: "My spoken English was fine but I froze in client calls with US teams. After ALB's Advanced module, I led my first global presentation without a script. The transformation in 3 months surprised even me." },
    { name: "Sonal Verma", role: "Head of Learning and Development", co: "Wipro Technologies", track: "Corporate Training", b2b: true, init: "SV", text: "We partnered with ALB to upskill 8 client-facing managers before a major account expansion. The structured curriculum, small batches, and measurable progress reports made the investment very easy to justify to leadership." },
    { name: "Kiran Reddy", role: "MBBS Doctor", co: "UK Immigration Applicant", track: "Immigration Track", b2b: false, init: "KR", text: "I needed IELTS 7.5 for my UK GMC registration. ALB's dedicated IELTS module and the way they tackled my pronunciation and writing simultaneously, I hit 7.5 in my first sitting." },
    { name: "Pooja Iyer", role: "MBA Student → University of Exeter", co: "Academic Track", track: "Academic Track", b2b: false, init: "PI", text: "The academic writing modules genuinely changed how I structure arguments. University of Exeter sent my admission letter two weeks after I submitted my IELTS score. ALB got me there." },
    { name: "Ravi Chandran", role: "VP Client Services", co: "Mphasis", track: "Career Track", b2b: false, init: "RC", text: "English was never my weakness, presence was. ALB's Advanced module gave me the executive communication skills I needed to step into a VP role with confidence in front of international clients." },
    { name: "Tanisha Gupta", role: "Class 12, DPS RK Puram", co: "Junior Track", track: "Junior Track", b2b: false, init: "TG", text: "I used to panic in English debates and GDs. After ALB's Foundation module I placed second at my school MUN. The pronunciation work and structured speaking practice actually worked." },
  ],
  included: ["Class notes for every session", "Weekly 4-skill assignments", "Pronunciation and accent correction", "Guided speaking with feedback", "Professional email writing practice", "Mid-level formal assessments", "Full IELTS mock exams (all 4 bands)", "ALB Certificate (Foundation · Intermediate · Advanced)", "IELTS / PTE exam guidance and registration support", "+Beyond Soft Skills (2 weeks, free)", "Instructor access between classes", "Progress tracking throughout"],
  examRole: "IELTS and PTE Coach",
  faq: [
    { q: "Who should join Academy of Languages and Beyond (ALB)'s English programme?", a: "Academy of Languages and Beyond (ALB)'s English programme is designed for students, working professionals, job seekers, study-abroad aspirants, IELTS candidates, and anyone who wants to improve their spoken and written English. Whether you're starting from the basics or aiming for advanced fluency, the programme follows a structured progression that helps learners communicate confidently in real-world situations." },
    { q: "How long does it take to improve spoken English?", a: "Most learners notice a significant improvement in confidence, vocabulary, and speaking ability within the first 8–12 weeks of consistent practice. The exact timeline depends on your starting level, learning goals, and participation. Academy of Languages and Beyond (ALB)'s structured curriculum focuses on practical communication rather than memorisation, helping learners improve faster." },
    { q: "Can I join if my English is very weak?", a: "Yes. Academy of Languages and Beyond (ALB) offers a Beginner Foundation module specifically for learners with little or no confidence in English. The programme starts with pronunciation, vocabulary, sentence formation, and basic communication before progressing to more advanced levels." },
    { q: "Is this a spoken English course or a complete English programme?", a: "Academy of Languages and Beyond (ALB) is a complete English development programme. Students improve speaking, listening, reading, writing, pronunciation, communication confidence, workplace English, presentation skills, and interview readiness. The goal is not just to speak English, but to communicate effectively in academic, professional, and everyday situations." },
    { q: "How is Academy of Languages and Beyond (ALB) different from other spoken English classes?", a: "Most spoken English classes focus only on grammar or conversation practice. Academy of Languages and Beyond (ALB) combines language learning with communication training, confidence-building, public speaking, interview preparation, workplace communication, and soft skills development through the +Beyond programme." },
    { q: "Will this programme help me become fluent in English?", a: "Yes. Fluency is developed through structured speaking practice, guided conversations, real-world scenarios, pronunciation coaching, and communication activities throughout the programme. The focus is on helping learners express themselves naturally and confidently rather than simply memorising grammar rules." },
    { q: "What English level will I reach after completing the programme?", a: "Learners progress through internationally recognised CEFR levels, beginning from Foundation and advancing through A1, A2, and B1 communication proficiency. Progress depends on attendance, participation, and practice outside class." },
    { q: "Does Academy of Languages and Beyond (ALB) provide IELTS preparation?", a: "Yes. Academy of Languages and Beyond (ALB) offers a dedicated IELTS Advantage module covering Listening, Reading, Writing, and Speaking. Students receive strategy training, practice tests, personalised feedback, and mock exams designed to help improve overall band scores." },
    { q: "What IELTS score can I expect after completing the IELTS module?", a: "IELTS scores vary based on a learner's starting level and effort. The programme is designed to help serious learners target competitive band scores required for study abroad, immigration, and professional opportunities." },
    { q: "Is IELTS preparation included in the English programme?", a: "Students can choose the IELTS Advantage pathway if their goal is study abroad, immigration, or international opportunities. This specialised module focuses specifically on IELTS exam requirements and scoring strategies." },
    { q: "Can this course help me prepare for interviews?", a: "Yes. Interview preparation is integrated into the advanced stages of the programme and expanded further through the +Beyond Global Confidence Programme. Students learn how to answer questions confidently, structure responses, improve professional communication, and perform effectively during interviews." },
    { q: "Will this programme help me speak confidently at work?", a: "Absolutely. The programme includes workplace communication, business conversations, meetings, presentations, email writing, professional vocabulary, and communication skills required in modern workplaces." },
    { q: "Can English communication skills improve career opportunities?", a: "Strong English communication skills are among the most requested skills by employers worldwide. Effective communication can improve interview performance, workplace confidence, leadership opportunities, client interactions, and career progression." },
    { q: "Do I need perfect grammar before I start speaking English?", a: "No. One of the biggest misconceptions is that learners must master grammar before speaking. At Academy of Languages and Beyond (ALB), learners begin speaking from the start while improving grammar naturally through structured communication practice and feedback." },
    { q: "Why do many learners understand English but struggle to speak it?", a: "This usually happens because learners spend years studying English academically without sufficient speaking practice. Academy of Languages and Beyond (ALB) focuses on active communication, helping learners convert passive knowledge into real-world speaking ability." },
    { q: "What is the +Beyond Global Confidence Programme?", a: "+Beyond is Academy of Languages and Beyond (ALB)'s signature soft-skills programme. It focuses on public speaking, presentation skills, interview readiness, professional communication, personal branding, and confidence-building to help learners succeed beyond language learning." },
    { q: "Are classes live or recorded at Academy of Languages and Beyond (ALB)?", a: "All classes at Academy of Languages and Beyond (ALB) are conducted live by experienced instructors in small batches. Session recordings are also shared with enrolled learners for revision and practice." },
    { q: "How many students are there in each batch?", a: "Academy of Languages and Beyond (ALB) maintains small cohorts to ensure personalised attention, speaking opportunities, individual feedback, and active participation for every learner." },
    { q: "Will I receive a certificate after completing the programme?", a: "Yes. Learners receive Academy of Languages and Beyond (ALB) completion certificates at milestone levels. Students pursuing IELTS preparation also receive mock assessment reports and performance feedback throughout the programme." },
    { q: "Can I attend a trial class before enrolling?", a: "Yes. Academy of Languages and Beyond (ALB) offers a free trial class so learners can experience the teaching methodology, meet the instructor, and understand the programme before making a decision." },
  ],
  ctaH: "Your English Story Starts Here.",
  ctaS: "Choose your track. Book a free trial class. No commitment needed.",
};

export const GERMAN: CourseData = {
  lang: "German", modalKey: "German Language",
  accent: "#B45309", al: "#FBBF24",
  heroImage: "/images/hero-images/german.png",
  ew: "German · For Study, Career and Global Opportunities",
  h1a: "German That Opens", h1b: "Possibilities.",
  hs: "A1 to B2 in 36 weeks. Build practical German skills, real-world confidence, and the communication abilities needed for higher education, career growth, and life in German-speaking environments.",
  chips: ["36 Weeks", "Certified Trainers", "Small Cohorts", "Soft Skills Included", "Communication Classes"],
  stats: [{ n: "36", l: "Weeks" }, { n: "Certified", l: "Trainers" }, { n: "Small", l: "Cohorts" }, { n: "Soft-skills", l: "Included" }, { n: "Communication", l: "Classes" }],
  sections: {
    tracks: { eyebrow: "Built Around Real Outcomes", a: "Why Are You ", b: "Learning German?", sub: "Whether your goal is higher education, international career opportunities, immigration, or personal growth, ALB helps you learn German with a clear purpose and structured progression." },
    journey: { eyebrow: "Your Journey", a: "From First Words to ", b: "Real-World Confidence.", sub: "Progress through a structured A1–B2 pathway designed to help you communicate effectively, achieve your goals, and thrive in German-speaking environments around the world." },
    curriculum: { eyebrow: "The Curriculum", a: "More Than German. ", b: "Skills For Life, Work and Opportunity.", sub: "Every level combines language development, communication practice, exam readiness, and confidence-building. By the time you reach B2, you're prepared not only to use German, but to succeed in German-speaking academic, professional, and everyday environments." },
    outcomes: { eyebrow: "Learning Outcomes", a: "Where German ", b: "Can Take You.", sub: "By the end of your journey, you'll have more than language skills. You'll have the confidence, communication ability, and credentials to pursue opportunities across education, careers, travel, and international life." },
    usps: { eyebrow: "The ALB Difference", a: "We Don't Just ", b: "Teach German", sub: "Most language institutes focus on grammar and exams. ALB combines language learning, communication skills, and professional development to help learners succeed beyond the classroom." },
    comparison: { eyebrow: "Why Learners Choose ALB", a: "Not All Language Courses ", b: "Are Equal.", sub: "The difference isn't just what you learn. It's what you become." },
    reviews: { sub: "From university admissions and immigration goals to promotions and career growth, our learners use German to unlock opportunities that matter." },
    instructors: { eyebrow: "Learn From Experts", a: "Language Coaches. ", b: "Communication Mentors.", sub: "Our instructors help you develop not only language proficiency, but also the confidence and communication skills needed to succeed in academic, professional, and international environments." },
  },
  tracks: [
    { icon: "flight", name: "Immigration Track", color: "#B45309", pop: true, forText: "Germany work visa, Blue Card, Opportunity Card, Ausbildung, and family reunion applicants needing Goethe A1, B1, or B2 as recognised documentation for their pathway.", exams: ["Goethe A1", "Goethe B1", "Goethe B2"] },
    { icon: "school", name: "Academic Track", color: "#7C3AED", pop: false, forText: "Students targeting German universities, TU Munich, LMU, RWTH Aachen, for Bachelor's or Master's programmes requiring DSH 2 or TestDaF TDN 4.", exams: ["Goethe B2", "TestDaF", "DSH"] },
    { icon: "work", name: "Career Track", color: "#059669", pop: false, forText: "Working professionals in German-speaking companies, global roles with German clients, or multilingual environments needing professional-grade German.", exams: ["Goethe B1", "Goethe B2", "TELC"] },
    { icon: "rocket", name: "Sprint Track", color: "#D97706", pop: false, forText: "Learners with a fixed deadline, a visa window, admission cut-off, or job offer, who need to reach their target German level fast, without sacrificing depth or confidence.", exams: ["Goethe A1–B2", "Fast-track"] },
  ],
  journey: [
    { l: "A1", w: "8 Weeks", t: "Foundations", s: "Build essential vocabulary, pronunciation, and everyday communication skills." },
    { l: "A2", w: "8 Weeks", t: "Everyday Confidence", s: "Handle common situations independently and communicate more naturally." },
    { l: "B1", w: "10 Weeks", t: "Independent Communication", s: "Express opinions, discuss experiences, and navigate professional and social interactions." },
    { l: "B2", w: "10 Weeks", t: "Advanced Fluency", s: "Communicate confidently in academic, workplace, and international settings." },
    { l: "★", w: "2 Weeks", t: "Global Confidence", s: "Presentation skills, interview readiness, and professional confidence." },
  ],
  curriculum: [
    { label: "Module 1", title: "German Foundations", badge: "A1 · Goethe A1", weeks: "8 Weeks", desc: "Start from zero and build a strong foundation in German. Learn essential vocabulary, pronunciation, sentence structure, and everyday communication skills needed for basic conversations and real-world interactions.", topics: [
      { t: "Introductions and Personal Information", i: ["Introducing yourself and others", "Nationality, profession, and personal details", "Basic conversation starters", "German pronunciation fundamentals"] },
      { t: "Daily Life and Everyday Communication", i: ["Talking about routines and schedules", "Days, dates, and time expressions", "Family, relationships, and social interactions", "Common everyday vocabulary"] },
      { t: "Shopping, Food and Services", i: ["Ordering food and drinks", "Shopping conversations", "Prices, quantities, and transactions", "Interacting with service providers"] },
      { t: "Travel and Local Navigation", i: ["Asking for and giving directions", "Transportation vocabulary", "Booking tickets and reservations", "Handling common travel situations"] },
    ], assess: "Week 4 grammar and vocabulary assessment · Week 7 communication assessment · Week 8 Goethe-style mock and ALB Level 1 Certificate" },
    { label: "Module 2", title: "Everyday Confidence", badge: "A2 · Goethe A2", weeks: "8 Weeks", desc: "Develop the ability to manage everyday situations independently. Learn to communicate in travel, study, work, and administrative environments while building confidence in speaking, listening, reading, and writing.", topics: [
      { t: "Travel, Transport and City Life", i: ["Travel planning and bookings", "Public transportation vocabulary", "Navigating cities and public services", "Handling real-life travel situations"] },
      { t: "Past Experiences and Storytelling", i: ["Talking about past events", "Describing experiences and achievements", "Narrating personal and professional journeys", "Expressing opinions and preferences"] },
      { t: "Health, Housing and Daily Administration", i: ["Healthcare and appointments", "Accommodation and housing vocabulary", "Basic administrative communication", "Understanding common forms and documents"] },
      { t: "Written Communication", i: ["Formal and informal emails", "Requests, enquiries, and confirmations", "Communication with institutions and organisations", "Short reports and structured writing"] },
    ], assess: "Week 12 communication assessment · Week 15 writing and speaking evaluation · Week 16 Goethe-style mock and ALB Level 2 Certificate" },
    { label: "Module 3", title: "Independent Communication", badge: "B1 · Goethe B1", weeks: "10 Weeks", desc: "Build the confidence to communicate independently in academic, professional, and social environments. Develop the ability to express opinions, discuss ideas, and handle real-world German interactions with greater fluency.", topics: [
      { t: "Workplace and Professional Communication", i: ["Meetings and workplace discussions", "Professional introductions and networking", "Business communication fundamentals", "German workplace culture"] },
      { t: "Education and Future Planning", i: ["Academic discussions and presentations", "Study and career planning", "Goal-setting conversations", "University and training pathways"] },
      { t: "Opinions, Discussions and Debate", i: ["Expressing viewpoints confidently", "Agreeing and disagreeing respectfully", "Problem-solving conversations", "Structured discussions and group interaction"] },
      { t: "Practical German For Everyday Life", i: ["Managing appointments and services", "Handling official communication", "Community participation", "Social and professional interactions"] },
    ], assess: "Week 20 workplace communication assessment · Week 23 presentation evaluation · Week 26 Goethe B1-style mock and ALB Level 3 Certificate" },
    { label: "Module 4", title: "Advanced Fluency and Opportunity Readiness", badge: "B2 · Goethe B2 / TestDaF / DSH Readiness", weeks: "10 Weeks", desc: "Develop advanced German communication skills for higher education, professional environments, immigration pathways, and international opportunities. Learn to communicate clearly, confidently, and effectively in complex situations.", topics: [
      { t: "Advanced Communication and Fluency", i: ["Complex discussions and negotiations", "Presenting ideas with confidence", "Advanced listening and comprehension", "Natural spoken interaction"] },
      { t: "Academic and Professional German", i: ["Research and academic communication", "Formal presentations", "Professional reports and documentation", "Business correspondence"] },
      { t: "Current Affairs and Critical Thinking", i: ["Social, cultural, and economic topics", "Analysing and discussing complex issues", "Developing structured arguments", "Advanced reading comprehension"] },
      { t: "Exam Readiness", i: ["Goethe B2 preparation", "TestDaF task familiarisation", "DSH-style communication tasks", "Integrated speaking, listening, reading, and writing practice"] },
    ], assess: "Week 31 advanced communication assessment · Week 34 full skills evaluation · Week 36 Goethe B2 / TestDaF-style mock and ALB Level 4 Certificate" },
    { label: "Module 5", title: "+Beyond, Global Confidence Programme", badge: "Included With Every Programme", weeks: "2 Weeks", desc: "Go beyond language learning with ALB's signature soft-skills and communication programme. Develop the confidence, professionalism, and communication abilities needed to succeed in academic, professional, and international environments.", topics: [
      { t: "Public Speaking and Presentation Skills", i: ["Speaking confidently in front of groups", "Presentation structure and delivery", "Managing nervousness and hesitation", "Audience engagement techniques"] },
      { t: "Interview Readiness", i: ["Personal introductions", "Common interview scenarios", "Professional communication strategies", "Confidence-building exercises"] },
      { t: "Workplace Communication", i: ["Email etiquette", "Professional conversations", "Cross-cultural communication", "Collaboration and teamwork"] },
      { t: "Personal Growth and Confidence", i: ["Building a growth mindset", "Communication under pressure", "Leadership fundamentals", "Professional presence and self-confidence"] },
    ], assess: "Final presentation · Mock interview evaluation · Communication confidence review · ALB +Beyond Completion Certificate" },
  ],
  outcomes: [
    { i: "teacher", t: "Communicate confidently in German-speaking environments", s: "Everyday conversations, social, and real-world situations" },
    { i: "map", t: "Navigate everyday situations independently", s: "Travel, services, appointments, and daily life" },
    { i: "school", t: "Participate in academic and workplace discussions", s: "Seminars, meetings, presentations, and group work" },
    { i: "edit", t: "Prepare for internationally recognised German exams", s: "Goethe, TestDaF, and DSH readiness built in" },
    { i: "work", t: "Build professional communication skills", s: "Emails, reports, and workplace conversations" },
    { i: "mic", t: "Improve presentation and interview performance", s: "Speak with structure, clarity, and confidence" },
    { i: "globe", t: "Develop cross-cultural awareness", s: "Thrive in German, Austrian, and Swiss contexts" },
    { i: "rocket", t: "Become a confident global communicator", s: "Ready for opportunities anywhere in the world" },
  ],
  usps: [
    { i: "target", t: "Goal-Based Learning", b: "Choose a pathway aligned with your future ambitions." },
    { i: "people", t: "Small Cohorts", b: "Maximum attention. Maximum speaking practice." },
    { i: "teacher", t: "Communication Classes", b: "Dedicated sessions focused on practical speaking and fluency." },
    { i: "chat", t: "Continuous Doubt Support", b: "Ongoing guidance outside class whenever you need help." },
    { i: "edit", t: "Exam Readiness Built In", b: "Goethe and international exam preparation integrated into the programme." },
    { i: "rocket", t: "Beyond Language", b: "Soft skills, interview readiness, presentations, and workplace communication included at no extra cost." },
  ],
  comparison: [
    { f: "Learning pathways", g: "One generic German class", a: "Goal-based pathways aligned to your future" },
    { f: "Batch size", g: "20–40 students per class", a: "Small cohorts, real speaking time for everyone" },
    { f: "Communication skills", g: "Grammar and exams only", a: "Dedicated communication and fluency classes" },
    { f: "Exam preparation", g: "Sold as a separate add-on", a: "Goethe, TestDaF and DSH prep built into the journey" },
    { f: "Soft skills", g: "Not included", a: "+Beyond global confidence programme, free" },
    { f: "Doubt support", g: "Only during class", a: "Continuous support between sessions" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy, built for Indian learners" },
  ],
  reviews: [
    { name: "Vikram Nair", role: "Mechanical Engineer", co: "Germany Work Visa Applicant", track: "Immigration Track", b2b: false, init: "VN", text: "I needed Goethe B1 for my skilled worker visa. Most coaching centres gave me grammar tables and sent me home. ALB gave me German I could actually use, at the Ausländerbehörde, at work, and in daily life. Cleared B1 on my first attempt." },
    { name: "Shruti Kapoor", role: "Training Manager", co: "KPIT Technologies", track: "Corporate Training", b2b: true, init: "SK", text: "We enrolled 4 engineers in ALB's German Immigration Track before their Pune-to-Munich transfers. The structured curriculum and weekly progress updates gave us full visibility. All four cleared Goethe B1 within the programme timeline." },
    { name: "Aryan Shah", role: "Student → TU Munich", co: "Academic Track", track: "Academic Track", b2b: false, init: "AS", text: "TestDaF TDN 4 was my target for TU Munich admission. ALB's B2 module and the dedicated TestDaF preparation week were exactly what I needed. Cleared TestDaF with TDN 4 across all four skills. TU Munich accepted." },
    { name: "Kavitha Rao", role: "IT Consultant", co: "Family Reunion Visa", track: "Immigration Track", b2b: false, init: "KR", text: "I only needed Goethe A1 for my spouse's family reunion visa. ALB didn't oversell me a full programme, they helped me prepare specifically for A1 and I was ready in 8 weeks. Straightforward, honest, and effective." },
    { name: "Deepak Joshi", role: "VP HR", co: "Persistent Systems", track: "Corporate Partner", b2b: true, init: "DJ", text: "Persistent has been working with ALB for German language training for our Europe-bound engineers. What stands out is the seriousness of the curriculum. This isn't generic language coaching, it's career-specific preparation." },
    { name: "Aditi Mehta", role: "Class 10, Delhi Public School", co: "Junior Track", track: "Junior Track", b2b: false, init: "AM", text: "German was just a third language in school for me. After ALB I actually enjoy it. I cleared Goethe A2 last month and I'm continuing to B1. The grammar made sense for the first time, especially the case system." },
  ],
  included: ["Class notes for every session", "Weekly 4-skill assignments", "Pronunciation and case system practice", "Guided speaking with instructor feedback", "Writing corrections throughout", "Mid-level formal assessments", "Full mock exams at each level", "ALB Certificate (A1 · A2 · B1 · B2)", "Goethe / TestDaF / DSH exam guidance", "Exam registration support", "+Beyond Soft Skills (2 weeks, free)", "Progress tracking throughout"],
  examRole: "Goethe and TestDaF Coach",
  faq: [
    { q: "Is German worth learning in India?", a: "Yes. German is one of the most valuable foreign languages for students and professionals interested in higher education, engineering, technology, research, healthcare, and opportunities in Germany, Austria, and Switzerland." },
    { q: "How long does it take to learn German from A1 to B2?", a: "Academy of Languages and Beyond (ALB)'s structured German pathway helps learners progress from A1 to B2 in approximately 36 weeks while developing practical communication skills, exam readiness, and confidence in real-world situations." },
    { q: "Is German difficult to learn?", a: "German grammar is more structured than English, but it follows logical patterns that become easier with guided learning. With the right approach, learners can develop confidence in German faster than many expect." },
    { q: "What level of German is required for Germany immigration?", a: "Requirements vary depending on the visa category. Family reunification often requires Goethe A1, while some work and settlement pathways may require B1 or higher. Academy of Languages and Beyond (ALB)'s Immigration Track helps learners prepare for the relevant language requirements." },
    { q: "Which German exam should I take?", a: "The best exam depends on your goal. Goethe-Zertifikat is widely recognised internationally. TestDaF and DSH are commonly required for German university admissions. Academy of Languages and Beyond (ALB) guides learners toward the exam pathway that matches their objectives." },
    { q: "What level of German is required for studying in Germany?", a: "Many German-taught university programmes require B2, TestDaF, or DSH-level proficiency. Requirements vary by institution and programme. Academy of Languages and Beyond (ALB)'s Academic Track is designed to prepare students for these academic language requirements." },
    { q: "Can I get a job in Germany without speaking German?", a: "While some international roles operate in English, German language skills significantly improve employment opportunities, workplace integration, career progression, and day-to-day life in Germany." },
    { q: "Is German useful for engineers and STEM professionals?", a: "Yes. Germany is one of the world's leading economies and a global hub for engineering, manufacturing, automotive technology, research, healthcare, and innovation. German proficiency can create valuable professional opportunities." },
    { q: "What can I do with a B2 level in German?", a: "A B2 level enables learners to communicate confidently in academic, professional, and social settings. It is commonly accepted for university admissions, workplace communication, and advanced professional opportunities." },
    { q: "What makes Academy of Languages and Beyond (ALB) different from other German institutes?", a: "Academy of Languages and Beyond (ALB) combines structured German learning with communication classes, soft-skills development, interview readiness, doubt support, exam preparation, and specialised pathways for immigration, academics, careers, and accelerated learning." },
  ],
  ctaH: "Ready To Build Your Future Through German?",
  ctaS: "Whether you're preparing for higher education, career opportunities, immigration goals, or personal growth, ALB helps you learn German with confidence and purpose.",
};

export const SPANISH: CourseData = {
  lang: "Spanish", modalKey: "Spanish Language",
  accent: "#DC2626", al: "#FCA5A5",
  ew: "Spanish · A1 to B2 · Four Tracks",
  h1a: "Learn Spanish.", h1b: "Speak to the World.",
  hs: "A1 to B2 in 32 weeks. Four tracks, Academic, Career, Culture and Travel, and Junior. One vibrant language across 20+ countries, built for Indian learners.",
  chips: ["32 Weeks", "192 Hours", "Max 6 / Batch", "4 Tracks", "A1 to B2", "+Beyond Included"],
  stats: [{ n: "32", l: "Teaching Weeks" }, { n: "192", l: "Instruction Hours" }, { n: "6", l: "Max Per Batch" }, { n: "4", l: "Learning Tracks" }, { n: "500M", l: "Speakers Worldwide" }],
  tracks: [
    { icon: "school", name: "Academic Track", color: "#DC2626", pop: true, forText: "Students applying to universities in Spain or Latin America needing DELE B1/B2 for admission, plus learners pursuing Spanish as a major or research language.", exams: ["DELE B1", "DELE B2", "SIELE"] },
    { icon: "work", name: "Career Track", color: "#059669", pop: false, forText: "Professionals at multinationals, BPOs, and global companies serving Spanish-speaking markets, needing business Spanish for client communication and international roles.", exams: ["DELE B2", "SIELE"] },
    { icon: "flight", name: "Culture and Travel Track", color: "#7C3AED", pop: false, forText: "Travellers, content lovers, and lifelong learners wanting confident conversational Spanish for Spain, Latin America, film, music, and authentic cultural connection.", exams: ["DELE A2", "DELE B1"] },
    { icon: "rocket", name: "Sprint Track", color: "#D97706", pop: false, forText: "Designed for learners with urgent goals, visa deadlines, university applications, job opportunities, or upcoming exams, who need structured Spanish learning at an accelerated pace.", exams: ["DELE", "SIELE"] },
  ],
  journey: [
    { l: "A1", w: "6 Weeks", t: "Survival Spanish", s: "DELE A1 · Speak from day one" },
    { l: "A2", w: "6 Weeks", t: "Everyday Communication", s: "DELE A2 · Daily transactions" },
    { l: "B1", w: "8 Weeks", t: "Independent", s: "DELE B1 · Opinions and stories" },
    { l: "B2", w: "10 Weeks", t: "Fluent and Exam-Ready", s: "DELE B2 · University and career" },
    { l: "★", w: "2 Weeks", t: "+Beyond", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "Survival Spanish", badge: "A1 · DELE A1", weeks: "6 Weeks", desc: "Start speaking from day one. Spanish phonetics are kind to learners, build confidence to introduce yourself and handle everyday situations fast.", topics: [
      { t: "Greetings and Introductions", i: ["Tú vs usted", "Nationalities and professions", "Self-introduction for all contexts"] },
      { t: "Pronunciation and Phonetics", i: ["Spanish vowels and rolled r", "Reading aloud with confidence", "Castilian vs Latin American sounds"] },
      { t: "Numbers, Time and Dates", i: ["Prices and shopping", "Telling the time", "Days, months and scheduling"] },
      { t: "Daily Life and Food", i: ["Daily routine vocabulary", "Café and restaurant Spanish", "Ser vs estar essentials"] },
    ], assess: "Week 3 grammar check · Week 5 speaking test · Week 6 full mock + ALB Level 1 Certificate" },
    { label: "Module 2", title: "Everyday Communication", badge: "A2 · DELE A2", weeks: "6 Weeks", desc: "Handle travel, shopping, and daily life across the Spanish-speaking world. Communicate in familiar, everyday contexts with growing confidence.", topics: [
      { t: "Travel and Directions", i: ["Getting around a city", "Booking and transport vocabulary", "Asking for help confidently"] },
      { t: "Past Tenses", i: ["Pretérito perfecto and indefinido", "Narrating experiences", "Talking about holidays and events"] },
      { t: "Shopping and Services", i: ["Markets, sizes and bargaining", "Banking and post office", "Making complaints politely"] },
      { t: "Describing People and Places", i: ["Personality and appearance", "Comparisons", "Your city and country"] },
    ], assess: "Week 9 navigation test · Week 11 speaking and writing test · Week 12 full mock + ALB Level 2 Certificate" },
    { label: "Module 3", title: "Independent Communication", badge: "B1 · DELE B1", weeks: "8 Weeks", desc: "Express opinions, tell stories, and handle most situations while travelling, studying, or working in a Spanish-speaking environment. DELE B1 preparation begins.", topics: [
      { t: "Work and Education", i: ["Jobs and workplace vocabulary", "Study and academic life", "Future plans and ambitions"] },
      { t: "Subjunctive Introduced", i: ["Present subjunctive basics", "Wishes, doubts and emotions", "Giving advice and recommendations"] },
      { t: "Opinions and Society", i: ["News and current affairs", "Agreeing and disagreeing", "Argument and connectors"] },
      { t: "Culture and Media", i: ["Film, music and literature", "Regional varieties", "Idioms and natural speech"] },
    ], assess: "Week 16 media and opinion test · Week 19 formal writing and oral test · Week 20 full mock + ALB Level 3 Certificate" },
    { label: "Module 4", title: "Advanced Fluency and Exam Readiness", badge: "B2 · DELE B2", weeks: "10 Weeks", desc: "Achieve fluent, precise communication for university and professional contexts. Master complex grammar and prepare thoroughly for the DELE B2 exam.", topics: [
      { t: "Argumentation and Debate", i: ["Structured discussion", "Persuasive register", "Formal vs informal style"] },
      { t: "Academic and Business Writing", i: ["Essays and reports", "Formal emails and letters", "Coherence and cohesion"] },
      { t: "Advanced Grammar", i: ["Imperfect and past subjunctive", "Conditional sentences", "Error correction and accuracy"] },
      { t: "Exam Intensive (DELE B2)", i: ["Full exam strategy and timing", "Reading and listening tasks", "Oral + written simulations"] },
    ], assess: "Week 26 academic writing · Week 30 advanced speaking · Week 32 full mock + ALB Level 4 Certificate" },
    SOFT_SKILLS_MODULE,
  ],
  outcomes: [
    { i: "teacher", t: "Hold confident conversations across 20+ countries", s: "Spain, Mexico, Argentina, Colombia, and beyond" },
    { i: "movie", t: "Enjoy Spanish film, music, and series in the original", s: "Netflix originals, cinema, and Latin music without subtitles" },
    { i: "school", t: "Meet university admission requirements", s: "DELE B1/B2 for study in Spain and Latin America" },
    { i: "work", t: "Communicate professionally with Spanish-speaking markets", s: "Business Spanish, client calls, and international roles" },
    { i: "flight", t: "Travel the Spanish-speaking world with ease", s: "Confident, natural conversation wherever you go" },
    { i: "edit", t: "Achieve exam readiness across all four tracks", s: "DELE A1–B2 and SIELE, target score ready" },
    { i: "star", t: "Build a strong CEFR-credentialled portfolio", s: "ALB certificate + DELE credential at every completed level" },
    { i: "trophy", t: "Speak, write, and think in Spanish confidently", s: "Personal, academic, and professional readiness" },
  ],
  usps: [
    { i: "target", t: "Goal-Certified Track System", b: "Four outcome-specific tracks under one programme, Academic, Career, Culture and Travel, and Junior. Your curriculum emphasis and exam focus are tailored from day one." },
    { i: "globe", t: "Castilian and Latin American Spanish", b: "We teach both varieties and expose you to the full spectrum of accents, Spain, Mexico, Argentina, Colombia, so you understand Spanish wherever you meet it." },
    { i: "edit", t: "DELE Prep Built In, No Extra Fee", b: "DELE preparation is woven into the relevant levels of every track, with full mocks and exam coaching. No bolt-on fees." },
    { i: "people", t: "Max 6 Per Batch, Always", b: "Speaking time, feedback, and instructor attention are never diluted. You are not a face in a row of thirty." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic Spanish class", a: "Four outcome-specific tracks from day one" },
    { f: "Batch size", g: "20–40 students per class", a: "Max 6 per batch, by design" },
    { f: "Spanish varieties", g: "One accent only", a: "Castilian and Latin American, full spectrum" },
    { f: "Exam preparation", g: "Sold as a separate add-on", a: "DELE built into the levels, no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions), free" },
    { f: "Certifications", g: "Course completion certificate only", a: "CEFR credential at every completed level" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy, built for Indian learners" },
  ],
  reviews: [
    { name: "Ananya Krishnan", role: "Student → IE University Madrid", co: "Academic Track", track: "Academic Track", b2b: false, init: "AK", text: "I needed DELE B2 for my admission to IE University in Madrid. The structured writing modules and mock exams got me there on my first attempt. The classes were genuinely fun too." },
    { name: "Vikram Shetty", role: "Customer Success Lead", co: "Career Track", track: "Career Track", b2b: false, init: "VS", text: "My company expanded into Latin America and I needed Spanish for client calls. ALB's business-focused track had me handling real conversations in four months. The accent training across regions was the difference." },
    { name: "Meera Pillai", role: "Learning and Development Manager", co: "Concentrix India", track: "Corporate Training", b2b: true, init: "MP", text: "We trained 8 agents for a LATAM account. ALB's small batches and measurable progress reports made the investment easy to justify, and the team was genuinely conversational by the end." },
    { name: "Rohit Saxena", role: "Travel Creator", co: "Culture and Travel Track", track: "Culture and Travel Track", b2b: false, init: "RS", text: "I travel across South America for content and wanted real conversational Spanish, not textbook phrases. ALB delivered exactly that. I now film entire pieces in Spanish." },
    { name: "Fatima Sheikh", role: "Spanish Major", co: "Academic Track", track: "Academic Track", b2b: false, init: "FS", text: "The subjunctive used to terrify me. The way ALB built it up gradually, wishes, doubts, advice, finally made it natural. My university Spanish papers improved dramatically." },
    { name: "Aarav Gupta", role: "Class 10, DPS Bangalore", co: "Junior Track", track: "Junior Track", b2b: false, init: "AG", text: "I started Spanish for fun because of football and music, and ended up clearing DELE A2 in school. The classes never felt like homework, I actually looked forward to them." },
  ],
  included: ["Class notes for every session", "Weekly 4-skill assignments", "Pronunciation and accent practice", "Guided speaking with instructor feedback", "Writing corrections throughout", "Castilian and Latin American exposure", "Full mock exams at each level", "ALB Certificate at every level (A1–B2)", "DELE and SIELE exam guidance", "+Beyond Soft Skills (2 weeks, free)", "Instructor access between classes", "Progress tracking throughout"],
  examRole: "DELE / SIELE Coach",
  faq: [
    { q: "Which track should I choose?", a: "It depends on your goal. University in Spain or Latin America? → Academic Track. Career with Spanish-speaking markets? → Career Track. Travel, culture, and content? → Culture and Travel Track. School student? → Junior Track. Your Academy of Languages and Beyond (ALB) advisor will confirm the right track in your free trial class." },
    { q: "Do you teach Spain Spanish or Latin American Spanish?", a: "Both. The core grammar and vocabulary are shared, and we expose you to accents and usage across Spain, Mexico, Argentina, and Colombia so you can understand and be understood anywhere." },
    { q: "Is Spanish really one of the fastest languages to learn?", a: "For English speakers and most Indian learners, yes, phonetic spelling, familiar script, and shared vocabulary make early progress fast. Many learners reach confident A2 conversation within a few months." },
    { q: "Do I need prior Spanish knowledge to join?", a: "No. Complete beginners are welcome at A1 entry. If you have some Spanish, a short placement assessment will place you at A2, B1, or B2 entry directly." },
    { q: "Are classes online or in person?", a: "Fully online, instructor-led, and live. You attend from anywhere in India or abroad, morning, evening, and weekend batches available." },
  ],
  ctaH: "Your Spanish Journey Starts Here.",
  ctaS: "Choose your track. Book a free trial class. Speak to an advisor. Zero commitment.",
};

export const JAPANESE: CourseData = {
  lang: "Japanese", modalKey: "Japanese Language",
  accent: "#BE123C", al: "#FDA4AF",
  ew: "Japanese · N5 to N2 · Four Tracks",
  h1a: "Learn Japanese.", h1b: "Work With the World's 3rd Economy.",
  hs: "N5 to N2 in 38 weeks. Four tracks, IT and Tech, Work in Japan, Culture and Media, and Junior. From Hiragana to JLPT N2, built for Indian learners.",
  chips: ["38 Weeks", "228 Hours", "Max 6 / Batch", "4 Tracks", "N5 to N2", "+Beyond Included"],
  stats: [{ n: "38", l: "Teaching Weeks" }, { n: "228", l: "Instruction Hours" }, { n: "6", l: "Max Per Batch" }, { n: "4", l: "Learning Tracks" }, { n: "N2", l: "Work Standard" }],
  tracks: [
    { icon: "computer", name: "IT and Tech Track", color: "#BE123C", pop: true, forText: "Indian IT professionals targeting Japan-facing roles, bridge SE, offshore, and onsite positions where N2 Japanese commands a 40–60% salary premium.", exams: ["JLPT N3", "JLPT N2"] },
    { icon: "business", name: "Work in Japan Track", color: "#059669", pop: false, forText: "Engineers, specified-skilled workers (SSW), and professionals relocating to Japan, needing N3/N2 for work visas as Japan actively recruits internationally.", exams: ["JLPT N2", "JFT-Basic"] },
    { icon: "movie", name: "Culture and Media Track", color: "#7C3AED", pop: false, forText: "Anime, manga, gaming, and culture lovers wanting to enjoy Japanese media in the original and travel confidently across Japan.", exams: ["JLPT N5", "JLPT N4"] },
    { icon: "rocket", name: "Sprint Track", color: "#D97706", pop: false, forText: "Designed for learners with urgent goals, visa deadlines, university applications, job opportunities, or upcoming exams, who need structured Japanese learning at an accelerated pace.", exams: ["JLPT", "JFT-Basic"] },
  ],
  journey: [
    { l: "N5", w: "8 Weeks", t: "Scripts and Foundations", s: "JLPT N5 · Kana + 100 kanji" },
    { l: "N4", w: "8 Weeks", t: "Everyday Japanese", s: "JLPT N4 · 300 kanji" },
    { l: "N3", w: "10 Weeks", t: "Intermediate", s: "JLPT N3 · 650 kanji" },
    { l: "N2", w: "10 Weeks", t: "Work-Ready and Exam", s: "JLPT N2 · 1000+ kanji" },
    { l: "★", w: "2 Weeks", t: "+Beyond", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "Scripts and Foundations", badge: "N5 · JLPT N5", weeks: "8 Weeks", desc: "Master Hiragana and Katakana in the first weeks, build your first 100 kanji, and start handling daily survival Japanese with confidence.", topics: [
      { t: "Hiragana and Katakana", i: ["Both scripts mastered fast", "Reading and writing practice", "Pronunciation and pitch basics"] },
      { t: "Core Grammar", i: ["は / が / を particles", "です / ます polite forms", "Basic sentence structure"] },
      { t: "First 100 Kanji", i: ["Numbers, days and people", "Stroke order and radicals", "Reading everyday signs"] },
      { t: "Daily Survival", i: ["Self-introduction (jikoshoukai)", "Shopping and ordering food", "Time, dates and directions"] },
    ], assess: "Week 4 kana and kanji check · Week 7 speaking test · Week 8 full mock + ALB N5 Certificate" },
    { label: "Module 2", title: "Everyday Japanese", badge: "N4 · JLPT N4", weeks: "8 Weeks", desc: "Reach conversational ability, expand to ~300 kanji, and handle simple reading and writing for everyday and travel situations.", topics: [
      { t: "Verb Forms", i: ["て-form and connecting actions", "Plain (dictionary) form", "Past and negative forms"] },
      { t: "Expanded Kanji (~300)", i: ["Daily life and places", "Compound words", "Reading short passages"] },
      { t: "Everyday Conversation", i: ["Making plans and invitations", "Giving and asking permission", "Expressing wants and abilities"] },
      { t: "Travel and Situations", i: ["Transport and navigation", "Hotels and appointments", "Polite requests"] },
    ], assess: "Week 12 grammar test · Week 15 reading and speaking test · Week 16 full mock + ALB N4 Certificate" },
    { label: "Module 3", title: "Intermediate Japanese", badge: "N3 · JLPT N3", weeks: "10 Weeks", desc: "Bridge from beginner to advanced. Handle everyday situations fully, watch media with growing comprehension, and build toward ~650 kanji.", topics: [
      { t: "Keigo Foundations", i: ["Polite vs casual register", "Humble and honorific basics", "Workplace-appropriate speech"] },
      { t: "Intermediate Grammar", i: ["Conditionals (たら/ば/と)", "Giving and receiving (あげる/くれる)", "Causative and passive intro"] },
      { t: "Kanji to ~650", i: ["Abstract and compound kanji", "News and article reading", "Reading speed building"] },
      { t: "Media and Listening", i: ["Anime and drama comprehension", "Natural speed listening", "Note-taking strategies"] },
    ], assess: "Week 20 reading test · Week 24 listening and speaking test · Week 26 full mock + ALB N3 Certificate" },
    { label: "Module 4", title: "Advanced and Work-Ready", badge: "N2 · JLPT N2", weeks: "12 Weeks", desc: "Reach the standard most IT and global companies require. Read news and business documents, master keigo, and prepare thoroughly for JLPT N2.", topics: [
      { t: "Business and Keigo Mastery", i: ["Full honorific/humble system", "Emails and business documents", "Meetings and phone Japanese"] },
      { t: "Advanced Grammar", i: ["Nuanced expressions and nuance", "Formal written grammar", "Error correction and accuracy"] },
      { t: "Kanji to 1000+", i: ["Business and technical kanji", "News and report comprehension", "Speed reading for exams"] },
      { t: "Exam Intensive (JLPT N2)", i: ["Full exam strategy and timing", "Grammar, reading and listening", "Track-specific preparation"] },
    ], assess: "Week 30 business writing · Week 36 advanced listening · Week 38 full mock + ALB N2 Certificate" },
    SOFT_SKILLS_MODULE,
  ],
  outcomes: [
    { i: "translate", t: "Read and write all three Japanese scripts", s: "Hiragana, Katakana, and 1000+ kanji by N2" },
    { i: "computer", t: "Qualify for high-paying Japan-facing IT roles", s: "N2 commands a 40–60% salary premium for Indian engineers" },
    { i: "business", t: "Meet work-visa Japanese requirements", s: "N3/N2 for engineering, SSW, and onsite assignments" },
    { i: "movie", t: "Enjoy anime, manga, and games in the original", s: "Comprehension that turns your passion into fluency" },
    { i: "handshake", t: "Use keigo and business Japanese with confidence", s: "Emails, meetings, and professional etiquette" },
    { i: "edit", t: "Achieve exam readiness across all four tracks", s: "JLPT N5–N2 and JFT-Basic, target level ready" },
    { i: "star", t: "Build a strong JLPT-credentialled portfolio", s: "ALB certificate + JLPT credential at every completed level" },
    { i: "trophy", t: "Speak, read, and think in Japanese confidently", s: "Personal, academic, and professional readiness" },
  ],
  usps: [
    { i: "target", t: "Goal-Certified Track System", b: "Four outcome-specific tracks under one programme, IT and Tech, Work in Japan, Culture and Media, and Junior. Your curriculum emphasis and exam focus are tailored from day one." },
    { i: "translate", t: "Scripts and Kanji Without the Fear", b: "Kana in weeks, kanji built progressively with radicals and mnemonics. The writing system stops being a wall and becomes a system you actually understand." },
    { i: "computer", t: "IT and Business Japanese, Built In", b: "Bridge-SE vocabulary, keigo, and business documents are part of the upper levels, the exact Japanese that Japan-facing roles actually demand." },
    { i: "people", t: "Max 6 Per Batch, Always", b: "Speaking time, feedback, and instructor attention are never diluted. You are not a face in a row of thirty." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic Japanese class", a: "Four outcome-specific tracks from day one" },
    { f: "Batch size", g: "20–40 students per class", a: "Max 6 per batch, by design" },
    { f: "Kanji approach", g: "Rote memorisation, no system", a: "Radicals and mnemonics, built progressively" },
    { f: "Exam preparation", g: "Sold as a separate add-on", a: "JLPT built into the levels, no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions), free" },
    { f: "Business Japanese", g: "Not covered", a: "Keigo and IT vocabulary in upper levels" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy, built for Indian learners" },
  ],
  reviews: [
    { name: "Naveen Kumar", role: "Software Engineer", co: "Japan IT Placement", track: "IT and Tech Track", b2b: false, init: "NK", text: "I cleared JLPT N2 with ALB and landed a bridge-SE role in Tokyo with a huge salary jump. The kanji approach with radicals and the business Japanese modules made all the difference." },
    { name: "Shruti Iyer", role: "Learning and Development Partner", co: "Infosys Japan Practice", track: "Corporate Training", b2b: true, init: "SI", text: "We trained a cohort of engineers from N5 toward N3 before onsite deployment. ALB's structured curriculum and small batches meant genuine, measurable progress, not just attendance." },
    { name: "Aman Rajput", role: "SSW Applicant", co: "Work in Japan Track", track: "Work in Japan Track", b2b: false, init: "AR", text: "I needed N3 for my Specified Skilled Worker visa. ALB built my kanji and listening together, and the mock exams matched the real test closely. Cleared N3 first attempt." },
    { name: "Riya Sen", role: "Anime Translator", co: "Culture and Media Track", track: "Culture and Media Track", b2b: false, init: "RS", text: "I started just to watch anime without subtitles and ended up working as a freelance translator. The media-based listening practice was exactly how I learn best." },
    { name: "Harish Menon", role: "Engineering Manager", co: "Rakuten India", track: "IT and Tech Track", b2b: false, init: "HM", text: "Keigo terrified me until ALB broke the honorific system into something logical. My Japanese stand-ups and client emails are finally natural. N2 cleared on schedule." },
    { name: "Tanya Bhat", role: "Class 12, NPS Bangalore", co: "Junior Track", track: "Junior Track", b2b: false, init: "TB", text: "I went from zero to JLPT N4 in my final school years. The small batch meant I actually spoke every class, nothing like the huge online courses my friends tried." },
  ],
  included: ["Class notes for every session", "Hiragana, Katakana and kanji workbooks", "Weekly 4-skill assignments", "Guided speaking with instructor feedback", "Writing and kanji corrections throughout", "Media-based listening practice", "Full JLPT mock exams at each level", "ALB Certificate at every level (N5–N2)", "JLPT and JFT-Basic exam guidance", "+Beyond Soft Skills (2 weeks, free)", "Instructor access between classes", "Progress tracking throughout"],
  examRole: "JLPT Exam Coach",
  faq: [
    { q: "Which track should I choose?", a: "It depends on your goal. Japan-facing IT career? → IT and Tech Track. Relocating to Japan for work? → Work in Japan Track. Anime, media, and travel? → Culture and Media Track. School or college student? → Junior Track. Your Academy of Languages and Beyond (ALB) advisor will confirm the right track in your free trial class." },
    { q: "Do I really need N2 for jobs in Japan?", a: "For most IT, engineering, and professional roles, N2 is the standard requirement, and it commands a significant salary premium. Some Specified Skilled Worker routes accept N3 or JFT-Basic. We map the right target to your goal." },
    { q: "Is the kanji really that hard?", a: "Kanji is a system, not a memory test. We teach radicals, mnemonics, and patterns so each level adds kanji in a structured, retainable way, most learners are surprised how manageable it becomes." },
    { q: "Do I need prior Japanese knowledge to join?", a: "No. Complete beginners start at N5 with the scripts. If you already know some Japanese, a short placement assessment will place you at N4, N3, or N2 entry directly." },
    { q: "Are classes online or in person?", a: "Fully online, instructor-led, and live. You attend from anywhere in India or abroad, morning, evening, and weekend batches available." },
  ],
  ctaH: "Your Japanese Journey Starts Here.",
  ctaS: "Choose your track. Book a free trial class. Speak to an advisor. Zero commitment.",
};

export const KOREAN: CourseData = {
  lang: "Korean", modalKey: "Korean Language",
  accent: "#4F46E5", al: "#A5B4FC",
  ew: "Korean · Beginner to TOPIK II · Four Tracks",
  h1a: "Learn Korean.", h1b: "Ride the Hallyu Wave.",
  hs: "Hangul to TOPIK II in 34 weeks. Four tracks, Study in Korea, Career, K-Culture, and Junior. Authentic Korean for culture, career, and beyond, built for Indian learners.",
  chips: ["34 Weeks", "204 Hours", "Max 6 / Batch", "4 Tracks", "Hangul to TOPIK II", "+Beyond Included"],
  stats: [{ n: "34", l: "Teaching Weeks" }, { n: "204", l: "Instruction Hours" }, { n: "6", l: "Max Per Batch" }, { n: "4", l: "Learning Tracks" }, { n: "6", l: "TOPIK Levels" }],
  tracks: [
    { icon: "school", name: "Study in Korea Track", color: "#4F46E5", pop: true, forText: "Students applying to Korean universities and the Global Korea Scholarship (GKS), needing TOPIK 3–4 for admission and scholarship eligibility.", exams: ["TOPIK I", "TOPIK II"] },
    { icon: "work", name: "Career Track", color: "#059669", pop: false, forText: "Professionals targeting Samsung, Hyundai, LG, and Korean firms, needing workplace Korean and business etiquette for global and on-site roles.", exams: ["TOPIK II", "Business Korean"] },
    { icon: "music", name: "K-Culture Track", color: "#DB2777", pop: false, forText: "K-pop, K-drama, and K-cinema fans wanting to understand lyrics and dialogue in the original and connect authentically with Korean culture.", exams: ["TOPIK I", "Beginner"] },
    { icon: "rocket", name: "Sprint Track", color: "#D97706", pop: false, forText: "Designed for learners with urgent goals, visa deadlines, university applications, job opportunities, or upcoming exams, who need structured Korean learning at an accelerated pace.", exams: ["TOPIK I", "TOPIK II"] },
  ],
  journey: [
    { l: "가", w: "3 Weeks", t: "Hangul and Basics", s: "Read and write in 2 weeks" },
    { l: "1", w: "7 Weeks", t: "TOPIK I · Level 1", s: "Everyday phrases" },
    { l: "2", w: "8 Weeks", t: "TOPIK I · Level 2", s: "Daily conversation" },
    { l: "3·4", w: "14 Weeks", t: "TOPIK II", s: "Work and academic Korean" },
    { l: "★", w: "2 Weeks", t: "+Beyond", s: "Soft Skills · Free" },
  ],
  curriculum: [
    { label: "Module 1", title: "Hangul and Survival Korean", badge: "Beginner · Hangul", weeks: "6 Weeks", desc: "Master Hangul, the world's most logical alphabet, in about two weeks, then build the phrases, numbers, and self-introduction you need to start speaking.", topics: [
      { t: "Hangul Mastery", i: ["Consonants and vowels", "Syllable blocks and reading", "Pronunciation rules"] },
      { t: "Core Grammar", i: ["은/는 and 이/가 particles", "이에요 / 예요 sentences", "Basic word order"] },
      { t: "Numbers and Time", i: ["Sino-Korean and native numbers", "Telling the time and dates", "Prices and counting"] },
      { t: "Daily Survival", i: ["Self-introduction", "Ordering food and shopping", "K-drama everyday phrases"] },
    ], assess: "Week 2 Hangul check · Week 5 speaking test · Week 6 full mock + ALB Beginner Certificate" },
    { label: "Module 2", title: "TOPIK I, Foundations", badge: "TOPIK I · Levels 1–2", weeks: "8 Weeks", desc: "Handle daily conversations and common situations with simple reading and writing. Build toward the TOPIK I exam (Levels 1–2).", topics: [
      { t: "Everyday Conversation", i: ["Making plans and invitations", "Likes, wants and abilities", "Asking and giving directions"] },
      { t: "Verb and Tense Forms", i: ["Present, past and future", "Honorific 요 vs casual", "Connecting sentences"] },
      { t: "Reading and Writing", i: ["Short passages and messages", "Filling simple forms", "Vocabulary expansion"] },
      { t: "Situations and Culture", i: ["Restaurants and transport", "Phone and appointments", "Polite expressions"] },
    ], assess: "Week 10 grammar test · Week 13 reading and speaking test · Week 14 full mock + ALB TOPIK I Certificate" },
    { label: "Module 3", title: "TOPIK II, Intermediate", badge: "TOPIK II · Levels 3–4", weeks: "8 Weeks", desc: "Move into extended conversation and more complex grammar. Handle workplace and social situations and build toward TOPIK II Levels 3–4.", topics: [
      { t: "Honorifics and Register", i: ["Formal vs informal speech", "Honorific verbs and nouns", "Workplace-appropriate Korean"] },
      { t: "Intermediate Grammar", i: ["Connectors and clauses", "Reported speech", "Conditionals and reasons"] },
      { t: "Extended Communication", i: ["Opinions and explanations", "Describing experiences", "Longer reading passages"] },
      { t: "K-Media Comprehension", i: ["Drama and variety listening", "Lyrics and natural speech", "Note-taking strategies"] },
    ], assess: "Week 18 reading test · Week 21 listening and speaking test · Week 22 full mock + ALB TOPIK II (Lower) Certificate" },
    { label: "Module 4", title: "TOPIK II, Advanced and Exam", badge: "TOPIK II · Levels 5–6", weeks: "12 Weeks", desc: "Reach academic and professional Korean. Master complex grammar, business etiquette, and prepare thoroughly for higher TOPIK II bands.", topics: [
      { t: "Business and Academic Korean", i: ["Emails and business etiquette", "Presentations and meetings", "Formal written style"] },
      { t: "Advanced Grammar", i: ["Nuanced expressions", "Formal and literary forms", "Error correction and accuracy"] },
      { t: "Reading and Writing for TOPIK II", i: ["Essay and opinion writing", "Complex passage comprehension", "Speed and accuracy building"] },
      { t: "Exam Intensive (TOPIK II)", i: ["Full exam strategy and timing", "Listening, reading and writing", "Track-specific preparation"] },
    ], assess: "Week 26 essay writing · Week 32 advanced speaking · Week 34 full mock + ALB TOPIK II (Upper) Certificate" },
    SOFT_SKILLS_MODULE,
  ],
  outcomes: [
    { i: "translate", t: "Read and write Hangul fluently", s: "The world's most logical alphabet, mastered in two weeks" },
    { i: "school", t: "Meet Korean university and GKS requirements", s: "TOPIK 3–4 for admission and scholarship eligibility" },
    { i: "work", t: "Communicate professionally in Korean workplaces", s: "Business Korean, etiquette, and Samsung/Hyundai-ready skills" },
    { i: "mic", t: "Understand K-pop, K-drama, and K-cinema", s: "Lyrics and dialogue in the original, without subtitles" },
    { i: "people", t: "Use honorifics and register with confidence", s: "Formal, polite, and casual speech for every situation" },
    { i: "edit", t: "Achieve exam readiness across all four tracks", s: "TOPIK I and TOPIK II, target level ready" },
    { i: "star", t: "Build a strong TOPIK-credentialled portfolio", s: "ALB certificate + TOPIK credential at every completed stage" },
    { i: "trophy", t: "Speak, read, and think in Korean confidently", s: "Personal, academic, and professional readiness" },
  ],
  usps: [
    { i: "target", t: "Goal-Certified Track System", b: "Four outcome-specific tracks under one programme, Study in Korea, Career, K-Culture, and Junior. Your curriculum emphasis and exam focus are tailored from day one." },
    { i: "translate", t: "Hangul Fast-Track", b: "Korean's alphabet is the most logical writing system in the world. We have you reading and writing Hangul within two weeks, so real learning starts immediately." },
    { i: "edit", t: "TOPIK Prep Built In, No Extra Fee", b: "TOPIK I and II preparation is woven into the relevant stages, with full mocks and exam coaching. No bolt-on fees." },
    { i: "people", t: "Max 6 Per Batch, Always", b: "Speaking time, feedback, and instructor attention are never diluted. You are not a face in a row of thirty." },
  ],
  comparison: [
    { f: "Learning tracks", g: "One generic Korean class", a: "Four outcome-specific tracks from day one" },
    { f: "Batch size", g: "20–40 students per class", a: "Max 6 per batch, by design" },
    { f: "Hangul start", g: "Romanised crutches for months", a: "Real Hangul reading within two weeks" },
    { f: "Exam preparation", g: "Sold as a separate add-on", a: "TOPIK built into the stages, no extra fee" },
    { f: "Soft skills", g: "Not included", a: "+Beyond (2 weeks, 6 sessions), free" },
    { f: "Honorifics and register", g: "Glossed over", a: "Taught systematically for real situations" },
    { f: "Teaching approach", g: "Western textbooks, unchanged", a: "India-first pedagogy, built for Indian learners" },
  ],
  reviews: [
    { name: "Ishita Roy", role: "Student → Yonsei University", co: "Study in Korea Track", track: "Study in Korea Track", b2b: false, init: "IR", text: "I needed TOPIK Level 4 for my GKS scholarship and Yonsei admission. ALB's structured path from Hangul to TOPIK II got me there. The writing modules were exactly what the exam needed." },
    { name: "Sandeep Reddy", role: "Supply Chain Lead", co: "Career Track", track: "Career Track", b2b: false, init: "SR", text: "My role involves a Korean parent company. ALB's business Korean and honorific training changed how I work with HQ, emails and meetings are genuinely smoother now." },
    { name: "Pooja Menon", role: "Learning and Development Manager", co: "Hyundai India Supplier", track: "Corporate Training", b2b: true, init: "PM", text: "We trained a team to work with Korean counterparts. ALB's small batches and honorifics focus meant our people could navigate the etiquette, not just the words. Real, reportable progress." },
    { name: "Aditi Nair", role: "K-Content Creator", co: "K-Culture Track", track: "K-Culture Track", b2b: false, init: "AN", text: "I started because of K-dramas and BTS, and now I understand most of what I watch without subtitles. The Hangul fast-track had me reading in days, I couldn't believe it." },
    { name: "Rahul Pillai", role: "Exchange Student", co: "Study in Korea Track", track: "Study in Korea Track", b2b: false, init: "RP", text: "The honorific system used to confuse me completely. ALB broke it down by situation, formal, polite, casual, until it was natural. My semester in Seoul was so much easier for it." },
    { name: "Sara Khan", role: "Class 11, International School Mumbai", co: "Junior Track", track: "Junior Track", b2b: false, init: "SK", text: "I cleared TOPIK I while still in school. The classes were tiny so I spoke constantly, and learning through music and dramas never felt like studying." },
  ],
  included: ["Class notes for every session", "Hangul reading and writing workbook", "Weekly 4-skill assignments", "Guided speaking with instructor feedback", "Writing corrections throughout", "K-media listening practice", "Full TOPIK mock exams at each stage", "ALB Certificate at every stage (Beginner–TOPIK II)", "TOPIK I and II exam guidance", "+Beyond Soft Skills (2 weeks, free)", "Instructor access between classes", "Progress tracking throughout"],
  examRole: "TOPIK Exam Coach",
  faq: [
    { q: "Which track should I choose?", a: "It depends on your goal. University or GKS scholarship in Korea? → Study in Korea Track. Career with Korean firms? → Career Track. K-pop, K-drama, and culture? → K-Culture Track. School or college student? → Junior Track. Your Academy of Languages and Beyond (ALB) advisor will confirm the right track in your free trial class." },
    { q: "Is Hangul really that easy to learn?", a: "Yes. Hangul was scientifically designed to be learnable quickly, most of our students read and write it within two weeks. That means real Korean learning starts almost immediately, without romanised crutches." },
    { q: "What TOPIK level do I need?", a: "For most university admissions and the GKS scholarship, TOPIK Level 3–4 is required. Many jobs with Korean firms look for TOPIK II as well. We map the right target level to your specific goal." },
    { q: "Do I need prior Korean knowledge to join?", a: "No. Complete beginners start with Hangul. If you already know some Korean, a short placement assessment will place you at the right stage directly." },
    { q: "Are classes online or in person?", a: "Fully online, instructor-led, and live. You attend from anywhere in India or abroad, morning, evening, and weekend batches available." },
  ],
  ctaH: "Your Korean Journey Starts Here.",
  ctaS: "Choose your track. Book a free trial class. Speak to an advisor. Zero commitment.",
};
