"use client";

import Script from "next/script";

interface Props {
  widgetId: string;
  type: "showcase" | "slideshow" | "mapsearch";
}

export default function LegacyIdxWidget({ widgetId, type }: Props) {
  const base = "https://goodneighbornwa.idxbroker.com/idx";

  let scriptSrc = "";

  switch (type) {
    case "showcase":
      scriptSrc = `${base}/customshowcasejs.php?widgetid=${widgetId}`;
      break;
    case "slideshow":
      scriptSrc = `${base}/slideshowjs.php?widgetid=${widgetId}`;
      break;
    case "mapsearch":
      scriptSrc = `${base}/mapsearchjs.php?widgetid=${widgetId}`;
      break;
  }

  return (
    <div id={`idx-legacy-${type}-${widgetId}`} className="w-full">
      <Script src={scriptSrc} strategy="lazyOnload" />
    </div>
  );
}