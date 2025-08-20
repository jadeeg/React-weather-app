import { useState } from "react";
import axios from "axios";
import ApiPhotos from "./ApiPhotos.jsx";
import "../Css/SearchPage.css";
 import { BsSearch } from "react-icons/bs";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const[forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const api_key = process.env.REACT_APP_API_KEY_WEATHER;
  const api_url = process.env.REACT_APP_API_URL_WEATHER;

  const search = async () => {
    if (!query.trim()) {
      setError("Please enter a city name");
      setForecast([]);
      return;
    }

    setLoading(true);
    setError(null);
    setForecast([]);

    try {
      const response = await axios.get(
        `${api_url}query=${query}&key=${api_key}`, {
      headers: {
        Authorization: api_key,
      },
    });
     const today= new Date();
     const dayIndex = today.getDay();
     const daysOfWeek = [
      "Sunday", "Monday", "Tuesday" , "Wednesday" , "Thursday", "Friday", "Saturday" ];
    
      const formattedForecast = response.data.daily.slice(0,7).map((day,index) => ({
      dayName: daysOfWeek[(dayIndex + index) % 7],
      temperature: Math.round(day.temperature.day),
      description: day.condition.description,
      iconUrl: day.condition.icon_url,
     }));
    
    setForecast(formattedForecast);
  } catch (error) {
    console.error("Error:",error);
    setError("Error fetching forecast data");
  } finally {
    setLoading(false);
  }
};

      

  return (
    <div className="result-container">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city"
          className="input-field"
          required
        />
        <button onClick={search} className="search-button">
          <BsSearch />
        </button>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}

      {forecast.length > 0 && (
        <div className="Forecast-container">
          <div className="f-container">
            <h3> Forecast for {query}</h3>
            <ul>
              {forecast.map((day, index) => (
                <li key={index}>
                  <strong> {day.dayName} :</strong> {day.description},{" "}
                  {day.temperature}°C
                  <img
                    src={day.iconUrl}
                    alt={day.description}
                    className="icon"
                  />
                </li>
              ))}
            </ul>
          </div>
          <ApiPhotos query={query} className="photos" />
        </div>
      )}
    </div>
  );
}