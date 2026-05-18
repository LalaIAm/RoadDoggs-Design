import PropTypes from "prop-types";

/**
 * StepperInput is a controlled numeric counter with decrement and increment buttons.
 * Used for adjusting integer values like Adults, Kids, and Pets counts.
 * Decrement is disabled at min; increment is disabled at max.
 */
function StepperInput({
  label,
  sublabel,
  value,
  min = 0,
  max = 99,
  onChange,
  disabled = false,
}) {
  const atMin = value <= min;
  const atMax = value >= max;

  const classes = [
    "rd-stepper-input",
    disabled ? "rd-stepper-input--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  function handleDecrement() {
    if (!disabled && !atMin) {
      onChange(value - 1);
    }
  }

  function handleIncrement() {
    if (!disabled && !atMax) {
      onChange(value + 1);
    }
  }

  return (
    <div className={classes}>
      <div className="rd-stepper-input__labels">
        <span className="rd-stepper-input__label">{label}</span>
        {sublabel && (
          <span className="rd-stepper-input__sublabel">{sublabel}</span>
        )}
      </div>
      <div className="rd-stepper-input__controls">
        <button
          className="rd-stepper-input__btn"
          onClick={handleDecrement}
          disabled={disabled || atMin}
          aria-disabled={disabled || atMin}
          aria-label={`Decrease ${label}`}
          type="button"
        >
          −
        </button>
        <span
          className="rd-stepper-input__value"
          aria-label={`${value} ${label}`}
          aria-live="polite"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        >
          {value}
        </span>
        <button
          className="rd-stepper-input__btn"
          onClick={handleIncrement}
          disabled={disabled || atMax}
          aria-disabled={disabled || atMax}
          aria-label={`Increase ${label}`}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}

StepperInput.propTypes = {
  /** Primary label displayed beside the controls */
  label: PropTypes.string.isRequired,
  /** Optional secondary descriptor shown below the label */
  sublabel: PropTypes.string,
  /** Current controlled value */
  value: PropTypes.number.isRequired,
  /** Minimum allowed value — decrement is disabled at this boundary */
  min: PropTypes.number,
  /** Maximum allowed value — increment is disabled at this boundary */
  max: PropTypes.number,
  /** Called with the new numeric value on increment or decrement */
  onChange: PropTypes.func,
  /** Disables both buttons and applies muted styling */
  disabled: PropTypes.bool,
};

export default StepperInput;
