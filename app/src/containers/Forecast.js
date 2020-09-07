import React, { Fragment } from "react";
import { connect } from "react-redux";
import ForecastCard from "../components/ForcastCard";
import "../Forecast.css";

const Forecast = (props) => {
  const forecast = props.daily;
  return (
    <div>
      <div
        className="header"
        style={{ visibility: props.daily[0] ? "visible" : "hidden" }}
      >
        Average daily temperature for the next five days:
      </div>
      <Fragment>
        {forecast.map((item) => {
          return (
            <ForecastCard
              dt={item.dt}
              temp={item.main.temp}
              main={item.weather[0].main}
            />
          );
        })}
      </Fragment>
    </div>
  );
};

export const mapStateToProps = (state) => {
  const list = state.forecast.list;
  const daily = list.filter((a) => a.dt_txt.includes("12:00"));
  console.log(daily);
  return {
    daily,
  };
};

export default connect(mapStateToProps, null)(Forecast);
