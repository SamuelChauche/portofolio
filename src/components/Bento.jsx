import portrait from '../assets/portrait.jpg'
import reactLogo from '../assets/logos/react.svg'
import tsLogo from '../assets/logos/typescript.svg'
import nodeLogo from '../assets/logos/nodedotjs.svg'
import solidityLogo from '../assets/logos/solidity.svg'
import figmaLogo from '../assets/logos/figma.svg'
import claudeLogo from '../assets/logos/claude.svg'
import jiraLogo from '../assets/logos/jira.svg'
import notionLogo from '../assets/logos/notion.svg'
import framerLogo from '../assets/logos/framer.svg'
import linearLogo from '../assets/logos/linear.svg'
import tailwindLogo from '../assets/logos/tailwindcss.svg'
import githubLogo from '../assets/logos/github.svg'
import './Bento.css'

const tools = [
  { name: 'React', logo: reactLogo },
  { name: 'TypeScript', logo: tsLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Solidity', logo: solidityLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'Claude', logo: claudeLogo },
  { name: 'Jira', logo: jiraLogo },
  { name: 'Notion', logo: notionLogo },
  { name: 'Framer', logo: framerLogo },
  { name: 'Linear', logo: linearLogo },
  { name: 'Tailwind CSS', logo: tailwindLogo },
  { name: 'GitHub', logo: githubLogo },
]

const milestones = [
  "3rd place at Intuition Builder's Epoch, with GuessNet",
  'Regular ETHGlobal hackathon builder, Cannes 2025 and 2026',
  'Sofia live on mainnet via the Intuition Protocol accelerator',
  'Previously Application Support @ Billwerk+, Salesforce Ranger',
]

function Bento() {
  return (
    <>
      <section id="about" className="about">
        <div className="about__portrait field field--panel" data-reveal>
          <span className="label">About</span>
          <img src={portrait} alt="Portrait of Samuel Chauche" className="about__photo" />
          <p className="about__name">UX designer &amp; Web3 builder</p>
          <p className="about__role">
            I design the flows, write the copy, and ship the contracts.
          </p>
        </div>

        <div className="about__body field field--paper" data-reveal>
          <p className="about__lede">
            I design Web3 products that feel obvious. Most apps ship for the demo
            and forget the person using them, so I sweat the flows, the copy, and
            the edge cases until it just works.
          </p>

          <div className="about__block">
            <span className="about__grouplabel">Tools &amp; stack</span>
            <ul className="about__stack">
              {tools.map((t) => (
                <li key={t.name} className="about__tool" title={t.name}>
                  <img src={t.logo} alt={t.name} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>

          <div className="about__block">
            <span className="about__grouplabel">Contributions</span>
            <ul className="about__list">
              {milestones.map((m) => (
                <li key={m} className="about__milestone">{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Bento
