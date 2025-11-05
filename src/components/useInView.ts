import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(node); // reveal once
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15, ...options }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}
