import { FETCH_WEATHER } from "../actions/fetchWeather";

const initialState = {
  city: {
    name: "",
    dt: 0,
  },
  sys: {
    country: "",
  },
  main: {
    temp: 0,
    humidity: 0,
  },
  weather: {
    id: 0,
    main: "Clear",
    description: "",
  },
  weatherFetched: false
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        city: action.payload,
        sys: action.payload.sys,
        weather: action.payload.weather[0],
        main: action.payload.main,
        weatherFetched: true
      };
    default:
      return state;
  }
};

export default weatherReducer;
