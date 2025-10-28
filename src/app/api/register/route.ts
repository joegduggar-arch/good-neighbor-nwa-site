import { NextRequest, NextResponse } from "next/server";

async function sendEmail(to: string, subject: string, html: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, error: "Missing RESEND_API_KEY" };

  const fromEmail = process.env.CONTACT_FROM || "site@goodneighbornwa.com";
  const brokerCopy = process.env.CONTACT_TO || "JoegDuggar@gmail.com";

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Good Neighbor Realty <${fromEmail}>`,
      to: [to],
      cc: [brokerCopy],
      subject,
      html
    })
  });
  if (!r.ok) return { ok: false, error: await r.text() };
  return { ok: true };
}

async function sendSms(to: string, text: string) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  if (!sid || !token || !from) return { ok: false, error: "Missing Twilio env (optional)" };

  const url = `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`;
  const form = new URLSearchParams({ To: to, From: from, Body: text });
  const r = await fetch(url, {
    method: "POST",
    headers: { Authorization: "Basic " + Buffer.from(`${sid}:${token}`).toString("base64") },
    body: form
  });
  if (!r.ok) return { ok: false, error: await r.text() };
  return { ok: true };
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, password, acceptTerms } = await req.json();

    if (!name || !email || !acceptTerms) {
      return NextResponse.json({ ok: false, error: "Name, email, and Terms acceptance are required." }, { status: 400 });
    }

    // Minimal consent log: email it to the broker inbox (acts as an audit trail)
    const ts = new Date().toISOString();
    const brokerLogHtml = `
      <div style="font-family:system-ui,Arial">
        <h3>New VOW Registration</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "(not provided)"}</p>
        <p><b>Time:</b> ${ts}</p>
        <p><b>Consent:</b> Accepted Terms of Use</p>
      </div>
    `;
    await sendEmail(process.env.CONTACT_TO || "JoegDuggar@gmail.com", "New VOW Registration (Consent Log)", brokerLogHtml);

    // Welcome email to registrant
    const welcomeHtml = `
      <div style="font-family:system-ui,Arial">
        <p>Hi ${name.split(" ")[0] || ""},</p>
        <p>Thanks for registering with <b>Good Neighbor Realty</b>! You now have secure access to view detailed MLS listings and sold data through our private Virtual Office Website.</p>
        <p>If you’d like to schedule a showing, request market reports, or adjust your saved searches, just reply to this email or text me at <b>(479) 713-9565</b>.</p>
        <p>— Joe Duggar<br/>Principal Broker | Good Neighbor Realty<br/>17728 Hook Monument Rd, Siloam Springs, AR 72761<br/>(479) 713-9565 • joegduggar@gmail.com</p>
      </div>
    `;
    await sendEmail(email, "Welcome to Good Neighbor Realty’s Private MLS Portal", welcomeHtml);

    // Optional SMS
    if (phone && phone.replace(/\D/g, "").length >= 10) {
      await sendSms(phone, "Good Neighbor Realty: Your private MLS portal is ready. Text back with areas, price, beds/baths and I’ll tailor alerts. – Joe (479) 713-9565");
    }

    // Set session cookies (logged in + accepted terms)
    const res = NextResponse.json({ ok: true });
    res.cookies.set("gnr_logged_in", "1", { httpOnly: false, path: "/" });
    res.cookies.set("gnr_terms", "1", { httpOnly: false, path: "/" });
    return res;
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
