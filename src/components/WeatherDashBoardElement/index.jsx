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
                <WeatherWidgetElement location='Kingston' />
                <WeatherWidgetElement location='Honolulu' />
                <WeatherWidgetElement location='Edinburgh' />
                <WeatherWidgetElement location='Cape Town' />
                <WeatherWidgetElement location='Sydney' />
                <WeatherWidgetElement location='Mexico City' />
                <WeatherWidgetElement location='Rio de Janeiro' />
                <WeatherWidgetElement location='Moscow' />
            </div>
        </>
    )
}

export default WeatherDashBoardElement