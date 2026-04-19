import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { posts } from '../data/posts'
import Tag from './Tag'

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current?.focus()

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const results = query.trim()
    ? posts.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.tag.toLowerCase().includes(query.toLowerCase()) ||
        p.cat.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const handleSelect = (id) => {
    onClose()
    navigate(`/post/${id}`)
  }

  return (
    <div
      className="search-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="search-box">
        <div className="search-row">
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search posts…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search-close" onClick={onClose}>✕ Close</button>
        </div>

        <div className="search-hint">
          Press <kbd>ESC</kbd> to close · <kbd>⌘K</kbd> to open anywhere
        </div>

        <div className="search-results">
          {query && results.length === 0 && (
            <p className="search-empty">No results for "{query}"</p>
          )}
          {results.map(p => (
            <div
              key={p.id}
              className="sr-item"
              onClick={() => handleSelect(p.id)}
            >
              <div className="sr-tag">
                <Tag label={p.tag} cls={p.tagClass} />
              </div>
              <div className="sr-title">{p.title}</div>
              <div className="sr-excerpt">{p.excerpt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
