import { fn } from "storybook/test";
import Toast from "./Toast";

export default {
  title: "Molecules/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Basic = {
  args: {
    variant: "info",
    message: "Route saved. Let's get you on the road.",
  },
};

export const Success = {
  args: {
    variant: "success",
    message: "Spot added to your game plan.",
  },
};

export const Warning = {
  args: {
    variant: "warning",
    message: "Long drive day ahead — worth a quick tweak.",
  },
};

export const Error = {
  args: {
    variant: "error",
    message: "Route unavailable. Tweak your game plan to continue.",
  },
};

export const WithTitle = {
  args: {
    variant: "success",
    title: "Route saved",
    message: "Your game plan is tucked away and ready when you are.",
  },
};

export const Dismissible = {
  args: {
    variant: "info",
    message: "Co-Pilot found a spot worth the detour.",
    onDismiss: fn(),
  },
};
