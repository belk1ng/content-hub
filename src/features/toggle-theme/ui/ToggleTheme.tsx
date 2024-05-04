import type {FC} from "react";
import {useTheme} from "@/entities/theme";
import Button from "@/shared/ui/button";
import ThemeIcon from "@/shared/assets/icons/theme.svg";
import * as classes from "./ToggleTheme.module.scss";

const ToggleTheme: FC = () => {
    const {toggleTheme} = useTheme()

    return (
        <Button variant="action" className={classes.toggle} onClick={toggleTheme}>
            <ThemeIcon/>
        </Button>
    )
}

export default ToggleTheme;
