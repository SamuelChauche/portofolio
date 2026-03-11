import Hero from './components/Hero'
import Bento from './components/Bento'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ColorBends from './components/ColorBends'
import './App.css'

function App() {
  return (
    <>
      <div className="app-bg">
        <ColorBends
          rotation={120}
          speed={0.2}
          scale={3}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0}
          noise={0.1}
          transparent
          autoRotate={0}
        />
      </div>
      <main>
        <Hero />
        <Bento />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
