import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Users, Star } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";

export const metadata: Metadata = {
  title: "French Language Course | DELF Preparation",
  description: "Master French from A1 to C1 with ALB's expert faculty. CEFR-aligned curriculum, DELF preparation, and cultural immersion. Achieve your European dream.",
};

const levels = [
  { code: "A1", name: "Beginner", duration: "3 months", sessions: "24 sessions", desc: "Greetings, numbers, daily routines, family, food. Start holding basic conversations." },
  { code: "A2", name: "Elementary", duration: "3 months", sessions: "24 sessions", desc: "Travel, shopping, work, hobbies. Describe your world in French with growing confidence." },
  { code: "B1", name: "Intermediate", duration: "4 months", sessions: "32 sessions", desc: "Handle most real-life situations. Discuss news, express opinions, write simple essays." },
  { code: "B2", name: "Upper Intermediate", duration: "5 months", sessions: "40 sessions", desc: "Work or study in a French-speaking environment. DELF B2 certification achievable." },
  { code: "C1", name: "Advanced", duration: "6 months", sessions: "48 sessions", desc: "Near-native fluency. Academic French, sophisticated debate, literary analysis." },
];

const curriculum = [
  { module: "Phonetics & Pronunciation", weeks: "Weeks 1–2", icon: "🗣️", topics: ["French sounds & alphabet", "Liaison and elision", "Accent patterns", "Tongue placement"] },
  { module: "Core Grammar", weeks: "Weeks 3–8", icon: "📚", topics: ["Verb conjugations", "Noun genders & articles", "Adjective agreement", "Tense system"] },
  { module: "Vocabulary Building", weeks: "Ongoing", icon: "🧠", topics: ["Thematic vocabulary sets", "Idiomatic expressions", "False friends", "Register (formal/informal)"] },
  { module: "Speaking & Listening", weeks: "Every class", icon: "💬", topics: ["Conversation circles", "Authentic French media", "Roleplay scenarios", "DELF oral simulation"] },
  { module: "Reading & Writing", weeks: "Weeks 6+", icon: "✍️", topics: ["Text comprehension", "Essay and letter writing", "Newspaper articles", "Email composition"] },
  { module: "Cultural Immersion", weeks: "Weekly", icon: "🥐", topics: ["French cinema & music", "Cuisine and traditions", "Regional dialects", "Contemporary France"] },
];

const whyFrench = [
  { stat: "300M+", label: "Speakers worldwide" },
  { stat: "29", label: "Countries where French is official" },
  { stat: "#2", label: "Most studied language globally" },
  { stat: "Top 5", label: "Business language in EU" },
];

const delfInfo = [
  { level: "DELF A1/A2", use: "School applications, visa documentation, basic recognition" },
  { level: "DELF B1", use: "French citizenship requirement, some university applications" },
  { level: "DELF B2", use: "Study in France, French work visa, university admission" },
  { level: "DALF C1", use: "Professional and academic French, top-tier careers" },
];

const testimonials = [
  { quote: "Within 10 months I cleared DELF B2 and got my French work visa. The teachers make grammar feel intuitive, not intimidating.", name: "Priya Sharma", role: "Software Engineer, Paris", avatar: "PS" },
  { quote: "Got the DAAD scholarship and French was a strong differentiator. ALB's structured curriculum and mock interviews made all the difference.", name: "Rahul Joshi", role: "IIT Graduate, DAAD Scholar", avatar: "RJ" },
];

