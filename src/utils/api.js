var API_KEY = 'd36573720cdb6bb65544e6d7befac4e1';
// Alternative API_KEY: '42aac2ae36b877bcd46121292358b97f'
var base = 'http://api.openweathermap.org/data/2.5/';
var units = '&units=imperial';

function fetchCurrentWeather(zipcode) {
    var url = base + 'weather?zip=' + zipcode + '&appid=' + API_KEY + units;
    return (
    fetch(url)
    .then(function(results) {
        return results.json();
    }).then(function(data) {
        //console.log(data);
        return data;
    })); 
}

function fetchForecast(zipcode) {
    var url = base + 'forecast?zip=' + zipcode + '&appid=' + API_KEY + units;
    return (
        fetch(url)
    .then(function(results) {
        return results.json();
    }).then(function(data) {
        //console.log(data);
        return data;
    }));   
}

module.exports = {
    fetchCurrentWeather: fetchCurrentWeather,
    fetchForecast: fetchForecast
}