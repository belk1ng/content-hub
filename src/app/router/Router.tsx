import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/app/layout";
import AboutLazy from "@/pages/about";
import ArticlesLazy from "@/pages/articles";
import MainLazy from "@/pages/main";
import NotFoundPage from "@/pages/not-found";
import ProfileLazy from "@/pages/profile";
import { routes } from "@/shared/config/nav";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routes.home,
        element: <MainLazy />,
      },
      {
        path: routes.articles,
        element: <ArticlesLazy />,
      },
      {
        path: routes.profile,
        element: <ProfileLazy />,
      },
      {
        path: routes.about,
        element: <AboutLazy />,
      },
      {
        path: routes.notFound,
        element: <NotFoundPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
