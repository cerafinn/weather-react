import React from 'react';

function CurrentForecast({ forecast }) {
  return (
    <div className="card justify-content-center current-weather">
    <div className="card-body">
      <h4 className="card-title"><strong>{forecast.date}</strong> <img src={forecast.icon} alt="forecast" /></h4>
      <p><strong>Conditions:</strong> {forecast.description}</p>
      <p><strong>Current temperature:</strong> {forecast.currentTemp}</p>
      <p><strong>Minimum temperature:</strong> {forecast.minTemp}</p>
      <p><strong>Maximum temperature:</strong> {forecast.maxTemp}</p>
      <p><strong>Wind Speed:</strong> {forecast.windSpeed}</p>
      <p><strong>Precipitation:</strong> {forecast.precipitation}</p>
      <p><strong>Humidity:</strong> {forecast.humidity}</p>
    </div>
  </div>
)};

export default CurrentForecast;