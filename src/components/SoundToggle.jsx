import { useEffect, useRef, useState } from 'react'
import './SoundToggle.css'

const SET_URL = 'https://soundcloud.com/shoenmusic/sets/mix-1'
const WIDGET_SRC =
  'https://w.soundcloud.com/player/?url=' +
  encodeURIComponent(SET_URL) +
  '&auto_play=false&visual=false&hide_related=true&show_comments=false' +
  '&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false' +
  '&sharing=false&buying=false&download=false'

let apiPromise = null
function loadWidgetApi() {
  if (window.SC && window.SC.Widget) return Promise.resolve()
  if (apiPromise) return apiPromise
  apiPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://w.soundcloud.com/player/api.js'
    s.async = true
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
  return apiPromise
}

function SoundToggle() {
  const iframeRef = useRef(null)
  const widgetRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    let cancelled = false
    loadWidgetApi()
      .then(() => {
        if (cancelled || widgetRef.current || !iframeRef.current || !window.SC) return
        const Events = window.SC.Widget.Events
        const w = window.SC.Widget(iframeRef.current)
        widgetRef.current = w
        w.bind(Events.READY, () => w.setVolume(60))
        w.bind(Events.PLAY, () => setPlaying(true))
        w.bind(Events.PAUSE, () => setPlaying(false))
        // Loop the mix endlessly.
        w.bind(Events.FINISH, () => {
          w.seekTo(0)
          w.play()
        })
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const toggle = () => {
    const w = widgetRef.current
    if (!w) return
    if (playing) w.pause()
    else w.play()
  }

  return (
    <div className="sound">
      <iframe
        ref={iframeRef}
        className="sound__frame"
        title="ambient"
        src={WIDGET_SRC}
        allow="autoplay; encrypted-media"
        scrolling="no"
        tabIndex={-1}
        aria-hidden="true"
      />
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
        <span className="sound-toggle__label">{playing ? 'Sound on' : 'Sound off'}</span>
      </button>
    </div>
  )
}

export default SoundToggle
