import { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren<{ id?: string; bg?: "none" | "subtle" | "dark"; className?: string }>;

export default function Section({ id, bg = "none", className, children }: Props) {
  return (
    <section
      id={id}
      className={clsx(
        "py-12 md:py-16",
        bg === "subtle" && "bg-neutral-50",
        bg === "dark" && "bg-neutral-900 text-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
