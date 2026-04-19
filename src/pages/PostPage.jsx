import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { posts } from '../data/posts'
import Tag from '../components/Tag'
import Newsletter from '../components/Newsletter'
import PostCard from '../components/PostCard'

export default function PostPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — RopoBlogs`
    }
    return () => { document.title = 'RopoBlogs — Tech. Lifestyle. Sports.' }
  }, [post])

  if (!post) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 32, marginBottom: 16 }}>Post not found</h2>
        <Link to="/" className="read-btn">← Back to Home</Link>
      </div>
    )
  }

  // Related posts: same category, exclude current
  const related = posts
    .filter(p => p.cat === post.cat && p.id !== post.id)
    .slice(0, 3)

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Link copied!'))
  }

  return (
    <article className="post-page fade-up">
      {/* Hero banner */}
      <div className="post-hero">
        <div className="container">
          <div className="post-eyebrow">
            <Tag label={post.tag} cls={post.tagClass} linkTo={`/category/${post.cat}`} />
          </div>
          <h1 className="post-h1">{post.title}</h1>
          <p className="post-sub">{post.excerpt}</p>
          <div className="post-byline">
            <span className="byline-name">{post.author}</span>
            <span className="meta-dot" style={{ background: 'rgba(255,255,255,.2)' }} />
            <span>{post.date}</span>
            <span className="meta-dot" style={{ background: 'rgba(255,255,255,.2)' }} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="post-body-wrap">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* Table of Contents */}
        {post.toc && post.toc.length > 0 && (
          <div className="toc">
            <div className="toc-title">Table of Contents</div>
            <ol className="toc-list">
              {post.toc.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Article body rendered from HTML string */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* Share bar */}
        <div className="share-bar">
          <span className="share-label">Share</span>
          <a
            className="share-btn"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title + ' — ropoblogs.com')}`}
            target="_blank"
            rel="noreferrer"
          >
            𝕏 Twitter
          </a>
          <a
            className="share-btn"
            href={`https://wa.me/?text=${encodeURIComponent(post.title + '\n\n' + window.location.href)}`}
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>
          <button className="share-btn" onClick={copyLink}>
            🔗 Copy Link
          </button>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div style={{ background: 'var(--cream)', padding: '52px 0', borderTop: '1px solid var(--rule)' }}>
          <div className="container">
            <div className="section-label">More in {post.tag}</div>
            <div className="posts-grid">
              {related.map(p => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Newsletter />
    </article>
  )
}
