import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Returns the first letter of each word in a name, capped at 2 characters.
 * e.g., "Jake Torres" → "JT", "Sam Rivera" → "SR", "Alex" → "A"
 */
function getInitials(name) {
  if (!name) return "";
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Avatar displays a user's profile image or falls back to their initials
 * when no image is provided or the image fails to load.
 */
function Avatar({ src, name, size = "md", className = "" }) {
  const [imgError, setImgError] = useState(false);

  const showImage = src && !imgError;

  return (
    <div
      className={`rd-avatar rd-avatar--${size}${className ? ` ${className}` : ""}`}
      aria-label={name}
    >
      {showImage ? (
        <img
          className="rd-avatar__img"
          src={src}
          alt={name}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="rd-avatar__initials" aria-hidden="true">
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}

Avatar.propTypes = {
  /** Image URL — falls back to initials if absent or fails to load */
  src: PropTypes.string,
  /** User's full name — used for alt text and initials fallback */
  name: PropTypes.string.isRequired,
  /** Size variant: sm=24px, md=32px (default), lg=48px */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Additional CSS classes to apply to the root element */
  className: PropTypes.string,
};

export default Avatar;
