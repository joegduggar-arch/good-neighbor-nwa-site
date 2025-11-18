import Link from "next/link";
import Image from "next/image";
import HeroMovingImage from "@/components/HeroMovingImage";

// Tell Next/Vercel to render this page dynamically instead of
// trying to statically generate it (which is what’s timing out).
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <HeroMovingImage />

      {/* BOTTOM BAR – Builders + Contact */}
      <section className="border-t border-neutral-800 bg-neutral-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
          {/* Left: Heading / description */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold md:text-3xl">Our Partner Builders</h2>
            <p className="mt-3 text-sm text-neutral-300 md:text-base">
              Milagro Designs and Dream Built Custom Homes bring thoughtful new
              construction options to Bella Vista and greater Northwest Arkansas.
            </p>
          </div>

          {/* Middle: Builder cards */}
          <div className="flex flex-1 flex-col gap-4 md:flex-row md:justify-center">
            <Link
              href="/builders/milagro-designs"
              className="group flex flex-1 items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/70 p-3 hover:border-yellow-400 hover:bg-neutral-900 transition"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-md bg-neutral-800">
                <Image
                  src="/builders/milagro-thumb.jpg" // put an image here or change this path
                  alt="Milagro Designs"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Milagro Designs</div>
                <div className="text-xs text-neutral-300">
                  Custom and spec homes tailored for Bella Vista living.
                </div>
              </div>
            </Link>

            <Link
              href="/builders/dream-built-homes"
              className="group flex flex-1 items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/70 p-3 hover:border-yellow-400 hover:bg-neutral-900 transition"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-md bg-neutral-800">
                <Image
                  src="/builders/dreambuilt-thumb.jpg" // put an image here or change this path
                  alt="Dream Built Custom Homes"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Dream Built Custom Homes</div>
                <div className="text-xs text-neutral-300">
                  Durable, well-planned builds across Bella Vista and NWA.
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Contact link */}
          <div className="md:w-1/4">
            <p className="mb-3 text-sm text-neutral-300">
              Ready to talk through a build or purchase? Reach out and let’s see
              what fits your family best.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-300 hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}