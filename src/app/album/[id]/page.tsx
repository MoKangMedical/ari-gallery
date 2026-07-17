import { notFound } from "next/navigation";
import Link from "next/link";
import { getAlbumById, getPaintingsByAlbum, albums } from "@/data/paintings";
import AnimatedGallery from "@/components/AnimatedGallery";
import ScrollReveal from "@/components/ScrollReveal";

export default async function AlbumDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const album = getAlbumById(id);

  if (!album) {
    notFound();
  }

  const albumPaintings = getPaintingsByAlbum(album.id);

  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-12 pt-12 pb-24">
      {/* Breadcrumb */}
      <ScrollReveal>
        <nav className="flex items-center gap-2 text-xs tracking-[0.05em] text-[var(--color-text-muted)] mb-12">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors uppercase">Gallery</Link>
          <span>/</span>
          <Link href="/album" className="hover:text-[var(--color-text-primary)] transition-colors uppercase">Albums</Link>
          <span>/</span>
          <span className="text-[var(--color-text-secondary)]">{album.title}</span>
        </nav>
      </ScrollReveal>

      {/* Album Header */}
      <ScrollReveal>
        <div className="mb-16">
          <div className="accent-line mb-6" />
          <h1 className="font-display text-3xl md:text-4xl font-medium text-[var(--color-text-primary)] mb-2">
            {album.titleZh}
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] tracking-[0.02em]">
            {album.title} · {album.year} · {album.paintingIds.length} works
          </p>
          <p className="text-sm text-[var(--color-text-muted)] mt-4 max-w-2xl leading-relaxed">
            {album.descriptionZh}
          </p>
        </div>
      </ScrollReveal>

      {/* Gallery */}
      {albumPaintings.length > 0 ? (
        <AnimatedGallery
          paintings={albumPaintings}
          albumTitle={album.titleZh}
        />
      ) : (
        <div className="text-center py-20 text-[var(--color-text-muted)]">
          <p>No paintings in this album.</p>
        </div>
      )}

      {/* Back */}
      <ScrollReveal>
        <div className="mt-16">
          <Link
            href="/album"
            className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            ← Back to Albums
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}

export function generateStaticParams() {
  return albums.map((a) => ({ id: a.id }));
}
