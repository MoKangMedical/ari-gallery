"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Painting } from "@/lib/types";

interface LightboxProps {
  painting: Painting;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Lightbox({ painting, onClose, onPrev, onNext, hasPrev, hasNext }: LightboxProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="lightbox open" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>×</button>

      {hasPrev && <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>}
      {hasNext && <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>}

      <img
        src={painting.imageUrl}
        alt={painting.title}
        onClick={(e) => e.stopPropagation()}
      />

      <div className="lightbox-info">
        <h3>{painting.titleZh}</h3>
        <p>{painting.title} · {painting.year} · {painting.medium}</p>
        <Link
          href={`/painting/${painting.id}`}
          style={{ color: "var(--color-accent)", fontSize: "0.7rem", textDecoration: "none", marginTop: "8px", display: "inline-block", letterSpacing: "0.1em" }}
          onClick={(e) => e.stopPropagation()}
        >
          VIEW DETAILS →
        </Link>
      </div>
    </div>
  );
}
