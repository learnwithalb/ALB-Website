export interface LeadData {
  name: string;
  phone: string;
  email: string;
  programme: string;
  goal: string;
}

export async function submitLead(data: LeadData): Promise<{ success: boolean }> {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
  if (!url) {
    throw new Error("NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not configured");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
