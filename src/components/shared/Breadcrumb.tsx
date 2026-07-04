import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visual breadcrumb trail. Pair with breadcrumbSchema() + <JsonLd> on the page
 * for the structured-data equivalent. Reusable across blog and course pages.
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="font-semibold text-ink line-clamp-1" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-royal-600 transition-colors">
                  {item.name}
                </Link>
              )}
              {!last && <ChevronRight size={14} className="text-royal-300" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
