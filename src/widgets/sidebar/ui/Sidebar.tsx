import clsx from "clsx";
import {useTranslation} from "react-i18next";
import type {FC} from "react";
import Nav from "@/shared/ui/nav";
import {navConfig} from "@/shared/config/nav";
import Button from "@/shared/ui/button";
import type {SidebarProps} from "./Sidebar.props";
import * as classes from "./Sidebar.module.scss";

const Sidebar: FC<SidebarProps> = ({className, ...rest}) => {
    const {t} = useTranslation();

    return (
        <aside className={clsx(classes.sidebar, className)} {...rest}>
            <div className={classes.sidebar__content}>
                <h1 className={classes.sidebar__title}>Funny Blog</h1>
                <Nav links={navConfig}/>
            </div>
            <Button variant="light" size="large">{t("actions.create.article")}</Button>
        </aside>
    )
}

export default Sidebar;