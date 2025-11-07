// src/app/builders/swanson/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Swanson Properties | Good Neighbor Realty",
  description:
    "We represent Swanson Properties. Contact us directly for current inventory and floorplan availability in Bella Vista.",
};

export default function SwansonBuilderPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Swanson Properties
        </h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          We proudly represent Swanson Properties. To keep things simple and
          accurate, we share all availability and floorplan details{" "}
          <span className="font-medium">directly</span>. Please reach out and
          we’ll provide current homes, upcoming lots, and timelines in Bella
          Vista.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-amber-500 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            Contact Us About Swanson Properties
          </Link>
        </div>

        <hr className="my-12 border-neutral-800" />

        <p className="text-sm text-neutral-400">
          Note: Swanson homes are delivered as carefully crafted{" "}
          <span className="whitespace-nowrap">spec builds</span>. Individual
          home finishes and minor plan adjustments may vary at the builder’s
          discretion.
        </p>
      </section>
    </main>
  );
}
