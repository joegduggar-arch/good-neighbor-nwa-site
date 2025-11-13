// Swanson / Dreambuilt builder landing page
// Replace the contents of your Swanson builder page with this file.

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Swanson Properties (Dreambuilt Custom Homes) | Good Neighbor Realty",
  description:
    "Learn about Swanson Properties / Dreambuilt Custom Homes. For current floorplans and availability, please contact Joe Duggar directly.",
};

export default function SwansonBuilderPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:px-6 md:py-16">
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 rounded-full bg-neutral-800 p-2">
              {/* Use your Swanson logo in /public if you have it */}
              <Image
                src="/builders/swanson-logo.png"
                alt="Swanson Properties / Dreambuilt Custom Homes"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold md:text-2xl">
                Swanson Properties &mdash; Dreambuilt Custom Homes
              </h1>
              <p className="text-sm text-neutral-400">
                Represented exclusively by Good Neighbor Realty
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 text-sm md:items-end">
            <span className="text-neutral-400">Questions?</span>
            <a
              href="tel:+14797139565"
              className="font-mono text-base font-semibold text-neutral-100 underline-offset-4 hover:underline"
            >
              (479) 713-9565
            </a>
            <a
              href="mailto:joegduggar@gmail.com"
              className="text-neutral-300 underline-offset-4 hover:underline"
            >
              joegduggar@gmail.com
            </a>
          </div>
        </header>

        {/* Main content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Text column */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-lg font-semibold">
              Floorplans & availability by request
            </h2>
            <p className="text-sm leading-relaxed text-neutral-300">
              Swanson Properties / Dreambuilt Custom Homes builds a variety of
              thoughtfully designed homes in Northwest Arkansas. Because each
              house is tailored to the lot and current selections, we don't list
              their floorplans and options publicly on the website.
            </p>
            <p className="text-sm leading-relaxed text-neutral-300">
              If you&apos;re an agent or buyer interested in their current or
              upcoming homes, please reach out to Joe directly. He can provide:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-300">
              <li>Current and upcoming Swanson / Dreambuilt inventory</li>
              <li>Sample floorplans and elevations that fit your needs</li>
              <li>Lot locations, pricing, and build timelines</li>
              <li>
                Details on finishes, selections, and any available buyer
                upgrades
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-neutral-300">
              This helps keep information accurate and up-to-date, and lets us
              match you with the homes that best fit your clients or family.
            </p>
          </div>

          {/* Contact card */}
          <aside className="md:col-span-1">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 shadow-lg">
              <h3 className="mb-2 text-sm font-semibold">
                Need Swanson / Dreambuilt info?
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-neutral-300">
                Contact Joe for full details on available homes, upcoming
                builds, and floorplan options.
              </p>

              <div className="space-y-2 text-sm">
                <a
                  href="tel:+14797139565"
                  className="flex items-center justify-center rounded-lg bg-neutral-100 px-3 py-2 font-semibold text-neutral-900 hover:bg-white"
                >
                  Call Joe
                </a>
                <a
                  href="mailto:joegduggar@gmail.com?subject=Swanson%20Properties%20Inquiry"
                  className="flex items-center justify-center rounded-lg border border-neutral-700 px-3 py-2 text-neutral-100 hover:bg-neutral-800"
                >
                  Email about Swanson homes
                </a>
                <Link
                  href="/contact"
                  className="block text-center text-xs text-neutral-400 underline-offset-4 hover:underline"
                >
                  Or use the contact form
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Note at bottom */}
        <p className="text-xs text-neutral-500">
          Note: Floorplans, finishes, and specifications are subject to change
          at the builder&apos;s discretion and may vary from home to home.
          Please confirm details with Joe prior to making any decisions.
        </p>
      </section>
    </main>
  );
}