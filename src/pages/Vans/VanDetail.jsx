import { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router'

const VanDetail = () => {
    const [van, setVan] = useState('')

    const params = useParams()
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        const loadVanDetails = async () => {
            const res = await fetch(`/api/vans/${params.id}`)
            const data = await res.json()
            setVan(data.vans)
        }

        loadVanDetails()
    }, [params.id])

    const returnToSearch = location.state?.returnToSearch || ''
    console.log(returnToSearch)
    const type = location.state?.type || 'all'

    return (
        <>
            <Link
                to={`../${returnToSearch}`}
                relative="path"
                className='van-detail-link container'
            >
                <i className="fa-solid fa-arrow-left-long">
                </i>
                <p 
                    className="back-to-vans-para"
                >
                    Back to {type} vans</p>
            </Link>

            <section className='van-detail-section container'>

                <img
                    src={van.imageUrl}
                    alt={`Campervan called ${van.name}`}
                    className="van-img"
                />
                <div className="van-details-div">
                    <span className={`van-filter-tag ${van.type}-tag`}>
                        {van.type}
                    </span>

                    <h1 className="van-detail-name">
                        {van.name}
                    </h1>

                    <div className="van-price-div">

                        <span className="van-price">
                            {`$${van.price}`}
                        </span>
                        /day
                    </div>
                    <p className="van-details-description">
                        {van.description}
                    </p>
                    <button className="hero-btn ">
                        Rent this van
                    </button>
                </div>


            </section>
        </>
    )
}

export default VanDetail