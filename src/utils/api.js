const API_KEY = 'd36573720cdb6bb65544e6d7befac4e1';
// Alternative API_KEY: '42aac2ae36b877bcd46121292358b97f'
const base = 'https://api.openweathermap.org/data/2.5/';
const units = '&units=imperial';

function fetchCurrentWeather(zipcode) {
    const url = `${base}weather?zip=${zipcode}&appid=${API_KEY}${units}`;
    return (fetch(url)
    .then((results) => results.json())
    .then((data) => data)) 
}

function fetchForecast(zipcode) {
    const url = `${base}forecast?zip=${zipcode}&appid=${API_KEY}${units}`;
    return (fetch(url)
    .then((results) => results.json())
    .then((data) => data)) 
}

module.exports = {
    fetchCurrentWeather,
    fetchForecast
}