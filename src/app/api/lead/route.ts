import { NextRequest, NextResponse } from "next/server";

// Server-only: never expose this through a NEXT_PUBLIC_ variable.
const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

const MAX_BODY_BYTES = 8 * 1024;
const GENERIC_ERROR = "Submission failed. Please try again shortly.";

// Only these fields are forwarded to the sheet, each capped at a max length.
// Anything else in the request body is dropped.
const FIELD_LIMITS: Record<string, number> = {
  name: 100,
  phone: 25,
  email: 200,
  programme: 150,
  goal: 300,
  formName: 50,
  utm_source: 200,
  utm_medium: 200,
  utm_campaign: 200,
  utm_term: 200,
  utm_content: 200,
  gclid: 200,
  fbclid: 200,
  landing_page: 500,
  referrer: 500,
};

// Tracking fields are set by the browser (URLs can be long), so they are
// truncated rather than rejected: a long ad-click URL must never block a lead.
const TRUNCATED_FIELDS = new Set([
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "fbclid", "landing_page", "referrer",
]);

// Letters (any script), spaces and . ' ’ - ; must start with a letter.
const NAME_RE = /^\p{L}[\p{L}\p{M} .'’-]*$/u;
// Digits with optional leading +, spaces, dashes, dots or brackets.
const PHONE_RE = /^\+?[\d\s().-]+$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ── Rate limiting ─────────────────────────────────────────────────────────
 * Sliding window per client IP. On Vercel the IP headers are set by the edge
 * and cannot be spoofed by the client. State is per server instance, so this
 * is a best-effort limit; a shared store (e.g. Upstash/Vercel KV) would be
 * needed for a strict global limit. */
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 10;
const MAX_TRACKED_IPS = 10_000;
const hits = new Map<string, number[]>();

function clientIp(req: NextRequest) {
  return (
    req.headers.get("x-vercel-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown"
  );
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.delete(ip);
  hits.set(ip, recent); // re-insert so Map order = least recently seen first

  if (hits.size > MAX_TRACKED_IPS) {
    // Evict the least recently seen IPs instead of resetting everyone's limit.
    for (const key of hits.keys()) {
      if (hits.size <= MAX_TRACKED_IPS) break;
      hits.delete(key);
    }
  }
  return recent.length > RATE_MAX;
}

function fail(error: string, status: number) {
  return NextResponse.json({ success: false, error }, { status });
}

// Stop values like "=HYPERLINK(...)" being evaluated as formulas in Google Sheets.
function neutralizeFormula(value: string) {
  return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}

// Read the body with a hard byte cap so oversized payloads are never buffered.
async function readBody(req: NextRequest): Promise<string | null> {
  const declared = Number(req.headers.get("content-length"));
  if (declared > MAX_BODY_BYTES) return null;
  if (!req.body) return "";

  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  return new TextDecoder().decode(Buffer.concat(chunks));
}

type Parsed = { data: Record<string, string> } | { error: string };

function sanitize(input: unknown): Parsed {
  const invalid = { error: "Please check your details and try again." };
  if (!input || typeof input !== "object" || Array.isArray(input)) return invalid;

  const data: Record<string, string> = {};
  for (const [key, max] of Object.entries(FIELD_LIMITS)) {
    const raw = (input as Record<string, unknown>)[key];
    if (raw === undefined || raw === null) continue;
    if (typeof raw !== "string") return invalid;
    let value = raw
      .replace(/[\u0000-\u001F\u007F]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (value.length > max) {
      if (!TRUNCATED_FIELDS.has(key)) return invalid;
      value = value.slice(0, max);
    }
    if (value) data[key] = value;
  }

  if (!data.name || !NAME_RE.test(data.name) || data.name.length < 2) {
    return { error: "Please enter a valid name." };
  }
  const digits = (data.phone ?? "").replace(/\D/g, "");
  if (!data.phone || !PHONE_RE.test(data.phone) || digits.length < 7 || digits.length > 15) {
    return { error: "Please enter a valid phone number." };
  }
  if (data.email && !EMAIL_RE.test(data.email)) {
    return { error: "Please enter a valid email address." };
  }

  // Name and phone are already restricted to safe characters by the checks above.
  for (const key of Object.keys(data)) {
    if (key !== "phone") data[key] = neutralizeFormula(data[key]);
  }
  return { data };
}

export async function POST(req: NextRequest) {
  // Reject cross-site browser submissions.
  const origin = req.headers.get("origin");
  if (origin) {
    let originHost: string | null = null;
    try {
      originHost = new URL(origin).host;
    } catch {
      /* malformed origin */
    }
    if (!originHost || originHost !== req.headers.get("host")) return fail("Forbidden", 403);
  }

  if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return fail("Unsupported content type", 415);
  }

  if (rateLimited(clientIp(req))) {
    return fail("Too many submissions. Please try again in a few minutes.", 429);
  }

  const text = await readBody(req).catch(() => null);
  if (text === null) return fail("Request too large", 413);

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return fail("Please check your details and try again.", 400);
  }
  const parsed = sanitize(body);
  if ("error" in parsed) return fail(parsed.error, 400);

  if (!SCRIPT_URL) {
    console.error("[lead] GOOGLE_SCRIPT_URL is not configured");
    return fail(GENERIC_ERROR, 500);
  }

  try {
    // Server-to-server: no CORS. Only the allow-listed fields are forwarded.
    const upstream = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify(parsed.data),
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });

    const result = await upstream.json().catch(() => null);
    if (result?.success === true) return NextResponse.json({ success: true });

    console.error("[lead] Apps Script rejected the submission", { status: upstream.status });
    return fail(GENERIC_ERROR, 502);
  } catch (err) {
    console.error("[lead] Apps Script request failed", {
      name: err instanceof Error ? err.name : "unknown",
    });
    return fail(GENERIC_ERROR, 502);
  }
}
