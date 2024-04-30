import {createContext} from "react";
import type {Dispatch, SetStateAction} from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const LS_THEME_KEY = "theme";

interface ThemeContextValues {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
    toggleTheme: VoidFunction;
}

export const ThemeContext = createContext<ThemeContextValues>(null);
