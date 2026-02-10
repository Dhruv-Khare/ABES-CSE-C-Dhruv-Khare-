import React, { useEffect, useState } from "react";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("New York");

  function fetchWeather() {
    fetch(
      `http://api.weatherstack.com/current?access_key=02390a2ddf481b04926beeea85722229&query=${encodeURIComponent(
        city
      )}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setData(null);
      });
  }

  // initial fetch for default city
  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <h4>Search for the Weather:</h4>
        <input
          type="text"
          placeholder="enter city to search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="button" value="Search" onClick={fetchWeather} />
      </div>

      <WeatherCard data={data} city={city} />
    </div>
  );
}

export default App;
