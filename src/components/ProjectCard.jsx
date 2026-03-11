import './ProjectCard.css'

function ProjectCard({ title, description, url, logo, logoCrop, style }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={style}
    >
      {logo && (
        <div className={`project-card__logo${logoCrop ? ' project-card__logo--crop' : ''}`}>
          <img src={logo} alt={`${title} logo`} />
        </div>
      )}
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
    </a>
  )
}

export default ProjectCard
