import StatBlock from "./StatBlock";
import Icon from "../Icon/Icon";

export default {
  title: "Atoms/StatBlock",
  component: StatBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Basic = {
  args: {
    label: "Stops",
    value: "4",
  },
};

export const WithUnit = {
  args: {
    label: "Distance",
    value: "847",
    unit: "mi",
  },
};

export const WithIcon = {
  args: {
    label: "Driving",
    value: "4h 20m",
    icon: <Icon name="drive" size="sm" />,
  },
};

export const RouteStats = {
  render: () => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
      <StatBlock label="Miles" value="847" />
      <StatBlock label="Days" value="3" />
      <StatBlock label="Estimated Spend" value="$420" />
    </div>
  ),
};

export const Row = {
  render: () => (
    <div style={{ display: "flex", gap: "32px" }}>
      <StatBlock
        label="Driving"
        value="4h 20m"
        icon={<Icon name="drive" size="sm" />}
      />
      <StatBlock label="Distance" value="210 mi" />
      <StatBlock label="Stops" value="4" />
    </div>
  ),
};
