import type {FC} from "react";
import {useTranslation} from "react-i18next";
import * as classes from "./NotFound.module.scss"

const NotFoundPage: FC = () => {
    const {t} = useTranslation();

    return (
        <section className={classes.error}>
            <h2>404</h2>
            <h3>{t("errors.404")}</h3>
        </section>
    )
}

export default NotFoundPage;