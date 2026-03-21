'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Play, Pause, Download, Share2, ArrowLeft, Clock, BookOpen, ChevronRight } from 'lucide-react'

const C = {
  crimson: '#8b1a1a', crimsonLight: '#e05555', ink: '#141210', inkSoft: '#433e38', inkMuted: '#7c756d',
  stone: '#c4beb5', border: '#e4ddd3', parchment: '#f0ebe3', canvas: '#f8f6f3', white: '#fff',
}

const sermon = {
  title: 'When God Sees You',
  series: 'The God Who Sees',
  speaker: 'Pastor Emmanuel Okafor',
  date: 'March 9, 2025',
  duration: '48 min',
  scripture: 'Genesis 16:13',
  description: [
    `In this powerful message, Pastor Emmanuel takes us into the story of Hagar — a woman forgotten by the world but seen by God. From the depths of the wilderness, we discover that no matter where you find yourself, you are never outside the gaze of a God who cares deeply and personally for you.`,
    `This message is for anyone who has ever felt invisible, overlooked, or abandoned. God's eyes are on you — even now.`,
  ],
  outline: [
    { time: '0:00',  point: 'Introduction: The woman nobody saw' },
    { time: '8:30',  point: 'Who is Hagar? The forgotten servant' },
    { time: '18:45', point: 'The wilderness — when life breaks down' },
    { time: '28:00', point: '"You Are the God Who Sees Me" — El Roi' },
    { time: '38:15', point: 'Being seen changes everything' },
    { time: '44:30', point: 'Application and prayer' },
  ],
  related: [
    { id: 2, title: 'The Wilderness Season', speaker: 'Pastor Grace Okafor', series: 'The God Who Sees' },
    { id: 7, title: 'Living Waters',         speaker: 'Deacon Joseph Eze',    series: 'The God Who Sees' },
    { id: 3, title: 'Unshakeable',           speaker: 'Pastor Emmanuel Okafor', series: 'Roots & Wings' },
  ],
}

