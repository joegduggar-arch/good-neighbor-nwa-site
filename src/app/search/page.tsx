// src/app/search/page.tsx

import Script from "next/script";

export default function SearchPage() {
  return (
    <main className="bg-black text-white pb-16">
      {/* Header section */}
      <section className="container py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Search Properties
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-300">
            Browse featured homes, recently sold and pending properties, or
            explore Northwest Arkansas on an interactive map — all powered by
            IDX Broker.
          </p>
        </div>
      </section>

      {/* Widgets stacked vertically */}
      <section className="container space-y-12">
        {/* Featured Homes */}
        <div className="bg-neutral-900/60 rounded-2xl p-4 md:p-6 ring-1 ring-neutral-800">
          <h2 className="mb-3 text-lg font-semibold">Featured Homes</h2>
          <p className="mb-4 text-sm text-neutral-300">
            A curated selection of homes currently highlighted through Good
            Neighbor Realty.
          </p>

          {/* IDX Broker widget script */}
          <Script
            id="idxwidgetsrc-122995"
            src="//goodneighbornwa.idxbroker.com/idx/widgets/122995"
            strategy="lazyOnload"
          />
        </div>

        {/* Sold / Pending */}
        <div className="bg-neutral-900/60 rounded-2xl p-4 md:p-6 ring-1 ring-neutral-800">
          <h2 className="mb-3 text-lg font-semibold">Sold / Pending</h2>
          <p className="mb-4 text-sm text-neutral-300">
            See recent activity on properties that have gone under contract or
            recently closed.
          </p>

          <Script
            id="idxwidgetsrc-122996"
            src="//goodneighbornwa.idxbroker.com/idx/widgets/122996"
            strategy="lazyOnload"
          />
        </div>

        {/* Featured Slideshow */}
        <div className="bg-neutral-900/60 rounded-2xl p-4 md:p-6 ring-1 ring-neutral-800">
          <h2 className="mb-3 text-lg font-semibold">Featured Slideshow</h2>
          <p className="mb-4 text-sm text-neutral-300">
            A rotating slideshow of highlighted listings across Northwest
            Arkansas.
          </p>

          <Script
            id="idxwidgetsrc-122997"
            src="//goodneighbornwa.idxbroker.com/idx/widgets/122997"
            strategy="lazyOnload"
          />
        </div>

        {/* Map Search */}
        <div className="bg-neutral-900/60 rounded-2xl p-4 md:p-6 ring-1 ring-neutral-800">
          <h2 className="mb-3 text-lg font-semibold">Map Search</h2>
          <p className="mb-4 text-sm text-neutral-300">
            Search visually across Northwest Arkansas on an interactive map.
          </p>

          <Script
            id="idxwidgetsrc-122998"
            src="//goodneighbornwa.idxbroker.com/idx/widgets/122998"
            strategy="lazyOnload"
          />
        </div>
      </section>
    </main>
  );
}