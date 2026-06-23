import { useEffect, useRef, useState } from 'react'
import './VideoMosaic.css'

// Pool of every web clip.
const clips = import.meta.glob('../assets/video/clips/*.mp4', { eager: true, import: 'default' })
const POOL = Object.keys(clips).sort().map((key) => clips[key])

const TILES = 12
const SWAP_MS = 3000 // each square holds a clip ~3s before changing

function shuffledIndices() {
  const a = POOL.map((_, i) => i)
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function VideoMosaic() {
  const sectionRef = useRef(null)
  const queueRef = useRef([])
  const [tiles, setTiles] = useState(() => {
    const q = shuffledIndices()
    return Array.from({ length: TILES }, (_, i) => ({ idx: q[i % POOL.length], v: 0 }))
  })

  // Roll one tile at a time onto the next queued clip, cycling through the
  // whole pool (shuffled) so every video gets shown before any repeats.
  useEffect(() => {
    if (POOL.length <= TILES) return
    queueRef.current = shuffledIndices()
    let tile = 0
    const step = Math.max(220, Math.round(SWAP_MS / TILES))
    const id = window.setInterval(() => {
      setTiles((prev) => {
        const shown = new Set(prev.map((t) => t.idx))
        let q = queueRef.current
        if (q.length === 0) q = queueRef.current = shuffledIndices()
        let pick = -1
        for (let k = 0; k < q.length; k += 1) {
          if (!shown.has(q[k])) { pick = q[k]; q.splice(k, 1); break }
        }
        if (pick === -1) pick = q.shift()
        const next = prev.slice()
        next[tile] = { idx: pick, v: next[tile].v + 1 }
        return next
      })
      tile = (tile + 1) % TILES
    }, step)
    return () => window.clearInterval(id)
  }, [])

  // Only play this mosaic's videos while it is on screen (two mosaics = a lot).
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        el.querySelectorAll('video').forEach((v) => {
          if (entry.isIntersecting) {
            const p = v.play()
            if (p && p.catch) p.catch(() => {})
          } else {
            v.pause()
          }
        })
      },
      { threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Start each clip at a random moment, so long videos reveal different parts.
  const onMeta = (e) => {
    const v = e.currentTarget
    if (v.duration > 4) {
      try { v.currentTime = Math.random() * (v.duration - 3) } catch { /* ignore */ }
    }
  }

  return (
    <section ref={sectionRef} className="mosaic">
      <ul className="mosaic__grid">
        {tiles.map((t, i) => (
          <li key={i} className="mosaic__cell">
            <video
              key={`${t.idx}-${t.v}`}
              className="mosaic__video"
              src={POOL[t.idx]}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={onMeta}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default VideoMosaic
