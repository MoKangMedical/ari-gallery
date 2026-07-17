"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { paintings } from "@/data/paintings";
import Hero from "@/components/Hero";
import Lightbox from "@/components/Lightbox";

const FILTERS = ["All", "Light", "Nature", "City", "Abstract"];

export default function HomePage() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    if (filter === "All") return paintings;
    return paintings.filter((p) => {
      const s = [...p.tags, p.interpretation?.theme || ""].join(" ").toLowerCase();
      switch (filter) {
        case "Light": return /光|light|sun|glow|shine|黄昏|暮|shadow|影/.test(s);
        case "Nature": return /自然|nature|树|tree|山|hill|水|water|花|flower|云|cloud|风|wind|雪|snow|雨|rain|野|field|森林|forest|湖|lake|河|river|海|sea|草|叶|石|stone/.test(s);
        case "City": return /城市|city|街|street|建筑|architect|墙|wall|塔|tower|老|old/.test(s);
        case "Abstract": return /抽象|abstract|大地|earth|本质|暗|dark|夜|night|记忆|memory/.test(s);
        default: return true;
      }
    });
  }, [filter]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.index);
            setRevealed((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".masonry-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevLightbox = useCallback(() => setLightboxIndex((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length]);
  const nextLightbox = useCallback(() => setLightboxIndex((i) => i !== null ? (i + 1) % filtered.length : null), [filtered.length]);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox]);

  return (
    <>
      <Hero />

      <section className="gallery">
        <div className="gallery-header">
          <h2>Collection</h2>
          <p>{filtered.length} Paintings · Sketch Watercolor</p>
        </div>

        <div className="filter-bar">
          {FILTERS.map((f) => (
            <button key={f} className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>

        <div className="masonry">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="masonry-item"
              data-index={i}
              onClick={() => openLightbox(i)}
              style={{
                opacity: revealed.has(i) ? 1 : 0,
                transform: revealed.has(i) ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s var(--ease-out) ${i * 30}ms, transform 0.6s var(--ease-out) ${i * 30}ms`,
              }}
            >
              <img src={p.thumbnailUrl} alt={p.title} loading="lazy" />
              <div className="masonry-overlay">
                <div>
                  <h3>{p.titleZh}</h3>
                  <span>{p.title} · {p.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          painting={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filtered.length - 1}
        />
      )}
    </>
  );
}
