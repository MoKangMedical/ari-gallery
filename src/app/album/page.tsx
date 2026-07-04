import Link from "next/link";
import { albums, getPaintingById } from "@/data/paintings";
import ScrollReveal from "@/components/ScrollReveal";

export default function AlbumsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(236,72,153,0.06) 0%, rgba(126,200,227,0.04) 50%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="text-4xl mb-3 sparkle-icon">📚👑📚</div>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] mb-4">
            画作专辑
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            ✨ 按主题探索 Aria 的梦幻创作 ✨
          </p>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {albums.map((album) => {
            const coverPainting = getPaintingById(album.coverPaintingId);
            return (
              <ScrollReveal key={album.id}>
                <Link
                  href={`/album/${album.id}`}
                  className="album-card group block"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-pink-100 via-white to-blue-100 flex items-center justify-center relative overflow-hidden">
                    {coverPainting && (
                      <img
                        src={coverPainting.thumbnailUrl}
                        alt={album.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <span className="text-sm text-[var(--color-accent)] font-medium flex items-center gap-1">
                        👑 查看专辑 →
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h2 className="font-display text-xl font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {album.titleZh}
                      </h2>
                      <span className="text-xs text-[var(--color-text-muted)] bg-pink-50 px-2 py-0.5 rounded-full">
                        {album.year}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] mb-3">
                      {album.title} · {album.paintingIds.length} 幅作品
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
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
