export const siteConfig = {
  name: "Academy of Languages and Beyond",
  shortName: "ALB",
  tagline: "Go Global. Speak Fluent. Lead Bold.",
  description:
    "India's premier language and soft skills academy helping ambitious learners unlock international opportunities.",
  email: "info@learnwithalb.com",
  phone: "+91 98212 75843",
  address: "6th Floor, Tower-B, Bhutani Alphathum, Unit 603-604, Sector 90, Noida, Uttar Pradesh 201305",
  socials: {
    instagram: "https://www.instagram.com/learnwithalb/",
    linkedin: "https://www.linkedin.com/company/academy-of-languages-and-beyond/",
    youtube: "https://www.youtube.com/@learnwithalb",
    whatsapp: "https://wa.me/919821275843",
  },
} as const;

export const navItems = [
  { label: "Courses", href: "/courses" },
  { label: "+Beyond", href: "/soft-skills-training-online" },
  { label: "Junior", href: "/language-classes-kids-online" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Partner with ALB", href: "/partner-with-academy-of-languages-and-beyond" },
  { label: "About Us", href: "/about-us" },
] as const;

export const languages = [
  {
    code: "fr",
    name: "French",
    flagCode: "FR",
    tagline: "Open Europe, speak with elegance",
    href: "/courses/french-language-course-online",
    color: "#003087",
    levels: ["A1", "A2", "B1", "B2", "+Beyond"],
    tag: "Most Popular",
    comingSoon: false,
  },
  {
    code: "de",
    name: "German",
    flagCode: "DE",
    tagline: "The language of precision and opportunity",
    href: "/courses/german-language-course-online",
    color: "#DD0000",
    levels: ["A1", "A2", "B1", "B2", "+Beyond"],
    tag: "High Demand",
    comingSoon: false,
  },
  {
    code: "es",
    name: "Spanish",
    flagCode: "ES",
    tagline: "20+ countries, 1 vibrant language",
    href: "/courses/spanish",
    color: "#AA151B",
    levels: ["A1", "A2", "B1", "B2"],
    tag: "Rising Fast",
    comingSoon: true,
  },
  {
    code: "jp",
    name: "Japanese",
    flagCode: "JP",
    tagline: "Unlock the world's 3rd largest economy",
    href: "/courses/japanese",
    color: "#BC002D",
    levels: ["N5", "N4", "N3", "N2"],
    tag: null,
    comingSoon: true,
  },
  {
    code: "kr",
    name: "Korean",
    flagCode: "KR",
    tagline: "Ride the Hallyu wave",
    href: "/courses/korean",
    color: "#003478",
    levels: ["TOPIK 1", "TOPIK 2"],
    tag: null,
    comingSoon: true,
  },
  {
    code: "en",
    name: "English",
    flagCode: "EN",
    tagline: "Your passport to global education",
    href: "/courses/english-speaking-course-online-india",
    color: "#012169",
    levels: ["A1", "A2", "B1", "B2", "+Beyond"],
    tag: "Exam-focused",
    comingSoon: false,
  },
] as const;

export const stats = [
  { value: "5000+", label: "Learners Transformed" },
  { value: "95%", label: "Goal Achievement Rate" },
  { value: "12+", label: "Years of Excellence" },
  { value: "6", label: "Languages Offered" },
] as const;

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Toronto",
    course: "French · Immigration · Toronto",
    avatar: "PS",
    quote:
      "I joined ALB because I'd read that French could significantly help with Canada's Express Entry system, but I had no idea how the CRS or TEF Canada actually worked. The programme didn't just teach me French, they explained the whole immigration mechanism, why language matters for the score, what the CLB conversion means. Four months in, my French is at B1 and I have a clear path before I'm exam-ready. The soft skills sessions were something I didn't expect and genuinely valued.",
    rating: 5,
  },
  {
    name: "Aditya Menon",
    role: "Hyderabad",
    course: "French · Academic · Hyderabad",
    avatar: "AM",
    quote:
      "I was preparing for DELF B2 for my university applications and had tried self-studying for almost a year before joining ALB. The difference was the mock examination sessions, real timed practice with written corrections that told me specifically what to fix. The speaking mocks were nerve-wracking but essential, by the time I sat the real exam the format didn't feel unfamiliar. The student success team also spent time with me on my application statement, which I hadn't expected at all. That kind of support is rare.",
    rating: 5,
  },
  {
    name: "Kabir Malhotra",
    role: "Ontario",
    course: "French · Sprint · Ontario",
    avatar: "KM",
    quote:
      "I did Sprint because I had a hard deadline. What made ALB's Sprint different was their extensive TEF prep module. Daily classes are difficult to commit to when you have a full-time job, I won't pretend otherwise. But the progress is proportional to the commitment, and by week twelve I was producing French I couldn't have imagined at week one. The soft skills work woven into Sprint, presentation, speaking under pressure, was a smart addition to what could have just been a grammar sprint.",
    rating: 5,
  },
  {
    name: "Neha Iyer",
    role: "Mumbai",
    course: "French · Career · Mumbai",
    avatar: "NI",
    quote:
      "My work involves a lot of interaction with France-based teams and I was tired of being the person in the meeting who needed everything repeated or translated. The Career Track at ALB is genuinely workplace-focused, professional vocabulary, email structure, how to participate confidently in a meeting when you're not yet fluent. Three months in, I followed an entire client call without interpretation for the first time. The soft skills sessions extend well beyond French, I've used those frameworks in English presentations too.",
    rating: 5,
  },
  {
    name: "Sunita Kapoor",
    role: "Ghaziabad",
    course: "French · Junior · Ghaziabad",
    avatar: "SK",
    quote:
      "I was genuinely unsure whether my son would take to structured language learning or whether it would feel like extra school. It doesn't. He talks about his French class the way he talks about things he's chosen. The junior teaching approach is noticeably different, games, role-plays, storytelling, not grammar drills. What I value as a parent, beyond the French, is that he's developing confidence in communicating. He presented a small project in class last term and I watched a child who normally hates speaking stand up and do it without falling apart.",
    rating: 5,
  },
  {
    name: "Tanvi Krishnan",
    role: "Bangalore",
    course: "French · Career · Bangalore",
    avatar: "TK",
    quote:
      "I've always struggled with speaking up, in meetings, in class, anywhere with a group. I joined ALB for the French, not thinking it would change anything about that. But the small batch size means there's nowhere to hide, and somehow that gentle pressure started to shift something. Five months in, my French has progressed meaningfully, but what I keep telling people is the soft skills component, presentation skills, speaking under pressure, how to structure a thought before you say it out loud.",
    rating: 5,
  },
  {
    name: "Rohan Bose",
    role: "Kolkata",
    course: "French · Academic · Kolkata",
    avatar: "RB",
    quote:
      "My first application to a programme in France was unsuccessful. The language was acceptable but my statement of purpose didn't make sense to a French academic admissions committee. I mentioned this to ALB's student success team almost in passing. They took it seriously in a way I didn't expect. Over several sessions, they helped me understand what I'd missed and how to frame my background differently. I rebuilt my application. I applied again. I got in. I don't know if other language schools do this. It was the thing that made the biggest difference in the end.",
    rating: 5,
  },
  {
    name: "Vikram Sharma",
    role: "Pune",
    course: "German · Immigration · Pune",
    avatar: "VS",
    quote:
      "I'm planning to move to Germany on a skilled worker visa, and I needed German that was actually functional for that purpose, not tourist German, not classroom German, but the kind you need for official appointments and daily settlement scenarios. ALB's German Immigration track covers all of that. They explained the immigration pathway too, the Chancenkarte, how language proficiency feeds into visa requirements. The small batch means you get corrected constantly. I'm at A2, moving to B1, and Germany feels like a realistic near-term plan.",
    rating: 5,
  },
  {
    name: "Shruti Ramanathan",
    role: "Chennai",
    course: "German · Academic · Chennai",
    avatar: "SR",
    quote:
      "I'm applying for a Studienkolleg in Germany as a pathway to university, and my German needed to be strong enough to actually study in it. ALB's German Academic track is the first programme I've found that treats this goal seriously, building toward reading academic German, writing structured arguments, understanding lecture-style audio. It's not Duolingo. It's structured, demanding, and genuinely educational. The DAAD pathway context was something they explained clearly too. I feel genuinely prepared rather than just hopeful.",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    role: "Gurgaon",
    course: "German · Career · Gurgaon",
    avatar: "AN",
    quote:
      "My company works with clients across Germany and Austria, and my German was essentially zero when I started. Career Track at ALB is built around professional communication, business German, how to handle client calls and emails, how to contribute in a meeting when you're not yet fluent. The soft skills component is something I keep recommending to colleagues. Six months in my German is at B1 and I'm having actual professional conversations in it. Not perfect ones. Real ones. That distinction matters.",
    rating: 5,
  },
  {
    name: "Pooja Mehta",
    role: "Berlin",
    course: "German · Sprint · Berlin",
    avatar: "PM",
    quote:
      "Chose Sprint because I had no choice, I needed to reach a functional German level within a specific timeline for a visa-related reason. Daily classes with ALB's German Sprint track are intense and I won't sugarcoat that. By week ten, I was producing German sentences I couldn't have imagined in week one. The soft skills sessions, managing communication under pressure, speaking without shutting down when you make errors, were particularly useful in German, where fear of mistakes can really hold you back.",
    rating: 5,
  },
  {
    name: "Ravi Gupta",
    role: "Mumbai",
    course: "German · Junior · Mumbai",
    avatar: "RG",
    quote:
      "My daughter takes German at school as a second language and was struggling with it. I enrolled her in ALB's Junior track expecting it to function like tuition. It's been more than that. The way they teach at this age is genuinely different from a school classroom, more interactive, more oral practice, more real-world contexts. Her school grades have improved but more importantly she's less anxious about German. She used to dread German class. Now she doesn't. That change in attitude is worth more to me than any particular grade.",
    rating: 5,
  },
  {
    name: "Meera Joshi",
    role: "Bengaluru",
    course: "English · IELTS Advantage · Bengaluru",
    avatar: "MJ",
    quote:
      "I'd sat IELTS twice before joining ALB and couldn't clear the band I needed, specifically my Writing score kept pulling the overall down. The IELTS Advantage track treated this as a specific, diagnosable problem, not a general 'practise more' situation. I understood why a sentence wasn't working, not just that it was wrong. The speaking mock sessions were the other thing that made a real difference. I sat the exam after the programme and cleared the band I needed.",
    rating: 5,
  },
  {
    name: "Sana Khan",
    role: "Lucknow",
    course: "English · Communication · Lucknow",
    avatar: "SK",
    quote:
      "I can read and understand English well but speaking it confidently in professional settings has always been a struggle since my schooling was from UP Board. The English Communication track addressed this directly, not grammar from scratch, but functional, real-world communication practice with consistent correction. After about three months I handled a client presentation in English I would not have been able to do before, not because my grammar changed dramatically but because my relationship with speaking under pressure changed.",
    rating: 5,
  },
  {
    name: "Nikhil Reddy",
    role: "Hyderabad",
    course: "English · Career Lab · Hyderabad",
    avatar: "NR",
    quote:
      "I joined Career English Lab specifically for the professional communication dimension, my English was functional but my writing was too casual for the level I was trying to operate at. The Lab is designed for exactly this: professional email register, business writing that's clear and direct, meeting language, stakeholder communication. The soft skills sessions have been the most valuable component, how to handle difficult conversations, how to present proposals, how to structure a negotiation. I've recommended this to two colleagues already.",
    rating: 5,
  },
  {
    name: "Divya Kulkarni",
    role: "Calgary",
    course: "French · Immigration · Calgary",
    avatar: "DK",
    quote:
      "I want to write specifically about the soft skills component because it's not something I've seen other language institutes take seriously in this way. Interview preparation, presentation skills, public speaking basics, how to communicate under pressure, these are woven into every ALB programme as a standard part of the curriculum, not an upsell. I've attended workshops at my company that cost significantly more and covered this material less practically. I joined for French. I'm leaving with a noticeably different relationship with professional communication.",
    rating: 5,
  },
  {
    name: "Amit Sehgal",
    role: "Delhi",
    course: "German · Small Batch · Delhi",
    avatar: "AS",
    quote:
      "I've tried three language institutes in the last four years. The one difference that matters most is batch size. At the others I was one of fifteen to twenty learners. I might speak once in a session, get a correction once a week. At ALB the cap is genuinely small, five to six people. I speak every session. I get corrected every session. Six months of ALB's German has produced more functional language ability than eighteen months at two other institutes combined. I genuinely wish I'd found this sooner.",
    rating: 5,
  },
  {
    name: "Ananya Pillai",
    role: "Bengaluru",
    course: "French and German · Career · Bengaluru",
    avatar: "AP",
    quote:
      "I completed the French Career track first and then started German, same institute, same teaching philosophy, different trainers. The CEFR-aligned progression means my French A2 concepts helped me understand the structural logic of German A1 more quickly, which sounds counterintuitive but genuinely worked. ALB has become my long-term language partner. I'm now in French B1 and German A2 simultaneously, which would have seemed impossible to me two years ago.",
    rating: 5,
  },
  {
    name: "Priyanka Desai",
    role: "Mumbai",
    course: "Junior · French + German · Mumbai",
    avatar: "PD",
    quote:
      "Both my children are enrolled at ALB, one in Junior French, one in Junior German. The reasons are partly practical (future educational options, study abroad, the cognitive benefits of multilingualism) and partly instinctive. What ALB's junior programme does well is hold the balance between structure and joy. These are not grammar classes with a friendly teacher. They are genuinely designed for how children engage, through stories, games, performances, projects. Worth every bit of the commitment.",
    rating: 5,
  },
  {
    name: "Jasleen Kaur",
    role: "Chandigarh",
    course: "French · Immigration · Chandigarh",
    avatar: "JK",
    quote:
      "I'm going to be honest: I didn't expect to feel this way about a language school. What I got was a programme that treats the reason I'm learning French, Canada, PR, a different life, as part of the educational context rather than just my personal problem. The immigration pathway explanation was thorough and clear. The French teaching is rigorous and consistent. The small batch means the trainer actually knows my name and my specific gaps. And the student success team has answered questions about my immigration journey that weren't strictly about language at all.",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    q: "What languages does Academy of Languages and Beyond (ALB) teach?",
    a: "Academy of Languages and Beyond (ALB) teaches French, German, and English, each as a structured online course running from beginner (A1) to upper-intermediate (B2) level. Every language is offered across three goal-specific tracks: Immigration, Academic, and Career, so the curriculum aligns with where you're actually headed. A Soft Skills module (+Beyond) is also included as part of every language course, not sold separately.",
  },
  {
    q: "Can I learn French, German, or English online from India?",
    a: "Yes, all Academy of Languages and Beyond (ALB) courses are delivered entirely online through live, instructor-led sessions three times a week. Every batch is capped at 12 students to ensure speaking time and personalised attention for every learner. Whether you're in a metro or a smaller city, the full Academy of Languages and Beyond (ALB) curriculum, including exam preparation and the +Beyond soft skills module, is accessible from anywhere in India.",
  },
  {
    q: "How long does it take to go from beginner to B2 level in a language?",
    a: "At Academy of Languages and Beyond (ALB), the full journey from A1 beginner to B2 upper-intermediate takes 36 weeks across four levels for French and German, approximately nine months of consistent study. Each level runs eight to ten weeks, with three live sessions per week plus daily AI-powered speaking practice. Individual timelines vary based on prior language exposure and consistency of practice.",
  },
  {
    q: "What is the CEFR language level system, and which level do I need?",
    a: "CEFR (Common European Framework of Reference for Languages) is the international standard for measuring language ability, running from A1 (complete beginner) to C2 (near-native). Most immigration pathways require B1 or B2. University admissions typically require B2. Academy of Languages and Beyond (ALB)'s courses are fully aligned to CEFR levels, with each level ending in an Academy of Languages and Beyond (ALB) certificate matched to the corresponding CEFR standard.",
  },
  {
    q: "Which language should I learn for Canada immigration, French or English?",
    a: "Both are valuable but serve different pathways. French carries additional Comprehensive Ranking System points in Express Entry and opens access to Quebec immigration streams. English, measured through IELTS or equivalent exams, is required for most federal immigration pathways. Academy of Languages and Beyond (ALB) teaches both, allowing learners to build a combined French and English profile for the strongest possible Canadian immigration outcome.",
  },
  {
    q: "Does learning French or German improve my chances of getting a job abroad?",
    a: "Yes, measurably. French opens career opportunities across Canada, France, Belgium, Switzerland, and Francophone Africa. German is increasingly required for skilled worker immigration, with B1 a formal entry requirement for many roles. Beyond visa pathways, multilingual professionals report broader role availability in international companies. Academy of Languages and Beyond (ALB)'s Career Track builds language skills alongside the professional communication needed to use them effectively in a real workplace.",
  },
  {
    q: "What exams can I prepare for at Academy of Languages and Beyond (ALB)?",
    a: "Academy of Languages and Beyond (ALB) prepares learners for the full range of internationally recognised language examinations: DELF (A1 to B2) and DALF (C1) for French; Goethe-Zertifikat (A1 to B2), TestDaF, and DSH for German; and IELTS Academic and General Training for English. TEF Canada and TCF Canada preparation is built into the French B1 and B2 levels. Exam preparation is included in every course, not sold separately.",
  },
  {
    q: "What makes Academy of Languages and Beyond (ALB) different from language apps like Duolingo or Babbel?",
    a: "Language apps build vocabulary and habit but have real limitations, no live instructor, no speaking practice under real conditions, no structured exam preparation, and no professional soft skills layer. Academy of Languages and Beyond (ALB) offers live instructor-led classes capped at 12 students, built-in preparation for internationally recognised certifications, and a +Beyond soft skills module, designed for learners with a real goal beyond the language itself.",
  },
] as const;

