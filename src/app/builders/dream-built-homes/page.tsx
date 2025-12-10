// src/app/builders/dream-built-homes/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Dream Built Homes | Good Neighbor Realty",
  description:
    "Dream Built Homes new-construction properties in Bella Vista and Tontitown, typically ranging from 1,900–2,500 sq ft.",
};

const PHONE = "(479) 713-9565";

export default function DreamBuiltPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-4 py-16">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/logos/dreambuilt.png"
            alt="Dream Built Homes"
            width={320}
            height={180}
            className="object-contain mb-6"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Builder We Represent
          </p>

          <h1 className="mt-3 text-3xl font-semibold md:text-4xl text-center">
            Dream Built Homes
          </h1>
        </div>

        {/* FIXED DESCRIPTION TEXT */}
        <div className="mt-10 space-y-6 text-center text-neutral-200 leading-relaxed text-base">
          <p>
            Dream Built Homes offers thoughtfully designed new-construction
            homes in <span className="font-semibold">Bella Vista</span> and{" "}
            <span className="font-semibold">Tontitown</span>.
          </p>

          <p>
            Most floorplans typically range from{" "}
            <span className="font-semibold">1,900–2,500 sq ft</span>, with
            layouts crafted for comfortable living, practical storage, and
            modern finishes.
          </p>

          <p>
            Whether you're exploring available homes or looking for upcoming
            lots, Good Neighbor Realty is here to walk you through every option
            step by step.
          </p>
        </div>

        {/* CONTACT BOX */}
        <div className="mt-12 rounded-2xl bg-neutral-900/90 px-6 py-8 ring-1 ring-white/10 shadow-xl max-w-2xl mx-auto text-center">
          <h2 className="text-lg font-semibold">
            Interested in a Dream Built home?
          </h2>

          <p className="mt-3 text-neutral-300">
            Contact Good Neighbor Realty for floorplans, availability, pricing,
            and build timelines in Bella Vista and Tontitown.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:4797139565"
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