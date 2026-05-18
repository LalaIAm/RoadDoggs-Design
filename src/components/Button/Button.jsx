import PropTypes from "prop-types";

/**
 * Button is the primary interactive element in the RoadDoggs design system.
 * Supports five visual variants, three sizes, loading state with spinner,
 * and optional icon placement left or right of the label.
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  onClick,
  children,
}) {
  const classes = [
    "rd-button",
    `rd-button--${variant}`,
    `rd-button--${size}`,
    disabled ? "rd-button--disabled" : "",
    loading ? "rd-button--loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      onClick={onClick}
      type="button"
    >
      {loading ? (
        <span className="rd-button__spinner" aria-hidden="true" />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span
              className="rd-button__icon rd-button__icon--left"
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
          <span className="rd-button__label">{children}</span>
          {icon && iconPosition === "right" && (
            <span
              className="rd-button__icon rd-button__icon--right"
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  /** Visual style variant */
  variant: PropTypes.oneOf(["primary", "dark", "secondary", "ghost", "danger"]),
  /** Button size */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Disables interaction and applies muted styling */
  disabled: PropTypes.bool,
  /** Replaces label with spinner and sets aria-busy */
  loading: PropTypes.bool,
  /** Optional icon element rendered beside the label */
  icon: PropTypes.node,
  /** Icon placement relative to label */
  iconPosition: PropTypes.oneOf(["left", "right"]),
  /** Click handler — does not fire when disabled or loading */
  onClick: PropTypes.func,
  /** Button label text */
  children: PropTypes.node,
};

export default Button;
