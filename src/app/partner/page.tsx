"use client";

import Link from "next/link";
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
  { icon: "institution", label: "Schools",      color: "#4c8aff" },
  { icon: "business",    label: "Corporates",   color: "#2b6aff" },
  { icon: "flight",      label: "Study Abroad", color: "#22C55E" },
  { icon: "handshake",   label: "Referral",     color: "#4ade80" },
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
      <section className="relative bg-[#060c1a] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2b6aff]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#22C55E]/8 blur-[100px]" />
        </div>
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <AnimateOnView>
              <span className="eyebrow-pill-outline">Partnerships</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mt-4 max-w-2xl leading-tight">
                Let&apos;s build something{" "}
                <span className="gradient-text">remarkable together.</span>
              </h1>
              <p className="mt-5 text-xl text-white/60 max-w-xl leading-relaxed">
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
                  className="glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: `${card.color}1a`, border: `1px solid ${card.color}33` }}
                  >
                    <MuiIcon name={card.icon} size={28} style={{ color: card.color }} />
                  </div>
                  <p className="text-white font-bold text-sm">{card.label}</p>
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
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow">Who We Partner With</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Four types of partnerships.{" "}
              <span className="gradient-text">One shared goal.</span>
            </h2>
          </AnimateOnView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.09}>
            {partnerTypes.map((p, i) => (
              <StaggerItem key={p.title}>
                <motion.div
                  className="rounded-2xl card-dark p-8 group overflow-hidden relative"
                  style={{ borderLeft: `3px solid ${i < 2 ? "#4c8aff33" : "#22C55E33"}` }}
                  whileHover={{ y: -4, borderColor: i < 2 ? "rgba(76,138,255,0.5)" : "rgba(34,197,94,0.5)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div className="mb-5">
                    <MuiIcon name={p.icon} size={44} style={{ color: i < 2 ? "#4c8aff" : "#22C55E" }} />
                  </div>
                  <h3 className="text-xl font-black text-white">{p.title}</h3>
                  <p className="text-white/45 mt-2 leading-relaxed">{p.desc}</p>
                  <a
                    href="mailto:partners@academyoflanguagesandbeyond.com"
                    className="mt-5 inline-flex items-center gap-1.5 text-[#22C55E] font-bold text-sm group-hover:gap-2.5 transition-all"
                  >
                    Explore this partnership <ArrowRight size={13} />
                  </a>
                </motion.div>
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
                Everything you need to{" "}
                <span className="gradient-text">deliver excellence.</span>
              </h2>
              <p className="mt-4 text-white/45 leading-relaxed">
                We handle the content, the faculty, the assessments, and the student experience. You focus on your core mission.
              </p>
            </AnimateOnView>

            <StaggerContainer className="grid sm:grid-cols-2 gap-3" staggerDelay={0.06}>
              {benefits.map((b) => (
                <StaggerItem key={b}>
                  <motion.div
                    className="flex items-start gap-3 card-dark rounded-xl p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <CheckCircle size={15} className="text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/55 leading-relaxed">{b}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <AnimateOnView className="text-center mb-12">
            <span className="eyebrow-pill-outline">The Partnership Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
              From enquiry to launch{" "}
              <span className="gradient-text">in 2–3 weeks.</span>
            </h2>
          </AnimateOnView>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#22C55E]/20 via-[#22C55E]/60 to-[#22C55E]/20" />

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {process.map((s, i) => (
                <StaggerItem key={s.step}>
                  <motion.div
                    className="glass rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-black text-lg"
                      style={{ background: "rgba(34,197,94,0.1)", border: "2px solid rgba(34,197,94,0.3)", color: "#22C55E" }}
                      animate={{ boxShadow: ["0 0 0px #22C55E44", "0 0 20px #22C55E44", "0 0 0px #22C55E44"] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                    >
                      {s.step}
                    </motion.div>
                    <h3 className="text-white font-bold text-lg">{s.title}</h3>
                    <p className="text-white/55 text-sm mt-2 leading-relaxed">{s.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Partner categories marquee */}
      <section className="py-10 bg-[#04080f] overflow-hidden">
        <div className="container-max px-5 md:px-8 mb-4">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest text-center">We work with</p>
        </div>
        <div className="flex gap-4 overflow-hidden">
          <motion.div
            className="flex gap-4 flex-shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {[...partnerCategories, ...partnerCategories].map((cat, i) => (
              <div key={i} className="card-dark rounded-xl px-6 py-3 text-sm font-semibold text-white/50 flex-shrink-0 whitespace-nowrap">
                {cat}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-padding bg-[#060c1a]">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnView direction="right">
              <span className="eyebrow-pill-outline">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
                Let&apos;s talk about your partnership.
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Whether you&apos;re a school adding French to your curriculum, an HR manager planning corporate training, or a consultant earning commissions — we have the right structure for you.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: <Mail size={16} className="text-[#22C55E]" />, label: "partners@academyoflanguagesandbeyond.com", href: "mailto:partners@academyoflanguagesandbeyond.com" },
                  { icon: <Phone size={16} className="text-[#22C55E]" />, label: "+91 98765 43210", href: "https://wa.me/919876543210" },
                  { icon: <Building2 size={16} className="text-[#22C55E]" />, label: "Bengaluru, India", href: "#" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#22C55E]/20 transition-colors">
                      {item.icon}
                    </div>
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </AnimateOnView>

            <AnimateOnView direction="left">
              <div className="card-dark rounded-3xl p-8">
                <h3 className="text-xl font-black text-white mb-6">Quick Enquiry</h3>
                <div className="space-y-4">
                  {[
                    { label: "Your Name", placeholder: "Rahul Sharma", type: "text" },
                    { label: "Organisation", placeholder: "DPS School / Infosys / Self", type: "text" },
                    { label: "Email", placeholder: "you@organisation.com", type: "email" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-[#04080f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#22C55E] transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1.5">Partnership Type</label>
                    <select className="w-full bg-[#04080f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-[#22C55E] transition-colors">
                      <option>School / College Partner</option>
                      <option>Corporate Training</option>
                      <option>Study Abroad Consultant</option>
                      <option>Referral Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-1.5">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-[#04080f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#22C55E] transition-colors resize-none"
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
