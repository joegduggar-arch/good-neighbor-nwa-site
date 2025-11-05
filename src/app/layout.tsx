import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // or "@/components/NavbarClient" if that's what you use

export const metadata: Metadata = {
  title: "Good Neighbor Realty",
  description:
    "A high-end, photo-rich real estate experience serving Northwest Arkansas.",
  metadataBase: new URL("https://goodneighborrealty.com"), // update if needed
  openGraph: {
    title: "Good Neighbor Realty",
    description:
      "Homes, land, and new construction across Northwest Arkansas.",
    type: "website",
    url: "https://goodneighborrealty.com",
    images: ["/images/placeholders/foyer.jpg"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {/* Site-wide nav */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>

        {/* (Optional) Footer goes here later */}
      </body>
    </html>
  );
}
