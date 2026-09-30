import { Link } from "react-router"
import './NotFound.css'

const NotFound = () => {

    return (
       <section className="not-found-section container">

        <h1>
            Sorry, the page you were looking for was not found.
        </h1>
        <Link 
            className="not-found-link"
            to='/'
        >
            Return to home
        </Link>
       </section> 
    )
}

export default NotFound