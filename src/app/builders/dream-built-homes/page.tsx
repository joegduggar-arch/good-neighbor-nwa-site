// src/app/builders/dream-built-homes/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Dream Built Homes | Good Neighbor Realty",
  description:
    "Dream Built Homes — quality new construction homes in Northwest Arkansas, typically ranging from 1,900–2,500 sq ft. Contact Good Neighbor Realty for current plans and availability.",
};

const PHONE_DISPLAY = "(479) 713-9565";
const PHONE_TEL = "4797139565";

export default function DreamBuiltPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Page Container */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">

        {/* Logo + Heading */}
        <div className="flex flex-col items-center text-center gap-6">

          {/* Logo Card */}
          <div className="relative overflow-hidden rounded-2xl bg-neutral-900/80 px-10 py-8 ring-1 ring-white/10 shadow-xl">
            <Image
              src="/images/logos/dreambuilt.png"
              alt="Dream Built Homes logo"
              width={400}
              height={400}
              className="h-40 w-auto md:h-56 object-contain"
              priority
            />
          </div>

          {/* Title */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Builder We Represent
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Dream Built Homes
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 space-y-4 text-sm leading-relaxed text-neutral-200 md:text-base">
          <p>
            Dream Built Homes offers thoughtfully designed new-construction
            homes across Northwest Arkansas, typically ranging from{" "}
            <span className="font-semibold">1,900–2,500 sq ft</span>. Each home
            is crafted for comfort, function, and high-quality living.
          </p>

          <p>
            Whether you're exploring available floorplans or looking for lots in
            Bella Vista, Bentonville, and surrounding areas, Good Neighbor Realty
            is here to guide you every step of the way.
          </p>
        </div>

        {/* Contact Box */}
        <div className="mt-12 rounded-2xl bg-neutral-900/90 px-6 py-6 ring-1 ring-white/10 shadow-lg">
          <h2 className="text-lg font-semibold">Interested in Dream Built Homes?</h2>

          <p className="mt-3 text-sm text-neutral-300">
            Contact Good Neighbor Realty for current floorplans, selections, and
            availability.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-neutral-600 px-5 py-2 text-sm font-semibold text-neutral-100 hover:border-yellow-400 hover:text-yellow-300"
            >
              Call {PHONE_DISPLAY}
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              Contact Us for Details
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}