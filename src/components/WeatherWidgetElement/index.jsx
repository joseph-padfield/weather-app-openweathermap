import fetchWeatherData from '../../api.jsx'
import { useState, useEffect, createContext } from 'react'
import CityElement from "../../components/CityElement/index.jsx"
import CurrentWeatherElement from "../../components/CurrentWeatherElement/index.jsx"
import ClockElement from "../../components/ClockElement/index.jsx"
import WeatherIconElement from "../../components/WeatherIconElement/index.jsx"
import './style.css'

export const WeatherDataContext = createContext({})

const WeatherWidgetElement = ({ location }) => {

    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = await fetchWeatherData(location, '4a25cf5d4ec3e9bcf089d0ce09b1cfa1')
                const data = await info.json()
                setWeatherData(data)
            }
            catch (error) {
                console.error('Error fetching weather data: ', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="weather-widget">
            <WeatherDataContext.Provider value={ weatherData }>
                <ClockElement />
                <CityElement />
                <CurrentWeatherElement />
                <WeatherIconElement />
            </WeatherDataContext.Provider>
        </div>
    )
}

export default WeatherWidgetElement