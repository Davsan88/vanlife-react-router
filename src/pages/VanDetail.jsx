import { useEffect } from 'react'
import { useParams } from 'react-router'

const VanDetail = () => {
    const params = useParams()
    console.log(params)

    useEffect(() => {
        const loadVanDetails = async () => {
            const res = await fetch(`/api/vans/${params.id}`)
            const data = await res.json()
            console.log(data)
        }

        loadVanDetails()
    }, [params.id])


    return (
        <h1>
            Van detail page goes here
        </h1>
    )
}

export default VanDetail