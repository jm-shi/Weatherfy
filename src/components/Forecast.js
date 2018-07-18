var React = require('react');
var Navbar = require('./Navbar');
var Today = require('./Today');
var FiveDay = require('./FiveDay');
var api = require('../utils/api');

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currWeatherData: null,
            forecastData: null,
            isLoadingCurrWeatherData: true,
            isLoadingForecastData: true,
            showTodayWeather: true
        }
        this.updateData = this.updateData.bind(this);
        this.setToday = this.setToday.bind(this);
        this.setFiveDay = this.setFiveDay.bind(this);
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

    setToday() {
        this.setState(function() {
            return {
                showTodayWeather: true
            }
        })
    }

    setFiveDay() {
        this.setState(function() {
            return {
                showTodayWeather: false
            }
        })
    }

    render() {
        return (
            <div style={{ 'color': 'rgb(255,255,255)' }}>
                <Navbar />
                
                <div className='nav'>
                    <button className={'button ' + (this.state.showTodayWeather ? 'active' : '')} onClick={this.setToday}>
                        Today
                    </button>
                    <button className={'button ' + (this.state.showTodayWeather ? '' : 'active')} onClick={this.setFiveDay}>
                        5-Day
                    </button>
                </div>

                {(this.state.isLoadingCurrWeatherData && this.state.isLoadingForecastData)
                ? <p>Loading...</p>
                : (this.state.showTodayWeather)
                ? <div className='weatherData'>
                    <Today data={this.state.currWeatherData} />
                  </div> 
                : <div className='weatherData'>
                    <FiveDay data={this.state.forecastData}/>
                </div>}

            </div>
        );
    }
}

module.exports = Forecast;