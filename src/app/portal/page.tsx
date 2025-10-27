import { cookies } from "next/headers";
import { TermsModal } from "../../components/TermsModal";
import { mockListings } from "../../lib/data";
import { ListingCard } from "../../components/ListingCard";
import { Disclaimer } from "../../components/Disclaimer";

export default function PortalPage() {
  const cookieStore = cookies();
  const loggedIn = cookieStore.get("gnr_logged_in")?.value === "1";
  const accepted = cookieStore.get("gnr_terms")?.value === "1";

  if (!loggedIn) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Client Portal (VOW)</h1>
        <p>Please log in to access client-only data.</p>
        <form action="/api/login" method="post" className="space-y-3 max-w-sm">
          <input name="email" type="email" placeholder="Email" required className="w-full rounded border px-3 py-2" />
          <button className="rounded bg-brand-gold px-4 py-2 font-medium text-brand-black hover:bg-brand-goldDark" type="submit">Log in</button>
        </form>
        <p className="text-gray-600 text-sm">This demo uses a simple cookie login for illustration only.</p>
      </div>
    );
  }

  if (!accepted) {
    return <TermsModal />;
  }

  const listings = mockListings(true); // richer fields for VOW demo

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Client Portal (VOW)</h1>
      <p className="mb-4 text-gray-700">You have accepted the Registrant Terms of Use. Additional fields may be visible here per MLS permissions.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {listings.map(l => <ListingCard key={l.id} listing={l} />)}
      </div>
      <div className="mt-6">
        <Disclaimer />
      </div>
      <form action="/api/logout" method="post" className="mt-6">
        <button className="rounded border px-3 py-2" type="submit">Log out</button>
      </form>
    </div>
  );
}
