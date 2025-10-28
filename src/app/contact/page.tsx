'use client';
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "ok" | "fail">(null);
  const [err, setErr] = useState<string>("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null); setErr("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message })
      });
      const data = await r.json();
      if (data.ok) { setStatus("ok"); setName(""); setEmail(""); setPhone(""); setMessage(""); }
      else { setStatus("fail"); setErr(data.error || "Something went wrong."); }
    } catch (e: any) {
      setStatus("fail"); setErr(e?.message || "Network error.");
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-3xl font-semibold">Contact Good Neighbor Realty</h1>
      <p className="text-gray-600">Have a question or want to schedule a showing? Send us a note and we’ll get back quickly.</p>
      <form className="space-y-3" onSubmit={submit}>
        <input className="w-full rounded border px-3 py-2" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
        <input className="w-full rounded border px-3 py-2" placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full rounded border px-3 py-2" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
        <textarea className="w-full rounded border px-3 py-2" placeholder="How can we help?" rows={5} required value={message} onChange={e => setMessage(e.target.value)} />
        <button className="rounded bg-brand-gold px-5 py-2 font-medium text-brand-black hover:bg-brand-goldDark" type="submit">Send</button>
      </form>
      {status === "ok" && <p className="text-sm text-green-700">Thanks! Your message has been sent.</p>}
      {status === "fail" && <p className="text-sm text-red-700">We couldn’t send your message: {err}</p>}
      <p className="text-xs text-gray-500">Emails are delivered via Resend. Set RESEND_API_KEY & verified from-domain in Vercel env vars.</p>
    </div>
  );
}
