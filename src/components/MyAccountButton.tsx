"use client";

import { edmingleAccount } from "@/components/edmingleActions";

/**
 * "My Account" button — takes the logged-in user to the LMS dashboard. Keeps the
 * SDK classes (`postLogin goToAccountButton`) for visibility control, and also
 * triggers the action on click so it works regardless of jQuery-binding timing.
 * Hidden initially; the SDK reveals `.postLogin` elements after login.
 */
export function MyAccountButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`postLogin goToAccountButton ${className}`}
      style={{ display: "none" }}
      onClick={() => edmingleAccount()}
    >
      My Account
    </button>
  );
}
