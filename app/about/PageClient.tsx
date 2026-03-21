'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const C = { crimson: '#8b1a1a', crimsonLight: '#e05555', ink: '#141210', inkSoft: '#433e38', inkMuted: '#7c756d', stone: '#c4beb5', border: '#e4ddd3', parchment: '#f0ebe3', canvas: '#f8f6f3', white: '#fff' }

const team = [
  { name: 'Rev. Isaac Daniel',    role: 'Founder & Senior Pastor',   bio: 'Rev. Isaac founded Kyrios Family Church in 2019 with a burning passion to raise a people who walk in the fullness of life that Christ offers. He leads with humility, vision, and deep love for the Word.', initials: 'ID' },
  { name: 'Pastor Bisola Daniel', role: 'Pastor & Head of Choir',     bio: 'Pastor Bisola serves as co-pastor and leads the worship team, creating an atmosphere of genuine encounter with God each week. Her warmth and care are the heartbeat of the congregation.', initials: 'BD' },
  { name: 'Bro. Shedrach Idike',  role: 'Asst. Music Head',           bio: 'Shedrach supports the music ministry with creativity and dedication, helping to develop the sound and culture of worship at Kyrios Family Church.', initials: 'SI' },
  { name: 'Sis. Jane Idike',      role: "Head, Children's Dept.",     bio: "Jane leads the children's department with a heart for the next generation, building a safe, nurturing environment where young ones discover their identity in Christ.", initials: 'JI' },
  { name: 'Bro. Favour',            role: 'Videography',                bio: 'Bro. Favour faithfully records every service, ensuring that messages reach beyond the four walls of the church to those who could not be present in person.', initials: 'BF' },
]

const beliefs = [
  { title: 'Scripture',   body: 'We believe the Bible is the inspired, inerrant Word of God — our supreme authority in all matters of faith and life.',                                       scripture: '2 Timothy 3:16–17 · 2 Peter 1:20–21' },
  { title: 'The Trinity', body: 'We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit, equal in nature, distinct in person.',                           scripture: 'Matthew 28:19 · 2 Corinthians 13:14' },
  { title: 'Salvation',   body: 'We believe salvation is by grace alone, through faith alone, in Christ alone — a free gift received by all who repent and believe.',                       scripture: 'Ephesians 2:8–9 · John 3:16 · Romans 10:9' },
  { title: 'Holy Spirit', body: 'We believe in the present-day ministry of the Holy Spirit, who indwells, empowers, and gifts every believer for life and service.',                        scripture: 'Acts 1:8 · 1 Corinthians 12:7–11 · Galatians 5:22–23' },
  { title: 'The Church',  body: 'We believe the Church is the body of Christ, called to make disciples of all nations through worship, community, mission, and service.',                   scripture: 'Matthew 16:18 · Ephesians 1:22–23 · Matthew 28:19–20' },
  { title: 'Eternity',    body: 'We believe in the bodily resurrection of the dead — eternal life with God for all who believe, and eternal separation for those who reject Him.',          scripture: 'John 11:25 · 1 Corinthians 15:51–57 · Revelation 20:11–15' },
]

