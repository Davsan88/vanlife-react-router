import { Link } from 'react-router'

const VanCard = ({ van }) => {

    const { name, price, imageUrl, type, id } = van

    return (
        <div key={id} className="van-div">
            <Link
                to={`/van/${id}`}
                aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
                className='van-card-link'
            >

                <img
                    src={imageUrl}
                    alt={`Campervan called ${name}`}
                    className="van-img"
                />
                <div className="van-info-div">
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
            </Link>

        </div>
    )
}

export default VanCard