export const whyAlbPoints = [
  {
    icon: "target",
    title: "Goal-First Curriculum",
    desc: "We reverse-engineer your goal, visa, study abroad, job, travel, and build a learning path backwards from there.",
  },
  {
    icon: "teacher",
    title: "Native and Expert Faculty",
    desc: "Teach with a mix of native-speaker authenticity and India-context pedagogy. Zero compromise on quality.",
  },
  {
    icon: "chart",
    title: "Progress Tracking",
    desc: "Monthly assessments, speaking simulations, and a digital progress dashboard so you always know where you stand.",
  },
  {
    icon: "handshake",
    title: "Community and Support",
    desc: "Private Discord/WhatsApp communities, language exchange partners, and alumni networks spanning 30+ countries.",
  },
  {
    icon: "trophy",
    title: "Proven Results",
    desc: "95%+ of our learners achieve their stated goal within the promised timeframe. Verified. Not just claimed.",
  },
  {
    icon: "infinite",
    title: "Lifetime Access",
    desc: "Re-take any module, attend refresher sessions, and access updated content, forever. Your investment compounds.",
  },
] as const;

export const beyondModules = [
  {
    title: "Public Speaking Mastery",
    desc: "Command the room, from 5-person meetings to 500-seat auditoriums.",
    duration: "8 weeks",
    icon: "mic",
  },
  {
    title: "Business Communication",
    desc: "Write sharper emails, lead better meetings, negotiate with clarity.",
    duration: "6 weeks",
    icon: "work",
  },
  {
    title: "Personality Development",
    desc: "Build executive presence, emotional intelligence, and authentic confidence.",
    duration: "10 weeks",
    icon: "sparkle",
  },
  {
    title: "Leadership Presence",
    desc: "Inspire teams, handle conflict, and communicate vision at every level.",
    duration: "8 weeks",
    icon: "stars",
  },
  {
    title: "Interview Mastery",
    desc: "Crack any interview, MNCs, MBA admissions, visa panels, scholarships.",
    duration: "4 weeks",
    icon: "target",
  },
  {
    title: "Cross-Cultural Communication",
    desc: "Navigate global workplaces and social contexts with ease and empathy.",
    duration: "6 weeks",
    icon: "globe",
  },
] as const;

export const partnerTypes = [
  {
    title: "School and College Partners",
    desc: "Bring ALB's language and soft skills programmes to your campus. Custom curriculum, certified instruction.",
    icon: "institution",
  },
  {
    title: "Corporate Training Partners",
    desc: "Upskill your workforce with bespoke language and communication training for global-facing teams.",
    icon: "business",
  },
  {
    title: "Study Abroad Consultants",
    desc: "Refer clients preparing for language exams or needing language confidence for admission interviews.",
    icon: "flight",
  },
  {
    title: "Referral Partners",
    desc: "Earn competitive commissions for every successful enrolment you bring to ALB.",
    icon: "handshake",
  },
] as const;
