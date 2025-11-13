// src/app/builders/timeless-homes/page.tsx

import Link from "next/link";
import Image from "next/image";
import PlanCard from "@/components/PlanCard";
import { getPlansByBuilder } from "@/lib/floorplans";

export const metadata = {
  title: "Timeless Homes | Good Neighbor Realty",
  description:
    "Explore Timeless Homes plans by Milagro Designs, LLC — ±2000 sq ft new-construction homes in Northwest Arkansas.",
};

export default function TimelessHomesPage() {
  const plans = getPlansByBuilder("timeless");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/logos/timeless.png"
            alt="Timeless Homes – Milagro Designs, LLC"
            width={56}
            height={56}
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-2"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Timeless Homes – Milagro Designs, LLC
            </h1>
            <p className="text-sm text-neutral-300">
              Thoughtfully designed homes around ±2000 sq ft, with classic curb
              appeal and efficient, livable layouts.
            </p>
          </div>
        </div>

        <p className="text-sm text-neutral-300 mb-8 max-w-3xl">
          Timeless Homes offers comfortable floorplans that focus on everyday
          living — practical footprints, inviting front elevations, and
          well-planned interior spaces. Browse the current plan lineup below,
          then connect with us to learn where these homes are being built.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard key={plan.key} plan={plan} />
          ))}
        </div>

        <p className="mt-8 text-xs text-neutral-400">
          Square footage and features are approximate and subject to change at
          the builder&apos;s discretion. Final specifications, colors, and
          finishes may vary from home to home.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-amber-500 px-5 py-2 text-sm font-medium text-amber-300 hover:bg-amber-500/10"
          >
            Have questions about a Timeless Homes plan? Let&apos;s talk.
          </Link>
        </div>
      </section>
    </main>
  );
}
