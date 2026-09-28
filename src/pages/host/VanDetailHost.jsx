import { useEffect, useState } from "react"
import { NavLink, useParams, Outlet } from "react-router"

const VanDetailHost = () => {

    const [van, setVan] = useState('')

    const params = useParams()

    useEffect(() => {
        const loadHostVanDetails = async () => {
            const res = await fetch(`/api/host/vans/${params.id}`)
            const data = await res.json()
            setVan(data.vans[0])
            console.log(data.vans[0])
        }

        loadHostVanDetails()
    }, [params.id])

    return (
        <>
            <NavLink
                to='..'
                relative='path'
                className='van-detail-link container'
            >
                <i className="fa-solid fa-arrow-left-long">
                </i>
                <p className="back-to-vans-para">Back to all vans</p>
            </NavLink>

            <section className="host-van-detail-section container">
                <div className="host-van-detail-card">
                    <img
                        src={van.imageUrl}
                        alt={`Campervan called ${van.name}`}
                        className="host-van-detail-img"
                    />
                    <div className="host-van-info-div">
                        <span className={`host-van-filter-tag ${van.type}-tag`}>
                            {van.type}
                        </span>
                        <h1 className="host-van-detail-info-name">
                            {van.name}
                        </h1>
                        <div className="host-van-detail-price-div">
                            <span className="host-van-detail-info-price">
                                ${van.price}
                            </span>
                            /day
                        </div>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink 
                        to='.'
                        end
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                    >
                       Details 
                    </ NavLink>
                    <NavLink 
                        to='pricing'
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                    >
                        Pricing
                    </NavLink>
                    <NavLink 
                        to='photos'
                        className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ van }}/>
            </section>
        </>
    )
}

export default VanDetailHost