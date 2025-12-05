"use client";

import { useEffect, useRef } from "react";

type WidgetKind = "showcase" | "slideshow" | "map";

interface IdxLegacyWidgetProps {
  widgetId: number | string;
  kind: WidgetKind;
  className?: string;
}

/**
 * Loads a *legacy* IDX Broker widget (the ones whose embed code looks like
 *  <script src=".../idx/customshowcasejs.php?widgetid=10047"></script>)
 *
 * We append the script into a div so it renders in the right place.
 */
export default function IdxLegacyWidget({
  widgetId,
  kind,
  className,
}: IdxLegacyWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Adjust this if your IDX subdomain ever changes
  const baseUrl = "https://goodneighbornwa.idxbroker.com";

  const scriptSrc =
    kind === "showcase"
      ? `${baseUrl}/idx/customshowcasejs.php?widgetid=${widgetId}`
      : kind === "slideshow"
      ? `${baseUrl}/idx/slideshowjs.php?widgetid=${widgetId}`
      : `${baseUrl}/idx/mapsearchjs.php?widgetid=${widgetId}`;

  useEffect(() => {
    if (!containerRef.current) return;

    // Avoid loading the same script twice into this container
    if (containerRef.current.dataset.loaded === "true") return;
    containerRef.current.dataset.loaded = "true";

    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = scriptSrc;

    containerRef.current.appendChild(script);

    return () => {
      // Optional: cleanup – remove the script & generated HTML on unmount
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";
      containerRef.current.dataset.loaded = "false";
    };
  }, [scriptSrc]);

  return <div ref={containerRef} className={className} />;
}