import {NavLink} from "react-router-dom";
import clsx from "clsx";
import type {FC} from "react";
import type {NavProps} from "./Nav.props";
import * as classes from "./Nav.module.scss";

const Nav: FC<NavProps> = ({links, className, ...rest}) => {
    return (
        <nav className={clsx(classes.nav, className)} {...rest}>
            <ul className={classes.nav__list}>
                {links.map((link) =>
                    <NavLink to={link.to} key={link.to}
                             className={({isActive}) => clsx(classes.nav__item, {[classes.nav__item_active]: isActive})}>
                        {link.icon}
                        {link.title}
                    </NavLink>
                )}
            </ul>
        </nav>
    )
}

export default Nav