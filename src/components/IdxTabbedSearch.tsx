"use client";

import { useState } from "react";

const TABS = [
  { id: "featured", label: "Featured Homes" },
  { id: "sold", label: "Sold / Pending" },
  { id: "slideshow", label: "Featured Slideshow" },
  { id: "map", label: "Map Search" },
];

export default function IdxTabbedSearch() {
  const [active, setActive] = useState<string>("featured");

  return (
    <section className="bg-black py-16 text-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Search Properties</h2>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={[
                  "rounded-full border px-5 py-2 text-sm font-semibold transition",
                  isActive
                    ? "border-yellow-400 bg-yellow-400 text-black"
                    : "border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-yellow-400 hover:text-yellow-300",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Short description under tabs */}
        <p className="mt-6 max-w-xl text-sm text-neutral-300">
          Browse a curated selection of homes and search across Northwest Arkansas —
          all powered by IDX Broker, styled to match Good Neighbor Realty.
        </p>

        {/* Widget area */}
        <div className="mt-10 w-full">
          {/* Featured */}
          <div
            id="idx-featured"
            className={active === "featured" ? "block" : "hidden"}
          >
            {/* IDX FEATURED SHOWCASE WIDGET SCRIPT HERE */}
            {/* leave your <script ...122995> line inside this div */}
          </div>

          {/* Sold / Pending */}
          <div
            id="idx-sold"
            className={active === "sold" ? "block" : "hidden"}
          >
            {/* <script ...122996> */}
          </div>

          {/* Slideshow */}
          <div
            id="idx-slideshow"
            className={active === "slideshow" ? "block" : "hidden"}
          >
            {/* <script ...122997> */}
          </div>

          {/* Map Search */}
          <div id="idx-map" className={active === "map" ? "block" : "hidden"}>
            {/* <script ...122998> */}
          </div>
        </div>
      </div>
    </section>
  );
}