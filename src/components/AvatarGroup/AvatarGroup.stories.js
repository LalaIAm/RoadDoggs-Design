import AvatarGroup from "./AvatarGroup";

export default {
  title: "Molecules/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const crew = [
  { name: "Jake Torres", src: "https://i.pravatar.cc/48?img=11" },
  { name: "Sam Rivera", src: "https://i.pravatar.cc/48?img=5" },
  { name: "Alex Kim", src: "https://i.pravatar.cc/48?img=32" },
  { name: "Morgan Lee", src: "https://i.pravatar.cc/48?img=47" },
  { name: "Jordan Cruz", src: "https://i.pravatar.cc/48?img=15" },
  { name: "Casey Reyes", src: "https://i.pravatar.cc/48?img=22" },
];

/** Three crew members — all visible, no overflow */
export const Basic = {
  args: {
    avatars: crew.slice(0, 3),
    max: 4,
    size: "md",
  },
};

/** Six crew members with max=4 — shows first 3 avatars plus "+3" overflow badge */
export const WithOverflow = {
  args: {
    avatars: crew,
    max: 4,
    size: "md",
  },
};

/** Small size — 24px avatars */
export const Small = {
  args: {
    avatars: crew.slice(0, 4),
    max: 5,
    size: "sm",
  },
};

/** Large size — 48px avatars */
export const Large = {
  args: {
    avatars: crew.slice(0, 3),
    max: 4,
    size: "lg",
  },
};

/** Just two crew members — renders both names in the aria-label */
export const TwoMembers = {
  args: {
    avatars: crew.slice(0, 2),
    max: 4,
    size: "md",
  },
};
