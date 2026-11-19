import { career } from '../content'
import { SectionHead } from '../components/SectionHead'

export function Career() {
  return (
    <section className="section" id="career" aria-labelledby="career-title">
      <SectionHead index="04" eyebrow={career.eyebrow} title={career.title} id="career-title" />

      <ol className="bracket">
        {career.stages.map((s) => (
          <li key={s.round} className={`card stage${s.live ? ' stage--live' : ''}`} data-reveal>
            <p className="hud stage__round">
              {s.live && <span className="live-dot" aria-hidden />}
              {s.round}
            </p>
            <p className="stage__when hud">{s.when}</p>
            <h3 className="display stage__role">{s.role}</h3>
            <p className="stage__org">{s.org}</p>
            <p className="stage__body">{s.body}</p>
            <ul className="chips">
              {s.tags.map((t) => (
                <li key={t} className="chip chip--ghost">{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
