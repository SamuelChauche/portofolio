import './ProjectCard.css'

function ProjectCard({ title, description, url, tags, logo, style }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={style}
    >
      {logo && (
        <div className="project-card__logo">
          <img src={logo} alt={`${title} logo`} />
        </div>
      )}
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <div className="project-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="project-card__tag">{tag}</span>
        ))}
      </div>
      <span className="project-card__link">
        Visit &rarr;
      </span>
    </a>
  )
}

export default ProjectCard
