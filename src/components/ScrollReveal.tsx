"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);

    // Fallback for when IntersectionObserver doesn't fire
    const timeout = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      }
    }, 200);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
