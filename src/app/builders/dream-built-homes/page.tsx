// src/app/builders/dream-built-homes/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Dream Built Homes | Good Neighbor Realty",
  description:
    "Dream Built Homes new-construction properties in Bella Vista and Tontitown, typically ranging from 1,900–2,500 sq ft. Contact Good Neighbor Realty for current plans and availability.",
};

const PHONE_DISPLAY = "(479) 713-9565";
const PHONE_TEL = "4797139565";

export default function DreamBuiltPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        {/* Logo + Heading */}
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="rounded-2xl bg-neutral-900/80 px-10 py-8 ring-1 ring-white/10 shadow-xl">
            <Image
              // IMPORTANT: this path must match your real file:
              // public/images/logos/dreambuilt.png
              src="/images/logos/dreambuilt.png"
              alt="Dream Built Homes logo"
              width={360}
              height={360}
              className="h-40 w-auto md:h-52 object-contain"
              priority
            />
          </div>

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
        <div className="mt-10 space-y-4 text-sm leading-relaxed text-neutral-200 md:text-base text-center max-w-2xl mx-auto">
          <p>
            Dream Built Homes offers thoughtfully designed new-construction
            homes in <span className="font-semibold">Bella Vista</span> and{" "}
            <span className="font-semibold">Tontitown</span>.
          </p>
          <p>
            Most homes typically range from{" "}
            <span className="font-semibold">1,900–2,500 sq ft</span>, with
            layouts focused on comfortable living, practical storage, and
            modern finishes.
          </p>
          <p>
            For current floorplans, available homes, and upcoming lots,
            reach out to Good Neighbor Realty and we&apos;ll walk you through
            every option step by step.
          </p>
        </div>

        {/* Contact box */}
        <div className="mt-12 rounded-2xl bg-neutral-900/90 px-6 py-6 ring-1 ring-white/10 shadow-lg max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold text-center">
            Interested in a Dream Built home?
          </h2>

          <p className="mt-3 text-sm text-neutral-300 text-center">
            Contact Good Neighbor Realty for details on available homes,
            pricing, and build timelines in Bella Vista and Tontitown.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
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