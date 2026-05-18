/** @type { import('@storybook/react-vite').Preview } */

import "../src/styles/scss/styles.scss";

const preview = {
  parameters: {
    backgrounds: {
      default: "faded-sand",
      values: [
        { name: "faded-sand", value: "#d9d1c7" },
        { name: "dust-white", value: "#f4f1ec" },
        { name: "white", value: "#ffffff" },
        { name: "road-black", value: "#1a1a1a" },
      ],
    },
    viewport: {
      viewports: {
        mobile: { name: "Mobile", styles: { width: "375px", height: "812px" } },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "800px" },
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
  },
};

export default preview;
