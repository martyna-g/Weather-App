import { FETCH_FORECAST } from "../actions/fetchWeather";

const initialState = {
    list: []
}

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST:
        console.log(action.payload)
      return {
          ...state,
          list: action.payload.list
      };
    default:
      return state;
  }
};

export default forecastReducer;
