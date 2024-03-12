import { useEffect, useState } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY, lat, lon } from '../services/api'

export function Weather() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const url = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            const response = await fetch(url)
            const data = await response.json()

            setWeatherData(data)
            console.log(data)
        }

        fetchData()
    }, [])

    return (
        <div className="weather">
            {weatherData && (
                <>
                    <div className='weather-icon'>
                        <img
                            src={`./weather-icons/${weatherData.weather[0].icon}.svg`}
                            alt={weatherData.weather[0].description}
                        />
                    </div>
                    <div className="temperature">{Math.round(weatherData.main.temp)}°C</div>
                </>
            )}
        </div>
    );
}