export default function SermonDetail() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  return (
    <>
      {/* Back nav */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: '12px 0' }}>
        <div className="site-container">
          <Link href="/sermons" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: C.inkMuted, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
            <ArrowLeft size={13} /> Back to Sermons
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-pad" style={{ background: C.ink }}>
        <div className="section-inner sermon-detail-hero" style={{ padding: '0 20px', alignItems: 'center' }}>

          {/* Thumbnail + progress */}
          <div style={{ background: '#e8e4de', position: 'relative', height: 'clamp(200px, 50vw, 340px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: C.ink, opacity: 0.25 }} />
            <button
              onClick={() => setPlaying(!playing)}
              className="play-btn"
              style={{ width: '72px', height: '72px', position: 'relative', zIndex: 1 }}
            >
              {playing
                ? <Pause size={22} fill="white" color="white" />
                : <Play size={22} fill="white" color="white" style={{ marginLeft: '3px' }} />}
            </button>
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
              <input
                type="range" min={0} max={100} value={progress}
                onChange={e => setProgress(Number(e.target.value))}
                style={{ width: '100%', height: '2px', accentColor: C.crimson, cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Meta + controls */}
          <div>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>
              {sermon.series}
            </span>
            <h1 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300, color: '#f8f6f3', margin: '16px 0', lineHeight: 1.1 }}>
              {sermon.title}
            </h1>
            <p style={{ fontSize: '17px', color: C.stone, marginBottom: '20px', fontFamily: 'var(--font-body)' }}>
              {sermon.speaker}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '16px', marginBottom: '28px', fontSize: '13px', color: C.inkMuted, fontFamily: 'var(--font-body)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={13} /> {sermon.duration}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookOpen size={13} /> {sermon.scripture}</span>
              <span>{sermon.date}</span>
            </div>

            {/* Player bar */}
            <div style={{ background: '#1e1a16', padding: '20px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <button onClick={() => setPlaying(!playing)} className="play-btn" style={{ width: '40px', height: '40px' }}>
                  {playing
                    ? <Pause size={14} fill="white" color="white" />
                    : <Play size={14} fill="white" color="white" style={{ marginLeft: '2px' }} />}
                </button>
                <input
                  type="range" min={0} max={100} value={progress}
                  onChange={e => setProgress(Number(e.target.value))}
                  style={{ flex: 1, height: '2px', accentColor: C.crimson, cursor: 'pointer' }}
                />
                <span style={{ fontSize: '11px', color: C.inkMuted, fontFamily: 'monospace' }}>
                  {Math.floor(progress * 0.48)}:{String(Math.floor((progress * 0.48 % 1) * 60)).padStart(2, '0')} / 48:00
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-outline-light" style={{ padding: '10px 20px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Download size={13} /> Download
              </button>
              <button className="btn-outline-light" style={{ padding: '10px 20px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Share2 size={13} /> Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad" style={{ background: C.white }}>
        <div className="section-inner sermon-detail-body" style={{ padding: '0 20px' }}>

          {/* Description + outline */}
          <div>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>
              About This Message
            </span>
            <div style={{ marginTop: '20px' }}>
              {sermon.description.map((para, i) => (
                <p key={i} style={{ fontSize: '17px', color: C.inkSoft, lineHeight: 1.8, marginBottom: '16px', fontFamily: 'var(--font-body)' }}>
                  {para}
                </p>
              ))}
            </div>

            <div style={{ marginTop: '40px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: C.stone, fontFamily: 'var(--font-body)' }}>
                Message Outline
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '4px', marginTop: '16px' }}>
                {sermon.outline.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => { setProgress(Math.floor(parseInt(item.time) / 0.48)); setPlaying(true) }}
                    className="hover-outline-row"
                    style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '14px 16px', border: `1px solid ${C.border}`, textAlign: 'left' as const, background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-body)' }}
                  >
                    <span style={{ fontFamily: 'monospace', fontSize: '12px', color: C.stone, width: '36px', flexShrink: 0 }}>{item.time}</span>
                    <span style={{ fontSize: '14px', color: C.inkSoft, flex: 1 }}>{item.point}</span>
                    <Play size={11} style={{ color: C.stone, flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '32px' }}>

            {/* Scripture */}
            <div>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: C.stone, fontFamily: 'var(--font-body)' }}>
                Scripture
              </span>
              <div style={{ background: C.parchment, padding: '24px', marginTop: '14px', borderLeft: `3px solid ${C.crimson}` }}>
                <p className="font-display italic" style={{ fontSize: '17px', color: C.inkSoft, lineHeight: 1.7, marginBottom: '12px' }}>
                  "She gave this name to the Lord who spoke to her: 'You are the God who sees me.'"
                </p>
                <p style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>
                  — Genesis 16:13 (NIV)
                </p>
              </div>
            </div>

            {/* Speaker */}
            <div>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: C.stone, fontFamily: 'var(--font-body)' }}>
                Speaker
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: C.parchment, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: C.inkSoft }}>
                  EO
                </div>
                <div>
                  <p style={{ fontWeight: 500, color: C.ink, fontSize: '14px', fontFamily: 'var(--font-body)' }}>{sermon.speaker}</p>
                  <p style={{ fontSize: '12px', color: C.stone, fontFamily: 'var(--font-body)' }}>Senior Pastor</p>
                </div>
              </div>
            </div>

            {/* Related */}
            <div>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: C.stone, fontFamily: 'var(--font-body)' }}>
                Related Messages
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px', marginTop: '14px' }}>
                {sermon.related.map(s => (
                  <Link
                    key={s.id}
                    href={`/sermons/${s.id}`}
                    className="hover-border-stone"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', border: `1px solid ${C.border}`, textDecoration: 'none' }}
                  >
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 500, color: C.ink, fontFamily: 'var(--font-body)' }}>{s.title}</p>
                      <p style={{ fontSize: '12px', color: C.stone, fontFamily: 'var(--font-body)', marginTop: '2px' }}>{s.speaker}</p>
                    </div>
                    <ChevronRight size={13} style={{ color: C.stone, flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
