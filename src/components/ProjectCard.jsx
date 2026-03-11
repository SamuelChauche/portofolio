import './ProjectCard.css'

function ProjectCard({ title, description, url, logo, logoCrop, links, style }) {
  const Tag = url ? 'a' : 'div'
  const tagProps = url
    ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Tag
      {...tagProps}
      className="project-card"
      style={style}
    >
      <div className="project-card__header">
        {logo && (
          <div className={`project-card__logo${logoCrop ? ' project-card__logo--crop' : ''}`}>
            <img src={logo} alt={`${title} logo`} />
          </div>
        )}
        {links && (
          <div className="project-card__links">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                title={link.label}
              >
                <img src={link.icon} alt={link.label} />
              </a>
            ))}
          </div>
        )}
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
    </Tag>
  )
}

export default ProjectCard
