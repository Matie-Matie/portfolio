import { trophies } from '../content'
import { SectionHead } from '../components/SectionHead'
import { TrophyIcon } from '../components/Icons'

export function Trophies() {
  return (
    <section className="section" id="trophies" aria-labelledby="trophies-title">
      <SectionHead index="05" eyebrow={trophies.eyebrow} title={trophies.title} id="trophies-title" />

      <div className="trophies">
        {trophies.columns.map((c) => (
          <article key={c.title} className="card trophy" data-reveal>
            <h3 className="hud trophy__title">
              <TrophyIcon width={18} height={18} />
              {c.title}
            </h3>
            <ul className="trophy__list">
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
