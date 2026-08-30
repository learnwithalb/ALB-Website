"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { navItems, languages } from "@/lib/constants";
import { Flag } from "@/lib/icons";
import { useBooking } from "@/components/shared/BookingContext";
import { StudentLoginButton } from "@/components/StudentLoginButton";
import { MyAccountButton } from "@/components/MyAccountButton";
import { LogoutButton } from "@/components/LogoutButton";
import { edmingleLogin, edmingleAccount, edmingleLogout } from "@/components/edmingleActions";

/* Featured cards for the Courses mega-dropdown */
const COURSE_CARDS = [
  { name: "French", sub: "Open Europe, immigration, study and career.", meta: "A1 → B2 · DELF · TEF · TCF", href: "/courses/french-language-course-online", color: "#3b5bdb", icon: "/icons/france.png", curve: "M0 60 C 40 24 70 24 110 46 S 170 38 200 26" },
  { name: "German", sub: "Study, work and life across German-speaking Europe.", meta: "A1 → B2 · Goethe · TestDaF · DSH", href: "/courses/german-language-course-online", color: "#f59e0b", icon: "/icons/germany.png", curve: "M0 50 C 45 78 80 70 120 46 S 175 30 200 50" },
  { name: "English", sub: "Speak with confidence and clear every exam.", meta: "IELTS · PTE · Foundation → Advanced", href: "/courses/english-speaking-course-online-india", color: "#10b981", icon: "/icons/uk.png", curve: "M0 38 C 50 78 90 64 135 50 S 180 56 200 60" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  // Edmingle login state for the mobile drawer (SDK stores `apikey` on login).
  const [loggedIn, setLoggedIn] = useState(false);
  const pathname = usePathname();
  const { openModal } = useBooking();

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

  // Track Edmingle login state so the mobile drawer shows the right buttons.
  useEffect(() => {
    const read = () => setLoggedIn(!!localStorage.getItem("apikey"));
    read();
    const onMessage = (event: MessageEvent) => {
      const data = event?.data;
      if (!data || typeof data !== "object") return;
      if (data.usermeta) setLoggedIn(true);
      if (data.processLogout) setLoggedIn(false);
    };
    window.addEventListener("message", onMessage);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("storage", read);
    };
  }, []);

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
          background: "#ffffff",
          borderBottom: scrolled ? "1px solid rgba(59,91,219,0.10)" : "1px solid rgba(59,91,219,0.06)",
          boxShadow: scrolled ? "0 4px 24px rgba(16,23,51,0.06)" : "none",
        }}
      >
        <div className="container-max px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/images/alb-blue.svg"
                alt="Academy of Languages and Beyond"
                width={1625}
                height={942}
                priority
                className="h-9 w-auto group-hover:scale-105 transition-transform"
              />
              <div className="hidden sm:block">
                <div className="text-ink font-bold text-sm leading-tight">Academy of Languages</div>
                <div className="text-royal-500 font-semibold text-xs">and Beyond</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0.5">
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
                        className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
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
                            <div className="w-[840px] max-w-[92vw] bg-white rounded-2xl border border-line shadow-[0_24px_70px_rgba(16,23,51,0.18)] p-3">
                              {/* header bar */}
                              <div className="flex items-center justify-between rounded-xl px-5 py-3 mb-3" style={{ background: "#3b5bdb" }}>
                                <span className="text-white font-bold text-sm">Our language programmes for every goal</span>
                                <div className="flex items-center gap-5 text-xs font-semibold">
                                  <Link href="/courses" className="text-white/70 hover:text-white inline-flex items-center gap-1 transition-colors">View All Courses <ArrowRight size={12} /></Link>
                                </div>
                              </div>
                              {/* course cards */}
                              <div className="grid grid-cols-3 gap-3">
                                {COURSE_CARDS.map((c, i) => (
                                  <Link
                                    key={c.name}
                                    href={c.href}
                                    className="group relative h-[184px] rounded-xl overflow-hidden bg-white border border-line p-4 flex flex-col transition-all hover:border-royal-200 hover:shadow-[0_10px_30px_rgba(16,23,51,0.10)]"
                                  >
                                    <div className="relative z-10 flex items-center gap-2 mb-2">
                                      {c.icon ? (
                                        <Image src={c.icon} alt="" width={20} height={20} className="w-5 h-5 rounded object-contain flex-shrink-0" />
                                      ) : (
                                        <span className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}1f` }}>
                                          <Sparkles size={13} style={{ color: c.color }} />
                                        </span>
                                      )}
                                      <h4 className="font-black text-[15px] leading-tight" style={{ color: "#00082A" }}>{c.name}</h4>
                                    </div>
                                    <p className="relative z-10 text-muted text-[11px] mt-1.5 leading-snug">{c.sub}</p>
                                    <p className="relative z-10 text-[10.5px] mt-2.5 leading-snug" style={{ color: "#9aa3bd" }}>{c.meta}</p>
                                    {/* glowing chart-style accent line */}
                                    <svg
                                      viewBox="0 0 200 90"
                                      preserveAspectRatio="none"
                                      className="absolute bottom-0 left-0 w-full h-[92px] transition-transform duration-500 origin-bottom group-hover:scale-y-[1.1]"
                                    >
                                      <defs>
                                        <linearGradient id={`hsfill-${i}`} x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor={c.color} stopOpacity="0.6" />
                                          <stop offset="100%" stopColor={c.color} stopOpacity="0.06" />
                                        </linearGradient>
                                      </defs>
                                      <path d={`${c.curve} L 200 90 L 0 90 Z`} fill={`url(#hsfill-${i})`} />
                                      <path d={c.curve} fill="none" stroke={c.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 6px ${c.color}66)` }} />
                                    </svg>
                                  </Link>
                                ))}
                              </div>
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
                    className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
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
            <div className="hidden xl:flex items-center gap-2">
              {/* Edmingle SDK controls these three: Student Login shows when logged out;
                  My Account + Logout appear after login. No onClick — SDK binds them. */}
              <StudentLoginButton className="text-body hover:text-royal-700 text-sm font-medium whitespace-nowrap transition-colors px-1.5" />
              <MyAccountButton className="text-body hover:text-royal-700 text-sm font-medium whitespace-nowrap transition-colors px-1.5" />
              <LogoutButton className="text-body hover:text-royal-700 text-sm font-medium whitespace-nowrap transition-colors px-1.5" />
              <button
                onClick={() => openModal()}
                className="btn-primary text-sm px-5 py-2.5 rounded-full font-semibold whitespace-nowrap"
              >
                Book a Free Demo
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="xl:hidden text-ink p-2 rounded-xl hover:bg-royal-50 transition-colors"
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
            className="fixed inset-0 z-40 xl:hidden"
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
                {/* Edmingle login — state-driven so it works in the conditionally
                    mounted drawer (the SDK's DOM toggling can't reach it). */}
                {loggedIn ? (
                  <div className="flex gap-3">
                    <button
                      className="btn-outline flex-1 justify-center"
                      onClick={() => { setMobileOpen(false); edmingleAccount(); }}
                    >
                      My Account
                    </button>
                    <button
                      className="btn-outline flex-1 justify-center"
                      onClick={() => { setMobileOpen(false); edmingleLogout(); }}
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn-outline w-full justify-center"
                    onClick={() => { setMobileOpen(false); edmingleLogin(); }}
                  >
                    Student Login
                  </button>
                )}
                <button
                  className="btn-primary w-full justify-center"
                  onClick={() => { setMobileOpen(false); openModal(); }}
                >
                  Book a Free Demo
                </button>
                <a href="https://wa.me/919821275843" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
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
