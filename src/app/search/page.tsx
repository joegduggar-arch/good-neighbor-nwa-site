// src/app/search/page.tsx
import IdxLegacyWidget from "@/components/IdxLegacyWidget";
import IdxWidget from "@/components/IdxWidget";

const FEATURED_WIDGET_ID = 10047;
const SOLD_WIDGET_ID = 10048;
const MAP_WIDGET_ID = "122998";

export default function SearchPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero / intro */}
      <section className="py-10 text-center">
        <h1 className="text-4xl font-bold">Search Properties</h1>
        <p className="mt-4 text-neutral-300">
          Browse featured homes, recently sold and pending properties, or
          explore Northwest Arkansas using our IDX-powered map search.
        </p>
      </section>

      {/* Featured Homes */}
      <section className="py-12 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-2xl font-semibold">Featured Homes</h2>
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-xl">
            <IdxLegacyWidget
              kind="showcase"
              widgetId={FEATURED_WIDGET_ID}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Sold / Pending */}
      <section className="py-12 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-2xl font-semibold">Sold / Pending</h2>
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-xl">
            <IdxLegacyWidget
              kind="showcase"
              widgetId={SOLD_WIDGET_ID}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Map Search */}
      <section className="py-12 bg-neutral-950 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-2xl font-semibold">Map Search</h2>
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-xl">
            <IdxWidget widgetId={MAP_WIDGET_ID} />
          </div>
        </div>
      </section>
    </main>
  );
}