export default function FrenchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060c1a] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#003087]/30 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#22C55E]/8 blur-[80px]" />
        </div>
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView>
              <Link href="/courses" className="inline-flex items-center gap-1.5 text-white/50 text-sm hover:text-white transition-colors mb-5">
                ← All Courses
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🇫🇷</span>
                <span className="eyebrow-pill-outline text-sm">Most Popular</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                French Language
                <span className="gradient-text"> Programme</span>
              </h1>
              <p className="mt-4 text-xl text-white/60 leading-relaxed">
                From bonjour to C1 fluency — our CEFR-aligned French programme takes
                you from complete beginner to confident speaker through immersive,
                expert-led instruction.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Enroll Now
                  <ArrowRight size={16} />
                </a>
                <Link href="#curriculum" className="btn-outline">
                  View Curriculum
                </Link>
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left" className="hidden lg:block">
              <div className="grid grid-cols-2 gap-3">
                {whyFrench.map((w) => (
                  <div key={w.label} className="gradient-card rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black text-[#22C55E]">{w.stat}</div>
                    <div className="text-white/60 text-sm mt-1">{w.label}</div>
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-[#22C55E]">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: <Clock size={18} />, label: "Duration", value: "3–18 months" },
              { icon: <Users size={18} />, label: "Batch Size", value: "Max 12" },
              { icon: <Star size={18} />, label: "Rating", value: "4.9 / 5" },
              { icon: <CheckCircle size={18} />, label: "Levels", value: "A1 to C1" },
            ].map((f, i) => (
              <div key={i} className="py-6 px-5 text-center border-r border-[#0a1628]/15 last:border-r-0">
                <div className="flex justify-center text-white mb-1">{f.icon}</div>
                <div className="text-white/40 text-xs font-semibold uppercase tracking-wider">{f.label}</div>
                <div className="text-white font-black text-xl mt-0.5">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Programme Structure</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              One level at a time.
              <span className="gradient-text"> Every step counts.</span>
            </h2>
          </AnimateOnView>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100" />
            <div className="space-y-6">
              {levels.map((level, i) => (
                <AnimateOnView key={level.code} delay={i * 0.07}>
                  <div className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 !== 0 ? "md:[&>:first-child]:order-2" : ""}`}>
                    <div className={`${i % 2 !== 0 ? "md:text-right" : ""}`}>
                      <div className="inline-flex items-center gap-2 bg-[#22C55E]/15 text-[#16a34a] font-bold px-3 py-1 rounded-full text-sm mb-2">
                        {level.code} · {level.name}
                      </div>
                      <p className="text-white/40 text-sm">{level.duration} · {level.sessions}</p>
                    </div>
                    <div className={`card-dark rounded-2xl p-6 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                      <p className="text-white/60 leading-relaxed text-sm">{level.desc}</p>
                    </div>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-[#04080f]" id="curriculum">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">What You&apos;ll Learn</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              A complete curriculum.
              <span className="gradient-text"> Zero gaps.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {curriculum.map((c) => (
              <StaggerItem key={c.module}>
                <div className="card-dark rounded-2xl p-6 hover:border-white/12 transition-all h-full">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-bold text-white text-base">{c.module}</h3>
                  <p className="text-xs text-[#22C55E] font-semibold uppercase tracking-wider mt-1">{c.weeks}</p>
                  <ul className="mt-4 space-y-1.5">
                    {c.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-xs text-white/45">
                        <div className="w-1 h-1 rounded-full bg-[#22C55E] flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DELF Section */}
      <section className="section-padding gradient-navy">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-outline">Exam Preparation</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
                DELF & DALF
                <span className="gradient-text"> Certification</span>
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                The DELF (Diplôme d&apos;Études en Langue Française) is the official
                French government certification — recognised by universities, embassies,
                and employers worldwide. Every ALB French batch includes DELF preparation.
              </p>
              <div className="mt-6 space-y-3">
                {delfInfo.map((d) => (
                  <div key={d.level} className="glass rounded-xl px-4 py-3">
                    <span className="text-[#22C55E] font-bold text-sm">{d.level}</span>
                    <span className="text-white/50 text-sm ml-2">— {d.use}</span>
                  </div>
                ))}
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-white font-bold text-xl mb-5">Our DELF Success Rate</h3>
                {[
                  { level: "DELF A1/A2", rate: 98 },
                  { level: "DELF B1", rate: 94 },
                  { level: "DELF B2", rate: 91 },
                  { level: "DALF C1", rate: 87 },
                ].map((s) => (
                  <div key={s.level} className="mb-5 last:mb-0">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-white/70 text-sm">{s.level}</span>
                      <span className="text-[#22C55E] font-bold text-sm">{s.rate}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#22C55E] to-[#4ade80] rounded-full"
                        style={{ width: `${s.rate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-10">
            <span className="eyebrow">Learner Stories</span>
            <h2 className="text-3xl font-black text-white mt-2">
              They did it.
              <span className="gradient-text"> So can you.</span>
            </h2>
          </AnimateOnView>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnView key={i} delay={i * 0.15}>
                <div className="bg-[#04080f] rounded-2xl p-8 border-white/6">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(j => <Star key={j} size={14} className="text-[#22C55E] fill-[#22C55E]" />)}
                  </div>
                  <p className="text-white/60 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22C55E] to-[#4ade80] flex items-center justify-center text-white font-black text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-white/35 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max text-center">
          <AnimateOnView>
            <div className="text-5xl mb-4">🇫🇷</div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Prêt à commencer? Ready to begin?
            </h2>
            <p className="mt-4 text-white/60 max-w-lg mx-auto">
              Book a free French placement and counselling call — 30 minutes, no commitment, expert advice.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                Start French Today
                <ArrowRight size={18} />
              </a>
              <Link href="/courses" className="btn-outline text-lg px-8 py-4">
                View All Languages
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  );
}
