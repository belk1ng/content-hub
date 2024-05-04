import type {FC} from "react";
import ToggleTheme from "@/features/toggle-theme";
import ToggleLanguage from "@/features/toggle-language";
import * as classes from "./Header.module.scss";

const Header: FC = () => {
    return (
        <header className={classes.header}>
            <ToggleLanguage/>
            <ToggleTheme/>
        </header>
    )
}

export default Header;