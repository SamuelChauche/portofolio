import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bento from './components/Bento'
import VideoMosaic from './components/VideoMosaic'
import Projects from './components/Projects'
import PhotoReel from './components/PhotoReel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useReveal } from './hooks/useReveal'
import './App.css'

// Every click anywhere swaps the whole site's typeface (these all share
// --font-display via --font-ui).
const FONTS = [
  "'Inter Tight', ui-sans-serif, system-ui, sans-serif",
  "'Bricolage Grotesque', sans-serif",
  "'Anton', sans-serif",
  "'Space Mono', monospace",
  "'Playfair Display', serif",
]

function App() {
  useReveal()

  useEffect(() => {
    let i = 0
    const onClick = () => {
      i = (i + 1) % FONTS.length
      document.documentElement.style.setProperty('--font-display', FONTS[i])
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
