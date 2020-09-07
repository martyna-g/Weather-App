import React from "react";
import "../ForecastCard.css";

const ForecastCard = (props) => {
  const milliseconds = props.dt * 1000;
  const dateObj = new Date(milliseconds);
  const options = {weekday: 'short', month: 'long', day: 'numeric'};
  return (
    <div className="outer">
      <p className="date">{dateObj.toLocaleDateString("en-GB", options)}</p>
      <img src={require(`../icons/icons50/${props.main}.png`)} />
      <p className="temp">{Math.round(props.temp)}&#176;</p>
    </div>
  );
};

export default ForecastCard;
