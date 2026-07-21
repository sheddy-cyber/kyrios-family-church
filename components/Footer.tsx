import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#141210', color: '#c4beb5' }}>
      <div className="site-container" style={{ paddingTop: '56px', paddingBottom: '40px' }}>
        <div className="footer-grid">

          {/* Brand — logo + full name + motto + socials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Image
                src="/kyrios-logo.png"
                alt="Kyrios Family Church"
                width={52}
                height={52}
                style={{ objectFit: 'contain', borderRadius: '2px', flexShrink: 0 }}
              />
              <div style={{ lineHeight: 1.3 }}>
                {/* Full name, matching navbar treatment */}
                <div>
                  <span className="font-display font-bold" style={{ fontSize: '20px', letterSpacing: '0.06em', color: '#fff' }}>KYRIOS</span>
                  {' '}
                  <span className="font-display" style={{ fontSize: '20px', letterSpacing: '0.02em', color: '#fff', fontWeight: 400, fontStyle: 'italic' }}>Family Church</span>
                </div>
                <div className="font-display italic" style={{ fontSize: '12px', color: '#7c756d', letterSpacing: '0.02em', marginTop: '3px' }}>
                  …life in all its fullness
                </div>
              </div>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#7c756d', maxWidth: '280px', fontFamily: 'var(--font-body)', marginBottom: '20px' }}>
              A growing Spirit-filled community in Golf Estate, Lakowe, Ibeju-Lekki, Lagos — rooted in faith and reaching for life in all its fullness.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                ['f',  'https://facebook.com'],
                ['ig', 'https://instagram.com'],
                ['yt', 'https://youtube.com'],
                ['wa', 'https://wa.me/2348060046003'],
              ].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="footer-social">{label}</a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#433e38', marginBottom: '16px', fontFamily: 'var(--font-body)' }}>
              Navigate
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/sermons', 'Sermons'],
                ['/events', 'Events'],
                ['/visit', 'Plan a Visit'],
                ['/give', 'Give'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#433e38', marginBottom: '16px', fontFamily: 'var(--font-body)' }}>
              Find Us
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#7c756d', fontFamily: 'var(--font-body)' }}>
              <li>Golf Estate, Lakowe</li>
              <li>Ibeju-Lekki, Lagos, Nigeria</li>
              <li style={{ paddingTop: '8px' }}>
                <span style={{ color: '#433e38' }}>Sunday Service: </span>9:00 AM
              </li>
              <li style={{ paddingTop: '8px' }}>
                <a href="tel:+2348060046003" className="footer-link" style={{ transition: 'opacity 0.2s ease', opacity: 0.7 }}>0806 004 6003</a>
              </li>
              <li>
                <a href="mailto:hello@kyriosfamily.org" className="footer-link" style={{ transition: 'opacity 0.2s ease', opacity: 0.7 }}>hello@kyriosfamily.org</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #2e2a25', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <p style={{ fontSize: '12px', color: '#433e38', fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} Kyrios Family Church. All rights reserved.
          </p>
          <p className="font-display italic" style={{ fontSize: '13px', color: '#433e38' }}>
            "For the Lord your God is in your midst" — Zephaniah 3:17
          </p>
        </div>
      </div>
    </footer>
  )
}
