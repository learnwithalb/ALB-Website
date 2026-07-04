import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/constants";

/** Author byline block — supports E-E-A-T signals on articles. */
export function AuthorCard({ author }: { author: string }) {
  return (
    <div className="card rounded-2xl p-5 flex items-start gap-4">
      <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#3b5bdb] to-[#6d8bff] text-white flex items-center justify-center shadow-md">
        <GraduationCap size={22} />
      </span>
      <div>
        <p className="font-bold text-ink text-sm">{author}</p>
        <p className="text-muted text-xs mt-1 leading-relaxed">
          Written and reviewed by the faculty at {siteConfig.name} — certified language
          instructors and exam coaches guiding learners toward DELF, TEF, TestDaF, and IELTS goals.
        </p>
      </div>
    </div>
  );
}
