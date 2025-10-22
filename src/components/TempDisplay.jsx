function TempDisplay({temperature, units}) {
    let unitDsiplay = '';
    switch (units) {
        case 'metric':
            unitDsiplay = 'C';
        case 'imprerial':
            unitDsiplay = 'F';
        default:
            unitDsiplay = 'C';
    }
    return (
        <p>Temp is: {temperature}°{unitDsiplay}</p>
    )
}

export default TempDisplay;