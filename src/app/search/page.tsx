// src/app/search/page.tsx
"use client";

import IdxWidget from "@/components/IdxWidget";

export default function SearchPage() {
  return (
    <main className="bg-black text-white">
      {/* Top: Big map search */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-3xl font-bold md:text-4xl">Search Properties</h1>
          <p className="mt-3 text-sm text-neutral-300 md:text-base">
            Browse featured homes, recently sold and pending properties, or
            explore Northwest Arkansas on an interactive map — all powered by
            IDX Broker and tailored to Good Neighbor Realty.
          </p>
        </div>

        <div className="mt-8">
          {/* Full-width map widget */}
          <IdxWidget widgetId="122998" containerId="idx-search-map" />
        </div>
      </section>

      import LegacyIdxWidget from "@/components/LegacyIdxWidget";
// (make sure this import is at the top of the file, with your other imports)


// ...later in the JSX:

{/* Featured Homes (Legacy widget) */}
<div>
  <h2 className="text-2xl font-semibold">Featured Homes</h2>
  <p className="mt-2 text-sm text-neutral-300">
    A curated selection of homes currently highlighted through Good
    Neighbor Realty.
  </p>
  <div className="mt-6">
    <LegacyIdxWidget
      widgetKey="featured-homes-legacy"
      scriptSrc="//goodneighbornwa.idxbroker.com/idx/customshowcasejs.php?widgetid=104877"
    />
  </div>
</div>

          {/* Sold / Pending */}
          <div className="idx-section-wrapper">
            <h2 className="text-2xl font-semibold">Sold / Pending</h2>
            <p className="mt-2 text-sm text-neutral-300">
              See recent activity on properties that have gone under contract or
              recently closed.
            </p>
            <div className="mt-6">
              <IdxWidget widgetId="122996" containerId="idx-search-sold" />
            </div>
          </div>

          {/* Featured Slideshow */}
          <div className="idx-section-wrapper">
            <h2 className="text-2xl font-semibold">Featured Slideshow</h2>
            <p className="mt-2 text-sm text-neutral-300">
              A rotating slideshow of highlighted listings across Northwest
              Arkansas.
            </p>
            <div className="mt-6">
              <IdxWidget widgetId="122997" containerId="idx-search-slideshow" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}