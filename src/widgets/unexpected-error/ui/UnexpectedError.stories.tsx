import type { Meta, StoryObj } from "@storybook/react";

import UnexpectedError from "./UnexpectedError";

const meta: Meta<typeof UnexpectedError> = {
  title: "widgets/UnexpectedError",
  component: UnexpectedError,
};

export default meta;
type Story = StoryObj<typeof UnexpectedError>;

export const UnexpectedErrorStory: Story = {};
