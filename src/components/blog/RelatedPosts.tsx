import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MuiIcon } from "@/lib/icons";
import type { BlogPost } from "@/lib/blog";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fmtDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/**
 * Grid of related-article cards for internal linking. Matches the blog listing
 * card design: white image-top cards (cover image or accent tint), category
 * pill, title, and a date · min / "Read now" footer — on-brand royal/sky theme.
 */
export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-line shadow-[0_10px_30px_-18px_rgba(16,23,51,0.25)] hover:shadow-[0_22px_50px_-26px_rgba(16,23,51,0.4)] transition-shadow"
        >
          {/* visual */}
          <div
            className="relative h-40 flex items-center justify-center overflow-hidden"
            style={{ background: `linear-gradient(150deg, ${post.accent}1f 0%, ${post.accent}08 100%)` }}
          >
            {post.coverImage ? (
              <Image
                src={encodeURI(post.coverImage)}
                alt={post.title}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <>
                <div className="absolute inset-0 grid-dots opacity-40" />
                <MuiIcon name={post.icon} size={52} style={{ color: post.accent }} />
              </>
            )}
          </div>
          {/* text */}
          <div className="p-6 flex flex-col flex-1">
            <div className="mb-3">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold bg-white text-ink border border-line">
                {post.category}
              </span>
            </div>
            <h3 className="font-bold text-ink text-lg leading-snug">{post.title}</h3>
            <p className="text-sm text-muted mt-2.5 leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-line">
              <span className="text-xs text-muted">{fmtDate(post.publishedAt)} · {post.readingMinutes} min</span>
              <span className="inline-flex items-center gap-1 font-bold text-sm text-royal-600">
                Read now <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
