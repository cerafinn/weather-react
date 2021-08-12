// weather component, will generate the weather for each day based on the city searched and post to the body

import React from 'react';

function Weather({ forecast }) {
  const { date, description, currentTemp, minTemp, maxTemp, windSpeed, precipitation, humidity } = forecast;

  return(
    <div className="card col-md-3">
      <div className="card-body">
        <h5 className="card-title"><strong>{date}</strong></h5>
        <p><strong>Conditions:</strong> <img src="" alt="forecast" className="project-img" key="forecast" /> {description}</p>
        <p><strong>Current temperature:</strong> {currentTemp}</p>
        <p><strong>Minimum temperature:</strong> {minTemp}</p>
        <p><strong>Maximum temperature:</strong> {maxTemp}</p>
        <p><strong>Wind Speed:</strong> {windSpeed}</p>
        <p><strong>Precipitation:</strong> {precipitation}</p>
        <p><strong>Humidity:</strong> {humidity}</p>
      </div>
    </div>
  )
}

export default Weather;