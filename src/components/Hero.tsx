"use client";

import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  "/paintings/ari-painting-14.jpg",
  "/paintings/ari-painting-28.jpg",
  "/paintings/ari-painting-09.jpg",
  "/paintings/ari-painting-01.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      {SLIDES.map((src, i) => (
        <div key={src} className={`hero-slide ${i === current ? "active" : ""}`}>
          <img src={src} alt="" />
        </div>
      ))}
      <div className="hero-content">
        <h1>Aria</h1>
        <p className="subtitle">Art Collection · 137 Paintings · 2024 – 2025</p>
      </div>
      <div className="hero-scroll" />
    </section>
  );
}
