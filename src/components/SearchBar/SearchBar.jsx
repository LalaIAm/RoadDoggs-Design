import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

/**
 * SearchBar is a controlled search input with a leading search icon and an
 * optional clear button. The clear button appears only when value is non-empty.
 * Uses role="search" on the wrapper and type="search" on the input for
 * correct semantic and assistive-technology behaviour.
 */
function SearchBar({
  value = "",
  onChange,
  onClear,
  placeholder = "Search spots, towns, roads…",
  disabled = false,
  className = "",
}) {
  const blockClass = [
    "rd-search-bar",
    disabled ? "rd-search-bar--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  function handleClear() {
    if (onClear) {
      onClear();
    }
  }

  return (
    <div className={blockClass} role="search">
      {/* Visually hidden label for screen readers */}
      <label className="rd-search-bar__label" htmlFor="rd-search-bar-input">
        Search
      </label>

      <span className="rd-search-bar__icon" aria-hidden="true">
        <Icon name="search" size="sm" />
      </span>

      <input
        id="rd-search-bar-input"
        className="rd-search-bar__input"
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-label="Search"
      />

      {value && (
        <button
          className="rd-search-bar__clear"
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          disabled={disabled}
        >
          <Icon name="close" size="sm" />
        </button>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  /** Controlled input value */
  value: PropTypes.string,
  /** Change handler — receives the native change event */
  onChange: PropTypes.func,
  /** Called when the clear button is clicked */
  onClear: PropTypes.func,
  /** Placeholder text shown when the field is empty */
  placeholder: PropTypes.string,
  /** Disables the input and clear button */
  disabled: PropTypes.bool,
  /** Additional CSS class names for the wrapper */
  className: PropTypes.string,
};

export default SearchBar;
