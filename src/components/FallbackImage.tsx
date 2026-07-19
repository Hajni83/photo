"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

/**
 * next/image `fill` kép, ami hiányzó fájl esetén elegáns
 * színátmenetes helykitöltőt mutat a kép neve helyett.
 */
export default function FallbackImage({ src, alt, sizes, className, priority, fit = "cover" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-blush-200 via-blush-100 to-blush-300 ${className ?? ""}`}
      >
        <span className="font-serif text-lg italic text-ink-500">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={90}
      priority={priority}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className ?? ""}`}
      onError={() => setFailed(true)}
    />
  );
}
