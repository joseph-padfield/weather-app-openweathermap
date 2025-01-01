const fetchWeatherData = async (city, apiKey) => {
    return await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
}

export default fetchWeatherData