import { useState } from "react";
import Container from "./components/Container";
import Location from "./components/Location";
import Search from "./components/Search";
import Weather from "./components/Weather";

import NoWeatherError from "./components/NoWeatherError";

import "./App.css";

const API = {
  key: "9a394c208830929ba0b2d46d0aa8cb8f",
  base_url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${API.base_url}weather?q=${query}&units=imperial&APPID=${API.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        })
        .catch((error) => console.log(error));
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`;
  };

  // useEffect(() => {
  //   fetch(`${API.base_url}weather?q=${query}&units=imperial&APPID=${API.key}`)
  //     .then((res) => res.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <Container
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 60
            ? "main hot"
            : "main"
          : "main"
      }
    >
      <Search
        onKeyPress={search}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {typeof weather.main != "undefined" ? (
        <>
          <Location
            name={weather.name}
            country={weather.sys.country}
            date={dateBuilder(new Date())}
          />
          <Weather
            temp={Math.round(weather.main.temp)}
            weather={weather.weather[0].main}
            description={weather.weather[0].description}
            icon={weather.weather[0].icon}
          />
        </>
      ) : (
        <NoWeatherError />
      )}
    </Container>
  );
}

export default App;
