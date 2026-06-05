import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, beyondModules } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#04080f] text-white/50 border-t border-white/5">

      {/* CTA Banner */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-[#2b6aff]/12 blur-[60px]" />
        </div>
        <div className="container-max px-5 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <p className="eyebrow-pill-blue mb-2">Ready to start?</p>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Begin your language journey today.
            </h3>
            <p className="mt-1 text-white/35 text-sm">
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
              className="btn-outline whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max px-5 md:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#4ade80] flex items-center justify-center">
                <span className="text-[#060c1a] font-black text-xs">ALB</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">Academy of Languages</div>
                <div className="text-[#22C55E] font-semibold text-xs">& Beyond</div>
              </div>
            </Link>
            <p className="text-xs leading-relaxed mb-5">
              India&apos;s premier language & soft skills academy, empowering
              ambitious learners to go global since 2012.
            </p>
            <div className="space-y-2 text-xs">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={12} className="text-[#2b6aff] flex-shrink-0" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={12} className="text-[#2b6aff] flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={12} className="text-[#2b6aff] flex-shrink-0" />
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
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[9px] font-black hover:border-[#2b6aff] hover:text-[#4c8aff] transition-all"
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
                { label: "IELTS / English", href: "/courses/ielts" },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-xs hover:text-white transition-colors inline-block">
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
                  <Link href="/beyond" className="text-xs hover:text-white transition-colors inline-block">
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
                  <Link href={item.href} className="text-xs hover:text-white transition-colors inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/25">
          <p>© {year} Academy of Languages & Beyond. All rights reserved.</p>
          <p>Made with ❤️ in India · Go Global. Speak Fluent. Lead Bold.</p>
        </div>
      </div>
    </footer>
  );
}
