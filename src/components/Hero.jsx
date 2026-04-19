import { Link, useNavigate } from 'react-router-dom'
import { posts } from '../data/posts'
import Tag from './Tag'
import Ticker from './Ticker'

export default function Hero() {
  const featured = posts[0]
  const trending = posts.slice(1, 5)
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">

          {/* Main featured post */}
          <div className="hero-main">
            <div className="hero-eyebrow">
              <Tag label={featured.tag} cls={featured.tagClass} />
              <span className="tag" style={{ background: 'var(--cream)', color: 'var(--muted)' }}>Featured</span>
              <time>{featured.date}</time>
            </div>

            <h1
              className="hero-title"
              onClick={() => navigate(`/post/${featured.id}`)}
            >
              {featured.title}
            </h1>

            <p className="hero-excerpt">{featured.excerpt}</p>

            <div className="hero-meta">
              <strong>{featured.author}</strong>
              <span className="meta-dot" />
              <span>{featured.readTime}</span>
            </div>

            <Link to={`/post/${featured.id}`} className="read-btn">
              Read Article →
            </Link>

            <div className="hero-thumb">
              <span>{featured.emoji}</span>
            </div>
          </div>

          {/* Trending sidebar */}
          <div className="hero-sidebar">
            <div className="sidebar-heading">Trending Now</div>
            {trending.map((p, i) => (
              <Link
                key={p.id}
                to={`/post/${p.id}`}
                className="sidebar-post"
              >
                <span className="sidebar-num">0{i + 1}</span>
                <div>
                  <div className="sidebar-post-title">{p.title}</div>
                  <div className="sidebar-post-meta">
                    <Tag label={p.tag} cls={p.tagClass} />
                    <span>· {p.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  )
}
