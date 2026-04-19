import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('Join our readers. Free forever.')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setMessage('Please enter a valid email address.')
      return
    }
    setSubmitted(true)
    setMessage(`✓ ${email} subscribed! Welcome to RopoBlogs.`)
    setEmail('')
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="container">
        <div className="nl-inner">
          <div>
            <div className="nl-eyebrow">Stay in the loop</div>
            <h2 className="nl-title">Great reads,<br />delivered weekly.</h2>
            <p className="nl-desc">
              No spam. Just the best of Tech, Lifestyle, and Sports —
              curated every Thursday morning.
            </p>
          </div>

          <div>
            {!submitted ? (
              <form className="nl-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="nl-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="nl-btn">Subscribe →</button>
              </form>
            ) : (
              <div style={{ fontSize: 16, color: 'var(--accent)', fontWeight: 600, marginBottom: 10 }}>
                {message}
              </div>
            )}
            {!submitted && (
              <div className="nl-note">{message}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
