type Listing = {
  id: string;
  address: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqft?: number;
  photoUrl?: string;
  listingBrokerage?: string;
  dom?: number; // extra (VOW)
};

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-gray-200">
        {listing.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={listing.photoUrl} alt={listing.address} className="h-full w-full object-cover" />
        ) : null}
      </div>
      <div className="space-y-1 p-4">
        <div className="text-sm text-gray-500">{listing.address}, {listing.city}</div>
        <div className="text-lg font-semibold">${listing.price.toLocaleString()}</div>
        <div className="text-sm text-gray-700">{listing.beds} bd • {listing.baths} ba{listing.sqft ? ` • ${listing.sqft.toLocaleString()} sqft` : ""}</div>
        {typeof listing.dom === "number" && (
          <div className="text-xs text-gray-500">Days on Market: {listing.dom}</div>
        )}
        {listing.listingBrokerage && (
          <div className="pt-2 text-xs text-gray-500">Courtesy of {listing.listingBrokerage}</div>
        )}
      </div>
    </div>
  );
}
