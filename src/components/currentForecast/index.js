import React from 'react';

function CurrentForecast({ forecast }) {
  return (
    <div className="card justify-content-center current-weather">
    <div className="card-body">
      <h4 className="card-title"><strong>{forecast.date}</strong> <img src={forecast.icon} alt="forecast" /></h4>
      <p><strong>Conditions:</strong> {forecast.description}</p>
      <p><strong>Current temperature:</strong> {forecast.currentTemp} °C</p>
      <p><strong>Minimum temperature:</strong> {forecast.minTemp} °C</p>
      <p><strong>Maximum temperature:</strong> {forecast.maxTemp} °C</p>
      <p><strong>Wind Speed:</strong> {forecast.windSpeed} m/s</p>
      <p><strong>Precipitation:</strong> {forecast.precipitation}</p>
      <p><strong>Humidity:</strong> {forecast.humidity} %</p>
    </div>
  </div>
)};

export default CurrentForecast;