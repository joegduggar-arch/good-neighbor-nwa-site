import LegacyIdxWidget from "@/components/LegacyIdxWidget";

const FEATURED_ID = "10047";
const SOLD_ID = "10048";
const SLIDESHOW_ID = "10049";
const MAP_ID = "10051";

export default function SearchPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="py-10 text-center">
        <h1 className="text-4xl font-bold">Search Properties</h1>
        <p className="mt-4 text-neutral-300">
          Browse featured homes, recently sold and pending properties, or explore Northwest Arkansas using our IDX-powered map search.
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

      {/* Map Search */}
      <section className="py-12 bg-neutral-950 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold mb-4">Map Search</h2>
          <div className="rounded-2xl bg-neutral-900 p-6 shadow-xl">
            <LegacyIdxWidget widgetId={MAP_ID} type="mapsearch" />
          </div>
        </div>
      </section>
    </main>
  );
}