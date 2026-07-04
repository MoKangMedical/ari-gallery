"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "画廊", en: "Gallery", icon: "🏰" },
  { href: "/album", label: "专辑", en: "Albums", icon: "👑" },
  { href: "/about", label: "关于 Ari", en: "About", icon: "💕" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-glass sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl sparkle-icon">👑</span>
            <span className="font-display text-lg tracking-wide text-[var(--color-text-primary)]">
              <span className="princess-text font-semibold">Aria&apos;s Gallery</span>
            </span>
            <span className="text-lg sparkle-icon">✨</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    isActive
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-glow)] font-medium"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(236,72,153,0.04)]"
                  }`}
                >
                  <span className="mr-1">{link.icon}</span>
                  <span className="hidden lg:inline">{link.en}</span>
                  <span className="lg:hidden">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--color-border)]">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 text-sm transition-colors rounded-full mx-2 mb-1 ${
                    isActive
                      ? "text-[var(--color-accent)] bg-[var(--color-accent-glow)] font-medium"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {link.icon} {link.en}
                  <span className="ml-2 text-xs opacity-50">{link.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
