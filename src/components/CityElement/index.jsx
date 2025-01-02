import { useContext } from 'react'
import { WeatherDataContext } from '../WeatherWidgetElement'
import './style.css'

const CityElement = () => {

    const value = useContext(WeatherDataContext)
    console.table(value)


    return (
        <div className="city">
        <h2 className="city">{ value.name }</h2>
        <h2 className="country">{ value.sys.country }</h2>
        </div>
    )
}

export default CityElement