import React from 'react';

function WeekForecast(forecast) {
  const { date, icon, description, minTemp, maxTemp, precipitation, humidity } = forecast.weekForecast;

  return(
    <div className="card col-md-3">
      <div className="card-body">
        <h5 className="card-title"><strong>{date}</strong></h5>
        <p><strong>Conditions:</strong> <img src={icon.default} alt="forecast" /> {description}</p>
        <p><strong>Minimum temperature:</strong> {minTemp}</p>
        <p><strong>Maximum temperature:</strong> {maxTemp}</p>
        <p><strong>Precipitation:</strong> {precipitation}</p>
        <p><strong>Humidity:</strong> {humidity}</p>
      </div>
    </div>
  )
};

export default WeekForecast;