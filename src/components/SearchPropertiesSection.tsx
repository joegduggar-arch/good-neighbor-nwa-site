// src/components/SearchPropertiesSection.tsx
"use client";

import { useState } from "react";
import IdxWidget from "./IdxWidget";

type TabKey = "featured" | "sold" | "slideshow" | "map";

const TABS: { key: TabKey; label: string; widgetId: string }[] = [
  { key: "featured",   label: "Featured Homes",    widgetId: "122995" },
  { key: "sold",       label: "Sold / Pending",    widgetId: "122996" },
  { key: "slideshow",  label: "Featured Slideshow",widgetId: "122997" },
  { key: "map",        label: "Map Search",        widgetId: "122998" },
];

export default function SearchPropertiesSection() {
  const [active, setActive] = useState<TabKey>("featured");

  return (
    <section className="border-t border-neutral-900 bg-neutral-950 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-semibold">Search Properties</h2>

        <p className="mt-3 text-center text-sm text-neutral-300 max-w-xl mx-auto">
          Browse featured homes, recently sold and pending properties, or explore
          Northwest Arkansas on an interactive map — all powered by IDX Broker.
        </p>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {TABS.map((tab) => {
            const isActive = tab.key === active;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                className={[
                  "rounded-full px-6 py-2 text-sm font-semibold transition",
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "border border-neutral-700 text-neutral-200 hover:border-yellow-300 hover:text-yellow-300",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active widget */}
        <div className="mt-10">
          {active === "featured" && (
            <IdxWidget widgetId="122995" containerId="idx-featured" />
          )}
          {active === "sold" && (
            <IdxWidget widgetId="122996" containerId="idx-sold" />
          )}
          {active === "slideshow" && (
            <IdxWidget widgetId="122997" containerId="idx-slideshow" />
          )}
          {active === "map" && (
            <IdxWidget widgetId="122998" containerId="idx-map" />
          )}
        </div>
      </div>
    </section>
  );
}