import { fn } from "storybook/test";
import SearchBar from "./SearchBar";

export default {
  title: "Atoms/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: fn(),
    onClear: fn(),
  },
};

export const Basic = {
  args: {
    value: "",
    placeholder: "Search spots, towns, roads…",
  },
};

export const WithValue = {
  args: {
    value: "Blue Ridge Parkway",
    placeholder: "Search spots, towns, roads…",
  },
};

export const Disabled = {
  args: {
    value: "",
    placeholder: "Search spots, towns, roads…",
    disabled: true,
  },
};
