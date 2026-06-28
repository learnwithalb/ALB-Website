"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, ShieldCheck, CheckCircle, QrCode, XCircle } from "lucide-react";
import { AnimateOnView } from "@/components/shared/AnimateOnView";
import { siteConfig } from "@/lib/constants";

interface Cert {
  name: string;
  programme: string;
  level: string;
  id: string;
  issued: string;
}

/* Demo credential records — replace with a live lookup when the registry API is ready. */
const CERTIFICATES: Record<string, Cert> = {
  "ALB-FR-A2-2026-001": { name: "John Doe", programme: "French Language Programme", level: "A2", id: "ALB-FR-A2-2026-001", issued: "20 June 2026" },
  "ALB-DE-B1-2026-014": { name: "Aarav Sharma", programme: "German Language Programme", level: "B1", id: "ALB-DE-B1-2026-014", issued: "12 May 2026" },
  "ALB-EN-C1-2026-042": { name: "Priya Verma", programme: "English Programme · IELTS Advantage", level: "C1", id: "ALB-EN-C1-2026-042", issued: "03 April 2026" },
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10.5px] font-bold uppercase tracking-wider text-muted mb-1">{label}</p>
      <div className="text-ink font-bold text-sm md:text-[15px] leading-snug">{children}</div>
    </div>
  );
}

export default function VerifyCertificatePage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Cert | "notfound" | null>(CERTIFICATES["ALB-FR-A2-2026-001"]);

  const verifiedOn = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  const verify = () => {
    const key = query.trim().toUpperCase();
    if (!key) return;
    setResult(CERTIFICATES[key] ?? "notfound");
  };

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative hero-light pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />
        <div className="blob blob-royal w-[460px] h-[420px] -top-16 right-[6%] pointer-events-none opacity-70" />
        <div className="blob blob-sky w-[380px] h-[380px] bottom-0 left-[-6%] pointer-events-none opacity-60" />

        <div className="container-max px-5 md:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <AnimateOnView>
            <span className="eyebrow-pill-outline">India&apos;s First Language + Soft Skills Academy</span>
            <h1 className="text-4xl md:text-6xl font-black text-ink mt-5 leading-[1.05] tracking-tight">
              Certificate <span className="gradient-text">Verification</span>
            </h1>
            <p className="mt-5 text-lg text-body leading-relaxed max-w-xl mx-auto">
              Verify the authenticity of certificates issued by Academy of Languages and Beyond.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-royal-700">
              <ShieldCheck size={15} className="text-royal-500" /> Official Verification Portal
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════ VERIFY FORM ══════════ */}
      <section className="sec-light relative pb-10">
        <div className="container-max px-5 md:px-8 relative z-10">
          <AnimateOnView className="max-w-3xl mx-auto">
            <div className="card rounded-3xl p-6 md:p-8 shadow-[0_24px_60px_-30px_rgba(16,23,51,0.3)]">
              <label htmlFor="certid" className="block text-sm font-bold text-ink mb-2">Certificate ID</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    id="certid"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && verify()}
                    placeholder="Enter Certificate ID"
                    className="w-full rounded-xl border border-line bg-mist/60 pl-11 pr-4 py-3.5 text-sm font-mono text-ink placeholder:text-muted/70 outline-none transition-all focus:border-royal-400 focus:bg-white focus:ring-4 focus:ring-royal-100"
                  />
                </div>
                <button onClick={verify} className="btn-primary justify-center whitespace-nowrap px-6 py-3.5">
                  Verify Certificate <ArrowRight size={16} />
                </button>
              </div>
              <p className="mt-3 text-xs text-muted">
                Example: <span className="font-mono font-semibold text-body">ALB-FR-A2-2026-001</span>
              </p>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-mist border border-line px-4 py-3 text-sm text-body">
                <QrCode size={18} className="text-royal-500 flex-shrink-0" />
                You can also scan the QR code printed on your certificate.
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ══════════ RESULT ══════════ */}
      <section className="sec-light relative pb-24">
        <div className="container-max px-5 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {result === "notfound" ? (
                <motion.div
                  key="notfound"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl overflow-hidden border border-rose-200 bg-white shadow-[0_24px_60px_-30px_rgba(16,23,51,0.25)]"
                >
                  <div className="flex items-center justify-between gap-4 px-6 py-5 bg-rose-50 border-b border-rose-100">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                        <XCircle size={20} className="text-white" />
                      </span>
                      <div>
                        <p className="font-black text-ink">Certificate Not Found</p>
                        <p className="text-sm text-body">We couldn&apos;t find a credential matching that ID.</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-rose-600 border border-rose-300 rounded-full px-3 py-1 bg-white flex-shrink-0">Invalid</span>
                  </div>
                  <div className="p-6 md:p-8 text-sm text-body leading-relaxed">
                    Please double-check the certificate ID and try again. If you believe this is an error,
                    contact us at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-royal-600 font-semibold hover:underline">{siteConfig.email}</a>{" "}
                    with a copy of your certificate.
                  </div>
                </motion.div>
              ) : result ? (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl overflow-hidden border border-emerald-200 bg-white shadow-[0_30px_70px_-32px_rgba(16,23,51,0.3)]"
                >
                  {/* green header */}
                  <div className="flex items-center justify-between gap-4 px-6 py-5 bg-emerald-50 border-b border-emerald-100">
                    <div className="flex items-center gap-3">
                      <motion.span
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                        className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0"
                      >
                        <CheckCircle size={20} className="text-white" />
                      </motion.span>
                      <div>
                        <p className="font-black text-ink">Certificate Successfully Verified</p>
                        <p className="text-sm text-body">This credential is authentic and was issued by ALB.</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 border border-emerald-300 rounded-full px-3 py-1 bg-white flex-shrink-0">Valid</span>
                  </div>

                  {/* body */}
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 p-6 md:p-8">
                    {/* details */}
                    <div className="flex flex-col">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                        <Field label="Student Name">{result.name}</Field>
                        <Field label="Programme">{result.programme}</Field>
                        <Field label="Level">{result.level}</Field>
                        <Field label="Certificate ID"><span className="font-mono">{result.id}</span></Field>
                        <Field label="Issue Date">{result.issued}</Field>
                        <Field label="Status">
                          <span className="inline-flex items-center gap-1.5 text-emerald-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Valid
                          </span>
                        </Field>
                        <Field label="Issued By">Academy of Languages and Beyond</Field>
                        <Field label="Founder">Jasmine Kaur</Field>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a href="/images/certificate/Alb-certificate.png" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3">
                          View Certificate <ArrowRight size={16} />
                        </a>
                        <span className="text-xs text-muted">Verified on {verifiedOn}</span>
                      </div>
                    </div>

                    {/* certificate preview */}
                    <div className="relative flex items-center justify-center">
                      <div className="blob blob-sky absolute -inset-2 opacity-50 pointer-events-none" />
                      <motion.div
                        className="relative rounded-2xl overflow-hidden ring-1 ring-line shadow-[0_24px_60px_-30px_rgba(16,23,51,0.4)]"
                        whileHover={{ rotate: -1.5, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/images/certificate/Alb-certificate.png"
                          alt={`ALB certificate for ${result.name}`}
                          width={1536}
                          height={1024}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
