function LogoOrInitials({ name, logo }: { name: string; logo?: string }) {
  if (logo) {
    return (
      <span className="relative h-9 w-9 flex-shrink-0">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="36px"
          className="object-contain rounded-md ring-1 ring-neutral-700 bg-white/5"
        />
      </span>
    );
  }
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-800 text-xs font-bold text-neutral-200 ring-1 ring-neutral-700">
      {initials}
    </span>
  );
}
