"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/** Fills its (relatively positioned) parent; shows a chequered placeholder if the file is missing. */
export function SetImage({ src, alt, className = "object-contain", sizes, priority }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-base-300">
        <div className="checkered w-16 opacity-60" />
        <span className="text-xs uppercase tracking-widest text-base-content/50">No image yet</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
