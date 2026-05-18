import { fn } from "storybook/test";
import Alert from "./Alert";

export default {
  title: "Atoms/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClose: undefined,
  },
};

export const Info = {
  args: {
    variant: "info",
    title: "Co-Pilot suggestion",
    children: "Worth the detour — this spot fits your vibe.",
  },
};

export const Success = {
  args: {
    variant: "success",
    title: "Route saved",
    children: "Your game plan is tucked away and ready when you are.",
  },
};

export const Warning = {
  args: {
    variant: "warning",
    title: "Long drive day",
    children: "One of your must-visit spots is too far outside the route.",
  },
};

export const Error = {
  args: {
    variant: "error",
    title: "Route unavailable",
    children:
      "One of your spots is temporarily closed. Tweak your game plan to continue.",
  },
};

export const Dismissible = {
  args: {
    variant: "info",
    title: "Co-Pilot suggestion",
    children: "Worth the detour — this spot fits your vibe.",
    onClose: fn(),
  },
};

export const WithActions = {
  args: {
    variant: "warning",
    title: "Long drive day",
    children: "One of your must-visit spots is too far outside the route.",
    actions: null,
  },
  render: (args) => (
    <Alert
      {...args}
      actions={
        <>
          <button>Tweak route</button>
          <button>Keep it</button>
        </>
      }
    />
  ),
};
