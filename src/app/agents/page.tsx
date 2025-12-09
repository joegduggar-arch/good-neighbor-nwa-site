// src/app/agents/page.tsx

import Image from "next/image";
import Link from "next/link";

type AgentCard = {
  slug: string;
  name: string;
  roleLine: string;
  phone: string;
  email: string;
  photo: string;
  blurb: string;
};

const AGENTS: AgentCard[] = [
  {
    slug: "joe-duggar",
    name: "Joe Duggar",
    roleLine: "Principal Broker, Good Neighbor Realty",
    phone: "(479) 713-9565",
    email: "joegduggar@gmail.com",
    photo: "/agent/joe.jpg",
    blurb:
      "Real estate has been part of my life for as long as I can remember. I grew up surrounded by it—watching my family serve neighbors across Northwest Arkansas and learning what it means to guide people through one of the biggest decisions of their lives.",
  },
  {
    slug: "christy-rainier",
    name: "Christy Rainier",
    roleLine: "Sales Associate, Good Neighbor Realty",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    photo: "/agent/christy.jpg",
    blurb:
      "Christy is a devoted wife and mother whose heart for people shines through everything she does. With a background rooted in the building industry, she loves helping families navigate new construction and residential sales with care and confidence.",
  },
  {
    slug: "marcus-day",
    name: "Marcus Day",
    roleLine: "Sales Associate, Good Neighbor Realty",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    photo: "/agent/marcus.jpg",
    blurb:
      "Marcus brings a genuine heart for people and a hands-on understanding of what makes a home truly special. His construction and design experience gives clients an extra layer of insight as they search for the right place to call home.",
  },
];

export const metadata = {
  title: "Our Agents | Good Neighbor Realty",
  description:
    "Meet the Good Neighbor Realty team serving Bella Vista, Bentonville, Rogers, Springdale, Fayetteville, Prairie Grove, and the surrounding areas.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        {/* Heading */}
        <header className="text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Our Agents</h1>
          <p className="mt-4 text-sm text-yellow-300 md:text-base">
            Local experts serving communities throughout Northwest Arkansas.
          </p>
        </header>

        {/* Agent Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {AGENTS.map((agent) => (
            <article
              key={agent.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 shadow-[0_18px_45px_rgba(0,0,0,0.75)]"
            >
              {/* Image wrapper with fixed aspect ratio */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={agent.photo}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <h2 className="text-lg font-semibold">{agent.name}</h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-yellow-300">
                  {agent.roleLine}
                </p>

                <p className="mt-3 line-clamp-4 text-sm text-neutral-300">
                  {agent.blurb}
                </p>

                {/* Buttons */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={`tel:${agent.phone.replace(/[^\d]/g, "")}`}
                    className="rounded-full border border-yellow-500 px-4 py-1.5 text-xs font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black"
                  >
                    Call
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="rounded-full border border-yellow-500 px-4 py-1.5 text-xs font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-black"
                  >
                    Email
                  </a>
                  <Link
                    href={`/agents/${agent.slug}`}
                    className="ml-auto rounded-full bg-yellow-400 px-4 py-1.5 text-xs font-semibold text-black hover:bg-yellow-300"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
