"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";
import { useState } from "react";

type CompanyLogoProps = {
  name: string;
  src?: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackClassName?: string;
};

export function CompanyLogo({
  name,
  src,
  width = 40,
  height = 40,
  className = "h-9 w-9 object-contain",
  fallbackClassName = "h-9 w-9 text-xs",
}: CompanyLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <span
        className={`grid place-items-center rounded-xl bg-[#F3F0FF] text-[#6C5CE7] ${fallbackClassName}`}
        aria-label={`${name} 로고 대체 아이콘`}
      >
        <Building2 size={18} strokeWidth={2.5} />
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} 로고`}
      width={width}
      height={height}
      className={className}
      onError={() => setHasError(true)}
      unoptimized
    />
  );
}
