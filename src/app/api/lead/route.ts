import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

export async function POST(req: NextRequest) {
  if (!SCRIPT_URL) {
    return NextResponse.json(
      { success: false, error: "Google Script URL is not configured on the server." },
      { status: 500 },
    );
  }

  try {
    // Forward the raw JSON body to Apps Script (server-to-server: no CORS).
    const body = await req.text();

    const upstream = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body,
      redirect: "follow",
    });

    const text = await upstream.text();

    // Apps Script should return JSON like { success: true }.
    try {
      return NextResponse.json(JSON.parse(text));
    } catch {
      // Not JSON — surface a snippet so the real failure is visible.
      return NextResponse.json(
        {
          success: false,
          error: "Apps Script did not return JSON.",
          status: upstream.status,
          raw: text.slice(0, 500),
        },
        { status: 502 },
      );
    }
  } catch (err) {
    return NextResponse.json(
      { success: false, error: String(err) },
      { status: 502 },
    );
  }
}
