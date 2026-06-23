import './ProjectCard.css'

function ProjectCard({ title, description, url, logo, links, index }) {
  const primaryUrl =
    url ||
    links?.find((l) => l.label?.toLowerCase().includes('website'))?.url ||
    links?.[0]?.url
  const Tag = primaryUrl ? 'a' : 'div'
  const tagProps = primaryUrl
    ? { href: primaryUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <li className="work-card" data-reveal>
      <Tag {...tagProps} className="work-card__link">
        <div className="work-card__top">
          <span className="work-card__no">{String(index).padStart(2, '0')}</span>
          {logo && (
            <span className="work-card__logo">
              <img src={logo} alt="" aria-hidden="true" />
            </span>
          )}
        </div>

        <h3 className="work-card__title">{title}</h3>
        <p className="work-card__desc">{description}</p>

        <span className="work-card__go" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </Tag>

      {links && (
        <div className="work-card__links">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link"
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
