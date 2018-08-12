const API_KEY = process.env.API_KEY;
const base = 'https://api.openweathermap.org/data/2.5/';
const units = '&units=imperial';

function fetchCurrentWeather(zipcode) {
  const url = `${base}weather?zip=${zipcode}&appid=${API_KEY}${units}`;
  return fetch(url)
    .then(results => results.json())
    .then(data => data);
}

function fetchForecast(zipcode) {
  const url = `${base}forecast?zip=${zipcode}&appid=${API_KEY}${units}`;
  return fetch(url)
    .then(results => results.json())
    .then(data => data);
}

module.exports = {
  fetchCurrentWeather,
  fetchForecast
};
