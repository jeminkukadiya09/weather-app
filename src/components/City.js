import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const City = ({ setWeather }) => {
  const navigate = useNavigate();
  const [city, setCity] = useState();
  const [error, setError] = useState("");

  // API CALL FOR FETCH LAT AND LONG
  const fetchWeatherFromLatLng = async (lat, lng) => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4fcb8afbad2ec30367b3ee0df82f5a78`
    )
      .then((response) => {
        setWeather(response.data);
        navigate("/weather-info");
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log("error", err);
      });
  };

  // API CALL FOR SEARCHABLE LOCATION
  const fetchWeather = async (e) => {
    e.preventDefault();

    if (!city) {
      setError("Please enter a city");
      return;
    }

    await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    )
      .then((response) => {
        console.log("first weather", response);
        setWeather(response.data);
        navigate("/weather-info");
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log("error", err);
      });
  };

  // FOR GET LET AND LONG
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherFromLatLng(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="searchBox">
      <form className="searchForm" onSubmit={fetchWeather}>
        <input
          name="city"
          onChange={(e) => {
            setCity(e.target.value);
            setError("");
          }}
          placeholder="Enter city name"
        />
      </form>
      <span className="dashed-line">or</span>
      <button
        type="button"
        className="locationBtn"
        onClick={() => getCurrentLocation()}
      >
        Get Device Location
      </button>
      {error && <div className="error">*{error}</div>}
    </div>
  );
};
export default City;
