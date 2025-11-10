// src/app/api/contact/route.ts
import type { NextRequest } from "next/server";
export const runtime = "nodejs"; // ensure Node on Vercel

import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required." }), {
        status: 400,
      });
    }

    const user = process.env.EMAIL_USER!;
    const pass = process.env.EMAIL_PASS!;
    const to = process.env.EMAIL_TO || user;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Good Neighbor Realty" <${user}>`,
      to,
      replyTo: email,
      subject: `New inquiry from ${name || "Website Visitor"}`,
      html: `
        <div style="font-family:system-ui,Arial,sans-serif">
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name || "(not provided)"} </p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "(not provided)"} </p>
          <p><strong>Message:</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(JSON.stringify({ error: "Failed to send." }), { status: 500 });
  }
}
