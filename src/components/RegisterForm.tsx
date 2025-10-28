'use client';
import { useState } from "react";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const r = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, password, acceptTerms: accept })
    });
    const data = await r.json();
    if (data.ok) {
      window.location.href = "/portal"; // logged-in cookies set by API
    } else {
      setErr(data.error || "Could not register. Try again.");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3 max-w-md">
      <h2 className="text-xl font-semibold">Create Your Portal Account</h2>
      <input className="w-full rounded border px-3 py-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required />
      <input className="w-full rounded border px-3 py-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <input className="w-full rounded border px-3 py-2" placeholder="Mobile phone (optional for text)" value={phone} onChange={e=>setPhone(e.target.value)} />
      <input className="w-full rounded border px-3 py-2" placeholder="Create a password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" checked={accept} onChange={e=>setAccept(e.target.checked)} required />
        <span>I agree to the <a className="underline" href="/terms" target="_blank">VOW Terms of Use</a> and <a className="underline" href="/privacy" target="_blank">Privacy Policy</a>.</span>
      </label>
      <button className="rounded bg-[#D4AF37] px-5 py-2 font-medium text-black hover:opacity-90" type="submit">Create Account</button>
      {err && <p className="text-sm text-red-700">{err}</p>}
      <p className="text-xs text-gray-500">We’ll send a welcome email and may text you about your search. You can opt out anytime.</p>
    </form>
  );
}
