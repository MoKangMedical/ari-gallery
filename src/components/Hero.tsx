import Link from "next/link";
import { ElsaPrincess, CartoonPrincess } from "@/components/PrincessSVG";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Princess glow orbs */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, rgba(126,200,227,0.06) 30%, rgba(251,191,36,0.04) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[20%] left-[10%] w-[200px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(126,200,227,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Castle silhouette */}
      <div className="castle-bg" />

      {/* Floating decorations */}
      <span className="absolute top-[8%] left-[3%] text-xl sm:text-2xl sparkle-icon">⭐</span>
      <span className="absolute top-[12%] right-[5%] text-xl sm:text-2xl sparkle-icon">✨</span>
      <span className="absolute top-[70%] left-[3%] text-lg sparkle-icon">💕</span>
      <span className="absolute top-[55%] right-[4%] text-xl sparkle-icon">🦋</span>
      <span className="absolute top-[80%] right-[12%] text-lg sparkle-icon">🎀</span>
      <span className="absolute top-[35%] left-[2%] text-sm opacity-30" style={{color: "#7ec8e3"}}>❄</span>
      <span className="absolute top-[42%] right-[3%] text-xs opacity-25" style={{color: "#7ec8e3"}}>❄</span>
      <span className="absolute top-[60%] right-[8%] text-sm opacity-30" style={{color: "#7ec8e3"}}>❄</span>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Princess gallery - Elsa in center, cartoon princesses on sides */}
        <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-8 mb-4">
          {/* Left princess - Pink */}
          <div className="hidden sm:block sparkle-icon" style={{ animationDelay: "0s" }}>
            <CartoonPrincess size={100} color="pink" />
          </div>

          {/* Center - ELSA (bigger!) */}
          <div className="sparkle-icon" style={{ animationDelay: "0.3s" }}>
            <ElsaPrincess size={150} />
          </div>

          {/* Right princess - Purple */}
          <div className="hidden sm:block sparkle-icon" style={{ animationDelay: "0.6s" }}>
            <CartoonPrincess size={100} color="purple" />
          </div>
        </div>

        {/* Crown */}
        <div className="text-3xl mb-3 sparkle-icon">👑</div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--color-text-primary)] leading-tight mb-4">
          <span className="inline-flex items-center gap-2 flex-wrap justify-center">
            ✨ Aria画展 ✨
          </span>
          <br />
          <span className="princess-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Aria's Gallery
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed mb-2">
          👸 每一幅画，都是魔法梦境
        </p>
        <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-xl mx-auto">
          走进 Ari 的童话世界，感受画笔之下的梦幻与温暖 💕
        </p>

        {/* Elsa name tag */}
        <div className="mt-3 mb-4">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, rgba(126,200,227,0.2), rgba(184,228,240,0.1))",
              border: "2px solid rgba(126,200,227,0.3)",
              color: "#5bb8d8",
            }}
          >
            ❄️ 艾莎 Elsa ❄️
          </span>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="btn-princess btn-princess-primary"
          >
            🎨 浏览画作
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/album"
            className="btn-princess btn-princess-outline"
          >
            📚 查看专辑
          </Link>
        </div>

        {/* Small princess icons row */}
        <div className="mt-10 flex justify-center gap-4 sm:gap-6 text-3xl sm:text-4xl">
          <span className="sparkle-icon" style={{ animationDelay: "0s" }}>👸</span>
          <span className="sparkle-icon" style={{ animationDelay: "0.2s" }}>🏰</span>
          <span className="sparkle-icon" style={{ animationDelay: "0.4s" }}>👑</span>
          <span className="sparkle-icon" style={{ animationDelay: "0.6s" }}>💖</span>
          <span className="sparkle-icon" style={{ animationDelay: "0.8s" }}>🎀</span>
          <span className="sparkle-icon" style={{ animationDelay: "1.0s" }}>🦄</span>
        </div>
      </div>
    </section>
  );
}
