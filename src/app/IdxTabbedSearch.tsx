"use client";

import { useState } from "react";
import Script from "next/script";

type TabKey = "featured" | "sold" | "slideshow" | "map";

const TABS: { key: TabKey; label: string; blurb: string }[] = [
  {
    key: "featured",
    label: "Featured Homes",
    blurb: "Curated listings we think are worth a closer look.",
  },
  {
    key: "sold",
    label: "Sold / Pending",
    blurb: "Recent activity so you can see what the market is doing.",
  },
  {
    key: "slideshow",
    label: "Featured Slideshow",
    blurb: "A rotating highlight reel of current homes.",
  },
  {
    key: "map",
    label: "Map Search",
    blurb: "Search visually across Northwest Arkansas on an interactive map.",
  },
];

export default function IdxTabbedSearch() {
  const [active, setActive] = useState<TabKey>("featured");

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {/* Tabs header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold md:text-3xl">
          Search Properties
        </h1>
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                active === tab.key
                  ? "bg-yellow-400 text-black"
                  : "bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab blurb */}
      <p className="mt-3 text-sm text-neutral-300">
        {TABS.find((t) => t.key === active)?.blurb}
      </p>

      {/* Active tab content */}
      <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
        {active === "featured" && (
          <div className="overflow-hidden">
            <Script
              id="idxwidgetsrc-122995"
              src="//goodneighbornwa.idxbroker.com/idx/widgets/122995"
              strategy="afterInteractive"
              charSet="UTF-8"
            />
          </div>
        )}

        {active === "sold" && (
          <div className="overflow-hidden">
            <Script
              id="idxwidgetsrc-122996"
              src="//goodneighbornwa.idxbroker.com/idx/widgets/122996"
              strategy="afterInteractive"
              charSet="UTF-8"
            />
          </div>
        )}

        {active === "slideshow" && (
          <div className="overflow-hidden">
            <Script
              id="idxwidgetsrc-122997"
              src="//goodneighbornwa.idxbroker.com/idx/widgets/122997"
              strategy="afterInteractive"
              charSet="UTF-8"
            />
          </div>
        )}

        {active === "map" && (
          <div className="overflow-hidden">
            <Script
              id="idxwidgetsrc-122998"
              src="//goodneighbornwa.idxbroker.com/idx/widgets/122998"
              strategy="afterInteractive"
              charSet="UTF-8"
            />
          </div>
        )}
      </div>
    </section>
  );
}