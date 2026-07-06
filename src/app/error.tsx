"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

/**
 * Route-level error boundary. Its main job is to gracefully absorb the
 * "stale chunk" errors that briefly occur after a new deployment (a client tab
 * requests an old JS/RSC chunk hash that no longer exists) — instead of showing
 * the bare browser "This page couldn't load" screen, we auto-reload once to pull
 * the fresh assets, and otherwise offer a branded retry.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const msg = `${error?.name ?? ""} ${error?.message ?? ""}`;
    const isChunkError =
      /ChunkLoadError|Loading chunk|Loading CSS chunk|Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module/i.test(
        msg,
      );

    if (isChunkError && typeof window !== "undefined") {
      // Guard against a reload loop — only auto-recover once per session.
      const KEY = "alb:chunk-reload";
      if (!sessionStorage.getItem(KEY)) {
        sessionStorage.setItem(KEY, "1");
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md">
        <h1 className="text-2xl md:text-3xl font-black text-ink">Something went wrong</h1>
        <p className="mt-3 text-body leading-relaxed">
          This can happen right after a site update. Reloading usually fixes it.
        </p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <button onClick={() => reset()} className="btn-primary text-sm px-6 py-3 inline-flex">
            <RotateCcw size={15} /> Try again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="btn-outline text-sm px-6 py-3"
          >
            Reload page
          </button>
        </div>
      </div>
    </section>
  );
}
