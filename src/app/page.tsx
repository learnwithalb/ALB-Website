import { ArrowRight, Layers, Sparkles, Zap } from "lucide-react";
import { MotionSection } from "@/components/shared/motion-section";

const features = [
  {
    icon: Sparkles,
    title: "Sharp Design",
    text: "A clean starting point with responsive layout, strong spacing, and a confident visual rhythm.",
  },
  {
    icon: Zap,
    title: "Fast Stack",
    text: "Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion are wired and ready.",
  },
  {
    icon: Layers,
    title: "Easy To Extend",
    text: "Simple components and clear sections make it painless to turn this into the real site.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#171512]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between">
          <a className="text-lg font-black tracking-[0.18em]" href="#">
            ALB
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#5e594f] sm:flex">
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#171512] px-4 text-sm font-bold text-white transition hover:bg-[#373027]"
            href="#contact"
          >
            Start
            <ArrowRight size={16} strokeWidth={2.4} />
          </a>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionSection className="max-w-3xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.26em] text-[#b14f3b]">
              Next.js Starter
            </p>
            <h1 className="text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
              Build the ALB website with room to move.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5e594f] sm:text-xl">
              A polished foundation is now in place: modern React, utility-first
              styling, smooth motion, icons, and a homepage that can become the
              real product quickly.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#171512] px-6 font-bold text-white transition hover:bg-[#373027]"
                href="#work"
              >
                View setup
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d8ccbb] px-6 font-bold text-[#171512] transition hover:border-[#171512]"
                href="#stack"
              >
                See stack
              </a>
            </div>
          </MotionSection>

          <MotionSection
            className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-[#ded4c5] bg-[#f0e7d9] p-4 shadow-[0_24px_80px_rgba(36,28,20,0.14)]"
            delay={0.15}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(177,79,59,0.24),transparent_38%),radial-gradient(circle_at_76%_20%,rgba(40,113,103,0.2),transparent_32%)]" />
            <div className="relative flex h-full min-h-[388px] flex-col justify-between rounded-[6px] border border-white/60 bg-white/45 p-6 backdrop-blur">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#b14f3b]" />
                  <span className="h-3 w-3 rounded-full bg-[#d7a93f]" />
                  <span className="h-3 w-3 rounded-full bg-[#287167]" />
                </div>
                <div className="mt-10 grid gap-3">
                  <div className="h-4 w-28 rounded-full bg-[#171512]" />
                  <div className="h-4 w-56 rounded-full bg-[#b9ad9b]" />
                  <div className="h-4 w-44 rounded-full bg-[#d2c5b4]" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["Next", "Tailwind", "Motion"].map((item) => (
                  <div
                    className="rounded-[8px] border border-white/80 bg-white/70 p-4"
                    key={item}
                  >
                    <div className="mb-8 h-8 w-8 rounded-full bg-[#287167]" />
                    <p className="text-sm font-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <section
        className="border-y border-[#ded4c5] bg-white px-5 py-16 sm:px-8 lg:px-10"
        id="work"
      >
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <MotionSection
              className="rounded-[8px] border border-[#e8dfd3] bg-[#fbfaf7] p-6"
              key={feature.title}
            >
              <feature.icon className="mb-8 text-[#b14f3b]" size={28} />
              <h2 className="text-xl font-black">{feature.title}</h2>
              <p className="mt-3 leading-7 text-[#5e594f]">{feature.text}</p>
            </MotionSection>
          ))}
        </div>
      </section>

      <section className="bg-[#171512] px-5 py-16 text-white sm:px-8 lg:px-10" id="stack">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d7a93f]">
              Ready
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">
              Run the dev server and start shaping the real website.
            </h2>
          </div>
          <div
            className="rounded-[8px] border border-white/15 bg-white/10 px-5 py-4 font-mono text-sm text-[#f2eadf]"
            id="contact"
          >
            npm run dev
          </div>
        </div>
      </section>
    </main>
  );
}
