import { useState,useEffect } from "react";
import { getPlaceDetails } from "../services/google-service";
import { getCurrentWeather } from "../services/weather-service";
import { getWeatherEmoji } from "../services/emoji-mapper-service";
import TempDisplay from "./TempDisplay";

function WeatherDisplay({city, units}) {
    const [weatherData, setWeatherData] = useState({})
    const [emojiDisplay, setEmojiDisplay] = useState('');
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
        const emoji = getWeatherEmoji(weatherDetails.weather[0].main, weatherDetails.main.temp, units);
        setEmojiDisplay(emoji);
    }

    return (
        <div>
            <h1>{city.displayText}</h1>
            <p>{emojiDisplay}</p>
        </div>
    )
}

export default WeatherDisplay;