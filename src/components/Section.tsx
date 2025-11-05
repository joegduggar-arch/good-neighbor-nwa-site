import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id?: string;
  bg?: "none" | "subtle" | "dark";
  className?: string;
}>;

export default function Section({ id, bg = "none", className, children }: Props) {
  const bgClass =
    bg === "subtle" ? "bg-neutral-50" : bg === "dark" ? "bg-neutral-900 text-white" : "";
  return (
    <section id={id} className={`py-12 md:py-16 ${bgClass} ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
