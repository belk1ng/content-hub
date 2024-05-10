import type { Meta, StoryObj } from "@storybook/react";

import Nav from "./Nav";

import { navConfig } from "@/shared/config/nav";

const meta: Meta<typeof Nav> = {
  title: "shared/Nav",
  component: Nav,
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const NavStory: Story = {
  args: {
    links: navConfig,
  },
};
