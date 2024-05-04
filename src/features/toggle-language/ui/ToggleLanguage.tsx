import type {FC} from "react";
import {useTranslation} from "react-i18next";
import Button from "@/shared/ui/button";
import useLanguage from "@/shared/lib/i18n";
import * as classes from "./ToggleLanguage.module.scss";

const ToggleLanguage: FC = () => {
    const {t} = useTranslation()

    const {toggleLanguage} = useLanguage();

    return (
        <Button variant="action" onClick={toggleLanguage} className={classes.toggle}>{t("language")}</Button>
    )
}

export default ToggleLanguage