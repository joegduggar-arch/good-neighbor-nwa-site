"use client";

import { useEffect } from "react";

type IdxWidgetProps = {
  /** The numeric widget ID from IDX Broker, e.g. "122995" */
  widgetId: string;
  /** Optional: HTML id for the container div */
  containerId?: string;
};

export default function IdxWidget({ widgetId, containerId }: IdxWidgetProps) {
  const targetId = containerId ?? `idx-widget-${widgetId}`;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = document.getElementById(targetId);
    if (!container) return;

    // Clear any previous render in this container
    container.innerHTML = "";

    // If the script for this widget already exists, reuse it by cloning
    const existingScript = document.getElementById(
      `idxwidgetsrc-${widgetId}`
    ) as HTMLScriptElement | null;

    const script = document.createElement("script");
    script.charset = "UTF-8";
    script.type = "text/javascript";
    script.id = `idxwidgetsrc-${widgetId}-${Date.now()}`;
    script.src = `//goodneighbornwa.idxbroker.com/idx/widgets/${widgetId}`;

    container.appendChild(script);

    // We don't remove the script on unmount because IDX Broker widgets
    // are basically "write once" into the container.
  }, [widgetId, targetId]);

  return <div id={targetId} />;
}