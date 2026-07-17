import Link from "next/link";
import { albums, getPaintingById } from "@/data/paintings";
import ScrollReveal from "@/components/ScrollReveal";

export default function AlbumsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="accent-line mx-auto mb-6" />
          <h1 className="font-display text-3xl md:text-4xl font-medium text-[var(--color-text-primary)] mb-3">
            Albums
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] tracking-[0.05em]">
            Curated collections exploring different themes
          </p>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="mx-auto max-w-[1200px] px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {albums.map((album) => {
            const coverPainting = getPaintingById(album.coverPaintingId);
            return (
              <ScrollReveal key={album.id}>
                <Link
                  href={`/album/${album.id}`}
                  className="group block"
                >
                  <div className="aspect-[16/9] bg-[var(--color-bg-elevated)] flex items-center justify-center relative overflow-hidden mb-4">
                    {coverPainting && (
                      <img
                        src={coverPainting.thumbnailUrl}
                        alt={album.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  <div className="px-1">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h2 className="font-display text-xl font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {album.titleZh}
                      </h2>
                      <span className="text-xs text-[var(--color-text-muted)] tabular-nums">
                        {album.year}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] tracking-[0.02em] mb-2">
                      {album.title} · {album.paintingIds.length} works
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
                      {album.descriptionZh}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
