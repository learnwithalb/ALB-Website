import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { partnerTypes } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Partner with ALB | Schools, Corporates & Referral Partners",
  description: "Partner with Academy of Languages & Beyond. Bring world-class language and soft skills training to your school, college, or corporate team.",
};

const benefits = [
  "Dedicated relationship manager for every partner",
  "Custom curriculum aligned to your institution's goals",
  "Branded delivery options available",
  "Flexible scheduling — evenings, weekends, intensive",
  "Competitive commission structure for referral partners",
  "Regular reporting and progress dashboards",
  "Co-marketing and co-branding opportunities",
  "Access to ALB's certified faculty network",
];

const process = [
  { step: "01", title: "Get in Touch", desc: "Reach out via WhatsApp, email, or fill the enquiry form. We respond within 24 hours." },
  { step: "02", title: "Needs Discovery", desc: "A 30-minute call with our partnerships team to understand your goals, audience, and timeline." },
  { step: "03", title: "Custom Proposal", desc: "We design a tailored programme with curriculum, pricing, and scheduling options." },
  { step: "04", title: "Launch & Support", desc: "Onboard your students or team, with ongoing ALB support from day one to completion." },
];

export default function PartnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#060c1a] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#06b6d4]/12 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#22C55E]/8 blur-[80px]" />
        </div>
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView>
            <span className="eyebrow-pill-outline">Partnerships</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-4 max-w-3xl leading-tight">
              Let&apos;s build something
              <span className="gradient-text"> remarkable together.</span>
            </h1>
            <p className="mt-5 text-xl text-white/60 max-w-2xl leading-relaxed">
              ALB partners with schools, colleges, corporates, and consultants who
              share our belief: that language and communication skills change lives.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:partners@academyoflanguagesandbeyond.com" className="btn-primary">
                Start a Partnership
                <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Us
              </a>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Who We Partner With</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Four types of partnerships.
              <span className="gradient-text"> One shared goal.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.09}>
            {partnerTypes.map((p) => (
              <StaggerItem key={p.title}>
                <div className="rounded-2xl card-dark p-8 hover:border-white/12 transition-all group">
                  <div className="text-5xl mb-5">{p.icon}</div>
                  <h3 className="text-xl font-black text-white">{p.title}</h3>
                  <p className="text-white/45 mt-2 leading-relaxed">{p.desc}</p>
                  <a href="mailto:partners@academyoflanguagesandbeyond.com" className="mt-5 inline-flex items-center gap-1.5 text-[#22C55E] font-bold text-sm group-hover:gap-2.5 transition-all">
                    Explore this partnership <ArrowRight size={13} />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-[#04080f]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow">Partner Benefits</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2 leading-tight">
                Everything you need to
                <span className="gradient-text"> deliver excellence.</span>
              </h2>
              <p className="mt-4 text-white/45 leading-relaxed">
                We handle the content, the faculty, the assessments, and the student
                experience. You focus on your core mission.
              </p>
            </AnimateOnView>

            <StaggerContainer className="grid sm:grid-cols-2 gap-3" staggerDelay={0.06}>
              {benefits.map((b) => (
                <StaggerItem key={b}>
                  <div className="flex items-start gap-3 card-dark rounded-xl p-4">
                    <CheckCircle size={15} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/55 leading-relaxed">{b}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding gradient-navy">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow-pill-outline">The Partnership Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
              From enquiry to launch
              <span className="gradient-text"> in 2–3 weeks.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.09}>
            {process.map((s) => (
              <StaggerItem key={s.step}>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-[#22C55E]/30 mb-3">{s.step}</div>
                  <h3 className="text-white font-bold text-lg">{s.title}</h3>
                  <p className="text-white/55 text-sm mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max text-center">
          <AnimateOnView>
            <span className="eyebrow">Our Partners</span>
            <h2 className="text-3xl font-black text-white mt-2">
              In good company.
            </h2>
            <p className="mt-4 text-white/40 max-w-lg mx-auto">
              We partner with leading schools, colleges, MNCs, and study abroad consultants across India.
              Partner logos available upon request.
            </p>
          </AnimateOnView>

          <StaggerContainer className="flex flex-wrap justify-center gap-5 mt-10" staggerDelay={0.06}>
            {["Schools & Colleges", "Study Abroad Consultants", "MNCs & Corporates", "Government Institutions", "Co-working Spaces", "Alumni Networks"].map((cat) => (
              <StaggerItem key={cat}>
                <div className="card-dark rounded-2xl px-6 py-4 text-sm font-semibold text-white/50">
                  {cat}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form / CTA */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-outline">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
                Let&apos;s talk about your partnership.
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Whether you&apos;re a school looking to add French to your curriculum,
                an HR manager planning corporate training, or a consultant earning commissions —
                we have the right structure for you.
              </p>
              <div className="mt-6 space-y-3">
                <a href="mailto:partners@academyoflanguagesandbeyond.com" className="flex items-center gap-3 text-white hover:text-[#22C55E] transition-colors">
                  <Mail size={16} className="text-[#22C55E]" />
                  partners@academyoflanguagesandbeyond.com
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#22C55E] transition-colors">
                  <span className="text-[#22C55E]">📱</span>
                  WhatsApp: +91 98765 43210
                </a>
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left">
              <div className="card-dark rounded-3xl p-8">
                <h3 className="text-xl font-black text-white mb-5">Quick Enquiry</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1.5">Your Name</label>
                    <input type="text" placeholder="Rahul Sharma" className="w-full border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22C55E] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1.5">Organisation</label>
                    <input type="text" placeholder="DPS School / Infosys / Self" className="w-full border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22C55E] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1.5">Partnership Type</label>
                    <select className="w-full border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22C55E] transition-colors bg-[#0d1729] text-white/80">
                      <option>School / College Partner</option>
                      <option>Corporate Training</option>
                      <option>Study Abroad Consultant</option>
                      <option>Referral Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1.5">Message</label>
                    <textarea rows={3} placeholder="Tell us about your requirements..." className="w-full border-white/8 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22C55E] transition-colors resize-none" />
                  </div>
                  <a href="mailto:partners@academyoflanguagesandbeyond.com" className="btn-primary w-full justify-center">
                    Send Enquiry
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>
    </>
  );
}
