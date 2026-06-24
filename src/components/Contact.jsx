import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const ENDPOINT = 'https://formsubmit.co/ajax/samydavidjames@gmail.com'

function Contact() {
  const rootRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  // The form reveals physically as you scroll into the section; the links are
  // there by default. Reduced motion leaves the form visible from the start.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      const form = rootRef.current.querySelector('.contact__form')
      if (!form) return
      gsap.set(form, { opacity: 0, y: 48, pointerEvents: 'none' })
      gsap.to(form, {
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          end: 'top 28%',
          scrub: true,
        },
      })
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
    <section id="contact" ref={rootRef} className="contact field field--accent">
      <h2 className="contact__title" data-reveal>
        Let&apos;s build<br />something.
      </h2>

      <p className="contact__sub" data-reveal>
        Open to Web3 collaborations, open source, and good conversations.
      </p>

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
            Could not send right now. Reach me on X or GitHub below.
          </p>
        )}
      </form>

      <ul className="contact__channels" data-reveal>
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
    </section>
  )
}

export default Contact
