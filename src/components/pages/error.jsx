import { useRouteError } from "react-router-dom";

export default function ErrorPage()
{
    const error = useRouteError()

    return (
        <div className="d-flex justify-content-center flex-column align-items-center vh-100 bg-dark">
            <h1>Opps...</h1>
            <p>Sorry, an error has occured</p>
            <p> {error.statusText || error.message} </p>
        </div>
    )
}