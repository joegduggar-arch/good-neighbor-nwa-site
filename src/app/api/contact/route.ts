// src/app/api/contact/route.ts
import type { NextRequest } from "next/server";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required." }), { status: 400 });
    }

    const user = process.env.EMAIL_USER!;
    const pass = process.env.EMAIL_PASS!;
    const to = process.env.EMAIL_TO || user;

    // Use dynamic import so we don’t need @types/nodemailer at build-time
    const nodemailer = (await import("nodemailer")).default;
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });

    await transporter.sendMail({
      from: `"Good Neighbor Realty" <${user}>`,
      to,
      replyTo: email,
      subject: `New website inquiry from ${name || "Unknown"}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g,"<br/>")}</p>
      `
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(JSON.stringify({ error: "Failed to send." }), { status: 500 });
  }
}