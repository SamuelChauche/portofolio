import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <section id="work" className="projects field field--paper">
      <header className="projects__header">
        <h2 className="projects__title" data-reveal>Selected work</h2>
      </header>

      <ul className="work-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i + 1} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
