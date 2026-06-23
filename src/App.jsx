import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bento from './components/Bento'
import VideoMosaic from './components/VideoMosaic'
import Projects from './components/Projects'
import PhotoReel from './components/PhotoReel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import './App.css'

function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main className="stack">
        <Hero />
        <Bento />
        <VideoMosaic />
        <VideoMosaic />
        <Projects />
        <PhotoReel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
