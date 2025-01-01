import { useContext } from 'react'
import { WeatherDataContext } from '../WeatherWidgetElement'
import './style.css'

const CurrentWeatherElement = () => {
    const { weather } = useContext(WeatherDataContext)

    if (!weather || !Array.isArray(weather) || weather.length === 0) {
        return <p>Loading weather...</p>
    }

    const weatherData = weather[0]

    return (
        <div className="current-weather">
            <h3>{weatherData.main}</h3>
            <p>{weatherData.description}</p>
        </div>
    )
}

export default CurrentWeatherElement