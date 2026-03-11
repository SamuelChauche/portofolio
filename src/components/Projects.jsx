import { useRef } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { ParticleCard, GlobalSpotlight, useMobileDetection } from './MagicBento'
import './Projects.css'

function Projects() {
  const gridRef = useRef(null)
  const isMobile = useMobileDetection()
  const glowColor = '200, 191, 169'

  return (
    <section id="projects" className="section projects bento-section">
      <GlobalSpotlight
        gridRef={gridRef}
        disableAnimations={isMobile}
        spotlightRadius={400}
        glowColor={glowColor}
      />
      <div className="projects__grid" ref={gridRef}>
        {projects.map((project, i) => (
          <ParticleCard
            key={project.title}
            className="magic-bento-card magic-bento-card--border-glow"
            disableAnimations={isMobile}
            particleCount={12}
            glowColor={glowColor}
            clickEffect
            style={{
              animationDelay: `${0.1 + i * 0.15}s`,
              borderRadius: '12px',
              '--glow-color': glowColor
            }}
          >
            <ProjectCard {...project} />
          </ParticleCard>
        ))}
      </div>
    </section>
  )
}

export default Projects
