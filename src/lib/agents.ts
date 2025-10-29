export type Agent = {
  id: string;   // used for image filename in /public/agents/<id>.jpg
  name: string;
  title: "Principal Broker" | "Real Estate Agent";
  phone?: string;
  email?: string;
  bio?: string;
  links?: { label: string; href: string }[];
};

export const agents: Agent[] = [
  {
    id: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker",
    phone: "(479) 713-9565",
    email: "JoegDuggar@gmail.com",
    bio: "Local market specialist serving Northwest Arkansas with a client-first approach.",
    links: [
      { label: "Call", href: "tel:+14797139565" },
      { label: "Email", href: "mailto:JoegDuggar@gmail.com" },
    ],
  },
  {
    id: "christy-rainier",
    name: "Christy Rainier",
    title: "Real Estate Agent",
    email: "christy@example.com",
    bio: "Bella Vista & Bentonville focus. Patient, detail-oriented guidance.",
  },
  {
    id: "marcus-day",
    name: "Marcus Day",
    title: "Real Estate Agent",
    email: "marcus@example.com",
    bio: "Siloam Springs & NWA corridor. Showings that fit your schedule.",
  },
];
