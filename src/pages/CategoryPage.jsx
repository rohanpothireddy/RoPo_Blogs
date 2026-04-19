import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts, categories } from '../data/posts'
import PostCard from '../components/PostCard'
import Newsletter from '../components/Newsletter'

export default function CategoryPage() {
  const { cat } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [cat])

  const catInfo = categories.find(c => c.slug === cat)
  const filtered = posts.filter(p => p.cat === cat)

  if (!catInfo) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 32, marginBottom: 16 }}>Category not found</h2>
        <Link to="/" className="read-btn">← Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="fade-up">
      {/* Category header */}
      <div style={{
        background: 'var(--ink)',
        color: 'var(--paper)',
        padding: '60px 0',
      }}>
        <div className="container">
          <div style={{ fontSize: 56, marginBottom: 16 }}>{catInfo.emoji}</div>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 900,
            letterSpacing: '-.03em',
            marginBottom: 12,
          }}>
            {catInfo.label}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(250,248,244,.55)', fontFamily: 'var(--mono)' }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''} · {catInfo.desc}
          </p>
        </div>
      </div>

      {/* Posts */}
      <main style={{ padding: '60px 0 80px' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <p style={{ color: 'var(--muted)', fontSize: 16 }}>
              No posts in this category yet. Check back soon!
            </p>
          ) : (
            <>
              <div className="section-label">{catInfo.emoji} {catInfo.label} Articles</div>
              <div className="posts-grid">
                {filtered.map((post, i) => (
                  <PostCard key={post.id} post={post} featured={i === 0} />
                ))}
              </div>
            </>
          )}

          {/* Other categories */}
          <div style={{ marginTop: 60 }}>
            <div className="section-label">Other Categories</div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {categories
                .filter(c => c.slug !== cat)
                .map(c => (
                  <Link
                    key={c.slug}
                    to={`/category/${c.slug}`}
                    className="read-btn"
                    style={{ background: 'var(--cream)', color: 'var(--ink)', border: '1.5px solid var(--rule)' }}
                  >
                    {c.emoji} {c.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Newsletter />
    </div>
  )
}
