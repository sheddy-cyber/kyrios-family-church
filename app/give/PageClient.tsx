'use client'

import { useState } from 'react'
import { ArrowRight, Shield, Heart, Globe, Users } from 'lucide-react'

const C = { crimson: '#8b1a1a', crimsonLight: '#e05555', ink: '#141210', inkSoft: '#433e38', inkMuted: '#7c756d', stone: '#c4beb5', border: '#e4ddd3', parchment: '#f0ebe3', canvas: '#f8f6f3', white: '#fff' }

const presets = [500, 1000, 2500, 5000, 10000, 25000]
const funds = [
  { id: 'tithe',    label: 'General Giving & Tithe',  desc: "Support the church's weekly operations and ministry",          icon: <Heart size={15} /> },
  { id: 'building', label: 'Building Fund',             desc: 'Help us build our permanent place of worship on our new land', icon: <Globe size={15} /> },
  { id: 'welfare',  label: 'Welfare & Benevolence',     desc: 'Support members of our community who are in financial need',  icon: <Users size={15} /> },
  { id: 'missions', label: 'Missions & Outreach',       desc: 'Support spreading the gospel beyond our local community',     icon: <Shield size={15} /> },
]

export default function GivePageClient() {
  const [amount, setAmount] = useState('')
  const [custom, setCustom]   = useState('')
  const [fund, setFund]       = useState('tithe')
  const [freq, setFreq]       = useState<'once'|'monthly'>('once')
  const [method, setMethod]   = useState<'card'|'bank'|'ussd'>('card')
  const [step, setStep]       = useState(1)
  const display = custom || amount

  return (
    <>
      {/* Hero */}
      <section className="section-pad" style={{ background: C.ink, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pointerEvents: 'none', userSelect: 'none' as const }}>
          <span className="font-display font-bold" style={{ fontSize: 'clamp(80px, 18vw, 280px)', color: '#fff', paddingRight: '5%' }}>GIVE</span>
        </div>
        <div className="site-container" style={{ position: 'relative' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimsonLight, fontFamily: 'var(--font-body)' }}>Generosity</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 300, color: '#f8f6f3', margin: '14px 0 16px', lineHeight: 1.05 }}>Give &amp; <em>Impact Lives</em></h1>
          <p className="font-display italic" style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', color: C.inkMuted, maxWidth: '500px', lineHeight: 1.7 }}>
            "God loves a cheerful giver." — 2 Corinthians 9:7
          </p>
        </div>
      </section>

      {/* Impact stats — responsive 2→4 */}
      <section style={{ background: C.parchment, borderBottom: `1px solid ${C.border}` }}>
        <div className="site-container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div style={{ background: C.white, border: `2px solid ${C.crimson}`, padding: 'clamp(24px, 4vw, 40px)', display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>Priority Need</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 300, color: C.ink }}>Help Us Build Our Home</h2>
            <p style={{ fontSize: '15px', color: C.inkSoft, lineHeight: 1.8, fontFamily: 'var(--font-body)', maxWidth: '640px' }}>
              Kyrios Family Church has recently acquired land at Golf Estate, Lakowe, Ibeju-Lekki. This is a tremendous milestone for our young church. We are now trusting God — and our community — to raise the funds needed to begin building our permanent place of worship. Your gift, whatever the size, is an act of faith and partnership in something that will outlast us all.
            </p>
            <p className="font-display italic" style={{ fontSize: '16px', color: C.crimson }}>
              "Unless the Lord builds the house, those who build it labour in vain." — Psalm 127:1
            </p>
          </div>
        </div>
      </section>

      {/* Give form */}
      <section className="section-pad" style={{ background: C.canvas }}>
        <div className="site-container" style={{ maxWidth: '720px' }}>
          <div style={{ background: C.white, border: `1px solid ${C.border}` }}>
            {/* Step tabs */}
            <div style={{ display: 'flex', borderBottom: `1px solid ${C.border}` }}>
              {[{n:1,l:'Choose Amount'},{n:2,l:'Payment'}].map(s => (
                <button key={s.n} onClick={() => setStep(s.n)}
                  style={{ flex: 1, padding: 'clamp(14px, 2.5vw, 18px)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', background: step === s.n ? C.ink : 'transparent', color: step === s.n ? '#fff' : C.inkMuted, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'all 0.2s' }}>
                  <span style={{ color: step === s.n ? C.crimsonLight : C.border, marginRight: '5px', fontSize: '11px' }}>{s.n}.</span>{s.l}
                </button>
              ))}
            </div>

            <div style={{ padding: 'clamp(20px, 4vw, 36px)' }}>
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '24px' }}>
                  {/* Fund */}
                  <div>
                    <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: C.stone, marginBottom: '12px', fontFamily: 'var(--font-body)' }}>Give To</p>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
                      {funds.map(f => (
                        <label key={f.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: 'clamp(12px, 2vw, 16px)', border: `1px solid ${fund === f.id ? C.ink : C.border}`, background: fund === f.id ? C.canvas : C.white, cursor: 'pointer', transition: 'all 0.15s' }}>
                          <input type="radio" name="fund" checked={fund === f.id} onChange={() => setFund(f.id)} style={{ accentColor: C.crimson, flexShrink: 0 }} />
                          <span style={{ color: fund === f.id ? C.crimson : C.stone, flexShrink: 0 }}>{f.icon}</span>
                          <div style={{ minWidth: 0 }}>
                            <p style={{ fontWeight: 500, fontSize: '14px', color: C.ink, fontFamily: 'var(--font-body)' }}>{f.label}</p>
                            <p style={{ fontSize: '12px', color: C.inkMuted, fontFamily: 'var(--font-body)' }}>{f.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Frequency */}
                  <div>
                    <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: C.stone, marginBottom: '10px', fontFamily: 'var(--font-body)' }}>Frequency</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {(['once','monthly'] as const).map(f => (
                        <button key={f} onClick={() => setFreq(f)}
                          style={{ flex: 1, padding: '11px', fontSize: '13px', border: `1px solid ${freq === f ? C.ink : C.border}`, background: freq === f ? C.ink : 'transparent', color: freq === f ? '#fff' : C.inkMuted, cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'all 0.15s' }}>
                          {f === 'once' ? 'One Time' : 'Monthly'}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Presets */}
                  <div>
                    <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: C.stone, marginBottom: '10px', fontFamily: 'var(--font-body)' }}>Amount (₦)</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '10px' }}>
                      {presets.map(p => (
                        <button key={p} onClick={() => { setAmount(String(p)); setCustom('') }}
                          style={{ padding: 'clamp(10px, 1.5vw, 12px)', fontSize: 'clamp(12px, 1.8vw, 13px)', border: `1px solid ${amount === String(p) && !custom ? C.ink : C.border}`, background: amount === String(p) && !custom ? C.ink : 'transparent', color: amount === String(p) && !custom ? '#fff' : C.inkSoft, cursor: 'pointer', fontWeight: 500, fontFamily: 'var(--font-body)', transition: 'all 0.15s' }}>
                          ₦{p.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${C.border}`, padding: '0 14px' }}>
                      <span style={{ color: C.stone, fontWeight: 500, fontFamily: 'var(--font-body)', flexShrink: 0 }}>₦</span>
                      <input type="number" placeholder="Custom amount" value={custom} onChange={e => { setCustom(e.target.value); setAmount('') }}
                        style={{ flex: 1, padding: '12px 8px', fontSize: '13px', border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-body)' }} />
                    </div>
                  </div>
                  {display && (
                    <div style={{ background: C.parchment, border: `1px solid ${C.border}`, padding: 'clamp(16px, 3vw, 20px) clamp(18px, 3vw, 24px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '16px' }}>
                      <div>
                        <p style={{ fontSize: '11px', color: C.inkMuted, marginBottom: '4px', fontFamily: 'var(--font-body)' }}>{freq === 'monthly' ? 'Monthly gift' : 'One-time gift'}</p>
                        <p className="font-display font-bold" style={{ fontSize: 'clamp(24px, 4vw, 32px)', color: C.ink }}>₦{Number(display).toLocaleString()}</p>
                        <p style={{ fontSize: '12px', color: C.inkMuted, fontFamily: 'var(--font-body)' }}>{funds.find(f => f.id === fund)?.label}</p>
                      </div>
                      <button className="btn-primary" onClick={() => setStep(2)}>Continue <ArrowRight size={13} /></button>
                    </div>
                  )}
                </div>
              )}

              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '20px' }}>
                  <div style={{ background: C.canvas, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: C.inkSoft, fontFamily: 'var(--font-body)' }}>₦{Number(display||0).toLocaleString()} · {funds.find(f => f.id === fund)?.label}</span>
                    <button onClick={() => setStep(1)} style={{ fontSize: '12px', color: C.crimson, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Edit</button>
                  </div>
                  <div>
                    <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: C.stone, marginBottom: '10px', fontFamily: 'var(--font-body)' }}>Payment Method</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {(['card','bank','ussd'] as const).map(m => (
                        <button key={m} onClick={() => setMethod(m)}
                          style={{ flex: 1, padding: '11px 8px', fontSize: 'clamp(11px, 1.8vw, 13px)', border: `1px solid ${method === m ? C.ink : C.border}`, background: method === m ? C.ink : 'transparent', color: method === m ? '#fff' : C.inkMuted, cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'all 0.15s' }}>
                          {m === 'card' ? 'Card' : m === 'bank' ? 'Bank Transfer' : 'USSD'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {method === 'card' && (
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
                      {[['text','Full Name'],['email','Email Address'],['text','Card Number']].map(([t,p]) => (
                        <input key={p} type={t} placeholder={p} style={{ border: `1px solid ${C.border}`, padding: '12px 14px', fontSize: '14px', fontFamily: 'var(--font-body)', width: '100%' }} />
                      ))}
                      <div className="card-expiry-row">
                        <input type="text" placeholder="MM / YY" style={{ border: `1px solid ${C.border}`, padding: '12px 14px', fontSize: '14px', fontFamily: 'var(--font-body)', width: '100%' }} />
                        <input type="text" placeholder="CVV" style={{ border: `1px solid ${C.border}`, padding: '12px 14px', fontSize: '14px', fontFamily: 'var(--font-body)', width: '100%' }} />
                      </div>
                      <button className="btn-crimson" style={{ width: '100%', justifyContent: 'center', padding: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Give ₦{Number(display||0).toLocaleString()} Securely <Shield size={13} />
                      </button>
                      <p style={{ fontSize: '11px', color: C.stone, textAlign: 'center', fontFamily: 'var(--font-body)' }}>Secured by Paystack · 256-bit SSL</p>
                    </div>
                  )}
                  {method === 'bank' && (
                    <div style={{ background: C.canvas, padding: 'clamp(20px, 3vw, 28px)' }}>
                      <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: C.stone, marginBottom: '16px', fontFamily: 'var(--font-body)' }}>Bank Details</p>
                      {[['Bank','Providus Bank'],['Account Name','Kyrios Family Church'],['Account Number','5401849931'],['Reference',`KFC-${fund.toUpperCase()}-${Date.now().toString().slice(-6)}`]].map(([l,v]) => (
                        <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${C.border}`, flexWrap: 'wrap' as const, gap: '8px' }}>
                          <span style={{ fontSize: '12px', color: C.stone, fontFamily: 'var(--font-body)' }}>{l}</span>
                          <span style={{ fontSize: '13px', fontWeight: 500, color: C.ink, fontFamily: 'monospace', wordBreak: 'break-all' as const }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {method === 'ussd' && (
                    <div style={{ background: C.canvas, padding: 'clamp(24px, 4vw, 32px)', textAlign: 'center' }}>
                      <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: C.stone, marginBottom: '12px', fontFamily: 'var(--font-body)' }}>USSD Code</p>
                      <div className="font-display font-bold" style={{ fontSize: 'clamp(24px, 5vw, 36px)', color: C.ink }}>*737*1*amount*890#</div>
                      <p style={{ fontSize: '13px', color: C.inkMuted, marginTop: '8px', fontFamily: 'var(--font-body)' }}>Dial on any Nigerian network</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other ways */}
      <section className="section-pad" style={{ background: C.white }}>
        <div className="site-container">
          <h2 className="font-display" style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 300, color: C.ink, marginBottom: '28px' }}>Other Ways to Give</h2>
          <div className="about-mission">
            {[
              { title: 'In Person',  desc: 'Drop your offering in the designated boxes at any service, or give at the welcome desk.' },
              { title: 'Cheque',     desc: "Payable to 'Kyrios Family Church'. Delivered to the church office Mon–Fri, 9 AM–5 PM." },
              { title: 'Pledge',     desc: 'Make a pledge toward our building fund. Contact the office to discuss a commitment.' },
            ].map(w => (
              <div key={w.title} style={{ border: `1px solid ${C.border}`, padding: 'clamp(20px, 4vw, 32px)' }}>
                <div style={{ width: '32px', height: '2px', background: C.crimson, marginBottom: '14px' }} />
                <h3 className="font-display" style={{ fontSize: 'clamp(18px, 3vw, 22px)', color: C.ink, marginBottom: '8px' }}>{w.title}</h3>
                <p style={{ fontSize: '14px', color: C.inkMuted, lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
