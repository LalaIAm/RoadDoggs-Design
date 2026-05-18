import PropTypes from "prop-types";
import Badge from "../Badge/Badge";
import AvatarGroup from "../AvatarGroup/AvatarGroup";
import Button from "../Button/Button";

/**
 * Card is a flexible content container supporting three layout variants:
 * - default: header/body/footer slots with optional full-width image
 * - trip: structured TripCard with image, metadata, crew avatars, and CTA
 * - draft: paper-texture DraftCard with Caveat font and dashed border
 *
 * When `interactive` is true the card gains hover lift, a Burnt Orange focus
 * ring, and fires `onClick` on click or Enter/Space keydown.
 */
function Card({
  variant = "default",
  header,
  body,
  footer,
  image,
  interactive = false,
  tripData,
  draftData,
  onClick,
  className = "",
}) {
  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  }

  // ── Trip variant ────────────────────────────────────────────────────────────
  if (variant === "trip" && tripData) {
    return (
      <div
        className={`rd-card rd-card--trip${className ? ` ${className}` : ""}`}
      >
        {tripData.image && (
          <img
            className="rd-card__image"
            src={tripData.image}
            alt={tripData.title}
          />
        )}
        <div className="rd-card__body">
          <h3 className="rd-card__title">{tripData.title}</h3>
          <p className="rd-card__meta">
            {tripData.dateRange} · {tripData.routeSummary}
          </p>
          <div className="rd-card__badges">
            <Badge label={`${tripData.stopCount} Spots`} variant="primary" />
            <Badge label={tripData.pace} variant="default" />
          </div>
          {tripData.collaborators && tripData.collaborators.length > 0 && (
            <div className="rd-card__crew">
              <AvatarGroup avatars={tripData.collaborators} max={3} size="sm" />
            </div>
          )}
          {tripData.ctaLabel && (
            <div className="rd-card__footer">
              <Button variant="primary" size="sm" onClick={tripData.onCtaClick}>
                {tripData.ctaLabel}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Draft variant ───────────────────────────────────────────────────────────
  if (variant === "draft") {
    const data = draftData || {};
    return (
      <div
        className={`rd-card rd-card--draft${className ? ` ${className}` : ""}`}
      >
        <div className="rd-card__body">
          <p className="rd-card__draft-title">
            {data.title || "Just an idea..."}
          </p>
          <p className="rd-card__draft-note">{data.note || "Plan wild."}</p>
          <p className="rd-card__draft-date">
            {data.dateHint || "No dates selected"}
          </p>
        </div>
      </div>
    );
  }

  // ── Default variant ─────────────────────────────────────────────────────────
  const classes = [
    "rd-card",
    `rd-card--${variant}`,
    interactive ? "rd-card--interactive" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? "button" : undefined}
      onClick={interactive ? onClick : undefined}
      onKeyDown={interactive ? handleKeyDown : undefined}
    >
      {image && (
        <img className="rd-card__image" src={image} alt="" aria-hidden="true" />
      )}
      {header && <div className="rd-card__header">{header}</div>}
      {body && <div className="rd-card__body">{body}</div>}
      {footer && <div className="rd-card__footer">{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  /** Card layout variant */
  variant: PropTypes.oneOf(["default", "trip", "draft"]),
  /** Header slot — rendered above the body in the default variant */
  header: PropTypes.node,
  /** Body slot — main content area */
  body: PropTypes.node,
  /** Footer slot — rendered below the body in the default variant */
  footer: PropTypes.node,
  /** Full-width image URL for the default variant */
  image: PropTypes.string,
  /** Enables hover lift, Burnt Orange border, and focus ring */
  interactive: PropTypes.bool,
  /**
   * Data for the trip variant.
   * Shape: { image, title, dateRange, routeSummary, stopCount, pace,
   *          collaborators: [{ src, name }], ctaLabel, onCtaClick }
   */
  tripData: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    dateRange: PropTypes.string,
    routeSummary: PropTypes.string,
    stopCount: PropTypes.number,
    pace: PropTypes.string,
    collaborators: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        name: PropTypes.string.isRequired,
      }),
    ),
    ctaLabel: PropTypes.string,
    onCtaClick: PropTypes.func,
  }),
  /**
   * Data for the draft variant.
   * Shape: { title, note, dateHint }
   */
  draftData: PropTypes.shape({
    title: PropTypes.string,
    note: PropTypes.string,
    dateHint: PropTypes.string,
  }),
  /** Click handler — only fires when `interactive` is true */
  onClick: PropTypes.func,
  /** Additional CSS class names */
  className: PropTypes.string,
};

export default Card;
