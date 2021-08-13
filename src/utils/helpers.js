import moment from 'moment';

function formatDate(data) {
  const date = new Date(data.dt*1000);
  const momentDate = (moment(date).format('L'));
  return momentDate;
};

function formatTemp(data) {
  const tempCelsius = (data - 273.15).toFixed(2)
  return tempCelsius;
};