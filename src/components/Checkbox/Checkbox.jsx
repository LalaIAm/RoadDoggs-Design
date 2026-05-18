import PropTypes from "prop-types";

/**
 * Checkbox is a styled boolean form input with an associated label.
 * The native input is visually hidden but retained in the DOM for accessibility.
 * A custom box element renders the checked state using Burnt Orange.
 */
function Checkbox({ id, label, checked = false, onChange, disabled = false }) {
  const classes = [
    "rd-checkbox",
    checked ? "rd-checkbox--checked" : "",
    disabled ? "rd-checkbox--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes} htmlFor={id}>
      <input
        className="rd-checkbox__input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-checked={checked}
      />
      <span className="rd-checkbox__box" aria-hidden="true">
        {checked && <span className="rd-checkbox__check">✓</span>}
      </span>
      <span className="rd-checkbox__label">{label}</span>
    </label>
  );
}

Checkbox.propTypes = {
  /** Links the label and input — must be unique on the page */
  id: PropTypes.string.isRequired,
  /** Visible label text rendered beside the checkbox */
  label: PropTypes.string.isRequired,
  /** Controlled checked state */
  checked: PropTypes.bool,
  /** Change handler — receives the native change event */
  onChange: PropTypes.func,
  /** Disables interaction and applies reduced opacity */
  disabled: PropTypes.bool,
};

export default Checkbox;
