import { cookies } from "next/headers";
import { RegisterForm } from "../../components/RegisterForm";
// (keep your other imports)

export default function PortalPage() {
  const cookieStore = cookies();
  const loggedIn = cookieStore.get("gnr_logged_in")?.value === "1";
  const accepted  = cookieStore.get("gnr_terms")?.value === "1";

  if (!loggedIn) {
    return (
      <div className="grid gap-10 md:grid-cols-2">
        <div><RegisterForm /></div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Already have an account?</h2>
          <form action="/api/login" method="post" className="space-y-3 max-w-sm">
            <input name="email" type="email" placeholder="Email" required className="w-full rounded border px-3 py-2" />
            <button className="rounded bg-[#D4AF37] px-4 py-2 font-medium text-black hover:opacity-90" type="submit">Log in</button>
          </form>
          <p className="text-gray-600 text-sm mt-3">
            Enhanced listing fields are visible after registration and acceptance of terms (NABOR VOW rules).
          </p>
        </div>
      </div>
    );
  }

  if (!accepted) {
    // keep your TermsModal flow here if you already have it
    // return <TermsModal />;
  }

  // ...existing logged-in portal content...
}
