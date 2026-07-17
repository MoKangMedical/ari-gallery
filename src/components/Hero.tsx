"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/paintings/ari-painting-14.jpg",
  "/paintings/ari-painting-28.jpg",
  "/paintings/ari-painting-09.jpg",
  "/paintings/ari-painting-01.jpg",
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background images with crossfade */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img}
          className="absolute inset-0 transition-opacity duration-[2s]"
          style={{ opacity: i === currentImg ? 1 : 0 }}
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.85)" }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-center px-6 max-w-3xl transition-all duration-[1.5s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="font-display text-sm md:text-base tracking-[0.3em] text-white/70 mb-6 uppercase">
            Art Collection
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] mb-6">
            Aria
          </h1>
          <p className="text-base md:text-xl text-white/80 font-light tracking-[0.02em] max-w-xl mx-auto leading-relaxed">
            A visual journey through light, nature, and the quiet poetry of everyday moments.
          </p>
          <p className="text-sm text-white/50 mt-2 tracking-[0.1em]">
            光 · 自然 · 纹理 · 时间
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-white/30 overflow-hidden">
          <div
            className="w-full h-6 bg-white/60"
            style={{ animation: "scroll-line 2s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
