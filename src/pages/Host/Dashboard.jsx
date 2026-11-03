import { useState, useEffect } from "react"
import { Link } from "react-router"
import { BsStarFill } from "react-icons/bs"
import { getHostVans } from "../../api"

const Dashboard = () => {
    
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        getHostVans()
            .then(data => setVans(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    
    const vansCards = vans.map((van) => {

        const { imageUrl, name, price } = van

        return (
                <div className="host-van-card">
                    <img
                        src={imageUrl}
                        alt={`Campervan called ${name}`}
                        className="host-van-img"
                    />
                    <div className="host-van-info-div">
                        <h2 className="host-van-info-name">
                            {name}
                        </h2>
                        <span className="host-van-info-price">
                            {`$${price}/day`}
                        </span>
                    </div>
                </div>
        )

    })
    
    if (error) {
        return <h1>Error: {error.message}</h1>
    }
    
    return (
        <section className="host-dashboard-section container"
        >
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>

            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
    
                <BsStarFill className="star" />
    
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>

            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                <div className="vans">

                {
                    loading && !vans
                    ? <h1>Loading...</h1>
                    : (
                        <>
                            {vansCards}
                        </>
                    )
                }
                </div>
            </section>
        </section>
    )
    
}

export default Dashboard



