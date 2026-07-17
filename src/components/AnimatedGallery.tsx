"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Painting } from "@/lib/types";

interface AnimatedGalleryProps {
  paintings: Painting[];
  albumTitle: string;
}

export default function AnimatedGallery({ paintings }: AnimatedGalleryProps) {
  const [visible, setVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const allTags = Array.from(new Set(paintings.flatMap((p) => p.tags))).slice(0, 15);

  const filtered = selectedFilter
    ? paintings.filter((p) => p.tags.includes(selectedFilter))
    : paintings;

  const directions = ["fly-up", "fly-left", "fly-right", "fly-down", "scale-in"];

  return (
    <div ref={galleryRef}>
      {/* Filter */}
      <div className="flex flex-wrap gap-1 mb-12">
        <button
          onClick={() => setSelectedFilter(null)}
          className={`filter-btn ${!selectedFilter ? "active" : ""}`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedFilter(tag === selectedFilter ? null : tag)}
            className={`filter-btn ${selectedFilter === tag ? "active" : ""}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((painting, index) => {
          const direction = directions[index % directions.length];
          const delay = index * 60;

          return (
            <Link
              key={painting.id}
              href={`/painting/${painting.id}`}
              className={`animated-card block break-inside-avoid ${visible ? "card-visible" : ""}`}
              style={{
                animationDelay: `${delay}ms`,
                animationName: visible ? direction : "none",
              }}
            >
              <div className="bg-white overflow-hidden transition-shadow duration-500 hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={painting.thumbnailUrl}
                    alt={painting.title}
                    className="w-full object-cover transition-transform duration-[1s] hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-500" />
                </div>

                <div className="p-3">
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <h3 className="font-display text-sm font-medium text-[var(--color-text-primary)]">
                      {painting.titleZh}
                    </h3>
                    <span className="text-[10px] text-[var(--color-text-muted)] tabular-nums">
                      {painting.year}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] tracking-[0.02em]">
                    {painting.title}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--color-text-muted)]">
          <p>No paintings match this filter.</p>
        </div>
      )}
    </div>
  );
}
