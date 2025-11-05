import Link from "next/link";

export type Listing = {
  slug: string;
  title: string;
  location: string;
  plan: string;
  beds: string;
  status?: "building" | "listed" | "soon" | "sold" | "under-contract";
  image: string;
};

export default function ListingCard({ listing }: { listing: Listing }) {
  const badge =
    listing.status === "listed" ? "bg-emerald-600"
    : listing.status === "soon" ? "bg-amber-600"
    : listing.status === "building" ? "bg-blue-600"
    : listing.status === "under-contract" ? "bg-fuchsia-600"
    : listing.status === "sold" ? "bg-neutral-600"
    : "bg-neutral-800";

  return (
    <Link
      href={`/homes/${listing.slug}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1"
    >
      <div className="relative h-48">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium text-white ${badge}`}>
          {(listing.status || "available").replace("-", " ")}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{listing.title}</h3>
        <p className="text-sm text-neutral-600">
          {listing.location} · {listing.plan} · {listing.beds}
        </p>
      </div>
    </Link>
  );
}
