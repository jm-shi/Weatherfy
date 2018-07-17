var React = require('react');
var Weather = require('./TodayWeather');
var Header = require('./Header');
var api = require('../utils/api');

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currWeatherData: null,
            forecastData: null,
            isLoadingCurrWeatherData: true,
            isLoadingForecastData: true
        }
        this.updateData = this.updateData.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount() {
        var zipcode = this.props.location.zipcode;
        this.updateData(zipcode);

    }

    updateData(zipcode) {
        var zipcode = this.props.location.zipcode || 92092;
        api.fetchCurrentWeather(zipcode).then(function(data) {
            console.log('weather', data);
            this.setState(function() {
                return {
                    currWeatherData: data,
                    isLoadingCurrWeatherData: false
                }
            })
        }.bind(this));
        
        api.fetchForecast(zipcode).then(function(data) {
            console.log('forecast', data);
            this.setState(function() {
                return {
                    forecastData: data,
                    isLoadingForecastData: false
                }
            })
        }.bind(this))
    }

    getWeather() {
        var currWeatherData = this.state.currWeatherData;

        var data = {
            name: '',
            temp: '',
            temp_max: '',
            temp_min: '',
            humiditiy: '',
            description: '',
        }

        if (currWeatherData !== null) {
            data.name = currWeatherData.name;
            data.temp = currWeatherData.main.temp + '°F';
            data.temp_max = currWeatherData.main.temp_max + '°F';
            data.temp_min = currWeatherData.main.temp_min + '°F';
            data.humiditiy = currWeatherData.main.humidity + '%';
            data.description = this.capitalize(currWeatherData.weather[0].description);
            console.log("testing:",data);
        }
    }

    capitalize(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.replace(word[0], word[0].toUpperCase());
          }).join(' ');
    }

    render() {
        return (
            <div className='forecastContainer'>
                <Header />

                {(this.state.isLoadingCurrWeatherData && this.state.isLoadingForecastData)
                ? <p>Loading...</p>
                : <div>
                    <p>{this.getWeather()}</p><Weather data={this.state.currWeatherData} />
                  </div> }

            </div>
        );
    }
}

module.exports = Forecast;