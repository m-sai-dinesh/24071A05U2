import { useState } from "react";
import { getCurrentWeather, getHistoricalWeather } from "./services/weatherService";
import WeatherChart from "./components/WeatherChart";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [current, setCurrent] = useState(null);
  const [history, setHistory] = useState(null);

  const fetchWeather = async () => {
    const currentData = await getCurrentWeather(city);
    setCurrent(currentData);

    const { coord } = currentData;
    const historyData = await getHistoricalWeather(coord.lat, coord.lon);
    setHistory(historyData);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather Dashboard</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {current && (
        <div>
          <h3>{current.name}</h3>
          <p>Temperature: {current.main.temp} °C</p>
          <p>Condition: {current.weather[0].description}</p>
        </div>
      )}

      <WeatherChart data={history} />
    </div>
  );
}

export default WeatherApp;
