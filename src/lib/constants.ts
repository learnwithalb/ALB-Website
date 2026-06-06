export const siteConfig = {
  name: "Academy of Languages & Beyond",
  shortName: "ALB",
  tagline: "Go Global. Speak Fluent. Lead Bold.",
  description:
    "India's premier language & soft skills academy helping ambitious learners unlock international opportunities.",
  email: "hello@academyoflanguagesandbeyond.com",
  phone: "+91 98765 43210",
  address: "Mumbai, India",
  socials: {
    instagram: "https://instagram.com/albacademy",
    linkedin: "https://linkedin.com/company/albacademy",
    youtube: "https://youtube.com/@albacademy",
    whatsapp: "https://wa.me/919876543210",
  },
} as const;

export const navItems = [
  { label: "Courses", href: "/courses" },
  { label: "+Beyond", href: "/beyond" },
  { label: "Junior", href: "/junior" },
  { label: "Partner with ALB", href: "/partner" },
  { label: "About Us", href: "/about" },
] as const;

export const languages = [
  {
    code: "fr",
    name: "French",
    flagCode: "FR",
    tagline: "Open Europe, speak with elegance",
    href: "/courses/french",
    color: "#003087",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    tag: "Most Popular",
  },
  {
    code: "de",
    name: "German",
    flagCode: "DE",
    tagline: "The language of precision & opportunity",
    href: "/courses/german",
    color: "#DD0000",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    tag: "High Demand",
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
  },
  {
    code: "en",
    name: "English",
    flagCode: "EN",
    tagline: "Your passport to global education",
    href: "/courses/ielts",
    color: "#012169",
    levels: ["Foundation", "Academic", "General"],
    tag: "Exam-focused",
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
    role: "Software Engineer, moved to Paris",
    course: "French B2",
    avatar: "PS",
    quote:
      "ALB's French programme was transformative. Within 10 months I cleared DELF B2 and got my French work visa. The teachers make grammar feel intuitive, not intimidating.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "MBA Student, Frankfurt School",
    course: "German B1",
    avatar: "AM",
    quote:
      "I needed conversational German fast for my MBA. ALB's immersive approach got me to B1 in 8 months. I could hold real conversations at orientation — my classmates were amazed.",
    rating: 5,
  },
  {
    name: "Sneha Pillai",
    role: "Content Strategist",
    course: "+Beyond Public Speaking",
    avatar: "SP",
    quote:
      "The Beyond programme changed how I show up in meetings. I used to freeze during presentations. Now I'm facilitating workshops for 50-person teams with confidence.",
    rating: 5,
  },
  {
    name: "Rahul Joshi",
    role: "IIT Graduate, DAAD Scholar",
    course: "German A1–B1",
    avatar: "RJ",
    quote:
      "Got the DAAD scholarship and my German was a strong differentiator. ALB's structured curriculum and mock interviews made all the difference. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Kavya Nair",
    role: "Travel Blogger & Influencer",
    course: "Spanish A2",
    avatar: "KN",
    quote:
      "Learning Spanish at ALB opened Latin America to me. The cultural immersion angle in the curriculum is unique — you don't just learn the language, you fall in love with it.",
    rating: 5,
  },
  {
    name: "Siddharth Roy",
    role: "Corporate Trainer",
    course: "+Beyond Communication Mastery",
    avatar: "SR",
    quote:
      "The communication mastery module reshaped my entire training methodology. My session ratings jumped from 3.8 to 4.7 within two months of completing the programme.",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    q: "Do I need any prior language knowledge to enroll?",
    a: "Not at all. We welcome complete beginners. Our diagnostic placement test ensures you start at exactly the right level — whether that's A1 for total beginners or B1 if you have some prior exposure.",
  },
  {
    q: "Are classes online or offline?",
    a: "We offer both! Live online sessions (Zoom/Google Meet) with the same experienced faculty, plus offline batches at our Mumbai centre. Many learners prefer our hybrid model — attend from home on weekdays and come to the centre on weekends.",
  },
  {
    q: "How long does it take to reach B2 level in French?",
    a: "With consistent practice, most dedicated learners reach B2 from scratch in 14–18 months. Our intensive tracks can compress this to 10–12 months. Individual pace varies, which is why we build personalised study plans for every learner.",
  },
  {
    q: "Do you offer exam preparation (DELF, DALF, Goethe, IELTS)?",
    a: "Yes — exam prep is woven into every advanced batch. We offer dedicated DELF/DALF (French), Goethe-Institut (German), DELE (Spanish), JLPT (Japanese), TOPIK (Korean), and IELTS-specific programmes with past-paper analysis and mock tests.",
  },
  {
    q: "What makes ALB different from apps like Duolingo or Babbel?",
    a: "Apps are great for vocabulary drills. ALB gives you live human interaction, cultural nuance, exam strategy, speaking confidence, and a community. Our completion and goal-achievement rates are significantly higher because we hold you accountable and celebrate your milestones with you.",
  },
  {
    q: "Can I switch batches or pause my course?",
    a: "Yes. Life happens. You can switch batch timings with 48 hours' notice (subject to availability) and pause your course for up to 3 months for genuine emergencies. We're flexible because we've been students ourselves.",
  },
  {
    q: "Is there an instalment payment option?",
    a: "Absolutely. We offer 3-month EMI plans with zero interest on select courses. We believe cost should never be a barrier to language learning.",
  },
  {
    q: "What are the +Beyond programmes?",
    a: "+Beyond is our soft skills wing: Public Speaking, Business Communication, Personality Development, Leadership Presence, and Interview Mastery. These standalone courses are also available as add-ons for language students at a special bundled price.",
  },
] as const;

export const whyAlbPoints = [
  {
    icon: "target",
    title: "Goal-First Curriculum",
    desc: "We reverse-engineer your goal — visa, study abroad, job, travel — and build a learning path backwards from there.",
  },
  {
    icon: "teacher",
    title: "Native & Expert Faculty",
    desc: "Teach with a mix of native-speaker authenticity and India-context pedagogy. Zero compromise on quality.",
  },
  {
    icon: "chart",
    title: "Progress Tracking",
    desc: "Monthly assessments, speaking simulations, and a digital progress dashboard so you always know where you stand.",
  },
  {
    icon: "handshake",
    title: "Community & Support",
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
    desc: "Re-take any module, attend refresher sessions, and access updated content — forever. Your investment compounds.",
  },
] as const;

export const beyondModules = [
  {
    title: "Public Speaking Mastery",
    desc: "Command the room — from 5-person meetings to 500-seat auditoriums.",
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
    desc: "Crack any interview — MNCs, MBA admissions, visa panels, scholarships.",
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
    title: "School & College Partners",
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
