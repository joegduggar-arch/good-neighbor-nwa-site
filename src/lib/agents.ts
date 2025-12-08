// src/lib/agents.ts

export type Agent = {
  slug: string;
  name: string;
  title: string;
  photo: string;
  phone?: string;
  email?: string;
  bio: string;
};

export const AGENTS: Agent[] = [
  {
    slug: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker / Owner",
    photo: "/images/agents/joe.jpg",
    phone: "(479) 713-9565",
    email: "joe@goodneighbornwa.com",
    bio: "Joe is a lifelong Northwest Arkansas local and the principal broker of Good Neighbor Realty, helping clients with new construction and forever homes across Bella Vista, Bentonville, and beyond."
  },
  {
    slug: "marcus-agent",
    name: "Marcus Example",
    title: "Realtor®",
    photo: "/images/agents/marcus.jpg",
    phone: "(479) 555-1234",
    email: "marcus@goodneighbornwa.com",
    bio: "Marcus focuses on helping buyers and sellers navigate the fast-moving NWA market with clear communication and a calm, steady approach."
  },
  {
    slug: "christy-agent",
    name: "Christy Example",
    title: "Realtor®",
    photo: "/images/agents/christy.jpg",
    phone: "(479) 555-5678",
    email: "christy@goodneighbornwa.com",
    bio: "Christy loves matching clients with homes that fit their lifestyle, from first-time buyers to families looking for more space."
  }
];

export function getAgents(): Agent[] {
  return AGENTS;
}

export function getAgent(slug: string): Agent | undefined {
  return AGENTS.find((a) => a.slug === slug);
}
