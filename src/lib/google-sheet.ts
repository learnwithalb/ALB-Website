export interface LeadData {
  name: string;
  phone: string;
  email: string;
  programme: string;
  goal: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Push a successful lead to the GTM dataLayer. In GTM, create Data Layer
// Variables for these keys and a Custom Event trigger on "lead_form_submit".
function pushLeadToDataLayer(data: LeadData, formName: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lead_form_submit",
    form_name: formName,
    programme: data.programme,
    goal: data.goal,
    // Personal data: use only for Google Ads enhanced conversions / Meta
    // advanced matching. Do NOT send these to GA4 (against Google's policy).
    user_data: {
      name: data.name,
      email: data.email,
      phone_number: data.phone,
    },
  });
}

export async function submitLead(
  data: LeadData,
  formName: string = "lead_form",
): Promise<{ success: boolean }> {
  // Post to our own API route (same-origin, no CORS). The route forwards
  // the payload to the Google Apps Script server-side.
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let result: { success?: boolean; error?: string; message?: string };
  try {
    result = await response.json();
  } catch {
    throw new Error("The lead service returned an invalid response. Please try again shortly.");
  }

  if (!response.ok || !result.success) {
    // Google Apps Script commonly returns failures in `message`, while the
    // Next.js route uses `error`. Preserve either one instead of replacing a
    // useful configuration error with the generic "Submission failed".
    throw new Error(result.error || result.message || "Submission failed");
  }
  pushLeadToDataLayer(data, formName);
  return { success: true };
}
