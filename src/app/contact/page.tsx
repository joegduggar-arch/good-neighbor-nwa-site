"use client";

import { useState } from "react";

export default function ContactPage() {
  const [state, setState] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    setState("sending");
    const r = await fetch("/api/contact", { method: "POST", body: JSON.stringify(body) });
    setState(r.ok ? "sent" : "error");
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-xl px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-semibold">Contact</h1>
        <p className="text-neutral-400 mt-2">
          Have a question about a home or a floorplan? Send us a note and we’ll get right back to you.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <input name="name" placeholder="Name" className="w-full rounded bg-neutral-900 p-3" />
          <input name="email" type="email" placeholder="Email" className="w-full rounded bg-neutral-900 p-3" />
          <input name="phone" placeholder="Phone" className="w-full rounded bg-neutral-900 p-3" />
          <textarea name="message" placeholder="Message" rows={5} className="w-full rounded bg-neutral-900 p-3" />
          <button
            className="rounded bg-amber-500 px-5 py-2 font-medium text-black disabled:opacity-60"
            disabled={state === "sending"}
          >
            {state === "sending" ? "Sending..." : "Send"}
          </button>
          {state === "sent" && <div className="text-green-400">Thanks! We’ll be in touch shortly.</div>}
          {state === "error" && <div className="text-red-400">Something went wrong. Please try again.</div>}
        </form>
      </section>
    </main>
  );
}