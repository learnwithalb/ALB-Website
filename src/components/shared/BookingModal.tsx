"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, CheckCircle, ArrowRight, Lock, Phone, Mail, User,
  ChevronDown, CalendarCheck, Shield, Zap, LayoutGrid,
} from "lucide-react";
import { useBooking } from "./BookingContext";

const PROGRAMMES = [
  "French Language",
  "German Language",
  "Spanish Language",
  "Japanese Language",
  "Korean Language",
  "IELTS Coaching",
  "+Beyond (Soft Skills)",
  "ALB Junior (Ages 6–16)",
  "Not sure yet, help me choose",
];

const BENEFITS = [
  { icon: User,   title: "Personalised guidance",  desc: "Expert advice tailored to your goals" },
  { icon: Shield, title: "100% Confidential",       desc: "Your privacy is our priority" },
  { icon: CheckCircle, title: "No obligation",      desc: "You're in control, always" },
];

const overlayV = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.18 } },
};

const panelV = {
  hidden:  { opacity: 0, scale: 0.94, y: 24 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { type: "spring" as const, stiffness: 360, damping: 30, delay: 0.04 } },
  exit:    { opacity: 0, scale: 0.96, y: 16, transition: { duration: 0.15 } },
};

const successV = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 400, damping: 28 } },
};

interface FormState {
  name: string; phone: string; email: string; programme: string; goal: string;
}
const empty: FormState = { name: "", phone: "", email: "", programme: "", goal: "" };

