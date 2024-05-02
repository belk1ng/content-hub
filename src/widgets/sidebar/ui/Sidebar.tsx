import clsx from "clsx";
import type {FC} from "react";
import Nav from "@/shared/ui/nav";
import {navConfig} from "@/shared/config/nav";
import Button from "@/shared/ui/button";
import type {SidebarProps} from "./Sidebar.props";
import * as classes from "./Sidebar.module.scss";

const Sidebar: FC<SidebarProps> = ({className, ...rest}) => {
    return (
        <aside className={clsx(classes.sidebar, className)} {...rest}>
            <div className={classes.sidebar__content}>
                <h1 className={classes.sidebar__title}>Blog App</h1>
                <Nav links={navConfig}/>
            </div>
            <Button variant="light" size="large">Создать статью</Button>
        </aside>
    )
}

export default Sidebar;