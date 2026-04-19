import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/posts'
import Newsletter from '../components/Newsletter'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About — RopoBlogs'
    return () => { document.title = 'RopoBlogs — Tech. Lifestyle. Sports.' }
  }, [])

  return (
    <div className="fade-up">
      {/* Page hero */}
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '64px 0' }}>
        <div className="container">
          <div className="label-mono" style={{ color: 'var(--accent)', marginBottom: 14 }}>About Us</div>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 900,
            letterSpacing: '-.03em',
            lineHeight: 1.06,
            maxWidth: 700,
          }}>
            Built for curious minds on the move.
          </h1>
        </div>
      </div>

      <div className="simple-page">
        <div className="container" style={{ maxWidth: 860 }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 60 }}>
            <div>
              <h2>Our Mission</h2>
              <p>
                RopoBlogs was started with a simple idea: most online content is either too shallow
                to be useful or too dense to be enjoyable. We wanted something in between —
                articles that respect your intelligence and your time.
              </p>
              <p>
                We publish practical, well-researched content across three pillars: Tech, Lifestyle,
                and Sports. Everything we write is designed to give you a real takeaway in the
                time it takes to drink a coffee.
              </p>
            </div>
            <div>
              <h2>Who We Write For</h2>
              <p>
                Students and early-career professionals who want to stay sharp across the topics that
                matter to them. People who prefer reading to watching. Readers who value depth but
                don't have hours to spare.
              </p>
              <p>
                If that sounds like you, you're in the right place.
              </p>
            </div>
          </div>

          <h2>What We Cover</h2>
          <div className="pillars-grid" style={{ marginBottom: 48 }}>
            {categories.map(c => (
              <div key={c.slug} className="pillar-card">
                <div className="pillar-icon">{c.emoji}</div>
                <div className="pillar-name">{c.label}</div>
                <div className="pillar-desc">{c.desc}</div>
              </div>
            ))}
          </div>

          <h2>Our Editorial Standards</h2>
          <p>
            Every article goes through a clear editorial checklist before publishing: a specific,
            searchable headline; a structured intro with a clear promise; logical headings;
            a concrete takeaway or next step at the end. No filler. No vague conclusions.
          </p>
          <p>
            We disclose affiliate relationships clearly. We don't accept payment to alter editorial
            coverage. If we recommend something, it's because we genuinely think it's worth your time.
          </p>

          <h2>Write for Us</h2>
          <p>
            We're always looking for knowledgeable writers who can explain things clearly and engagingly.
            If you have expertise in Tech, Lifestyle, or Sports and want to reach our growing audience,
            we'd love to hear from you.
          </p>
          <p>
            <Link to="/contact" className="read-btn" style={{ display: 'inline-flex', marginTop: 8 }}>
              Get in Touch →
            </Link>
          </p>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}
