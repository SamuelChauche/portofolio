import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact field field--accent">
      <h2 className="contact__title" data-reveal>
        Let&apos;s build<br />something.
      </h2>

      <p className="contact__sub" data-reveal>
        Open to Web3 collaborations, open source, and good conversations.
      </p>

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
