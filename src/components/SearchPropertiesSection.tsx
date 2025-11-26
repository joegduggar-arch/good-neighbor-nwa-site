"use client";

import { useState } from "react";
import IdxWidget from "./IdxWidget";

type TabId = "featured" | "sold" | "slideshow" | "map";

const TABS: { id: TabId; label: string; widgetId: string; blurb: string }[] = [
  {
    id: "featured",
    label: "Featured Homes",
    widgetId: "122995",
    blurb:
      "Browse a curated selection of homes currently highlighted through Good Neighbor Realty.",
  },
  {
    id: "sold",
    label: "Sold / Pending",
    widgetId: "122996",
    blurb:
      "See recent activity on properties that have gone under contract or recently closed.",
  },
  {
    id: "slideshow",
    label: "Featured Slideshow",
    widgetId: "122997",
    blurb:
      "A rotating slideshow of highlighted listings across Northwest Arkansas.",
  },
  {
    id: "map",
    label: "Map Search",
    widgetId: "122998",
    blurb:
      "Search visually across Northwest Arkansas on an interactive map — all powered by IDX Broker.",
  },
];

export default function SearchPropertiesSection() {
  const [active, setActive] = useState<TabId>("featured");

  const current = TABS.find((t) => t.id === active)!;

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Search Properties
        </h2>
        <p className="mt-3 text-sm text-neutral-300 md:text-base">
          Browse featured homes, recently sold and pending properties, or
          explore Northwest Arkansas on an interactive map — all powered by IDX
          Broker, styled to match Good Neighbor Realty.
        </p>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={[
                  "inline-flex items-center justify-center rounded-full px-8 py-2 text-sm font-semibold transition",
                  isActive
                    ? "bg-yellow-400 text-black shadow"
                    : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Blurb under tabs */}
        <p className="mt-5 text-xs text-neutral-400 md:text-sm">
          {current.blurb}
        </p>

        {/* Active widget */}
        <div className="mt-10">
          <IdxWidget widgetId={current.widgetId} />
        </div>
      </div>
    </section>
  );
}