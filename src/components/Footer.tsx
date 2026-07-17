import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo" style={{ marginBottom: "1rem" }}>
            Aria<span style={{ color: "var(--color-accent)" }}>.</span>
          </div>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.6, maxWidth: "320px", marginBottom: "1rem" }}>
            A collection of 137 sketch watercolor paintings exploring light, nature, texture, and the quiet poetry of everyday moments.
          </p>
        </div>
        <div>
          <h4>Navigate</h4>
          <Link href="/">Gallery</Link>
          <Link href="/3d">3D View</Link>
          <Link href="/album">Albums</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <h4>Collection</h4>
          <p style={{ fontSize: "0.85rem" }}>137 Paintings</p>
          <p style={{ fontSize: "0.85rem", marginTop: "4px" }}>2024 – 2025</p>
          <p style={{ fontSize: "0.85rem", marginTop: "4px" }}>Sketch Watercolor</p>
        </div>
      </div>
      <div className="footer-bottom" style={{ maxWidth: "1600px", margin: "60px auto 0" }}>
        <span>© {new Date().getFullYear()} Aria Gallery</span>
        <span>艾瑞画展</span>
      </div>
    </footer>
  );
}
