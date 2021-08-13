import React from 'react';

function WeekForecast({ forecast }) {
  return(
    <div>
      {forecast.map(daily => (
        <div className="card col-md-3">
          <div className="card-body">
            <h5 className="card-title"><strong>{daily.date}</strong></h5>
            <p><strong>Conditions:</strong> <img src={daily.icon} alt="forecast" key={"forecast-" + daily.date} /> {daily.description}</p>
            <p><strong>Minimum temperature:</strong> {daily.minTemp}</p>
            <p><strong>Maximum temperature:</strong> {daily.maxTemp}</p>
            <p><strong>Precipitation:</strong> {daily.precipitation}</p>
            <p><strong>Humidity:</strong> {daily.humidity}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default WeekForecast;