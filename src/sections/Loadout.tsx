import { loadout } from '../content'
import { SectionHead } from '../components/SectionHead'

export function Loadout() {
  return (
    <section className="section" id="loadout" aria-labelledby="loadout-title">
      <SectionHead index="02" eyebrow={loadout.eyebrow} title={loadout.title} id="loadout-title" />

      <div className="loadout">
        {loadout.groups.map((g) => (
          <article key={g.id} className="card slot" data-reveal>
            <header className="slot__head">
              <p className="hud slot__label">{g.slot}</p>
              <h3 className="display slot__title">{g.title}</h3>
              <p className="slot__blurb">{g.blurb}</p>
            </header>
            <ul className="slot__grid">
              {g.tools.map((t) => (
                <li key={t.name} className="tool">
                  {t.logo && <img src={`/logos/${t.logo}.svg`} alt="" width={22} height={22} loading="lazy" className={t.invert ? 'tool__logo--invert' : undefined} />}
                  <span>{t.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
