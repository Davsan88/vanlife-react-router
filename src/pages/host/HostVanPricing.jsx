import { useOutletContext } from "react-router"

const HostVanPricing = () => {

    // eslint-disable-next-line no-unused-vars
    const { van } = useOutletContext()

    const { price } = van

    return (
        <div className="host-van-pricing-div">
            <p className='host-van-pricing-para'>
                <span className="host-van-pricing-price">${price}.00</span>/day
            </p>
        </div>
    )
}

export default HostVanPricing