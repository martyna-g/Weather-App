import { FETCH_WEATHER } from "../actions/fetchWeather";

const initialState = {
  current: {
    temp: 0,
    dt: 0,
    humidity: 0
  },
  weather: {
    description: '',
    id: 0,
    main: ''
  }
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER:
        return {
          ...state,
          current: action.payload.current,
          weather: action.payload.current.weather[0]
        };
      default:
        return state;
    }
  };
  
  export default weatherReducer;