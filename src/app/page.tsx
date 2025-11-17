// src/app/page.tsx
import HeroMovingImage from "@/components/HeroMovingImage";

export default function HomePage() {
  return (
    <>
      <HeroMovingImage />

      <main className="section text-center">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Welcome to Good Neighbor Realty • NWA
        </h1>
        <p className="mt-4 text-neutral-300">
          Helping you buy and sell in Northwest Arkansas with local expertise.
        </p>
      </main>
    </>
  );
}