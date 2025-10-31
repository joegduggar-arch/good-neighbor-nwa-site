import Image from "next/image";
import Link from "next/link";
// ⬇️ use relative path instead of "@/lib/agents"
import { agents } from "../../lib/agents";

export const metadata = {
  title: "Our Agents | Good Neighbor Realty",
  description:
    "Meet the Good Neighbor Realty team — local experts serving communities throughout Northwest Arkansas.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-2 text-4xl font-semibold text-white drop-shadow-lg">
          Our Agents
        </h1>
        <p className="mb-10 max-w-2xl mx-auto text-brand-gold/90 drop-shadow-md text-lg">
          Local experts serving communities throughout Northwest Arkansas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-zinc-900 border border-brand-gold/30 rounded-xl overflow-hidden shadow-lg hover:shadow-brand-gold/40 transition w-full max-w-sm"
            >
              <Image
                src={agent.image}
                alt={agent.name}
                width={400}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-lg font-semibold text-white">
                  {agent.name}
                </h2>
                <p className="text-sm text-brand-gold font-medium">
                  {agent.title}
                </p>
                {agent.story && (
                  <p className="mt-3 text-sm text-zinc-300 line-clamp-3">
                    {agent.story}
                  </p>
                )}
                <div className="mt-4 flex justify-center gap-3">
                  {agent.phone && (
                    <a
                      href={`tel:${agent.phone}`}
                      className="border border-brand-gold text-brand-gold rounded-md px-3 py-1 text-sm hover:bg-brand-gold hover:text-brand-black transition"
                    >
                      Call
                    </a>
                  )}
                  {agent.email && (
                    <a
                      href={`mailto:${agent.email}`}
                      className="border border-brand-gold text-brand-gold rounded-md px-3 py-1 text-sm hover:bg-brand-gold hover:text-brand-black transition"
                    >
                      Email
                    </a>
                  )}
                  <Link
                    href={`/agents/${agent.id}`}
                    className="border border-brand-gold text-brand-gold rounded-md px-3 py-1 text-sm hover:bg-brand-gold hover:text-brand-black transition"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
