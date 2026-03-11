import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ColorBends from './components/ColorBends'
import './App.css'

function App() {
  return (
    <>
      <div className="app-bg">
        <ColorBends
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0}
          noise={0.1}
          transparent
          autoRotate={0}
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
