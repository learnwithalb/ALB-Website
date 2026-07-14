"use client";

import { FormEvent, useEffect, useState } from "react";
import { CheckCircle, Download, Mail, Phone, User, X } from "lucide-react";
import { useBrochure } from "./BrochureContext";
import { submitLead } from "@/lib/google-sheet";

interface FormState { name: string; email: string; phone: string; }
const empty: FormState = { name: "", email: "", phone: "" };

export function BrochureModal() {
  const { request, closeBrochureForm } = useBrochure();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!request) {
      const timeout = setTimeout(() => {
        setForm(empty); setErrors({}); setSuccess(false); setSubmitError(null);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [request]);

  useEffect(() => {
    if (!request) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && closeBrochureForm();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [request, closeBrochureForm]);

  const set = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name";
    if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number";
    if (!form.email.trim() || !form.email.includes("@")) nextErrors.email = "Please enter a valid email";
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return; }
    if (!request) return;

    setErrors({}); setLoading(true); setSubmitError(null);
    try {
      await submitLead({ ...form, programme: request.title, goal: "Brochure download request" });
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setSubmitError(error instanceof Error ? error.message : "We could not submit your request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!request) return null;
  const fieldClass = "w-full rounded-xl border border-gray-200 px-10 py-3 text-sm text-gray-900 outline-none transition focus:border-royal-500 focus:ring-2 focus:ring-royal-100";

  return (
    <div className="fixed inset-0 z-[210] flex items-center justify-center p-4">
      <button aria-label="Close brochure form" className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeBrochureForm} />
      <div role="dialog" aria-modal="true" aria-labelledby="brochure-form-title" className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button aria-label="Close" onClick={closeBrochureForm} className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200"><X size={17} /></button>
        {success ? (
          <div className="py-5 text-center">
            <CheckCircle size={52} className="mx-auto mb-5 text-emerald-500" />
            <h2 id="brochure-form-title" className="text-2xl font-black text-ink">Your brochure is ready</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">Thanks, {form.name.split(" ")[0]}. Your request has been received.</p>
            <a href={request.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-royal-600 px-5 py-3.5 font-bold text-white transition hover:bg-royal-700">
              <Download size={18} /> Download brochure
            </a>
            <button onClick={closeBrochureForm} className="mt-4 text-sm font-medium text-gray-500 hover:text-gray-800">Close</button>
          </div>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-royal-600">Free brochure</p>
            <h2 id="brochure-form-title" className="mt-2 pr-6 text-2xl font-black text-ink">Get the {request.title} brochure</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">Share your details and your download will be available straight away.</p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <label className="block text-sm font-bold text-gray-700">Full name<div className="relative mt-1.5"><User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" /><input value={form.name} onChange={set("name")} className={fieldClass} placeholder="Your full name" /></div>{errors.name && <span className="mt-1 block text-xs text-red-500">{errors.name}</span>}</label>
              <label className="block text-sm font-bold text-gray-700">Email address<div className="relative mt-1.5"><Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" /><input type="email" value={form.email} onChange={set("email")} className={fieldClass} placeholder="you@email.com" /></div>{errors.email && <span className="mt-1 block text-xs text-red-500">{errors.email}</span>}</label>
              <label className="block text-sm font-bold text-gray-700">Phone number<div className="relative mt-1.5"><Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" /><input type="tel" value={form.phone} onChange={set("phone")} className={fieldClass} placeholder="+91 98765 43210" /></div>{errors.phone && <span className="mt-1 block text-xs text-red-500">{errors.phone}</span>}</label>
              {submitError && <p className="text-center text-sm text-red-500">{submitError}</p>}
              <button type="submit" disabled={loading} className="w-full rounded-xl bg-royal-600 px-5 py-3.5 font-bold text-white transition hover:bg-royal-700 disabled:cursor-wait disabled:opacity-70">{loading ? "Submitting…" : "Submit & download"}</button>
              <p className="text-center text-xs text-gray-400">We only use your details to help with your enquiry.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
