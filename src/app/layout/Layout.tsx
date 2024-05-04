import type {FC} from "react";
import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import clsx from "clsx";
import Sidebar from "@/widgets/sidebar";
import {useTheme} from "@/entities/theme";
import * as classes from "./Layout.module.scss";

const Layout: FC = () => {
    const {theme} = useTheme()

    return (
        <div className={clsx(`app app_${theme}`, classes.layout)}>
            <Sidebar/>
            <main className={classes.layout__content}>
                <Suspense fallback={<p>Loading...</p>}>
                    <header>Header content</header>
                    <Outlet/>
                </Suspense>
            </main>
        </div>
    )
}

export default Layout
