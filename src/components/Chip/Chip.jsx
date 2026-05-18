import PropTypes from "prop-types";

/**
 * Chip is a toggleable filter button used on the discovery screen.
 * Active state uses Burnt Orange background with Dust White text.
 * Inactive state uses a neutral background with a visible border.
 */
function Chip({ label, active = false, icon, onToggle }) {
  function handleClick() {
    if (onToggle) {
      onToggle(!active);
    }
  }

  return (
    <button
      className={`rd-chip${active ? " rd-chip--active" : ""}`}
      aria-pressed={active}
      onClick={handleClick}
      type="button"
    >
      {icon && (
        <span className="rd-chip__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="rd-chip__label">{label}</span>
    </button>
  );
}

Chip.propTypes = {
  /** Text label displayed inside the chip */
  label: PropTypes.string.isRequired,
  /** Whether the chip is in the active/selected state */
  active: PropTypes.bool,
  /** Optional icon element rendered before the label */
  icon: PropTypes.node,
  /** Called with the new active state when the chip is clicked */
  onToggle: PropTypes.func,
};

export default Chip;
