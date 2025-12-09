// src/app/search/page.tsx

import LegacyIdxWidget from "@/components/LegacyIdxWidget";
import IdxWidget from "@/components/IdxWidget";

const FEATURED_ID = "10047";
const SOLD_ID = "10048";
const SLIDESHOW_ID = "10049";
// New-style widget for Prime MapSearch:
const MAP_WIDGET_ID = "122998";

export default function SearchPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
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
          <h2 className="text-2xl font-semibold mb-4">Featured Homes</h2>
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-xl">
            <LegacyIdxWidget widgetId={FEATURED_ID} type="showcase" />
          </div>
        </div>
      </section>

      {/* Sold / Pending */}
      <section className="py-12 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold mb-4">Sold / Pending</h2>
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-xl">
            <LegacyIdxWidget widgetId={SOLD_ID} type="showcase" />
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="py-12 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold mb-4">Featured Slideshow</h2>
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-xl">
            <LegacyIdxWidget widgetId={SLIDESHOW_ID} type="slideshow" />
          </div>
        </div>
      </section>

      {/* Map Search (new-style widget) */}
      <section className="py-12 bg-neutral-950 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold mb-4">Map Search</h2>
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-xl">
            <IdxWidget widgetId={MAP_WIDGET_ID} />
          </div>
        </div>
      </section>
    </main>
  );
}
