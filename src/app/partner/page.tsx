"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, Phone, Building2 } from "lucide-react";
import { AnimateOnView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnView";
import { partnerTypes } from "@/lib/constants";
import { MuiIcon } from "@/lib/icons";

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
  { step: "01", title: "Get in Touch", desc: "Reach out via WhatsApp, email, or the form. We respond within 24 hours." },
  { step: "02", title: "Needs Discovery", desc: "A 30-minute call to understand your goals, audience, and timeline." },
  { step: "03", title: "Custom Proposal", desc: "We design a tailored programme with curriculum, pricing, and scheduling." },
  { step: "04", title: "Launch & Support", desc: "Onboard your team, with ongoing ALB support from day one to completion." },
];

const HERO_CARDS = [
  { icon: "institution", label: "Schools",      color: "#3b5bdb" },
  { icon: "business",    label: "Corporates",   color: "#2f49c0" },
  { icon: "flight",      label: "Study Abroad", color: "#0ea5e9" },
  { icon: "handshake",   label: "Referral",     color: "#6d8bff" },
];

const partnerCategories = [
  "Schools & Colleges", "Study Abroad Consultants", "MNCs & Corporates",
  "Government Institutions", "Co-working Spaces", "Alumni Networks",
  "Ed-Tech Platforms", "HR Consultancies",
];

