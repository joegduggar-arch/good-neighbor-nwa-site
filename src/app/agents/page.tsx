import type { Metadata } from "next";
import { agents } from "../../lib/agents";
import { AgentCard } from "../../components/AgentCard";

export const metadata: Metadata = {
  title: "Our Agents | Good Neighbor Realty",
  description: "Meet the Good Neighbor Realty team serving Northwest Arkansas.",
};

export default function AgentsPage() {
  // Principal Broker first, then residential agents, then commercial last
  const sorted = [...agents].sort((a, b) => {
    const order = (t: string) =>
      t === "Principal Broker" ? 0 :
      t === "Real Estate Agent" ? 1 :
      2; // Commercial Specialist
    return order(a.title) - order(b.title);
  });

  return (
    <div>
      <h1 className="mb-2 text-3xl font-semibold text-white">Our Agents</h1>
      <p className="mb-8 max-w-2xl text-zinc-300">
        Local experts serving communities throughout Northwest Arkansas.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((a) => (
          <AgentCard key={a.id} agent={a} />
        ))}
      </div>
    </div>
  );
}
