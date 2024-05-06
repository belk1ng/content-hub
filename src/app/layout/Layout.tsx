import clsx from "clsx";
import type { FC } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import * as classes from "./Layout.module.scss";

import { useTheme } from "@/entities/theme";
import ErrorBoundary from "@/shared/ui/error-boundary";
import Header from "@/widgets/header";
import Loader from "@/widgets/loader";
import Sidebar from "@/widgets/sidebar";
import UnexpectedError from "@/widgets/unexpected-error";

const Layout: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx(`app app_${theme}`, classes.layout)}>
      <Sidebar />
      <main className={classes.layout__content}>
        <Suspense fallback={<Loader />}>
          <Header />
          <ErrorBoundary fallback={<UnexpectedError />}>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
