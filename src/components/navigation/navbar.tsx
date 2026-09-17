"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "/work", label: "Work" },
  { href: "/software", label: "Software" },
  { href: "/ai", label: "AI" },
  { href: "/robotics", label: "Robotics" },
  { href: "/engineering", label: "Engineering" },
  { href: "/build-log", label: "Build Log" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[padding,background-color] duration-300 ease-engineered ${
        scrolled ? "border-border bg-bg/85 backdrop-blur py-2" : "border-transparent bg-bg py-4"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5">
        <Link href="/" className="font-display text-sm font-semibold tracking-tight focus-ring">
          JAIDEEP
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="focus-ring hidden rounded border border-border px-2 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent md:inline-flex"
            aria-label="Open command palette"
          >
            ⌘K
          </button>
          <ThemeToggle />
          <Link
            href="/contact"
            className="focus-ring hidden rounded border border-border px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent md:inline-block"
          >
            Let&apos;s talk
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="focus-ring rounded border border-border p-2 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <span className="block h-0.5 w-4 bg-ink" />
            <span className="mt-1 block h-0.5 w-4 bg-ink" />
            <span className="mt-1 block h-0.5 w-4 bg-ink" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="flex flex-col gap-1 border-t border-border px-5 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="focus-ring rounded px-2 py-2 text-sm text-muted hover:bg-surface hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="focus-ring mt-2 rounded border border-border px-3 py-2 text-center text-sm hover:border-accent hover:text-accent"
          >
            Let&apos;s talk
          </Link>
        </nav>
      )}
    </header>
  );
}
