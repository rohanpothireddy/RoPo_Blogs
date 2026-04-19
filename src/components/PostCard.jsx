import { Link } from 'react-router-dom'
import Tag from './Tag'

export default function PostCard({ post, featured = false }) {
  return (
    <Link
      to={`/post/${post.id}`}
      className={`post-card${featured ? ' featured' : ''}`}
    >
      <div className="card-thumb">
        <span>{post.emoji}</span>
      </div>

      <div className="card-body">
        <div className="card-tag">
          <Tag label={post.tag} cls={post.tagClass} />
        </div>
        <h3 className="card-title">{post.title}</h3>
        <p className="card-excerpt">{post.excerpt}</p>
        <div className="card-meta">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  )
}
