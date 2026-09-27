// Captures UTM / click-ID parameters from the landing URL and keeps them in
// localStorage so they are still available when the visitor submits a form
// later, possibly on another page.

const STORAGE_KEY = "alb-utm";
const TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export type UtmData = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  landing_page?: string;
  referrer?: string;
};

interface StoredUtm {
  data: UtmData;
  savedAt: number;
}

// Call once per page load. Only overwrites the stored values when the URL
// actually carries tracking params (last-touch attribution).
export function captureUtm() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const data: UtmData = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) data[key] = value.slice(0, 200);
    }
    if (!Object.keys(data).length) return;

    data.landing_page = window.location.pathname + window.location.search;
    if (document.referrer) data.referrer = document.referrer;

    const stored: StoredUtm = { data, savedAt: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Storage blocked (private mode etc.) — tracking is best-effort.
  }
}

export function getUtm(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const stored = JSON.parse(raw) as StoredUtm;
    if (Date.now() - stored.savedAt > TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return stored.data;
  } catch {
    return {};
  }
}
