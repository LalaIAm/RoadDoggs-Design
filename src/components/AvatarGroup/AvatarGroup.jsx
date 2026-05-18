import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";

/**
 * Builds a human-readable aria-label for the group.
 * e.g., "Jake Torres" (1), "Jake Torres and Sam Rivera" (2), "Jake Torres and 2 others" (3+)
 */
function buildAriaLabel(avatars) {
  const total = avatars.length;
  if (total === 0) return "No crew members";
  if (total === 1) return avatars[0].name;
  if (total === 2) return `${avatars[0].name} and ${avatars[1].name}`;
  return `${avatars[0].name} and ${total - 1} others`;
}

/**
 * AvatarGroup renders a horizontally overlapping stack of Avatar components.
 * When the number of avatars exceeds `max`, the first (max - 1) avatars are
 * shown followed by a "+N" overflow indicator.
 */
function AvatarGroup({ avatars = [], max = 4, size = "md" }) {
  const total = avatars.length;
  const hasOverflow = total > max;
  // Show (max - 1) avatars + overflow badge, or all avatars if within limit
  const visibleAvatars = hasOverflow ? avatars.slice(0, max - 1) : avatars;
  const overflowCount = hasOverflow ? total - (max - 1) : 0;

  return (
    <ul
      className="rd-avatar-group"
      role="list"
      aria-label={buildAriaLabel(avatars)}
    >
      {visibleAvatars.map((avatar, index) => (
        <li key={`${avatar.name}-${index}`} className="rd-avatar-group__item">
          <Avatar src={avatar.src} name={avatar.name} size={size} />
        </li>
      ))}
      {hasOverflow && (
        <li className="rd-avatar-group__item">
          <span
            className={`rd-avatar-group__overflow rd-avatar-group__overflow--${size}`}
            aria-label={`${overflowCount} more crew members`}
          >
            +{overflowCount}
          </span>
        </li>
      )}
    </ul>
  );
}

AvatarGroup.propTypes = {
  /** Array of avatar data objects — each needs at least a name; src is optional */
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      /** Image URL — falls back to initials if absent or fails to load */
      src: PropTypes.string,
      /** Crew member's full name — used for alt text and initials */
      name: PropTypes.string.isRequired,
    }),
  ),
  /** Maximum visible avatars before the overflow badge appears */
  max: PropTypes.number,
  /** Size passed to each Avatar: sm=24px, md=32px (default), lg=48px */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default AvatarGroup;
