'use client'
export default function AnnouncementBanner() {
  const items = [
    'Sunday Service — 9:00 AM · Golf Estate, Lakowe',
    '✦',
    'Easter Conference — April 3, 4 & 5',
    '✦',
    'New Land Acquired — Help Us Build · Give Today',
    '✦',
    'Sunday Service — 9:00 AM · Golf Estate, Lakowe',
    '✦',
    'Easter Conference — April 3, 4 & 5',
    '✦',
    'New Land Acquired — Help Us Build · Give Today',
    '✦',
  ]
  return (
    <div style={{ background: '#141210', height: '32px', overflow: 'hidden' }}>
      <div className="ticker-inner" style={{ height: '100%', alignItems: 'center', gap: '40px' }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: item === '✦' ? '#e05555' : '#7c756d',
              fontFamily: 'var(--font-body)',
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
