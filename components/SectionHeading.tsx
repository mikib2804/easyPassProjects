export function SectionHeading({ title, eyebrow, subtitle }: { title: string; eyebrow?: string; subtitle?: string }) {
  return <div className="section-heading">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2><span className="heading-line" aria-hidden="true" />
    {subtitle && <p>{subtitle}</p>}
  </div>;
}
