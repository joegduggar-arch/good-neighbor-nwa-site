"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Agent } from "../lib/agents";

type Props = { agent: Agent };

export function AgentCard({ agent }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/agents/${agent.id}`}
      className="block overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${agent.name} — View profile`}
    >
      {/* Photo (no crop) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl bg-zinc-800">
        <Image
          src={agent.image}
          alt=""
          fill
          className="object-cover blur-lg scale-110 opacity-40"
          aria-hidden
        />
        <Image
          src={agent.image}
          alt={`${agent.name} — ${agent.title}`}
          fill
          className="object-contain"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          priority={false}
        />
      </div>

      {/* Info */}
      <div className="p-5 text-center">
        <h2 className="text-lg font-semibold text-white">{agent.name}</h2>
        <p className="text-sm text-brand-gold font-medium">{agent.title}</p>
        <p className="mt-2 text-sm text-zinc-300">{agent.description}</p>

        <div className="mt-4 flex justify-center gap-3">
          {agent.phone && (
            <a
              href={`tel:${agent.phone}`}
              className="rounded-md border border-brand-gold px-3 py-1 text-brand-gold hover:bg-brand-gold hover:text-black transition"
              onClick={(e) => e.stopPropagation()}
            >
              Call
            </a>
          )}
          {agent.email && (
            <a
              href={`mailto:${agent.email}`}
              className="rounded-md border border-brand-gold px-3 py-1 text-brand-gold hover:bg-brand-gold hover:text-black transition"
              onClick={(e) => e.stopPropagation()}
            >
              Email
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}
