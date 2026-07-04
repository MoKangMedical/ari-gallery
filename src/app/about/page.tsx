import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-10 pb-20">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-[var(--color-border)] p-10 md:p-16 mb-16 shadow-sm">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(236,72,153,0.08) 0%, rgba(126,200,227,0.05) 50%, transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="text-5xl mb-4 sparkle-icon">👸</div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-text-primary)] mb-6">
              ✨ 关于 Aria ✨
            </h1>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full border-4 border-[var(--color-accent)]/30 bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center text-5xl shadow-lg">
                👸
              </div>
              <div>
                <p className="text-xl text-[var(--color-accent)] font-medium flex items-center gap-2">
                  Aria 👑
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  🎨 视觉艺术家 · 油画 & 综合材料
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Bio */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="font-display text-2xl font-medium text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
            <span className="text-2xl">👑</span>
            简介
          </h2>
          <div className="prose-interpretation max-w-3xl bg-white/60 p-6 rounded-2xl border border-[var(--color-border)]">
            <p>
              Aria 是一位以光与情感表达见长的视觉艺术家。她的创作横跨布面油画、
              丙烯和综合材料等多个领域，始终围绕着「光如何塑造我们的感知」
              这一核心命题展开。她的画室像一个魔法城堡，每一幅画都是她施下的魔法。✨
            </p>
            <p>
              Aria 的作品融合了东方美学的「留白」意境与西方印象派对光色的敏
              锐捕捉。在技法上，她既精研古典油画的透明罩染传统，也大胆探索综
              合材料的拼贴与刮擦，形成了兼具细腻与力量的独特视觉语言。
            </p>
            <p>
              近年来，Aria 的创作逐渐从客观的风景描绘转向对内心情感与记忆的
              深度挖掘。每一幅画都是她内心童话世界的一扇窗户。💕
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Statement */}
      <ScrollReveal>
        <section className="mb-16 p-8 md:p-10 rounded-2xl bg-white border-2 border-[var(--color-border)] shadow-sm relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background:
                "linear-gradient(90deg, #e879a0, #e8a87c, #7ec8e3, #e879a0)",
            }}
          />
          <h2 className="font-display text-2xl font-medium text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
            <span className="text-2xl">💖</span>
            创作自述
          </h2>
          <div className="prose-interpretation max-w-3xl">
            <p>
              「我画光，不是因为光本身，而是因为光照亮的事物 ——
              以及那些留在阴影里的东西。」
            </p>
            <p>
              每一幅画对我而言都是一次魔法：与自然对话、与城市对话、
              与记忆对话、也与自己对话。我试图在每一个瞬间捕捉那些难以言说却
              又无比真实的情感 —— 黎明前的期待、雨夜街头的孤独、一朵花在岩
              石中绽放的坚定。
            </p>
            <p>
              我不追求「画得像」，而是追求「画得真」—— 情感的真、氛围的真、
              那一刻的真。
            </p>
            <p>
              希望你在我的画里，能找到属于你自己的那一束光。✨
            </p>
          </div>
          <p className="mt-6 text-base text-[var(--color-accent)] font-serif italic flex items-center gap-2">
            👸 — Aria
          </p>
        </section>
      </ScrollReveal>

      {/* Exhibitions */}
      <ScrollReveal>
        <section>
          <h2 className="font-display text-2xl font-medium text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
            <span className="text-2xl">🏰</span>
            展览经历
          </h2>
          <div className="space-y-4 max-w-3xl">
            {[
              { year: "2026", event: "个展『记忆的回声』（筹备中）" },
              { year: "2025", event: "群展『城市印象』— 当代青年艺术家联展" },
              { year: "2024", event: "个展『光之序列』— 首次个人画展" },
            ].map((item) => (
              <div
                key={item.year}
                className="flex items-start gap-4 p-4 rounded-xl border-2 border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:bg-pink-50/30 transition-all duration-300 bg-white/60"
              >
                <span className="text-sm font-medium text-[var(--color-accent)] shrink-0 w-12 bg-pink-50 px-2 py-1 rounded-full text-center">
                  {item.year}
                </span>
                <span className="text-sm text-[var(--color-text-secondary)] pt-1">
                  ✨ {item.event}
                </span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
