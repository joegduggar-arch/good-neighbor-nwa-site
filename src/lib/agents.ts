export type Agent = {
  id: string;   // used for /public/agents/<id>.jpg
  name: string;
  title: "Principal Broker" | "Real Estate Agent" | "Commercial Specialist";
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
    bio: "Principal Broker of Good Neighbor Realty, providing exceptional service and local market expertise across Northwest Arkansas.",
    links: [
      { label: "Call", href: "tel:+14797139565" },
      { label: "Email", href: "mailto:JoegDuggar@gmail.com" },
    ],
  },
  {
    id: "christy-rainier",
    name: "Christy Rainier",
    title: "Real Estate Agent",
    phone: "(321) 961-8263",
    email: "christyrainier@gmail.com",
    bio: "Christy serves clients throughout Northwest Arkansas, helping buyers and sellers navigate the market with care and professionalism.",
    links: [
      { label: "Call", href: "tel:+13219618263" },
      { label: "Email", href: "mailto:christyrainier@gmail.com" },
    ],
  },
  {
    id: "marcus-day",
    name: "Marcus Day",
    title: "Real Estate Agent",
    phone: "(479) 877-5327",
    email: "marcusdfe@gmail.com",
    bio: "Marcus serves clients across all of Northwest Arkansas with a focus on residential listings and helping families find their perfect home.",
    links: [
      { label: "Call", href: "tel:+14798775327" },
      { label: "Email", href: "mailto:marcusdfe@gmail.com" },
    ],
  },
  {
    id: "jim-bob-duggar",
    name: "Jim Bob Duggar",
    title: "Commercial Specialist",
    bio: "Jim Bob Duggar specializes in commercial real estate and investment properties across Northwest Arkansas. For commercial inquiries, please contact our office at (479) 713-9565.",
    links: [
      { label: "Office", href: "tel:+14797139565" },
    ],
  },
];
