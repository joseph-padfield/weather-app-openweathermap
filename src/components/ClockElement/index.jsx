import {useContext, useEffect, useState} from 'react'
import { WeatherDataContext } from '../WeatherWidgetElement'
import './style.css'

const ClockElement = () => {
    const { dt, timezone } = useContext(WeatherDataContext)
    const [currentTime, setCurrentTime] = useState(new Date(dt * 1000))

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date()
            const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000)
            const locationTime = new Date(utcTime + (timezone * 1000))
            setCurrentTime(locationTime)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [timezone])

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const humanReadableTime = currentTime.toLocaleString('en-UK', timeOptions)
    const humanReadableDate = currentTime.toLocaleString('en-UK', dateOptions)

    if(!dt || humanReadableTime === 'Invalid Date') {
        return (
            <h4>Loading...</h4>
        )
    }

    return (
        <div className="clock">
            <h4>{ humanReadableTime }</h4>
            <h4>{ humanReadableDate }</h4>
        </div>
    )
}

export default ClockElement