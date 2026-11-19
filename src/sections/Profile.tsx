import { profile, site } from '../content'
import { SectionHead } from '../components/SectionHead'

export function Profile() {
  return (
    <section className="section" id="profile" aria-labelledby="profile-title">
      <SectionHead index="01" eyebrow={profile.eyebrow} title={profile.title} id="profile-title" />

      <div className="profile">
        <article className="card player-card" data-reveal>
          <div className="player-card__top">
            <img src="/images/portrait-640.webp" alt="" width={640} height={647} loading="lazy" />
            <span className="player-card__rank hud">Rank · Cum Laude</span>
          </div>
          <div className="player-card__body">
            <p className="hud player-card__ign">{site.name}</p>
            <p className="display player-card__name">{site.fullName}</p>
            <ul className="chips">
              {profile.roles.map((r) => (
                <li key={r} className="chip">{r}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="profile__text">
          <p className="profile__lead" data-reveal>{profile.lead}</p>
          {profile.body.map((p) => (
            <p key={p.slice(0, 24)} className="profile__body" data-reveal>{p}</p>
          ))}
          <dl className="stats" data-reveal>
            {profile.stats.map((s) => (
              <div key={s.label} className="stat">
                <dt className="hud">{s.label}</dt>
                <dd className="display">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
