import Accordion from "./Accordion";

export default {
  title: "Organisms/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const accordionItems = [
  {
    title: "What does RoadDoggs plan for me?",
    content:
      "RoadDoggs builds a personalized route with daily drive time, suggested spots, lodging ideas, spend estimates, and room for spontaneous detours.",
  },
  {
    title: "Can I tweak my route?",
    content:
      "Yep. Ask the Co-Pilot to make it cheaper, more scenic, dog-friendly, slower paced, or packed with hidden finds.",
  },
  {
    title: "Is this built for mobile?",
    content:
      "RoadDoggs is web-first and mobile-optimized, so your route stays easy to use from the couch to the passenger seat.",
  },
  {
    title: "How does the Co-Pilot work?",
    content:
      "The Co-Pilot reads your vibe — crew size, pace, interests — and builds a game plan around it. Tweak anything at any time.",
  },
  {
    title: "Can I share my route with the crew?",
    content:
      "Absolutely. Invite your crew to collaborate, vote on spots, and add their own finds to the route.",
  },
];

export const Basic = {
  args: {
    title: "Road Notes",
    subtitle: "Before you hit the road",
    items: accordionItems,
  },
};

export const SingleItem = {
  args: {
    title: "Quick Stop",
    subtitle: "Worth the detour",
    items: [accordionItems[0]],
  },
};

export const AllClosed = {
  args: {
    title: "Road Notes",
    subtitle: "Before you hit the road",
    items: accordionItems,
  },
};

export const ManyItems = {
  args: {
    title: "Your Route",
    subtitle: "Everything you need to know",
    items: [
      ...accordionItems,
      {
        title: "What if I want to go off-script?",
        content:
          "That's the whole point. Your route is a starting point, not a contract. Detour whenever the road calls.",
      },
      {
        title: "How do I add a spot mid-route?",
        content:
          'Tap any spot on the map or search for a find and hit "Add to Route". The Co-Pilot will re-balance your game plan automatically.',
      },
    ],
  },
};
