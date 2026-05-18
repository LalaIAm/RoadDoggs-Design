import PropTypes from "prop-types";
import Badge from "../Badge/Badge";
import Icon from "../Icon/Icon";

/**
 * ItineraryStopItem renders a single stop in a route's day-by-day list.
 * It shows a numbered circle marker, stop name, arrival time, category badge,
 * star rating, and an optional hidden gem callout.
 *
 * Render multiple ItineraryStopItems inside a <ul> or <ol> container.
 */
function ItineraryStopItem({
  stopNumber,
  name,
  time,
  category,
  rating = 0,
  hiddenGem,
}) {
  return (
    <li className="rd-itinerary-stop">
      <div className="rd-itinerary-stop__number" aria-hidden="true">
        {stopNumber}
      </div>
      <div className="rd-itinerary-stop__content">
        <div className="rd-itinerary-stop__header">
          <span className="rd-itinerary-stop__name">{name}</span>
          {time && <span className="rd-itinerary-stop__time">{time}</span>}
        </div>
        <div className="rd-itinerary-stop__meta">
          {category && <Badge label={category} variant="default" />}
          {rating > 0 && (
            <span
              className="rd-itinerary-stop__rating"
              aria-label={`${rating} out of 5 stars`}
            >
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </span>
          )}
        </div>
        {hiddenGem && (
          <div className="rd-itinerary-stop__gem">
            <Icon name="gem" size="sm" />
            <span>{hiddenGem}</span>
          </div>
        )}
      </div>
    </li>
  );
}

ItineraryStopItem.propTypes = {
  /** Position number shown in the filled circle marker */
  stopNumber: PropTypes.number.isRequired,
  /** Name of the stop */
  name: PropTypes.string.isRequired,
  /** Estimated arrival time (e.g., "10:30 AM") */
  time: PropTypes.string,
  /** Category label rendered as a Badge (e.g., "VIEWPOINT", "FOOD") */
  category: PropTypes.string,
  /** Star rating from 0 to 5 — 0 hides the rating row */
  rating: PropTypes.number,
  /** Optional hidden gem callout text — renders a highlighted tip below the meta row */
  hiddenGem: PropTypes.string,
};

export default ItineraryStopItem;
