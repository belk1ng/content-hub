import type { StoryContext, StoryFn } from "@storybook/react";

import { Theme, ThemeProvider } from "@/entities/theme";

// TODO: Pass theme to the provider
export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const {
    globals: { theme },
  } = context;

  const storyTheme = theme === "dark" ? Theme.DARK : Theme.LIGHT;

  return (
    <ThemeProvider>
      <div className={`storybook app_${storyTheme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
