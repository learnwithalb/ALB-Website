import { getUtm } from "@/lib/utm";

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

// Push a successful lead to the GTM dataLayer.
function pushLeadToDataLayer(
  data: LeadData,
  formName: string,
  utmData: ReturnType<typeof getUtm>
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "lead_form_submit",

    form_name: formName,
    programme: data.programme,
    goal: data.goal,

    // UTM / attribution data
    utm_source: utmData.utm_source || "",
    utm_medium: utmData.utm_medium || "",
    utm_campaign: utmData.utm_campaign || "",
    utm_term: utmData.utm_term || "",
    utm_content: utmData.utm_content || "",
    gclid: utmData.gclid || "",
    fbclid: utmData.fbclid || "",
    landing_page: utmData.landing_page || "",
    referrer: utmData.referrer || "",

    // Personal data: do NOT send these to GA4.
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

  // Get UTM data once
  const utmData = getUtm();

  // Send lead + UTM data to our API route
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      formName,
      ...utmData,
    }),
  });

  let result: { success?: boolean; error?: string; message?: string };

  try {
    result = await response.json();
  } catch {
    throw new Error(
      "The lead service returned an invalid response. Please try again shortly."
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.error ||
      result.message ||
      "Submission failed"
    );
  }

  // Only push to GTM after the lead was successfully saved
  pushLeadToDataLayer(data, formName, utmData);

  return { success: true };
}
