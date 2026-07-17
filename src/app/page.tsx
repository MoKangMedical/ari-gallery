"use client";

import { useState, useMemo } from "react";
import { paintings } from "@/data/paintings";
import Hero from "@/components/Hero";
import PaintingCard from "@/components/PaintingCard";
import ScrollReveal from "@/components/ScrollReveal";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Light", value: "light" },
  { label: "Nature", value: "nature" },
  { label: "Architecture", value: "architecture" },
  { label: "Abstract", value: "abstract" },
];

export default function HomePage() {
  const [filter, setFilter] = useState("all");

  const filteredPaintings = useMemo(() => {
    if (filter === "all") return paintings;
    return paintings.filter((p) => {
      const tags = [...p.tags, ...(p.interpretation?.theme?.split(/[、，,・]/) || [])];
      const all = tags.join(" ").toLowerCase();
      switch (filter) {
        case "light": return /光|light|shadow|影|sun|日|glow/.test(all);
        case "nature": return /自然|nature|树|tree|花|flower|山|hill|水|water|云|cloud|风|wind|雪|snow|雨|rain|野|field|森林|forest|湖|lake|河|river|海|sea/.test(all);
        case "architecture": return /建筑|architecture|街|street|城市|city|墙|wall|塔|tower|老|old/.test(all);
        case "abstract": return /抽象|abstract|大地|earth|本质|essence|暗|dark|夜|night/.test(all);
        default: return true;
      }
    });
  }, [filter]);

  return (
    <>
      <Hero />

      {/* Gallery Section */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-24">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mt-20 mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--color-text-primary)] mb-3">
              Collection
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] tracking-[0.05em] max-w-md mx-auto leading-relaxed">
              {paintings.length} paintings exploring light, nature, and the poetry of everyday moments.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-1 mb-14">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`filter-btn ${filter === f.value ? "active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - masonry-like 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {filteredPaintings.map((painting, i) => (
            <ScrollReveal key={painting.id} delay={i * 40}>
              <PaintingCard painting={painting} />
            </ScrollReveal>
          ))}
        </div>

        {filteredPaintings.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--color-text-muted)]">No paintings match this filter.</p>
          </div>
        )}
      </section>
    </>
  );
}
