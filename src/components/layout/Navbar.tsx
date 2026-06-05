"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
            ? "rgba(6,12,26,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        }}
      >
        <div className="container-max px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#4ade80] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-[#060c1a] font-black text-xs tracking-tight">ALB</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-sm leading-tight">Academy of Languages</div>
                <div className="text-[#22C55E] font-semibold text-xs">& Beyond</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/8"
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
                className="text-white/60 hover:text-white text-sm font-medium transition-colors px-2"
              >
                Sign In
              </Link>
              <Link
                href="/courses"
                className="btn-white text-sm px-5 py-2.5 rounded-full font-semibold"
              >
                Get Started
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden text-white p-2 rounded-xl hover:bg-white/8 transition-colors"
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
              className="absolute inset-0 bg-[#060c1a]/90 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-[min(320px,100vw)] bg-[#0d1729] border-l border-white/8 flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/8">
                <span className="text-white font-bold text-sm">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-white p-2 rounded-xl hover:bg-white/8">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-5 space-y-1">
                {navItems.map((item, i) => (
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
                          ? "text-[#22C55E] bg-white/8"
                          : "text-white/70 hover:text-white hover:bg-white/8"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="-rotate-90 text-white/30" size={15} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-5 pb-8 space-y-3">
                <Link href="/courses" className="btn-white w-full justify-center" onClick={() => setMobileOpen(false)}>
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
