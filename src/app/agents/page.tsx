// src/app/agents/page.tsx

import type { Metadata } from "next";
import AgentCard from "@/components/AgentCard";
import { getAgents } from "@/lib/agents";

export const metadata: Metadata = {
  title: "Our Agents | Good Neighbor Realty",
  description:
    "Meet the agents at Good Neighbor Realty serving Northwest Arkansas."
};

export default function AgentsPage() {
  const agents = getAgents();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Our Agents
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-300 md:text-base">
            Meet the Good Neighbor Realty team serving Bella Vista, Bentonville,
            and the greater Northwest Arkansas area.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {agents.map((agent) => (
            <AgentCard key={agent.slug} agent={agent} />
          ))}
        </div>
      </section>
    </main>
  );
}
