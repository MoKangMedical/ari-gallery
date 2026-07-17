import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-24 bg-white/30">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-lg tracking-[0.15em] text-[var(--color-text-primary)]">
              Aria<span className="text-[var(--color-accent)]">.</span>
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-xs">
              A collection of sketch watercolor paintings exploring light, nature, texture, and the poetry of everyday moments.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Gallery" },
                { href: "/3d", label: "3D View" },
                { href: "/album", label: "Albums" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-4">Info</h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              137 paintings<br />
              2024 – 2025<br />
              Sketch Watercolor
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)] tracking-[0.05em]">
            © {new Date().getFullYear()} Aria Gallery. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] tracking-[0.05em]">
            艾瑞画展 · 137幅素描淡彩
          </p>
        </div>
      </div>
    </footer>
  );
}
