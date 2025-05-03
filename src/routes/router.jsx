import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/categoryNews";


const router = createBrowserRouter([
    {
        path : "/",
        element : <HomeLayout></HomeLayout>,
        children : [
            {
                path : "",
                Component : Home
            },
            {
                path : "/category/:id",
                Component: CategoryNews,
                loader : ()=> fetch("/news.json")
            }
        ]
    },
    {
        path : "/auth",
        element : <h2>Auth Layout</h2>
    },
    {
        path : "/news",
        element : <h2>News Layout</h2>
    },
    {
        path : "/*",
        element : <h2>Error- 404</h2>
    }
])

export default router