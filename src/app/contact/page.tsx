// src/app/contact/page.tsx

export const metadata = {
  title: "Contact | Good Neighbor Realty",
  description: "Get in touch with Good Neighbor Realty.",
};

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold">Contact Us</h1>
        <p className="mt-3 text-neutral-300">
          Have a question about buying, selling, or new construction in Bella Vista or
          across Northwest Arkansas? Send us a note and we’ll get right back to you.
        </p>

        <div className="mt-10 rounded-xl bg-neutral-900/60 p-6 ring-1 ring-neutral-800">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
