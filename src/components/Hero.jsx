import { useEffect, useState } from 'react'
import './Hero.css'

// Typeface cycles in order; colour is picked at random on each click.
const FONTS = [
  "'Inter Tight', ui-sans-serif, sans-serif",
  "'Bricolage Grotesque', sans-serif",
  "'Anton', sans-serif",
  "'Space Mono', monospace",
  "'Playfair Display', serif",
]

const COLORS = [
  { bg: '#faf9f6', fg: '#111111' },
  { bg: '#1a4bff', fg: '#ffffff' },
  { bg: '#111111', fg: '#f8f5d1' },
  { bg: '#e5392b', fg: '#ffffff' },
  { bg: '#f8f5d1', fg: '#1a4bff' },
  { bg: '#0e9e6a', fg: '#ffffff' },
  { bg: '#ec4899', fg: '#111111' },
  { bg: '#ffc400', fg: '#111111' },
  { bg: '#312e81', fg: '#ffffff' },
]

const NEEDED = 3 // clicks required before the page unlocks

function Hero() {
  const [fontI, setFontI] = useState(0)
  const [colorI, setColorI] = useState(0)
  const [clicks, setClicks] = useState(0)
  const locked = clicks < NEEDED
  const font = FONTS[fontI]
  const { bg, fg } = COLORS[colorI]

  // Scroll is locked until the visitor has played with the title.
  useEffect(() => {
    document.documentElement.classList.toggle('scroll-locked', locked)
    return () => document.documentElement.classList.remove('scroll-locked')
  }, [locked])

  const cycle = () => {
    setFontI((prev) => (prev + 1) % FONTS.length)
    setColorI((prev) => {
      if (COLORS.length < 2) return prev
      let next = Math.floor(Math.random() * COLORS.length)
      while (next === prev) next = Math.floor(Math.random() * COLORS.length)
      return next
    })
    setClicks((c) => c + 1)
  }

  return (
    <section id="top" className="hero field" style={{ background: bg, color: fg }}>
      <span className="hero__kicker label">Web3 builder, portfolio 2026</span>

      <h1 className="hero__lockup">
        <button
          type="button"
          className="hero__cycle"
          onClick={cycle}
          style={{ fontFamily: font }}
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
