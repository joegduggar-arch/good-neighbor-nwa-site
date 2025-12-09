// src/app/agents/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";

type Agent = {
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
  fullBio: string;
};

const AGENTS: Agent[] = [
  {
    slug: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker / Owner",
    phone: "(479) 713-9565",
    email: "joegduggar@gmail.com",
    photo: "/images/agents/joe.jpg",
    fullBio:
      "Joe is a lifelong Northwest Arkansas local and principal broker of Good Neighbor Realty, serving Bella Vista, Bentonville, Rogers, and the surrounding communities. He loves helping clients navigate new construction, resale homes, and investment properties with clear communication and a steady, no-pressure approach.",
  },
  {
    slug: "christy-rainier",
    name: "Christy Rainier",
    title: "Realtor®",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    photo: "/images/agents/christy.jpg",
    fullBio:
      "Christy enjoys matching buyers with homes that fit their lifestyle, from first-time buyers to growing families. Her background in client service and attention to detail help make each step of the process feel organized and stress-reduced.",
  },
  {
    slug: "marcus-day",
    name: "Marcus Day",
    title: "Realtor®",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    photo: "/images/agents/marcus.jpg",
    fullBio:
      "Marcus helps buyers and sellers navigate the fast-moving Northwest Arkansas market with clear expectations and steady follow-through. He’s passionate about educating clients so they feel confident in each decision along the way.",
  },
];

type PageProps = {
  params: {
    slug: string;
  };
};

// Let Next know which static paths to generate
export function generateStaticParams() {
  return AGENTS.map((agent) => ({ slug: agent.slug }));
}

export default function AgentDetailPage({ params }: PageProps) {
  const agent = AGENTS.find((a) => a.slug === params.slug);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-neutral-700 bg-neutral-900">
              <Image
                src={agent.photo}
                alt={agent.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Our Agents
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              {agent.name}
            </h1>
            <p className="mt-1 text-sm text-neutral-300">{agent.title}</p>

            <div className="mt-4 space-y-1 text-sm text-neutral-300">
              <div>
                Phone:{" "}
                <a
                  href={`tel:${agent.phone.replace(/[^\d]/g, "")}`}
                  className="text-yellow-300 hover:text-yellow-200"
                >
                  {agent.phone}
                </a>
              </div>
              <div>
                Email:{" "}
                <a
                  href={`mailto:${agent.email}`}
                  className="text-yellow-300 hover:text-yellow-200"
                >
                  {agent.email}
                </a>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-neutral-200">
              {agent.fullBio}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
