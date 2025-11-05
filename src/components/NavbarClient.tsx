"use client";
import { useEffect, useState } from "react";

export default function NavbarClient() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`sticky top-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 transition-shadow ${scrolled ? "shadow-lg" : "shadow-none"}`}>
      {/* your existing Navbar contents here (logo prominent left, phone icon right, etc.) */}
    </div>
  );
}
