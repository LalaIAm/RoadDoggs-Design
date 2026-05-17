import Accordion from './Accordion'

export default {
    title: 'Atom/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

const accordionItems = [
  {
    title: "What does RoadDoggs plan for me?",
    content:
      "RoadDoggs builds a personalized route with daily drive time, suggested spots, lodging ideas, cost estimates, and room for spontaneous detours.",
  },
  {
    title: "Can I tweak my route?",
    content:
      "Yep. Ask the co-pilot to make it cheaper, more scenic, dog-friendly, slower paced, or packed with hidden finds.",
  },
  {
    title: "Is this built for mobile?",
    content:
      "RoadDoggs is web-first and mobile-optimized, so your route stays easy to use from the couch to the passenger seat.",
  },
];


export const Basic = {
    args: {
        title: 'Road Notes',
        subtitle: 'Before you hit the road',
        items: accordionItems
    }
}