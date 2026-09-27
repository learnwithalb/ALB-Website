"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureUtm } from "@/lib/utm";

// Stores UTM params from the URL on every client-side navigation.
export function UtmCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureUtm();
  }, [pathname]);
  return null;
}
