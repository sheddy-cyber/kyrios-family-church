'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, ChevronRight, Clock, MapPin } from 'lucide-react'

const sermons = [
  { id: 1, title: 'When God Sees You',     series: 'The God Who Sees',   speaker: 'Rev. Isaac Daniel',   date: 'March 9, 2025',  duration: '48 min', scripture: 'Genesis 16:13', bg: '#e8e4de' },
  { id: 2, title: 'The Wilderness Season', series: 'The God Who Sees',   speaker: 'Pastor Bisola Daniel',date: 'March 2, 2025',  duration: '42 min', scripture: 'Exodus 3:1-5',  bg: '#f0ebe3' },
  { id: 3, title: 'Unshakeable',           series: 'Roots & Wings',      speaker: 'Rev. Isaac Daniel',   date: 'Feb 23, 2025',   duration: '51 min', scripture: 'Psalm 46:1-3',  bg: '#e4ddd3' },
  { id: 4, title: 'Called by Name',        series: 'Identity in Christ',  speaker: 'Rev. Isaac Daniel',   date: 'Feb 16, 2025',   duration: '38 min', scripture: 'Isaiah 43:1',   bg: '#d8d1c7' },
]

const events = [
  { title: 'Sunday Service',         date: 'Every Sunday',    time: '9:00 AM',    location: 'Golf Estate, Lakowe, Ibeju-Lekki', tag: 'Weekly' },
  { title: 'Wednesday Prayer',       date: 'Every Wednesday', time: '6:30 PM',     location: 'WhatsApp / Zoom',                  tag: 'Weekly' },
  { title: 'Easter Conference',      date: 'April 3',         time: 'Fri 6:00 PM',location: 'Golf Estate, Lakowe, Ibeju-Lekki', tag: 'Coming Up' },
  { title: 'Easter Conference',      date: 'April 4',         time: 'Sat 10:00 AM',location: 'Golf Estate, Lakowe, Ibeju-Lekki',tag: 'Coming Up' },
  { title: 'Easter Conference',      date: 'April 5',         time: 'Sun 9:00 AM', location: 'Golf Estate, Lakowe, Ibeju-Lekki',tag: 'Coming Up' },
]

