import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/categoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";


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
                loader : ()=> fetch("/news.json"),
                hydrateFallbackElement : <Loading></Loading>
            }
        ]
    },
    {
        path : "/auth",
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path : "/auth/login",
                element : <Login></Login>
            },
            {
                path : "/auth/register",
                element : <Register></Register>
            }
        ]
    },
    {
        path : "/news-details/:id",
        element : <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader : ()=>fetch("/news.json"),
        hydrateFallbackElement : <Loading></Loading>
    },
    {
        path : "/*",
        element : <h2>Error- 404</h2>
    }
])

export default router