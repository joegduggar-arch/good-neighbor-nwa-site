export const metadata = {
  title: "IDX Search — Good Neighbor Realty",
  description: "Search Northwest Arkansas listings.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">IDX Search</h1>
      <p className="mt-3 text-zinc-700">
        Search the MLS via our partner feed. (Widget/config coming next.)
      </p>

      {/* Placeholder panel so the route renders even before IDX is wired up */}
      <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-zinc-600">
          If you expected a search box here, the page is live but the IDX widget
          isn’t configured yet. Once you have your RESO/IDX embed or component,
          paste it in this panel.
        </p>
      </div>
    </section>
  );
}
