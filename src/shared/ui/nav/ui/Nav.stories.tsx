import type { Meta, StoryObj } from "@storybook/react";

import Nav from "./Nav";
import { DarkThemeDecorator } from "@/shared/config/storybook/decorators";
import { navConfig } from "@/shared/config/nav";

const meta: Meta<typeof Nav> = {
  title: "shared/Nav",
  component: Nav,
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const LightTheme: Story = {
  args: {
    links: navConfig,
  },
};

export const DarkTheme: Story = {
  args: {
    links: navConfig,
  },
  decorators: [DarkThemeDecorator],
};
