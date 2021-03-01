import React from "react";

const Location = ({ name, country, date }) => {
  return (
    <div className="location-container">
      <span className="location">
        {name}, {country}
      </span>
      <span className="date">{date}</span>
    </div>
  );
};

export default Location;
