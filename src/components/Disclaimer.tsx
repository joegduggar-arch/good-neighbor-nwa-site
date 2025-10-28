import { MLS_NAME, DISCLAIMER_TEXT } from "../lib/compliance";
export function Disclaimer() {
  return (
    <p className="mt-2 text-xs text-gray-500">
      {DISCLAIMER_TEXT} Source: {MLS_NAME}. Last updated: <span suppressHydrationWarning>{new Date().toLocaleString()}</span>.
    </p>
  );
}
