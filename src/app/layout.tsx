import "./globals.css";
import { Navbar } from "../components/Navbar";

export const metadata = {
  title: "Good Neighbor NWA",
  description: "Brokerage site with IDX & VOW scaffolding",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900">
        <Navbar />
        <main className="mx-auto max-w-6xl p-6">{children}</main>
      </body>
    </html>
  );
}
