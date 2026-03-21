'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Baby, Coffee, Music, BookOpen } from 'lucide-react'

const C = { crimson: '#8b1a1a', crimsonLight: '#e05555', ink: '#141210', inkSoft: '#433e38', inkMuted: '#7c756d', stone: '#c4beb5', border: '#e4ddd3', parchment: '#f0ebe3', canvas: '#f8f6f3', white: '#fff' }

const faqs = [
  {
    q: 'What should I wear?',
    a: "Come as you are — literally. Some people dress up, some come casual. There's no dress code at Kyrios. We just want you comfortable and present.",
  },
  {
    q: 'Do I need to bring a Bible?',
    a: "Bringing a Bible is encouraged — it will help you follow along with the message. But if you don't have one, don't let that stop you from coming. We will make sure you are taken care of.",
  },
  {
    q: 'What about my children?',
    a: "Children are very welcome! We run a Children's Department during the service, so your little ones will be engaged, safe, and learning in an age-appropriate environment.",
  },
  {
    q: 'Will I be asked to give money?',
    a: "We receive an offering during the service, but it is never mandatory. As a first-time guest, please feel no pressure at all. Come, receive, and simply enjoy the service.",
  },
  {
    q: 'How do I connect with the community?',
    a: "After the service, please don't rush off — that's when the real community happens. Come say hello, introduce yourself to our leadership, and we'll make sure you feel at home. We also have a WhatsApp community group where we stay connected, share the Word, and fellowship through the week.",
  },
]

