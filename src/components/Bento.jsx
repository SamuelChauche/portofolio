import './Bento.css'

const skills = [
  'React', 'TypeScript', 'Node.js', 'Solidity', 'Chrome Extension',
  'Intuition Protocol', 'Base', 'Phala TEE', 'CSS/BEM', 'UX/UI Design',
]

function Bento() {
  return (
    <section className="bento section">
      <div className="bento__grid">
        <div className="bento__card bento__card--bio">
          <h3 className="bento__title">Short Bio</h3>
          <p className="bento__text">
            Co-founder &amp; builder. I went from 6 years in technical support to shipping Web3 products on mainnet. I bridge the gap between blockchain complexity and real user experience — because most Web3 apps work on testnet but fail real people.
          </p>
        </div>
        <div className="bento__card bento__card--skills">
          <h3 className="bento__title">Skills / Stack</h3>
          <div className="bento__tags">
            {skills.map((skill) => (
              <span key={skill} className="bento__tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="bento__card bento__card--stats">
          <h3 className="bento__title">Contributions</h3>
          <ul className="bento__list">
            <li>3rd place — Intuition Builder's Epoch with GuessNet</li>
            <li>ETH Global Cannes alumni</li>
            <li>Sofia live on mainnet — Intuition Protocol accelerator</li>
            <li>Previously Application Support @ Billwerk+ · Salesforce Ranger</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Bento
