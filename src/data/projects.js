import ethccwtfLogo from '../assets/ethccwtf.png'
import sofiaLogo from '../assets/logosofia.png'
import guessnetLogo from '../assets/guessnetlogo.jpg'
import githubLogo from '../assets/github.svg'
import xLogo from '../assets/x.svg'

export const projects = [
  {
    title: 'Sofia',
    description: 'web3 chrome extension',
    logo: sofiaLogo,
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    orbPos: { top: '-2rem', left: '-2rem', width: '7rem', height: '7rem', opacity: 0.9 },
    links: [
      { label: 'Website', icon: sofiaLogo, url: 'https://sofia.intuition.box/' },
      { label: 'X @0xSofia3', icon: xLogo, url: 'https://x.com/0xSofia3' },
      { label: 'GitHub', icon: githubLogo, url: 'https://github.com/intuition-box/Sofia' },
    ],
  },
  {
    title: 'Sofia Board',
    description: 'Project board',
    url: 'https://board-sofia.intuition.box/',
    logo: sofiaLogo,
    gradient: 'linear-gradient(135deg, #f97316, #eab308)',
    orbPos: { bottom: '-2rem', right: '-2rem', width: '10rem', height: '10rem', opacity: 0.6 },
  },
  {
    title: 'ETHCC.WTF',
    description: 'Speaker quiz',
    url: 'https://ethcc-wtf.passive-records.box/',
    logo: ethccwtfLogo,
    gradient: 'linear-gradient(135deg, #6b7c3e, #4a5a20)',
    orbPos: { top: '-3rem', right: '-1rem', width: '6rem', height: '6rem', opacity: 1 },
  },
  {
    title: 'GuessNet',
    description: 'Prediction market',
    url: 'https://github.com/intuition-box/Guessnet',
    logo: guessnetLogo,
    gradient: 'linear-gradient(135deg, #1e3a5f, #0c2340)',
    orbPos: { bottom: '-1rem', left: '-3rem', width: '9rem', height: '9rem', opacity: 0.7 },
  },
  {
    title: 'Pulse',
    description: 'Intuition protocol tool',
    url: 'https://github.com/intuition-box/Pulse',
    logo: githubLogo,
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    orbPos: { bottom: '-1rem', left: '-2rem', width: '8rem', height: '8rem', opacity: 0.8 },
  },
]
