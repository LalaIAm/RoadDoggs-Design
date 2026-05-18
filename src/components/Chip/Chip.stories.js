import { fn } from "storybook/test";
import Chip from "./Chip";

export default {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onToggle: fn(),
  },
};

export const Basic = {
  args: {
    label: "Scenic",
    active: false,
  },
};

export const Inactive = {
  args: {
    label: "Scenic",
    active: false,
  },
};

export const Active = {
  args: {
    label: "Food",
    active: true,
  },
};

export const WithIcon = {
  args: {
    label: "Camp",
    active: false,
    icon: "⛺",
  },
};

export const EVCharge = {
  args: {
    label: "EV Charge",
    active: false,
    icon: "⚡",
  },
};
