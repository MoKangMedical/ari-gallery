import Link from "next/link";
import { albums, getPaintingById } from "@/data/paintings";

export default function AlbumsPage() {
  return (
    <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "160px 40px 80px" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 400, marginBottom: "0.5rem" }}>Albums</h1>
      <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "3rem" }}>Curated Collections</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))", gap: "4px" }}>
        {albums.map((a) => {
          const cover = getPaintingById(a.coverPaintingId);
          return (
            <Link key={a.id} href={`/album/${a.id}`}
              style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", display: "block", textDecoration: "none" }}>
              {cover && <img src={cover.thumbnailUrl} alt={a.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)", transition: "transform 0.6s var(--ease-out), filter 0.6s" }} />}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "white", fontWeight: 400, marginBottom: "4px" }}>{a.titleZh}</h2>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>{a.title} · {a.paintingIds.length} works</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
