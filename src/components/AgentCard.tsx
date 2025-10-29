import Image from "next/image";
import { useState } from "react";
import type { Agent } from "../lib/agents";

function photoPath(id: string) {
  return `/agents/${id}.jpg`;
}

export function AgentCard({ agent }: { agent: Agent }) {
  const [imgOk, setImgOk] = useState(true);
  const imgSrc = photoPath(agent.id);

  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-sm">
      <div className="relative h-64 w-full bg-zinc-800">
        {imgOk ? (
          <Image
            src={imgSrc}
            alt={`${agent.name} — ${agent.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            onError={() => setImgOk(false)}
            priority={false}
          />
        ) : (
          // Graceful placeholder if file not present yet
          <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400">
            <div className="mb-2 text-sm">Photo coming soon</div>
            <div className="h-16 w-16 rounded-full border border-zinc-700" />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
        <p className="text-sm text-[#D4AF37]">{agent.title}</p>
        {agent.bio && <p className="mt-3 text-sm text-zinc-200">{agent.bio}</p>}

        <div className="mt-4 flex flex-wrap gap-2">
          {agent.phone && (
            <a
              href={`tel:${agent.phone.replace(/\D/g, "")}`}
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
          {agent.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              className="rounded-lg border border-zinc-700 px-3 py-1 text-sm text-zinc-200 hover:bg-zinc-800"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