export default function HomePageClient() {
  const [activeFilter, setActiveFilter] = useState('All')
  const revealRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#141210', minHeight: '92svh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 15% 60%, rgba(139,26,26,0.15) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', pointerEvents: 'none', userSelect: 'none', opacity: 0.03 }}>
          <span className="font-display font-bold" style={{ fontSize: 'clamp(120px, 30vw, 360px)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>KYRIOS</span>
        </div>
        <div className="site-container" style={{ position: 'relative', paddingBottom: '0', paddingTop: '80px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#e05555', marginBottom: '16px', fontFamily: 'var(--font-body)' }}>
            Lakowe, Ibeju-Lekki · Lagos
          </p>
          <h1 className="font-display hero-h1" style={{ color: '#f8f6f3', marginBottom: '20px' }}>
            A Family<br />
            <em style={{ color: '#e05555' }}>Rooted</em> in God
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 17px)', color: '#7c756d', lineHeight: 1.75, maxWidth: '460px', marginBottom: '32px', fontFamily: 'var(--font-body)' }}>
            Every Sunday at 9:00 AM we gather to worship, grow, and serve together. All are welcome at Kyrios Family Church.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
            <Link href="/visit" className="btn-primary">Plan Your Visit <ArrowRight size={13} /></Link>
            <Link href="/sermons" className="btn-outline-light">Watch Sermons <Play size={13} /></Link>
          </div>
        </div>
        <div style={{ position: 'relative', borderTop: '1px solid #2e2a25', background: '#1e1a16' }}>
          <div className="site-container" style={{ paddingTop: '14px', paddingBottom: '14px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={13} style={{ color: '#e05555', flexShrink: 0 }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7c756d', fontFamily: 'var(--font-body)' }}>Sunday Service — 9:00 AM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={13} style={{ color: '#e05555', flexShrink: 0 }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7c756d', fontFamily: 'var(--font-body)' }}>Golf Estate, Lakowe, Ibeju-Lekki</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
              <span style={{ display: 'flex', position: 'relative', width: '8px', height: '8px' }}>
                <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#e05555', opacity: 0.6 }} />
                <span style={{ position: 'relative', width: '8px', height: '8px', borderRadius: '50%', background: '#e05555', display: 'block' }} />
              </span>
              <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e05555', fontFamily: 'var(--font-body)' }}>Every Sunday</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section style={{ background: '#fff' }} className="section-pad">
        <div className="site-container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div ref={addRef} className="reveal">
              <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8b1a1a', fontFamily: 'var(--font-body)' }}>Welcome Home</span>
              <div style={{ width: '40px', height: '2px', background: '#8b1a1a', margin: '12px 0 20px' }} />
              <h2 className="font-display section-h2-lg" style={{ color: '#141210', marginBottom: '16px' }}>
                You Belong<br /><em>Here</em>
              </h2>
              <p style={{ fontSize: '16px', color: '#433e38', lineHeight: 1.8, marginBottom: '12px', fontFamily: 'var(--font-body)' }}>
                Kyrios Family Church is a young, Spirit-filled community nestled in the Golf Estate, Lakowe, Ibeju-Lekki. We are a growing family — small enough that everyone knows your name, and rooted enough that you will grow in faith.
              </p>
              <p style={{ fontSize: '15px', color: '#7c756d', lineHeight: 1.8, marginBottom: '28px', fontFamily: 'var(--font-body)' }}>
                Whether you are visiting for the first time or looking for a spiritual home, there is a seat at our table for you.
              </p>
              <Link href="/about" className="btn-primary">Our Story <ArrowRight size={13} /></Link>
            </div>
            <div ref={addRef} className="reveal stats-grid">
              {[['30+','Members'],['2019','Founded'],['5','Church Groups'],['2','Weekly Gatherings']].map(([n, l]) => (
                <div key={n} style={{ background: '#f8f6f3', padding: 'clamp(28px, 5vw, 44px) clamp(20px, 4vw, 36px)' }}>
                  <div className="font-display font-bold" style={{ fontSize: 'clamp(36px, 8vw, 52px)', lineHeight: 1, color: '#141210', marginBottom: '6px' }}>{n}</div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a09890', fontFamily: 'var(--font-body)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST SERMONS ── */}
      <section style={{ background: '#f0ebe3' }} className="section-pad">
        <div className="site-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8b1a1a', fontFamily: 'var(--font-body)' }}>Messages</span>
              <h2 className="font-display section-h2" style={{ color: '#141210', marginTop: '10px' }}>Latest Sermons</h2>
            </div>
            <Link href="/sermons" style={{ fontSize: '13px', color: '#7c756d', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
              Full Library <ChevronRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '4px' }}>
            {['All','The God Who Sees','Roots & Wings','Identity in Christ'].map(f => (
              <button key={f} className={`filter-tab ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="sermon-grid">
            {sermons.filter(s => activeFilter === 'All' || s.series === activeFilter).map(sermon => (
              <Link key={sermon.id} href={`/sermons/${sermon.id}`} className="sermon-card" style={{ background: '#fff', textDecoration: 'none' }}>
                <div style={{ background: sermon.bg, height: '180px', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
                  <div className="play-btn" style={{ width: '40px', height: '40px' }}>
                    <Play size={14} fill="white" color="white" style={{ marginLeft: '2px' }} />
                  </div>
                </div>
                <div style={{ padding: '16px' }}>
                  <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8b1a1a', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>{sermon.series}</p>
                  <h3 className="font-display hover-color-crimson" style={{ fontSize: '19px', fontWeight: 500, color: '#141210', marginBottom: '4px' }}>{sermon.title}</h3>
                  <p style={{ fontSize: '13px', color: '#7c756d', marginBottom: '2px', fontFamily: 'var(--font-body)' }}>{sermon.speaker}</p>
                  <p style={{ fontSize: '12px', color: '#a09890', fontFamily: 'var(--font-body)' }}>{sermon.date} · {sermon.duration}</p>
                  <p className="font-display italic" style={{ fontSize: '12px', color: '#a09890', marginTop: '2px' }}>{sermon.scripture}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAN YOUR VISIT ── */}
      <section style={{ background: '#fff', position: 'relative', overflow: 'hidden' }} className="section-pad">
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', opacity: 0.5, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 39px,#e4ddd3 39px,#e4ddd3 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#e4ddd3 39px,#e4ddd3 40px)', pointerEvents: 'none' }} />
        <div className="site-container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '540px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8b1a1a', fontFamily: 'var(--font-body)' }}>First Time?</span>
            <div style={{ width: '40px', height: '2px', background: '#8b1a1a', margin: '12px 0 20px' }} />
            <h2 className="font-display section-h2-lg" style={{ color: '#141210', marginBottom: '16px' }}>
              Plan Your<br /><em>First Visit</em>
            </h2>
            <p style={{ fontSize: '16px', color: '#433e38', lineHeight: 1.8, marginBottom: '28px', fontFamily: 'var(--font-body)' }}>
              We would love to welcome you personally. Find out what to expect, where we meet, and how to get to us before you arrive.
            </p>
            <Link href="/visit" className="btn-primary">Plan My Visit <ArrowRight size={13} /></Link>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section style={{ background: '#f8f6f3' }} className="section-pad">
        <div className="site-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8b1a1a', fontFamily: 'var(--font-body)' }}>Calendar</span>
              <h2 className="font-display section-h2" style={{ color: '#141210', marginTop: '10px' }}>Upcoming Events</h2>
            </div>
            <Link href="/events" style={{ fontSize: '13px', color: '#7c756d', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div style={{ borderTop: '1px solid #e4ddd3' }}>
            {events.map((event, i) => (
              <div key={i} className="event-row hover-bg-white" style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ minWidth: '52px', textAlign: 'center', flexShrink: 0 }}>
                    <div className="font-display font-bold" style={{ fontSize: '28px', lineHeight: 1, color: '#141210' }}>
                      {event.date.includes('Every') ? '🗓' : event.date.split(' ')[1]}
                    </div>
                    <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a09890', fontFamily: 'var(--font-body)' }}>
                      {event.date.includes('Every') ? 'Weekly' : event.date.split(' ')[0]}
                    </div>
                  </div>
                  <div style={{ width: '1px', height: '40px', background: '#e4ddd3', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <h3 style={{ fontWeight: 500, color: '#141210', fontSize: '15px', fontFamily: 'var(--font-body)', margin: 0 }}>{event.title}</h3>
                      <span style={{ fontSize: '10px', padding: '2px 8px', background: '#f0ebe3', color: '#7c756d', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>{event.tag}</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '12px', color: '#a09890', fontFamily: 'var(--font-body)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={11} /> {event.time}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={11} /> {event.location}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight size={16} style={{ color: '#c4beb5', flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PASTORAL TEAM ── */}
      <section style={{ background: '#fff' }} className="section-pad">
        <div className="site-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8b1a1a', fontFamily: 'var(--font-body)' }}>Our Ministers</span>
            <h2 className="font-display section-h2" style={{ color: '#141210', marginTop: '10px' }}>Meet Our Leadership</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '28px' }}>
            {[
              { name: 'Rev. Isaac Daniel',    role: 'Founder & Senior Pastor', initials: 'ID' },
              { name: 'Pastor Bisola Daniel', role: 'Pastor & Choir Lead',      initials: 'BD' },
              { name: 'Bro. Shedrach Idike',  role: 'Asst. Music Head',         initials: 'SI' },
              { name: 'Sis. Jane Idike',      role: "Children's Dept. Head",    initials: 'JI' },
            ].map(l => (
              <div key={l.name} style={{ textAlign: 'center' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#f0ebe3', border: '1px solid #e4ddd3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#433e38', letterSpacing: '0.04em' }}>{l.initials}</div>
                <h3 style={{ fontWeight: 500, color: '#141210', fontSize: '14px', marginBottom: '4px', fontFamily: 'var(--font-body)' }}>{l.name}</h3>
                <p style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b1a1a', fontFamily: 'var(--font-body)' }}>{l.role}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/about#our-ministers" className="btn-outline">Full Team <ArrowRight size={13} /></Link>
          </div>
        </div>
      </section>

      {/* ── GIVE ── */}
      <section style={{ background: '#141210' }} className="section-pad">
        <div className="site-container">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#7c756d', fontFamily: 'var(--font-body)' }}>Generosity</span>
              <div style={{ width: '40px', height: '2px', background: '#e05555', margin: '12px 0 20px' }} />
              <h2 className="font-display section-h2-lg" style={{ color: '#f8f6f3', marginBottom: '16px' }}>
                Give &amp; <em>Build With Us</em>
              </h2>
              <p style={{ fontSize: '16px', color: '#7c756d', lineHeight: 1.8, marginBottom: '28px', fontFamily: 'var(--font-body)' }}>
                We have recently acquired land to begin building our own place of worship. Your generosity will help us lay the first stone. Every gift, no matter the size, is a seed into something eternal.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link href="/give" className="btn-crimson">Give Online <ArrowRight size={13} /></Link>
                <Link href="/give" className="btn-outline-light">Bank Transfer</Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Building Fund',   desc: 'Help us build our permanent place of worship on our newly acquired land' },
                { label: 'General Giving',  desc: "Support the church's weekly operations and ongoing ministry" },
                { label: 'Welfare Support', desc: 'Contribute to supporting members of our community in need' },
              ].map(g => (
                <div key={g.label} className="hover-border-crimson" style={{ border: '1px solid #2e2a25', padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <h3 style={{ fontWeight: 500, color: '#f8f6f3', fontSize: '15px', fontFamily: 'var(--font-body)', margin: 0 }}>{g.label}</h3>
                    <ArrowRight size={14} style={{ color: '#433e38', flexShrink: 0 }} />
                  </div>
                  <p style={{ fontSize: '13px', color: '#7c756d', fontFamily: 'var(--font-body)' }}>{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRAYER REQUEST ── */}
      <section style={{ background: '#f0ebe3' }} className="section-pad">
        <div className="site-container" style={{ maxWidth: '640px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8b1a1a', fontFamily: 'var(--font-body)' }}>Prayer</span>
            <div style={{ width: '40px', height: '2px', background: '#8b1a1a', margin: '12px auto 20px' }} />
            <h2 className="font-display section-h2" style={{ color: '#141210', marginBottom: '12px' }}>We Pray With You</h2>
            <p style={{ fontSize: '16px', color: '#433e38', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
              Submit your prayer request and our pastoral team will intercede on your behalf.
            </p>
          </div>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="form-two-col">
              <input type="text"  placeholder="Your Name"     style={{ width: '100%', border: '1px solid #c4beb5', background: '#fff', padding: '12px 14px', fontSize: '14px', fontFamily: 'var(--font-body)' }} />
              <input type="email" placeholder="Email Address" style={{ width: '100%', border: '1px solid #c4beb5', background: '#fff', padding: '12px 14px', fontSize: '14px', fontFamily: 'var(--font-body)' }} />
            </div>
            <textarea rows={5} placeholder="Share your prayer request…" style={{ width: '100%', border: '1px solid #c4beb5', background: '#fff', padding: '12px 14px', fontSize: '14px', fontFamily: 'var(--font-body)', resize: 'none' }} />
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>
              Submit Prayer Request
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp float */}
      <a href="https://wa.me/2348060046003?text=Hi!%20I%20want%20to%20know%20more%20about%20Kyrios%20Family%20Church"
        target="_blank" rel="noreferrer" className="wa-float">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="wa-label">Chat with Us</span>
      </a>
    </>
  )
}
