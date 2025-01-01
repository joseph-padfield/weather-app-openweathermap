import WeatherWidgetElement from "../../components/WeatherWidgetElement/index.jsx"
import './style.css'

const WeatherDashBoardElement = () => {
    return (
        <>
            <div className="weather-dashboard">
                <WeatherWidgetElement location='Bath' />
                <WeatherWidgetElement location='London' />
                <WeatherWidgetElement location='Bloxham' />
                <WeatherWidgetElement location='Valencia' />
            </div>
        </>
    )
}

export default WeatherDashBoardElement