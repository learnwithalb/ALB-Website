/**
 * Reliable triggers for the Edmingle login flow.
 *
 * The SDK binds click handlers to `.loginButton.login`, `.goToAccountButton`
 * and `.postLogin.logout` once, in jQuery's `$(document).ready`. In a React/SPA
 * app the navbar button node isn't always bound at that instant (hydration or
 * client-navigation timing), so the click can silently do nothing.
 *
 * These helpers call the SDK's global functions directly (available as soon as
 * signup-sdk.js has loaded — no jQuery binding required), with a raw postMessage
 * to the login iframe as a last-resort fallback. Safe to run alongside the SDK's
 * own binding: a duplicate trigger just re-posts the same message, which is a
 * no-op for the iframe.
 */

type EdmingleWindow = Window & {
  openLoginModal?: (e?: unknown) => void;
  gotoApplication?: () => void;
  logoutApp?: () => void;
};

function loginIframe(): HTMLIFrameElement | null {
  return document.getElementById("iframe") as HTMLIFrameElement | null;
}

export function edmingleLogin(): void {
  const w = window as EdmingleWindow;
  if (typeof w.openLoginModal === "function") {
    w.openLoginModal();
    return;
  }
  const f = loginIframe();
  f?.contentWindow?.postMessage({ login: 1 }, "*");
  if (f) f.style.display = "block";
}

export function edmingleAccount(): void {
  const w = window as EdmingleWindow;
  if (typeof w.gotoApplication === "function") {
    w.gotoApplication();
    return;
  }
  loginIframe()?.contentWindow?.postMessage({ getAppLink: 1 }, "*");
}

export function edmingleLogout(): void {
  const w = window as EdmingleWindow;
  if (typeof w.logoutApp === "function") {
    w.logoutApp();
    return;
  }
  loginIframe()?.contentWindow?.postMessage({ isLogout: 1 }, "*");
}
