import PropTypes from "prop-types";

/**
 * Input is a controlled text field with label, helper text, and error state support.
 * Supports text, email, password, and search types with full accessibility wiring.
 */
function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  helperText,
  error,
  disabled = false,
}) {
  const classes = [
    "rd-input",
    error ? "rd-input--error" : "",
    disabled ? "rd-input--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <label className="rd-input__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="rd-input__field"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
      />
      {error && (
        <p className="rd-input__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className="rd-input__helper" id={`${id}-helper`}>
          {helperText}
        </p>
      )}
    </div>
  );
}

Input.propTypes = {
  /** Links label and input via htmlFor/id — required for accessibility */
  id: PropTypes.string.isRequired,
  /** Visible label text rendered above the field */
  label: PropTypes.string.isRequired,
  /** Input type — controls keyboard and browser behaviour */
  type: PropTypes.oneOf(["text", "email", "password", "search"]),
  /** Controlled value */
  value: PropTypes.string,
  /** Change handler — receives the native change event */
  onChange: PropTypes.func,
  /** Placeholder text shown when the field is empty */
  placeholder: PropTypes.string,
  /** Hint text rendered below the field when no error is present */
  helperText: PropTypes.string,
  /** Error message — triggers error styling and aria-invalid when provided */
  error: PropTypes.string,
  /** Disables the input and applies reduced opacity */
  disabled: PropTypes.bool,
};

export default Input;
