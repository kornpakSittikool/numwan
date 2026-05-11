type SectionHeaderProps = Readonly<{
  anchorId?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  centered?: boolean;
}>;

export function SectionHeader({
  anchorId,
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`section-header${centered ? " section-header-centered" : ""}`}
    >
      <div>
        {eyebrow ? <span className="section-kicker">{eyebrow}</span> : null}
        <h2
          id={anchorId}
          className={`section-title mb-2${anchorId ? " p-2" : ""}`}
        >
          {title}
        </h2>
        {description ? (
          <p className="section-summary mb-0">{description}</p>
        ) : null}
      </div>
      {actionLabel && actionHref ? (
        <a className="section-link" href={actionHref}>
          {actionLabel}
        </a>
      ) : null}
    </div>
  );
}
