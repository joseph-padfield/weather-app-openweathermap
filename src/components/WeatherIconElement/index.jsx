import { useContext } from 'react'
import { WeatherDataContext } from '../../App.jsx'

const WeatherIconElement = () => {

    const { weather } = useContext(WeatherDataContext)
    if (!weather) return null
    const weatherData = weather[0]
    const icon = weatherData.icon
    console.log(icon)
    return (
        <>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
        </>
    )
}

export default WeatherIconElement