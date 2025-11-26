// src/components/IdxWidget.tsx
"use client";

import { useEffect, useRef } from "react";

type IdxWidgetProps = {
  widgetId: string;      // e.g. "122995"
  containerId?: string;  // optional; if omitted, we'll generate from widgetId
};

export default function IdxWidget({ widgetId, containerId }: IdxWidgetProps) {
  const loadedRef = useRef(false);

  // Use a default container ID if one isn't provided
  const actualContainerId =
    containerId ?? `idx-widget-${widgetId}`;

  useEffect(() => {
    // Avoid double-loading the script on rerenders
    if (loadedRef.current) return;
    loadedRef.current = true;

    const container = document.getElementById(actualContainerId);

    if (container) {
      container.innerHTML = "";
    }

    const script = document.createElement("script");
    script.charset = "UTF-8";
    script.type = "text/javascript";
    script.id = `idxwidgetsrc-${widgetId}`;
    script.src = `//goodneighbornwa.idxbroker.com/idx/widgets/${widgetId}`;

    (container ?? document.body).appendChild(script);

    return () => {
      const existing = document.getElementById(`idxwidgetsrc-${widgetId}`);
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, [widgetId, actualContainerId]);

  return <div id={actualContainerId} />;
}