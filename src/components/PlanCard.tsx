// src/components/PlanCard.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Props = {
  builderSlug: string;
  planSlug: string;
  title: string;
  subtitle: string;
  imageCandidates?: string[]; // pass plan.images
};

export default function PlanCard({
  builderSlug,
  planSlug,
  title,
  subtitle,
  imageCandidates = [],
}: Props) {
  const candidates = useMemo(() => imageCandidates.filter(Boolean), [imageCandidates]);
  const [idx, setIdx] = useState(0);

  const href = `/floorplans/${builderSlug}/${planSlug}`;
  const current = candidates[idx];

  return (
    <Link
      href={href}
      className="group block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
    >
      {current ? (
        <div className="relative w-full aspect-[16/10] bg-black/40">
          <img
            src={current}
            alt={`${title} preview`}
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => {
              // try next candidate if this one 404s
              if (idx < candidates.length - 1) setIdx(idx + 1);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
      ) : (
        <div className="w-full aspect-[16/10] bg-black/40" />
      )}

      <div className="p-5">
        <div className="text-lg font-semibold text-white">{title}</div>
        <div className="mt-1 text-sm text-white/70">{subtitle}</div>
      </div>
    </Link>
  );
}