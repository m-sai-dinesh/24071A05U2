const API_KEY = "3f53e7108d1092f8af47d7861b6ecc0b";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getCurrentWeather(city) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.json();
}

export async function getHistoricalWeather(lat, lon) {
  // last 5 days approximation using forecast
  const res = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return res.json();
}
