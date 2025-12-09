// src/app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-xl px-4 py-12 md:py-20">
        <h1 className="text-3xl font-bold mb-8">Contact</h1>

        <form className="space-y-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone"
            className="w-full rounded-md bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-md bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-yellow-700 hover:bg-yellow-600 text-black font-semibold py-3 transition"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
