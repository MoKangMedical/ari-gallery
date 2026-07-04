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
    <div className="mx-auto max-w-7xl px-6 pt-10 pb-20">
      {/* Breadcrumb */}
      <ScrollReveal>
        <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-10">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
            🏰 画廊
          </Link>
          <span>/</span>
          <Link href="/album" className="hover:text-[var(--color-accent)] transition-colors">
            📚 专辑
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text-secondary)]">
            {album.titleZh}
          </span>
        </nav>
      </ScrollReveal>

      {/* Album Header */}
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-3xl">🖼️</span>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)]">
              {album.titleZh}
            </h1>
            <span className="text-3xl">🖼️</span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">
            {album.title} · {album.year} · {album.paintingIds.length} 幅作品
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
          </div>
          <p className="mt-6 text-base text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            {album.descriptionZh}
          </p>
        </div>
      </ScrollReveal>

      {/* Animated Gallery */}
      {albumPaintings.length > 0 ? (
        <AnimatedGallery
          paintings={albumPaintings}
          albumTitle={album.titleZh}
        />
      ) : (
        <div className="text-center py-20 text-[var(--color-text-muted)]">
          <span className="text-4xl block mb-3">🖼️</span>
          <p>该专辑暂无画作</p>
        </div>
      )}

      {/* Back link */}
      <ScrollReveal>
        <div className="mt-16 text-center">
          <Link
            href="/album"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← 返回专辑列表
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}

export function generateStaticParams() {
  return albums.map((a) => ({ id: a.id }));
}
