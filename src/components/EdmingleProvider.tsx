"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

/**
 * Global integration for the Edmingle Login SDK.
 *
 * Loads jQuery once, then signup-sdk.js once (order guaranteed), and renders the
 * hidden login iframe the SDK drives. The SDK targets this iframe by id ("iframe")
 * and by class (".iframe", which it shows/hides as the login popup). It also binds
 * click handlers to `.loginButton.login`, `.postLogin.goToAccountButton` and
 * `.postLogin.logout` automatically — so no click handlers are needed on the buttons.
 *
 * The login form itself renders inside the cross-origin iframe, so it can't be
 * styled with normal CSS. Instead we use the SDK's supported channel: the iframe
 * listens for a `{ addStyles }` postMessage and injects that CSS into its <head>.
 * We send our on-brand CSS once the iframe announces `iframeReady`.
 *
 * Mounted once in app/layout.tsx. Next.js <Script> with a stable `id` de-dupes,
 * so the scripts are never injected twice, and nothing runs during SSR.
 */

const SUBDOMAIN = "academyoflanguagesandbeyond";
const IFRAME_SRC = `https://login.learnwithalb.com/js-sdks/signup-sdk/iframe.php?subdomain=${SUBDOMAIN}`;

/** On-brand restyle for the Edmingle login/signup modal (injected into the iframe). */
const MODAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.modal-content *, .modal-body *, .sdk-form-heading, .form-control, .sdk-btn-style, .hr-text, .brandColor, label {
  font-family:'Inter', system-ui, -apple-system, sans-serif !important;
}

/* dim the page behind the popup */
body { background: rgba(8,12,40,0.55) !important; }

/* centre + size the dialog */
.modal-dialog {
  display:flex !important;
  align-items:center !important;
  min-height: calc(100% - 2rem) !important;
  width: calc(100% - 2rem) !important;
  max-width: 430px !important;
  margin: 1rem auto !important;
}

/* card */
.modal-content {
  position: relative !important;
  border: none !important;
  border-radius: 22px !important;
  box-shadow: 0 30px 90px -25px rgba(6,10,36,0.65) !important;
  overflow: hidden !important;
  background:#ffffff !important;
}
.modal-content::before {
  content:'' !important;
  position:absolute !important; top:0; left:0; right:0;
  height:4px !important;
  background: linear-gradient(90deg,#3b5bdb,#38bdf8) !important;
}
.modal-body { padding: 32px 30px 28px !important; }

/* heading ("Log In") */
.sdk-form-heading, h4.sdk-form-heading {
  color:#0b1437 !important;
  font-weight:900 !important;
  font-size:26px !important;
  letter-spacing:-0.02em !important;
  margin-bottom:22px !important;
}

/* labels */
.modal-body label {
  font-size:12.5px !important;
  font-weight:600 !important;
  color:#5b6480 !important;
  margin-bottom:7px !important;
}

/* inputs */
.form-control, .form-control.user-details, .form-control.contact-number, .form-control.forgot-pwd-details {
  height:52px !important;
  border-radius:14px !important;
  border:1.5px solid #e3e8f2 !important;
  background:#f7f9fc !important;
  color:#0b1437 !important;
  font-size:15px !important;
  padding:0 16px !important;
  box-shadow:none !important;
  transition: border-color .18s ease, box-shadow .18s ease, background .18s ease !important;
}
.form-control::placeholder { color:#9aa3bd !important; }
.form-control:focus {
  border-color:#3b5bdb !important;
  background:#ffffff !important;
  box-shadow:0 0 0 4px rgba(59,91,219,0.14) !important;
  outline:none !important;
}

/* password show/hide append */
.input-group .form-control { border-top-right-radius:0 !important; border-bottom-right-radius:0 !important; }
.input-group-append .input-group-text, .show_hide_button .input-group-text {
  border:1.5px solid #e3e8f2 !important;
  border-left:none !important;
  border-radius:0 14px 14px 0 !important;
  background:#f7f9fc !important;
  color:#5b6480 !important;
}

/* primary button */
.sdk-btn-style, .submit-btn, #sdk-continue-btn, #signup-continue-btn {
  height:52px !important;
  border:none !important;
  border-radius:14px !important;
  background: linear-gradient(90deg,#3b5bdb,#4f7bf0) !important;
  color:#ffffff !important;
  font-weight:800 !important;
  font-size:15px !important;
  letter-spacing:0.02em !important;
  box-shadow:0 14px 30px -12px rgba(59,91,219,0.75) !important;
  transition: transform .15s ease, box-shadow .2s ease, opacity .2s ease !important;
}
.sdk-btn-style:hover:not(:disabled), .submit-btn:hover:not(:disabled), #sdk-continue-btn:hover:not(:disabled) {
  transform: translateY(-2px) !important;
  box-shadow:0 18px 38px -12px rgba(59,91,219,0.85) !important;
}
.sdk-btn-style:disabled, .submit-btn:disabled, #sdk-continue-btn:disabled, #signup-continue-btn:disabled {
  opacity:0.5 !important; box-shadow:none !important; cursor:not-allowed !important;
}

