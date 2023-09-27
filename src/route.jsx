import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/login";
import RegisterPage from "./components/pages/register";
import ErrorPage from "./components/pages/error";
import DashboardPage from "./components/pages/dashboard";
import IncomePage from "./components/pages/income";

const Route =  createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    }, 
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/home',
        element: <DashboardPage />
    },
    {
        path: "/income",
        element: <IncomePage />
    }
])

export default Route