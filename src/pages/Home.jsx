import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import Newsletter from '../components/Newsletter'
import { posts, categories } from '../data/posts'

export default function Home() {
  const [activeCat, setActiveCat] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Global search shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        document.querySelector('[aria-label="Search"]')?.click()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const filtered = activeCat === 'all'
    ? posts
    : posts.filter(p => p.cat === activeCat)

  const catLabels = {
    all: 'Latest Articles',
    tech: '💻 Tech',
    lifestyle: '🌿 Lifestyle',
    sports: '⚽ Sports',
    productivity: '📈 Productivity',
  }

  return (
    <div className="page-top fade-up">
      <Hero />

      {/* Posts Section */}
      <main style={{ padding: '60px 0 80px' }}>
        <div className="container">

          {/* Category filter */}
          <div className="cat-filter">
            {[
              { key: 'all',         label: 'All Posts' },
              { key: 'tech',        label: '💻 Tech' },
              { key: 'lifestyle',   label: '🌿 Lifestyle' },
              { key: 'sports',      label: '⚽ Sports' },
              { key: 'productivity',label: '📈 Productivity' },
            ].map(({ key, label }) => (
              <button
                key={key}
                data-cat={key}
                className={`cat-btn${activeCat === key ? ' active' : ''}`}
                onClick={() => setActiveCat(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="section-label">{catLabels[activeCat]}</div>
          <div className="posts-grid">
            {filtered.map((post, i) => (
              <PostCard
                key={post.id}
                post={post}
                featured={i === 0 && activeCat === 'all'}
              />
            ))}
          </div>
        </div>
      </main>

      <Newsletter />

      {/* Browse by Category */}
      <section className="cats-showcase">
        <div className="container">
          <div className="section-label">Browse by Category</div>
          <div className="cats-grid">
            {categories.map(cat => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className={`cat-card ${cat.cls}`}
              >
                <span className="cat-icon">{cat.emoji}</span>
                <div className="cat-name">{cat.label}</div>
                <div className="cat-desc">{cat.desc}</div>
                <span className="cat-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="about-eyebrow">About RopoBlogs</div>
              <h2 className="about-title">
                Written for <em>curious</em> minds on the move.
              </h2>
              <div className="about-body">
                <p>
                  RopoBlogs is a multi-category publication built for students,
                  early-career professionals, and anyone who loves staying sharp
                  across tech, lifestyle, and sports.
                </p>
                <p>
                  Every post is written to be skimmable yet thorough — clear
                  headlines, real takeaways, and zero filler. We publish three
                  times a week and we obsess over quality over quantity.
                </p>
                <p>
                  <Link to="/about" style={{ color: 'var(--accent2)', textDecoration: 'none', fontWeight: 600 }}>
                    Read our story →
                  </Link>
                </p>
              </div>
            </div>
            <div className="pillars-grid">
              {categories.map(c => (
                <div key={c.slug} className="pillar-card">
                  <div className="pillar-icon">{c.emoji}</div>
                  <div className="pillar-name">{c.label}</div>
                  <div className="pillar-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
