// components/Card.tsx
import { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`
        group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5
        transition hover:shadow-lg ${className}
      `}
    >
      {children}
    </div>
  );
}
