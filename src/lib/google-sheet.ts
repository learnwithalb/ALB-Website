export interface LeadData {
  name: string;
  phone: string;
  email: string;
  programme: string;
  goal: string;
}

export async function submitLead(data: LeadData): Promise<{ success: boolean }> {
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
  return { success: true };
}
