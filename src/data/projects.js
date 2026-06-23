import ethccwtfLogo from '../assets/ethccwtf.png'
import sofiaLogo from '../assets/logosofia.png'
import guessnetLogo from '../assets/guessnetlogo.jpg'
import githubLogo from '../assets/github.svg'

export const projects = [
  {
    title: 'Sofia',
    description: 'Web3 chrome extension built on Intuition Protocol',
    url: 'https://sofia.intuition.box/',
    logo: sofiaLogo,
  },
  {
    title: 'Sofia Explorer',
    description: 'Explore atoms, triples & vaults on Intuition',
    url: 'https://explorer.sofia.intuition.box/',
    logo: sofiaLogo,
  },
  {
    title: 'Sofia Blog',
    description: 'Notes, updates & deep-dives from the Sofia team',
    url: 'https://blog.sofia.intuition.box/',
    logo: sofiaLogo,
  },
  {
    title: 'ETHCC.WTF',
    description: 'Speaker quiz game',
    url: 'https://ethcc-wtf.passive-records.box/',
    logo: ethccwtfLogo,
    gradient: 'linear-gradient(135deg, #6b7c3e, #4a5a20)',
  },
  {
    title: 'GuessNet',
    description: 'Prediction market on-chain',
    url: 'https://github.com/intuition-box/Guessnet',
    logo: guessnetLogo,
    gradient: 'linear-gradient(135deg, #1e3a5f, #0c2340)',
  },
  {
    title: 'Pulse',
    description: 'Intuition protocol analytics',
    url: 'https://github.com/intuition-box/Pulse',
    logo: githubLogo,
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
  },
]
