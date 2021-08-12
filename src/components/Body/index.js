// container to display the weather for the city searched, pass down props from header to the weather component

import React, { useState } from 'react';
import Weather from '../Weather';

function Body() {
  // using hard coded weather information to view frontend

  const [forecast] = useState([
    {
      date: "08/12/2021",
      description: "heatwave",
      currentTemp: "38 C",
      minTemp: "20 C",
      maxTemp: "40 C",
      windSpeed: "20km/hr",
      precipitation: "40%",
      humidity: "52"
    },
    {
      date: "08/13/2021",
      description: "heatwave day 2",
      currentTemp: "37 C",
      minTemp: "22 C",
      maxTemp: "41 C",
      windSpeed: "10km/hr",
      precipitation: "30%",
      humidity: "50"
    }
])

const [ currentCity, setCurrentCity ] = useState('');

  // build axios call to get information from open weather api

  function searchCity(event) {
    event.preventDefault();

    if (!currentCity || currentCity === '') {
      console.log("error");
    }
    console.log(currentCity);
  }

  return (
    <div>
      <form onSubmit={searchCity}>
        <input
          type="text"
          className=""
          placeholder="Enter City Name"
          id="city-name"
          value={currentCity}
          onChange={(event => setCurrentCity(event.target.value))}
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={searchCity}
        >Search</button>
      </form>

      <div>
      {/* add weather forecast based on search, using weather component to build each card for the 7 days */}
        <div className="flex-row">
          {forecast.map((forecast, idx) => (
            <Weather
              forecast={forecast}
              key={"day" + idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;