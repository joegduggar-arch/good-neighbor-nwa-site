"use client";

import Script from "next/script";

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* PAGE HEADER */}
      <section className="border-b border-neutral-800 bg-black py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              Find Your Next Home
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-neutral-300 md:text-base">
              Browse featured listings, see what&rsquo;s recently sold or
              pending, explore a rotating slideshow of homes, and search the map
              across Northwest Arkansas — all powered by our IDX Broker feed.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10">
        {/* 1. FEATURED SHOWCASE (ID 122995) */}
        <section id="featured" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Featured Homes</h2>
            <p className="text-xs text-neutral-400">
              Curated properties we think are worth a closer look.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-3">
            {/* IDX Broker widget script */}
            <Script
              id="idxwidgetsrc-122995"
              src="//goodneighbornwa.idxbroker.com/idx/widgets/122995"
              strategy="afterInteractive"
              charSet="UTF-8"
            />
          </div>
        </section>

        {/* 2. SOLD / PENDING SHOWCASE (ID 122996) */}
        <section id="sold-pending" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Sold &amp; Pending</h2>
            <p className="text-xs text-neutral-400">
              See what&rsquo;s recently gone under contract in the area.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-3">
            <Script
              id="idxwidgetsrc-122996"
              src="//goodneighbornwa.idxbroker.com/idx/widgets/122996"
              strategy="afterInteractive"
              charSet="UTF-8"
            />
          </div>
        </section>

        {/* 3. FEATURED SLIDE SHOW (ID 122997) */}
        <section id="slideshow" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Featured Slideshow</h2>
            <p className="text-xs text-neutral-400">
              A rotating look at current listings across Northwest Arkansas.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-3">
            <Script
              id="idxwidgetsrc-122997"
              src="//goodneighbornwa.idxbroker.com/idx/widgets/122997"
              strategy="afterInteractive"
              charSet="UTF-8"
            />
          </div>
        </section>

        {/* 4. MAP SEARCH (ID 122998) */}
        <section id="map-search" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold">Interactive Map Search</h2>
            <p className="text-xs text-neutral-400">
              Pan and zoom around the region to see active listings by area.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-3">
            <Script
              id="idxwidgetsrc-122998"
              src="//goodneighbornwa.idxbroker.com/idx/widgets/122998"
              strategy="afterInteractive"
              charSet="UTF-8"
            />
          </div>
        </section>
      </div>
    </main>
  );
}