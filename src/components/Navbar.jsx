import { useState, useEffect } from 'react'
import SoundToggle from './SoundToggle'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <a href="#top" className="navbar__brand label">© passive-records.box</a>
        <SoundToggle />
      </nav>

      <a href="#contact" className="contact-badge" aria-label="Contact me">
        <span>Contact</span>
        <span>me ↗</span>
      </a>
    </>
  )
}

export default Navbar
