import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-0 pt-20 pb-24">
      {/* Header */}
      <ScrollReveal>
        <div className="mb-20 text-center">
          <div className="accent-line mx-auto mb-8" />
          <h1 className="font-display text-4xl md:text-5xl font-medium text-[var(--color-text-primary)] mb-4">
            About Aria
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] tracking-[0.1em] uppercase">
            Artist &amp; Visual Explorer
          </p>
        </div>
      </ScrollReveal>

      {/* Bio */}
      <ScrollReveal>
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="w-full aspect-[3/4] bg-[var(--color-bg-elevated)] flex items-center justify-center">
                <span className="font-display text-8xl text-[var(--color-accent)]/20">A</span>
              </div>
            </div>
            <div className="md:col-span-3">
              <h2 className="font-display text-2xl font-medium text-[var(--color-text-primary)] mb-6">
                简介
              </h2>
              <div className="prose-interpretation">
                <p>
                  Aria 是一位以光与情感表达见长的视觉创作者。她的作品围绕「光如何塑造我们的感知」这一核心命题展开——用素描淡彩的克制语言，在灰调与暖色之间寻找微妙的平衡。
                </p>
                <p>
                  她的创作融合了东方美学的「留白」意境与对自然光色的敏锐捕捉。每一幅画都像一页日记，记录着某个特定时刻的光线、温度和情绪。
                </p>
                <p>
                  近年来，Aria 的创作从客观的风景描绘逐渐转向对纹理与时间的深度挖掘——石头的风化、老墙的斑驳、水面的静止——在看似平凡的物体中寻找不平凡的叙事。
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Statement */}
      <ScrollReveal>
        <section className="mb-20 py-12 border-y border-[var(--color-border)]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-medium text-[var(--color-text-primary)] mb-8">
              Artist Statement
            </h2>
            <div className="prose-interpretation text-center">
              <p className="text-lg text-[var(--color-text-primary)] font-display italic leading-relaxed">
                「我画光，不是因为光本身，而是因为光照亮的事物——以及那些留在阴影里的东西。」
              </p>
              <p>
                每一幅画对我而言都是一次安静的对话：与自然、与时间、与记忆。我试图捕捉那些难以言说却又无比真实的存在——黎明前的期待、一面老墙在午后光线中的温度、雨水在玻璃上留下的轨迹。
              </p>
              <p>
                我不追求「画得像」，而是追求「画得真」——情感的真、氛围的真、那一刻的真。在重复描绘同一块石头、同一片水面时，我学会了一件事：变化才是永恒，而观察本身就是一种创作。
              </p>
              <p>
                希望你在我的画里，能找到属于你自己的那一束光。
              </p>
            </div>
            <p className="mt-8 font-display text-base text-[var(--color-accent)] tracking-[0.05em]">
              — Aria
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Timeline */}
      <ScrollReveal>
        <section>
          <h2 className="font-display text-2xl font-medium text-[var(--color-text-primary)] mb-10">
            Timeline
          </h2>
          <div className="space-y-1 max-w-2xl">
            {[
              { year: "2025", event: "创作爆发期 — 完成 119 幅素描淡彩系列作品，形成个人风格" },
              { year: "2024", event: "创作起步 — 完成首批 18 幅作品，探索光与自然主题" },
            ].map((item) => (
              <div
                key={item.year}
                className="flex items-start gap-6 py-4 border-b border-[var(--color-border)]"
              >
                <span className="text-sm font-medium text-[var(--color-text-primary)] w-12 shrink-0 tabular-nums">
                  {item.year}
                </span>
                <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
