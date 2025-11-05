"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

type Card = { title: string; desc: string; img: string; alt: string };

const items: Card[] = [
  {
    title: "Trails & Nature",
    desc: "Miles of greenways, rolling hills, and four-season scenery.",
    img: "/images/placeholders/nwa-outdoors.jpg",
    alt: "Northwest Arkansas fall hills and river"
  },
  {
    title: "Homes & Neighborhoods",
    desc: "Thoughtful new construction and established neighborhoods.",
    img: "/images/placeholders/nwa-homes.jpg",
    alt: "Bella Vista home exterior"
  },
  {
    title: "Lifestyle",
    desc: "Dining, events, and small-town charm across NWA.",
    img: "/images/placeholders/nwa-lifestyle.jpg",
    alt: "Back deck with wooded view"
  },
  {
    title: "Interiors & Craftsmanship",
    desc: "Warm finishes, bright kitchens, and inviting living spaces.",
    img: "/images/placeholders/nwa-interior.jpg",
    alt: "Open kitchen and living area"
  }
];

export default function NWAOverview({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Northwest Arkansas at a glance
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={80 + i * 70}>
            <motion.article
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="relative h-44 md:h-48">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 will-change-transform hover:scale-[1.03]"
                  priority={i < 2}
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={60}>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Bike-friendly", "Family-oriented", "Active arts", "Year-round events", "Lakes & parks", "Growing jobs"].map((tag) => (
            <span key={tag} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
