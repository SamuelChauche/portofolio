import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero field field--paper">
      <span className="hero__kicker label">Web3 builder, portfolio 2026</span>

      <h1 className="hero__lockup">
        Passive<br />Records<span className="hero__arrow" aria-hidden="true">↓</span>
      </h1>

      <p className="hero__tagline">
        I build <em>Web3 products</em> that turn on-chain activity into things
        people actually use, from first click to mainnet.
      </p>
    </section>
  )
}

export default Hero
