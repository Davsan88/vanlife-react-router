import { useEffect, useState } from "react"
import { Link } from "react-router"

const VanHost = () => {

    const [vans, setVans] = useState([])

    useEffect(() => {

        const loadHostVans = async () => {
            const res = await fetch('/api/host/vans')
            const data = await res.json()
            setVans(data.vans)
            console.log(data.vans)
        }

        loadHostVans()

    }, [])

    const vansCards = vans.map((van) => {

        const { imageUrl, name, price } = van

        return (
            <Link 
                to={`/host/vans/${van.id}`}
                key={van.id}
                className="host-van-link-wraper">

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
            </Link>
        )

    })

    return (
        <section className="host-vans-section container">
            <h1>Your listed vans</h1>
            <div className="host-vans-div">
                {vansCards}
            </div>
        </section>
    )
}

export default VanHost