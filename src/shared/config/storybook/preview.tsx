import {
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
  TranslationDecorator,
} from "./decorators";

import { Theme } from "@/entities/theme";

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
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: Theme.LIGHT, icon: "circlehollow", title: "Light" },
        { value: Theme.DARK, icon: "circle", title: "Dark" },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  StyleDecorator,
  ThemeDecorator,
  TranslationDecorator,
  RouterDecorator,
];
