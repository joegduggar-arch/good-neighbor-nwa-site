"use client";

import { useEffect, useRef } from "react";

interface LegacyIdxWidgetProps {
  /** A unique key just so we don't double-insert the script */
  widgetKey: string;
  /** The full src URL from the IDX <script> (the value inside src="...") */
  scriptSrc: string;
}

export default function LegacyIdxWidget({
  widgetKey,
  scriptSrc,
}: LegacyIdxWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // If we've already injected this widget, don't do it again
    const existing = containerRef.current.querySelector(
      `script[data-idx-widget="${widgetKey}"]`
    );
    if (existing) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.src = scriptSrc;
    script.async = true;
    script.setAttribute("data-idx-widget", widgetKey);

    // Clear any placeholder content and inject the script
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [widgetKey, scriptSrc]);

  return (
    <div
      ref={containerRef}
      className="rounded-3xl bg-neutral-900/80 p-6 shadow-xl shadow-black/50"
    >
      <p className="text-sm text-neutral-400">
        Loading listings…
      </p>
    </div>
  );
}