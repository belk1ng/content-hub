import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { DarkThemeDecorator } from "@/shared/config/storybook/decorators";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["outlined", "contained", "light"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "large"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LightTheme: Story = {
  args: {
    children: "Button",
  },
};

export const DarkTheme: Story = {
  args: {
    children: "Button",
  },
  decorators: [DarkThemeDecorator],
};
