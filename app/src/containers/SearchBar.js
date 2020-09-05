import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWeatherAPI } from "../actions/fetchWeather";

export const SearchBar = (props) => {
  const [cityName, setCityName] = useState("");

  const handleChange = (e) => {
    setCityName(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter city name"
          onChange={handleChange}
        />
        <button type="button" onClick={() => props.fetchWeather(cityName)}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: (city) => dispatch(fetchWeatherAPI(city)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
