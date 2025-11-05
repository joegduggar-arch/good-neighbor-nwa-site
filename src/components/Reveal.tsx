"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

/**
 * Lightweight reveal-on-scroll (no framer-motion).
 * Fades & lifts content once as it enters the viewport.
 */
type Props = PropsWithChildren<{ delay?: number; className?: string }>;

export default function Reveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.disconnect(); // reveal once
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "opacity .5s ease, transform .5s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
