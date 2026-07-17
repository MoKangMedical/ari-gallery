export default function AboutPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "160px 40px 80px" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 400, marginBottom: "0.5rem" }}>About Aria</h1>
      <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "3rem" }}>Artist & Visual Explorer</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", marginBottom: "4rem" }}>
        <div style={{ aspectRatio: "3/4", background: "var(--color-bg-elevated)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "6rem", color: "var(--color-text-muted)", opacity: 0.2 }}>A</span>
        </div>
        <div style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Aria is a visual artist whose work explores the intersection of light, texture, and time. Using the restrained language of sketch watercolor, she captures fleeting moments — the way morning fog softens a mountainside, the particular warmth of afternoon light on an old wall, the stillness of water before a storm.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Her practice blends Eastern aesthetics of restraint and negative space with a keen sensitivity to natural light. Each painting is a page from a visual diary, documenting not just what she sees, but the temperature, mood, and quiet drama of a specific moment.
          </p>
          <p>
            In 2025, Aria completed 119 paintings in a burst of focused creation, developing her signature approach: working in series, returning to the same subject — a stone, a pool of water, a hillside — under different conditions of light and season.
          </p>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "3rem 0", marginBottom: "4rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontStyle: "italic", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
          「I don't paint light itself — I paint what light touches, and what it leaves behind in shadow.」
        </p>
      </div>

      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, marginBottom: "1.5rem" }}>Timeline</h2>
      {[
        { year: "2025", text: "Burst of creation — 119 sketch watercolor works completed, developing signature series-based approach." },
        { year: "2024", text: "First 18 works — exploring light and nature as primary themes." },
      ].map((item) => (
        <div key={item.year} style={{ display: "flex", gap: "40px", padding: "16px 0", borderBottom: "1px solid var(--color-border)", alignItems: "baseline" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 500, minWidth: "40px" }}>{item.year}</span>
          <span style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
