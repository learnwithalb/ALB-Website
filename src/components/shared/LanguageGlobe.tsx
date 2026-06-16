"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flag } from "@/lib/icons";

/* ───────────────────────────────────────────────
   Language Globe Visualization (light theme)
   - 3 orbital rings (alternating CW / CCW)
   - 6 white glass language cards orbiting the deep
     royal hub globe. Royal + sky accents.
─────────────────────────────────────────────── */

const ORBIT_CONFIG = [
  {
    radius: 178,
    duration: 30,
    dir: 1,
    dash: "",
    trackColor: "#3b5bdb",
    tags: [
      { name: "French",  flagCode: "FR", start: 0,   glow: "#3b5bdb" },
      { name: "Korean",  flagCode: "KR", start: 180, glow: "#0ea5e9" },
    ],
  },
  {
    radius: 218,
    duration: 40,
    dir: -1,
    dash: "7 14",
    trackColor: "#0ea5e9",
    tags: [
      { name: "German",  flagCode: "DE", start: 90,  glow: "#6d8bff" },
      { name: "Spanish", flagCode: "ES", start: 270, glow: "#38bdf8" },
    ],
  },
  {
    radius: 244,
    duration: 52,
    dir: 1,
    dash: "3 9",
    trackColor: "#3b5bdb",
    tags: [
      { name: "Japanese", flagCode: "JP", start: 45,  glow: "#3b5bdb" },
      { name: "IELTS",    flagCode: "EN", start: 225, glow: "#0ea5e9" },
    ],
  },
];

const BG_NODES = [
  { cx: 58,  cy: 90,  r: 1.5, fill: "#3b5bdb", op: 0.5 },
  { cx: 478, cy: 108, r: 1,   fill: "#0ea5e9", op: 0.6 },
  { cx: 85,  cy: 435, r: 1.5, fill: "#6d8bff", op: 0.4 },
  { cx: 482, cy: 418, r: 1,   fill: "#3b5bdb", op: 0.5 },
  { cx: 35,  cy: 270, r: 1,   fill: "#0ea5e9", op: 0.4 },
  { cx: 508, cy: 270, r: 1.5, fill: "#3b5bdb", op: 0.5 },
  { cx: 165, cy: 48,  r: 1,   fill: "#6d8bff", op: 0.4 },
  { cx: 378, cy: 46,  r: 1,   fill: "#0ea5e9", op: 0.35 },
  { cx: 148, cy: 496, r: 1,   fill: "#3b5bdb", op: 0.4 },
  { cx: 392, cy: 498, r: 1,   fill: "#6d8bff", op: 0.4 },
  { cx: 28,  cy: 145, r: 1,   fill: "#3b5bdb", op: 0.3 },
  { cx: 518, cy: 155, r: 1.5, fill: "#0ea5e9", op: 0.3 },
];

const SPOKE_LINES = [0, 60, 120, 180, 240, 300].map((angle) => {
  const rad = (angle * Math.PI) / 180;
  return {
    angle,
    x2: Math.round((270 + 220 * Math.cos(rad)) * 1e6) / 1e6,
    y2: Math.round((270 + 220 * Math.sin(rad)) * 1e6) / 1e6,
  };
});

