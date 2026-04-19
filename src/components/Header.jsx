import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Header({ onSearchOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const links = [
    { to: '/',                  label: 'Home',        end: true },
    { to: '/category/tech',     label: '💻 Tech' },
    { to: '/category/lifestyle',label: '🌿 Lifestyle' },
    { to: '/category/sports',   label: '⚽ Sports' },
    { to: '/about',             label: 'About' },
  ]

  return (
    <>
      {/* Top announcement bar */}
      <div className="topbar">
        📰 Welcome to <span className="topbar-accent">RopoBlogs</span> — Tech · Lifestyle · Sports &nbsp;|&nbsp; New posts every week
      </div>

      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="logo">
              Ropo<span className="logo-dot">.</span>
            </Link>

            <nav className="nav">
              {links.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {l.label}
                </NavLink>
              ))}
              <button className="nav-link" onClick={onSearchOpen} aria-label="Search">
                🔍
              </button>
              <Link to="/#newsletter" className="nav-link nav-cta">
                Subscribe
              </Link>
              <button
                className="hamburger"
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Toggle menu"
              >
                <span />
                <span />
                <span />
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <button className="nav-link" onClick={() => { onSearchOpen(); setMobileOpen(false) }}>
            🔍 Search
          </button>
          <Link to="/#newsletter" className="nav-link nav-cta" onClick={() => setMobileOpen(false)}>
            Subscribe →
          </Link>
        </div>
      </header>
    </>
  )
}
