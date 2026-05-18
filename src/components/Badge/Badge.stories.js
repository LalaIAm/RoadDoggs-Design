import Badge from "./Badge";

export default {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export const Default = {
  args: { label: "4 Spots", variant: "default" },
};

export const Primary = {
  args: { label: "On Track", variant: "primary" },
};

export const Success = {
  args: { label: "Route Saved", variant: "success" },
};

export const Warning = {
  args: { label: "Long Drive", variant: "warning" },
};

export const Error = {
  args: { label: "Off Route", variant: "error" },
};

export const Info = {
  args: { label: "Worth the Detour", variant: "info" },
};
