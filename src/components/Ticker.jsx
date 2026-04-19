import { tickerItems } from '../data/posts'

export default function Ticker() {
  // Duplicate items so the loop is seamless
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-bullet">●</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
