"use client";

import Link from "next/link";
import { Painting } from "@/lib/types";

export default function PaintingCard({ painting }: { painting: Painting }) {
  return (
    <Link href={`/painting/${painting.id}`} className="painting-card block group">
      {/* Real painting image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <img
          src={painting.thumbnailUrl}
          alt={painting.title}
          className="absolute inset-0 w-full h-full object-cover gallery-image"
          loading="lazy"
        />

        {/* Decorative corners overlay */}
        <div className="absolute top-2 left-2 text-lg opacity-60 sparkle-icon drop-shadow-md">✨</div>
        <div className="absolute top-2 right-2 text-lg opacity-60 sparkle-icon drop-shadow-md">💕</div>
        <div className="absolute bottom-2 left-2 text-lg opacity-60 sparkle-icon drop-shadow-md">❄️</div>
        <div className="absolute bottom-2 right-2 text-lg opacity-60 sparkle-icon drop-shadow-md">⭐</div>

        {/* Hover overlay with princess frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="relative z-10 p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-lg font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {painting.titleZh}
          </h3>
          <span className="text-xs text-[var(--color-text-muted)] shrink-0 mt-1 bg-pink-50 px-2 py-0.5 rounded-full">
            {painting.year}
          </span>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mb-3 font-sans">
          {painting.title} · {painting.medium}
        </p>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
          {painting.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {painting.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
