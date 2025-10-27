import { mockListings } from "../../lib/data";
import { ListingCard } from "../../components/ListingCard";
import { Disclaimer } from "../../components/Disclaimer";

export default function SearchPage() {
  const listings = mockListings();
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">IDX Search (Public)</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {listings.map(l => <ListingCard key={l.id} listing={l} />)}
      </div>
      <div className="mt-6">
        <Disclaimer />
      </div>
    </div>
  );
}
