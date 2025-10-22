import { getAutoCompleteCities } from "../services/google-service"; 
import { useState } from "react";
import { AutoComplete } from "@progress/kendo-react-dropdowns";

function CitySearchBar({setSelectedCity}) {
    const [cities, setCities] = useState([])
    const [inputValue, setInputValue] = useState("");

    const onCityChange = (e) => {
        setInputValue(e.value)
        fetchCities();

        const selected = cities.find((c) => c.displayText === e.value);
        if (selected) {
            handleCitySelect(selected);
        }
    }

    const fetchCities = async () => {
        if (!inputValue) return;

        const data = await getAutoCompleteCities(process.env.REACT_APP_GOOGLE_API_KEY, inputValue);
        const cityCountryList = data.suggestions.map((s) => {
            const main = s.placePrediction.structuredFormat.mainText.text;
            const secondary = s.placePrediction.structuredFormat.secondaryText.text;
            return {
                displayText: `${main}, ${secondary}`,
                placeId: s.placePrediction.placeId
            };
        });
        setCities(cityCountryList);
    }

    const handleCitySelect = (city) => {
        setSelectedCity(city)
    }

    return (
        <AutoComplete 
            data={cities} 
            textField="displayText"
            placeholder="Enter a city..."
            value={inputValue}
            onChange={onCityChange}
        />
    )
}

export default CitySearchBar;