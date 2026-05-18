import PropTypes from "prop-types";

/**
 * StatBlock displays a labeled metric — a small uppercase descriptor
 * paired with a larger value. Used in route day headers to surface
 * key stats like driving time, distance, and stop count.
 *
 * An optional icon renders to the left of the label/value pair.
 */
function StatBlock({ label, value, unit, icon }) {
  return (
    <div className="rd-stat-block">
      {icon && (
        <span className="rd-stat-block__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <div className="rd-stat-block__content">
        <span className="rd-stat-block__label">{label}</span>
        <span className="rd-stat-block__value">
          {value}
          {unit && <span className="rd-stat-block__unit">{unit}</span>}
        </span>
      </div>
    </div>
  );
}

StatBlock.propTypes = {
  /** Uppercase descriptor label (e.g., "Driving", "Distance", "Stops") */
  label: PropTypes.string.isRequired,
  /** Metric value to display (e.g., "4h 20m", "210", "4") */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Optional unit shown after the value (e.g., "mi", "hrs") */
  unit: PropTypes.string,
  /** Optional icon node rendered to the left of the label/value pair */
  icon: PropTypes.node,
};

export default StatBlock;
