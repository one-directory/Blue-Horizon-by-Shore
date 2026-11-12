interface SectionHeadingProps {
  id?: string;
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  id,
  overline,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const textAlign =
    align === "center" ? "heading-center" : align === "right" ? "heading-right" : "heading-left";

  return (
    <div id={id} className={`section-heading ${textAlign} ${className}`}>
      {overline && (
        <span className={`text-overline ${light ? "overline-light" : "overline-dark"}`}>
          {overline}
        </span>
      )}
      <h2 className={`text-h2 heading-title ${light ? "title-light" : "title-dark"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`heading-subtitle ${light ? "subtitle-light" : "subtitle-dark"}`}>
          {subtitle}
        </p>
      )}
      <span
        className={`gold-line heading-line ${align === "center" ? "gold-line-center" : ""}`}
        aria-hidden="true"
      />

      
    </div>
  );
}
