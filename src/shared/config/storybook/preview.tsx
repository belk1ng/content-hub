import type { Preview } from "@storybook/react";

import {
  TranslationDecorator,
  RouterDecorator,
  StyleDecorator,
  LightThemeDecorator,
} from "./decorators";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Русский" },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: "centered",
  },
};

export const decorators = [
  StyleDecorator,
  LightThemeDecorator,
  TranslationDecorator,
  RouterDecorator,
];

export default preview;
