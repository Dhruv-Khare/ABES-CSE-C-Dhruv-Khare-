import React, { useEffect, useState } from "react";
import WeatherCard from "./Components/WeatherCard";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "http://api.weatherstack.com/current?access_key=02390a2ddf481b04926beeea85722229&query=New York"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <WeatherCard data={data}/>
    </div>
  );
}

export default App;
