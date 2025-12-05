"use client";

import { useState } from "react";
import LegacyIdxWidget from "./LegacyIdxWidget";

// Legacy widget IDs from your screenshot
const FEATURED_ID = "10047";
const SOLD_ID = "10048";
const SLIDESHOW_ID = "10049";
const MAP_ID = "10051";

type TabId = "featured" | "sold" | "slideshow" | "map";

const TABS: {
  id: TabId;
  label: string;
  description: string;
  widgetId: string;
  type: "showcase" | "slideshow" | "mapsearch";
}[] = [
  {
    id: "featured",
    label: "Featured Homes",
    description:
      "A curated selection of homes currently highlighted through Good Neighbor Realty.",
    widgetId: FEATURED_ID,
    type: "showcase",
  },
  {
    id: "sold",
    label: "Sold / Pending",
    description:
      "See recent activity on properties that have gone under contract or recently closed.",
    widgetId: SOLD_ID,
    type: "showcase",
  },
  {
    id: "slideshow",
    label: "Featured Slideshow",
    description:
      "A rotating slideshow of highlighted listings across Northwest Arkansas.",
    widgetId: SLIDESHOW_ID,
    type: "slideshow",
  },
  {
    id: "map",
    label: "Map Search",
    description:
      "Explore Northwest Arkansas on an interactive map, powered by IDX Broker.",
    widgetId: MAP_ID,
    type: "mapsearch",
  },
];

export default function SearchPropertiesSection() {
  const [activeTab, setActiveTab] = useState<TabId>("featured");
  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <section className="border-t border-neutral-900 bg-black py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Search Properties</h2>
          <p className="mt-4 text-sm text-neutral-300 md:text-base">
            Browse featured homes, recently sold and pending properties, or
            explore Northwest Arkansas on an interactive map — all powered by
            IDX Broker and styled to match Good Neighbor Realty.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition
                  ${isActive
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "border border-neutral-700 text-neutral-200 hover:border-yellow-300 hover:text-yellow-300"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Description + Widget */}
        <div className="mt-8 text-center text-sm text-neutral-300 md:text-base">
          {active.description}
        </div>

        <div className="mt-10 rounded-2xl bg-neutral-950 p-6 shadow-xl">
          <LegacyIdxWidget widgetId={active.widgetId} type={active.type} />
        </div>
      </div>
    </section>
  );
}