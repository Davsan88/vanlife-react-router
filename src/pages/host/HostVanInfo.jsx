// import { useState } from "react"
import { useOutletContext } from "react-router"

const HostVanInfo = () => {

    // eslint-disable-next-line no-unused-vars
    const { van } = useOutletContext()

    const { name, type, description } = van

    return (
        <div className="host-van-info-div">
            <p className="host-van-info-para">
                <span className="bold">Name:</span> {name}
            </p>
            <p className="host-van-info-para">
                <span className="bold">Type:</span> <span className="capitalized">{type}</span>
            </p>
            <p className="host-van-info-para">
                <span className="bold">Description:</span> {description}
            </p>
            <p className="host-van-info-para">
                <span className="bold">Visibility:</span> Public
            </p>
        </div>
    )
}

export default HostVanInfo