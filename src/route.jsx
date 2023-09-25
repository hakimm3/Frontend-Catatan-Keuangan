import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/login";
import RegisterPage from "./components/pages/register";
import ErrorPage from "./components/pages/error";

export default createBrowserRouter([
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
    }
])