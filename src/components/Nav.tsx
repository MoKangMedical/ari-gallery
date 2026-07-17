"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Gallery", zh: "画廊" },
  { href: "/3d", label: "3D View", zh: "3D" },
  { href: "/album", label: "Albums", zh: "专辑" },
  { href: "/about", label: "About", zh: "关于" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav-glass sticky top-0 z-50 ${scrolled ? "scrolled" : ""}`}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-display text-lg tracking-[0.15em] text-[var(--color-text-primary)] uppercase">
              Aria<span className="text-[var(--color-accent)]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm tracking-[0.05em] transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--color-text-primary)] font-medium"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-[var(--color-accent)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <>
                  <path d="M3 6h14M3 10h14M3 14h14" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 border-t border-[var(--color-border)]">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-2 py-3 text-sm tracking-[0.05em] transition-colors ${
                    isActive
                      ? "text-[var(--color-text-primary)] font-medium"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {link.label}
                  <span className="ml-2 text-xs text-[var(--color-text-muted)]">{link.zh}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
