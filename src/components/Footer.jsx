import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              Ropo<span className="logo-dot">.</span>
            </Link>
            <p>Fresh takes on Tech, Lifestyle, and Sports — for curious minds everywhere.</p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="soc-btn" title="X / Twitter">𝕏</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="soc-btn" title="Instagram">📷</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="soc-btn" title="LinkedIn">in</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/category/tech">Tech</Link></li>
              <li><Link to="/category/lifestyle">Lifestyle</Link></li>
              <li><Link to="/category/sports">Sports</Link></li>
              <li><Link to="/category/productivity">Productivity</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/#newsletter">Newsletter</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">Write for Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/privacy">Cookie Policy</Link></li>
              <li><Link to="/contact">Advertise</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RopoBlogs · ropoblogs.com</span>
          <span>Made with ❤️ for curious readers</span>
        </div>
      </div>
    </footer>
  )
}
