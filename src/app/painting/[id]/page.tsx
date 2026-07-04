import { notFound } from "next/navigation";
import Link from "next/link";
import { getPaintingById, albums } from "@/data/paintings";
import ScrollReveal from "@/components/ScrollReveal";

export default async function PaintingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const painting = getPaintingById(id);

  if (!painting) {
    notFound();
  }

  const relatedAlbums = albums.filter((a) =>
    painting.albumIds.includes(a.id)
  );

  return (
    <article className="mx-auto max-w-5xl px-6 pt-10 pb-20">
      {/* Breadcrumb */}
      <ScrollReveal>
        <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-10">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
            🏰 画廊
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text-secondary)]">
            {painting.title}
          </span>
        </nav>
      </ScrollReveal>

      {/* Painting Image */}
      <ScrollReveal>
        <div className="relative mb-12">
          <div className="painting-frame rounded-lg overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50">
            <div className="aspect-[4/3] flex items-center justify-center relative">
              <img
                src={painting.imageUrl}
                alt={painting.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Title & Meta */}
      <ScrollReveal>
        <div className="mb-12">
          <div className="flex flex-wrap items-baseline gap-4 mb-4">
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)]">
              ✨ {painting.titleZh}
            </h1>
            <span className="text-xl text-[var(--color-text-muted)] font-light">
              {painting.title}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-6">
            <span className="flex items-center gap-1.5">
              📅 {painting.year}
            </span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <span>🎨 {painting.medium}</span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <span>📐 {painting.dimensions}</span>
          </div>

          <div className="accent-line mb-6" />

          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
            {painting.description}
          </p>
        </div>
      </ScrollReveal>

      {/* Interpretation */}
      <ScrollReveal>
        <div className="mb-16 p-8 md:p-10 rounded-2xl bg-white border-2 border-[var(--color-border)] shadow-sm">
          <h2 className="font-display text-2xl font-medium text-[var(--color-text-primary)] mb-8 flex items-center gap-3">
            <span className="text-2xl">👑</span>
            解读 Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-4 rounded-xl bg-pink-50/50">
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2 flex items-center gap-1">
                💡 主题 Theme
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {painting.interpretation.theme}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50/50">
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2 flex items-center gap-1">
                🖌️ 技法 Technique
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {painting.interpretation.technique}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/50">
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-2 flex items-center gap-1">
                💕 情绪 Emotion
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {painting.interpretation.emotion}
              </p>
            </div>
          </div>

          <div className="border-t-2 border-[var(--color-border)] pt-8">
            <h3 className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-4 flex items-center gap-1">
              📖 深度解读 In-Depth
            </h3>
            <div className="prose-interpretation">
              <p>{painting.interpretation.extended}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Related Albums */}
      {relatedAlbums.length > 0 && (
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="font-display text-xl font-medium text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
              📚 所属专辑
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedAlbums.map((album) => (
                <Link
                  key={album.id}
                  href={`/album/${album.id}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:bg-pink-50/50 transition-all duration-300 group"
                >
                  <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)]">
                    {album.titleZh}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {album.title}
                  </span>
                  <span className="text-lg">👑</span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Tags */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-2 mb-12">
          {painting.tags.map((tag) => (
            <span key={tag} className="tag-badge text-sm px-3 py-1.5">
              {tag}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* Back */}
      <ScrollReveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          ← 返回画廊
        </Link>
      </ScrollReveal>
    </article>
  );
}

import { paintings } from "@/data/paintings";

export function generateStaticParams() {
  return paintings.map((p) => ({ id: p.id }));
}
