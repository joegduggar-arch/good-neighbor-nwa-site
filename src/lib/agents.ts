export interface Agent {
  id: string;
  name: string;
  title: string;
  description: string;
  phone?: string;
  email?: string;
  image: string;
  story?: string; // NEW: long-form story for each agent
}

export const agents: Agent[] = [
  {
    id: "joe-duggar",
    name: "Joe Duggar",
    title: "Principal Broker",
    description:
      "Joe is the Principal Broker for Good Neighbor Realty and specializes in helping buyers and sellers across all of Northwest Arkansas.",
    phone: "(479) 713-9565",
    email: "joegduggar@gmail.com",
    image: "/agents/joe-duggar.jpg",
    story:
      "Joe carries forward a family tradition in Northwest Arkansas real estate. He believes every transaction is a chance to serve people well—combining clear communication, local insight, and steady guidance from contract to close.",
  },
  {
    id: "christy-rainier",
    name: "Christy Rainier",
    title: "Real Estate Agent",
    description:
      "Christy serves clients throughout Northwest Arkansas with a focus on delivering personalized, detail-oriented service for every transaction.",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    image: "/agents/christy-rainier.jpg",
    story:
      "Christy is known for calm, thorough representation. She loves helping clients explore neighborhoods, evaluate homes with confidence, and move forward knowing the details are handled.",
  },
  {
    id: "marcus-day",
    name: "Marcus Day",
    title: "Real Estate Agent",
    description:
      "Marcus serves all of Northwest Arkansas, providing thoughtful and knowledgeable guidance to both buyers and sellers.",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    image: "/agents/marcus-day.jpg",
    story:
      "Marcus brings a practical, solutions-first mindset. From first showings to final walkthroughs, he focuses on clear expectations and smooth outcomes.",
  },
];
