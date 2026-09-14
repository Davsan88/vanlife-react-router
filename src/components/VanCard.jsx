const VanCard = ({ van }) => {

    const { name, price, imageUrl, type } = van

    return (
        <div className="van-div">
            <img
                src={imageUrl}
                alt={`Campervan called ${name}`}
                className="van-img"
            />
            <div className="van-details-div">
                <h2 className="van-name">
                    {name}
                </h2>

                <div className="van-price-div">

                    <span className="van-price">
                        {`$${price} `}
                    </span>
                    <br />
                    /day
                </div>
                <span className={`van-filter-tag ${type}-tag`}>
                    {type}
                </span>
            </div>

        </div>
    )
}

export default VanCard