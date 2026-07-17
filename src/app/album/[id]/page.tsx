import { notFound } from "next/navigation";
import Link from "next/link";
import { getAlbumById, getPaintingsByAlbum, albums } from "@/data/paintings";

export default async function AlbumDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const album = getAlbumById(id);
  if (!album) notFound();
  const albumPaintings = getPaintingsByAlbum(album.id);

  return (
    <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "160px 40px 80px" }}>
      <Link href="/album" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", textDecoration: "none", marginBottom: "2rem", display: "inline-block" }}>← Albums</Link>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 400, marginBottom: "0.5rem" }}>{album.titleZh}</h1>
      <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "1rem" }}>{album.title} · {album.year} · {album.paintingIds.length} works</p>
      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", maxWidth: "600px", marginBottom: "3rem", lineHeight: 1.7 }}>{album.descriptionZh}</p>

      <div style={{ columns: 4, columnGap: 8 }}>
        {albumPaintings.map((p) => (
          <Link key={p.id} href={`/painting/${p.id}`}
            style={{ breakInside: "avoid", marginBottom: 8, display: "block", position: "relative", overflow: "hidden" }}>
            <img src={p.thumbnailUrl} alt={p.title} loading="lazy" style={{ width: "100%", display: "block", filter: "brightness(0.95)", transition: "filter 0.3s, transform 0.5s" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)", opacity: 0, transition: "opacity 0.3s", display: "flex", alignItems: "flex-end", padding: 12 }}>
              <span style={{ color: "white", fontFamily: "var(--font-display)", fontSize: "0.85rem" }}>{p.titleZh}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() { return albums.map((a) => ({ id: a.id })); }
