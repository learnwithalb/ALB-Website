import type { BlogPost, BlogSection, Cluster, ClusterId } from "./types";

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
  coverImage?: string;
  complete?: boolean;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  related: string[];
}

function mk(p: PostInput): BlogPost {
  const cluster = CLUSTERS[p.cluster];
  return {
    ...p,
    isPillar: p.isPillar ?? false,
    complete: p.complete ?? false,
    coverImage: p.coverImage,
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
    slug: "tef-canada-speaking-test",
    cluster: "french-canada",
    category: "French for Canada",
    title: "TEF Canada Speaking Test: Format, Scoring, and Preparation Tips",
    description:
      "A breakdown of the TEF Canada speaking test (Expression Orale) — the two tasks, timing, scoring criteria, and a practical preparation plan for CLB 7+.",
    excerpt: "The Expression Orale section decoded — both tasks, what examiners score, and how to prepare for a CLB 7+ result.",
    tags: ["TEF", "Speaking", "French"],
    keywords: ["tef canada speaking", "expression orale tef", "tef speaking preparation", "clb 7 tef"],
    publishedAt: "2026-02-18",
    updatedAt: "2026-07-26",
    readingMinutes: 11,
    coverImage: "/images/blog-images/TEF Canada Speaking Test Format, Scoring, and Preparation Tips 2.png",
    complete: true,
    sections: [
      {
        h2: "Introduction to TEF Canada",
        body:
          "For anyone aiming to migrate to Canada through Express Entry or a Provincial Nominee Program, proving your French proficiency can meaningfully boost your Comprehensive Ranking System (CRS) score. One of the main French exams recognised by Immigration, Refugees and Citizenship Canada (IRCC) is the TEF Canada — the Test d'Évaluation de Français.\n\nMany candidates find the Speaking section the hardest, because it demands spontaneous communication, confidence, and the ability to express ideas clearly under time pressure. With the right strategy and a clear understanding of the format, a CLB 7 or higher is absolutely achievable — and this guide shows you exactly how.",
      },
      {
        h2: "What the speaking test actually measures",
        body:
          "The Expression Orale is a face-to-face conversation with an examiner that assesses how well you communicate in real-life situations — not how many grammar rules you can recite. Strong performance here directly earns additional points under Express Entry, improving your odds of an Invitation to Apply (ITA).",
        blocks: [
          {
            type: "cards",
            columns: 3,
            items: [
              { title: "Vocabulary range", body: "Precise, topic-appropriate word choice." },
              { title: "Pronunciation", body: "Clear sounds, liaisons, and intonation." },
              { title: "Fluency", body: "Smooth delivery without long pauses." },
              { title: "Grammar accuracy", body: "Correct tenses, gender, and agreement." },
              { title: "Expressing opinions", body: "Stating and defending a point of view." },
              { title: "Interaction", body: "Reacting and keeping the conversation going." },
            ],
          },
        ],
      },
      {
        h2: "Why French matters for Canada PR",
        body:
          "French has been part of Canada's identity for over four centuries, since settlers founded communities like Quebec City in the early 1600s. Today Canada is officially bilingual, recognising both French and English.\n\nFor immigration, that history translates into real advantages: French proficiency earns extra CRS points, opens dedicated Francophone immigration pathways, and eases your transition into Canadian life and work — well beyond Quebec.",
      },
      {
        h2: "The two speaking tasks",
        body: "The Expression Orale is built around two short role-plays. Knowing the goal of each one is half the battle.",
        blocks: [
          {
            type: "cards",
            columns: 2,
            items: [
              {
                title: "Task 1 — Gathering information",
                body: "You're given a situation or advertisement (a language course, an apartment, a gym, a travel package) and must ask questions to obtain details. The examiner answers based on the prompt.",
                bullets: ["Ask correct, relevant questions", "Keep the conversation flowing", "Use appropriate vocabulary", "Show curiosity and interaction"],
              },
              {
                title: "Task 2 — Convincing & giving your opinion",
                body: "You must persuade someone to adopt your point of view — to join a club, attend an event, or choose a service. The examiner will challenge you, so you defend your position.",
                bullets: ["Build clear, logical arguments", "Think critically and persuade", "Respond spontaneously to objections", "Stay coherent under pressure"],
              },
            ],
          },
        ],
      },
      {
        h2: "Exam structure and duration",
        body:
          "For a Canadian immigration application you complete four mandatory modules covering every skill. The Oral Expression test packs both speaking tasks into just 15 minutes.",
        blocks: [
          {
            type: "table",
            headers: ["Module", "Duration"],
            rows: [
              ["Listening Comprehension (Compréhension Orale)", "40 minutes"],
              ["Reading Comprehension (Compréhension Écrite)", "60 minutes"],
              ["Written Expression (Expression Écrite)", "60 minutes"],
              ["Oral Expression (Expression Orale)", "15 minutes"],
            ],
          },
          {
            type: "callout",
            variant: "info",
            title: "Applying for citizenship?",
            body: "Citizenship applicants only need two modules — Listening Comprehension (40 minutes) and Oral Expression (15 minutes) — which makes speaking performance especially decisive.",
          },
        ],
      },
      {
        h2: "How speaking scores convert to CLB",
        body:
          "For programs like Express Entry, your TEF Speaking score is converted into a Canadian Language Benchmark (CLB) — also called the NCLC. This benchmark drives your eligibility and your CRS points.",
        blocks: [
          {
            type: "table",
            headers: ["TEF Speaking Score", "CLB / NCLC", "CEFR"],
            rows: [
              ["393 – 450", "CLB 7", "B2"],
              ["451 – 502", "CLB 8", "B2"],
              ["503 – 552", "CLB 9", "C1"],
              ["553 – 699", "CLB 10–12", "C1 / C2"],
            ],
          },
          {
            type: "callout",
            variant: "tip",
            title: "Don't just aim to pass",
            body: "CLB 7 (B2) is the usual minimum for language points, but every extra point helps. CLB 8 strengthens your profile and CLB 9+ maximises your French advantage — so target the highest score you can, not just the pass line.",
          },
        ],
      },
      {
        h2: "Topics you'll actually be asked about",
        body:
          "The test mirrors everyday life in Canada — the conversations you'd have while working, studying, or renting a home. In Task 1 you might enquire about a job, an apartment, a gym membership, or a course. In Task 2 you might argue for public transport, volunteering, healthy living, or less social media.",
        blocks: [
          {
            type: "chips",
            title: "Recurring themes to prepare",
            items: ["Education", "Housing", "Career", "Environment", "Technology", "Health", "Transport", "Hobbies"],
          },
        ],
      },
      {
        h2: "10 common mistakes to avoid",
        blocks: [
          {
            type: "numbered",
            items: [
              { title: "Ignoring the exam format", body: "Learning French but neglecting the TEF's specific structure and requirements." },
              { title: "Weak grammar foundations", body: "Slips in conjugation, gender agreement, articles, and tenses cost marks." },
              { title: "No connectors", body: "Without d'abord, cependant or par conséquent, answers feel disjointed." },
              { title: "Memorising answers", body: "The TEF rewards spontaneity; scripted replies sound unnatural." },
              { title: "Narrow accent exposure", body: "Only standard French leaves you lost with Canadian or African accents." },
              { title: "Limited vocabulary", body: "Basic words can't express nuance; build topic-specific lists." },
              { title: "Poor time management", body: "Skipping timed practice leads to incomplete, stressed answers." },
              { title: "Delaying speaking", body: "Postponing speaking practice kills fluency and confidence." },
              { title: "Inadequate revision", body: "New words without regular review simply don't stick." },
              { title: "Wrong register", body: "The TEF is formal — use Pourriez-vous…, Je souhaiterais…, Serait-il possible de…" },
            ],
          },
        ],
      },
      {
        h2: "A beginner's preparation strategy",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Practise daily", body: "Even 15–20 minutes of speaking a day builds real fluency." },
              { title: "Record yourself", body: "Play it back to catch pronunciation and grammar slips." },
              { title: "Master connectors", body: "Use linkers like premièrement and cependant to structure speech." },
              { title: "Build thematic vocabulary", body: "Group word lists around travel, work, and education." },
              { title: "Simulate the exam", body: "Practise with a timer and a partner to build test-day confidence." },
            ],
          },
        ],
      },
      {
        h2: "Speak like a native: structures & connectors",
        body:
          "Fluency comes from thinking in French, not translating from English. Master a handful of high-frequency sentence patterns and connectors, and you can build endless sentences with confidence. Prioritise clarity and steady interaction over raw speed — clear pronunciation and natural rhythm matter far more than talking fast or being flawless.",
        blocks: [
          {
            type: "phrases",
            title: "High-frequency structures",
            items: [
              { fr: "Je voudrais…", en: "I would like…" },
              { fr: "Il faut que…", en: "It is necessary that…" },
              { fr: "Je pense que…", en: "I think that…" },
              { fr: "À mon avis…", en: "In my opinion…" },
              { fr: "J'ai l'intention de…", en: "I intend to…" },
            ],
          },
          {
            type: "chips",
            title: "Connectors that create flow",
            items: ["D'abord", "Ensuite", "Cependant", "En revanche", "Par conséquent", "En conclusion"],
          },
          {
            type: "phrases",
            title: "Formal register for the exam",
            items: [
              { fr: "Pourriez-vous me renseigner sur… ?", en: "Could you tell me about… ?" },
              { fr: "Je souhaiterais obtenir davantage d'informations…", en: "I would like more information…" },
              { fr: "Serait-il possible de… ?", en: "Would it be possible to… ?" },
              { fr: "Je vous remercie pour votre aide.", en: "Thank you for your help." },
            ],
          },
        ],
      },
      {
        h2: "Best resources for TEF preparation",
        blocks: [
          {
            type: "cards",
            columns: 2,
            items: [
              { title: "Le français des affaires", body: "Official TEF practice material for the oral comprehension test." },
              { title: "TV5Monde — Apprendre le français", body: "Short, level-graded video exercises close to the test format." },
              { title: "RFI Savoirs", body: "News reports in clear, slow French — ideal for listening practice." },
              { title: "Mauril (CBC / Radio-Canada)", body: "A free app to train your ear for spoken Canadian French." },
            ],
          },
        ],
      },
      {
        h2: "The bottom line",
        body:
          "Success in the TEF Canada Speaking Test isn't about flawless French — it's about communicating effectively, expressing your ideas with confidence, and interacting naturally. Understand the format, practise consistently, and grow your vocabulary, and CLB 7+ is well within reach.\n\nWhether your goal is immigration, career growth, or personal development, time invested in French opens doors across Canada and beyond. At ALB, we help learners get there with expert guidance, interactive practice, and personalised support.",
      },
    ],
    faqs: [
      { q: "How long is the TEF Canada speaking test?", a: "The Expression Orale lasts about 15 minutes across two tasks, though instructions and preparation time extend the overall slot." },
      { q: "What TEF speaking score do I need for CLB 7?", a: "A speaking score of roughly 393–450 maps to CLB/NCLC 7 (CEFR B2), the usual minimum for French language points under Express Entry." },
      { q: "Is the TEF speaking test face to face?", a: "Yes. It's conducted one-on-one with an examiner who responds to your questions in Task 1 and challenges your arguments in Task 2." },
      { q: "How many modules do I need for Canadian immigration?", a: "Immigration applicants take all four modules (listening, reading, writing, speaking). Citizenship applicants need only listening and speaking." },
    ],
    related: ["tcf-canada-writing", "tef-b2-clb-points-express-entry", "quebec-vs-federal-french-requirements"],
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
    related: ["tef-canada-speaking-test", "tef-b2-clb-points-express-entry", "quebec-vs-federal-french-requirements"],
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
    related: ["tef-canada-speaking-test", "tcf-canada-writing", "quebec-vs-federal-french-requirements"],
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
    related: ["tef-canada-speaking-test", "tef-b2-clb-points-express-entry", "tcf-canada-writing"],
  }),
];
