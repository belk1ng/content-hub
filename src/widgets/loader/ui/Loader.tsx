import type { FC } from "react";

import * as classes from "./Loader.module.scss";

import Spinner from "@/shared/ui/spinner";

const Loader: FC = () => {
  return (
    <section className={classes.loader}>
      <Spinner />
    </section>
  );
};

export default Loader;
