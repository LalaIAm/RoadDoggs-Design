import ItineraryStopItem from "./ItineraryStopItem";

export default {
  title: "Molecules/ItineraryStopItem",
  component: ItineraryStopItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

/** A standard stop with name, time, category, and full star rating. */
export const Standard = {
  args: {
    stopNumber: 1,
    name: "Bixby Creek Bridge",
    time: "10:30 AM",
    category: "VIEWPOINT",
    rating: 5,
  },
};

/** Stop with a hidden gem tip — the kind of local knowledge worth the detour. */
export const WithHiddenGem = {
  args: {
    stopNumber: 2,
    name: "Nepenthe",
    time: "12:00 PM",
    category: "FOOD",
    rating: 4,
    hiddenGem: "Ask for the table on the cliff edge. Trust this one.",
  },
};

/** Stop with no rating yet — still worth adding to the game plan. */
export const NoRating = {
  args: {
    stopNumber: 3,
    name: "Sand Dollar Beach",
    time: "2:15 PM",
    category: "SCENIC",
    rating: 0,
  },
};

/** A stop with no arrival time set — works fine without it. */
export const NoTime = {
  args: {
    stopNumber: 4,
    name: "Pfeiffer Beach",
    category: "CAMP",
    rating: 4,
  },
};

/**
 * A full list of stops in sequence — shows how items stack in a real route.
 * Render inside a <ul> to match production usage.
 */
export const FullList = {
  render: () => {
    const stops = [
      {
        stopNumber: 1,
        name: "Morro Bay",
        time: "9:00 AM",
        category: "SCENIC",
        rating: 4,
      },
      {
        stopNumber: 2,
        name: "Ragged Point",
        time: "11:15 AM",
        category: "VIEWPOINT",
        rating: 5,
        hiddenGem: "Pull off at the north overlook — most people miss it.",
      },
      {
        stopNumber: 3,
        name: "Big Sur Bakery",
        time: "1:00 PM",
        category: "FOOD",
        rating: 4,
      },
      {
        stopNumber: 4,
        name: "Pfeiffer Beach",
        time: "3:30 PM",
        category: "CAMP",
        rating: 5,
        hiddenGem: "Purple sand at sunset. Worth the detour every time.",
      },
    ];

    return (
      <ul style={{ listStyle: "none", padding: 0, margin: 0, width: 360 }}>
        {stops.map((stop) => (
          <ItineraryStopItem key={stop.stopNumber} {...stop} />
        ))}
      </ul>
    );
  },
};
