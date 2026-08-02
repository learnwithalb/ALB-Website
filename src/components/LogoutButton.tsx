"use client";

import { edmingleLogout } from "@/components/edmingleActions";

/**
 * Logout button. Keeps the SDK classes (`postLogin logout`) for visibility
 * control, and triggers logout on click so it works regardless of jQuery-binding
 * timing. Hidden initially; the SDK manages `.postLogin` visibility.
 */
export function LogoutButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`postLogin logout ${className}`}
      style={{ display: "none" }}
      onClick={() => edmingleLogout()}
    >
      Log out
    </button>
  );
}
