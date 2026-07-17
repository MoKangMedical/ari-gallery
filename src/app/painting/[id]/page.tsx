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
    <article className="mx-auto max-w-[1200px] px-6 lg:px-12 pt-12 pb-24">
      {/* Breadcrumb */}
      <ScrollReveal>
        <nav className="flex items-center gap-2 text-xs tracking-[0.05em] text-[var(--color-text-muted)] mb-12">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors uppercase">
            Gallery
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text-secondary)]">
            {painting.title}
          </span>
        </nav>
      </ScrollReveal>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: Image */}
        <div className="lg:col-span-7">
          <ScrollReveal>
            <div className="painting-frame">
              <div className="aspect-[4/3] bg-[var(--color-bg-elevated)] flex items-center justify-center relative overflow-hidden">
                <img
                  src={painting.imageUrl}
                  alt={painting.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation between paintings */}
          <ScrollReveal delay={200}>
            <div className="flex justify-between mt-8">
              <Link href="/" className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
                ← Back to Collection
              </Link>
              <span className="text-xs text-[var(--color-text-muted)]">
                {painting.id.replace("ari-", "#")}
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-5">
          <ScrollReveal>
            {/* Title */}
            <div className="mb-10">
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-4">
                {painting.year} · {painting.medium}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-medium text-[var(--color-text-primary)] leading-tight mb-2">
                {painting.titleZh}
              </h1>
              <p className="text-sm text-[var(--color-text-secondary)] tracking-[0.02em] font-light">
                {painting.title}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-2">
                {painting.dimensions}
              </p>
            </div>

            {/* Description */}
            <div className="mb-10">
              <div className="accent-line mb-5" />
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {painting.description}
              </p>
            </div>

            {/* Theme / Technique / Emotion */}
            <div className="space-y-5 mb-10">
              <div className="py-3 border-b border-[var(--color-border)]">
                <h3 className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Theme</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{painting.interpretation.theme}</p>
              </div>
              <div className="py-3 border-b border-[var(--color-border)]">
                <h3 className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Technique</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{painting.interpretation.technique}</p>
              </div>
              <div className="py-3 border-b border-[var(--color-border)]">
                <h3 className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Emotion</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{painting.interpretation.emotion}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {painting.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  {tag}
                </span>
              ))}
            </div>

            {/* Related Albums */}
            {relatedAlbums.length > 0 && (
              <div>
                <h3 className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">
                  Part of
                </h3>
                <div className="flex flex-wrap gap-2">
                  {relatedAlbums.map((album) => (
                    <Link
                      key={album.id}
                      href={`/album/${album.id}`}
                      className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors underline underline-offset-4 decoration-[var(--color-border)] hover:decoration-[var(--color-accent)]"
                    >
                      {album.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>

      {/* In-Depth Analysis */}
      <ScrollReveal>
        <div className="mt-20 pt-16 border-t border-[var(--color-border)] max-w-3xl">
          <h2 className="font-display text-xl font-medium text-[var(--color-text-primary)] mb-6">
            In-Depth Analysis
          </h2>
          <div className="prose-interpretation">
            <p>{painting.interpretation.extended}</p>
          </div>
        </div>
      </ScrollReveal>
    </article>
  );
}

import { paintings } from "@/data/paintings";

export function generateStaticParams() {
  return paintings.map((p) => ({ id: p.id }));
}
