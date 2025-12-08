// src/components/AgentCard.tsx

import Link from "next/link";
import Image from "next/image";
import type { Agent } from "@/lib/agents";

type Props = {
  agent: Agent;
};

export default function AgentCard({ agent }: Props) {
  const telHref = agent.phone
    ? `tel:${agent.phone.replace(/[^\d]/g, "")}`
    : undefined;

  return (
    <Link
      href={`/agents/${agent.slug}`}
      className="flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-yellow-400"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-neutral-700">
          <Image
            src={agent.photo}
            alt={agent.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-neutral-50">
            {agent.name}
          </h3>
          <p className="text-sm text-yellow-300">{agent.title}</p>

          {agent.phone && (
            <p className="mt-1 text-sm text-neutral-300">
              {telHref ? (
                <a
                  href={telHref}
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-yellow-300 underline-offset-2 hover:underline"
                >
                  {agent.phone}
                </a>
              ) : (
                agent.phone
              )}
            </p>
          )}

          {agent.email && (
            <p className="text-sm text-neutral-300">
              <a
                href={`mailto:${agent.email}`}
                onClick={(e) => e.stopPropagation()}
                className="hover:text-yellow-300 underline-offset-2 hover:underline"
              >
                {agent.email}
              </a>
            </p>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-neutral-300">
        {agent.bio}
      </p>

      <span className="text-xs font-semibold text-yellow-300">
        View full profile →
      </span>
    </Link>
  );
}
