import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";

export const metadata: Metadata = {
  title: "ALB Junior | Language Learning for Kids & Teens",
  description: "Fun, structured language learning for children aged 6–16. French, Spanish, German & more — taught the way kids actually learn.",
};

const ageGroups = [
  {
    label: "Little Explorers",
    ages: "Ages 6–9",
    emoji: "🐣",
    desc: "Playful introduction to language through songs, stories, games, and art. No pressure — only fun.",
    highlights: ["30-minute sessions", "Visual & story-based", "Parent updates weekly", "2 languages available"],
  },
  {
    label: "Junior Speakers",
    ages: "Ages 10–13",
    emoji: "🚀",
    desc: "Build a real foundation with structured vocabulary, simple grammar, and confidence-building conversation.",
    highlights: ["45-minute sessions", "Digital flashcards & quizzes", "Monthly progress report", "All 6 languages"],
  },
  {
    label: "Teen Achievers",
    ages: "Ages 14–16",
    emoji: "🎯",
    desc: "Serious preparation for DELF Junior, school exams, international applications, and global curiosity.",
    highlights: ["60-minute sessions", "Exam-aligned curriculum", "Live projects & debates", "Certificate on completion"],
  },
];

const whyJunior = [
  { icon: "🧠", title: "Science-backed methods", desc: "Children's brains acquire language exponentially faster. We leverage that window with proven methodology." },
  { icon: "🎮", title: "Gamified learning", desc: "Points, badges, leaderboards, and prizes keep kids genuinely excited to come back every week." },
  { icon: "🌍", title: "Cultural storytelling", desc: "Each lesson includes a story or fact from the target culture — building curiosity, not just competency." },
  { icon: "👨‍👩‍👧", title: "Parent transparency", desc: "Monthly reports, termly showcases, and a parent WhatsApp group so you're never left guessing." },
  { icon: "👩‍🏫", title: "Child-specialist faculty", desc: "Every Junior faculty member is trained in child psychology and language pedagogy — not just linguists." },
  { icon: "📜", title: "Recognised certification", desc: "DELF Junior and Goethe Kids certificates add real weight to school applications and college portfolios." },
];

const faqs = [
  { q: "My child has zero exposure to French — can they still join?", a: "Absolutely. Our Little Explorers programme starts from absolute zero with a completely pressure-free, play-based approach." },
  { q: "How many children per batch?", a: "We keep Junior batches small — maximum 8 children per batch for Little Explorers and 10 for older groups — so every child gets attention." },
  { q: "Is there homework?", a: "Minimal and fun. Think a 5-minute worksheet, a short game on our app, or recording a 30-second voice note. Never a burden." },
  { q: "Can my teenager join an adult batch if they're advanced?", a: "For learners aged 16+ who've reached B1 or above, we assess case-by-case and can place them in appropriate adult batches with parent consent." },
];

export default function JuniorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end pb-16 overflow-hidden pt-28 bg-gradient-to-br from-[#0a1628] via-[#162d5a] to-[#0a1628]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 text-[180px] select-none opacity-10">🌍</div>
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#22C55E]/12 blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#06b6d4]/10 blur-[60px]" />
        </div>
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView>
            <span className="eyebrow-pill mb-3">ALB Junior</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl">
              Give your child the gift of
              <span className="gradient-text"> a global voice.</span>
            </h1>
            <p className="mt-5 text-xl text-white/60 max-w-2xl leading-relaxed">
              Fun, structured language learning for ages 6–16. French, German, Spanish,
              Japanese — taught the way children actually learn: through stories, games,
              and genuine joy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/courses" className="btn-primary">
                Enroll Your Child
                <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Book a Trial Class
              </a>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Why start early */}
      <section className="section-padding bg-[#22C55E]">
        <div className="container-max">
          <AnimateOnView className="text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white">
              Did you know? Children who start a second language before age 10
              achieve near-native fluency 3× faster than adults who start at 25.
            </h2>
            <p className="mt-3 text-white/50 font-medium">
              Every year of delay is a year of exponential advantage lost.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* Age Groups */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Learning Tracks by Age</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              The right programme for
              <span className="gradient-text"> every stage.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {ageGroups.map((group) => (
              <StaggerItem key={group.label}>
                <div className="rounded-2xl border-white/6 bg-[#04080f] p-7 hover:border-white/12 transition-all group">
                  <div className="text-5xl mb-4">{group.emoji}</div>
                  <div className="inline-block bg-[#22C55E]/15 text-[#16a34a] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {group.ages}
                  </div>
                  <h3 className="text-xl font-black text-white">{group.label}</h3>
                  <p className="text-sm text-white/40 mt-2 leading-relaxed">{group.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {group.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-white/50">
                        <CheckCircle size={13} className="text-[#22C55E] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href="/courses" className="mt-6 inline-flex items-center gap-1 text-[#22C55E] font-bold text-sm group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={13} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why ALB Junior */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Why ALB Junior Works</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Designed for how kids
              <span className="gradient-text"> actually learn.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {whyJunior.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-dark rounded-2xl p-6 hover:border-white/12 transition-all">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <p className="text-sm text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding gradient-navy">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnView>
              <div className="flex justify-center gap-1 mb-5">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-[#22C55E] fill-[#22C55E]" />)}
              </div>
              <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                &ldquo;My 8-year-old daughter started French with ALB Junior 6 months ago.
                She now sings French songs at dinner and corrects my pronunciation.
                The teachers make it feel like playtime, not study time.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white font-black text-sm">
                  SM
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">Sunita Mehta</p>
                  <p className="text-white/50 text-xs">Parent of Riya (Age 8) · French Little Explorer</p>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max max-w-3xl mx-auto">
          <AnimateOnView className="text-center mb-10">
            <span className="eyebrow">Parent FAQs</span>
            <h2 className="text-3xl font-black text-white mt-2">Your questions, answered.</h2>
          </AnimateOnView>
          <StaggerContainer className="space-y-4" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="rounded-2xl border-white/6 p-6 bg-[#04080f]">
                  <h3 className="font-bold text-white">{faq.q}</h3>
                  <p className="text-sm text-white/45 mt-2 leading-relaxed">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#22C55E]">
        <div className="container-max text-center">
          <AnimateOnView>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Give your child a head start that lasts a lifetime.
            </h2>
            <p className="mt-3 text-white/50 text-lg">
              First trial class is completely free — no commitment.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                Book Free Trial Class
              </a>
              <Link href="/courses" className="bg-[#060c1a] text-white btn-primary">
                View All Junior Courses
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
