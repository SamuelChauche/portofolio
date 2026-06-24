import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './PhotoReel.css'

gsap.registerPlugin(ScrollTrigger)

const films = import.meta.glob('../assets/film/*.jpg', { eager: true, import: 'default' })
const POOL = Object.values(films)
const COUNT = 7

function pickShots() {
  const a = [...POOL]
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a.slice(0, Math.min(COUNT, a.length))
}

function PhotoReel() {
  const rootRef = useRef(null)
  // A fresh random set on every visit, re-rolled each time the trigger re-enters.
  const [shots, setShots] = useState(pickShots)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray('.reel__layer')
      if (layers.length < 2) return
      gsap.set(layers, { opacity: 0 })
      gsap.set(layers[0], { opacity: 1 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.4,
          onEnter: () => setShots(pickShots()),
          onEnterBack: () => setShots(pickShots()),
        },
      })
      // Hold each photo stable, then snap quickly to the next: roughly one
      // photo per short scroll instead of a long continuous fade.
      const HOLD = 0.82
      const FADE = 0.18
      let pos = 0
      for (let i = 1; i < layers.length; i += 1) {
        pos += HOLD
        tl.to(layers[i], { opacity: 1, ease: 'power1.inOut', duration: FADE }, pos)
        pos += FADE
      }
      // Hold the last photo a beat: a couple of scrolls before the next section.
      tl.to({}, { duration: 1.4 })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="photo-reel" ref={rootRef} className="reel">
      <div className="reel__stage">
        {shots.map((src, i) => (
          <div className="reel__layer" key={i} style={{ zIndex: i + 1 }}>
            <img className="reel__bg" src={src} alt="" aria-hidden="true" />
            <img className="reel__img" src={src} alt={`Travel photograph on film ${i + 1}`} />
          </div>
        ))}
        <span className="reel__label label">Shot on film, 35mm</span>
      </div>
    </section>
  )
}

export default PhotoReel
