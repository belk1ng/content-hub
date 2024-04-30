import {lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const MainPage = lazy(() => import("../../pages/main"))
const AboutPage = lazy(() => import("../../pages/about"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/about",
        element: <AboutPage/>
    }
])

const Router = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <RouterProvider router={router}/>
        </Suspense>
    )
}

export default Router