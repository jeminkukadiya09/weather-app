import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import City from "./components/City";
import WeatherComponent from "./components/WeatherInfo";
import { IoArrowBackOutline } from 'react-icons/io5';

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

function App() {

  const [weather, setWeather] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="weather">
        <div className="box">
          <div className="header">
            {location.pathname === "/weather-info" && <IoArrowBackOutline role="button" onClick={() => navigate("/")} />}
            <p className="ms-2 mb-0">Weather App</p>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<City setWeather={setWeather} />} />
              <Route path="/weather-info" element={<WeatherComponent weather={weather} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
