import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MuiIcon } from "@/lib/icons";
import type { BlogPost } from "@/lib/blog";

/** Grid of related-article cards for internal linking. */
export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="card rounded-2xl overflow-hidden flex flex-col group"
          style={{ borderTop: `3px solid ${post.accent}` }}
        >
          <div
            className="p-6 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${post.accent}0c, ${post.accent}1c)` }}
          >
            <MuiIcon name={post.icon} size={44} style={{ color: post.accent }} />
          </div>
          <div className="p-5 flex flex-col flex-1">
            <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: post.accent }}>
              {post.category}
            </span>
            <h3 className="font-bold text-ink text-base leading-snug mt-2 flex-1">{post.title}</h3>
            <span className="mt-4 inline-flex items-center gap-1 font-bold text-sm group-hover:gap-2 transition-all" style={{ color: post.accent }}>
              Read <ArrowRight size={13} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
