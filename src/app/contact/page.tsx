// src/app/contact/page.tsx
"use client";

import { useState } from "react";

export const metadata = {
  title: "Contact | Good Neighbor Realty",
  description: "Get in touch with Good Neighbor Realty.",
};

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send.");
      }

      setStatus("ok");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-2 text-neutral-300">
          We’ll get back to you as soon as possible.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-neutral-900 p-6 ring-1 ring-neutral-800"
        >
          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">Name</span>
            <input
              name="name"
              type="text"
              required
              className="rounded-md border border-neutral-700 bg-neutral-800 p-3 outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">Email</span>
            <input
              name="email"
              type="email"
              required
              className="rounded-md border border-neutral-700 bg-neutral-800 p-3 outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">Phone (optional)</span>
            <input
              name="phone"
              type="tel"
              className="rounded-md border border-neutral-700 bg-neutral-800 p-3 outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-neutral-300">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              className="resize-y rounded-md border border-neutral-700 bg-neutral-800 p-3 outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </label>

          <div className="mt-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-yellow-500 px-5 py-2.5 font-semibold text-black hover:bg-yellow-400 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "ok" && (
              <span className="text-sm text-green-400">
                Message sent successfully!
              </span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-400">
                {error || "Failed to send."}
              </span>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
