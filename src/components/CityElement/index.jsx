import { useContext } from 'react'
import { WeatherDataContext } from '../WeatherWidgetElement'

const CityElement = () => {

    const value = useContext(WeatherDataContext)


    return (
        <div className="city">
        <h2>{ value.name }</h2>
        </div>
    )
}

export default CityElement