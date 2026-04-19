import { useState, useEffect } from 'react'
import Newsletter from '../components/Newsletter'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact — RopoBlogs'
    return () => { document.title = 'RopoBlogs — Tech. Lifestyle. Sports.' }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="fade-up">
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '64px 0' }}>
        <div className="container">
          <div className="label-mono" style={{ color: 'var(--accent)', marginBottom: 14 }}>Get in Touch</div>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(34px, 5vw, 58px)',
            fontWeight: 900,
            letterSpacing: '-.03em',
            lineHeight: 1.06,
          }}>
            We'd love to hear from you.
          </h1>
        </div>
      </div>

      <div className="simple-page">
        <div className="container">
          <div className="contact-grid">

            <div>
              <h2>Contact Info</h2>
              <p>For general enquiries, pitches, or feedback — reach out anytime. We typically respond within 2 business days.</p>

              <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { icon: '✉️', label: 'Email', val: 'hello@ropoblogs.com' },
                  { icon: '𝕏', label: 'Twitter/X', val: '@ropoblogs' },
                  { icon: '📷', label: 'Instagram', val: '@ropoblogs' },
                  { icon: 'in', label: 'LinkedIn', val: 'RopoBlogs' },
                ].map(({ icon, label, val }) => (
                  <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <span style={{
                      width: 40, height: 40,
                      background: 'var(--cream)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16, flexShrink: 0,
                      border: '1px solid var(--rule)',
                    }}>{icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {sent ? (
                <div style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--rule)',
                  borderRadius: 8,
                  padding: '40px 32px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, marginBottom: 10 }}>Message sent!</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 15 }}>
                    Thanks for reaching out. We'll get back to you within 2 business days.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Priya Shetty"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Article pitch / Feedback / Other"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Tell us what's on your mind…"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="submit-btn">Send Message →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}
