import profileImg from '../assets/profile.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__avatar">
          <img src={profileImg} alt="passive-records.box" />
        </div>
        <h1 className="hero__title">passive-records.box</h1>
        <p className="hero__tagline">Building on the decentralized web</p>
      </div>
    </section>
  )
}

export default Hero
