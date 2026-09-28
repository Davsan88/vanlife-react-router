import { useOutletContext } from "react-router"

const HostVanPhotos = () => {

    // eslint-disable-next-line no-unused-vars
    const { van } = useOutletContext()

    const { imageUrl, name } = van

    return (
        <div className="host-van-photos-div">
            <img src={imageUrl} alt={`Photography of the ${name}`} className="host-van-photos-img" />
        </div>
    )
}

export default HostVanPhotos