/* OR divider */
.hr-text { color:#9aa3bd !important; font-weight:700 !important; font-size:12px !important; letter-spacing:0.08em !important; }
.hr-container, .hr-container .line { border-color:#e3e8f2 !important; background:#e3e8f2 !important; }

/* links */
.brandColor, a.brandColor, .open-signup, .sdk-open-login, .sdk-fgot-pswd-link, .sdk-fgot-pswd-login {
  color:#3b5bdb !important; font-weight:700 !important; text-decoration:none !important;
}
.brandColor:hover, .open-signup:hover, .sdk-fgot-pswd-link:hover { color:#2c46b8 !important; }

/* google button + policy spacing */
.action-btn { margin:16px 0 !important; }
.disp_policies { color:#8a93ad !important; font-size:12px !important; }

/* close */
.close { opacity:.45 !important; font-size:22px !important; }
.close:hover { opacity:.85 !important; }
`;

export function EdmingleProvider() {
  // Only render signup-sdk.js after jQuery has finished loading so `$` exists.
  const [jqueryLoaded, setJqueryLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Inject our on-brand CSS into the cross-origin login iframe via the SDK's
  // supported `{ addStyles }` postMessage channel, once the iframe is ready.
  useEffect(() => {
    const applyStyles = () => {
      iframeRef.current?.contentWindow?.postMessage({ addStyles: MODAL_CSS }, "*");
    };

    const onMessage = (event: MessageEvent) => {
      const data = event?.data;
      if (!data || typeof data !== "object") return;

      // The iframe posts `{ iframeReady: 1 }` when its own listener is set up.
      if (data.iframeReady) applyStyles();

      // On logout the iframe posts `{ processLogout: 1, redirectUrl }` where
      // redirectUrl falls back to the Edmingle domain (no logout_url configured).
      // The SDK would navigate there via window.location.href — instead we keep
      // the user on our site and replicate the logged-out UI reset ourselves.
      // (This does NOT affect the login → LMS redirect, which has no processLogout.)
      if (data.processLogout) {
        // Block the SDK's off-site redirect (to the Edmingle domain).
        event.stopImmediatePropagation();
        ["apikey", "name", "role", "username", "curr_org_id"].forEach((k) =>
          localStorage.removeItem(k)
        );
        // Reset the logged-out UI in place (Student Login shows, post-login hides).
        document.querySelectorAll<HTMLElement>(".postLogin").forEach((el) => {
          el.style.display = "none";
        });
        document.querySelectorAll<HTMLElement>(".loginButton").forEach((el) => {
          el.style.display = "inline-block";
          el.classList.remove("disabled");
        });
        // Reload ONCE, only for a user-initiated logout, to reset the iframe
        // session so the next login works without a manual refresh. The iframe
        // also posts processLogout passively on every load — without this guard
        // that would reload infinitely.
        let userInitiated = false;
        try {
          userInitiated = sessionStorage.getItem("alb-logout-pending") === "1";
          if (userInitiated) sessionStorage.removeItem("alb-logout-pending");
        } catch {}
        if (userInitiated) window.location.reload();
      }
    };

    // Registered before signup-sdk.js runs, so stopImmediatePropagation above
    // pre-empts the SDK's own message handler for the logout redirect.
    window.addEventListener("message", onMessage);
    // Fallbacks in case the ready signal is missed (identical <style> re-injection
    // is harmless): retry a couple of times after mount.
    const t1 = window.setTimeout(applyStyles, 1200);
    const t2 = window.setTimeout(applyStyles, 2600);

    return () => {
      window.removeEventListener("message", onMessage);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {/* Hidden login iframe — SDK reads it via getElementById('iframe') and
          toggles the popup via $('.iframe'). Full-screen fixed overlay, hidden
          until the SDK sets display:block on login. */}
      <iframe
        ref={iframeRef}
        id="iframe"
        className="iframe"
        title="Student Login"
        src={IFRAME_SRC}
        onLoad={() => iframeRef.current?.contentWindow?.postMessage({ addStyles: MODAL_CSS }, "*")}
        style={{
          display: "none",
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
          zIndex: 2147483000,
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      />

      {/* 1) jQuery — loaded once. */}
      <Script
        id="edmingle-jquery"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="afterInteractive"
        onLoad={() => setJqueryLoaded(true)}
      />

      {/* 2) Edmingle signup SDK — loaded once, only after jQuery is ready. */}
      {jqueryLoaded && (
        <Script
          id="edmingle-signup-sdk"
          src="https://login.learnwithalb.com/js-sdks/signup-sdk/signup-sdk.js?v=2.8"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
