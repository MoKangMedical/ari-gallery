"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Painting } from "@/lib/types";

interface AnimatedGalleryProps {
  paintings: Painting[];
  albumTitle: string;
}

export default function AnimatedGallery({ paintings, albumTitle }: AnimatedGalleryProps) {
  const [visible, setVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger entrance on mount
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Collect all unique tags for filter
  const allTags = Array.from(new Set(paintings.flatMap((p) => p.tags))).slice(0, 12);

  const filtered = selectedFilter
    ? paintings.filter((p) => p.tags.includes(selectedFilter))
    : paintings;

  // Entrance directions rotate: fly-up, fly-left, fly-right, fly-down, scale-in
  const directions = ["fly-up", "fly-left", "fly-right", "fly-down", "scale-in"];

  return (
    <div ref={galleryRef}>
      {/* Filter tags */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        <button
          onClick={() => setSelectedFilter(null)}
          className={`px-4 py-1.5 rounded-full text-xs transition-all duration-300 ${
            !selectedFilter
              ? "bg-[var(--color-accent)] text-white shadow-lg shadow-pink-300/30"
              : "bg-white/60 text-[var(--color-text-muted)] hover:bg-white"
          }`}
        >
          🌸 全部
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedFilter(tag === selectedFilter ? null : tag)}
            className={`px-4 py-1.5 rounded-full text-xs transition-all duration-300 ${
              selectedFilter === tag
                ? "bg-[var(--color-accent)] text-white shadow-lg shadow-pink-300/30"
                : "bg-white/60 text-[var(--color-text-muted)] hover:bg-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Animated masonry grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filtered.map((painting, index) => {
          const direction = directions[index % directions.length];
          const delay = index * 80; // 80ms stagger

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
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group border border-pink-100/50 hover:border-pink-200">
                {/* Image container */}
                <div className="relative overflow-hidden">
                  <img
                    src={painting.thumbnailUrl}
                    alt={painting.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    style={{ aspectRatio: painting.id === "ari-29" ? "4/3" : "3/4" }}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
                      点击查看详情 →
                    </span>
                  </div>

                  {/* Sparkle corner */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-70 transition-opacity duration-500 text-lg">
                    ✨
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-display text-base font-medium text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {painting.titleZh}
                    </h3>
                    <span className="text-xs text-gray-400 shrink-0 mt-0.5 bg-pink-50 px-2 py-0.5 rounded-full">
                      {painting.year}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    {painting.title} · {painting.medium}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {painting.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <span className="text-4xl block mb-3">🎨</span>
          <p>该分类暂无画作</p>
        </div>
      )}
    </div>
  );
}
