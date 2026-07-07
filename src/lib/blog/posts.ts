import type { BlogPost, Cluster, ClusterId } from "./types";

/**
 * Content architecture imported from the SEO roadmap: 5 pillar pages, each with
 * a cluster of supporting articles. Bodies are professional placeholders meant
 * to be expanded into full articles later — deliberately not AI filler.
 */

export const DEFAULT_AUTHOR = "ALB Academic Team";

export const CLUSTERS: Record<ClusterId, Cluster> = {
  "french-canada": {
    id: "french-canada",
    label: "French for Canada",
    pillarSlug: "french-language-requirements-canada-pr",
    accent: "#3b5bdb",
    icon: "translate",
    description:
      "French language requirements, TEF/TCF exams, and CLB scoring for Canadian PR and Express Entry.",
  },
  "delf-dalf": {
    id: "delf-dalf",
    label: "DELF & DALF Exam Prep",
    pillarSlug: "delf-exam-complete-guide",
    accent: "#0ea5e9",
    icon: "school",
    description:
      "Everything on the DELF and DALF exams — levels, format, preparation, and registration in India.",
  },
  "german-immigration": {
    id: "german-immigration",
    label: "German for Immigration & Study",
    pillarSlug: "german-language-requirements-germany",
    accent: "#d97706",
    icon: "public",
    description:
      "German language levels for skilled-worker visas, Ausbildung, and university admission.",
  },
  "ielts-english": {
    id: "ielts-english",
    label: "IELTS & English for Global Careers",
    pillarSlug: "ielts-score-requirements-by-country",
    accent: "#059669",
    icon: "record_voice_over",
    description:
      "IELTS band requirements, exam strategy, and professional English communication.",
  },
  "india-learning": {
    id: "india-learning",
    label: "Language Learning for Indians",
    pillarSlug: "learn-french-as-hindi-speaker",
    accent: "#7c3aed",
    icon: "menu_book",
    description:
      "India-first pedagogy: cognates, common mistakes, and realistic timelines for Indian learners.",
  },
};

const COURSE_BY_CLUSTER: Record<ClusterId, string[]> = {
  "french-canada": ["/courses/french-language-course-online"],
  "delf-dalf": ["/courses/french-language-course-online"],
  "german-immigration": ["/courses/german-language-course-online"],
  "ielts-english": ["/courses/english-speaking-course-online-india"],
  "india-learning": ["/courses/french-language-course-online", "/courses/german-language-course-online"],
};

