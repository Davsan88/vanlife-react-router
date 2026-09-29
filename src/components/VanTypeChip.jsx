const VanTypeChip = ({ type, handleSetSearchParams }) => {

    return (
        <button 
            onClick={() => handleSetSearchParams(type)}
            className={`vans-type-chip ${type}`}>
                {type}
        </button>
    )
}

export default VanTypeChip