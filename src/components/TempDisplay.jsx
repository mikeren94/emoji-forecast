function TempDisplay({weatherData, units}) {
    let unitDsiplay = '';
    const imageUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    switch (units) {
        case 'metric':
            unitDsiplay = 'C';
        case 'imprerial':
            unitDsiplay = 'F';
        default:
            unitDsiplay = 'C';
    }
    return (
        <div>
            <div>
                <img src={imageUrl} />
                <p>{weatherData.main.temp}°{unitDsiplay}</p>
                <p>{weatherData.weather[0].description}</p>
            </div>
        </div>
    )
}

export default TempDisplay;