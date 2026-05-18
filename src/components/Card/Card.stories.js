import { fn } from "@storybook/test";
import Card from "./Card";

export default {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

// ── Default variant ────────────────────────────────────────────────────────────

/** A plain card with body content — the base building block. */
export const Basic = {
  args: {
    body: "Worth the detour. This one's been on the list for years.",
  },
};

/** Card with a full-width image at the top. */
export const WithImage = {
  args: {
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    body: "Pacific Coast Run — Highway 1 from Morro Bay to Big Sur.",
  },
};

/** Card with header, body, and footer slots all populated. */
export const WithSlots = {
  args: {
    header: "Route Notes",
    body: "Gas up before Cambria — next station is 40 miles out. Trust this one.",
    footer: "Last updated: 2 days ago",
  },
};

/** Interactive card — hover to see the lift effect, focus for the ring. */
export const Interactive = {
  args: {
    interactive: true,
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    body: "Click to open your route.",
    onClick: fn(),
  },
};

// ── Trip variant ───────────────────────────────────────────────────────────────

/** Full TripCard with image, metadata, crew avatars, and a CTA. */
export const Trip = {
  args: {
    variant: "trip",
    tripData: {
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      title: "Pacific Coast Run",
      dateRange: "Jun 14 – Jun 18",
      routeSummary: "LA → Big Sur → SF",
      stopCount: 7,
      pace: "Chill",
      collaborators: [
        { name: "Jake Torres", src: "https://i.pravatar.cc/48?img=11" },
        { name: "Sam Rivera", src: "https://i.pravatar.cc/48?img=5" },
        { name: "Alex Kim", src: "https://i.pravatar.cc/48?img=32" },
      ],
      ctaLabel: "View Game Plan",
      onCtaClick: fn(),
    },
  },
};

/** TripCard without an image — title and metadata only. */
export const TripNoImage = {
  args: {
    variant: "trip",
    tripData: {
      title: "Desert Loop",
      dateRange: "Jul 4 – Jul 7",
      routeSummary: "Phoenix → Sedona → Flagstaff",
      stopCount: 4,
      pace: "Fast",
      collaborators: [
        { name: "Morgan Lee", src: "https://i.pravatar.cc/48?img=47" },
      ],
      ctaLabel: "Tweak Route",
      onCtaClick: fn(),
    },
  },
};

// ── Draft variant ──────────────────────────────────────────────────────────────

/** DraftCard — a scribbled idea, not yet a real route. */
export const Draft = {
  args: {
    variant: "draft",
    draftData: {
      title: "Just an idea...",
      note: "Plan wild. Figure it out later.",
      dateHint: "No dates selected",
    },
  },
};

/** DraftCard with partial data filled in. */
export const DraftPartial = {
  args: {
    variant: "draft",
    draftData: {
      title: "Southwest loop maybe?",
      note: "Zion, Bryce, Arches — the whole thing.",
      dateHint: "Sometime in October",
    },
  },
};
