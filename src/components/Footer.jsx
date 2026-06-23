import './Footer.css'

const LINKEDIN = 'https://www.linkedin.com/in/samuel-chauche/'

function Footer() {
  return (
    <footer className="footer field field--paper">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__brand">© passive-records.box</span>
          <span className="footer__copy label">{new Date().getFullYear()} · All records on-chain</span>
        </div>

        <div className="footer__right">
          <div className="footer__socials label">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/SamuelChauche" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://x.com/passive_records" target="_blank" rel="noopener noreferrer">X ↗</a>
          </div>
          <nav className="footer__links label">
            <a href="#top">Top</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#photo-reel">Film</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
