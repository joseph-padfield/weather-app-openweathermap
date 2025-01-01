import {useContext, useEffect, useState} from 'react'
import { WeatherDataContext } from "../../App.jsx"

const ClockElement = () => {
    const { dt } = useContext(WeatherDataContext)

    const [currentTime, setCurrentTime] = useState(new Date(dt * 1000))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date()); // Get the current time
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric', // Include hour
        minute: 'numeric', // Include minute
        second: 'numeric'  // Include second
    }

    const humanReadable = currentTime.toLocaleString('en-UK', options)

    if(!dt || humanReadable === 'Invalid Date') {
        return (
            <h4>Loading...</h4>
        )
    }

    return (
        <>
            <h4>{ humanReadable }</h4>
        </>
    )
}

export default ClockElement