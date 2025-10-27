import { NextRequest, NextResponse } from "next/server";

// Minimal email sender using Resend's REST API.
// Set RESEND_API_KEY in your env. The "from" domain must be verified in Resend.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "");
    const email = String(body.email || "");
    const phone = String(body.phone || "");
    const message = String(body.message || "");

    if (!email || !message) {
      return NextResponse.json({ ok: false, error: "Email and message are required." }, { status: 400 });
    }

    const html = `
      <div style="font-family:system-ui,Arial,sans-serif">
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name || "(not provided)"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "(not provided)"}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      // If not configured, simulate success so the UI works in dev.
      return NextResponse.json({ ok: true, simulated: true });
    }

    const toEmail = process.env.CONTACT_TO || "JoegDuggar@gmail.com";
    const fromEmail = process.env.CONTACT_FROM || "site@your-verified-domain.com";

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: `Good Neighbor Site <${fromEmail}>`,
        to: [toEmail],
        subject: "New inquiry from GoodNeighborNWA.com",
        html
      })
    });

    if (!r.ok) {
      const text = await r.text();
      return NextResponse.json({ ok: false, error: text }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Unknown error" }, { status: 500 });
  }
}
