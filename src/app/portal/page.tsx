export const metadata = {
  title: "Client Portal — Good Neighbor Realty",
  description: "Sign in to view saved searches, favorites, and messages.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Client Portal</h1>
      <p className="mt-3 text-zinc-700">
        Access your saved searches, favorites, and messages with our team.
      </p>

      <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        {/* Replace the href below with your actual portal URL when ready */}
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:bg-black/85"
        >
          Open Portal
        </a>
        <p className="mt-3 text-sm text-zinc-600">
          Don’t have an account yet? Contact us and we’ll get you set up.
        </p>
      </div>
    </section>
  );
}
