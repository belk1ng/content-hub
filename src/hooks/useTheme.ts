import {useContext} from "react";
import {ThemeContext} from "../providers/Theme.provider";

const useTheme = () => {
    const {theme, setTheme, toggleTheme} = useContext(ThemeContext);

    return {
        theme, setTheme, toggleTheme
    }
}

export default useTheme;