import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const ENDPOINT = 'https://formsubmit.co/ajax/samydavidjames@gmail.com'

function Contact() {
  const rootRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  // The stage pins; scrolling a few times reveals the form, then releases to
  // the footer. Reduced motion leaves the form visible from the start.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      const form = rootRef.current.querySelector('.contact__form')
      if (!form) return
      gsap.set(form, { opacity: 0, y: 56, pointerEvents: 'none' })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
      tl.to(form, { opacity: 1, y: 0, pointerEvents: 'auto', ease: 'power1.out', duration: 0.45 })
      tl.to({}, { duration: 0.55 }) // hold the form on screen for the rest of the pin
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const label =
    status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent, thanks' : 'Send'

  return (
    <section id="contact" ref={rootRef} className="contact">
      <div className="contact__stage">
        <h2 className="contact__title">
          Let&apos;s build<br />something.
        </h2>

        <p className="contact__sub">
          Open to Web3 collaborations, open source, and good conversations.
        </p>

        <ul className="contact__channels">
          <li>
            <a className="contact__channel" href="https://x.com/passive_records" target="_blank" rel="noopener noreferrer">
              X / Twitter<span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a className="contact__channel" href="https://github.com/SamuelChauche" target="_blank" rel="noopener noreferrer">
              GitHub<span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a className="contact__channel" href="https://www.linkedin.com/in/samuel-chauche/" target="_blank" rel="noopener noreferrer">
              LinkedIn<span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>

        <form className="contact__form" onSubmit={onSubmit}>
          <input type="hidden" name="_subject" value="New message from passive-records.box" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input className="contact__field" type="text" name="name" placeholder="Name" required />
          <input className="contact__field" type="email" name="email" placeholder="Email" required />
          <textarea
            className="contact__field contact__field--area"
            name="message"
            placeholder="What do you have in mind?"
            rows={4}
            required
          />
          <button className="contact__send" type="submit" disabled={status === 'sending' || status === 'sent'}>
            {label}
          </button>
          {status === 'error' && (
            <p className="contact__note" role="alert">
              Could not send right now. Reach me on X or GitHub above.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
