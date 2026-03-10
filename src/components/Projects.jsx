import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="projects__heading">Projects</h2>
      <div className="projects__grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            {...project}
            style={{ animationDelay: `${0.1 + i * 0.15}s` }}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
