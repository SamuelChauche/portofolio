import { useEffect, useState } from 'react'
import './VideoMosaic.css'

// Pool of every small web clip.
const clips = import.meta.glob('../assets/video/clips/*.mp4', { eager: true, import: 'default' })
const POOL = Object.keys(clips).sort().map((key) => clips[key])

const TILES = 12
const SWAP_MS = 3000 // each square holds a clip ~3s before changing

function VideoMosaic() {
  // Each tile: which pool clip + a version counter to force a clean remount.
  const [tiles, setTiles] = useState(() =>
    Array.from({ length: TILES }, (_, i) => ({ idx: i % POOL.length, v: 0 }))
  )

  useEffect(() => {
    if (POOL.length <= TILES) return
    let tile = 0
    const step = Math.max(220, Math.round(SWAP_MS / TILES))
    const id = window.setInterval(() => {
      setTiles((prev) => {
        const shown = new Set(prev.map((t) => t.idx))
        let cand = Math.floor(Math.random() * POOL.length)
        let guard = 0
        while (shown.has(cand) && guard < 25) {
          cand = Math.floor(Math.random() * POOL.length)
          guard += 1
        }
        const nextTiles = prev.slice()
        nextTiles[tile] = { idx: cand, v: nextTiles[tile].v + 1 }
        return nextTiles
      })
      tile = (tile + 1) % TILES
    }, step)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="reel" className="mosaic">
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
              preload="auto"
            />
          </li>
        ))}
      </ul>
      <figcaption className="mosaic__cap">ETHGlobal Cannes, all at once.</figcaption>
    </section>
  )
}

export default VideoMosaic
