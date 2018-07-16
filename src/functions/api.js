var API_KEY = 'f3cbbe2a0f24bfb9df32da4e157f57d7';
var base = 'http://api.openweathermap.org/data/2.5/';
var units = '&units=imperial';

function fetchCurrentWeather(zipcode) {
    var url = base + 'weather?zip=' + zipcode + '&appid=' + API_KEY + units;
    fetch(url)
    .then(function(results) {
        return results.json();
    }).then(function(data) {
        console.log(data);
    })   
}

function fetchForecast(zipcode) {
    var url = base + 'forecast?zip=' + zipcode + '&appid=' + API_KEY + units;
    fetch(url)
    .then(function(results) {
        return results.json();
    }).then(function(data) {
        console.log(data);
    })   
}

module.exports = {
    fetchCurrentWeather: fetchCurrentWeather,
    fetchForecast: fetchForecast
}