"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navItems, languages } from "@/lib/constants";
import { Flag } from "@/lib/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const pathname = usePathname();

  // available languages first, "coming soon" pushed to the bottom (stable order)
  const orderedLanguages = [...languages].sort(
    (a, b) => Number(a.comingSoon) - Number(b.comingSoon)
  );

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.88)"
            : "rgba(255,255,255,0.72)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(59,91,219,0.10)" : "1px solid rgba(59,91,219,0.06)",
          boxShadow: scrolled ? "0 4px 24px rgba(16,23,51,0.06)" : "none",
        }}
      >
        <div className="container-max px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/images/logo-v2.png"
                alt="ALB"
                width={955}
                height={442}
                priority
                className="h-9 w-auto group-hover:scale-105 transition-transform"
              />
              <div className="hidden sm:block">
                <div className="text-ink font-bold text-sm leading-tight">Academy of Languages</div>
                <div className="text-royal-500 font-semibold text-xs">&amp; Beyond</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const active = pathname.startsWith(item.href);

                // Courses gets a mega-dropdown
                if (item.href === "/courses") {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setCoursesOpen(true)}
                      onMouseLeave={() => setCoursesOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          active
                            ? "text-royal-700 bg-royal-50"
                            : "text-body hover:text-royal-700 hover:bg-royal-50/60"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${coursesOpen ? "rotate-180" : ""}`}
                        />
                      </Link>

                      <AnimatePresence>
                        {coursesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                          >
                            <div className="w-[440px] bg-white rounded-2xl border border-line shadow-[0_20px_60px_rgba(16,23,51,0.14)] p-3 overflow-hidden">
                              <div className="px-3 py-2 mb-1 flex items-center justify-between">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Language Programmes</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-royal-400">CEFR-aligned</span>
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                {orderedLanguages.map((lang) =>
                                  lang.comingSoon ? (
                                    <div
                                      key={lang.code}
                                      aria-disabled="true"
                                      title="Coming soon"
                                      className="relative flex items-start gap-3 rounded-xl p-3 cursor-not-allowed select-none opacity-70"
                                    >
                                      <Flag code={lang.flagCode} size={36} rounded="rounded-lg" className="mt-0.5 grayscale" />
                                      <span className="min-w-0">
                                        <span className="flex items-center gap-1.5 text-sm font-bold text-muted leading-tight">{lang.name}</span>
                                        <span className="mt-1 inline-block text-[9px] font-black uppercase tracking-wider text-royal-500 bg-royal-50 border border-royal-100 px-1.5 py-0.5 rounded-full">Coming Soon</span>
                                      </span>
                                    </div>
                                  ) : (
                                    <Link
                                      key={lang.code}
                                      href={lang.href}
                                      className="group flex items-start gap-3 rounded-xl p-3 hover:bg-royal-50 transition-colors"
                                    >
                                      <Flag code={lang.flagCode} size={36} rounded="rounded-lg" className="mt-0.5" />
                                      <span className="min-w-0">
                                        <span className="block text-sm font-bold text-ink leading-tight">{lang.name}</span>
                                        <span className="block text-[11px] text-muted leading-snug truncate">{lang.tagline}</span>
                                      </span>
                                    </Link>
                                  )
                                )}
                              </div>
                              <Link
                                href="/courses"
                                className="mt-2 flex items-center justify-between rounded-xl px-4 py-3 bg-royal-50 hover:bg-royal-100 transition-colors group"
                              >
                                <span className="text-sm font-bold text-royal-700">View all courses</span>
                                <ArrowRight size={15} className="text-royal-600 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-royal-700 bg-royal-50"
                        : "text-body hover:text-royal-700 hover:bg-royal-50/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/courses"
                className="text-body hover:text-royal-700 text-sm font-medium transition-colors px-2"
              >
                Sign In
              </Link>
              <Link
                href="/courses"
                className="btn-primary text-sm px-5 py-2.5 rounded-full font-semibold"
              >
                Get Started
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden text-ink p-2 rounded-xl hover:bg-royal-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-[min(320px,100vw)] bg-white border-l border-line flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-line">
                <span className="text-ink font-bold text-sm">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-ink p-2 rounded-xl hover:bg-royal-50">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-5 space-y-1">
                {navItems.map((item, i) => {
                  // Courses gets an expandable sub-list
                  if (item.href === "/courses") {
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <div
                          className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                            pathname.startsWith(item.href)
                              ? "text-royal-700 bg-royal-50"
                              : "text-body hover:text-royal-700 hover:bg-royal-50"
                          }`}
                        >
                          <Link href={item.href} className="flex-1">
                            {item.label}
                          </Link>
                          <button
                            onClick={() => setMobileCoursesOpen((v) => !v)}
                            aria-label="Toggle course list"
                            className="p-1 -mr-1"
                          >
                            <ChevronDown
                              size={16}
                              className={`text-royal-400 transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {mobileCoursesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 pt-1 pb-1 space-y-0.5 border-l border-line ml-4">
                                {orderedLanguages.map((lang) =>
                                  lang.comingSoon ? (
                                    <div
                                      key={lang.code}
                                      aria-disabled="true"
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted cursor-not-allowed select-none"
                                    >
                                      <Flag code={lang.flagCode} size={28} rounded="rounded-md" className="grayscale" />
                                      {lang.name}
                                      <span className="ml-auto text-[9px] font-black uppercase tracking-wider text-royal-500 bg-royal-50 border border-royal-100 px-1.5 py-0.5 rounded-full">Soon</span>
                                    </div>
                                  ) : (
                                    <Link
                                      key={lang.code}
                                      href={lang.href}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-body hover:text-royal-700 hover:bg-royal-50 transition-all"
                                    >
                                      <Flag code={lang.flagCode} size={28} rounded="rounded-md" />
                                      {lang.name}
                                    </Link>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                          pathname.startsWith(item.href)
                            ? "text-royal-700 bg-royal-50"
                            : "text-body hover:text-royal-700 hover:bg-royal-50"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="-rotate-90 text-royal-300" size={15} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="px-5 pb-8 space-y-3">
                <Link href="/courses" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                  Get Started
                </Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
                  WhatsApp Us
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