interface PostInput {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  excerpt: string;
  cluster: ClusterId;
  isPillar?: boolean;
  category: string;
  tags: string[];
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  sections: { h2: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}

function mk(p: PostInput): BlogPost {
  const cluster = CLUSTERS[p.cluster];
  return {
    ...p,
    isPillar: p.isPillar ?? false,
    metaTitle: p.metaTitle,
    author: DEFAULT_AUTHOR,
    updatedAt: p.updatedAt ?? "2026-06-30",
    accent: cluster.accent,
    icon: cluster.icon,
    relatedCourses: COURSE_BY_CLUSTER[p.cluster],
  };
}

export const POSTS: BlogPost[] = [
  /* ───────────── Cluster 1 — French for Canada ───────────── */
  mk({
    slug: "french-language-requirements-canada-pr",
    isPillar: true,
    cluster: "french-canada",
    category: "French for Canada",
    title: "The Complete Guide to French Language Requirements for Canada PR",
    metaTitle: "French Language Requirements for Canada PR (2026 Guide)",
    description:
      "A complete, up-to-date guide to French language requirements for Canadian PR — TEF vs TCF, CLB scoring, Express Entry bonus points, and Quebec vs Federal pathways.",
    excerpt:
      "How French proficiency boosts your Canada PR profile — the exams, the CLB conversions, the bonus points, and the fastest route to the score you need.",
    tags: ["Canada PR", "French", "Express Entry", "TEF", "TCF"],
    keywords: [
      "french language requirements canada pr",
      "french for canada immigration",
      "express entry french points",
      "clb french",
    ],
    publishedAt: "2026-02-04",
    readingMinutes: 12,
    sections: [
      { h2: "Why French matters for Canadian immigration", body: "French proficiency can add up to 50 additional Comprehensive Ranking System (CRS) points under Express Entry and unlocks category-based draws. This section explains where French fits across federal and provincial pathways." },
      { h2: "Which French exams Canada accepts", body: "For immigration, Canada recognises the TEF Canada and TCF Canada. We compare their format, validity, and how each maps to the Canadian Language Benchmarks (CLB)." },
      { h2: "Understanding CLB and how French is scored", body: "Every skill — reading, writing, listening, speaking — is converted to a CLB level. Here we break down the conversion tables and the minimum levels that unlock CRS points." },
      { h2: "Express Entry bonus points for French", body: "NCLC 7 across all four abilities can add substantial points, with additional bonuses when paired with English. We map the exact point thresholds." },
      { h2: "Quebec vs Federal French pathways", body: "Quebec runs its own selection system with different French expectations. This section clarifies which pathway suits your profile." },
      { h2: "How to reach the required level with ALB", body: "A structured A1–B2 pathway with TEF/TCF preparation built in is the fastest reliable route. Learn how ALB's Immigration Track is designed around these outcomes." },
    ],
    faqs: [
      { q: "Do I need French for Canada PR?", a: "French is not mandatory for most federal pathways, but it can add up to 50 CRS points and open French-focused category draws, making it one of the highest-leverage ways to improve an Express Entry profile." },
      { q: "What CLB level do I need in French?", a: "NCLC/CLB 7 across all four abilities is the key threshold for meaningful Express Entry bonus points; higher levels increase your standing further." },
      { q: "TEF or TCF for Canada — which is better?", a: "Both are accepted for immigration. The best choice depends on question format preference and test availability; our TEF vs TCF guide compares them in detail." },
    ],
    related: [
      "tef-canada-vs-tcf-canada",
      "tef-b2-clb-points-express-entry",
      "quebec-vs-federal-french-requirements",
    ],
  }),
  mk({
    slug: "tef-canada-vs-tcf-canada",
    cluster: "french-canada",
    category: "French for Canada",
    title: "TEF Canada vs TCF Canada: Which Exam Should You Take in 2026?",
    description:
      "TEF Canada vs TCF Canada compared — format, scoring, validity, difficulty, and how to choose the right French exam for your Canadian immigration goal.",
    excerpt: "Two accepted exams, one decision. A side-by-side comparison of TEF and TCF Canada to help you pick the right one.",
    tags: ["TEF", "TCF", "Canada PR", "French"],
    keywords: ["tef canada vs tcf canada", "which french exam for canada", "tef or tcf"],
    publishedAt: "2026-02-11",
    readingMinutes: 8,
    sections: [
      { h2: "What TEF Canada and TCF Canada have in common", body: "Both are IRCC-approved, test the same four abilities, and convert to CLB. Here is the shared foundation before the differences." },
      { h2: "Key differences in format and scoring", body: "Question types, section timing, and scoring scales differ. This section lays them out in a comparison table." },
      { h2: "Which exam suits your strengths", body: "If you prefer multiple-choice comprehension versus structured production tasks, one exam may suit you better. We help you self-assess." },
      { h2: "Availability and booking in India", body: "Test centre availability and scheduling can be the deciding factor. Here is what to check before you commit." },
    ],
    faqs: [
      { q: "Is TEF or TCF easier?", a: "Neither is uniformly easier; difficulty depends on your strengths. Comprehension-focused candidates often prefer TCF's format, while others prefer TEF's production tasks." },
      { q: "Are both TEF and TCF valid for Express Entry?", a: "Yes. Both TEF Canada and TCF Canada are accepted by IRCC for Express Entry and most economic pathways." },
    ],
    related: ["french-language-requirements-canada-pr", "tef-canada-speaking-test", "tcf-canada-writing"],
  }),
  mk({
    slug: "tef-canada-speaking-test",
    cluster: "french-canada",
    category: "French for Canada",
    title: "TEF Canada Speaking Test: Format, Scoring, and Preparation Tips",
    description:
      "A breakdown of the TEF Canada speaking test (Expression Orale) — the two tasks, timing, scoring criteria, and a practical preparation plan for CLB 7+.",
    excerpt: "The Expression Orale section decoded — both tasks, what examiners score, and how to prepare for a CLB 7+ result.",
    tags: ["TEF", "Speaking", "French"],
    keywords: ["tef canada speaking", "expression orale tef", "tef speaking preparation"],
    publishedAt: "2026-02-18",
    readingMinutes: 7,
    sections: [
      { h2: "Structure of the TEF speaking section", body: "Two tasks — obtaining information and persuading — under time pressure. This section explains each role-play and its goal." },
      { h2: "How the speaking test is scored", body: "Examiners assess fluency, range, accuracy, and interaction. We translate the criteria into what to actually do in the room." },
      { h2: "A four-week speaking preparation plan", body: "Daily speaking practice with feedback is the single biggest lever. Here is a structured plan you can follow." },
    ],
    faqs: [
      { q: "How long is the TEF speaking test?", a: "The Expression Orale section runs about 15 minutes across two tasks, but preparation time and instructions extend the overall slot." },
      { q: "What score do I need for CLB 7 speaking?", a: "You need to fall within the TEF band that maps to NCLC/CLB 7; our guide includes the conversion so you can target the right score." },
    ],
    related: ["tef-canada-vs-tcf-canada", "french-language-requirements-canada-pr", "tef-b2-clb-points-express-entry"],
  }),
  mk({
    slug: "tcf-canada-writing",
    cluster: "french-canada",
    category: "French for Canada",
    title: "TCF Canada Writing: What Examiners Actually Look For",
    description:
      "Understand the TCF Canada writing section (Expression Écrite) — the three tasks, evaluation criteria, and how to structure responses that score CLB 7+.",
    excerpt: "The three writing tasks explained, plus the structure and register that consistently earn higher bands.",
    tags: ["TCF", "Writing", "French"],
    keywords: ["tcf canada writing", "expression ecrite tcf", "tcf writing tips"],
    publishedAt: "2026-02-25",
    readingMinutes: 7,
    sections: [
      { h2: "The three TCF writing tasks", body: "Each task increases in complexity — from a short message to a structured argument. We outline expectations for each." },
      { h2: "Evaluation criteria that move your band", body: "Coherence, register, and grammatical range matter more than length. This section shows where marks are won and lost." },
      { h2: "Templates and connectors that work", body: "A reliable structure and a bank of connectors reduce cognitive load on test day. Here are the ones we teach." },
    ],
    faqs: [
      { q: "How many writing tasks are in TCF Canada?", a: "The Expression Écrite section has three tasks of increasing difficulty, completed within a fixed overall time." },
      { q: "Does length affect my TCF writing score?", a: "Meeting the word range matters, but coherence, appropriate register, and grammatical accuracy influence your band far more than raw length." },
    ],
    related: ["tef-canada-vs-tcf-canada", "french-language-requirements-canada-pr", "tcf-canada-writing"],
  }),
  mk({
    slug: "tef-b2-clb-points-express-entry",
    cluster: "french-canada",
    category: "French for Canada",
    title: "How Many CLB Points Does TEF B2 Give You for Express Entry?",
    description:
      "TEF B2 explained in CLB terms — how a B2-level TEF result converts to CLB, the Express Entry points it unlocks, and how to maximise your CRS score.",
    excerpt: "What a TEF B2 actually converts to in CLB, and the Express Entry points it can add to your profile.",
    tags: ["TEF", "CLB", "Express Entry"],
    keywords: ["tef b2 clb points", "tef b2 express entry", "clb conversion tef"],
    publishedAt: "2026-03-03",
    readingMinutes: 6,
    sections: [
      { h2: "From TEF B2 to CLB levels", body: "CEFR B2 broadly aligns with CLB 7–9 depending on the exact score. This section clarifies the mapping." },
      { h2: "Points French adds to your CRS", body: "French results interact with your English scores and other factors. We show sample point calculations." },
      { h2: "Maximising the French bonus", body: "Reaching NCLC 7 across all abilities unlocks the larger bonus. Here is how to prioritise your preparation." },
    ],
    faqs: [
      { q: "Is TEF B2 enough for Express Entry?", a: "A B2-level TEF that maps to CLB 7 or above unlocks meaningful French bonus points, especially when combined with English proficiency." },
      { q: "How many CRS points can French add?", a: "French can add up to 50 CRS points under the current framework when the required benchmarks are met across all four abilities." },
    ],
    related: ["french-language-requirements-canada-pr", "tef-canada-vs-tcf-canada", "quebec-vs-federal-french-requirements"],
  }),
  mk({
    slug: "quebec-vs-federal-french-requirements",
    cluster: "french-canada",
    category: "French for Canada",
    title: "Quebec vs Federal French Requirements: What's the Difference?",
    description:
      "Quebec vs federal French requirements compared — how Quebec's selection differs from Express Entry, and which pathway matches your French level and goals.",
    excerpt: "Quebec runs its own rules. Here's how its French expectations differ from federal Express Entry — and which fits you.",
    tags: ["Quebec", "Canada PR", "French"],
    keywords: ["quebec french requirements", "quebec vs federal immigration french", "quebec french level"],
    publishedAt: "2026-03-10",
    readingMinutes: 7,
    sections: [
      { h2: "Two different selection systems", body: "Quebec selects immigrants independently of the federal Express Entry pool. This section frames the distinction." },
      { h2: "French expectations in Quebec pathways", body: "Quebec places heavier weight on French proficiency. We outline typical level expectations." },
      { h2: "Choosing the right pathway", body: "Your French level, ties, and timeline determine the better route. Here is a decision framework." },
    ],
    faqs: [
      { q: "Does Quebec require French?", a: "Quebec's programs strongly favour French proficiency and often expect higher French levels than federal economic pathways." },
      { q: "Can I apply to both Quebec and federal pathways?", a: "The systems are separate; strategy depends on your profile. Our advisors can help you evaluate both against your French level." },
    ],
    related: ["french-language-requirements-canada-pr", "tef-b2-clb-points-express-entry", "tef-canada-vs-tcf-canada"],
  }),

  /* ───────────── Cluster 2 — DELF / DALF ───────────── */
  mk({
    slug: "delf-exam-complete-guide",
    isPillar: true,
    cluster: "delf-dalf",
    category: "DELF & DALF",
    title: "The DELF Exam: The Complete Guide from A1 to B2",
    metaTitle: "DELF Exam Guide A1 to B2 (Format, Prep & Registration)",
    description:
      "A complete guide to the DELF exam from A1 to B2 — levels, format, scoring, preparation strategy, and how to register for DELF in India.",
    excerpt: "The DELF explained end to end — every level from A1 to B2, the format, the scoring, and a preparation roadmap.",
    tags: ["DELF", "French", "Exam Prep"],
    keywords: ["delf exam guide", "delf a1 to b2", "delf preparation", "delf levels"],
    publishedAt: "2026-01-14",
    readingMinutes: 11,
    sections: [
      { h2: "What is the DELF and who is it for?", body: "The DELF is an official French Ministry of Education diploma that never expires. This section explains its value and audience." },
      { h2: "DELF levels A1 to B2 explained", body: "Each level tests reading, writing, listening, and speaking at increasing complexity. We summarise expectations per level." },
      { h2: "Exam format and scoring", body: "Every DELF paper is scored out of 100 with a 50 pass mark and a minimum per section. Here is how it works." },
      { h2: "How to prepare for each level", body: "Preparation shifts from vocabulary to structured production as levels rise. We map a study plan by level." },
      { h2: "Registering for DELF in India", body: "Alliance Française centres administer DELF across India. See our dedicated centres guide for registration details." },
    ],
    faqs: [
      { q: "Does the DELF expire?", a: "No. DELF and DALF diplomas are valid for life, which makes them a strong long-term credential for study, work, and immigration." },
      { q: "What is the DELF pass mark?", a: "You need at least 50/100 overall, with a minimum of 5/25 in each of the four skills, to pass a DELF level." },
    ],
    related: ["delf-vs-dalf", "delf-a1-preparation", "delf-exam-centres-india"],
  }),
  mk({
    slug: "delf-vs-dalf",
    cluster: "delf-dalf",
    category: "DELF & DALF",
    title: "DELF vs DALF: Full Comparison and Which One You Need",
    description:
      "DELF vs DALF explained — the levels each covers (A1–B2 vs C1–C2), who needs which, and how to decide based on your study, work, or immigration goal.",
    excerpt: "DELF or DALF? Which diploma matches your level and your goal — a clear comparison.",
    tags: ["DELF", "DALF", "French"],
    keywords: ["delf vs dalf", "difference delf dalf", "which french diploma"],
    publishedAt: "2026-01-21",
    readingMinutes: 6,
    sections: [
      { h2: "How DELF and DALF are structured", body: "DELF covers A1–B2 and DALF covers C1–C2. This section frames the ladder of French diplomas." },
      { h2: "Who needs DALF vs DELF", body: "Most learners and immigration goals require DELF B2 or below; DALF targets advanced academic and professional needs." },
      { h2: "Choosing the right target", body: "Your destination and purpose set the target level. Here is how to decide efficiently." },
    ],
    faqs: [
      { q: "Is DALF harder than DELF?", a: "Yes. DALF certifies advanced C1–C2 proficiency, above the A1–B2 range covered by the DELF." },
      { q: "Do I need DALF for immigration?", a: "Most immigration pathways accept or target DELF B2; DALF is usually only needed for advanced academic or specialised professional purposes." },
    ],
    related: ["delf-exam-complete-guide", "delf-b2-writing-formal-letter", "delf-exam-centres-india"],
  }),
  mk({
    slug: "delf-a1-preparation",
    cluster: "delf-dalf",
    category: "DELF & DALF",
    title: "DELF A1 Preparation: What to Expect and How to Pass",
    description:
      "A practical DELF A1 preparation guide — the four sections, common question types, sample tasks, and a study plan to pass your first French diploma.",
    excerpt: "Your first French diploma, demystified — the A1 format, what's tested, and a plan to pass comfortably.",
    tags: ["DELF", "A1", "Beginner"],
    keywords: ["delf a1 preparation", "delf a1 exam", "how to pass delf a1"],
    publishedAt: "2026-01-28",
    readingMinutes: 6,
    sections: [
      { h2: "What DELF A1 tests", body: "A1 checks basic, concrete communication — introductions, forms, simple exchanges. We outline the four sections." },
      { h2: "Common A1 task types", body: "Expect short comprehension items and simple production tasks. Here are the recurring formats to practise." },
      { h2: "A study plan to pass A1", body: "Consistent exposure and speaking from day one accelerate A1 readiness. Follow this structured plan." },
    ],
    faqs: [
      { q: "How long does it take to prepare for DELF A1?", a: "With consistent study, many learners reach DELF A1 readiness in roughly 8 weeks of structured classes and daily practice." },
      { q: "Is DELF A1 difficult?", a: "A1 is the entry level and is very achievable with structured preparation, since it focuses on basic, concrete communication." },
    ],
    related: ["delf-exam-complete-guide", "delf-b1-speaking-test", "delf-vs-dalf"],
  }),
  mk({
    slug: "delf-b1-speaking-test",
    cluster: "delf-dalf",
    category: "DELF & DALF",
    title: "DELF B1 Speaking Test: The 3-Minute Structure That Works",
    description:
      "Master the DELF B1 speaking test — the three parts (guided conversation, interaction, monologue), timing, and a repeatable structure for the monologue.",
    excerpt: "The B1 oral, part by part — plus a reliable three-minute structure for the monologue that examiners reward.",
    tags: ["DELF", "B1", "Speaking"],
    keywords: ["delf b1 speaking", "delf b1 oral", "delf b1 monologue structure"],
    publishedAt: "2026-02-04",
    readingMinutes: 7,
    sections: [
      { h2: "The three parts of the B1 oral", body: "Guided interview, interaction, and monologue each test different skills. We explain what each expects." },
      { h2: "A repeatable monologue structure", body: "A clear intro–arguments–conclusion frame keeps you fluent under pressure. Here is the template we teach." },
      { h2: "Practising for fluency", body: "Recorded practice with feedback builds confidence fast. This section outlines a drill routine." },
    ],
    faqs: [
      { q: "How long is the DELF B1 speaking test?", a: "The oral has three parts and runs about 15 minutes, including short preparation time for the monologue." },
      { q: "What topics come up in DELF B1 speaking?", a: "Everyday and mildly abstract topics — opinions on society, lifestyle, and preferences — presented as a short structured monologue and discussion." },
    ],
    related: ["delf-exam-complete-guide", "delf-a1-preparation", "delf-b2-writing-formal-letter"],
  }),
  mk({
    slug: "delf-b2-writing-formal-letter",
    cluster: "delf-dalf",
    category: "DELF & DALF",
    title: "DELF B2 Writing: How to Structure Your Formal Letter",
    description:
      "A step-by-step guide to the DELF B2 written production — how to structure a formal/argumentative letter, useful connectors, and register that scores well.",
    excerpt: "The B2 written task, structured — a formal-letter framework, connectors, and register that examiners reward.",
    tags: ["DELF", "B2", "Writing"],
    keywords: ["delf b2 writing", "delf b2 formal letter", "delf b2 production ecrite"],
    publishedAt: "2026-02-11",
    readingMinutes: 7,
    sections: [
      { h2: "What DELF B2 writing demands", body: "B2 requires a clear, argued position in appropriate register. This section frames the task." },
      { h2: "A formal-letter framework", body: "Opening, structured arguments, and a courteous close form the backbone. Here is the framework." },
      { h2: "Connectors and register", body: "Cohesion devices and consistent formal register lift your band. We provide a usable bank." },
    ],
    faqs: [
      { q: "What is the word count for DELF B2 writing?", a: "The written production typically expects around 250 words of a clearly argued, appropriately formal text." },
      { q: "How is DELF B2 writing scored?", a: "Examiners assess task completion, coherence, range, and accuracy — a well-structured argument in correct register scores higher than length alone." },
    ],
    related: ["delf-exam-complete-guide", "delf-b1-speaking-test", "delf-vs-dalf"],
  }),
  mk({
    slug: "delf-exam-centres-india",
    cluster: "delf-dalf",
    category: "DELF & DALF",
    title: "DELF Exam Centres in India: Where to Register",
    description:
      "A guide to DELF exam centres in India — where DELF and DALF sessions are held, how registration works through Alliance Française, and what to prepare.",
    excerpt: "Where to sit the DELF in India, how registration works through Alliance Française, and what to bring.",
    tags: ["DELF", "India", "Registration"],
    keywords: ["delf exam centres india", "delf registration india", "alliance francaise delf"],
    publishedAt: "2026-02-18",
    readingMinutes: 6,
    sections: [
      { h2: "Where DELF is held in India", body: "Alliance Française centres across major cities administer DELF/DALF sessions. This section explains coverage." },
      { h2: "How registration works", body: "Sessions run on fixed calendars with registration windows. We outline the steps and documents." },
      { h2: "Planning around session dates", body: "Aligning preparation with session dates avoids delays. Here is how to plan backward from your target." },
    ],
    faqs: [
      { q: "Where can I take the DELF exam in India?", a: "DELF and DALF are administered by Alliance Française centres in major Indian cities on scheduled session dates." },
      { q: "How do I register for the DELF in India?", a: "Registration is done through your chosen Alliance Française centre during its open registration window for the target session." },
    ],
    related: ["delf-exam-complete-guide", "delf-vs-dalf", "delf-a1-preparation"],
  }),

  /* ───────────── Cluster 3 — German for Immigration & Study ───────────── */
  mk({
    slug: "german-language-requirements-germany",
    isPillar: true,
    cluster: "german-immigration",
    category: "German for Immigration",
    title: "German Language Requirements for Moving to Germany: Complete Guide",
    metaTitle: "German Language Requirements for Germany (2026 Guide)",
    description:
      "A complete guide to German language requirements for moving to Germany — visa language levels, exams (Goethe, TestDaF, DSH), and study vs work pathways.",
    excerpt: "The German level you actually need — for skilled-worker visas, Ausbildung, and university — and the exams that prove it.",
    tags: ["Germany", "German", "Immigration", "Visa"],
    keywords: ["german language requirements germany", "german level for germany visa", "german for immigration"],
    publishedAt: "2026-01-14",
    readingMinutes: 11,
    sections: [
      { h2: "Why German level matters for your visa", body: "Language level is tied to visa category and long-term settlement. This section frames the stakes." },
      { h2: "Levels required by pathway", body: "Work, Ausbildung, and study each expect different German levels. We map typical requirements." },
      { h2: "Exams that prove your German", body: "Goethe-Zertifikat, TestDaF, and DSH serve different purposes. Here is which to choose." },
      { h2: "Reaching the level with ALB", body: "A structured A1–B2 pathway with immigration context is the reliable route. Learn how ALB's German track is designed." },
    ],
    faqs: [
      { q: "What German level do I need to move to Germany?", a: "It depends on the pathway: many skilled-worker and Ausbildung routes expect B1, while university study often requires B2–C1 proven via TestDaF or DSH." },
      { q: "Which German exam should I take?", a: "Goethe-Zertifikat suits general and immigration purposes, while TestDaF and DSH are used for university admission — choose based on your goal." },
    ],
    related: ["goethe-b1-vs-testdaf", "german-skilled-worker-visa-language", "german-requirement-ausbildung"],
  }),
  mk({
    slug: "goethe-b1-vs-testdaf",
    cluster: "german-immigration",
    category: "German for Immigration",
    title: "Goethe B1 vs TestDaF: Which Exam Do You Need?",
    description:
      "Goethe-Zertifikat B1 vs TestDaF compared — what each proves, who accepts them, and how to choose based on immigration vs university goals.",
    excerpt: "Two very different German exams for two different goals — here's which one your pathway actually needs.",
    tags: ["Goethe", "TestDaF", "German"],
    keywords: ["goethe b1 vs testdaf", "which german exam", "testdaf or goethe"],
    publishedAt: "2026-01-21",
    readingMinutes: 6,
    sections: [
      { h2: "What Goethe B1 proves", body: "Goethe-Zertifikat B1 certifies independent everyday German, widely used for visas and settlement. This section explains its role." },
      { h2: "What TestDaF proves", body: "TestDaF targets academic German for university admission at B2–C1. Here is its scope." },
      { h2: "Choosing by goal", body: "Immigration versus study points to different exams. We provide a decision guide." },
    ],
    faqs: [
      { q: "Is Goethe B1 enough for a Germany visa?", a: "For many skilled-worker and family pathways, B1 (proven via Goethe-Zertifikat) meets the language requirement; always confirm your specific visa category." },
      { q: "Do universities accept Goethe instead of TestDaF?", a: "University admission usually requires academic proof such as TestDaF or DSH; Goethe certificates are more common for immigration and general purposes." },
    ],
    related: ["german-language-requirements-germany", "testdaf-preparation-tdn", "dsh-vs-testdaf"],
  }),
  mk({
    slug: "german-requirement-ausbildung",
    cluster: "german-immigration",
    category: "German for Immigration",
    title: "German Language Requirement for Ausbildung in Germany",
    description:
      "What German level you need for Ausbildung (vocational training) in Germany — typical B1/B2 expectations, the exams accepted, and how to prepare.",
    excerpt: "Ausbildung is a top route to Germany — here's the German level it expects and how to get there.",
    tags: ["Ausbildung", "German", "Vocational"],
    keywords: ["german level for ausbildung", "ausbildung language requirement", "ausbildung germany german"],
    publishedAt: "2026-01-28",
    readingMinutes: 6,
    sections: [
      { h2: "What Ausbildung is and why German matters", body: "Ausbildung combines paid training with study; German is essential for both work and coursework. This section frames it." },
      { h2: "Typical language level expected", body: "Most programmes expect B1, with some fields expecting B2. We outline the range." },
      { h2: "Preparing efficiently", body: "A structured pathway with vocational context is ideal. Here is how to plan your German." },
    ],
    faqs: [
      { q: "What German level is needed for Ausbildung?", a: "Most Ausbildung programmes require at least B1 German, and some competitive or technical fields expect B2." },
      { q: "Can I start Ausbildung with B1 German?", a: "Yes, B1 is commonly the minimum for entry, though continuing to B2 strengthens both your application and your day-to-day performance." },
    ],
    related: ["german-language-requirements-germany", "goethe-b1-vs-testdaf", "german-skilled-worker-visa-language"],
  }),
  mk({
    slug: "testdaf-preparation-tdn",
    cluster: "german-immigration",
    category: "German for Immigration",
    title: "TestDaF Preparation: Scoring System and What TDN 4 Means",
    description:
      "Understand TestDaF scoring — the TDN 3/4/5 bands, what TDN 4 means for university admission, and a structured preparation approach.",
    excerpt: "TDN 3, 4, 5 — what the TestDaF bands mean, why TDN 4 is the target, and how to prepare for it.",
    tags: ["TestDaF", "German", "University"],
    keywords: ["testdaf preparation", "testdaf tdn 4", "testdaf scoring"],
    publishedAt: "2026-02-04",
    readingMinutes: 7,
    sections: [
      { h2: "How TestDaF is scored", body: "Each section is rated TDN 3, 4, or 5. This section explains the bands and what they signal." },
      { h2: "Why TDN 4 is the common target", body: "Many programmes require TDN 4 across sections. We explain the significance." },
      { h2: "A preparation approach", body: "Academic German skills — structured writing and formal speaking — need focused practice. Here is the plan." },
    ],
    faqs: [
      { q: "What does TDN 4 mean in TestDaF?", a: "TDN 4 is the middle band and a common admission threshold, signalling solid B2–C1 academic German across the tested skill." },
      { q: "What TestDaF score do universities want?", a: "Many programmes require TDN 4 in all four sections, though competitive or specialised courses may ask for TDN 5." },
    ],
    related: ["german-language-requirements-germany", "goethe-b1-vs-testdaf", "dsh-vs-testdaf"],
  }),
  mk({
    slug: "german-skilled-worker-visa-language",
    cluster: "german-immigration",
    category: "German for Immigration",
    title: "German Skilled Worker Visa: Language Level Required in 2025",
    description:
      "The German level required for the skilled worker visa and Chancenkarte — how language proficiency feeds into eligibility, and the exams accepted.",
    excerpt: "How German level factors into the skilled-worker visa and Chancenkarte — and the proof you'll need.",
    tags: ["Skilled Worker Visa", "Chancenkarte", "German"],
    keywords: ["german skilled worker visa language", "chancenkarte german level", "germany work visa german"],
    publishedAt: "2026-02-11",
    readingMinutes: 7,
    sections: [
      { h2: "Language in the skilled worker framework", body: "German proficiency can be an eligibility factor and a points contributor. This section explains where it fits." },
      { h2: "The Chancenkarte and language", body: "The opportunity card rewards language ability among other factors. We outline how German helps." },
      { h2: "Proving your level", body: "Recognised certificates are required as evidence. Here is what to prepare." },
    ],
    faqs: [
      { q: "Do I need German for the skilled worker visa?", a: "Requirements vary by route and profession; German proficiency often improves eligibility and, for the Chancenkarte, contributes points even when not strictly mandatory." },
      { q: "What German level helps most for a work visa?", a: "B1 is a common and valuable benchmark for work and settlement, with higher levels further strengthening your profile." },
    ],
    related: ["german-language-requirements-germany", "german-requirement-ausbildung", "goethe-b1-vs-testdaf"],
  }),
  mk({
    slug: "dsh-vs-testdaf",
    cluster: "german-immigration",
    category: "German for Immigration",
    title: "DSH vs TestDaF for University Admission in Germany",
    description:
      "DSH vs TestDaF compared for German university admission — format differences, where each is taken, and how to choose the right proof of German.",
    excerpt: "Two accepted routes to prove academic German for university — how DSH and TestDaF differ, and which to choose.",
    tags: ["DSH", "TestDaF", "University"],
    keywords: ["dsh vs testdaf", "german university language exam", "dsh or testdaf"],
    publishedAt: "2026-02-18",
    readingMinutes: 6,
    sections: [
      { h2: "How DSH and TestDaF differ", body: "DSH is university-administered while TestDaF is standardised and international. This section compares them." },
      { h2: "Where and when each is taken", body: "TestDaF has fixed global dates; DSH is taken at the admitting university. We explain the logistics." },
      { h2: "Choosing the right proof", body: "Your target universities and location drive the choice. Here is a decision guide." },
    ],
    faqs: [
      { q: "Is DSH or TestDaF better?", a: "Neither is universally better; TestDaF offers flexible international dates, while DSH is taken at the university and may suit applicants already in Germany." },
      { q: "Do all universities accept both?", a: "Most German universities accept both DSH and TestDaF for admission, but always confirm the specific requirement of your target programme." },
    ],
    related: ["german-language-requirements-germany", "testdaf-preparation-tdn", "goethe-b1-vs-testdaf"],
  }),

  /* ───────────── Cluster 4 — IELTS & English ───────────── */
  mk({
    slug: "ielts-score-requirements-by-country",
    isPillar: true,
    cluster: "ielts-english",
    category: "IELTS & English",
    title: "IELTS Score Requirements by Country: Canada, UK, Australia, Germany",
    metaTitle: "IELTS Score Requirements by Country (2026)",
    description:
      "IELTS band requirements by country for study, work, and immigration — Canada, UK, Australia, and Germany compared, with tips to hit your target band.",
    excerpt: "The IELTS band you need, country by country — for study, work, and PR — plus how to reach it.",
    tags: ["IELTS", "English", "Immigration", "Study Abroad"],
    keywords: ["ielts score requirements by country", "ielts band for canada", "ielts requirement uk australia"],
    publishedAt: "2026-01-14",
    readingMinutes: 10,
    sections: [
      { h2: "How IELTS bands map to goals", body: "Bands translate differently for study, work, and immigration. This section frames the landscape." },
      { h2: "Requirements by country", body: "Canada, the UK, Australia, and Germany each set different expectations. We summarise typical bands." },
      { h2: "Academic vs General Training", body: "Choosing the right module matters as much as the band. Here is the distinction." },
      { h2: "Reaching your target band", body: "A structured plan targeting your weakest module is most efficient. Learn how ALB's coaching is built for this." },
    ],
    faqs: [
      { q: "What IELTS band do I need for Canada?", a: "It depends on the pathway; Express Entry rewards higher bands (often CLB 9 / band 7+), while some study and work routes accept lower. Check your specific program." },
      { q: "Is Academic or General IELTS right for me?", a: "Academic is for university study and some professional registration; General Training is used for many immigration and work pathways." },
    ],
    related: ["ielts-general-vs-academic", "ielts-band-7-guide", "ielts-writing-task-2"],
  }),
  mk({
    slug: "ielts-general-vs-academic",
    cluster: "ielts-english",
    category: "IELTS & English",
    title: "IELTS General vs Academic: Which One Should You Take?",
    description:
      "IELTS General Training vs Academic explained — the differences in Reading and Writing, who each is for, and how to choose the right module.",
    excerpt: "Same test, two modules — here's how General and Academic differ and which one your goal requires.",
    tags: ["IELTS", "English"],
    keywords: ["ielts general vs academic", "which ielts to take", "ielts module difference"],
    publishedAt: "2026-01-21",
    readingMinutes: 6,
    sections: [
      { h2: "What's the same and what's different", body: "Listening and Speaking are identical; Reading and Writing differ. This section clarifies the split." },
      { h2: "Who should take each module", body: "University applicants generally take Academic; many immigration and work applicants take General Training. We explain." },
      { h2: "Choosing correctly the first time", body: "Booking the wrong module wastes time and money. Here is how to confirm your requirement." },
    ],
    faqs: [
      { q: "Is General IELTS easier than Academic?", a: "The General Training Reading and Writing use everyday contexts that many find more accessible, but the required band still depends on your target." },
      { q: "Can I use General IELTS for university?", a: "Universities almost always require the Academic module; General Training is typically for immigration and work pathways." },
    ],
    related: ["ielts-score-requirements-by-country", "ielts-band-7-guide", "ielts-writing-task-2"],
  }),
  mk({
    slug: "ielts-band-7-guide",
    cluster: "ielts-english",
    category: "IELTS & English",
    title: "IELTS Band 7: What It Takes and How to Get There",
    description:
      "What an IELTS band 7 really requires across all four modules, common reasons candidates stall at 6.5, and a focused plan to break through.",
    excerpt: "Band 7 is a threshold that trips up many strong candidates — here's what it takes and how to get unstuck.",
    tags: ["IELTS", "Band 7", "English"],
    keywords: ["ielts band 7", "how to get ielts 7", "ielts 6.5 to 7"],
    publishedAt: "2026-01-28",
    readingMinutes: 7,
    sections: [
      { h2: "What band 7 demands in each module", body: "Band 7 requires consistency and precision, not perfection. This section breaks it down by skill." },
      { h2: "Why candidates stall at 6.5", body: "Writing and Speaking are the usual bottlenecks. We diagnose the common causes." },
      { h2: "A focused plan to reach 7", body: "Targeted feedback on your weakest module is the fastest lever. Here is a structured plan." },
    ],
    faqs: [
      { q: "How hard is it to get IELTS band 7?", a: "Band 7 requires consistent accuracy and fluency; many candidates plateau at 6.5 in Writing or Speaking and need targeted feedback to break through." },
      { q: "How long does it take to improve from 6.5 to 7?", a: "With focused coaching on the limiting module, many learners close the gap in a few weeks of structured, feedback-driven practice." },
    ],
    related: ["ielts-score-requirements-by-country", "ielts-writing-task-2", "english-speaking-confidence"],
  }),
  mk({
    slug: "ielts-writing-task-2",
    cluster: "ielts-english",
    category: "IELTS & English",
    title: "IELTS Writing Task 2: Essay Types and How to Approach Each",
    description:
      "A guide to IELTS Writing Task 2 essay types — opinion, discussion, problem-solution, and more — with structures and criteria that raise your band.",
    excerpt: "Every Task 2 essay type, with a reliable structure for each and the criteria examiners actually reward.",
    tags: ["IELTS", "Writing", "English"],
    keywords: ["ielts writing task 2", "task 2 essay types", "ielts essay structure"],
    publishedAt: "2026-02-04",
    readingMinutes: 8,
    sections: [
      { h2: "The main Task 2 essay types", body: "Opinion, discussion, advantages/disadvantages, and problem-solution each need a different plan. This section lists them." },
      { h2: "A structure for each type", body: "Matching structure to prompt is half the battle. Here are reliable frames." },
      { h2: "What the band descriptors reward", body: "Task response, coherence, lexical range, and grammar drive your score. We translate them into action." },
    ],
    faqs: [
      { q: "How many essay types are in IELTS Task 2?", a: "There are a handful of recurring types — opinion, discussion, advantage/disadvantage, problem-solution, and two-part questions — each with a preferred structure." },
      { q: "How long should an IELTS Task 2 essay be?", a: "Aim for at least 250 words; going well over adds little if coherence and accuracy slip, so structure and quality matter more than length." },
    ],
    related: ["ielts-score-requirements-by-country", "ielts-band-7-guide", "ielts-general-vs-academic"],
  }),
  mk({
    slug: "english-speaking-confidence",
    cluster: "ielts-english",
    category: "IELTS & English",
    title: "English Speaking Confidence: Why Grammar Isn't Your Problem",
    description:
      "Why fluent-enough learners still freeze when speaking English — the real mechanism behind the block, and a practical approach to speaking with confidence.",
    excerpt: "You understand English fine but freeze when speaking. The problem usually isn't grammar — here's what it is.",
    tags: ["English", "Speaking", "Soft Skills"],
    keywords: ["english speaking confidence", "how to speak english confidently", "english speaking fear"],
    publishedAt: "2026-02-11",
    readingMinutes: 6,
    sections: [
      { h2: "Why understanding doesn't equal speaking", body: "Passive knowledge and active production are different skills. This section explains the gap." },
      { h2: "The real mechanism behind freezing", body: "Fear of error, not lack of grammar, usually causes the block. We unpack it." },
      { h2: "Building confidence through practice", body: "Structured speaking under supportive pressure rewires the habit. Here is how ALB's +Beyond approach works." },
    ],
    faqs: [
      { q: "Why can I understand English but not speak it?", a: "Comprehension is a passive skill and speaking is an active one; without regular speaking practice, knowledge stays passive and confidence lags." },
      { q: "How do I become confident speaking English?", a: "Frequent, low-stakes speaking practice with feedback — rather than more grammar study — is what converts knowledge into confident, fluent speech." },
    ],
    related: ["ielts-band-7-guide", "ielts-score-requirements-by-country", "common-mistakes-indian-students-french"],
  }),

  /* ───────────── Cluster 5 — Language Learning for Indians ───────────── */
  mk({
    slug: "learn-french-as-hindi-speaker",
    isPillar: true,
    cluster: "india-learning",
    category: "Learning for Indians",
    title: "How to Learn French as a Hindi Speaker: The Complete Roadmap",
    metaTitle: "How to Learn French as a Hindi Speaker (Complete Roadmap)",
    description:
      "An India-first roadmap to learning French as a Hindi speaker — leveraging cognates, avoiding common mistakes, and a realistic timeline from zero to fluency.",
    excerpt: "An India-first roadmap to French — using what Hindi and English already give you, and a realistic path from zero.",
    tags: ["French", "Hindi", "Learning"],
    keywords: ["learn french as hindi speaker", "french for indians", "french learning roadmap india"],
    publishedAt: "2026-01-14",
    readingMinutes: 10,
    sections: [
      { h2: "The advantages Indian learners already have", body: "English cognates and multilingual habits give Indian learners a head start. This section reframes the challenge." },
      { h2: "A stage-by-stage roadmap", body: "From A1 foundations to B2 fluency, each stage has clear goals. We lay out the path." },
      { h2: "Common pitfalls to avoid", body: "Pronunciation and false friends trip up many learners. Here is what to watch for." },
      { h2: "Learning French the ALB way", body: "India-specific examples and structured speaking accelerate progress. Learn how ALB's French pathway is designed." },
    ],
    faqs: [
      { q: "Is French hard for Hindi speakers?", a: "Less than expected — Indian learners already know thousands of English–French cognates, and multilingual habits make picking up a new language more natural." },
      { q: "How long does it take to learn French from India?", a: "With structured classes and daily practice, the A1–B2 journey typically takes about 36 weeks, though timelines vary with consistency." },
    ],
    related: ["french-words-hindi-speakers-know", "common-mistakes-indian-students-french", "zero-to-delf-b2-timeline"],
  }),
  mk({
    slug: "french-words-hindi-speakers-know",
    cluster: "india-learning",
    category: "Learning for Indians",
    title: "50 French Words Hindi Speakers Already Know (Cognates)",
    description:
      "50 French words that Hindi and English speakers already recognise — cognates that give Indian learners an instant head start in French vocabulary.",
    excerpt: "You already know hundreds of French words. Here are 50 cognates that prove French isn't starting from zero.",
    tags: ["French", "Vocabulary", "Cognates"],
    keywords: ["french words hindi speakers know", "french english cognates", "french vocabulary for indians"],
    publishedAt: "2026-01-21",
    readingMinutes: 6,
    sections: [
      { h2: "What cognates are and why they help", body: "Cognates are words that look and mean nearly the same across languages. This section explains the head start." },
      { h2: "50 high-frequency French cognates", body: "From 'nation' to 'information', these words transfer directly. We group them for easy learning." },
      { h2: "Using cognates to build momentum", body: "Anchoring new vocabulary to what you know accelerates recall. Here is how to leverage it." },
    ],
    faqs: [
      { q: "Are there French words similar to English?", a: "Thousands — words like nation, information, and animal are near-identical, giving English and Hindi speakers a large ready-made vocabulary in French." },
      { q: "Do cognates make French easier?", a: "Yes, cognates significantly speed up early vocabulary building, though you still need to learn French pronunciation and grammar." },
    ],
    related: ["learn-french-as-hindi-speaker", "common-mistakes-indian-students-french", "zero-to-delf-b2-timeline"],
  }),
  mk({
    slug: "common-mistakes-indian-students-french",
    cluster: "india-learning",
    category: "Learning for Indians",
    title: "Common Mistakes Indian Students Make Learning French",
    description:
      "The most common mistakes Indian students make when learning French — from pronunciation and false friends to grammar habits — and how to fix each.",
    excerpt: "The recurring mistakes that slow Indian learners down in French — and the fixes that get progress back on track.",
    tags: ["French", "Learning", "Mistakes"],
    keywords: ["common french mistakes indian students", "french pronunciation mistakes", "french learning tips india"],
    publishedAt: "2026-01-28",
    readingMinutes: 6,
    sections: [
      { h2: "Pronunciation habits to unlearn", body: "Nasal sounds and silent letters need deliberate practice. This section highlights the key traps." },
      { h2: "False friends and grammar transfer", body: "Some words look familiar but mean something else, and Hindi/English grammar can interfere. We flag the common ones." },
      { h2: "How to correct course quickly", body: "Feedback-driven speaking practice fixes these fast. Here is the approach we use." },
    ],
    faqs: [
      { q: "What is the hardest part of French for Indian learners?", a: "Pronunciation — especially nasal vowels and silent letters — tends to be the biggest early hurdle, more than vocabulary or basic grammar." },
      { q: "How do I fix my French pronunciation?", a: "Regular speaking practice with corrective feedback, rather than silent study, is the most reliable way to fix pronunciation habits." },
    ],
    related: ["learn-french-as-hindi-speaker", "french-words-hindi-speakers-know", "zero-to-delf-b2-timeline"],
  }),
  mk({
    slug: "zero-to-delf-b2-timeline",
    cluster: "india-learning",
    category: "Learning for Indians",
    title: "How Long Does It Take to Go from Zero to DELF B2?",
    description:
      "A realistic timeline from zero French to DELF B2 — the hours per level, factors that speed you up or slow you down, and how to plan around exam dates.",
    excerpt: "A realistic answer to the most-asked question: how long from absolute beginner to DELF B2 — and what changes it.",
    tags: ["French", "DELF", "Timeline"],
    keywords: ["zero to delf b2 timeline", "how long to learn french b2", "french a1 to b2 time"],
    publishedAt: "2026-02-04",
    readingMinutes: 6,
    sections: [
      { h2: "The realistic hour count", body: "Each CEFR level takes a broadly predictable number of guided hours. This section gives ranges." },
      { h2: "What speeds you up or slows you down", body: "Consistency, prior exposure, and speaking practice are the biggest variables. We explain their impact." },
      { h2: "Planning backward from your exam", body: "Aligning study with a target DELF session keeps you accountable. Here is how to plan." },
    ],
    faqs: [
      { q: "How long does it take to reach DELF B2?", a: "With consistent, structured study, the A1–B2 journey commonly takes around 36 weeks, though prior exposure and practice frequency shift the timeline." },
      { q: "Can I reach B2 French faster?", a: "Intensive schedules with daily speaking practice can compress the timeline, but B2 still requires substantial guided hours to reach reliably." },
    ],
    related: ["learn-french-as-hindi-speaker", "common-mistakes-indian-students-french", "delf-b2-writing-formal-letter"],
  }),
  mk({
    slug: "learning-german-as-indian",
    cluster: "india-learning",
    category: "Learning for Indians",
    title: "Learning German as an Indian: What's Actually Hard and What Isn't",
    description:
      "An honest look at learning German as an Indian — which parts are genuinely hard (cases, compound words) and which are easier than expected, plus how to approach each.",
    excerpt: "German's reputation is scarier than the reality. Here's what's genuinely hard for Indian learners — and what isn't.",
    tags: ["German", "Learning", "India"],
    keywords: ["learning german as indian", "is german hard for indians", "german learning tips india"],
    publishedAt: "2026-02-11",
    readingMinutes: 6,
    sections: [
      { h2: "What's genuinely challenging", body: "Cases, gender, and compound words demand structured practice. This section is honest about the hard parts." },
      { h2: "What's easier than you think", body: "Phonetic spelling and shared vocabulary help more than expected. We highlight the wins." },
      { h2: "An approach that works", body: "Pattern-based learning with India-specific examples accelerates progress. Here is how ALB teaches it." },
    ],
    faqs: [
      { q: "Is German harder than French for Indians?", a: "German grammar (cases, gender) is more complex up front, but its spelling is more phonetic; overall difficulty depends on the learner and the method." },
      { q: "How can Indians learn German faster?", a: "Pattern-based grammar practice, phonetic reading, and India-specific examples — combined with regular speaking — make German more approachable." },
    ],
    related: ["learn-french-as-hindi-speaker", "german-language-requirements-germany", "common-mistakes-indian-students-french"],
  }),
];
