import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bento from './components/Bento'
import VideoMosaic from './components/VideoMosaic'
import Projects from './components/Projects'
import PhotoReel from './components/PhotoReel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import { useReveal } from './hooks/useReveal'
import './App.css'

// Every click anywhere swaps the whole site's typeface (all text shares
// --font-display via --font-ui).
const FONTS = [
  "'Inter Tight', ui-sans-serif, system-ui, sans-serif",
  "'Bricolage Grotesque', sans-serif",
  "'Anton', sans-serif",
  "'Space Mono', monospace",
  "'Playfair Display', serif",
]

const NEEDED = 3 // clicks anywhere before the page unlocks

function App() {
  useReveal()
  const [clicks, setClicks] = useState(0)
  const locked = clicks < NEEDED

  // Hold the scroll until the visitor has clicked a few times.
  useEffect(() => {
    document.documentElement.classList.toggle('scroll-locked', locked)
    return () => document.documentElement.classList.remove('scroll-locked')
  }, [locked])

  // Any click: restyle the typeface and count toward the unlock.
  useEffect(() => {
    let i = 0
    const onClick = () => {
      i = (i + 1) % FONTS.length
      document.documentElement.style.setProperty('--font-display', FONTS[i])
      setClicks((c) => (c < NEEDED ? c + 1 : c))
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Navbar />
      <main className="stack">
        <Hero />
        <Bento />
        <VideoMosaic />
        <Projects />
        <PhotoReel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
