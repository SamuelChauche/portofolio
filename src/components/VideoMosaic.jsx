import { useEffect, useRef, useState } from 'react'
import './VideoMosaic.css'

// Pool of every web clip.
const clips = import.meta.glob('../assets/video/clips/*.mp4', { eager: true, import: 'default' })
const POOL = Object.keys(clips).sort().map((key) => clips[key])

const TILES = 9
const SWAP_MS = 5000 // each square holds a clip ~5s before changing

function shuffledIndices() {
  const a = POOL.map((_, i) => i)
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function makeTile(idx, version) {
  return { idx, v: version, s: Math.random() }
}

function VideoMosaic() {
  const sectionRef = useRef(null)
  const queueRef = useRef([])
  const [active, setActive] = useState(false)
  const [tiles, setTiles] = useState(() => {
    const q = shuffledIndices()
    return Array.from({ length: TILES }, (_, i) => makeTile(q[i % POOL.length], 0))
  })

  // Track on-screen state so nothing runs while the mosaic is out of view.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return undefined
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0.05,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Play + swap only while visible; pause and stop the timer otherwise.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return undefined
    const videos = () => el.querySelectorAll('video')

    if (!active) {
      videos().forEach((v) => v.pause())
      return undefined
    }

    videos().forEach((v) => {
      const p = v.play()
      if (p && p.catch) p.catch(() => {})
    })

    if (POOL.length <= TILES) return undefined
    queueRef.current = shuffledIndices()
    let tile = 0
    const step = Math.max(300, Math.round(SWAP_MS / TILES))
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
        next[tile] = makeTile(pick, next[tile].v + 1)
        return next
      })
      tile = (tile + 1) % TILES
    }, step)
    return () => window.clearInterval(id)
  }, [active])

  // Start each clip at a random, duration-aware moment.
  const onMeta = (e) => {
    const v = e.currentTarget
    if (v.duration && Number.isFinite(v.duration) && v.duration > 3) {
      try { v.currentTime = Math.random() * (v.duration - 2) } catch { /* ignore */ }
    }
  }

  return (
    <section id="videos" ref={sectionRef} className="mosaic">
      <ul className="mosaic__grid">
        {tiles.map((t, i) => (
          <li key={i} className="mosaic__cell">
            <video
              key={`${t.idx}-${t.v}`}
              className="mosaic__video"
              src={`${POOL[t.idx]}#t=${(t.s * 4).toFixed(1)}`}
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
