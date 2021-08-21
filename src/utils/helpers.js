import moment from 'moment';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function formatDate(data) {
  const date = new Date(data*1000);
  const momentDate = (moment(date).format('L'));
  return momentDate;
};

function formatTemp(data) {
  const tempCelsius = (data - 273.15).toFixed(2)
  return tempCelsius;
};

// function formatProbability(data) {
//   const probability = (data * 100).toFixed(2)
//   return probability;
// };

export const currentWeatherForecast = data => ({
  date: formatDate(data.current.dt),
  icon: 'https://openweathermap.org/img/wn/' + data.current.weather[0].icon + '@2x.png',
  description: data.current.weather[0].description,
  currentTemp: formatTemp(data.current.temp),
  minTemp: formatTemp(data.daily[0].temp.min),
  maxTemp: formatTemp(data.daily[0].temp.max),
  windSpeed: data.current.wind_speed,
  precipitation: data.daily[0].pop,
  humidity: data.current.humidity
});

export const sevenDayForecast = data => data.daily.slice(1).map((data) => ({
  date: formatDate(data.dt),
  icon: 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png',
  description: data.weather[0].description,
  minTemp: formatTemp(data.temp.min),
  maxTemp: formatTemp(data.temp.max),
  precipitation: data.pop,
  humidity: data.humidity
}));