export function BookingModal() {
  const { isOpen, topic, closeModal } = useBooking();

  const [form, setForm]       = useState<FormState>(empty);
  const [errors, setErrors]   = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen && topic) setForm((f) => ({ ...f, programme: topic }));
    if (!isOpen) {
      const t = setTimeout(() => { setForm(empty); setErrors({}); setSuccess(false); }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen, topic]);

  useEffect(() => {
    if (!isOpen) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [isOpen, closeModal]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim())                             e.name = "Required";
    if (!form.phone.trim())                            e.phone = "Required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.programme)                               e.programme = "Please select";
    return e;
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSuccess(true);
  }

  /* ── Field style helpers (right panel = white bg) ── */
  const inputCls = (k: keyof FormState) =>
    "w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 " +
    "focus:outline-none focus:ring-2 transition-all duration-200 " +
    (errors[k]
      ? "border-red-400 focus:ring-red-200"
      : "border-gray-200 focus:ring-[#3b5bdb]/30 focus:border-[#3b5bdb]");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          variants={overlayV} initial="hidden" animate="visible" exit="exit"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

          {/* Modal shell */}
          <motion.div
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex"
            style={{ minHeight: 540 }}
            variants={panelV} initial="hidden" animate="visible" exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ─── LEFT PANEL ─── */}
            <div
              className="hidden md:flex flex-col justify-between w-[42%] p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(150deg, #1b2a63 0%, #141f4d 55%, #0f1840 100%)",
              }}
            >
              {/* Decorative wave / glow at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 160% 80% at 50% 120%, rgba(56,189,248,0.22) 0%, transparent 70%)",
                }}
              />
              {/* Subtle grid lines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 48px), repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 48px)",
                }}
              />

              <div className="relative z-10">
                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#3b5bdb] bg-[#3b5bdb]/12 border border-[#3b5bdb]/20 px-3 py-1.5 rounded-full mb-7">
                  ✦ Free · No Commitment
                </span>

                {/* Calendar icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#3b5bdb]/10 border border-[#3b5bdb]/20 flex items-center justify-center mb-6">
                  <CalendarCheck size={26} className="text-[#3b5bdb]" />
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-black text-white leading-snug mb-3">
                  Book your{" "}
                  <span className="text-[#3b5bdb]">free<br />counselling</span>
                  <br />session
                </h2>
                <p className="text-white/45 text-sm leading-relaxed">
                  30 minutes with an expert.<br />We map your path, you decide.
                </p>
              </div>

              {/* Benefit list */}
              <div className="relative z-10 mt-8 space-y-4">
                {BENEFITS.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#3b5bdb]/12 border border-[#3b5bdb]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-[#3b5bdb]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{title}</p>
                      <p className="text-white/40 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── RIGHT PANEL ─── */}
            <div className="flex-1 bg-white flex flex-col">
              {/* Close button */}
              <div className="flex justify-end p-4 pb-0">
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X size={14} className="text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-7 pb-7 pt-2 md:px-8 md:pb-8">
                <AnimatePresence mode="wait">

                  {/* ── SUCCESS ── */}
                  {success ? (
                    <motion.div
                      key="success"
                      variants={successV} initial="hidden" animate="visible"
                      className="flex flex-col items-center text-center py-10"
                    >
                      <motion.div
                        animate={{ scale: [0.8, 1.15, 1], opacity: [0, 1, 1] }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 rounded-full bg-[#3b5bdb]/10 border border-[#3b5bdb]/30 flex items-center justify-center mb-6"
                      >
                        <CheckCircle size={40} className="text-[#3b5bdb]" />
                      </motion.div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">You&apos;re booked in!</h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
                        Our team will reach out within <strong className="text-gray-700">24 hours</strong> to confirm your free session.
                      </p>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#3b5bdb] hover:bg-[#2f49c0] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
                      >
                        Message us on WhatsApp <ArrowRight size={15} />
                      </a>
                      <button onClick={closeModal} className="mt-4 text-gray-400 text-sm hover:text-gray-600 transition-colors">
                        Close
                      </button>
                    </motion.div>

                  ) : (

                    /* ── FORM ── */
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                      {/* Mobile-only heading */}
                      <div className="md:hidden mb-5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#3b5bdb] bg-[#3b5bdb]/10 px-3 py-1 rounded-full">
                          Free · No Commitment
                        </span>
                        <h2 className="text-xl font-black text-gray-900 mt-2">
                          Book your free <span className="text-[#3b5bdb]">counselling session</span>
                        </h2>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                        {/* Full name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Full name
                          </label>
                          <div className="relative">
                            <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                              type="text" placeholder="Your full name"
                              value={form.name} onChange={set("name")}
                              className={inputCls("name") + " pl-9"}
                            />
                          </div>
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Phone + Email */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                            <div className="relative">
                              <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                              <input
                                type="tel" placeholder="+91 98765 43210"
                                value={form.phone} onChange={set("phone")}
                                className={inputCls("phone") + " pl-9"}
                              />
                            </div>
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                            <div className="relative">
                              <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                              <input
                                type="email" placeholder="you@email.com"
                                value={form.email} onChange={set("email")}
                                className={inputCls("email") + " pl-9"}
                              />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        {/* Programme */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            I&apos;m interested in
                          </label>
                          <div className="relative">
                            <LayoutGrid size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select
                              value={form.programme} onChange={set("programme")}
                              className={inputCls("programme") + " appearance-none pl-9 pr-9 cursor-pointer"}
                            >
                              <option value="" disabled>Choose a programme…</option>
                              {PROGRAMMES.map((p) => (
                                <option key={p} value={p}>{p}</option>
                              ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.programme && <p className="text-red-500 text-xs mt-1">{errors.programme}</p>}
                        </div>

                        {/* Goal */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Your goal{" "}
                            <span className="font-normal text-gray-400">(optional)</span>
                          </label>
                          <textarea
                            placeholder="e.g. I want to clear DELF B2 by December for my visa application…"
                            value={form.goal} onChange={set("goal")} rows={3}
                            className={inputCls("goal") + " resize-none"}
                          />
                        </div>

                        {/* Privacy box */}
                        <div className="flex items-center gap-3 bg-[#eef2ff] border border-[#c2d2ff] rounded-xl px-4 py-3">
                          <Lock size={14} className="text-[#3b5bdb] flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-gray-700">Your details are never shared.</p>
                            <p className="text-xs text-gray-500">We hate spam too.</p>
                          </div>
                        </div>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={loading}
                          whileHover={{ scale: loading ? 1 : 1.015 }}
                          whileTap={{ scale: loading ? 1 : 0.985 }}
                          className="w-full flex items-center justify-center gap-2 bg-[#3b5bdb] hover:bg-[#2f49c0] disabled:bg-[#3b5bdb]/60 text-white font-bold text-base rounded-2xl py-4 transition-colors duration-200"
                        >
                          {loading ? (
                            <>
                              <motion.span
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                              />
                              Booking your session…
                            </>
                          ) : (
                            <>
                              Book My Free Session
                              <ArrowRight size={18} />
                            </>
                          )}
                        </motion.button>

                        {/* Speed note */}
                        <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
                          <Zap size={11} className="text-yellow-400" />
                          Takes less than 60 seconds
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
