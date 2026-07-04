"use client";

import { useState } from "react";
import { Share2, Send, Link2, Check } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

/** Social share row for an article. */
export function ShareButtons({ path, title }: { path: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = absoluteUrl(path);

  const share = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const cls =
    "w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-royal-600 hover:border-royal-300 transition-colors";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-muted mr-1">Share</span>
      <a href={share.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className={cls}>
        <Send size={15} />
      </a>
      <a href={share.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className={cls}>
        <Share2 size={15} />
      </a>
      <button onClick={copy} aria-label="Copy link" className={cls}>
        {copied ? <Check size={15} className="text-emerald-500" /> : <Link2 size={15} />}
      </button>
    </div>
  );
}
