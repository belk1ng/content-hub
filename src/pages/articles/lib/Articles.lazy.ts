import { lazy } from "react";

const ArticlesLazy = lazy(() => import("../ui/Articles"));

export default ArticlesLazy;
