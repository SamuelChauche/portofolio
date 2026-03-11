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
  },
  {
    title: 'ETHCC.WTF',
    description: 'Speaker quiz',
    url: 'https://ethcc-wtf.passive-records.box/',
    logo: ethccwtfLogo,
  },
  {
    title: 'GuessNet',
    description: 'Prediction market',
    url: 'https://github.com/intuition-box/Guessnet',
    logo: guessnetLogo,
  },
]
