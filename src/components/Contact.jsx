import { useState } from 'react'
import './Contact.css'

const ENDPOINT = 'https://formsubmit.co/ajax/samydavidjames@gmail.com'

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

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
    <section id="contact" className="contact field field--accent">
      <h2 className="contact__title" data-reveal>
        Let&apos;s build<br />something.
      </h2>

      <p className="contact__sub" data-reveal>
        Open to Web3 collaborations, open source, and good conversations.
      </p>

      <form className="contact__form" onSubmit={onSubmit} data-reveal>
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
