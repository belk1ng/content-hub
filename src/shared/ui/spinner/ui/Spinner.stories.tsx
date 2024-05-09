import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "./Spinner";
import { DarkThemeDecorator } from "@/shared/config/storybook/decorators";

const meta: Meta<typeof Spinner> = {
  title: "shared/Spinner",
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const LightTheme: Story = {};

export const DarkTheme: Story = {
  decorators: [DarkThemeDecorator],
};
