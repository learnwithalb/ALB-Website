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

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.error || "Submission failed");
  }
  return result;
}
