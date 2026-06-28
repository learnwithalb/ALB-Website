"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, beyondModules } from "@/lib/constants";

/* ── brand glyphs (lucide/MUI don't ship social icons) ── */
function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.14 0-3.51.01-4.75.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.75-.07Zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92Zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08Zm5.68-9.21a1.28 1.28 0 1 1-2.56 0 1.28 1.28 0 0 1 2.56 0Z" />
    </svg>
  );
}
function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
function YouTubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5C0 8.39 0 12 0 12s0 3.61.5 5.5a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14c.5-1.89.5-5.5.5-5.5s0-3.61-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  // Hide the footer CTA banner where the page already ends with its own CTA:
  // /beyond, /about, and every language course detail page (/courses/<lang>).
  const showCta =
    pathname !== "/beyond" &&
    pathname !== "/about" &&
    !pathname.startsWith("/courses/");

  return (
    <footer className="sec-dark text-white/55 relative overflow-hidden">

      {/* decorative grid + blobs */}
      <div className="absolute inset-0 grid-dots-light opacity-40 pointer-events-none" />
      <div className="blob blob-sky w-[420px] h-[420px] -top-24 -right-24 pointer-events-none" />

      {/* CTA Banner */}
      {showCta && (
        <div className="relative overflow-hidden border-b border-white/10">
          <div className="container-max px-5 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <p className="eyebrow-pill-light mb-2">Ready to start?</p>
              <h3 className="text-2xl md:text-3xl font-black text-white">
                Begin your language journey today.
              </h3>
              <p className="mt-1 text-white/45 text-sm">
                Free counselling session · No commitment required
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/courses" className="btn-white whitespace-nowrap">
                Explore Courses
              </Link>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light whitespace-nowrap"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="container-max px-5 md:px-8 pt-14 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <Image src="/images/alb-white.svg" alt="Academy of Languages and Beyond" width={1622} height={940} className="h-10 w-auto" />
              <div>
                <div className="text-white font-bold text-sm leading-tight">Academy of Languages</div>
                <div className="text-royal-200 font-semibold text-xs">and Beyond</div>
              </div>
            </Link>
            <div className="mb-5 space-y-2">
              <p className="text-xs leading-relaxed text-white/60 font-semibold">
                The language academy that goes beyond the certificate.
              </p>
              <p className="text-xs leading-relaxed text-sky-300/80 font-semibold">
                French · German · English · Soft-Skills
              </p>
              <p className="text-xs leading-relaxed text-white/45">
                Built for higher education, global careers, immigration, and confident conversations.
              </p>
            </div>
            <div className="space-y-2 text-xs">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={12} className="text-sky-400 flex-shrink-0" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={12} className="text-sky-400 flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={12} className="text-sky-400 flex-shrink-0" />
                {siteConfig.address}
              </p>
            </div>
            <div className="flex gap-2.5 mt-5">
              {[
                { href: siteConfig.socials.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: siteConfig.socials.linkedin,  label: "LinkedIn",  Icon: LinkedInIcon },
                { href: siteConfig.socials.youtube,   label: "YouTube",   Icon: YouTubeIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400 hover:bg-white/5 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Languages</h4>
            <ul className="space-y-2.5">
              {[
                { label: "French",   href: "/courses/french",   soon: false },
                { label: "German",   href: "/courses/german",   soon: false },
                { label: "English",  href: "/courses/ielts",    soon: false },
                { label: "Spanish",  href: "/courses/spanish",  soon: true },
                { label: "Japanese", href: "/courses/japanese", soon: true },
                { label: "Korean",   href: "/courses/korean",   soon: true },
              ].map(item =>
                item.soon ? (
                  <li key={item.href}>
                    <span className="inline-flex items-center gap-2 text-xs text-white/35 cursor-not-allowed select-none" aria-disabled="true">
                      {item.label}
                      <span className="text-[8.5px] font-black uppercase tracking-wider text-sky-300 border border-sky-300/30 px-1.5 py-0.5 rounded-full">Coming Soon</span>
                    </span>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className="text-xs text-white/50 hover:text-white transition-colors inline-block">
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* +Beyond */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">+Beyond</h4>
            <ul className="space-y-2.5">
              {beyondModules.slice(0, 6).map(m => (
                <li key={m.title}>
                  <Link href="/beyond" className="text-xs text-white/50 hover:text-white transition-colors inline-block">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us",         href: "/about" },
                { label: "Partner with ALB", href: "/partner" },
                { label: "Junior Programme", href: "/junior" },
                { label: "FAQs",             href: "/faq" },
                { label: "Verify Certificate", href: "/verify-certificate" },
                { label: "Blog",             href: "/blog" },
                { label: "Privacy Policy",   href: "/privacy" },
                { label: "Terms and Conditions", href: "/terms" },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-xs text-white/50 hover:text-white transition-colors inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/35">
          <p>© {year} Academy of Languages and Beyond. All rights reserved.</p>
          <p>Made with ❤️ in India · Go Global. Speak Fluent. Lead Bold.</p>
        </div>
      </div>
    </footer>
  );
}
