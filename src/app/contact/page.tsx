"use client";
import { useState } from "react";
export default function ContactPage() {
  const [status, setStatus] = useState<string|undefined>();
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(form as any)),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    setStatus(data.ok ? "Sent!" : "Failed");
  }
  return (
    <main className="section">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <form onSubmit={submit} className="mt-6 grid gap-4 max-w-xl">
        <input name="name" placeholder="Name" className="bg-neutral-900 p-3 rounded-md" />
        <input name="email" placeholder="Email" className="bg-neutral-900 p-3 rounded-md" />
        <input name="phone" placeholder="Phone" className="bg-neutral-900 p-3 rounded-md" />
        <textarea name="message" placeholder="Message" className="bg-neutral-900 p-3 rounded-md h-32" />
        <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold rounded-md px-4 py-2">Send</button>
        {status && <p className="text-sm text-neutral-400">{status}</p>}
      </form>
    </main>
  );
}
