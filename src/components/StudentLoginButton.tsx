"use client";

import { edmingleLogin } from "@/components/edmingleActions";

/**
 * Student Login button. Keeps the SDK target classes (`loginButton login`) so the
 * SDK still controls visibility, but also triggers the login directly on click —
 * so it works reliably even if the SDK's one-time jQuery binding missed this node.
 */
export function StudentLoginButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={`loginButton login ${className}`} onClick={() => edmingleLogin()}>
      Student Login
    </button>
  );
}
