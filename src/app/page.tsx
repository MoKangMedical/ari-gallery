import { paintings } from "@/data/paintings";
import Hero from "@/components/Hero";
import PaintingCard from "@/components/PaintingCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Gallery Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="text-3xl mb-3 sparkle-icon">🎨👸🎨</div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--color-text-primary)] mb-3">
              💖 全部画作 💖
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              ✨ 探索 Aria 的梦幻画集 — 每一幅画都闪耀着童话的光芒 ✨
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { label: "🌸 全部", value: "all" },
            { label: "☀️ 光之序列", value: "light" },
            { label: "🌿 自然之诗", value: "nature" },
            { label: "🌃 城市印象", value: "city" },
            { label: "📦 综合材料", value: "mixed" },
          ].map((tab, i) => (
            <button
              key={tab.value}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                i === 0
                  ? "bg-[var(--color-accent-glow)] text-[var(--color-accent)] border-2 border-[var(--color-accent)]/20 font-medium"
                  : "text-[var(--color-text-muted)] border-2 border-transparent hover:text-[var(--color-text-secondary)] hover:border-[var(--color-border)] hover:bg-white/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paintings.map((painting) => (
            <ScrollReveal key={painting.id}>
              <PaintingCard painting={painting} />
            </ScrollReveal>
          ))}
        </div>

        {/* Placeholder */}
        <ScrollReveal>
          <div className="mt-12 text-center p-12 rounded-2xl border-2 border-dashed border-[var(--color-border)] bg-white/40">
            <span className="text-4xl block mb-3">🖼️</span>
            <p className="text-[var(--color-text-muted)]">
              🌟 更多画作即将上线 — 敬请期待 🌟
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
