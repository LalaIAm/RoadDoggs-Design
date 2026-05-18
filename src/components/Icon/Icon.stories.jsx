import Icon from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: [
        "search",
        "close",
        "navigate",
        "check",
        "bell",
        "menu",
        "star",
        "gem",
        "drive",
      ],
      description: "Symbol ID from public/icons.svg",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    label: {
      control: "text",
      description:
        "Accessible label for meaningful icons. Omit for decorative icons.",
    },
  },
};

// ─── Individual icon stories ──────────────────────────────────────────────────

export const Search = {
  args: { name: "search", size: "md" },
};

export const Close = {
  args: { name: "close", size: "md" },
};

export const Navigate = {
  args: { name: "navigate", size: "md", label: "Start navigation" },
};

export const Check = {
  args: { name: "check", size: "md" },
};

export const Bell = {
  args: { name: "bell", size: "md", label: "Notifications" },
};

export const Menu = {
  args: { name: "menu", size: "md", label: "Open menu" },
};

export const Star = {
  args: { name: "star", size: "md" },
};

export const Gem = {
  args: { name: "gem", size: "md", label: "Hidden gem" },
};

export const Drive = {
  args: { name: "drive", size: "md" },
};

export const Small = {
  args: { name: "search", size: "sm" },
};

export const Large = {
  args: { name: "navigate", size: "lg", label: "Start navigation" },
};

// ─── AllIcons grid ────────────────────────────────────────────────────────────

const UI_ICONS = [
  { name: "search", label: "search" },
  { name: "close", label: "close" },
  { name: "navigate", label: "navigate" },
  { name: "check", label: "check" },
  { name: "bell", label: "bell" },
  { name: "menu", label: "menu" },
  { name: "star", label: "star" },
  { name: "gem", label: "gem" },
  { name: "drive", label: "drive" },
];

export const AllIcons = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
        gap: "24px",
        padding: "24px",
      }}
    >
      {UI_ICONS.map(({ name, label }) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Icon name={name} size="lg" label={label} />
          <span
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "12px",
              color: "#2f2f2f",
              textAlign: "center",
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All available UI icons from the RoadDoggs icon sprite. Use the `name` prop to reference any symbol.",
      },
    },
  },
};
