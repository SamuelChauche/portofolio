import { useRef, useState } from 'react'
import melodic from '../assets/audio/track.mp3'
import ambient from '../assets/audio/ambient.mp3'
import jazz from '../assets/audio/jazz.mp3'
import synth from '../assets/audio/synth.mp3'
import './SoundToggle.css'

const TRACKS = [
  { src: melodic, title: 'Melodic Tap' },
  { src: ambient, title: 'Ambient XP' },
  { src: jazz, title: 'Erika Remix' },
  { src: synth, title: 'Element Synth' },
]

function SoundToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [idx, setIdx] = useState(0)

  const playTrack = (i) => {
    const a = audioRef.current
    if (!a) return
    if (a.dataset.idx !== String(i)) {
      a.src = TRACKS[i].src
      a.dataset.idx = String(i)
    }
    a.volume = 0.55
    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) {
      a.pause()
      setPlaying(false)
    } else {
      playTrack(idx)
    }
  }

  const next = (e) => {
    e.stopPropagation()
    const ni = (idx + 1) % TRACKS.length
    setIdx(ni)
    playTrack(ni)
  }

  return (
    <div className="sound">
      <audio ref={audioRef} loop preload="none" />
      <button
        type="button"
        className={`sound-toggle${playing ? ' is-playing' : ''}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pause the music' : 'Play the music'}
      >
        <span className="sound-toggle__bars" aria-hidden="true">
          <i /><i /><i /><i />
        </span>
        <span className="sound-toggle__label">{playing ? TRACKS[idx].title : 'Sound off'}</span>
      </button>
      <button
        type="button"
        className={`sound-next${playing ? ' is-playing' : ''}`}
        onClick={next}
        aria-label="Next track"
        title="Next track"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2z" />
        </svg>
      </button>
    </div>
  )
}

export default SoundToggle
