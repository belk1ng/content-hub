import {lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./styles/index.scss"
import useTheme from "./hooks/useTheme";

const MainPage = lazy(() => import("./pages/main/Main"))
const AboutPage = lazy(() => import("./pages/about/About"))

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

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <section className={`app app_${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={<p>Loading...</p>}>
                <RouterProvider router={router}/>
            </Suspense>
        </section>
    )
}

export default App