import { useContext } from 'react'
import { WeatherDataContext } from '../WeatherElement'

const CityElement = () => {

    const value = useContext(WeatherDataContext)


    return (
        <>
        <h2>{ value.name }</h2>
        </>
    )
}

export default CityElement