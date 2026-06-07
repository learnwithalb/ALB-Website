import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, beyondModules } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sec-dark text-white/55 relative overflow-hidden">

      {/* decorative grid + blobs */}
      <div className="absolute inset-0 grid-dots-light opacity-40 pointer-events-none" />
      <div className="blob blob-sky w-[420px] h-[420px] -top-24 -right-24 pointer-events-none" />

      {/* CTA Banner */}
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

      {/* Main Footer */}
      <div className="container-max px-5 md:px-8 pt-14 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <Image src="/images/logo-v2.png" alt="ALB" width={955} height={442} className="h-10 w-auto" />
              <div>
                <div className="text-white font-bold text-sm leading-tight">Academy of Languages</div>
                <div className="text-royal-200 font-semibold text-xs">&amp; Beyond</div>
              </div>
            </Link>
            <p className="text-xs leading-relaxed mb-5 text-white/45">
              India&apos;s premier language &amp; soft skills academy, empowering
              ambitious learners to go global since 2012.
            </p>
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
            <div className="flex gap-2 mt-5">
              {[
                { href: siteConfig.socials.instagram, label: "IG" },
                { href: siteConfig.socials.linkedin,  label: "LI" },
                { href: siteConfig.socials.youtube,   label: "YT" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[9px] font-black hover:border-sky-400 hover:text-sky-300 hover:bg-white/5 transition-all"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Languages</h4>
            <ul className="space-y-2.5">
              {[
                { label: "French",        href: "/courses/french" },
                { label: "German",        href: "/courses/german" },
                { label: "Spanish",       href: "/courses/spanish" },
                { label: "Japanese",      href: "/courses/japanese" },
                { label: "Korean",        href: "/courses/korean" },
                { label: "English", href: "/courses/ielts" },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-xs text-white/50 hover:text-white transition-colors inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
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
                { label: "Blog",             href: "/blog" },
                { label: "Privacy Policy",   href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
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
          <p>© {year} Academy of Languages &amp; Beyond. All rights reserved.</p>
          <p>Made with ❤️ in India · Go Global. Speak Fluent. Lead Bold.</p>
        </div>
      </div>
    </footer>
  );
}
