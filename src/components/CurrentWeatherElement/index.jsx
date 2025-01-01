import { useContext } from 'react'
import { WeatherDataContext } from "../../App.jsx"

const CurrentWeatherElement = () => {
    const { weather } = useContext(WeatherDataContext) // Destructure directly

    if (!weather || !Array.isArray(weather) || weather.length === 0) {
        return <p>Loading weather...</p>
    }

    const weatherData = weather[0]

    return (
        <>
            <h3>{weatherData.main}</h3>
            <h4>{weatherData.description}</h4>
        </>
    )
}

export default CurrentWeatherElement