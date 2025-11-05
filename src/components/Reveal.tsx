import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        opacity-0 translate-y-4
        motion-safe:transition-all motion-safe:duration-700
        ${inView ? "opacity-100 translate-y-0" : ""}
      `}
    >
      {children}
    </div>
  );
}
