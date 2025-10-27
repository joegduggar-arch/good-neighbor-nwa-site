export function TermsModal() {
  return (
    <div className="max-w-2xl space-y-4">
      <h2 className="text-2xl font-semibold">Registrant Terms of Use – Client Portal</h2>
      <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-gray-700">
        <li>You represent you are a client or prospective client of <strong>Good Neighbor Realty (Duggar Realty LLC)</strong> with a bona fide interest in real property.</li>
        <li>The listing information is supplied by the <strong>Northwest Arkansas Board of REALTORS® MLS</strong> and is deemed reliable but not guaranteed accurate.</li>
        <li>The materials are for your <strong>personal, non‑commercial</strong> use only and may not be copied or redistributed except in connection with considering an individual property.</li>
        <li>Your use of this portal constitutes a broker‑client relationship with Good Neighbor Realty for purposes of further services.</li>
        <li>Your access may be audited for compliance by the MLS and the brokerage.</li>
      </ol>
      <form action="/api/accept-terms" method="post" className="pt-2">
        <button className="rounded bg-brand-gold px-4 py-2 font-medium text-brand-black hover:bg-brand-goldDark" type="submit">I Accept</button>
      </form>
      <form action="/api/logout" method="post">
        <button className="mt-2 rounded border px-3 py-2" type="submit">Cancel</button>
      </form>
      <p className="text-xs text-gray-500">Adjust wording to match NABOR MLS requirements and your legal counsel.</p>
    </div>
  );
}
