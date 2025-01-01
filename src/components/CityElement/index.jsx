import { useContext } from 'react'
import {WeatherDataContext} from "../../App.jsx"

const CityElement = () => {

    const value = useContext(WeatherDataContext)

    console.log(value)

    return (
        <>
        <h2>{ value.name }</h2>
        </>
    )
}

export default CityElement