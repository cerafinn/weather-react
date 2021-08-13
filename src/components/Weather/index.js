// weather component, will generate the weather for each day based on the city searched and post to the body

import React from 'react';
import WeekForecast from '../WeekForecast';
import CurrentForecast from '../currentForecast';

function Weather({ forecast }) {
  return(
    <div>
      <CurrentForecast forecast={forecast.currentForecast} />
      <WeekForecast className="d-flex flex-row" forecast={forecast.weekForecast} />
    </div>
  )
}

export default Weather;