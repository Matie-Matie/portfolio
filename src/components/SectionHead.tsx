type Props = { index: string; eyebrow: string; title: string; id: string }

/** Broadcast-style section header: round number, label and a hard red rule. */
export function SectionHead({ index, eyebrow, title, id }: Props) {
  return (
    <div className="shead" data-reveal>
      <p className="shead__eyebrow hud">
        <span className="shead__index">{index}</span>
        {eyebrow}
      </p>
      <h2 className="shead__title display" id={id}>
        {title}
      </h2>
    </div>
  )
}
