"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Gallery" },
  { href: "/3d", label: "3D" },
  { href: "/album", label: "Albums" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (window.scrollY > 60) setScrolled(true);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled || !isHome ? "nav-scrolled" : ""}`}
      style={!scrolled && isHome ? { color: "white" } : {}}>
      <Link href="/" className="nav-logo"
        style={{ color: !scrolled && isHome ? "white" : "var(--color-text-primary)" }}>
        Aria<span style={{ color: "var(--color-accent)" }}>.</span>
      </Link>
      <div className="nav-links">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link key={l.href} href={l.href}
              className={`nav-link ${active ? "active" : ""}`}
              style={{ color: !scrolled && isHome ? "rgba(255,255,255,0.8)" : undefined }}>
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
