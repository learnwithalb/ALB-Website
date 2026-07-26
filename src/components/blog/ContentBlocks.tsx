import { Check, Info, Lightbulb, AlertTriangle } from "lucide-react";
import type { ContentBlock } from "@/lib/blog";

/**
 * Renders a section's infographic blocks (tables, cards, steps, callouts, chips,
 * phrase pairs). Styling follows the site theme; `accent` is the post's cluster
 * colour so visuals stay on-brand per topic.
 */
export function SectionBlocks({ blocks, accent }: { blocks: ContentBlock[]; accent: string }) {
  return (
    <div className="mt-6 space-y-6">
      {blocks.map((block, i) => (
        <Block key={i} block={block} accent={accent} />
      ))}
    </div>
  );
}

function Block({ block, accent }: { block: ContentBlock; accent: string }) {
  switch (block.type) {
    /* ── Callout ── */
    case "callout": {
      const map = {
        info: { color: "#3b5bdb", bg: "#eef2ff", Icon: Info },
        tip: { color: "#059669", bg: "#ecfdf5", Icon: Lightbulb },
        warn: { color: "#d97706", bg: "#fffbeb", Icon: AlertTriangle },
      } as const;
      const { color, bg, Icon } = map[block.variant ?? "info"];
      return (
        <div className="rounded-2xl p-5 flex gap-3.5" style={{ background: bg, borderLeft: `4px solid ${color}` }}>
          <Icon size={20} className="flex-shrink-0 mt-0.5" style={{ color }} />
          <div>
            {block.title && <p className="font-bold text-ink text-[15px]">{block.title}</p>}
            <p className="text-body text-sm leading-relaxed mt-0.5">{block.body}</p>
          </div>
        </div>
      );
    }

    /* ── Table ── */
    case "table":
      return (
        <figure className="rounded-2xl border border-line overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: accent }}>
                  {block.headers.map((h) => (
                    <th key={h} className="text-left text-white font-bold px-5 py-3.5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className={r % 2 ? "bg-mist/60" : "bg-white"}>
                    {row.map((cell, c) => (
                      <td key={c} className={`px-5 py-3.5 align-top ${c === 0 ? "font-semibold text-ink" : "text-body"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && <figcaption className="text-xs text-muted px-5 py-3 border-t border-line">{block.caption}</figcaption>}
        </figure>
      );

    /* ── Cards ── */
    case "cards":
      return (
        <div className={`grid gap-4 ${block.columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {block.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-5 h-full" style={{ borderTop: `3px solid ${accent}` }}>
              <p className="font-bold text-ink text-[15px] leading-snug">{item.title}</p>
              {item.body && <p className="text-muted text-sm mt-2 leading-relaxed">{item.body}</p>}
              {item.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-body text-sm leading-snug">
                      <Check size={14} strokeWidth={3} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );

    /* ── Steps (numbered timeline) ── */
    case "steps":
      return (
        <div className="relative pl-3">
          <span className="absolute left-[19px] top-2 bottom-2 w-px" style={{ background: `${accent}33` }} />
          <ol className="space-y-4">
            {block.items.map((item, i) => (
              <li key={item.title} className="relative flex gap-4">
                <span className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full text-white text-sm font-black flex items-center justify-center" style={{ background: accent }}>
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <p className="font-bold text-ink text-[15px]">{item.title}</p>
                  <p className="text-muted text-sm mt-0.5 leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    /* ── Numbered grid ── */
    case "numbered":
      return (
        <div className="grid sm:grid-cols-2 gap-4">
          {block.items.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-5 flex gap-3.5">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg text-sm font-black flex items-center justify-center" style={{ background: `${accent}14`, color: accent }}>
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-ink text-[15px] leading-snug">{item.title}</p>
                <p className="text-muted text-sm mt-1 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      );

    /* ── Chips ── */
    case "chips":
      return (
        <div>
          {block.title && <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">{block.title}</p>}
          <div className="flex flex-wrap gap-2">
            {block.items.map((c) => (
              <span key={c} className="text-sm font-semibold px-3.5 py-1.5 rounded-full" style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}30` }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      );

    /* ── Phrases (fr / en pairs) ── */
    case "phrases":
      return (
        <div>
          {block.title && <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">{block.title}</p>}
          <div className="rounded-2xl border border-line bg-white overflow-hidden divide-y divide-line">
            {block.items.map((p) => (
              <div key={p.fr} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-3.5">
                <span className="font-bold text-ink text-[15px] sm:w-1/2" style={{ color: accent }}>{p.fr}</span>
                <span className="text-muted text-sm sm:w-1/2">{p.en}</span>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
