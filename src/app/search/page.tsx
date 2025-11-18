import IdxTabbedSearch from "@/components/IdxTabbedSearch";

export const metadata = {
  title: "Property Search | Good Neighbor Realty",
  description:
    "Search homes across Northwest Arkansas using our IDX-powered search tools.",
};

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Simple heading band */}
      <section className="border-b border-neutral-900 bg-neutral-950 py-6">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-xl font-semibold md:text-2xl">
            Northwest Arkansas Property Search
          </h1>
          <p className="mt-2 text-sm text-neutral-300">
            Use our MLS-powered search tools to explore homes, see what&apos;s
            sold, and browse the map.
          </p>
        </div>
      </section>

      <IdxTabbedSearch />
    </main>
  );
}