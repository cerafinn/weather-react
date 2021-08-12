// weather component, will generate the weather for each day based on the city searched and post to the body

import React from 'react';

function Weather() {
  return(
    <div>
      {/* {forecast.map((daily) => ( */}
            <div className="card">
              <div className="card-body">
              <h5 className="card-title"><strong>date</strong></h5>
              <p><strong>Conditions:</strong> <img src="" alt="forecast" className="project-img" key="forecast" /></p>
              <p><strong>Current temperature:</strong> temp</p>
              <p><strong>Minimum temperature:</strong> min temp</p>
              <p><strong>Maximum temperature:</strong> max temp</p>
              <p><strong>Wind Speed:</strong> speed</p>
              <p><strong>Precipitation:</strong> percentage</p>
              <p><strong>Humidity:</strong> humidity</p>
            </div>
            </div>
          {/* ))} */}
    </div>
  )
}

export default Weather;