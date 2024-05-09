import { Theme } from "@/entities/theme";
import type { StoryFn } from "@storybook/react";

const BaseThemeDecorator = (theme: Theme) =>
  function ThemeDecorator(Story: StoryFn) {
    return (
      <div className={`storybook app_${theme}`}>
        <Story />
      </div>
    );
  };

export const LightThemeDecorator = BaseThemeDecorator(Theme.LIGHT);
export const DarkThemeDecorator = BaseThemeDecorator(Theme.DARK);
