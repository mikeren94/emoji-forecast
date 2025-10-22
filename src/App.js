import { useState } from 'react';
import CitySearchBar from './components/CitySearchBar';
import logo from './logo.svg';
import './scss/App.scss';
import '@progress/kendo-theme-default/dist/all.css';
function App() {
  const [city, setCity] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <CitySearchBar 
          setSelectedCity={setCity}
        />
        <p>Getting data for {city}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
