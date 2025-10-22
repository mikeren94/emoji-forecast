export async function getCurrentWeather(apiKey, lat, lon,units) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
        {
            method: "GET"
        }
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw Error(errorText);
    }

    return response.json();

}