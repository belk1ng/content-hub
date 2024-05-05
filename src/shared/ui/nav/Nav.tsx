import clsx from "clsx";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import * as classes from "./Nav.module.scss";
import type { NavProps } from "./Nav.props";

const Nav: FC<NavProps> = ({ links, className, ...rest }) => {
  const { t } = useTranslation();

  return (
    <nav className={clsx(classes.nav, className)} {...rest}>
      <ul className={classes.nav__list}>
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              clsx(classes.nav__item, { [classes.nav__item_active]: isActive })
            }
            key={link.to}
            to={link.to}
          >
            {link.icon}
            {t(link.titleTranslationKey)}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