export default function VisitPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="section-pad" style={{ background: C.ink, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.035, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pointerEvents: 'none', userSelect: 'none' as const }}>
          <span className="font-display font-bold" style={{ fontSize: 'clamp(80px, 16vw, 260px)', color: '#fff', paddingRight: '5%' }}>VISIT</span>
        </div>
        <div className="site-container" style={{ position: 'relative' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimsonLight, fontFamily: 'var(--font-body)' }}>First Time?</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 300, color: '#f8f6f3', margin: '14px 0 18px', lineHeight: 1.05 }}>
            Plan Your <em>Visit</em>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: C.inkMuted, maxWidth: '480px', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
            Whether it's your first Sunday or your fiftieth, we want you to feel at home the moment you walk through the door.
          </p>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-pad" style={{ background: C.white }}>
        <div className="site-container">
          <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>Join Us</span>
          <div style={{ width: '40px', height: '2px', background: C.crimson, margin: '12px 0 20px' }} />
          <h2 className="font-display section-h2" style={{ color: C.ink, marginBottom: '32px' }}>Service Times</h2>
          <div className="service-grid">
            {[
              { day: 'Sunday',    time: '9:00 AM',  label: 'Sunday Service', note: 'Our main weekly gathering — worship, the Word, and fellowship. All are welcome.', highlight: true },
              { day: 'Wednesday', time: '6:30 PM',   label: 'Midweek Prayer', note: 'Every Wednesday we hold an online prayer service via our WhatsApp community group. A midweek anchor for your soul.', highlight: false },
              { day: 'Special',   time: 'TBA',      label: 'Programmes',     note: 'We run conferences and special services periodically. Watch this space.',             highlight: false },
            ].map(s => (
              <div key={s.label} style={{ padding: 'clamp(28px, 4vw, 40px)', background: s.highlight ? C.ink : C.canvas, border: `1px solid ${s.highlight ? C.ink : C.border}` }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: s.highlight ? C.crimsonLight : C.crimson, marginBottom: '10px', fontFamily: 'var(--font-body)' }}>{s.day}</p>
                <div className="font-display font-bold" style={{ fontSize: 'clamp(32px, 6vw, 52px)', lineHeight: 1, color: s.highlight ? '#f8f6f3' : C.ink, marginBottom: '6px' }}>{s.time}</div>
                <p style={{ fontWeight: 500, color: s.highlight ? '#f8f6f3' : C.ink, marginBottom: '8px', fontFamily: 'var(--font-body)', fontSize: '15px' }}>{s.label}</p>
                <p style={{ fontSize: '13px', color: s.highlight ? '#7c756d' : C.inkMuted, lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>{s.note}</p>
                {s.highlight && <span style={{ display: 'inline-block', marginTop: '14px', fontSize: '10px', padding: '4px 12px', background: C.crimson, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' as const, fontFamily: 'var(--font-body)' }}>Every Sunday</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-pad" style={{ background: C.parchment }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>First Timers</span>
            <h2 className="font-display section-h2" style={{ color: C.ink, marginTop: '10px' }}>What to Expect</h2>
          </div>
          <div className="expect-grid">
            {[
              { icon: <Music size={20} />,    title: 'Worship',    desc: 'Spirit-led praise and worship music that sets the tone for an authentic encounter with God.' },
              { icon: <BookOpen size={20} />, title: 'The Word',   desc: "Clear, grounded, Bible-based teaching from Rev. Isaac Daniel and the pastoral team. Bring your Bible — we don't have a projector yet!" },
              { icon: <Baby size={20} />,     title: 'Children',   desc: "Our Children's Department runs during the service — a safe, fun, faith-filled space for your little ones." },
              { icon: <Coffee size={20} />,   title: 'Fellowship', desc: "After the service, we linger. That's where the real community happens. Come say hello — no one leaves a stranger." },
            ].map(item => (
              <div key={item.title} style={{ background: C.white, padding: 'clamp(24px, 4vw, 36px)', border: `1px solid ${C.border}` }}>
                <div style={{ color: C.inkMuted, marginBottom: '16px' }}>{item.icon}</div>
                <h3 className="font-display" style={{ fontSize: 'clamp(18px, 3vw, 22px)', color: C.ink, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: C.inkMuted, lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-pad" style={{ background: C.white }}>
        <div className="site-container">
          <div className="location-grid">
            <div>
              <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>Find Us</span>
              <div style={{ width: '40px', height: '2px', background: C.crimson, margin: '12px 0 24px' }} />
              <h2 className="font-display section-h2" style={{ color: C.ink, marginBottom: '32px' }}>Location</h2>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '20px' }}>
                {[
                  { icon: <MapPin size={17} />, label: 'Address',      lines: ['Golf Estate, Lakowe', 'Ibeju-Lekki, Lagos, Nigeria'] },
                  { icon: <Clock size={17} />,  label: 'Service Time', lines: ['Sunday: 9:00 AM'] },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ color: C.crimson, marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <p style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: C.stone, marginBottom: '4px', fontFamily: 'var(--font-body)' }}>{item.label}</p>
                      {item.lines.map((line, i) => <p key={i} style={{ fontSize: '15px', color: C.inkSoft, lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>{line}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://maps.google.com/?q=Golf+Estate+Lakowe+Ibeju-Lekki+Lagos" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>
                Get Directions <ArrowRight size={13} />
              </a>
            </div>
            <div style={{ minHeight: '320px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964!2d3.7!3d6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnMDAuMCJOIDPCsDQyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
                width="100%" height="100%" style={{ border: 0, display: 'block', minHeight: '320px' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kyrios Family Church Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — interactive +/- toggle */}
      <section className="section-pad" style={{ background: C.canvas }}>
        <div className="site-container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>Common Questions</span>
            <h2 className="font-display section-h2" style={{ color: C.ink, marginTop: '10px' }}>You May Be Wondering…</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} style={{ background: C.white, border: `1px solid ${isOpen ? C.crimson : C.border}`, transition: 'border-color 0.2s' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: 'clamp(14px, 3vw, 20px) clamp(16px, 3vw, 24px)', cursor: 'pointer', background: 'none', border: 'none', textAlign: 'left' as const, gap: '16px' }}
                  >
                    <span style={{ fontWeight: 500, color: C.ink, fontSize: '15px', fontFamily: 'var(--font-body)' }}>{faq.q}</span>
                    {/* Toggles between + and − */}
                    <span className="font-display" style={{ fontSize: '26px', color: C.crimson, flexShrink: 0, lineHeight: 1, transition: 'transform 0.2s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', display: 'inline-block' }}>+</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px) clamp(14px, 3vw, 20px)', fontSize: '14px', color: C.inkMuted, lineHeight: 1.8, borderTop: `1px solid ${C.border}`, fontFamily: 'var(--font-body)' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: C.ink, textAlign: 'center' }}>
        <div className="site-container" style={{ maxWidth: '520px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimsonLight, fontFamily: 'var(--font-body)' }}>See You Sunday</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 300, color: '#f8f6f3', margin: '14px 0' }}>
            We Can't Wait<br /><em>To Meet You</em>
          </h2>
          <p style={{ fontSize: '16px', color: C.inkMuted, lineHeight: 1.8, marginBottom: '32px', fontFamily: 'var(--font-body)' }}>Have a question before you come? Reach out — we respond quickly.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '12px', justifyContent: 'center' }}>
            <a href="https://wa.me/2348060046003" target="_blank" rel="noreferrer" className="btn-crimson">WhatsApp Us <ArrowRight size={13} /></a>
            <Link href="/contact" className="btn-outline-light">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  )
}
