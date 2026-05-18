import Avatar from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Basic = {
  args: {
    src: "https://i.pravatar.cc/48?img=11",
    name: "Jake Torres",
    size: "md",
  },
};

export const InitialsFallback = {
  args: {
    name: "Sam Rivera",
    size: "md",
  },
};

export const Small = {
  args: {
    name: "Alex Kim",
    size: "sm",
  },
};

export const Medium = {
  args: {
    src: "https://i.pravatar.cc/64?img=32",
    name: "Morgan Lee",
    size: "md",
  },
};

export const Large = {
  args: {
    src: "https://i.pravatar.cc/96?img=47",
    name: "Jordan Cruz",
    size: "lg",
  },
};

export const ImageError = {
  args: {
    src: "https://example.com/does-not-exist.jpg",
    name: "Casey Reyes",
    size: "md",
  },
};
