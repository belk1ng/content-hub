import {createContext, useState, useMemo, useEffect} from "react";
import type {FC, PropsWithChildren, Dispatch, SetStateAction} from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

interface ThemeContextValues {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
    toggleTheme: VoidFunction;
}

export const LS_THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextValues>(null);

const defaultTheme = (localStorage.getItem(LS_THEME_KEY)) as Theme ?? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT);

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        localStorage.setItem(LS_THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const providerValue = useMemo(() => ({
        theme, setTheme, toggleTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}
