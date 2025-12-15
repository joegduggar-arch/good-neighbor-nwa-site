"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-xl px-4 py-12 md:py-20">
        <h1 className="mb-8 text-3xl font-bold">Contact</h1>

        <form className="space-y-6" onSubmit={onSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full rounded-md bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-md bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone"
            className="w-full rounded-md bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
            className="w-full rounded-md bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-md bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-yellow-300">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-300">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}