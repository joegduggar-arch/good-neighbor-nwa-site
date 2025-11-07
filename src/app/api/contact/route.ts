// src/app/api/contact/route.ts
import type { NextRequest } from "next/server";
export const runtime = "nodejs"; // required so Nodemailer runs on Vercel

import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "");
    const email = String(body.email ?? "");
    const phone = String(body.phone ?? "");
    const message = String(body.message ?? "");

    if (!email || !message) {
      return json({ ok: false, error: "Email and message are required." }, 400);
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO || user;

    if (!user || !pass || !to) {
      return json(
        { ok: false, error: "Server email is not configured." },
        500
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const html = `
      <div style="font-family: system-ui, Arial, sans-serif">
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name) || "(not provided)"} </p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone) || "(not provided)"} </p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Good Neighbor Realty" <${user}>`,
      to,
      replyTo: email,
      subject: `New website inquiry from ${name || email}`,
      html,
    });

    return json({ ok: true }, 200);
  } catch (err) {
    console.error("Contact form error:", err);
    return json({ ok: false, error: "Failed to send." }, 500);
  }
}

// small helpers
function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(str: string) {
  return String(str).replace(/[&<>"']/g, (ch) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as const)[
      ch as "&" | "<" | ">" | '"' | "'"
    ]!
  );
}
