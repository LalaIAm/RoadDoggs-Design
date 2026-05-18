import { fn } from "storybook/test";
import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: fn(),
  },
};

export const Basic = {
  args: {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@roaddoggs.com",
  },
};

export const Default = {
  args: {
    id: "spot-search",
    label: "Search Spots",
    type: "text",
    placeholder: "Search spots...",
  },
};

export const WithHelperText = {
  args: {
    id: "route-name",
    label: "Route Name",
    type: "text",
    placeholder: "Pacific Coast Run",
    helperText: "Give your route a name you'll remember.",
  },
};

export const WithError = {
  args: {
    id: "email-error",
    label: "Email",
    type: "email",
    value: "notanemail",
    placeholder: "you@roaddoggs.com",
    error: "That doesn't look like a valid email.",
  },
};

export const Disabled = {
  args: {
    id: "email-disabled",
    label: "Email",
    type: "email",
    placeholder: "you@roaddoggs.com",
    disabled: true,
  },
};

export const Password = {
  args: {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Keep it secret, keep it safe.",
  },
};
