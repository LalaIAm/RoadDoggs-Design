import { fn } from "storybook/test";
import Checkbox from "./Checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: fn(),
  },
};

export const Unchecked = {
  args: {
    id: "remember",
    label: "Remember me",
    checked: false,
  },
};

export const Checked = {
  args: {
    id: "remember-checked",
    label: "Remember me",
    checked: true,
  },
};

export const Disabled = {
  args: {
    id: "remember-disabled",
    label: "Remember me",
    checked: false,
    disabled: true,
  },
};
