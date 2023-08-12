import React from "react";
import { GrLocation } from "react-icons/gr";
import { LuWind } from "react-icons/lu";
import { PiGaugeDuotone, PiThermometerDuotone } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { WeatherIcons } from "../App";

const WeatherInfoComponent = (props) => {
  const { name, value, icon } = props;
  return (
    <div className="infoCard">
      <span className="infoIcon">{icon}</span>
      <span className="infoLabel">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};

const capitalizeFirstLatter = (str) => {
  const arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
};

const WeatherInfo = (props) => {
  const { weather } = props;

  return (
    <>
      <div className="weatherContainer">
        <div className="d-flex flex-column justify-content-center text-center">
          <img
            className="weatherIcon"
            alt="weather"
            src={WeatherIcons[weather?.weather[0].icon] || "/icons/day.svg"}
          />
          <span className="weatherTemp">
            <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          </span>
          <span className="weatherType">
            {weather?.weather[0].description &&
              capitalizeFirstLatter(weather?.weather[0].description)}
          </span>
          <span className="location">
            <GrLocation className="locationIcon" />
            <p className="mb-0">{`${weather?.name}, ${weather?.sys?.country}`}</p>
          </span>
        </div>
      </div>
      <div className="weatherInfoConatiner">
        <WeatherInfoComponent
          name="Feels like"
          value={`${Math.floor(weather?.main?.feels_like - 273)}°C`}
          icon={<PiThermometerDuotone fontSize="30px" />}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={`${weather?.main?.humidity}%`}
          icon={<WiHumidity fontSize="35px" />}
        />
        <WeatherInfoComponent
          name={"wind"}
          value={weather?.wind?.speed}
          icon={<LuWind fontSize="22px" />}
        />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.main?.pressure}
          icon={<PiGaugeDuotone fontSize="25px" />}
        />
      </div>
    </>
  );
};

export default WeatherInfo;
