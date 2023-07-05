import type { Preview } from "@storybook/react";
import { customViewports } from "./viewports";
import React from "react";

const preview: Preview = {
  parameters: {
    viewport: { viewports: customViewports },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    //TODO: Set global variables: e. g. Nextjs fonts - className={clsx(anyFont.variable, anyFont2.variable)}
    (Story) => (
      <div id="variables">
        <Story />
      </div>
    ),
  ],
};

//
//

export default preview;
