import HeroMovingImage from "@/components/HeroMovingImage";
import Link from "next/link";
// If you have this component already:
// import NWAOverview from "@/components/NWAOverview";

export const metadata = {
  title: "Good Neighbor Realty | Northwest Arkansas",
  description:
    "Good Neighbor Realty serves Northwest Arkansas with a special focus on Bella Vista new construction and forever homes.",
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <HeroMovingImage />

      {/* Quick Actions – keeps home short but useful */}
      <section className="border-t border-neutral-900 bg-neutral-950 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            How can we help today?
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {/* New Construction */}
            <Link
              href="/new-construction"
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 hover:border-yellow-400 hover:bg-neutral-900 transition"
            >
              <div className="text-sm font-semibold text-yellow-300">
                Bella Vista New Construction
              </div>
              <p className="mt-2 text-xs text-neutral-300">
                Explore current and upcoming spec homes and floorplans.
              </p>
            </Link>

            {/* Search All Properties */}
            <Link
              href="/search"
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 hover:border-yellow-400 hover:bg-neutral-900 transition"
            >
              <div className="text-sm font-semibold text-yellow-300">
                Search All Properties
              </div>
              <p className="mt-2 text-xs text-neutral-300">
                Use our IDX search to browse the full MLS across Northwest Arkansas.
              </p>
            </Link>

            {/* Meet the Agents */}
            <Link
              href="/agents"
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 hover:border-yellow-400 hover:bg-neutral-900 transition"
            >
              <div className="text-sm font-semibold text-yellow-300">
                Meet Our Agents
              </div>
              <p className="mt-2 text-xs text-neutral-300">
                Get to know the team that will walk with you through every step.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* OPTIONAL: very light NWA overview */}
      {/*
      <section className="bg-neutral-950 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-semibold md:text-2xl">
            Northwest Arkansas at a Glance
          </h2>
          <NWAOverview />
        </div>
      </section>
      */}
    </main>
  );
}