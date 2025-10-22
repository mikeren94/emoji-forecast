import { getAutoCompleteCities } from "../services/google-service"; 
import { useState } from "react";
import { AutoComplete } from "@progress/kendo-react-dropdowns";

function CitySearchBar({setSelectedCity}) {
    const [cities, setCities] = useState([])
    const [inputValue, setInputValue] = useState("");

    const onCityChange = (e) => {
        setInputValue(e.value)
        fetchCities();

        if (cities.includes(e.value)) {
            handleCitySelect(e.value);
        }
    }

    const fetchCities = async () => {
        if (!inputValue) return;

        const data = await getAutoCompleteCities(process.env.REACT_APP_GOOGLE_API_KEY, inputValue);
        const cityCountryList = data.suggestions.map((s) => {
            const main = s.placePrediction.structuredFormat.mainText.text;
            const secondary = s.placePrediction.structuredFormat.secondaryText.text;
            return `${main}, ${secondary}`;
        });
        setCities(cityCountryList);
    }

    const handleCitySelect = (city) => {
        setSelectedCity(city)
    }

    return (
        <AutoComplete 
            data={cities} 
            placeholder="Enter a city..."
            value={inputValue}
            onChange={onCityChange}
        />
    )
}

export default CitySearchBar;