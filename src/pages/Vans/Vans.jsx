import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router'
import './Vans.css'
import VanCard from '../../components/VanCard'
import VanTypeChip from '../../components/VanTypeChip'

const Vans = () => {

    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get('type')

    useEffect(() => {

        async function loadVans() {
            const res = await fetch('/api/vans')
            const data = await res.json()

            setVans(data.vans)
        }

        loadVans()

    }, [])

    const handleSetSearchParams = (type) => {
        setSearchParams({ type: type })
    }

    const displayVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanCards = displayVans.map((van, index) => {
        return (
            <VanCard
                key={index}
                van={van}
            />
        )
    })

    const vanTypes = vans.map(van => van.type)

    const uniqueTypes = vanTypes.filter(
        (item, index) => vanTypes.indexOf(item) === index)

    const vanTypeChips = uniqueTypes.map(type => (
        <VanTypeChip
            key={type}
            type={type}
            typeFilter={typeFilter}
            handleSetSearchParams={handleSetSearchParams}
        />
    ))

    return (
        <section className='vans-section container'>
            <h1 className='vans-heading'>
                Explore our van options
            </h1>
            <div className="filtering-chips-div">
                <div className="vans-type-chips-div">
                    {vanTypeChips}
                </div>
                {typeFilter 
                    ? <button
                        onClick={() => setSearchParams('')}
                        className="vans-clear-filter-btn">
                        Clear filters
                      </button>
                    : null
                }
            </div>
            <div className="vans-grid-div">
                {vanCards}
            </div>

        </section>
    )
}

export default Vans