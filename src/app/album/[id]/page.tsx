import { notFound } from "next/navigation";
import Link from "next/link";
import { getAlbumById, getPaintingsByAlbum } from "@/data/paintings";
import PaintingCard from "@/components/PaintingCard";
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

      <ScrollReveal>
        <div className="mb-16">
          <div className="flex flex-wrap items-baseline gap-4 mb-4">
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)]">
              👑 {album.titleZh}
            </h1>
            <span className="text-xl text-[var(--color-text-muted)] font-light">
              {album.title}
            </span>
          </div>
          <div className="text-sm text-[var(--color-text-muted)] mb-4">
            {album.year} · {album.paintingIds.length} 幅作品
          </div>
          <div className="accent-line mb-6" />
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-4">
            {album.descriptionZh}
          </p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-3xl italic">
            {album.description}
          </p>
        </div>
      </ScrollReveal>

      {albumPaintings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albumPaintings.map((painting) => (
            <ScrollReveal key={painting.id}>
              <PaintingCard painting={painting} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-[var(--color-text-muted)]">
          <span className="text-4xl block mb-3">🖼️</span>
          <p>该专辑暂无画作</p>
        </div>
      )}

      <ScrollReveal>
        <div className="mt-12">
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

import { albums } from "@/data/paintings";

export function generateStaticParams() {
  return albums.map((a) => ({ id: a.id }));
}
