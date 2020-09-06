const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_FORECAST = "FETCH_FORECAST";

export const fetchWeatherSuccess = (payload) => ({
  type: FETCH_WEATHER,
  payload
});

export const fetchForecastSuccess = (payload) => ({
  type: FETCH_FORECAST,
  payload
});

export const fetchWeatherAPI = (city) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}&units=metric`;

  const getAPI = async (url) => {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  }
  return async dispath => {
    const weatherData = await getAPI(weatherUrl);
    dispath(fetchWeatherSuccess(weatherData));

    const forecastData = await getAPI(forecastUrl);
    dispath(fetchForecastSuccess(forecastData));
    }
}

