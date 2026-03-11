import './ProjectCard.css'

function ProjectCard({ title, description, url, logo, logoCrop, links, gradient, orbPos, style }) {
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
      {gradient && (
        <div className="project-card__bg">
          <div
            className="project-card__orb"
            style={{ background: gradient, ...orbPos }}
          />
        </div>
      )}
      <div className="project-card__content">
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
      </div>
    </Tag>
  )
}

export default ProjectCard
