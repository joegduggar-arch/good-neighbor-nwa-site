// Mock data so the UI renders before you plug in your RESO feed
type L = {
  id: string; address: string; city: string; price: number; beds: number; baths: number; sqft?: number; photoUrl?: string; listingBrokerage?: string; dom?: number;
};

export function mockListings(includeVowExtras = false): L[] {
  const base: L[] = [
    { id: "1", address: "36 Melbourne Dr", city: "Bella Vista, AR", price: 389000, beds: 4, baths: 3, sqft: 2450, photoUrl: "", listingBrokerage: "Good Neighbor Realty" },
    { id: "2", address: "17720 Hook Monument Rd", city: "Siloam Springs, AR", price: 275000, beds: 3, baths: 2, sqft: 1600, photoUrl: "", listingBrokerage: "Good Neighbor Realty" },
    { id: "3", address: "123 Spanker Creek Ridge", city: "Bentonville, AR", price: 525000, beds: 4, baths: 3, sqft: 2850, photoUrl: "", listingBrokerage: "Example Brokerage" }
  ];
  if (includeVowExtras) {
    return base.map(b => ({ ...b, dom: Math.floor(Math.random() * 60) }));
  }
  return base;
}
