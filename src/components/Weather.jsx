import React from "react";

const Weather = ({ temp, weather, description, icon }) => {
  return (
    <div className="weather-container">
      <span className="temp">{temp}</span>
      <p className="weather">{weather}</p>
      <p className="description">{description}</p>
      <img
        src={`https://openweathermap.org/img/w/${icon}.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default Weather;
