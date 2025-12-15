// src/app/builders/swanson-properties/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Swanson Properties | Good Neighbor Realty",
  description:
    "Swanson Properties new-construction homes in Bella Vista and Tontitown, typically ranging from 1,900–2,500 sq ft.",
};

const PHONE = "(479) 713-9565";

export default function SwansonPropertiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-4 py-16">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/logos/dreambuilt.png"
            alt="Swanson Properties"
            width={320}
            height={180}
            className="mb-6 object-contain"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Builder We Represent
          </p>

          <h1 className="mt-3 text-center text-3xl font-semibold md:text-4xl">
            Swanson Properties
          </h1>
        </div>

        {/* Description */}
        <div className="mt-10 space-y-6 text-center text-base leading-relaxed text-neutral-200">
          <p>
            Swanson Properties offers thoughtfully designed new-construction homes
            in Bella Vista and Tontitown. Most floorplans typically range from
            1,900–2,500 sq ft with layouts crafted for comfortable living,
            practical storage, and modern finishes. Whether you&apos;re exploring
            available homes or looking for upcoming lots, Good Neighbor Realty is
            here to walk you through every option step by step.
          </p>
        </div>

        {/* Contact box */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-neutral-900/90 px-6 py-8 text-center shadow-xl ring-1 ring-white/10">
          <h2 className="text-lg font-semibold">
            Interested in a Swanson Properties home?
          </h2>

          <p className="mt-3 text-neutral-300">
            Contact Good Neighbor Realty for floorplans, availability, pricing,
            and build timelines in Bella Vista and Tontitown.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE.replace(/[^\d]/g, "")}`}
              className="rounded-full border border-neutral-600 px-5 py-2 text-sm font-semibold hover:border-yellow-400 hover:text-yellow-300"
            >
              Call {PHONE}
            </a>

            <a
              href="/contact"
              className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              Contact Us for Details
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}