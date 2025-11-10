// src/components/NavbarClient.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import type { Brand, BuilderMenuItem, TopLink } from "./Navbar";

type Props = {
  phone: string;
  brand: Brand;
  builders: BuilderMenuItem[];
  links: TopLink[];
};

export default function NavbarClient({ phone, brand, builders, links }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Left: Brand */}
        <Link href={brand.href} className="flex items-center gap-3">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={40}
            height={40}
            priority
          />
          <span className="text-base font