// src/app/page.tsx
"use client";

import HeroMovingImage from "@/components/HeroMovingImage";
import IdxTabbedSearch from "@/components/IdxTabbedSearch";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* 1. HERO AT THE VERY TOP */}
      <HeroMovingImage />

      {/* 2. PROPERTY SEARCH / FEATURED / MAP BELOW HERO */}
      <section className="border-t border-neutral-800 bg-neutral-950">
        <IdxTabbedSearch />
      </section>
    </main>
  );
}