import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#" className="navbar__logo">
        passive-records.box
      </a>
      <div className="navbar__links">
        <a href="#about">About</a>
        <span className="navbar__sep">/</span>
        <a href="#projects">Projects</a>
        <span className="navbar__sep">/</span>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
