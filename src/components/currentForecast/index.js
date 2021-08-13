import React from 'react';

function CurrentForecast({ forecast }) {
  const { date, icon, description, currentTemp, minTemp, maxTemp, windSpeed, precipitation, humidity } = forecast;

  return (
    <div className="card justify-content-around">
    <div className="card-body">
      <h5 className="card-title"><strong>{date}</strong></h5>
      <p><strong>Conditions:</strong> <img src={icon} alt="forecast" /> {description}</p>
      <p><strong>Current temperature:</strong> {currentTemp}</p>
      <p><strong>Minimum temperature:</strong> {minTemp}</p>
      <p><strong>Maximum temperature:</strong> {maxTemp}</p>
      <p><strong>Wind Speed:</strong> {windSpeed}</p>
      <p><strong>Precipitation:</strong> {precipitation}</p>
      <p><strong>Humidity:</strong> {humidity}</p>
    </div>
  </div>
)};

export default CurrentForecast;