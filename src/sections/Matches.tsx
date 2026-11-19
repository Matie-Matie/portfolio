import { matches } from '../content'
import { SectionHead } from '../components/SectionHead'
import { ArrowUpRight } from '../components/Icons'

export function Matches() {
  return (
    <section className="section" id="matches" aria-labelledby="matches-title">
      <SectionHead index="03" eyebrow={matches.eyebrow} title={matches.title} id="matches-title" />

      <ol className="matches">
        {matches.items.map((m) => (
          <li key={m.id} className="card match" data-reveal>
            <div className="match__media">
              <img src={m.image} alt={m.imageAlt} loading="lazy" width={1200} height={750} />
              <span className="match__result hud" aria-label="Shipped">W</span>
            </div>
            <div className="match__body">
              <p className="hud match__meta">
                Match {m.index} <span aria-hidden>·</span> {m.tagline}
              </p>
              <h3 className="display match__title">{m.title}</h3>
              <p className="match__desc">{m.description}</p>
              <ul className="chips">
                {m.stack.map((s) => (
                  <li key={s} className="chip chip--ghost">{s}</li>
                ))}
              </ul>
              {m.source && (
                <a className="btn btn--ghost" href={m.source.href} target="_blank" rel="noreferrer">
                  {m.source.label}
                  <ArrowUpRight width={16} height={16} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
