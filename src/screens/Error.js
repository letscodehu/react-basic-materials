import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom"
import Button from "../components/Button"
import './Error.scoped.css'

export default function Error() {
    const navigate = useNavigate()
    function home() {
        navigate("/")
    }
    const error = useRouteError()
    if (isRouteErrorResponse(error) && error.status == 404) {
        return <div className="container">
            <h1>404</h1>
            <p>We can't find the page you are looking for</p>
            <Button text="Go to home" handler={home} />
        </div>
    }
    return <div className="container">
        <h1>500</h1>
        <p>Internal server error. Please check back later.</p>
        <Button text="Go to home" handler={home} />
    </div>
}
