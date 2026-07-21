"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/visit", label: "Visit" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="site-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Background layer for the header to avoid nested backdrop-filter bugs */}
      <div 
        className={scrolled ? 'glass-panel' : ''}
        style={{
          position: "absolute",
          inset: 0,
          opacity: open ? 0 : 1,
          background: scrolled ? undefined : "transparent",
          borderBottom: scrolled ? undefined : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />
      
      <div className="nav-inner" style={{ position: "relative", zIndex: 100 }}>
        {/* ── Logo: image + full name + motto ── */}
        <Link href="/" className="nav-logo">
          <Image
            src="/kyrios-logo.png"
            alt="Kyrios Family Church"
            width={46}
            height={46}
            style={{ objectFit: "contain", borderRadius: "2px", flexShrink: 0 }}
            priority
          />
          <div className="nav-logo-text">
            <span className="nav-logo-name">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                KYRIOS
              </span>{" "}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  fontStyle: "italic",
                }}
              >
                Family Church
              </span>
            </span>
            <span className="nav-logo-motto">…life in all its fullness</span>
          </div>
        </Link>

        {/* ── Desktop nav: always visible on large screens ── */}
        <nav className="nav-desktop">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${isActive ? " active" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/give" className="btn-crimson nav-give-btn">
            Give Now
          </Link>
        </nav>

        {/* ── Mobile controls: only visible on small screens ── */}
        <div className="nav-mobile-controls">
          <Link href="/give" className="btn-crimson nav-give-mobile">
            Give
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="nav-hamburger"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`nav-drawer-overlay ${open ? "open" : ""}`}>
        <nav className="nav-drawer-inner">
          {links.map((l, index) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-drawer-link${isActive ? " active" : ""}`}
                style={{ transitionDelay: open ? `${index * 50}ms` : '0ms' }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/give"
            className="btn-crimson nav-drawer-btn"
            style={{
              transitionDelay: open ? `${links.length * 50}ms` : '0ms',
            }}
            onClick={() => setOpen(false)}
          >
            Give Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
