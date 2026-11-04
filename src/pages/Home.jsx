import './Home.css'
import { Link } from 'react-router'

const Home = () => {

    return (
        <section className="hero-section">
            <div className="hero-text
                container">
                <h1 className='hero-heading'>
                    You got the travel plans, we got the travel vans.
                </h1>
                <p className="hero-para">
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
            <Link 
                to='/vans'
                className="hero-btn container"

            >
                Find your van
            </Link>
            </div>
        </section>
    )
}

export default Home