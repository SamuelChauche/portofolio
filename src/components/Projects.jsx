import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="projects__grid">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="project-card-wrapper"
            style={{ animationDelay: `${0.1 + i * 0.15}s` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
