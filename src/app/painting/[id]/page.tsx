import { notFound } from "next/navigation";
import Link from "next/link";
import { getPaintingById } from "@/data/paintings";

export default async function PaintingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const painting = getPaintingById(id);
  if (!painting) notFound();

  return (
    <div className="detail">
      <div className="detail-image">
        <img src={painting.imageUrl} alt={painting.title} />
      </div>

      <div className="detail-info">
        <Link href="/" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", textDecoration: "none", marginBottom: "2rem", display: "inline-block" }}>
          ← Back to Collection
        </Link>

        <div className="detail-meta">{painting.year} · {painting.medium} · {painting.dimensions}</div>
        <h1>{painting.titleZh}</h1>
        <p className="en-title">{painting.title}</p>

        <p className="detail-desc">{painting.description}</p>

        <div style={{ marginBottom: "2rem" }}>
          <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "12px", marginBottom: "12px" }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "4px" }}>Theme</p>
            <p style={{ fontSize: "0.85rem" }}>{painting.interpretation.theme}</p>
          </div>
          <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "12px", marginBottom: "12px" }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "4px" }}>Technique</p>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>{painting.interpretation.technique}</p>
          </div>
          <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "12px" }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "4px" }}>Emotion</p>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>{painting.interpretation.emotion}</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "2rem" }}>
          {painting.tags.map((t) => (
            <span key={t} style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", background: "var(--color-bg-elevated)", color: "var(--color-text-secondary)" }}>{t}</span>
          ))}
        </div>

        <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "8px" }}>In-Depth</p>
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>{painting.interpretation.extended}</p>
        </div>
      </div>
    </div>
  );
}

import { paintings } from "@/data/paintings";
export function generateStaticParams() { return paintings.map((p) => ({ id: p.id })); }
