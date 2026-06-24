import { useEffect, useState } from 'react'
import './Hero.css'

// Click the masthead to restyle the whole hero: background, text colour and typeface together.
const STYLES = [
  { bg: '#faf9f6', fg: '#111111', font: "'Inter Tight', ui-sans-serif, sans-serif" },
  { bg: '#1a4bff', fg: '#ffffff', font: "'Bricolage Grotesque', sans-serif" },
  { bg: '#111111', fg: '#f8f5d1', font: "'Anton', sans-serif" },
  { bg: '#e5392b', fg: '#ffffff', font: "'Space Mono', monospace" },
  { bg: '#f8f5d1', fg: '#1a4bff', font: "'Playfair Display', serif" },
]

const NEEDED = 3 // clicks required before the page unlocks

function Hero() {
  const [i, setI] = useState(0)
  const [clicks, setClicks] = useState(0)
  const s = STYLES[i]
  const locked = clicks < NEEDED

  // Scroll is locked until the visitor has played with the title.
  useEffect(() => {
    document.documentElement.classList.toggle('scroll-locked', locked)
    return () => document.documentElement.classList.remove('scroll-locked')
  }, [locked])

  const cycle = () => {
    setI((prev) => (prev + 1) % STYLES.length)
    setClicks((c) => c + 1)
  }

  return (
    <section id="top" className="hero field" style={{ background: s.bg, color: s.fg }}>
      <span className="hero__kicker label">
        {locked ? `Click the title to enter (${clicks}/${NEEDED})` : 'Web3 builder, portfolio 2026'}
      </span>

      <h1 className="hero__lockup">
        <button
          type="button"
          className="hero__cycle"
          onClick={cycle}
          style={{ fontFamily: s.font }}
          aria-label="Passive Records. Click to restyle and unlock the page."
        >
          Passive<br />Records
        </button>
      </h1>

      <p className="hero__tagline">
        I build <em>Web3 products</em> that turn on-chain activity into things
        people actually use, from first click to mainnet.
      </p>
    </section>
  )
}

export default Hero
