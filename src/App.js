import { useState } from 'react';
import CitySearchBar from './components/CitySearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import logo from './logo.svg';
import './scss/App.scss';
import '@progress/kendo-theme-default/dist/all.css';
function App() {
  const [city, setCity] = useState({});
  const [units, setUnits] = useState('metric');
   
  const selectCity = (c) => {
    setCity(c)
  }

  return (
    <div className="App">
      <header className="App-header">
        <CitySearchBar 
          setSelectedCity={selectCity}
        />
        {
          city.displayText ? (
          <WeatherDisplay
            city={city}
            units={units}
          />
          ) : (
            <p>No city chosen</p>
          )
        }
        
      </header>
    </div>
  );
}

export default App;