export default function AboutPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="section-pad" style={{ background: C.ink, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pointerEvents: 'none', userSelect: 'none' as const, overflow: 'hidden' }}>
          <span className="font-display font-bold" style={{ fontSize: 'clamp(100px, 18vw, 240px)', color: '#fff', letterSpacing: '-0.02em', paddingRight: '5%' }}>KFC</span>
        </div>
        <div className="site-container" style={{ position: 'relative' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimsonLight, fontFamily: 'var(--font-body)' }}>Who We Are</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 300, color: '#f8f6f3', margin: '14px 0 18px', lineHeight: 1.05 }}>
            Our Story &amp; <em>Mission</em>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: C.inkMuted, maxWidth: '520px', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
            A young, growing church in Lakowe, Ibeju-Lekki — planted in faith, watered by community, and flourishing by the grace of God.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-pad" style={{ background: C.white }}>
        <div className="site-container">
          <div className="about-mission">
            {[
              { label: 'Our Mission', content: 'To glorify God by making disciples who love God, love people, and serve the world — beginning right here in Lakowe and spreading outward.' },
              { label: 'Our Vision',  content: 'A church where every person — young or old, new or seasoned — discovers their God-given identity, grows in faith, and becomes an agent of transformation in their community.' },
              { label: 'Our Values',  content: "Word-centred. Spirit-empowered. Family-hearted. We are a community that takes the Bible seriously, depends on the Holy Spirit fully, and treats every member like family." },
            ].map(item => (
              <div key={item.label}>
                <div style={{ width: '40px', height: '2px', background: C.crimson, marginBottom: '16px' }} />
                <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>{item.label}</span>
                <p style={{ fontSize: '15px', color: C.inkSoft, lineHeight: 1.8, marginTop: '10px', fontFamily: 'var(--font-body)' }}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad" style={{ background: C.parchment }}>
        <div className="site-container" style={{ maxWidth: '800px' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 300, color: C.ink, textAlign: 'center', marginBottom: '48px' }}>Our Journey</h2>
          <div>
            {[
              { year: '2019', event: 'Kyrios Family Church is founded by Rev. Isaac Daniel in Golf Estate, Lakowe, Ibeju-Lekki — a small gathering with a big vision.' },
              { year: '2020', event: 'The church continues to meet and grow through the pandemic, discovering that community and the Word are essential anchors in uncertain times.' },
              { year: '2022', event: 'Church groups are established — creating space for deeper fellowship, discipleship, and pastoral care within the congregation.' },
              { year: '2023', event: "The Children's Department is formally launched under Sis. Jane Idike, providing a dedicated space for the church's youngest members." },
              { year: '2024', event: 'The worship ministry expands under Pastor Bisola Daniel and Bro. Shedrach Idike, developing a richer culture of praise and worship.' },
              { year: '2025', event: 'Kyrios Family Church acquires land to build a permanent place of worship — a significant milestone in the life of the church.' },
            ].map((item, i, arr) => (
              <div key={item.year} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: C.ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />
                  </div>
                  {i < arr.length - 1 && <div style={{ width: '1px', flexGrow: 1, background: C.border, minHeight: '28px', margin: '4px 0' }} />}
                </div>
                <div style={{ paddingBottom: i < arr.length - 1 ? '28px' : 0 }}>
                  <div className="font-display font-bold" style={{ fontSize: 'clamp(24px, 4vw, 32px)', color: C.crimson, lineHeight: 1, marginBottom: '6px' }}>{item.year}</div>
                  <p style={{ fontSize: '15px', color: C.inkSoft, lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section-pad" style={{ background: C.white }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>Theology</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 300, color: C.ink, marginTop: '10px' }}>What We Believe</h2>
          </div>
          <div className="about-beliefs">
            {beliefs.map(b => (
              <div key={b.title} className="hover-border-crimson" style={{ border: `1px solid ${C.border}`, padding: 'clamp(24px, 4vw, 36px)', display: 'flex', flexDirection: 'column' as const }}>
                <div style={{ width: '32px', height: '2px', background: C.crimson, marginBottom: '14px' }} />
                <h3 className="font-display" style={{ fontSize: 'clamp(18px, 3vw, 22px)', color: C.ink, marginBottom: '10px' }}>{b.title}</h3>
                <p style={{ fontSize: '14px', color: C.inkMuted, lineHeight: 1.75, fontFamily: 'var(--font-body)', marginBottom: '16px' }}>{b.body}</p>
                {/* Scripture reference — bumped up from 11px to 13px */}
                <p style={{ fontSize: '13px', fontFamily: 'var(--font-display)', fontStyle: 'italic', color: C.crimson, letterSpacing: '0.02em', marginTop: 'auto' }}>{b.scripture}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="our-ministers" className="section-pad" style={{ background: C.ink }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimsonLight, fontFamily: 'var(--font-body)' }}>Our Ministers</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 300, color: '#f8f6f3', marginTop: '10px' }}>The Team</h2>
          </div>
          <div className="about-team">
            {team.map(m => (
              <div key={m.name} className="hover-border-crimson" style={{ border: '1px solid #2e2a25', padding: 'clamp(20px, 3vw, 32px)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#2e2a25', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: '#c4beb5', marginBottom: '16px' }}>{m.initials}</div>
                <h3 style={{ fontWeight: 500, color: '#f8f6f3', fontSize: '15px', marginBottom: '3px', fontFamily: 'var(--font-body)' }}>{m.name}</h3>
                <p style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: C.crimsonLight, fontFamily: 'var(--font-body)', marginBottom: '12px' }}>{m.role}</p>
                <p style={{ fontSize: '13px', color: '#7c756d', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: C.canvas, textAlign: 'center' }}>
        <div className="site-container" style={{ maxWidth: '480px' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 300, color: C.ink, marginBottom: '14px' }}>Come As You Are</h2>
          <p style={{ fontSize: '16px', color: C.inkMuted, lineHeight: 1.8, marginBottom: '28px', fontFamily: 'var(--font-body)' }}>You don't have to have it all together to find a home here. We are a family, and families make room.</p>
          <Link href="/visit" className="btn-primary">Plan Your Visit <ArrowRight size={13} /></Link>
        </div>
      </section>
    </>
  )
}
