import profilePhoto from '../assets/profile.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__title-row">
          <img src={profilePhoto} alt="Profile photo" className="hero__logo" />
          <div className="hero__text">
            <h1 className="hero__title">Passive<br />Records</h1>
            <p className="hero__tagline">Every action leaves a record.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
