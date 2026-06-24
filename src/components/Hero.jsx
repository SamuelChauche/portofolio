import { useState } from 'react'
import './Hero.css'

// Click the masthead to restyle it: each tap swaps colour and typeface.
const STYLES = [
  { color: 'var(--ink)', font: "'Inter Tight', ui-sans-serif, sans-serif" },
  { color: '#1a4bff', font: "'Bricolage Grotesque', sans-serif" },
  { color: '#e5392b', font: "'Anton', sans-serif" },
  { color: '#0e9e6a', font: "'Space Mono', monospace" },
  { color: '#ec4899', font: "'Playfair Display', serif" },
]

function Hero() {
  const [i, setI] = useState(0)
  const cycle = () => setI((prev) => (prev + 1) % STYLES.length)
  const s = STYLES[i]

  return (
    <section id="top" className="hero field field--paper">
      <span className="hero__kicker label">Web3 builder, portfolio 2026</span>

      <h1 className="hero__lockup">
        <button
          type="button"
          className="hero__cycle"
          onClick={cycle}
          style={{ color: s.color, fontFamily: s.font }}
          aria-label="Passive Records. Click to restyle the title."
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
