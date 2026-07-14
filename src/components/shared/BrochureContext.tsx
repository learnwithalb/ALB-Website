"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface BrochureRequest {
  title: string;
  url: string;
}

interface BrochureCtx {
  request: BrochureRequest | null;
  openBrochureForm: (title: string, url: string) => void;
  closeBrochureForm: () => void;
}

const BrochureContext = createContext<BrochureCtx>({
  request: null,
  openBrochureForm: () => {},
  closeBrochureForm: () => {},
});

export function BrochureProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<BrochureRequest | null>(null);

  return (
    <BrochureContext.Provider value={{
      request,
      openBrochureForm: (title, url) => setRequest({ title, url }),
      closeBrochureForm: () => setRequest(null),
    }}>
      {children}
    </BrochureContext.Provider>
  );
}

export const useBrochure = () => useContext(BrochureContext);
