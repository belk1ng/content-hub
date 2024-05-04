import {lazy} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "@/app/layout";

const MainPage = lazy(() => import("@/pages/main"))
const AboutPage = lazy(() => import("@/pages/about"))

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <MainPage/>
            },
            {
                path: "/about",
                element: <AboutPage/>
            }
        ]
    },
])

const Router = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default Router