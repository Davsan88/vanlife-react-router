const VanTypeChip = ({ type, handleSetSearchParams, typeFilter }) => {

    return (
        <button 
            onClick={() => handleSetSearchParams(type)}
            className={`vans-type-chip ${type} ${typeFilter === type ? 'selected' : null}`}>
                {type}
        </button>
    )
}

export default VanTypeChip