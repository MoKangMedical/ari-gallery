"use client";

import Link from "next/link";
import { useState } from "react";
import { Painting } from "@/lib/types";

export default function PaintingCard({ painting }: { painting: Painting }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link href={`/painting/${painting.id}`} className="painting-card block group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-elevated)]">
        <img
          src={painting.thumbnailUrl}
          alt={painting.title}
          className={`card-image absolute inset-0 w-full h-full object-cover ${
            imgLoaded ? "img-loaded" : "img-loading"
          }`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-block px-3 py-1 text-[10px] tracking-[0.1em] uppercase bg-white/90 text-[var(--color-text-primary)]">
            View Details →
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-1 pt-4 pb-2">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display text-base font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-snug">
            {painting.titleZh}
          </h3>
          <span className="text-xs text-[var(--color-text-muted)] shrink-0 mt-0.5 tabular-nums">
            {painting.year}
          </span>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] tracking-[0.02em] font-light">
          {painting.title}
        </p>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          {painting.medium}
        </p>
      </div>
    </Link>
  );
}
