import { fn } from "storybook/test";
import StepperInput from "./StepperInput";

export default {
  title: "Atoms/StepperInput",
  component: StepperInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: fn(),
  },
};

/** Default state — Adults counter starting at 2. */
export const Basic = {
  args: {
    label: "Adults",
    sublabel: "Ages 13+",
    value: 2,
    min: 0,
    max: 10,
  },
};

/** Standard counter with sublabel — Days on the Road. */
export const WithMinMax = {
  args: {
    label: "Days on the Road",
    sublabel: "How long are you out there?",
    value: 5,
    min: 1,
    max: 14,
  },
};

/** Decrement button is disabled when value equals min. */
export const AtMinimum = {
  args: {
    label: "Kids",
    sublabel: "Ages 2–12",
    value: 0,
    min: 0,
    max: 10,
  },
};

/** Increment button is disabled when value equals max. */
export const AtMaximum = {
  args: {
    label: "Pets",
    value: 4,
    min: 0,
    max: 4,
  },
};

/** Entire stepper is disabled — no interaction allowed. */
export const Disabled = {
  args: {
    label: "Travelers",
    sublabel: "Locked for this route",
    value: 3,
    min: 0,
    max: 10,
    disabled: true,
  },
};
