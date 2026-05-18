import PropTypes from "prop-types";

/**
 * Icon renders SVG icons from the public/icons.svg sprite using the
 * <svg><use> pattern. Decorative icons are hidden from assistive tech;
 * meaningful icons accept a `label` prop for screen readers.
 */
function Icon({ name, size = "md", label, className = "" }) {
  const sizeClass = `rd-icon--${size}`;
  const classes = ["rd-icon", sizeClass, className].filter(Boolean).join(" ");

  const isDecorative = !label;

  return (
    <svg
      className={classes}
      focusable="false"
      aria-hidden={isDecorative ? "true" : undefined}
      aria-label={label || undefined}
      role={label ? "img" : undefined}
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}

Icon.propTypes = {
  /** Symbol ID from public/icons.svg */
  name: PropTypes.string.isRequired,
  /** Size variant — sm (16px), md (24px, default), lg (32px) */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Accessible label for meaningful icons. Omit for decorative icons. */
  label: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};

export default Icon;
