import moment from 'moment';

function formatDate(data) {
  const date = new Date(data*1000);
  const momentDate = (moment(date).format('L'));
  console.log(momentDate);
  return momentDate;
};

function formatTemp(data) {
  const tempCelsius = (data - 273.15).toFixed(2)
  return tempCelsius;
};

export const currentWeatherForecast = data => ({
  date: formatDate(data.current.dt),
  icon: data.current.weather[0].icon,
  description: data.current.weather[0].description,
  currentTemp: formatTemp(data.current.temp),
  minTemp: formatTemp(data.daily[0].temp.min),
  maxTemp: formatTemp(data.daily[0].temp.max),
  windSpeed: data.current.wind_speed,
  precipitation: formatTemp(data.daily[0].pop),
  humidity: data.current.humidity
});

export const sevenDayForecast = data => data.map(day => ({
  date: formatDate(data.daily.dt),
  icon: data.daily.weather[0].icon,
  description: data.daily.weather[0].description,
  minTemp: formatTemp(data.daily.temp.min),
  maxTemp: formatTemp(data.daily.temp.max),
  precipitation: formatTemp(data.daily.pop),
  humidity: data.current.humidity
}));