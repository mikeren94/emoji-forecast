import { useState,useEffect } from "react";
import { getPlaceDetails } from "../services/google-service";
import { getCurrentWeather } from "../services/weather-service";
import TempDisplay from "./TempDisplay";

function WeatherDisplay({city, units}) {
    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        if (!city.placeId) return;

        getWeatherData();
    }, [city])

    const getWeatherData = async () => {
        // Grab the lat and lon from google's api
        const placeData = await getPlaceDetails(process.env.REACT_APP_GOOGLE_API_KEY, city.placeId);
        const lat = placeData.location.latitude;
        const lon = placeData.location.longitude;

        const weatherDetails = await getCurrentWeather(process.env.REACT_APP_WEATHER_API_KEY,lat, lon, units)
        setWeatherData(weatherDetails)
    }

    return (
        <div>
            <h1>{city.displayText}</h1>
            {
                weatherData.main && (
                    <TempDisplay temperature={weatherData.main.temp} units={units}/>
                )
            }
        </div>
    )
}

export default WeatherDisplay;