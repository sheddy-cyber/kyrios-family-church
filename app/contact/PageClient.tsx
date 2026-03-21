'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react'

const C = { crimson: '#8b1a1a', crimsonLight: '#e05555', ink: '#141210', inkSoft: '#433e38', inkMuted: '#7c756d', stone: '#c4beb5', border: '#e4ddd3', parchment: '#f0ebe3', canvas: '#f8f6f3', white: '#fff' }

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  return (
    <>
      {/* Hero */}
      <section className="section-pad" style={{ background: C.ink, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pointerEvents: 'none', userSelect: 'none' as const }}>
          <span className="font-display font-bold" style={{ fontSize: 'clamp(50px, 11vw, 180px)', color: '#fff', paddingRight: '5%' }}>CONTACT</span>
        </div>
        <div className="site-container" style={{ position: 'relative' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimsonLight, fontFamily: 'var(--font-body)' }}>Get in Touch</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 300, color: '#f8f6f3', margin: '14px 0 18px', lineHeight: 1.05 }}>
            We'd Love to <em>Hear From You</em>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: C.inkMuted, maxWidth: '460px', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
            Whether you have a question, need prayer, or just want to say hello — our team is here.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-pad" style={{ background: C.white }}>
        <div className="site-container">
          <div className="contact-grid">

            {/* Left: info + social */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '36px' }}>
              <div>
                <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>Contact Details</span>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '18px', marginTop: '18px' }}>
                  {[
                    { icon: <MapPin size={16} />, label: 'Address',      lines: ['Golf Estate, Lakowe', 'Ibeju-Lekki, Lagos, Nigeria'] },
                    { icon: <Clock size={16} />,  label: 'Office Hours', lines: ['Monday – Friday: 10:00 AM – 4:00 PM', 'Saturday: By appointment'] },
                    { icon: <Phone size={16} />,  label: 'Phone',        lines: ['0806 004 6003'], href: 'tel:+2348060046003' },
                    { icon: <Mail size={16} />,   label: 'Email',        lines: ['hello@kyriosfamily.org'], href: 'mailto:hello@kyriosfamily.org' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: '12px' }}>
                      <div style={{ color: C.crimson, marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                      <div>
                        <p style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: C.stone, marginBottom: '3px', fontFamily: 'var(--font-body)' }}>{item.label}</p>
                        {item.lines.map((line, i) => (item as any).href && i === 0
                          ? <a key={i} href={(item as any).href} style={{ display: 'block', fontSize: '14px', color: C.inkSoft, fontFamily: 'var(--font-body)', textDecoration: 'none' }}>{line}</a>
                          : <p key={i} style={{ fontSize: '14px', color: C.inkSoft, fontFamily: 'var(--font-body)' }}>{line}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.stone, fontFamily: 'var(--font-body)' }}>Follow Us</span>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px', marginTop: '14px' }}>
                  {[['Facebook','@KyriosFamilyChurch','https://facebook.com'],['Instagram','@kyrios.church','https://instagram.com'],['YouTube','Kyrios Family Church','https://youtube.com'],['WhatsApp','Community Group','https://wa.me/2348060046003']].map(([p,h,href]) => (
                    <a key={p} href={href} target="_blank" rel="noreferrer" className="hover-border-stone"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', border: `1px solid ${C.border}`, textDecoration: 'none', gap: '12px' }}>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ fontWeight: 500, color: C.ink, fontSize: '14px', fontFamily: 'var(--font-body)' }}>{p}</p>
                        <p style={{ fontSize: '12px', color: C.stone, fontFamily: 'var(--font-body)' }}>{h}</p>
                      </div>
                      <ArrowRight size={13} style={{ color: C.stone, flexShrink: 0 }} />
                    </a>
                  ))}
                </div>
              </div>

              <a href="https://wa.me/2348060046003" target="_blank" rel="noreferrer" className="btn-crimson" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Right: form */}
            <div>
              <span style={{ fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: C.crimson, fontFamily: 'var(--font-body)' }}>Send a Message</span>

              {submitted ? (
                <div style={{ background: C.canvas, border: `1px solid ${C.border}`, padding: 'clamp(40px, 8vw, 64px) clamp(24px, 5vw, 48px)', textAlign: 'center', marginTop: '20px' }}>
                  <CheckCircle size={36} style={{ color: C.crimson, margin: '0 auto 16px' }} />
                  <h3 className="font-display" style={{ fontSize: 'clamp(22px, 4vw, 28px)', color: C.ink, marginBottom: '10px' }}>Message Received</h3>
                  <p style={{ fontSize: '15px', color: C.inkMuted, lineHeight: 1.7, marginBottom: '24px', fontFamily: 'var(--font-body)' }}>
                    Thank you for reaching out. A member of our team will get back to you within 24 hours.
                  </p>
                  <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }) }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px', marginTop: '20px' }}>
                  <div className="form-two-col">
                    {[['text','Full Name *','name',true],['email','Email Address *','email',true]].map(([t,p,k,r]) => (
                      <div key={k as string}>
                        <label style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: C.stone, display: 'block', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>{p as string}</label>
                        <input type={t as string} required={r as boolean} value={(form as any)[k as string]} onChange={e => setForm({ ...form, [k as string]: e.target.value })}
                          style={{ width: '100%', border: `1px solid ${C.border}`, padding: '12px 14px', fontSize: '14px', fontFamily: 'var(--font-body)' }} />
                      </div>
                    ))}
                  </div>
                  <div className="form-two-col">
                    <div>
                      <label style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: C.stone, display: 'block', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Phone</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        style={{ width: '100%', border: `1px solid ${C.border}`, padding: '12px 14px', fontSize: '14px', fontFamily: 'var(--font-body)' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: C.stone, display: 'block', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Subject *</label>
                      <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                        style={{ width: '100%', border: `1px solid ${C.border}`, padding: '12px 14px', fontSize: '14px', background: C.white, fontFamily: 'var(--font-body)', appearance: 'none' as const }}>
                        <option value="">Select…</option>
                        {['General Enquiry','Prayer Request','Pastoral Counselling','Ministry Partnership','Membership','Media & Press'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: C.stone, display: 'block', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Message *</label>
                    <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help you?"
                      style={{ width: '100%', border: `1px solid ${C.border}`, padding: '12px 14px', fontSize: '14px', resize: 'none', fontFamily: 'var(--font-body)' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Send Message <ArrowRight size={13} />
                  </button>
                  <p style={{ fontSize: '12px', color: C.stone, textAlign: 'center', fontFamily: 'var(--font-body)' }}>We respect your privacy. Your information will not be shared.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7288050695485!2d3.4159!3d6.4283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDIuMCJOIDPCsDI0JzU3LjIiRQ!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
          width="100%" height="360" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map" />
      </section>
    </>
  )
}
