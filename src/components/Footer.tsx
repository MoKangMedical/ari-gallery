import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-20 bg-white/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">👑</span>
            <span className="font-display text-sm tracking-wide text-[var(--color-text-secondary)]">
              Aria&apos;s Gallery
            </span>
            <span className="text-lg">✨</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
            <Link
              href="/"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              🏰 Gallery
            </Link>
            <Link
              href="/album"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              👑 Albums
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              💕 About
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Aria&apos;s Gallery 💖
          </p>
        </div>
      </div>
    </footer>
  );
}
