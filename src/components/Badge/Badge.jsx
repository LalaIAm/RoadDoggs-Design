import PropTypes from "prop-types";

/**
 * Badge is a compact label used to convey status, category, or count.
 * Renders as a pill-shaped span with six semantic color variants.
 */
function Badge({ label, variant = "default" }) {
  return <span className={`rd-badge rd-badge--${variant}`}>{label}</span>;
}

Badge.propTypes = {
  /** Text content displayed inside the badge */
  label: PropTypes.string.isRequired,
  /** Color variant — maps to semantic design tokens */
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "warning",
    "error",
    "info",
  ]),
};

export default Badge;
