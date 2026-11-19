import { nav } from '../content'
import { scrollToTarget } from '../lib/scroll'

/** Floating pill nav from the wireframe: four tabs, centered over the hero frame. */
export function Nav() {
  return (
    <header className="nav">
      <nav aria-label="Primary" className="nav__pill">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav__link"
            onClick={(e) => {
              e.preventDefault()
              scrollToTarget(item.href)
              history.replaceState(null, '', item.href)
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