export default function PartnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-light pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-70" />
        <div className="blob blob-royal w-[460px] h-[460px] top-0 right-0 pointer-events-none" />
        <div className="blob blob-sky w-[400px] h-[400px] bottom-0 left-0 pointer-events-none" />
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <AnimateOnView>
              <span className="eyebrow-pill-outline">Partnerships</span>
              <h1 className="text-4xl md:text-6xl font-black text-ink mt-4 max-w-2xl leading-tight">
                Let&apos;s build something{" "}
                <span className="gradient-text">remarkable together.</span>
              </h1>
              <p className="mt-5 text-xl text-body max-w-xl leading-relaxed">
                ALB partners with schools, colleges, corporates, and consultants who share our belief: language and communication skills change lives.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:partners@academyoflanguagesandbeyond.com" className="btn-primary">
                  Start a Partnership <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  WhatsApp Us
                </a>
              </div>
            </AnimateOnView>

            {/* Right — 2x2 floating cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {HERO_CARDS.map((card, i) => (
                <motion.div
                  key={card.label}
                  className="card rounded-2xl p-6 flex flex-col items-center gap-3 text-center"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: `${card.color}14`, border: `1px solid ${card.color}33` }}
                  >
                    <MuiIcon name={card.icon} size={28} style={{ color: card.color }} />
                  </div>
                  <p className="text-ink font-bold text-sm">{card.label}</p>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: card.color }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-sky w-[420px] h-[420px] top-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Who We Partner With</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-2">
              Four types of partnerships.{" "}
              <span className="gradient-text">One shared goal.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.09}>
            {partnerTypes.map((p, i) => {
              const accent = i < 2 ? "#3b5bdb" : "#0ea5e9";
              return (
                <StaggerItem key={p.title}>
                  <motion.div
                    className="rounded-2xl card p-8 group overflow-hidden relative"
                    style={{ borderLeft: `3px solid ${accent}` }}
                    whileHover={{ y: -4, boxShadow: `0 24px 60px ${accent}22` }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: `${accent}14` }}>
                      <MuiIcon name={p.icon} size={30} style={{ color: accent }} />
                    </div>
                    <h3 className="text-xl font-black text-ink">{p.title}</h3>
                    <p className="text-muted mt-2 leading-relaxed">{p.desc}</p>
                    <a
                      href="mailto:partners@academyoflanguagesandbeyond.com"
                      className="mt-5 inline-flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all"
                      style={{ color: accent }}
                    >
                      Explore this partnership <ArrowRight size={13} />
                    </a>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding sec-light relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] bottom-0 right-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow">Partner Benefits</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-2 leading-tight">
                Everything you need to{" "}
                <span className="gradient-text">deliver excellence.</span>
              </h2>
              <p className="mt-4 text-body leading-relaxed">
                We handle the content, the faculty, the assessments, and the student experience. You focus on your core mission.
              </p>
            </AnimateOnView>

            <StaggerContainer className="grid sm:grid-cols-2 gap-3" staggerDelay={0.06}>
              {benefits.map((b) => (
                <StaggerItem key={b}>
                  <motion.div
                    className="flex items-start gap-3 card rounded-xl p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <CheckCircle size={15} className="text-royal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-body leading-relaxed">{b}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="container-max relative z-10">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow-pill-outline">The Partnership Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-ink mt-4">
              From enquiry to launch{" "}
              <span className="gradient-text">in 2–3 weeks.</span>
            </h2>
          </AnimateOnView>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-royal-200 via-royal-500 to-royal-200" />

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {process.map((s, i) => (
                <StaggerItem key={s.step}>
                  <motion.div
                    className="card rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-black text-lg bg-royal-50 border-2 border-royal-200 text-royal-600"
                      animate={{ boxShadow: ["0 0 0px rgba(59,91,219,0.3)", "0 0 22px rgba(59,91,219,0.3)", "0 0 0px rgba(59,91,219,0.3)"] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                    >
                      {s.step}
                    </motion.div>
                    <h3 className="text-ink font-bold text-lg">{s.title}</h3>
                    <p className="text-muted text-sm mt-2 leading-relaxed">{s.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Partner categories marquee */}
      <section className="py-10 bg-white border-y border-line overflow-hidden">
        <div className="container-max px-5 md:px-8 mb-4">
          <p className="text-muted text-xs font-bold uppercase tracking-widest text-center">We work with</p>
        </div>
        <div className="flex gap-4 overflow-hidden">
          <motion.div
            className="flex gap-4 flex-shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {[...partnerCategories, ...partnerCategories].map((cat, i) => (
              <div key={i} className="bg-royal-50 border border-royal-100 rounded-xl px-6 py-3 text-sm font-semibold text-royal-700 flex-shrink-0 whitespace-nowrap">
                {cat}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-padding sec-mist relative overflow-hidden">
        <div className="blob blob-royal w-[420px] h-[420px] top-0 left-[-8%] opacity-50 pointer-events-none" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-outline">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-black text-ink mt-4">
                Let&apos;s talk about your partnership.
              </h2>
              <p className="mt-4 text-body leading-relaxed">
                Whether you&apos;re a school adding French to your curriculum, an HR manager planning corporate training, or a consultant earning commissions — we have the right structure for you.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: <Mail size={16} className="text-royal-500" />, label: "partners@academyoflanguagesandbeyond.com", href: "mailto:partners@academyoflanguagesandbeyond.com" },
                  { icon: <Phone size={16} className="text-royal-500" />, label: "+91 98765 43210", href: "https://wa.me/919876543210" },
                  { icon: <Building2 size={16} className="text-royal-500" />, label: "Bengaluru, India", href: "#" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-body hover:text-royal-700 transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-royal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-royal-100 transition-colors">
                      {item.icon}
                    </div>
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left">
              <div className="card rounded-3xl p-8">
                <h3 className="text-xl font-black text-ink mb-6">Quick Enquiry</h3>
                <div className="space-y-4">
                  {[
                    { label: "Your Name", placeholder: "Rahul Sharma", type: "text" },
                    { label: "Organisation", placeholder: "DPS School / Infosys / Self", type: "text" },
                    { label: "Email", placeholder: "you@organisation.com", type: "email" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-mist border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder-royal-300 focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-1.5">Partnership Type</label>
                    <select className="w-full bg-mist border border-line rounded-xl px-4 py-3 text-sm text-body focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 transition-all">
                      <option>School / College Partner</option>
                      <option>Corporate Training</option>
                      <option>Study Abroad Consultant</option>
                      <option>Referral Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted uppercase tracking-wider block mb-1.5">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-mist border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder-royal-300 focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-royal-500/20 transition-all resize-none"
                    />
                  </div>
                  <motion.a
                    href="mailto:partners@academyoflanguagesandbeyond.com"
                    className="btn-primary w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Enquiry <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>
    </>
  );
}
