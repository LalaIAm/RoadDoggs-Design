import { expect, fn, userEvent, within } from "@storybook/test";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
};

// ── Variants ───────────────────────────────────────────────────────────────────

export const Primary = {
  args: {
    variant: "primary",
    children: "+ Create New Trip",
  },
};

export const Dark = {
  args: {
    variant: "dark",
    children: "Log In",
  },
};

export const Ghost = {
  args: {
    variant: "ghost",
    children: "Continue with Google",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Tweak",
  },
};

export const Danger = {
  args: {
    variant: "danger",
    children: "Remove Spot",
  },
};

// ── States ─────────────────────────────────────────────────────────────────────

export const Disabled = {
  args: {
    variant: "primary",
    children: "Next Step →",
    disabled: true,
  },
};

export const Loading = {
  args: {
    variant: "primary",
    children: "Saving...",
    loading: true,
  },
};

// ── Icon placement ─────────────────────────────────────────────────────────────

export const WithIconLeft = {
  args: {
    variant: "primary",
    children: "Build Your Route",
    icon: "→",
    iconPosition: "left",
  },
};

export const WithIconRight = {
  args: {
    variant: "primary",
    children: "Next Step",
    icon: "→",
    iconPosition: "right",
  },
};

// ── Sizes ──────────────────────────────────────────────────────────────────────

export const Small = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "Tweak",
  },
};

export const Large = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Build Your Route",
  },
};

// ── Interaction tests ──────────────────────────────────────────────────────────

/**
 * Validates: Requirements 2.7
 * Property 4 — onClick must not fire when the button is disabled.
 */
export const DisabledNoClick = {
  args: {
    variant: "primary",
    children: "Next Step →",
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.click(button);

    expect(args.onClick).not.toHaveBeenCalled();
  },
};
