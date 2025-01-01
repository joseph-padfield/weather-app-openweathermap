import { useContext } from 'react'
import { WeatherDataContext } from '../WeatherWidgetElement'
import './style.css'

const WeatherIconElement = () => {

    const { weather } = useContext(WeatherDataContext)
    if (!weather) return null
    const weatherData = weather[0]
    const icon = weatherData.icon
    return (
        <div className="weather-icon">
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
        </div>
    )
}

export default WeatherIconElement