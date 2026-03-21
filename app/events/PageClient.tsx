'use client'
import { useState } from 'react'
import { Clock, MapPin, ArrowRight, ChevronRight } from 'lucide-react'

const C = { crimson: '#8b1a1a', crimsonLight: '#e05555', ink: '#141210', inkSoft: '#433e38', inkMuted: '#7c756d', stone: '#c4beb5', border: '#e4ddd3', parchment: '#f0ebe3', canvas: '#f8f6f3', white: '#fff' }

const events = [
  {
    id: 1, title: 'Sunday Service', category: 'Weekly', date: 'Every Sunday', time: '9:00 AM',
    location: 'Golf Estate, Lakowe, Ibeju-Lekki, Lagos',
    description: 'Our weekly gathering — Spirit-led worship, Bible-based preaching, and genuine community. Children\'s Department runs concurrently. All are welcome.',
    tag: 'Recurring', register: false,
  },
  {
    id: 2, title: 'Easter Conference — Day 1', category: 'Special', date: 'Friday, April 3', time: '6:00 PM',
    location: 'Golf Estate, Lakowe, Ibeju-Lekki, Lagos',
    description: 'The Easter Conference begins on Good Friday evening with a service of reflection, worship, and the Word. Come prepare your heart for the resurrection celebration.',
    tag: 'Coming Up', register: false,
  },
  {
    id: 3, title: 'Easter Conference — Day 2', category: 'Special', date: 'Saturday, April 4', time: '10:00 AM',
    location: 'Golf Estate, Lakowe, Ibeju-Lekki, Lagos',
    description: 'Day 2 of our Easter Conference — a full morning of praise, teaching, and prayer. Expect a powerful move of God as we journey toward resurrection Sunday.',
    tag: 'Coming Up', register: false,
  },
  {
    id: 4, title: 'Easter Conference — Day 3 (Resurrection Sunday)', category: 'Special', date: 'Sunday, April 5', time: '9:00 AM',
    location: 'Golf Estate, Lakowe, Ibeju-Lekki, Lagos',
    description: 'Resurrection Sunday — the pinnacle of the Easter Conference. Join us as we celebrate the risen Christ with jubilant worship and a triumphant message of hope.',
    tag: 'Coming Up', register: false,
  },
  {
    id: 5, title: 'Wednesday Online Service', category: 'Weekly', date: 'Every Wednesday', time: '6:30 PM',
    location: 'WhatsApp Community Group',
    description: 'Every Wednesday we hold an online prayer service via our WhatsApp community group. A midweek moment to bring your requests to God, pray together, and stay spiritually connected to the family — wherever you are.',
    tag: 'Recurring', register: false,
  },
]

const categories = ['All', 'Weekly', 'Special']

export default function EventsPageClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = events.filter(e => activeCategory === 'All' || e.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="section-pad" style={{ background: C.ink, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pointerEvents: 'none', userSelect: 'none' as const }}>
          <span className="font-display font-bold" style={{ fontSize: 'clamp(60px, 13vw, 220px)', color: '#fff', paddingRight: '5%' }}>EVENTS</span>
        </div>
        <div className="site-container" style={{ position: 'relative' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimsonLight, fontFamily: 'var(--font-body)' }}>What's On</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 300, color: '#f8f6f3', margin: '14px 0 16px', lineHeight: 1.05 }}>Upcoming <em>Events</em></h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: C.inkMuted, maxWidth: '460px', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
            From our weekly Sunday service to special conferences — here is what's happening at Kyrios Family Church.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}` }}>
        <div className="site-container" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <div className="filter-tabs">
            {categories.map(c => (
              <button key={c} className={`filter-tab ${activeCategory === c ? 'active' : ''}`} onClick={() => setActiveCategory(c)}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Events */}
      <section style={{ background: C.white, paddingTop: '32px', paddingBottom: '64px' }}>
        <div className="site-container" style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
          {filtered.map(event => (
            <div key={event.id} className="hover-border-stone" style={{ border: `1px solid ${C.border}`, padding: 'clamp(20px, 4vw, 36px)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' as const }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>{event.category}</span>
                  <h3 className="font-display" style={{ fontSize: 'clamp(19px, 3.5vw, 26px)', fontWeight: 500, color: C.ink, marginTop: '4px' }}>{event.title}</h3>
                </div>
                <span style={{ fontSize: '10px', padding: '4px 10px', background: C.ink, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' as const, fontFamily: 'var(--font-body)', flexShrink: 0, whiteSpace: 'nowrap' as const }}>{event.tag}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '16px', marginBottom: '12px' }}>
                <p className="font-display" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', color: C.inkSoft }}>{event.date}</p>
                <span style={{ fontSize: '13px', color: C.inkMuted, display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-body)' }}><Clock size={12} />{event.time}</span>
                <span style={{ fontSize: '13px', color: C.inkMuted, display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-body)' }}><MapPin size={12} />{event.location}</span>
              </div>
              <p style={{ fontSize: '14px', color: C.inkMuted, lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad" style={{ background: C.ink, textAlign: 'center' }}>
        <div className="site-container" style={{ maxWidth: '520px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimsonLight, fontFamily: 'var(--font-body)' }}>Stay Updated</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 300, color: '#f8f6f3', margin: '14px 0' }}>Never Miss an Event</h2>
          <p style={{ fontSize: '15px', color: C.inkMuted, lineHeight: 1.8, marginBottom: '24px', fontFamily: 'var(--font-body)' }}>Get updates on services, events, and announcements delivered to your inbox.</p>
          <form style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' as const }} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address"
              style={{ flex: '1 1 200px', background: '#2e2a25', border: '1px solid #433e38', color: '#f8f6f3', padding: '12px 16px', fontSize: '13px', fontFamily: 'var(--font-body)' }} />
            <button type="submit" className="btn-crimson" style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Subscribe <ChevronRight size={13} />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
