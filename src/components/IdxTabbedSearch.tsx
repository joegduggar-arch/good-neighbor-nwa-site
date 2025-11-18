// src/components/IdxTabbedSearch.tsx
"use client";

import { useEffect, useState } from "react";

type WidgetKey = "featured" | "map"; // we’re using 2 widgets for now

type WidgetConfig = {
  label: string;
  id: string; // IDX Broker widget ID
  description: string;
};

const WIDGETS: Record<WidgetKey, WidgetConfig> = {
  featured: {
    label: "Featured Homes",
    id: "122995",
    description:
      "Browse a curated selection of homes currently available through Good Neighbor Realty.",
  },
  // If you want Sold/Pending back, uncomment this and add it to WidgetKey above:
  // sold: {
  //   label: "Sold / Pending",
  //   id: "122996",
  //   description:
  //     "See homes that have recently gone under contract or sold in Northwest Arkansas.",
  // },
  // And the slideshow:
  // slideshow: {
  //   label: "Featured Slideshow",
  //   id: "122997",
  //   description:
  //     "View an automatic slideshow of highlighted properties across the area.",
  // },
  map: {
    label: "Map Search",
    id: "122998",
    description:
      "Search visually across Northwest Arkansas on an interactive map.",
  },
};

const IDX_BASE = "//goodneighbornwa.idxbroker.com/idx/widgets/";

export default function IdxTabbedSearch() {
  const [active, setActive] = useState<WidgetKey>("featured");

  useEffect(() => {
    const config = WIDGETS[active];
    const container = document.getElementById("idx-widget-container");

    if (!container || !config) return;

    // Clear any previous widget markup
    container.innerHTML = "";

    const script = document.createElement("script");
    script.charset = "UTF-8";
    script.type = "text/javascript";
    script.id = `idxwidgetsrc-${config.id}`;
    script.src = `${IDX_BASE}${config.id}`;

    container.appendChild(script);

    // optional cleanup
    return () => {
      container.innerHTML = "";
    };
  }, [active]);

  const activeConfig = WIDGETS[active];

  return (
    <section className="bg-neutral-950 text-neutral-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Search Properties
          </h2>

          {/* Rounded tab buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {Object.entries(WIDGETS).map(([key, cfg]) => {
              const k = key as WidgetKey;
              const isActive = k === active;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setActive(k)}
                  className={
                    "px-4 py-1.5 text-sm font-medium rounded-full border transition " +
                    (isActive
                      ? "border-yellow-400 bg-yellow-400/10 text-yellow-300"
                      : "border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-yellow-400 hover:text-yellow-300")
                  }
                >
                  {cfg.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic description under the tabs */}
          <p className="mt-4 text-sm text-neutral-300 max-w-2xl mx-auto">
            {activeConfig.description}
          </p>
        </div>

        {/* IDX widget container */}
        <div className="mt-8 rounded-2xl bg-black/40 p-4 sm:p-6">
          <div id="idx-widget-container" />
        </div>
      </div>
    </section>
  );
}