import PropTypes from 'prop-types'
import {fn} from 'storybook/test'

const defaultIcons = {
    info: "ⓘ",
    success: "✓",
    warning: "!",
    error: "×",
}

const Alert = ({ variant = "info", title, children, icon, actions, onClose, className = "" }) => {
    const alertIcon = icon ?? defaultIcons[variant];

    return (
        <div className={`rd-alert rd-alert--${variant} ${className}`} role={variant === "error" ? "alert" : "status"}>
            {alertIcon && (
                <div className="rd-alert__icon" aria-hidden="true">
                    {alertIcon}
                </div>
            )}
            <div className="rd-alert__content">
                {title && <h3 className="rd-alert__title">{title}</h3>}

                <div className="rd-alert__message">{children}</div>

                {actions && <div className="rd-alert__actions">{actions}</div>}
            </div>
            {onClose && (
                <button
                    className="rd-alert__close"
                    type="button"
                    onClick={onClose}
                    aria-label="Dismiss alert">
                    x
                </button>
            )}
        </div>
    )
}

Alert.propTypes = {
    variant: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    title: PropTypes.string,
    children: PropTypes.string,
    actions: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.string
}

export default Alert