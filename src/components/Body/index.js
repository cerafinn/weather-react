// container to display the weather for the city searched, pass down props from body to the weather component

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Weather from '../Weather';
import { currentWeatherForecast, sevenDayForecast, capitalizeFirstLetter } from '../../utils/helpers';

function Body() {
  const [ currentCity, setCurrentCity ] = useState('');
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if(currentCity === '' || !currentCity) {
      document.title = ("Weather Dashboard");      
    } else {
    document.title = (capitalizeFirstLetter(currentCity) + " - Weather Dashboard");
    }
  }, [currentCity]);

  const apiKey = "e8e23b4a156b56df078fbb140bab8322";

  const getCoord = async city => {
    const coordAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    const { data } = await axios(coordAPI);

    if(!data || data.length === 0) {
      console.log("error");
    };
    return data;
}

  const getForecast = async (lat, lon) => {
    const weatherAPI = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,alerts&appid=' + apiKey;
    const { data } = await axios(weatherAPI);

    if(!data || data.length === 0) {
      console.log("error");
    };

    return data;
  };

  const displayForecast = async data => {
    const currentForecast = await currentWeatherForecast(data);
    const weekForecast = await sevenDayForecast(data);

    setForecast({ currentForecast, weekForecast });
  };

  const searchCity = async event => {
    event.preventDefault();
    if (!currentCity || currentCity === '') {
      console.log("error");
    }
    const res = await getCoord(currentCity);
    const weather = await getForecast(res.coord.lat, res.coord.lon);

    displayForecast(weather);
    
    const totalForecast = await forecast;
    console.log(totalForecast);
  }

  return (
    <div>
      <div className="search-form">
        <h3>Enter the city and country initials, or the zipcode below:</h3>
        <form onSubmit={searchCity}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter city/country initials or zipcode"
            id="city-name"
            value={currentCity}
            onChange={(event => setCurrentCity(event.target.value))}
          />
          <button
            className="btn btn-secondary btn-lrg mt-2 search-button"
            type="submit"
            onClick={searchCity}
          >SEARCH</button>
        </form>
      </div>
      <div id="full-forecast">
        {/* add weather forecast based on search, using weather component to build each card for the 7 days */}
        {forecast && <Weather forecast={forecast} />}
      </div>
    </div>
  );
}

export default Body;