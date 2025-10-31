'use client';

import Image from "next/image";
import type { Agent } from "../lib/agents";

type Props = { agent: Agent };

export function AgentCard({ agent }: Props) {
  const telHref =
    agent.phone ? `tel:${agent.phone.replace(/\D/g, "")}` : undefined;

  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-sm">
      {/* Photo */}
      <div className="relative h-64 w-full bg-zinc-800">
        <Image
          src={agent.image}               // e.g. /agents/joe-duggar.jpg
          alt={`${agent.name} — ${agent.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
        <p className="text-sm text-[#D4AF37]">{agent.title}</p>

        {agent.description && (
          <p className="mt-3 text-sm text-zinc-200">{agent.description}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {telHref && (
            <a
              href={telHref}
              className="rounded-lg border border-[#D4AF37] px-3 py-1 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              Call
            </a>
          )}
          {agent.email && (
            <a
              href={`mailto:${agent.email}`}
              className="rounded-lg border border-[#D4AF37] px-3 py-1 text-sm text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
