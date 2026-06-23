import { useState } from 'react'
import './Gallery.css'

// Auto-collect every resized film scan in assets/film.
const modules = import.meta.glob('../assets/film/*.jpg', { eager: true, import: 'default' })
const allPhotos = Object.values(modules)

// Fisher-Yates shuffle so the gallery order varies between visits.
function shuffle(items) {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Pointer-driven 3D tilt + glare. CSS vars set directly on the node, no state.
function handleTilt(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width
  const py = (e.clientY - r.top) / r.height
  el.style.setProperty('--ry', ((px - 0.5) * 10).toFixed(2) + 'deg')
  el.style.setProperty('--rx', ((0.5 - py) * 10).toFixed(2) + 'deg')
  el.style.setProperty('--mx', (px * 100).toFixed(1) + '%')
  el.style.setProperty('--my', (py * 100).toFixed(1) + '%')
}

function resetTilt(e) {
  const el = e.currentTarget
  el.style.setProperty('--rx', '0deg')
  el.style.setProperty('--ry', '0deg')
}

function Gallery() {
  const [photos] = useState(() => shuffle(allPhotos))

  return (
    <section id="film" className="gallery field field--panel">
      <header className="gallery__header">
        <h2 className="gallery__title" data-reveal>Shot on film</h2>
        <p className="gallery__sub" data-reveal>Travels, 35mm.</p>
      </header>

      <div className="gallery__masonry">
        {photos.map((src, i) => (
          <figure
            key={src}
            className="gallery__item"
            data-reveal
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="gallery__media">
              <img src={src} alt={`Travel photograph on film ${i + 1}`} loading="lazy" />
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
