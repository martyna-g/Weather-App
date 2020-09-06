import React from "react";
import { connect } from "react-redux";
import "../Results.css";

const Results = (props) => {
  return (
    <div
      className="results"
      style={{ visibility: props.fetched ? "visible" : "hidden" }}
    >
      <div className="loacation">
        <p id="location">
          {props.name}, {props.country}
        </p>
      </div>
      <div className="weather-info">
        <div className="temp">{Math.round(props.temp)}&#176;</div>
        <div className="description">
          <img
            id="icon-big"
            src={require(`../icons/icons100/${props.main}.png`)}
            alt="icon"
          />
          <p id="desc">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  const { name } = state.weather.city;
  const { description, main } = state.weather.weather;
  const { temp, humidity } = state.weather.main;
  const country = state.weather.sys.country;
  const fetched = state.weather.weatherFetched;
  return {
    name,
    description,
    main,
    temp,
    humidity,
    country,
    fetched,
  };
};

export default connect(mapStateToProps, null)(Results);
