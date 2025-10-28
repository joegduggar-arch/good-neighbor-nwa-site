import { cookies } from "next/headers";
import { TermsModal } from "../../components/TermsModal";
import { mockListings } from "../../lib/data";
import { ListingCard } from "../../components/ListingCard";
import { Disclaimer } from "../../components/Disclaimer";
import { RegisterForm } from "../../components/RegisterForm";

export default function PortalPage() {
  const cookieStore = cookies();
  const loggedIn = cookieStore.get("gnr_logged_in")?.value === "1";
  const accepted = cookieStore.get("gnr_terms")?.value === "1";

  // Not logged in → show Register + fallback Login
  if (!loggedIn) {
    return (
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <RegisterForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Already have an account?</h2>
          <form action="/api/login" method="post" className="space-y-3 max-w-sm">
            <input name="email" type="email" placeholder="Email" required className="w-full rounded border px-3 py-2" />
            <button className="rounded bg-brand-gold px-4 py-2 font-medium text-brand-black hover:bg-brand-goldDark" type="submit">Log in</button>
          </form>
          <p className="text-gray-600 text-sm mt-3">
            Access to enhanced listing fields is provided under the NABOR VOW rules after registration and acceptance of terms.
          </p>
        </div>
      </div>
    );
  }

  if (!accepted) return <TermsModal />;

  const listings = mockListings(true); // swap to VOW data once credentials are added
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Client Portal (VOW)</h1>
      <p className="mb-4 text-gray-700">
        You have accepted the Registrant Terms of Use. Additional VOW fields may be visible per MLS permissions.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {listings.map(l => <ListingCard key={l.id} listing={l} />)}
      </div>
      <div className="mt-6"><Disclaimer /></div>
      <form action="/api/logout" method="post" className="mt-6">
        <button className="rounded border px-3 py-2" type="submit">Log out</button>
      </form>
    </div>
  );
}