export function LanguageGlobe() {
  return (
    <motion.div
      className="relative w-full aspect-square max-w-[540px] mx-auto select-none"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* atmosphere glows */}
      <div className="absolute inset-[24%] rounded-full bg-royal-400/20 blur-[70px] pointer-events-none" />
      <div className="absolute inset-[37%] rounded-full bg-royal-500/25 blur-[35px] pointer-events-none" />

      {/* dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59,91,219,0.12) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* SVG: orbit tracks + faint spokes + bg particles */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 540 540">
        {ORBIT_CONFIG.map((o) => (
          <circle
            key={o.radius}
            cx="270" cy="270" r={o.radius}
            fill="none"
            stroke={o.trackColor}
            strokeWidth="0.6"
            strokeOpacity="0.3"
            strokeDasharray={o.dash || undefined}
          />
        ))}
        {SPOKE_LINES.map((s) => (
          <line
            key={s.angle}
            x1="270" y1="270"
            x2={s.x2} y2={s.y2}
            stroke="#3b5bdb" strokeWidth="0.4" strokeOpacity="0.10"
          />
        ))}
        {BG_NODES.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} opacity={n.op} />
        ))}
      </svg>

      {/* Orbiting language glass cards */}
      {ORBIT_CONFIG.map((orbit) =>
        orbit.tags.map((tag) => (
          <div
            key={tag.name}
            style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0, zIndex: 15 }}
          >
            <motion.div
              style={{ position: "absolute", transformOrigin: "0 0" }}
              initial={{ rotate: tag.start }}
              animate={{ rotate: tag.start + orbit.dir * 360 }}
              transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                style={{ position: "absolute", left: 0, top: -orbit.radius, x: "-50%", y: "-50%" }}
                initial={{ rotate: -tag.start }}
                animate={{ rotate: -(tag.start + orbit.dir * 360) }}
                transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 11px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.95)",
                    border: `1px solid ${tag.glow}40`,
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: `0 0 14px ${tag.glow}20, 0 6px 16px rgba(16,23,51,0.10)`,
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                >
                  <Flag code={tag.flagCode} size={14} rounded="rounded-sm" />
                  <span style={{ color: "#1b2a63", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.03em" }}>
                    {tag.name}
                  </span>
                  <span
                    style={{
                      width: "5px", height: "5px", borderRadius: "50%",
                      background: tag.glow, boxShadow: `0 0 6px ${tag.glow}`,
                      flexShrink: 0, display: "inline-block",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute", top: "100%", left: "50%",
                    width: "1px", height: "10px", transform: "translateX(-50%)",
                    background: `linear-gradient(to bottom, ${tag.glow}55, transparent)`,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        ))
      )}

      {/* Central hub – Earth */}
      <div
        style={{ position: "absolute", top: "50%", left: "50%", width: "62%", aspectRatio: "1", transform: "translate(-50%, -50%)", zIndex: 10 }}
      >
        {/* atmosphere glow */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ inset: "-16%", background: "radial-gradient(circle, rgba(59,91,219,0.5) 0%, rgba(14,165,233,0.16) 45%, transparent 70%)" }}
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.06, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* expanding sonar ring */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(125,211,252,0.35)" }}
          animate={{ scale: [1, 1.32], opacity: [0.55, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeOut" }}
        />
        {/* the planet */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ boxShadow: "0 0 70px rgba(59,91,219,0.45), 0 0 28px rgba(14,165,233,0.3)" }}
        >
          <Image
            src="/images/earth.png"
            alt="Earth"
            fill
            sizes="(min-width:1024px) 340px, 1px"
            className="object-cover"
          />
          {/* rim-light sheen */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle at 30% 26%, rgba(255,255,255,0.18) 0%, transparent 42%)" }}
          />
        </div>
      </div>

      {/* floating accent particles */}
      <motion.div
        style={{ position: "absolute", top: "6%", right: "9%", width: "8px", height: "8px", borderRadius: "50%", background: "#0ea5e9", boxShadow: "0 0 10px #0ea5e9, 0 0 22px rgba(14,165,233,0.5)", zIndex: 5 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ position: "absolute", bottom: "9%", left: "6%", width: "6px", height: "6px", borderRadius: "50%", background: "#3b5bdb", boxShadow: "0 0 8px #3b5bdb", zIndex: 5 }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        style={{ position: "absolute", top: "47%", right: "2%", width: "4px", height: "4px", borderRadius: "50%", background: "#6d8bff", zIndex: 5 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        style={{ position: "absolute", top: "20%", left: "3%", width: "5px", height: "5px", borderRadius: "50%", background: "#3b5bdb", boxShadow: "0 0 7px #3b5bdb", zIndex: 5 }}
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
      />
    </motion.div>
  );
}
