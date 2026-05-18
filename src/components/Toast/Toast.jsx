import PropTypes from "prop-types";

const defaultIcons = {
  info: "ⓘ",
  success: "✓",
  warning: "!",
  error: "×",
};

const Toast = ({ variant = "info", message, title, onDismiss }) => {
  const icon = defaultIcons[variant];
  const isError = variant === "error";

  return (
    <div
      className={`rd-toast rd-toast--${variant}`}
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
    >
      <span className="rd-toast__icon" aria-hidden="true">
        {icon}
      </span>

      <div className="rd-toast__content">
        {title && <p className="rd-toast__title">{title}</p>}
        <p className="rd-toast__message">{message}</p>
      </div>

      {onDismiss && (
        <button
          className="rd-toast__dismiss"
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification"
        >
          ×
        </button>
      )}
    </div>
  );
};

Toast.propTypes = {
  /** Visual and semantic variant */
  variant: PropTypes.oneOf(["info", "success", "warning", "error"]),
  /** The notification message (required) */
  message: PropTypes.string.isRequired,
  /** Optional bold title line above the message */
  title: PropTypes.string,
  /** When provided, renders a dismiss button and calls this on click */
  onDismiss: PropTypes.func,
};

export default Toast;
