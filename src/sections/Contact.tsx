import { contact, site } from '../content'
import { GitHubIcon, MailIcon } from '../components/Icons'

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__panel" data-reveal>
        <div className="contact__glow" aria-hidden />
        <p className="hud contact__eyebrow">
          <span className="live-dot" aria-hidden />
          {contact.eyebrow}
        </p>
        <h2 className="display contact__title" id="contact-title">{contact.title}</h2>
        <p className="contact__body">{contact.body}</p>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${site.email}`}>
            <MailIcon width={18} height={18} />
            {site.email}
          </a>
          <a className="btn btn--ghost" href={site.github} target="_blank" rel="noreferrer">
            <GitHubIcon width={18} height={18} />
            {site.githubLabel}
          </a>
        </div>
      </div>

      <footer className="footer hud">
        <span>{contact.sign}</span>
        <span>© {new Date().getFullYear()} {site.fullName} · {site.location}</span>
      </footer>
    </section>
  )
}
