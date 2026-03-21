'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/events',  label: 'Events' },
  { href: '/visit',   label: 'Visit' },
  { href: '/give',    label: 'Give' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="site-header" style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(248,246,243,0.97)' : '#f8f6f3',
      borderBottom: scrolled ? '1px solid #e4ddd3' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div className="nav-inner">

        {/* ── Logo: image + full name + motto ── */}
        <Link href="/" className="nav-logo">
          <Image
            src="/kyrios-logo.jpg"
            alt="Kyrios Family Church"
            width={46}
            height={46}
            style={{ objectFit: 'contain', borderRadius: '2px', flexShrink: 0 }}
            priority
          />
          <div className="nav-logo-text">
            <span className="nav-logo-name">
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em' }}>KYRIOS</span>
              {' '}
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: '0.02em', fontStyle: 'italic' }}>Family Church</span>
            </span>
            <span className="nav-logo-motto">…life in all its fullness</span>
          </div>
        </Link>

        {/* ── Desktop nav: always visible on large screens ── */}
        <nav className="nav-desktop">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
          <Link href="/give" className="btn-crimson nav-give-btn">Give Now</Link>
        </nav>

        {/* ── Mobile controls: only visible on small screens ── */}
        <div className="nav-mobile-controls">
          <Link href="/give" className="btn-crimson nav-give-mobile">Give</Link>
          <button
            onClick={() => setOpen(!open)}
            className="nav-hamburger"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="nav-drawer">
          <nav className="nav-drawer-inner">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-drawer-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/give"
              className="btn-crimson"
              style={{ marginTop: '8px', alignSelf: 'flex-start', padding: '12px 32px' }}
              onClick={() => setOpen(false)}
            >
              Give Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
