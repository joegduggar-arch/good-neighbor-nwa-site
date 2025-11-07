// src/components/ContactForm.tsx
"use client";

import { useState } from "react";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(await res.text());

      setStatus({ type: "success", message: "Thanks! Your message has been sent." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message: "Sorry—something went wrong. Please try again or call us.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Phone</label>
        <input
          className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="(479) 555-1234"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
          rows={6}
          name="message"
          value={form.message}
          onChange={onChange}
          required
          placeholder="Tell us a little about what you’re looking for…"
        />
      </div>

      <div className="pt-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={status.type === "loading"}
          className="rounded-md bg-amber-500 px-5 py-2.5 font-medium text-black hover:bg-amber-400 disabled:opacity-60"
        >
          {status.type === "loading" ? "Sending…" : "Send Message"}
        </button>

        {status.type === "success" && (
          <p className="text-sm text-emerald-400">{status.message}</p>
        )}
        {status.type === "error" && <p className="text-sm text-rose-400">{status.message}</p>}
      </div>
    </form>
  );
}
