import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "@/app/layout";
import MainLazy from "@/pages/main";
import AboutLazy from "@/pages/about";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <MainLazy/>
            },
            {
                path: "/about",
                element: <AboutLazy/>
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