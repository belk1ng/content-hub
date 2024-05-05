import clsx from "clsx";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

import * as classes from "./Sidebar.module.scss";
import type { SidebarProps } from "./Sidebar.props";

import { navConfig } from "@/shared/config/nav";
import Button from "@/shared/ui/button";
import Nav from "@/shared/ui/nav";

const Sidebar: FC<SidebarProps> = ({ className, ...rest }) => {
  const { t } = useTranslation();

  return (
    <aside className={clsx(classes.sidebar, className)} {...rest}>
      <div className={classes.sidebar__content}>
        <h1 className={classes.sidebar__title}>Content Hub</h1>
        <Nav links={navConfig} />
      </div>
      <Button size="large" variant="light">
        {t("actions.create.article")}
      </Button>
    </aside>
  );
};

export default Sidebar;
