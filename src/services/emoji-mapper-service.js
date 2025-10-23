export const getWeatherEmoji = (condition, temp, units) => {
    if (units === "metric") {
        if(condition === "Clear") {
            if (temp >= 25) return "☀️🏖️";
            if (temp >= 15) return "☀️😎";
            return "☀️🧥";
        }

        if (condition === "Clouds") {
            if(temp >= 15) return "☁️🌤️";
            return "☁️🧣";
        }

        if (condition === "Rain") {
            if (temp >= 10) return "🌧️☔";
            return "🌧️🥶";
        }

        if (condition === "Snow") return "❄️⛄";
        if (condition === "Thunderstorm") return "⛈️⚡";
        if (condition === "Mist" || condition === "Fog") return "🌫️👀";
    }

    return "🌈"; // fallback
}