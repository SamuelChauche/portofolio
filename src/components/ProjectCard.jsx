import './ProjectCard.css'

function ProjectCard({ title, description, url, logo, links, index }) {
  const primaryUrl = url || links?.find((l) => l.label?.toLowerCase().includes('website'))?.url || links?.[0]?.url
  const Tag = primaryUrl ? 'a' : 'div'
  const tagProps = primaryUrl
    ? { href: primaryUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <li className="project-row" data-reveal>
      <Tag {...tagProps} className="project-row__main">
        <span className="project-row__no">{String(index).padStart(2, '0')}</span>

        <span className="project-row__id">
          {logo && (
            <span className="project-row__logo">
              <img src={logo} alt="" aria-hidden="true" />
            </span>
          )}
          <span className="project-row__title">{title}</span>
        </span>

        <span className="project-row__desc">{description}</span>

        <span className="circle-btn project-row__go" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </Tag>

      {links && (
        <div className="project-row__links">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row__link ink-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </li>
  )
}

export default ProjectCard
