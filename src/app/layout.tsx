import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar"; // <-- default import (match file case)

export const metadata: Metadata = {
  title: "Good Neighbor NWA",
  description: "Good Neighbor Realty • Northwest Arkansas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900">
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
      </body>
    </html>
  );
}
