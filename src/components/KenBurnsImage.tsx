// components/KenBurnsImage.tsx
import Image, { ImageProps } from "next/image";

export default function KenBurnsImage(props: ImageProps) {
  return (
    <div className="relative overflow-hidden">
      <Image {...props} className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-y-0.5 ${props.className ?? ""}`} />
    </div>
  );
}
