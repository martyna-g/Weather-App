const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeatherSuccess = (payload) => ({
  type: FETCH_WEATHER,
  payload,
});

export const fetchWeatherAPI = (lat, lon) => {
  const targetUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  return async dispath => {
    const response = await fetch(targetUrl);
    if (response.status === 200) {
      const data = await response.json();
      dispath(fetchWeatherSuccess(data));
    }
  }
}

