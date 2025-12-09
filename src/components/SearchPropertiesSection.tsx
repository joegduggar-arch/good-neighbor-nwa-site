"use client";

import { useState } from "react";
import IdxLegacyWidget from "./IdxLegacyWidget";
import IdxWidget from "./IdxWidget";

type TabKey = "featured" | "sold" | "map";

const TABS: { key: TabKey; label: string }[] = [
  { key: "featured", label: "Featured Homes" },
  { key: "sold", label: "Sold / Pending" },
  { key: "map", label: "Map Search" },
];

export default function SearchPropertiesSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("featured");

  return (
    <section className="border-t border-neutral-900 bg-black text-white py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Search Properties</h2>
          <p className="mt-3 text-sm text-neutral-300 md:text-base">
            Browse featured homes, recently sold and pending properties, or
            explore Northwest Arkansas on an interactive map — all powered by
            IDX Broker and styled to match Good Neighbor Realty.
          </p>
        </header>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {TABS.map((tab) => {
            const isActive = tab.key === activeTab;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={
                  "rounded-full px-6 py-2 text-sm font-semibold transition-colors " +
                  (isActive
                    ? "bg-yellow-400 text-black shadow"
                    : "border border-neutral-600 text-neutral-200 hover:border-yellow-300 hover:text-yellow-300")
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Card that holds the widget */}
        <div className="idx-panel mt-10">
          {activeTab === "featured" && (
            <IdxLegacyWidget
              kind="showcase"
              widgetId={10047}
              className="idx-widget-inner"
            />
          )}

          {activeTab === "sold" && (
            <IdxLegacyWidget
              kind="showcase"
              widgetId={10048}
              className="idx-widget-inner"
            />
          )}

          {activeTab === "map" && (
            <div className="idx-widget-inner">
              {/* New-style Prime MapSearch widget */}
              <IdxWidget widgetId="122998" containerId="idx-home-map" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}